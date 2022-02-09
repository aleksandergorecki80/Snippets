
const inputs = {
    telephone: '123456789122'
}


const patterns = {
    telephone: /^\d{11}$/,                     //  \d - all digits

}

const validation = (regex, input) => {
    return regex.test(input)
}


const result = validation(patterns.telephone, inputs.telephone);
console.log(result)