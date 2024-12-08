import { useEffect, useState } from 'react';
import './CodeSpace.css';

export function CodeSpace({title,rawCode=""}){

    const sliceCode=()=>{
        let slices=rawCode.split('\n')
        return slices
    }

    const tokenCode=(codeLine)=>{
        let tokens=codeLine.split(' ')
        console.log(tokens)
        return tokens
    }

    useEffect(()=>{
        //console.log(sliceCode())
    },[])

    return(
        <div className='code-container'>
            <div className="code-space-title">
                <h1>{title}</h1>
            </div>
            <div className="code-space">
                {
                    sliceCode().map( lineCode => 
                        <p>
                            {
                                tokenCode(lineCode).map(token =>
                                    <span>{token} </span>
                                )
                            }
                        </p> 
                    )
                }
            </div>
        </div>
    )
}