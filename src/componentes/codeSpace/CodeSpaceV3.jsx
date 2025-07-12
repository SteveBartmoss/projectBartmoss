import { generateUniqueIdV3 } from "../helpers/uid";
import { decorateToken, getIdent } from "./decorator/picaso";
import { processCodeV2, sliceCodeV2 } from "./lexer/AdaLove";


export function CodeSpaceV3({ title, rawCode = "" }) {

    return (
        <div className="code-container">
            <div className="code-space-title">
                <h1>{title}</h1>
            </div>
            <div className="code-space">
                {
                    sliceCodeV2(rawCode).map(lineCode =>
                        <p key={generateUniqueIdV3()}>
                            {
                                processCodeV2(lineCode).map(token =>
                                    <span key={generateUniqueIdV3()} className={`${decorateToken(token)}`} >{token.character}</span>
                                )
                            }
                        </p>
                    )
                }
            </div>
        </div>
    )
}