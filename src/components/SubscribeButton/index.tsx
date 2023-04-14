import styles from './styles.module.scss';

export function SubscribeButton() {
    const isUserLoggedIn = false;

    return (
        <button
            type='button'
            className={styles.subscribeButton}
        >
            Subscribe Now
        </button>
    )
}