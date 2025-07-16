import { generateUniqueIdV3 } from "../helpers/uid"
import { decorateToken } from "./decorator/picaso"
import { Lexer } from "./lexer/lexer"


export function CodeSpaceV4({title, rawCode = ""}){

    const adaLove = new Lexer()

    adaLove.scanner(rawCode)

    console.log(adaLove.listCode)

    return(
        <div className="code-container">
            <div className="code-space-title">
                <h1>{title}</h1>
            </div>
            <div className="code-space">
                {
                    adaLove.listCode.map(lineCode =>
                        <p key={generateUniqueIdV3()} style={{paddingLeft: lineCode.ident * 3 + 'rem', paddingBottom: '0rem', paddingTop: '0rem'}} >
                            {
                                lineCode.tokens.map(token =>
                                    <span key={generateUniqueIdV3()} className={`${decorateToken(token)}`}>{token.character}</span>
                                )
                            }
                        </p>
                    )
                }
            </div>
        </div>
    )
}