import { PropsWithChildren } from "react";
import ReactMarkdown from "react-markdown"
import remarkGfm from 'remark-gfm'

const remarkPlugins = [
    remarkGfm
]


export default function Markdown(props: MarkdownProps) {
    const { children } = props;

    return(
        <ReactMarkdown remarkPlugins={remarkPlugins}>
            {children}
        </ReactMarkdown>
    )

}

interface MarkdownProps extends PropsWithChildren<any> {}