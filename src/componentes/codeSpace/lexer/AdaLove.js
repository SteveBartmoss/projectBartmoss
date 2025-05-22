const operators=/([+=\-*/!])/
const operatorsSet=/([\{\}\[\]\(\)])/ 
const letters=/([aA-zZ])/;
const operatorsAccess=/([:\.])/
const numbers=/([0-9])/
const text=/(['"])/
const operetorsIntervals=/([<>])/

export function processCode(code){

    let swap=""
    let listTokens=[]
    let comentState=false
    let stringState=false

    //console.log(code)
    //console.log('longitud',code.length)

    for(let ite=0; ite<=code.length; ite++){

        const char = code[ite];
        //console.log('Character',char)

        if(stringState && !comentState){
            if(char==='"'){
                swap+=char
                listTokens.push({
                    typeToken: 'String',
                    character: swap
                })
                swap=''
                stringState=false
            }
            swap+=char
            continue
        }
        if(char==='"'){
            swap+=char
            stringState=true
            continue
        }
        if(comentState && !stringState){
            if(char==='#'){
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
            if (swap) {
                listTokens.push({ typeToken: "Letters", character: swap });
                swap = "";
            }
            listTokens.push({
                typeToken: 'Operator',
                character: char
            })
        }
        if(operatorsSet.test(char)){
            if (swap) {
                listTokens.push({ typeToken: "Letters", character: swap });
                swap = "";
            }
            listTokens.push({
                typeToken: 'OperatorSet',
                character: code[ite]
            })
        }
        if(operatorsAccess.test(char)){
            if (swap) {
                listTokens.push({ typeToken: "Letters", character: swap });
                swap = "";
            }
            listTokens.push({
                typeToken: 'OperatorAccess',
                character: char
            })
        }
        if(operetorsIntervals.test(char)){
            if(swap){
                listTokens.push({typeToken: "Letters", character: swap})
                swap=""
            }
            listTokens.push({
                typeToken: 'OperatorInterval',
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

    console.log(listTokens)

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

export function sliceCodeV2(code){
    
    if(!code || typeof code !== 'string'){
        return [];
    }

    let rowsCode=[]
    let start = 0 

    for(let ite=0; ite<=code.length; ite++){
        if(code[ite] === '\n' || code[ite] === '\r'){
            rowsCode.push(code.slice(start,ite)+'\n')
            start = ite + 1
        }
    }

    if(start < code.length){
        rowsCode.push(code.slice(start)+'\n')
    }

    rowsCode = rowsCode.filter(line => line.trim() !=='')

    return rowsCode
}

export function processCodeV2(code){

    let listTokens=[]
    let estado=0
    let iterador=0
    let swap='' 

    while(iterador < code.length){

        const char = code[iterador];

        switch(estado){
            case 0: 
                if(letters.test(char)){
                    swap+=char
                    iterador++
                    estado=1      
                }
                else if(numbers.test(char)){
                    swap+=char
                    iterador++
                    estado=2
                }
                else if(operators.test(char)){
                    if(char==='/'){
                        swap+=char
                        iterador++
                        estado=5
                    }else{
                        swap+=char
                        iterador++
                        estado=3
                    }
                }
                else if(text.test(char)){
                    swap+=char
                    iterador++
                    estado=4
                }
                else if(operatorsAccess.test(char)){
                    listTokens.push({
                        typeToken: 'OperatorAcces',
                        character: char
                    })
                    estado=0
                    iterador++
                }
                else if(operatorsSet.test(char)){
                    listTokens.push({
                        typeToken: 'OperatorSet',
                        character: char
                    })
                    estado=0
                    iterador++
                }
                else if(char == ' '){
                    listTokens.push({
                        typeToken: 'Espacio',
                        character: char,
                    })
                    estado=0
                    iterador++
                }
                else{
                    iterador++
                }
                break

            case 1:
                if(letters.test(char)){
                    swap+=char
                    iterador++
                    estado=1
                }else if(operatorsAccess.test(char)){
                    listTokens.push({
                        typeToken: 'Letters',
                        character: swap
                    })
                    swap=''
                    estado=0
                }else{
                    listTokens.push({
                        typeToken: 'Letters',
                        character: swap
                    })
                    swap=''
                    estado=0
                }
                break

            case 2: 
                if(numbers.test(char)){
                    swap+=char
                    iterador++
                    estado=2
                }else if(char==='.'){
                    swap+=char
                    iterador++
                    estado=2
                }else{
                    listTokens.push({
                        typeToken: 'Numbers',
                        character: swap
                    })
                    swap=''
                    estado=0
                }
                break
            case 3:
                if(operators.test(char)){
                    swap+=code[iterador]
                    iterador++
                    estado=3
                }else{
                    listTokens.push({
                        typeToken: 'Operator',
                        character: swap
                    })
                    swap=''
                    estado=0
                }
                break
            case 4:
                if(text.test(char)){
                    swap+=char
                    iterador++
                    listTokens.push({
                        typeToken: 'String',
                        character: swap
                    })
                    swap=''
                    estado=0
                }else{
                    swap+=char
                    iterador++
                    estado=4
                }
                break
            case 5: 
                if(char==='/'){
                    swap+=char
                    iterador++
                    estado=6
                }else if(char==='*'){
                    swap+=char
                    iterador++
                    estado=7
                }else{
                    listTokens.push({
                        typeToken: 'Operator',
                        character: swap
                    })
                    swap=''
                    estado=0
                }
                break
            case 6:
                if(char==='\n'){
                    listTokens.push({
                        typeToken: 'Comment',
                        character: swap
                    })
                    swap=''
                    estado=0
                }else{
                    swap+=char
                    iterador++
                    estado=6
                }
                break  
            case 7:
                if(char==='*'&&code[iterador+1]==='/'){
                    swap += char + '/'
                    listTokens.push({
                        typeToken: 'Comment',
                        character: swap
                    })
                    swap=''
                    iterador+=2
                    estado=0
                }else{
                    swap+=char
                    iterador++
                    estado=7
                }
                break
        }

    }

    if(swap !==''){
        switch(estado){
            case 1:
                listTokens.push({
                    typeToken: 'Letters',
                    character: swap
                })
                break
            case 2:
                listTokens.push({
                    typeToken: 'Numbers',
                    character: swap
                })
                break
            case 3:
                listTokens.push({
                    typeToken: 'Operator',
                    character: swap
                })
                break
            case 4: 
                listTokens.push({
                    typeToken: 'String',
                    character: swap
                })
                break
        }
    }

    return listTokens
}