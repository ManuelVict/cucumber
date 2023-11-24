const Person = require('../../src/person.js')
const {defineParameterType} = require('@cucumber/cucumber')

defineParameterType({
    name: 'person',
    regexp: /Lucy|Sean/,
    transformer:  name => new Person(name)
})