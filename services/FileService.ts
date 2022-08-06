import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import FileTypes from "../enums/FileTypes";
import Document, { DocumentWithSlug } from '../types/Document';
import { format, parse } from 'date-fns';

const fsPromises = fs.promises;

class FileService {
    private type: FileTypes;

    constructor(type: FileTypes) {
        this.type = type;
    }

    public buildPath(suffixPath = "", excludeParent = false) {
        return path.join(excludeParent ? "/" : process.cwd(), excludeParent ? "" : "public", "docs", this.type, suffixPath)
    }

    public async getSlugs() {
        const paths = await fsPromises.readdir(this.buildPath());
        const files = paths.filter(path => !fs.lstatSync(this.buildPath(path)).isDirectory() && path !== ".gitkeep").map(path => path.replace('.md', ''))
        
        return files;
    }

    public async getFiles(): Promise<DocumentWithSlug[]> {
        const slugs = await this.getSlugs();
        const documents = await Promise.all(slugs.map(async slug => {
            return {
                document: await this.getFileContent(slug),
                slug: slug
            }
        }))
        return documents.sort((a, b) => {
            return this.parseReleaseDate(a.document.release_date).getTime() - this.parseReleaseDate(b.document.release_date).getTime()
        })
    }

    public async getFileContent(slug: string): Promise<Document> {
        const file = await fsPromises.readFile(path.join(this.buildPath(), `${slug}.md`))

        const document = matter(file);

        return {
            title: document.data.title,
            release_date: document.data.release_date,
            content: document.content,
            header_image: path.join(this.buildPath(undefined, true), document.data.header_image).replaceAll('\\', '/')
        }
    }

    public parseReleaseDate(release_date: string): Date {
        return parse(release_date, 'dd.MM.yyyy', new Date())
    }
}

export default FileService; 