///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
//console.log(summedPrice)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
let calcFinalPrice = (cartTotal, couponValue, tax) => (cartTotal * (1 + tax)) - couponValue

console.log(calcFinalPrice(10, 5, .06))


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    nameForParty - string - So that we have a name
    partySize - number - So we know how many people are in that party
    reservationTime - number - So we know when to expect them
    needBoosterSeatOrHighChair - boolean - So we know if they have children, a table that accomodates booterSeats or highChair.
    over21 - boolean -  So we know we can seat them in the bar and can order drinks.
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
let customer = {
    nameFotParty: 'David',
    partySize: 1,
    reservationTime: 6,
    needsBoosterSeatOrHighChair: false,
    over21: true,
}

console.log(customer)