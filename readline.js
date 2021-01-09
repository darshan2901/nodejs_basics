const readline = require('readline');
const r1 = readline.createInterface({input : process.stdin,
												             output : process.stdout});

let num1 = Math.floor((Math.random()*10)+1);
let num2 = Math.floor((Math.random()*10)+1);
let answer = num1 + num2;

r1.question(`what is ${ num1 } + ${num2}?\n`,(userInput)=>{
	if(userInput.trim() == answer){
		r1.close();
	}else{
		r1.setPrompt('incorrect answer please try again\n');
		r1.prompt();
		r1.on=('line',(userInput)=>{
			if(userInput.trim() == answer)
				r1.close();
			else{
				r1.setPrompt(`your ${userInput} is not match to answer.\n` );
				r1.prompt();
			}
		});
	}
});

r1.on=('close',()=>{
	console.log('correct answer!!!');
});
