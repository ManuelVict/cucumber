const { Given, When, Then, Before } = require('@cucumber/cucumber')
const { assertThat, is } = require('hamjest')
const { Person } = require('../../src/person')
const { Network } = require('../../src/network')


Before(function () {
  this.network = new Network()
  this.people = {}
})

Given('a person named {word}', function (name) {
  this.people[name] = new Person(this.network)
})

When('Sean shouts {string}', function (message) {
  this.people['Sean'].shout(message)
  this.messageFromSean = message
})

Then('Lucy should hear Sean\'s message', function () {
  assertThat(this.people['Lucy'].messagesHeard(), is([this.messageFromSean]))
})