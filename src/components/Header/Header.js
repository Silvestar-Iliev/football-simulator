import styles from "./Header.module.css";
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <Link to="/">HomePage</Link>
                    <Link to="/competition">Competition</Link>
                    <Link to="/about">About us</Link>
                </ul>
            </nav>
        </header>
    );
};