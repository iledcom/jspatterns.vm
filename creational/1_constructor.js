// Раньше было так:
function Server1(name, ip) {
	this.name = name
	this.ip = ip
}

Server1.prototype.getUrl = function() {
	return `https://${this.ip}:80`
}

const aws1 = new Server1('AWS German', '82.21.21.32')
console.log(aws1.getUrl())

// Современная запись (после появления классов)

class Server {
	constructor(name, ip) {
		this.name = name
		this.ip = ip
	}

	getUrl() {
		return `https://${this.ip}:80`
	}
}


const aws = new Server('AWS Ukraine', '192.168.21.32')
console.log(aws.getUrl())