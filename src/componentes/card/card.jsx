import './card.css';

export function Card({children,variant="card-basic"}){
    return(
        <div className={variant}>
            {children}
        </div>
    )
}

export function CardTitle({ children }) {
    return (
        <div className="card-title">
            {children}
        </div>
    );
}

export function CardText({ children }) {
    return (
        <div className="card-text">
            {children}
        </div>
    );
}

export function CardLink({ url, text }) {
    return (
        <a className="card-link" rel="noopener noreferrer" target="_blank" href={url}>{text}</a>
    );
}

export function CardAccions({ children }) {
    return (
        <div className="card-actions">
            {children}
        </div>
    );
}