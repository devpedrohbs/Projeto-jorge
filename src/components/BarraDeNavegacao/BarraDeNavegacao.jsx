import { Link } from 'react-router-dom';
import styles from './BarraDeNavegacao.module.css';

function BarraDeNavegacao() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <Link className={styles.navLink} to="/meuslivros">Meus Livro</Link>
                </li>
                <li className={styles.navItem}>
                    <Link className={styles.navLink} to="/favoritos">Favoritos</Link>
                </li>
                {/* <li className={styles.navItem}>
                    <Link className={styles.navLink} to="/meus-progressos">Meus progressos</Link>
                </li> */}

                <li className={styles.navItem}>
                    <Link className={styles.navLink} to="/usuario">Usuário</Link>
                </li>
            </ul>
        </nav>
    );
}

export default BarraDeNavegacao;