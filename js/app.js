class Tomagatchi{
	constructor(hung,sleep,bored,age,name){
		this.hung = hung
		this.sleep = sleep
		this.bored = bored
		this.age = age
		this.name = name
	}
};

const game = {
	feed (){
		if(toma1.hung === 10){
			//alert the player tomagatchi is full!
		}
		else if(1 <= toma1.hung < 10){
			toma1.hung = toma1.hung + 2
			// put food on the screen for a min then make it go away and alert the player their tomagatchi has eaten food!
		}
		else{
			// alert the player their tomagatichi has passed away of starvation.
		}
	},
	bedTime (){
		if(toma1.sleep === 10){
			//alert the player tomagatchi is full!
		}
		else if(1 <= toma1.sleep < 10){
			toma1.sleep = toma1.sleep + 1
			// put food on the screen for a min then make it go away and alert the player their tomagatchi has eaten food!
		}
		else{
			// alert the player their tomagatichi has passed away of starvation.
		}
	},
	play (){
		if(toma1.bored === 10){
			//alert the player tomagatchi is full!
		}
		else if(1<=toma1.bored < 10){
			toma1.bored = toma1.bored + 2
			// put food on the screen for a min then make it go away and alert the player their tomagatchi has eaten food!
		}
		else{
			// alert the player their tomagatichi has passed away of starvation.
		}
	},
	evolve(){
		if(toma1.age === 10){
			//alert the player tomagatchi is full!
		}
		else if(1 <= toma1.age < 10){
			toma1.age = toma1.age + 2
			// put food on the screen for a min then make it go away and alert the player their tomagatchi has eaten food!
		}
		else{
			// alert the player their tomagatichi has passed away of starvation.
		}
	},
	timer(){

	},
	startGame(){
		let toma1 = new Tomagatchi(0,0,0,0,"")
		//start the timer
		//put toma on screen
		//set input to toma1.name
	}
}

$('#start').on('click', ()=>{
	startGame();
})
$('#feed').on('click', ()=>{
	

})
$('#play').on('click', ()=>{
	

})
$('#bed').on('click', ()=>{
	

})












