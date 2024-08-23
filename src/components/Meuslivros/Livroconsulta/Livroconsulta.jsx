import styles from "./Livroconsulta.module.css";
import { Link } from 'react-router-dom';

function Livroconsulta() {
    return (
        <Link to="" className={styles.container}>
            <div className={styles.line1}>
                <div className={styles.tiitleline1}>
                    <h1>Título do livro</h1>
                </div>
                <div className={styles.imgline1}>
                    <img src="https://i.pinimg.com/originals/ba/94/64/ba9464145eba8762f6286a3c8387c951.jpg" alt="Capa do livro" />
                </div>
            </div>

            <div className={styles.line2}>
                <div className={styles.progress}>
                    <div className={styles.progressBar}>
                        <div className={styles.progressFill}></div>
                    </div>
                    <span className={styles.progressText}>70%</span>
                </div>
                <div className={styles.rating}>
                    9/10
                </div>
            </div>
        </Link>
    );
}

export default Livroconsulta;
