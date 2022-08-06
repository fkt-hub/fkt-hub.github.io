import { GetStaticPropsResult } from "next";
import Wrapper from "../../components/Wrapper";
import FileTypes from "../../enums/FileTypes";
import FileService from "../../services/FileService";
import { DocumentWithSlug } from "../../types/Document";
import Routes from "../../enums/Routes";
import styles from '../../styles/Document.module.scss';
import DocumentCard from "../../components/common/DocumentCard";

const fileService = new FileService(FileTypes.TYPESETTING)

export default function TypeSettingPage(props: TypeSettingPageProps) {
    const { documents } = props;
    return (
        <Wrapper>
            <div className={styles.ListMain}>
                {documents.length ?
                    documents.map(d => <DocumentCard key={d.slug} route={Routes.TYPESETTING} document={d.document} slug={d.slug} />)
                    :
                    <h2 className={styles.NoDocumentFound}>Uygun döküman bulunamadı.</h2>
                }
            </div>
        </Wrapper>
    )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<any>> {
    const files = await fileService.getFiles();

    return {
        props: {
            documents: files
        }
    }
}

interface TypeSettingPageProps {
    documents: DocumentWithSlug[]
}