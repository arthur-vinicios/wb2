const  fs = require('fs')



values = JSON.parse(fs.readFileSync('./userss.json'))

v = values.filter(function (a) {
	return !this[JSON.stringify(a)] && (this[JSON.stringify(a)] = true);
}, Object.create(null))

console.log(v)
values.push(v)
fs.writeFileSync('./n.json',JSON.stringify(values))

