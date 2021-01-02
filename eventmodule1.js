const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial',(num1,num2)=>{
	console.log(num1 + num2);
})

eventEmitter.emit('tutorial',1,2);

class Person extends EventEmitter{
	constructor(name){
		super();
		this._name = name;
	}
	get name(){
		return this._name;
	}
}

let darshan = new Person('darshan');
let chand = new Person('Chand');

chand.on('name',()=>{
	console.log('my name is ' + chand.name);
})
darshan.on('name',()=>{
	console.log('my name is ' + darshan.name);
})
darshan.emit('name');
chand.emit('name');
