

export function TmuxMan(){

    return(
        <>
            <Portada imgPortada={"/Assets/steveA.png"} title={"Manual de tmux"} text={"Por Steve 26/05/2025"} />

            <DivRow>
                <DivCol>
                    
                </DivCol>
                <DivCol>
                    <DivArticle>
                        <DivContent>
                            <h1>Que es tmux</h1>
                            

                            <p>
                                Es una herramienta de terminal que permite tener una terminal multiplexada, lo 
                                que quiere decir que desde una misma termninal podemos trabjar diferentes procesos por 
                                eso el termino multiplexado. Tener una terminal multiplexada es una forma 
                                eficiente de poder trabajar desde ella teniendo todo en la misma pantalla pero 
                                tambien se agrega una capa extra para el usuario que puede ser un poco dificil. 
                                Esta pagina de man pretende servir como referencia para los comandos generales de 
                                esta herramienta.
                            </p>

                            <h1>Instalar tmux</h1>

                            <h3>Linux</h3>

                            <p>
                                Si estamos en linux podemos usar el gestor de paquete la distribucion que usas, a continuacion 
                                se muestran algunos ejemplos
                            </p>

                            <h3>Arch linux</h3>

                            <p>pacman -S tmux</p>

                            <h3>Debian o derivados</h3>

                            <p>apt install tmux</p>

                            <h3>Fedora</h3>

                            <p>dnf install tmux</p>

                            <h3>RHEL or CentOS</h3>

                            <p>yum install tmux</p>
                            
                            <h3>macOS HomeBrew</h3>

                            <p>brew install tmux</p>

                            <h3>macOs macporst</h3>

                            <p>port install tmux</p>

                            <h3>openSUSE</h3>

                            <p>zypper install tmux</p>

                        </DivContent>
                    </DivArticle>
                </DivCol>
            </DivRow>
        </>
    )
}