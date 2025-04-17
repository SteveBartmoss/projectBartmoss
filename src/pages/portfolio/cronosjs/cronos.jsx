import { DivArticle, DivCol, DivContent, DivRow } from "../../../componentes/contenedores/contenedores";
import { Portada } from "../../../componentes/portada/portada";
import { TreeMap } from "../../../componentes/treeMap/TreeMap";


export function CronosJs(){

    const pageMap=[
        {
            id: 1,
            section: 'CronosJs',
            childs: [
                {
                    titulo: 'Importante',
                    id: 'importante',
                }
            ]
        }
    ]

    return(
        <di>
            <Portada imgPortada={"/Assets/steveA.png"}
                title={"CronosJs"}
                text={"Librería para trabajar con fechas en JavaScript de una forma mas simple o al menos eficiente, desarrollada por steve"} />

            <DivRow>
                <DivCol>
                    <TreeMap titulo={'Mapa del sitio'} elementos={pageMap} />
                </DivCol>

                <DivCol>
                    <DivArticle>
                        <DivContent>
                            <h1 id="importante">Importante</h1>

                            <p>
                                Las funciones ahora pueden trabajar con diferentes tipos de fechas, por defecto new Date espera 
                                que el formato sea **YYYY-MM-DD**, pero se implementó una función para normalizar las fechas por 
                                lo cual las funciones que reciben de una fecha también deben recibir el formato de la fecha que se 
                                envía, en caso de que el formato no este entre los soportados se hará un acercamiento lo mejor que 
                                se pueda para determinar el orden de los datos proporcionados.
                            </p>

                            <h2>Funciones actuales</h2>

                            <p>
                                A continuacion se muestran algunas de las funciones que se tienen por el momento
                            </p>

                            <h1 id="getDateNow">getDateNow</h1> 

                            <h1 id="getDiference">getDiference</h1>

                            <h1 id="addDays">addDays</h1>
                            
                            <h1 id="getDayReference">getDayReference</h1>

                            <h1 id="isValidDate">isValidDate</h1>

                            <h1 id="getFirstDayOfMonth">getFirstDayOfMonth</h1>

                            <h1 id="getLastDayOfMonth">getLastDayOfMonth</h1>

                            <h1 id="calculateAge">calculateAge</h1>

                            <h1 id="formatDate">formatDate</h1>

                            <h1 id="addMonths">addMonths</h1>

                            <h1 id="getUnitDiference">getUnitDiference</h1>

                            <h1 id="isLeapyear">isLeapyear</h1>

                            <h1 id="toTimestamp">toTimestamp</h1>

                            <h1 id="compareDates">compareDates</h1>

                            <h1 id="getMonthName">getMonthName</h1>

                            <h1 id="isDateInRange">isDateInRange</h1>

                            <h1 id="getWeekRange">getWeekRange</h1>

                            <h1 id="timestampToDate">timestampToDate</h1>

                            <h1 id="normalizeDate">normalizeDate</h1>

                        </DivContent>
                    </DivArticle>
                </DivCol>
            </DivRow>

        </di>
    )
}