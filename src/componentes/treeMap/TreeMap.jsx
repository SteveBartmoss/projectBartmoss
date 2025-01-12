import './TreeMap.css';

export function TreeMap({titulo,elementos}){

    const jumpToSection=(id)=>{
        const section=document.getElementById(id)
        section.scrollIntoView({behavior: "smooth"});
    }

    return(
        <div className='div-map'>
            <span className='title-map'>{titulo}</span>
            <div>
                {
                    elementos.map(item =>
                        <div>
                            <p onClick={()=>jumpToSection(item.id)}>{item.titulo}</p>
                        </div>
                    )
                }
            </div>
        </div>
    )

}