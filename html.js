//var -> ugugdul hadgalana
// for -> neg uildeliig davtah ued
// function -> olon kodnii tsugluulga/ dahij ahiglah bolomjtoi
// massive -> [], index / olon utga zereg hadgalah code
// object -> {}, key:value
// api -> tusgai beldsen datag holboh
// .innerText -> tag dotorh ugiig uurchluh
//documenthtml deerh buh code
// html, css -> text zurag gargaj irdeg
// addEventListener -> websited hiigdeh uildelii
const questionE1 = document.querySelector('.question');
const result = document.querySelector('.result');
const choiceE1 = document.querySelector('.choice');
const nextBtn = document.querySelector('.nextBtn');
var cCount = document.querySelector('.cCount');
var count=0;
//
let quizData = [
	{
		"question":"What does mean Tbh?",
		"choice":["To bring human","To be honest","Touch bee honey"],
		"answer":"To be honest",
	},
	{
		"question":"What does mean lmao?",
		"choice":["lick me all over","laughing my ass off","logical mongolian american object"],
		"answer":"laughing my ass off",
	},
	{
		"question":"What does mean ty?",
		"choice":["Tomato yogurt","Thank you","to you"],
		"answer":"Thank you",
	},
];
let now=0;
console.log(quizData[now].question);
function display(){
	questionE1.innerText = quizData[now].question;
	quizData[now].choice.forEach(data=>{
		console.log(data);
		let btn = document.createElement('button');
		btn.innerText = data;
		console.log(btn);
		choiceE1.append(btn);
		btn.addEventListener('click',()=> checkAnswer(data));
	});
}
function checkAnswer(data){
	console.log(data);
	if(data==quizData[now].answer){
		result.innerText="Correct!"
		count++;
		
	}else{
		result.innerText="Wrong! Try again"
		
	}
}
nextBtn.addEventListener('click',()=>{
	questionE1.innerText="";
	result.innerText="";
	choiceE1.innerHTML="";
	now++;
	
	if(now==quizData.length){
		result.innerText="Done! Your score is " + count + "/" + quizData.length;
		nextBtn.style.display="none";
	}else{
		display();
	}
	
});
choiceE1.addEventListener('click',()=>{
	questionE1.innerText="";
	result.innerText="";
	choiceE1.innerHTML="";
	now++;
	if(now==quizData.length){
		result.innerText="Done! Your score is " + count + "/" + quizData.length;
		nextBtn.style.display="none";
	}else{
		display();
	}
});
display();
/*function cCount(){
	if(data==quizData[now].answer){
		cCount++;
	}else{
		cCount--;
	}
}
display();*/
