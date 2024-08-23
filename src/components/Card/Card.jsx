import styles from "./Card.module.css"

function Card(){
    return(
        <div className={styles.container}>
            
                <img className={styles.poster} src="https://i.pinimg.com/originals/ba/94/64/ba9464145eba8762f6286a3c8387c951.jpg"/>
            <div >
                <h1>Pôster: Star Wars (1977)</h1>
                <p>
                    Um pôster decorativo épico do filme Star Wars, com moldura de
                    MDF e tamanho A3. Uma ótima recordação de um dos mais icônicos
                    filmes de todos os tempos. Este clássico pôster trará aventura,
                    nostalgia e a magica de Star Wars para qualquer lugar que você
                    decidir pendurar. Não perca a chance de adicionar essa linda memó
                    ria ao seu acervo.
                </p>

            </div>

        </div>        
    )
}

export default Card