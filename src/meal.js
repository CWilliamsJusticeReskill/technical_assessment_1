/* 1
----Write a function called nameMenuItem that takes in any ONE item
----and returns a string with the word "Delicious" in front of the item name
*/

// Please write your code here
function nameMenuItem(item) {
  return "Delicious " + "" + item;
}
/* 2
----Write a function called createMeuItem that creates and return an object with the new item name, price and a type
----Your function should return an object with the keys of 'name', 'price' and 'type'
*/

// Please write your code here
var menuItemName = nameMenuItem;

function createMenuItem(name, price, type) {
  var menuItem = {
    name: name,
    price: price,
    type: type,
  };
  return menuItem;
}
console.log(createMenuItem());

/* 3
----Write a function called addIngredients that takes in the name of
----the ingredient and an array to store it in.
----Please be sure to not let the same ingredient be added on twice.
*/
// Please write your code here

function addIngredients(ingredient, ingredientsArray) {
  //var ingredients = [];

  if (ingredientsArray.includes(ingredient)) {
  } else {
    ingredientsArray.push(ingredient);
  }

  //return ingredients;
}
console.log(addIngredients());
/* 4
----Write a function called formatPrice that takes in a price
----and returns a '$' in front of the price passed in
*/

// Please write your code here
function formatPrice(price) {
  return "$" + price;
}

/* 6
----Write a function called decreasePrice that takes in a price
----and returns a price with a 10% reduction
*/

// Please write your code here
function decreasePrice(price) {
  var reduce = price * 0.1;
  return price - reduce;
}
/* 7
----Write a function called createRecipe that takes in a recipeTitle, recipeIngredients, and a menuType
----your function should create and return a recipe object with the following keys
----'title', 'ingredients', and 'type'
*/

// Please write your code here
function createRecipe(title, ingredients, type) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: type,
  };
  return recipe;
}
console.log(createRecipe);
