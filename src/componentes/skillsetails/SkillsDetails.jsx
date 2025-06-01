import './skillsDetails.css';

export function SkillsDetails(){
    return(
        <div className='main-div-skills'>
            <div className='header-skills'>
                <img alt="imgSkills" className="img-profile-skills" src="/Assets/steveA.png" />
                <div className='title-container'>
                    <h1>Seteve</h1>
                    <p>clase: Desarrollador Especialidad: Aplicaciones web Nivel: DesarolladorJr</p>
                </div>
            </div>
            <div className='row-container'>
                <div className='column-container'>
                    <h1>Lenguajes de programacion</h1>

                    <p>JavaScript: Lenguaje usado la mayor parte del tiempo</p>

                    <p>php: Utilizado mayormente en el trabajo</p>

                    <p>Java: Lenguaje preferido para trabajar con objetos</p>

                    <p>C: Lenguaje en el que inicio la programacion</p>

                    <p>Python: Usado principalmente cuando el proyecto lo require</p>

                    <p>Go: La opcion cuando se tiene que usar algo en escritorio</p>
                </div>
                <div className='column-container'>
                    <h1>Tecnologias usadas</h1>

                    <p>Vue: Framework usado en el trabajo</p>

                    <p>Laravel: Framework usado en el trabajo</p>

                    <p>React: Framework usado por eleccion</p>

                    <p>Angular: Framewortk usado en el trabajo</p>
                </div>
                <div className='column-container'>
                    <h1>Por definir</h1>
                </div>
            </div>
            <div>
                <p>
                    Detalles
                </p>
            </div>
        </div>
    )
}