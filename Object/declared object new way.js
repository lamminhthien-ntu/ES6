let firstName = 'Su ';
let lastName = 'Dep Trai';

let obj = {
    firstName,
    lastName,
    showName() {
        console.log(this.firstName + ' ' + this.lastName);
    }
};


console.log(obj.showName());