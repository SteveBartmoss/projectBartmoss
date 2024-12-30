import { useEffect, useState } from 'react';
import './CodeSpace.css';
import { decorateToken } from './decorator/picaso';
import { processCode } from './lexer/AdaLove';

export function CodeSpaceV2({title,rawCode=""}){

    const sliceCode=()=>{
        let slices=rawCode.split('\n')
        return slices
    }

    const tokenCode=(codeLine)=>{
        let tokens=codeLine.split(' ')
        //console.log(tokens)
        return tokens
    }

    useEffect(()=>{
        //console.log(processCode('const persona = { nombre: "Juan" }'))
        //console.log(processCode(':+=/!-*'))
        console.log(processCode(rawCode))
        //console.log(sliceCode())
    },[])

    return(
        <div className='code-container'>
            <div className="code-space-title">
                <h1>{title}</h1>
            </div>
            <div className="code-space">
                {
                    processCode(rawCode).map(token =>
                        <p>
                            <span className={decorateToken(token)}>{token.character}</span>
                        </p>
                    )
                }
            </div>
        </div>
    )
}