export default interface Document {
    title: string,
    release_date: string;
    header_image: string;
    content: string
}

export interface DocumentWithSlug {
    document: Document,
    slug: string
}