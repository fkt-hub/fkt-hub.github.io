import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.Footer}>
            <div className={styles.Inner}>
                <h2>FKT &copy; {new Date().getFullYear()}</h2>
            </div>
        </footer>
    )
}