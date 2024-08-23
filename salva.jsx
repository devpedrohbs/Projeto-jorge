function Login(){
    return(
        <div className={styles.container}>
            <div className={styles.containerlogin}>
                <div className= {styles.wraplogin}>
                    <form className= {styles.loginform}>
                        <span className={styles.loginformtitle}>
                            Bem vindo!
                        </span>

                        <div className= {styles.wrapinput}>
                            <input type="email" />
                            <span className= {styles.focusinput} data-placeholder="Email"></span>
                        </div>

                        <div className= {styles.wrapinput}>
                            <input type="password" />
                            <span className= {styles.focusinput} data-placeholder="Passworld"></span>
                        </div>

                        <div className={styles.contaierloginformbtn}>
                            <button className={styles.loginformbtn}>
                                Login
                            </button>
                        </div>

                        <div className={styles.textcenter}>
                            <span className={styles.txt1}>Ainda não tem uma conta?</span>
                            <a className={styles.txt2} href="#">Criar conta.</a>
                        </div>

                    </form>
                </div>
            </div>
    </div>
    )
}

export default Login