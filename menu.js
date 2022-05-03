///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/


//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

//CODE HERE

let pizza = {
    name: "Dave's Fave",
    price: 8,
    category: "Main dish",
    popularity: 8,
    rating: 4.2,
    tags: ['House Special', 'Meat lover', 'Giant pizza', 'Best Dish'],
}



//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/

//CODE HERE
//console.log(pizza.popularity)


/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

//CODE HERE
//console.log(pizza['tags'][1])


/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/

//CODE HERE
let { price } = pizza;
//console.log(price)


/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/

//CODE HERE
let { category } = pizza;
//console.log(category)

//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

//CODE HERE

let foodArr = [{
    name: "The Veggie Reggie",
    price: 9.99,
    category: "Entree",
    popularity: 5.7,
    rating: 2.2,
    tags: ['Vegetarian', 'Gluten Free', 'Pasta'],
}, {
    name: "El Luchador",
    price: 10.99,
    category: "Entree",
    popularity: 7.7,
    rating: 3.8,
    tags: ['Protein', 'Spicy', 'Burrito', 'High in calories'],
}, {
    name: "The Porky Pig",
    price: 12.99,
    category: "Entree",
    popularity: 9.3,
    rating: 4.7,
    tags: ['Protein', 'Saucy', 'Baby Back Ribs', 'House Favorite'],
}, {
    name: "The dilly-dilly",
    price: 6.99,
    category: "Appetizer",
    popularity: 6.8,
    rating: 4,
    tags: ['Vegetable', 'Fried Pickles', 'Snack', 'Mild'],
}, {
    name: "The Lava Flow",
    price: 7.99,
    category: "Dessert",
    popularity: 7.5,
    rating: 3.7,
    tags: ['Dessert', 'Chocolate Lava Cake', 'High in calories'],
}]



//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/

//CODE HERE

const filteredFood = foodArr.filter(food => food.tags.includes('Saucy'))
//console.log(filteredFood)


//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for 
    food that has above a certain rating, 
    below a certain price, or any other combo.

    Write a function called `filterByProperty`
    that takes in three arguments: `property`, 
    `number`, and `type. 

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against 

    The type should be 'above' or 'below' to 
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, 
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type isn't `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/

//CODE HERE
let filterByProperty = (property, number, type) => foodArr.filter(food => {
    if (type === 'above') {
        return food[property] > number
    } else if (type === 'below') {
        return food[property] < number
    }
    return food
})

//let filter = (cb) => {
//    const filteredArr =[]
//    for (let i = 0; i < foodArr.length; i++) {
//        if (cb(foodArr[i])){
//            filteredArr.push(foodArr[i])
//        }
//    }
//    return filteredArr
//}

/*
    Invoke the `filterByProperty` function passing
    in a value for each paramter.

    You'll have to console.log to see the filtered array
*/

//CODE HERE

console.log(filterByProperty('price', 10, 'above'))

//I really struggled with this one. Spent about 3+ hours trying to figur it out but felt I made progress but then hit another roadblock, Would love to go over this with one of you two.