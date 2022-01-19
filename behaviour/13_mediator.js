// на примере чата
class User {
	constructor(name) {
		this.name = name
		this.room = null
	}

	send(message, to) {
		this.room.send(message, this, to)
	}

	receive(message, from) {
		console.log(`${from.name} => ${this.name}: ${message}`)
	}
}

class ChatRoom {
	constructor() {
		this.users = {}
	}

	register(user) {
		this.users[user.name] = user
		user.room = this
	}

	send(message, from, to) {
		if(to) {
			to.receive(message, from)
		} else {
			Object.keys(this.users).forEach(key => {
				if(this.users[key] !== from) {
					this.users[key].receive(message, from)
				}
			})
		}
	}
}

const koss = new User('Konstantyn')
const hela = new User('Elena')
const kat = new User('Katya')

const room = new ChatRoom()

// регистрируем пользователей в комнату
room.register(koss)
room.register(hela)
room.register(kat)

koss.send('Hello!', hela)  // отправим сообщение Елене от Константина
hela.send('Hello hello!', koss)
kat.send('Vsem privet')    // отправим сообщение всем
