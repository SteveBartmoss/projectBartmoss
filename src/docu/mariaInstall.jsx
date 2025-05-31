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

                        <p>
                            OK, successfully used password, moving on...

                            Setting the root password or using the unix_socket ensures that nobody
                            can log into the MariaDB root user without the proper authorisation.

                            You already have your root account protected, so you can safely answer 'n'.

                            Switch to unix_socket authentication [Y/n]
                        </p>

                        <p>
                            Este mensaje puede parecer confuso pero en realidad es sencillo, normalmente para
                            iniciar sesion en el servidor debemos pasar el usuario root y una contraseña, (puede ser
                            tambien un usuario cualquiera) pero en el caso de linux tambien podemos iniciar sesion
                            desde el socket de linux, lo que nos permite iniciar sesion sin contraseña solo con el usuario
                            root del sistema o con sudo.
                        </p>

                        <p>
                            Si selecionamos y entonces configuramos que se puede iniciar sesion con root o sudo, algo que
                            personalmente no me agrada sobre todo cuando tengo que trabajar con un driver de conexion
                            para algun lenguaje de programacion, si selecionamos n entonces tendremos que configurar un usuario
                            root junto con la contraseña para poder iniciar sesion en el servidor
                        </p>

                        <p>
                            You already have your root account protected, so you can safely answer 'n'.

                            Change the root password? [Y/n]
                        </p>

                        <p>
                            Si selecionamos n en la opcion anterior nos aparece este mensaje que nos pregunta si queremos
                            cambiar la contraseña de root, como es una instalacion desde cero seleccionamos y para
                            configurar una nueva constraseña para el usuario root
                        </p>

                        <p>
                            Nuevamente como es una instalacion nueva si es recomendable asignar un nueva contraseña para el usuario root
                            sobre todo si no configuramos el inicio por el socket de linux, luego de esto nos aparece que ingresemos una contraseña
                            para el usuario root de la base de datos
                        </p>

                        <p>
                            By default, a MariaDB installation has an anonymous user, allowing anyone
                            to log into MariaDB without having to have a user account created for
                            them.  This is intended only for testing, and to make the installation
                            go a bit smoother.  You should remove them before moving into a
                            production environment.
                        </p>

                        <p>
                            Este mensaje nos avisa que por defecto se crea un usuario anonimo con el cual se puede iniciar sesion con algo como 
                            lo siguiente mysql -u '' y con esto accede paracialmente a la base de datos, en teoria esto facilita pruebas 
                            con la base de datos pero no es seguro para el sistema por lo cual el script nos preguntata si queremos eliminar el 
                            usuario anonimo, en nuestro caso deberiamos decir que no para que la instalacions sea segura pero si no queremos 
                            hacerlo simplemente debemos ingresar n
                        </p>


                    </DivArticle>
                </DivCol>
            </DivRow>
        </>
    )
}