import { useApp } from '../../context/contextApp'
import { AnchorLink } from '../anchorlink/AnchorLink'
import './footer.css'

export function Footer() {

    const {isDarkTheme} = useApp()

    return (
        <div className="div-footer">
            <a className={isDarkTheme ? 'footer-link-ligth' : 'footer-link-dark' } rel="noopener noreferrer" target="_blank" href='https://uisteve.netlify.app/'>Power by UiSteve</a>
            <a>Contacto</a>
            <a className={isDarkTheme ? 'footer-link-ligth' : 'footer-link-dark' } rel="noopener noreferrer" target="_blank" href='https://www.youtube.com/@stevechambitas2782'>Youtube</a>
            <a>Discord</a>
            <a className={isDarkTheme ? 'footer-link-ligth' : 'footer-link-dark' } rel="noopener noreferrer" target="_blank" href='https://github.com/SteveBartmoss' >GitHub</a>
        </div>
    )
}