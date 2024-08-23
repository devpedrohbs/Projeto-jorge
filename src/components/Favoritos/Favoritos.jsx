import BarraDeNavegacao from "../BarraDeNavegacao/BarraDeNavegacao"
import styles from "./Favoritos.module.css"
import Livrosfav from "./Livrosfav/Livrosfav"

function Favoritos(){
    return(
        <div>
            <BarraDeNavegacao/>
            <div className={styles.container}>
                <div className={styles.tittlefav}>
                    <h1>Meus livros favortitos</h1>
                </div>
                <div className={styles.containerlivrosav}>
                     <Livrosfav/>
                     <Livrosfav/>
                     <Livrosfav/>

                </div>
            </div>
        </div>
    )
}

export default Favoritos