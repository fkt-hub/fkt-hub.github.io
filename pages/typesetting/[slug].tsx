import { GetStaticPathsResult, GetStaticPropsResult } from "next";
import Image from 'next/image'
import Markdown from "../../components/Markdown";
import Wrapper from "../../components/Wrapper";
import FileTypes from "../../enums/FileTypes";
import FileService from "../../services/FileService";
import Document from "../../types/Document";
import Params from "../../types/Params";
import styles from '../../styles/Document.module.scss';

const fileService = new FileService(FileTypes.TYPESETTING)

export default function TypeSettingDetailPage(props: TypeSettingDetailPageProps) {
    const { document } = props;
    return (
        <Wrapper>
            <div className={styles.Main}>
                {document.header_image ? 
                        <div className={styles.HeaderImage}>
                            <h1 className={styles.Header}>
                                {document.title}
                            </h1>
                            <img alt={document.title} src={document.header_image} />
                        </div>
                    : ""}
                <div className={styles.ContentMain}>
                    <div className={styles.Content}>
                        <Markdown>
                            {document.content}
                        </Markdown>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export async function getStaticProps({ params }: Params): Promise<GetStaticPropsResult<any>> {
    const file = await fileService.getFileContent(params.slug);

    return {
        props: {
            document: file
        }
    }
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
    const slugs = await fileService.getSlugs()

    return {
        paths: slugs.map((slug) => {
            return {
                params: {
                    slug
                }
            }
        }),
        fallback: false
    }
}

interface TypeSettingDetailPageProps{
    document: Document
}