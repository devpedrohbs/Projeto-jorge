import { useState } from "react";
import { Link } from 'react-router-dom';
import styles from "./styles.module.css";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className={styles.container}>
            <div className={styles.containerlogin}>
                <div className={styles.wraplogin}>
                    <form className={styles.loginform}>
                        <span className={styles.loginformtitle}>
                            Bem vindo!
                        </span>

                        <div className={styles.wrapinput}>
                            <input
                                className={username !== "" ? styles.hasval : styles.input}
                                type="text"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                                placeholder=" "
                            />
                            <span className={styles.focusinput} data-placeholder="Nome de usuário"></span>
                        </div>

                        <div className={styles.wrapinput}>
                            <input
                                className={password !== "" ? styles.hasval : styles.input}
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                placeholder=" "
                            />
                            <span className={styles.focusinput} data-placeholder="Senha"></span>
                        </div>

                        <div className={styles.contaierloginformbtn}>
                            <Link to="/Inicial" className={styles.loginformbtn}>
                                Login
                            </Link>
                        </div>

                        <div className={styles.textcenter}>
                            <span className={styles.txt1}>Ainda não tem uma conta?</span>
                            <Link className={styles.txt2} to="/criar">Criar conta.</Link>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
