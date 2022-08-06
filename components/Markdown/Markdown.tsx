import { PropsWithChildren } from "react";
import ReactMarkdown from "react-markdown"
import remarkGfm from 'remark-gfm'
import AnchorLinks from './components/AnchorLinks'

const remarkPlugins = [
    remarkGfm
]

const renderers = {
    h1: AnchorLinks,
    h2: AnchorLinks,
    h3: AnchorLinks,
    h4: AnchorLinks,
    h5: AnchorLinks,
    h6: AnchorLinks
}


export default function Markdown(props: MarkdownProps) {
    const { children } = props;

    return(
        <ReactMarkdown remarkPlugins={remarkPlugins} components={renderers}>
            {children}
        </ReactMarkdown>
    )

}

interface MarkdownProps extends PropsWithChildren<any> {}