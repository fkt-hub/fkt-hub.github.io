import Image from "next/image";
import Link from "next/link";
import Routes from "../../enums/Routes";
import { DocumentWithSlug } from "../../types/Document";
import styles from './DocumentCard.module.scss';

const DocumentCard = (props: DocumentCardProps) => {
    const { document, slug, route } = props;
    return(
        <>
            <Link href={`${route}/${slug}`}>
                <div className={styles.Card}>
                    <div className={styles.HeaderImage}>
                        {document.header_image ? <img alt={document.title} src={document.header_image} /> : ""}
                    </div>
                    <div className={styles.CardContent}>
                        <h2 className={styles.Title}>{document.title}</h2>
                        <span>{document.release_date}</span>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default DocumentCard;

interface DocumentCardProps extends DocumentWithSlug {
    route: Routes
}
