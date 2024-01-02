import styles from "./Header.module.css";
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <Link to="/">Home</Link>
                </ul>
            </nav>
        </header>
    );
};