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
	animate(){
		if(this.time % 3===0){
		$('#toma1').css({"margin-right": "40px"})
		}
		else if (this.time % 3 !==0){
		$('#toma1').css({"margin-right": "0px"})
		}
	},
	displayHealth(){
		$('h3').html(`${this.currentPet.name}----Game Time:${this.time} Hunger:${this.currentPet.hung} Sleepy:${this.currentPet.sleep} Boredom:${this.currentPet.bored} Age:${this.currentPet.age}`)
	},
	evolve(){
		if(this.currentPet.age === 7){
			$('#toma1').remove()
			$('#screen').append('<image id="toma1"src="http://images1.wikia.nocookie.net/tamagotchi/images/e/ed/Memetchi.gif">');
		}
	},
	growOld (){
		if(this.time % 60 === 0){
			this.currentPet.age++
		}
	},
	imHungary(){
		if(this.time % 10 === 0){
			this.currentPet.hung++
		}
	},
	boring(){
		if(this.time % 20 === 0){
			this.currentPet.bored++
		}	
	},
	getSleepy(){
		if(this.time % 30 === 0){
		this.currentPet.sleep++
		}
	},
	feed (){
		if(this.currentPet.hung <= 1){
			$('h3').html(`${this.currentPet.name} is full!`)
		}
		else if(2 <= this.currentPet.hung < 10){
			this.currentPet.hung = this.currentPet.hung - 2
			
		}
	},
	bedTime (){
		if(0 <= this.currentPet.sleep < 10){ // i played with the values in this line
			this.currentPet.sleep = this.currentPet.sleep - this.currentPet.sleep
	
		}
		// else{
		// 	$('h3').html(`${this.currentPet.name} is well rested!`)
		// }
	},
	play (){
		if(1 <= this.currentPet.bored < 10){// i played with the values in this line 
			this.currentPet.bored = this.currentPet.bored - 1
		}
		// else{
		// 	$('h3').html("Woooooopiieeeeee!")
		// }
	},	
	startGame(){
			let toma1 = new Tomagatchi(0,0,0,0,"")
			this.currentPet = toma1
			toma1.name = $('#input-box').val();
			$('#screen').append('<image id="toma1" src=https://vignette.wikia.nocookie.net/tamagotchi/images/c/c3/01.gif/revision/latest?cb=20090707084835">')
			this.intervalId = setInterval( 
				() =>{
					this.time++ 
					this.animate();
					this.displayHealth();
					this.growOld();
					this.imHungary();
					this.boring();
					this.getSleepy();
					this.evolve();
					if(this.currentPet.sleep === 10 || this.currentPet.bored === 10 || this.currentPet.hung === 10 || this.currentPet.age === 13){
						this.endGame();
					}
				},
				2000
			)
	},
	endGame(){
		clearInterval(this.intervalId)
		$('#toma1').remove()
		this.time = 0
		$('h3').html(`${this.currentPet.name} has not survived. You should take better care of your pets. Restart by hitting start game again!`)
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
// The two places that are commented out i cannot seem to force to work. i have played with the numbers in the conditions for
// the if statements to try and make those messages appear and not allow the player to "play with their pet too much".
// not essentioal to the game but def made it more fun to get those messages so if you can point me in the right direction to make it work that would be awesome!

