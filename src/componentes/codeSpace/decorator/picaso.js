
const reservedWords=['let','const','function','import','export','default','return', 'from']

export function decorateToken(token){
    if(reservedWords.includes(token.character)){
        return 'reserved-word'
    }
    if(token.typeToken === 'Letters'&&!reservedWords.includes(token.character)){
        return 'variable-word'
    }
    if(token.typeToken === 'OperatorSet'){
        return 'operator-set'
    }
    if(token.typeToken === 'OperatorAccess'){
        return 'operator-access'
    }
    if(token.typeToken === 'Numbers'){
        return 'number-word'
    }
}