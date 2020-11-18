const Account = function (login, email) {
    this.login = login,
        this.email = email
}

Account.prototype.getInfo = function () {
    console.log(this);
}

const mango = new Account('Mangozedog', 'mango@dog.woof')
console.log(mango);

const poly = new Account('Poly', 'poly@mail.com')
console.log(poly);

mango.getInfo()
poly.getInfo()








// Проверка ботом

// const Account = function (login, email) {
//     this.login = login;
//     this.email = email;
// }

// Account.prototype.getInfo = function () {
//     return `login : ${this.login}, email: ${this.email}`;
// }

// console.log(typeof Account.prototype.getInfo);

// const mango = new Account('Mangozedog', 'mango@dog.woof');
// console.log(mango.getInfo());

// const poly = new Account('Poly', 'poly@mail.com');
// console.log(poly.getInfo());



