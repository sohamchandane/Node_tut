//Node uses CommonJS behind the scenes, and every file is a module

const names = require('./4_names')
const func = require('./5_func')
const data = require('./6_altMethd')
require('./7_randomfile')

console.log(names)
func('manish')
func('prakash')
func(names.name3)
func(names.name2)

console.log(data.items);
console.log(data.singlePerson);
