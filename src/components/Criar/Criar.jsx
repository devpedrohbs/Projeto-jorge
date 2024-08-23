import { useState } from "react";
import { Link } from 'react-router-dom';
import styles from "./Criar.module.css";

function Criar() {

    const [primeiroNome, setPrimeiroNome] = useState("");
    const [ultimoNome, setUltimoNome] = useState("");
    const [nomeUsuario, setNomeUsuario] = useState("");
    const [cpf, setCpf] = useState("");
    const [telefone, setTelefone] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <div className={styles.container}>
            <div className={styles.containerCriar}>
                <div className={styles.wrapCriar}>
                    <form className={styles.CriarForm}>
                        <span className={styles.CriarFormTitle}>
                            Criar Conta
                        </span>

                        <div className={styles.wrapInput}>
                            <input
                                className={primeiroNome !== "" ? styles.hasVal : styles.input}
                                type="text"
                                value={primeiroNome}
                                onChange={e => setPrimeiroNome(e.target.value)}
                                placeholder=" "
                            />
                            <span className={styles.focusInput} data-placeholder="Primeiro nome"></span>
                        </div>

                        <div className={styles.wrapInput}>
                            <input
                                className={ultimoNome !== "" ? styles.hasVal : styles.input}
                                type="text"
                                value={ultimoNome}
                                onChange={e => setUltimoNome(e.target.value)}
                                placeholder=" "
                            />
                            <span className={styles.focusInput} data-placeholder="Último nome"></span>
                        </div>

                        <div className={styles.wrapInput}>
                            <input
                                className={nomeUsuario !== "" ? styles.hasVal : styles.input}
                                type="text"
                                value={nomeUsuario}
                                onChange={e => setNomeUsuario(e.target.value)}
                                placeholder=" "
                            />
                            <span className={styles.focusInput} data-placeholder="Nome de usuário"></span>
                        </div>

                        <div className={styles.wrapInput}>
                            <input
                                className={cpf !== "" ? styles.hasVal : styles.input}
                                type="text"
                                value={cpf}
                                onChange={e => setCpf(e.target.value)}
                                placeholder=" "
                            />
                            <span className={styles.focusInput} data-placeholder="CPF"></span>
                        </div>

                        <div className={styles.wrapInput}>
                            <input
                                className={telefone !== "" ? styles.hasVal : styles.input}
                                type="text"
                                value={telefone}
                                onChange={e => setTelefone(e.target.value)}
                                placeholder=" "
                            />
                            <span className={styles.focusInput} data-placeholder="Número de telefone"></span>
                        </div>

                        <div className={styles.wrapInput}>
                            <input
                                className={senha !== "" ? styles.hasVal : styles.input}
                                type="password"
                                value={senha}
                                onChange={e => setSenha(e.target.value)}
                                placeholder=" "
                            />
                            <span className={styles.focusInput} data-placeholder="Senha"></span>
                        </div>

                        <div className={styles.containerCriarFormBtn}>
                            <button className={styles.CriarFormBtn}>
                                Criar Conta
                            </button>
                        </div>

                        <div className={styles.textCenter}>
                            <span className={styles.txt1}>Já tem uma conta?</span>
                            <Link className={styles.txt2} to="/">Login</Link>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default Criar;
