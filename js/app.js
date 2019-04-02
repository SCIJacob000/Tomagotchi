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
	time: 0,
	feed (){
		if(toma1.hung === 10){
			$('h3').html(`${toma1.name} is full!`)//alert the player tomagatchi is full!
		}
		else if(1 <= toma1.hung < 10){
			toma1.hung = toma1.hung - 2
			// put food on the screen for a min then make it go away and alert the player their tomagatchi has eaten food!
		}
		else if (toma1.hung === 9){
			toma1.hung = toma1.hung -1
		}
	},
	bedTime (){
		if(toma1.sleep === 10){
			//alert the player tomagatchi is full!
		}
		else if(1 <= toma1.sleep < 1){
			toma1.sleep = 10
			//make the tomagatchi dissapear for a short time then alert the player the tomagatchi has rested and feels refreshed!
		}
	},
	play (){
		if(toma1.bored === 10){
			//alert the player tomagatchi is full!
		}
		else if(2<=toma1.bored < 10){
			toma1.bored = toma1.bored - 2
			// put food on the screen for a min then make it go away and alert the player their tomagatchi has eaten food!
		}
		else{
			// alert the player their tomagatichi has passed away of starvation.
		}
	},
	evolve(){
		if(toma1.age === 5){
			//change the character to its next evolution
		}
	
	},	
	timer(){
		this.time = setInterval(() =>{
			this.time++
		//create a timer that can be started in the start game function that counts up and set al the other values to either decrease or increase based on that number at a certain rate! 
		if(time % 5000 === 0){
			//when this.time hits some number age goes up
		}
		else if(time % 100 === 0){
			//when this.time hits some number hunger goes up
		}
		else if(time % 50 === 0){
			//when the this.time hits some number the boredom goes up
		}
		else if(time % 25 === 0){
			//when the this.time hits some number the sleepyness goes up
		}
		},1000)

	},
	startGame(){
		
		//start the timer
		//put toma on screen
		//set input to toma1.name
	}
}
		let toma1 = new Tomagatchi(1,5,6,3,"boy")

$('#start').on('click', ()=>{
	game.startGame();
})
$('#feed').on('click', ()=>{
	game.feed();

})
$('#play').on('click', ()=>{
	game.play();

})
$('#bed').on('click', ()=>{
	game.bedTime();

 })
game.startGame();
console.log(game.time);


//need an end game function that tells the user how their last toma died as well as tells them to start a new game!


