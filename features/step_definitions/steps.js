const Person = require ('../../src/person.js')
const { Given, When, Then} = require('@cucumber/cucumber')
const {assertThat, is} = require('hamjest') 
   
       
Given('{person}  is located {int} metre(s) from seam', function(lucy,distance){
this.lucy= new Person()
this.sean= new Person()
this.lucy.moveTo(distance)
})

When('Seam shouts {string}',function(message) {
this.sean.shout(message)
this.message = message

})

Then('Lucy hears Seam´s message', function(){
  assertThat(this.lucy.messageHeard(), is([this.message]))

})
