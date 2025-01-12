const operators=/([+=\-*/!])/
const operatorsSet=/([\{\}\[\]\(\)])/ 
const letters=/([aA-zZ])/;
const operatorsAccess=/([:\.])/
const numbers=/([0-9])/

export function processCode(code){

    let swap=""
    let listTokens=[]
    let comentState=false

    //console.log(code)
    //console.log('longitud',code.length)

    for(let ite=0; ite<=code.length; ite++){

        const char = code[ite];

        if(comentState){
            if(char==='#'){
                console.log(swap)
                listTokens.push({
                    typeToken: 'Coment',
                    character: swap
                })
                swap=''
                comentState=false
            }
            swap+=char
            continue
        }
        if(char==='/'&&code[ite+1]==='/'){
            swap+=char
            comentState=true
            continue
        }
        if(operators.test(char)){
            listTokens.push({
                typeToken: 'Operator',
                character: char
            })
        }
        if(operatorsSet.test(char)){
            listTokens.push({
                typeToken: 'OperatorSet',
                character: code[ite]
            })
        }
        if(operatorsAccess.test(char)){
            listTokens.push({
                typeToken: 'OperatorAccess',
                character: char
            })
        }
        if(numbers.test(char)){
            swap+=char
            if(!numbers.test(code[ite+1])){
                listTokens.push({
                    typeToken: 'Numbers',
                    character: swap
                })
                swap=''
            }
        }
        if(letters.test(char)){
            swap+=char
            if(code[ite+1]==='.'){
                listTokens.push({
                    typeToken: 'Objeto',
                    character: swap
                })
                swap=''
            }
            if(!letters.test(code[ite+1])){
                listTokens.push({
                    typeToken: 'Letters',
                    character: swap
                })
                swap=''
            }
        }
        
        /*
        listTokens.push({
            typeToken: 'unknow',
            character: code[ite],
        })
        */
    }

    return listTokens
}

export function sliceCode(code){
    let rowsCode=[]
    let swap=''

    for(let ite=0; ite<=code.length; ite++){

        const char = code[ite];

        if(char==='\n'){
            rowsCode.push(swap)
            swap=''
        }
        else{
            swap+=char
        }
    }

    return rowsCode
}