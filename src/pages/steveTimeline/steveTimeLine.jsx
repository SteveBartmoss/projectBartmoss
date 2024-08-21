import { TimeItem } from "../../componentes/timeItem/timeItem";


export function SteveTimeLine() {
    return (
        <div>
            <TimeItem fecha="21/08/2024" autor="Steve" 
                texto="Si bueno, igual pensar en hacer un editor 
                por mi cuenta no fue una idea tan buena, pero el 
                camino asi es" />
            
            <TimeItem fecha="16/08/2024" autor="Steve"
                texto="Una nueva gpu no arreglara mis problemas 
                pero seguramente si me haga feliz XD" />

            <TimeItem fecha="13/08/2024" autor="Steve"
                texto="Los editores de codigo deberian 
                ser eternos, XD" />

            <TimeItem fecha="03/08/2024" autor="Steve"
                texto="Wow ya mas de la mitad del 2024, 
                que rapido pasa el tiempo cuando te va mal XD, 
                el invierno se acerca" />

            <TimeItem
                fecha="28/07/2024" autor="Steve"
                texto="Bueno manetener el sofware no es tan malo, en 
                algun momento esto tiene que funcionar no?" />
        </div>
    )
}
