const operators=/([+=\-*/!])/
const operatorsSet=/([\{\}\[\]\(\)])/ 
const letters=/([aA-zZ])/;
const operatorsAccess=/([:\.])/

export function processCode(code){

    let swap=""
    let listTokens=[]

    //console.log(code)
    //console.log('longitud',code.length)

    for(let ite=0; ite<=code.length; ite++){

        const char = code[ite];

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
        if(letters.test(char)){
            swap+=char
            if (ite<code.length){

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