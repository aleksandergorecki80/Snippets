
const inputs = {
    telephone: '123456789122',
    name: 'ŁĄciaówŁĄciaó156',
    password: 'test-1234WWW@',
    email: "boni-fa.cy@gmai.commmm.com"
}


const patterns = {
    telephone: /^\d{11}$/,                     //  \d - all digits
    name: /^[a-ząĄćĆĘęŁłŃńÓóŚśŹźŻż\d]{3,20}$/ig,
    password: /^[-@\w]{8,20}$/ig,
    email: /^([\w\.-]+)@([a-z\d-]+)\.([a-z]{2,8})([\.a-z]{2,8})?$/g
}

const validation = (regex, input) => {
    return regex.test(input)
}


const telephoneValidationResult = validation(patterns.telephone, inputs.telephone);
console.log('telephoneValidationResult', telephoneValidationResult);

const nameValidationResult = validation(patterns.name, inputs.name);
console.log('nameValidationResult', nameValidationResult)

const passwordValidationResult = validation(patterns.password, inputs.password);
console.log('passwordValidationResult', passwordValidationResult)

const emailValidationResult = validation(patterns.email, inputs.email);
console.log('emailValidationResult', emailValidationResult)