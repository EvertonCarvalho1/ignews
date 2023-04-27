import Link from 'next/link';
import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="ig.news" />
                <nav>
                    <Link className={styles.active} href='/'>
                        Home
                    </Link>

                    <Link href='posts' prefetch>
                        Posts
                    </Link>
                </nav>
                <SignInButton />
            </div>
        </header>
    )
}