import './skillsDetails.css';

export function SkillsDetails(){
    return(
        <div className='main-div-skills'>
            <div className='header-skills'>
                <img alt="imgSkills" className="img-profile-skills" src="/Assets/steveA.png" />
                <div className='title-container'>
                    <h1>Seteve</h1>
                    <h2>Desarrollador</h2>
                </div>
            </div>
            <div className='row-container'>
                <div className='column-container'>
                    <h1>Lenguajes de programacion</h1>
                </div>
                <div className='column-container'>
                    <h1>Tecnologias usadas</h1>
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