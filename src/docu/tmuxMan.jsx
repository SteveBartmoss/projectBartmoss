

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

                            

                        </DivContent>
                    </DivArticle>
                </DivCol>
            </DivRow>
        </>
    )
}