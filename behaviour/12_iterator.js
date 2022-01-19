class MyIterator {
	constructor(data) {
		this.index = 0
		this.data = data
	}

	[Symbol.iterator]() {
		return {
			next: () => {
				if(this.index < this.data.length) {
					return {
						value: this.data[this.index++],
						done: false
					}
				} else {
					this.index = 0
					return {
						done: true,
						value: void 0
					}
				}
			}
		}
	}
}

// использование генераторов

function* generator(collection) {
	let index = 0

	while(index < collection.length) {
		yield collection[index++]
	}
}

const iterator = new MyIterator(['this', 'is', 'iterator'])

for(const val of iterator) {
	console.log('Value: ', val)
}

const gen = generator(['this', 'is', 'iterator'])

for(const val of gen) {
	console.log('Value: ', val) // получим те же значения, что и при for(const val of iterator)
}

const gen2 = generator(['this', 'is', 'iterator'])

console.log(gen2.next().value) // this
console.log(gen2.next().value) // is
console.log(gen2.next().value) // iterator
console.log(gen2.next().value) // undefined