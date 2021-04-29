// Write your solution in this file!
var customerName = 'bob'
function upperCaseCustomerName(){
    customerName = customerName.toUpperCase()
    return customerName
}

function setBestCustomer(){
    window.bestCustomer = 'not bob';
}

function overwriteBestCustomer(overwrite){
    bestCustomer = overwrite;
}

const leastFavoriteCustomer = 'something'

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'something else'
}

changeLeastFavoriteCustomer()