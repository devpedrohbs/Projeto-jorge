import BarraDeNavegacao from "../BarraDeNavegacao/BarraDeNavegacao"
import { Link } from 'react-router-dom';
import styles from "./Meuslivros.module.css"
import Livroconsulta from "./Livroconsulta/Livroconsulta";

function Meuslivros(){
    return(
        <div>
            <BarraDeNavegacao/>
            <div className={styles.container}>
                <div className={styles.line1}>
                    <div className={styles.title}>
                        <h1>Meus livros</h1>
                    </div>

                    <div className={styles.containeraddbtn}>
                        <Link className={styles.addbtn} to="Adicionar">
                            Adicionar Livro
                        </Link>
                    </div>


                </div>
            </div>
            <Livroconsulta/>
        </div>
    )
}

export default Meuslivros