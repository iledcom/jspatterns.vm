const car = {
	wheels: 4,

	init() {
		console.log(`У меня есть ${this.wheels} колеса, мой владелец ${this.owner}`)
	}
}

const carWithOwner = Object.create(car, {
	owner: {
		value: 'Konstantyn'
	}
})

console.log(carWithOwner.__proto__ === car)  // сравнение прототипов

carWithOwner.init()