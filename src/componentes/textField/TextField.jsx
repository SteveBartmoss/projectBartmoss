import './TextField.css';

export function TextField({label,isPass,text,action}) {

    return (
        <>
            <div className="form">
                <input type={isPass ? 'password' : 'text'} id="text-field-input" value={text} onChange={(event)=>action(event)} className="text-field" placeholder='' />
                <label htmlFor="text-field-input" className="text-field-label">{label}</label>
            </div>
        </>
    );
}
