const sum = (num1,num2) => num1 + num2;
const PI = 3.14;
class SomeMathObject{
	constructor(){
		console.log('object created');
	}
}
module.exports.sum = sum; //insted of three line
module.exports.PI = PI;   //module.exports = {sum : sum,PI : PI,SomeMathObject : SomeMathObject};
module.exports.SomeMathObject = SomeMathObject;
