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
	intervalId: null,
	currentPet: null,
	growOld (){
		if(this.time % 100 === 0){
			this.currentPet.age++
		}
	},
	imHungary(){
		if(this.time % 10 === 0){
			this.currentPet.hung++
		}
	},
	boring(){
		if(this.time %  50 === 0){
			this.currentPet.bored++
		}	
	},
	getSleepy(){
		if(this.time % 10 === 0){
		this.currentPet.sleep--
		}
	},
	feed (){
		if(this.currentPet.hung === 1){
			$('h3').html(`${this.currentPet.name} is full!`)//alert the player tomagatchi is full!
		}
		else if(2 <= this.currentPet.hung < 10){
			this.currentPet.hung = this.currentPet.hung - 2
			// put food on the screen for a min then make it go away and alert the player their tomagatchi has eaten food!
		}
		else{
			//run end game function
		}
	},
	bedTime (){
		if(this.currentPet.sleep === 10){
			//alert the player tomagatchi is full!
		}
		else if(1 <= this.currentPet.sleep < 1){
			this.currentPet.sleep = 10
			//make the tomagatchi dissapear for a short time then alert the player the tomagatchi has rested and feels refreshed!
		}
		else{
			//run end game function
		}
	},
	play (){
		if(this.currentPet.bored === 10){
			//alert the player tomagatchi is having fun
		}
		else if(2<=this.currentPet.bored < 10){
			this.currentPet.bored = this.currentPet.bored - 2
			// put food on the screen for a min then make it go away and alert the player their tomagatchi has eaten food!
		}
		else{
			// alert the player their tomagatichi has passed away of starvation.
		}
	},
	evolve(){
		if(this.currentPet.age === 5){
			//change the character to its next evolution
		}
	},	
	startGame(){
		let toma1 = new Tomagatchi(1,10,1,1,"")
		this.currentPet = toma1
		this.intervalId = setInterval( 
			() =>{
				this.time++ 
				this.growOld();
				this.imHungary();
				this.boring();
				this.getSleepy();
				//put toma on screen
				//toma1.name = //user input
			},
			1000
		)
	},
	endGame(){
		
	}
}	

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
//need an end game function that tells the user how their last toma died as well as tells them to start a new game!


