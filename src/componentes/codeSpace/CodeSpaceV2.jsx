import { useEffect, useState } from 'react';
import './CodeSpace.css';
import { decorateToken } from './decorator/picaso';
import { processCode, sliceCode } from './lexer/AdaLove';

export function CodeSpaceV2({title,rawCode=""}){

    /*
    const sliceCode=()=>{
        let slices=rawCode.split('\n')
        return slices
    }

    processCode(rawCode).map(token =>
                        <p>
                            <span className={decorateToken(token)}>{token.character}</span>
                        </p>
                    )


    */

    const tokenCode=(codeLine)=>{
        let tokens=codeLine.split(' ')
        //console.log(tokens)
        return tokens
    }

    useEffect(()=>{
        //console.log(processCode('const persona = { nombre: "Juan" }'))
        //console.log(processCode(':+=/!-*'))
        //console.log(processCode(rawCode))
        //console.log(sliceCode())
        console.log(sliceCode(rawCode))
    },[])

    return(
        <div className='code-container'>
            <div className="code-space-title">
                <h1>{title}</h1>
            </div>
            <div className="code-space">
                {
                    sliceCode(rawCode).map(lineCode =>
                        <p>
                            {
                                processCode(lineCode).map(token =>
                                    <span className={decorateToken(token)}>{token.character} </span>
                                )
                            }
                        </p>
                    )
                }
            </div>
        </div>
    )
}