import { PropsWithChildren } from "react";
import styles from './Wrapper.module.scss';
import Footer from "../Footer";
import Header from "../Header";

export default function Wrapper(props: WrapperProps) {
    const {children} = props

    return(
        <>
        <Header />
        <section className={styles.MainContent}>
            { children }
        </section>
        <Footer />
        </>
    )
}

interface WrapperProps extends PropsWithChildren<any> {}