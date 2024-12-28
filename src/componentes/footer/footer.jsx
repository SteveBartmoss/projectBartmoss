import { useApp } from '../../context/contextApp'
import { AnchorLink } from '../anchorlink/AnchorLink'
import './footer.css'

export function Footer() {

    const {isDarkTheme} = useApp()

    return (
        <div className="div-footer">
            <a className={isDarkTheme ? 'footer-link-ligth' : 'footer-link-dark' } rel="noopener noreferrer" target="_blank" href='https://uisteve.netlify.app/'>Power by UiSteve</a>
            <a className={isDarkTheme ? 'footer-link-ligth' : 'footer-link-dark' } href="mailto:stevechanvitas@gmail.com">Contacto</a>
            <a className={isDarkTheme ? 'footer-link-ligth' : 'footer-link-dark' } rel="noopener noreferrer" target="_blank" href='https://www.youtube.com/@stevechambitas2782'>Youtube</a>
            <a className={isDarkTheme ? 'footer-link-ligth' : 'footer-link-dark' } rel="noopener noreferrer" target="_blank" href="https://discord.gg/QTdVBq5Q9r">Discord</a>
            <a className={isDarkTheme ? 'footer-link-ligth' : 'footer-link-dark' } rel="noopener noreferrer" target="_blank" href='https://github.com/SteveBartmoss' >GitHub</a>
        </div>
    )
}