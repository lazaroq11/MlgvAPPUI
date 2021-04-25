import styles from './styles.module.scss';

import { VscAccount } from "react-icons/vsc";
import { MdLockOutline } from "react-icons/md";

export function Login(){

    return (
        <div className= {styles.login}>
           <div className={styles.loginLogo}>
               <img src = "/mlgv.png"/>   
               </div>
            
            <div className={styles.loginRight}>
                <div className={styles.inputUserLogin}>
                      <VscAccount/>
                      <input type="text" id="matricula" name="matricula" placeholder="Matrícula"/>
                </div>

                <div className={styles.inputPassLogin}>
                      <MdLockOutline/>
                      <input type="password" placeholder="Senha" />
                </div>

                <button type="submit" class ="botao" onclick="validar()">
                    Acessar
                </button>
            </div>

            <footer class="footerSi">Copyright©2021,MLGV. Todos os direitos reservados</footer>
        </div>
    );
}
    

