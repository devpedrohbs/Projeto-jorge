// import styles from "./Recomendacao.module.css"

// function Recomendacao(){
//     return(
//         <div className={styles.container}>
//             <div className={styles.leftcolun}>
//                 <h1>Recomendação da semana</h1>
//             </div>
//             <div className={styles.centercolun}>
//                 <img src="" alt="imagem do livro escolhido" />  
//             </div>
            
//             <div className={styles.rightcolun}>
//                 <h2>Nome do livro</h2>
//                 <p>
//                     Toda a descrição do livro blablablalba <br />balablablabal
//                 </p>
//             </div>
//         </div>
//     )
// }

// export default Recomendacao

import styles from "./Recomendacao.module.css"

function Recomendacao() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.leftcolun}>
                    <h1>Recomendação da semana</h1>
                </div>
                <div className={styles.centercolun}>
                    <img src="https://editoraflutuante.com.br/wp-content/uploads/2018/08/Quarta-Capa-Frente-1.jpg" alt="imagem do livro escolhido" />
                </div>
                <div className={styles.rightcolun}>
                    <h2>Nome do livro</h2>
                    <p>
                        Toda a descrição do livro blablablalba d<br />balablablabal
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Recomendacao
