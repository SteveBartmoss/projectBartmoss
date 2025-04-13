import { useState } from 'react';
import './TreeMap.css';
import { TreeMapChids } from './TreeMapChild';

export function TreeMap({titulo,elementos}){

    return(
        <div className='div-map'>
            <span className='title-map'>{titulo}</span>
            <div>
                {
                    elementos.map(item =>
                        <TreeMapChids key={item.id} data={item} />
                    )
                }
            </div>
        </div>
    )

}