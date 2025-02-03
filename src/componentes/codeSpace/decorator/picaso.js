
const reservedWords=['let','const','function','import','export','default','return', 'from']
const labelWords=['div','h1','h2','h3','p',]

export function decorateToken(token){

    if(reservedWords.includes(token.character)){
        return 'reserved-word'
    }
    if(labelWords.includes(token.character)){
        return 'label-word'
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
    if(token.typeToken === 'Objeto'){
        return 'object-word'
    }
    if(token.typeToken === 'Coment'){
        return 'coment-word'
    }
    if(token.typeToken === 'String'){
        return 'string-word'
    }
}