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
	displayHealth(){
		$('h3').html(`${this.currentPet.name} Hunger:${this.currentPet.hung} Sleepy:${this.currentPet.sleep} Boredom:${this.currentPet.bored} Age:${this.currentPet.age}`)
	},
	evolve(){
		if(this.currentPet.age === 7){
			('#screen').append('<image src="">');
		}
	},
	growOld (){
		if(this.time % 180 === 0){
			this.currentPet.age++
		}
	},
	imHungary(){
		if(this.time % 30 === 0){
			this.currentPet.hung++
		}
	},
	boring(){
		if(this.time %  60 === 0){
			this.currentPet.bored++
		}	
	},
	getSleepy(){
		if(this.time % 90 === 0){
		this.currentPet.sleep--
		}
	},
	feed (){
		if(this.currentPet.hung === 1){
			$('h3').html(`${this.currentPet.name} is full!`)
		}
		else if(2 <= this.currentPet.hung < 10){
			this.currentPet.hung = this.currentPet.hung - 2
			
		}
		else{
			//run end game function
		}
	},
	bedTime (){
		if(this.currentPet.sleep === 10){
			
		}
		else if(1 <= this.currentPet.sleep < 9){
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
			//run end game function;
		}
	},	
	startGame(){
		let toma1 = new Tomagatchi(1,10,1,0,"")
		$('#screen').append('<image src=https://vignette.wikia.nocookie.net/tamagotchi/images/c/c3/01.gif/revision/latest?cb=20090707084835">')
		this.currentPet = toma1
		toma1.name = $('#input-box').val();
		this.intervalId = setInterval( 
			() =>{
				this.displayHealth();
				this.time++ 
				this.growOld();
				this.imHungary();
				this.boring();
				this.getSleepy();
			},
			1000
		)
	},
	endGame(){

	}
}





$('form').on('submit', (e)=>{
	game.startGame();
	event.preventDefault();
	
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


