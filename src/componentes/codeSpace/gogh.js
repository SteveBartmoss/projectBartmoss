

const reservedWords=['let','const','function','import','export','default','return', 'from']

const symbols=['{','}','[',']','=','+','-','/','>','<']


export function clasificateToken(token){
    if(reservedWords.includes(token)){
        return 'reserved-word'
    }

    if(symbols.includes(token)){
        return 'symbol'
    }

    else{
        return 'comun-word'
    }
}