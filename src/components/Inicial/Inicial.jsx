import { Link } from 'react-router-dom';
import BarraDeNavegacao from "../BarraDeNavegacao/BarraDeNavegacao";
import styles from "./Inicial.module.css"
import Recomendacao from '../Recomendacao/Recomendacao';
import Card from '../Card/Card';

function Inicial(){
    return(
        <div className={styles.container}>
            <BarraDeNavegacao/>
            
            <Recomendacao/>
            <div className={styles.cardsContainer}>
                <Card/>
                <Card/>
                <Card/>
            </div>


        </div>
    )
}

export default Inicial