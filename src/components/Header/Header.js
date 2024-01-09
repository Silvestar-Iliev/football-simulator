import styles from "./Header.module.css";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className={styles["header"]}>
            <nav className={styles["navigation"]}>
                <ul>
                    <Link className={styles["header-nav-li"]} to="/">Home</Link>
                    <Link className={styles["header-nav-li"]} to="/game">Game</Link>
                    <Link className={styles["header-nav-li"]} to="/about">About us</Link>
                </ul>
            </nav>
        </header>
    );
};

export default Header;