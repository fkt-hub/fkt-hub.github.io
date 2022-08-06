import Link from "next/link";
import { PropsWithChildren, ReactNode } from "react";
import { IoMdLink } from 'react-icons/io';
import styles from '../../../styles/MarkdownComponents.module.scss';

const Heading: React.FC<any> = (props: HeadingProps) => {
    const { children, level } = props;
    switch (level) {
        case 1:
            return <h1>{children}</h1>;
        case 2:
            return <h2>{children}</h2>;
        case 3:
            return <h3>{children}</h3>;
        case 4:
            return <h4>{children}</h4>
        case 5:
            return <h5>{children}</h5>
        default:
            return <h6>{children}</h6>;
    }
}

const AnchorLinks: React.FC<any> = (props: AnchorLinksProps) => {
    const { children, level } = props;

    // Access actual (string) value of heading
    const heading = children[0].props?.value || children[0];

    // If we have a heading, make it lower case
    let anchor = typeof heading === 'string' ? heading.toLowerCase() : '';

    // Clean anchor (replace special characters whitespaces).
    // Alternatively, use encodeURIComponent() if you don't care about
    // pretty anchor links
    anchor = anchor.replace(/[^a-zA-Z0-9 ]/g, '');
    anchor = anchor.replace(/ /g, '-');

    function handleAnchorClick() {
        window.location.hash = '';
        window.location.hash = anchor;
    }

    return (
        <>
            <div id={anchor} />
            <div className={`${styles.AnchorLink} ${styles[getStyleForHeading(level)]}`}>
                <Heading level={level}>{children}</Heading>
                <div className={styles.Button} onClick={handleAnchorClick}>
                    <IoMdLink />
                </div>
            </div>
        </>
    )
};

function getStyleForHeading(level: number) {
    let className = "Heading";
    return className + level;
}

interface AnchorLinksProps extends PropsWithChildren<any> {
    id: string,
    className: string,
    level: number,
    node: ReactNode
};

interface HeadingProps extends PropsWithChildren<any> {
    level: number,
    anchor: string
}

export default AnchorLinks;