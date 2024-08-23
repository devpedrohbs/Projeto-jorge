import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styles from "./Usuario.module.css";
import BarraDeNavegacao from "../BarraDeNavegacao/BarraDeNavegacao";

function Usuario() {
    const [bio, setBio] = useState("");

    const handleBioChange = (e) => {
        setBio(e.target.value);
    };

    return (
        <div>
            <BarraDeNavegacao/>
            <div className={styles.container}>
            <div className={styles.userInfo}>
                <img 
                    src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTOP-OCz03l6XMDOJBwsXdtiYXxXUtSZewKRtSmD1Xb0wgoWB4S" 
                    alt="imagem do usuario" 
                    className={styles.userImage}
                />
                <div className={styles.userdata}>
                    <h1>Meus dados!</h1>
                    <div>
                        <p>Primeiro nome: </p>
                        <p>Último nome: </p>
                        <p>Nome de usuário nome: </p>
                        <p>Cpf: </p>
                        <p>Número de telefone: </p>

                    </div>
                        
                </div>
            </div>
            <div className={styles.userbio}>
                <h1>Minha bio</h1>
                <p>Bio</p>
            </div>
            <div>
                <Link to="/Inicial" className={styles.updatebtn}>
                    Atualizar dado
                </Link>
            </div>
        </div>
        </div>
        
    );
}

export default Usuario;
