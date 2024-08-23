import styles from "./Livrosfav.module.css";

function Livrosfav() {
    return (
        <div className={styles.container}>
            <img 
                src="https://i.pinimg.com/originals/ba/94/64/ba9464145eba8762f6286a3c8387c951.jpg" 
                alt="Capa do livro" 
                className={styles.poster}
            />
            <div className={styles.textContainer}>
                <div className={styles.tittle}>
                    <h1>Título do livro</h1>
                </div>
                <div className={styles.text}>
                    <p>Explicação do livro</p>
                </div>
            </div>
        </div>
    );
}

export default Livrosfav;
