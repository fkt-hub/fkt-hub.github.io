import Routes from '../../enums/Routes';
import Link from '../common/Link';
import styles from './Header.module.scss';

export default function Header() {
    return (
        <header className={styles.Main}>
            <div className={styles.Navbar}>
                <Link href={Routes.HOME}>
                    <h1 className={styles.Header}>Fansub Kalite Topluluğu</h1>
                </Link>
                <nav className={styles.Navigation}>
                    <Link href={Routes.TRANSLATION}>
                        Çeviri
                    </Link>
                    <Link href={Routes.TYPESETTING}>
                        Dizgi
                    </Link>
                </nav>
            </div>
        </header>
    )
}