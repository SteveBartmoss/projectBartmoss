import { DivArticle, DivCol, DivRow } from "../componentes/contenedores/contenedores";
import { Portada } from "../componentes/portada/portada";


export function MariaInstall() {


    return (
        <>
            <Portada imgPortada={"/Assets/steveA.png"} title={"Instalar mariaDB en ubuntu"} text={"Por Steve 29/05/2024"} />

            <DivRow>
                <DivCol>

                </DivCol>

                <DivCol>
                    <DivArticle>

                        <h1>Importante</h1>

                        <p>
                            Aunque en titulo especifica que se indica como instalar en ubunutu como
                            esta no es una distribucion base, el tutorial funciona para cualquier distribucion
                            basa en debian que es la distribucion base desde la que se creo ubuntu
                        </p>

                        <h2>Instalar mariaDB</h2>

                        <p>
                            Para instalar el gestor de base de datos basta con usar el siguiente comando
                        </p>

                        <p>
                            sudo apt install mariadb-server
                        </p>

                        <p>
                            Con esto tenemos instalado el paquete de mariaDB pero por si solo no solicita
                            una contraseña ni ninguna otra configuracion, asi que para realizar una instalacion
                            segura debemos usar el siguiete comando que activa un script para realizar una
                            instalacion segura
                        </p>

                        <h2>Configurar mariaDB</h2>

                        <p>
                            sudo mysql_secure_installation
                        </p>

                        <p>
                            Con esto iniciaremos el script de instalacion segura que continua con el siguiente mensaje
                        </p>

                        <p>
                            NOTE: RUNNING ALL PARTS OF THIS SCRIPT IS RECOMMENDED FOR ALL MariaDB
                            SERVERS IN PRODUCTION USE!  PLEASE READ EACH STEP CAREFULLY!

                            In order to log into MariaDB to secure it, we'll need the current
                            password for the root user. If you've just installed MariaDB, and
                            haven't set the root password yet, you should just press enter here.

                            Enter current password for root (enter for none):
                        </p>

                        <p>
                            Es mensaje nos indica que para inicar el proceso debemos ingresar la contraseña del 
                            usuario root de mariaDB pero que si solamente instalamos el paquete y no se agrego 
                            ninguna contraseña para root podemos simplemente dar enter para continuar. 
                        </p>

                        <p>
                            Como solo se instalo el paquete podemos dar enter y continuar con el script
                        </p>


                    </DivArticle>
                </DivCol>
            </DivRow>
        </>
    )
}