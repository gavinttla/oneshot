var customer = { name: "Foo" }
var card = { amount: 7, product: "Bar", unitprice: 42 }
var message = `Hello ${customer.name},
want to buy\n \\ ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`

console.log(message);