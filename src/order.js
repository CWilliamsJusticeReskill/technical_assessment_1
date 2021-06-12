/* 1
----Write a function called takeOrder that takes in a order and an orderArray
----your function should add to the ordersArray
----ordersArray should not be able to hold more than three orders at a time
*/
// Please write your code here
function takeOrder(order, orderArray) {
  if (orderArray.length === 3) {
    //return orderArray;
  } else {
    orderArray.push(order);
  }
}
console.log(takeOrder());
//
/* 2
----Write a function called refundOrder that takes in a orderNumber and an array of orders
----Your function should remove the order from the array of orders simply by the orderNumber
*/
// Please write your code here
function refundOrder(orderNumber, ordersArray) {
  console.log(ordersArray);
  //return ordersArray.orderNumber.pop;
  for (var i = 0; i < ordersArray.length; i++) {
    //const removedOrder = orderNumber.shift();
    //return removedOrder;

    ordersArray.orderNumber.pop();
    console.log(ordersArray);
  }
}
//
/* 4
----Write a function called listItems that takes in array of orders and
----lists out all of the order items by name
----HINT: please console log the array that is being passed into listItems
----I Have started out this code for you, just uncomment and continue working
*/
// Please write your code here
function listItems(arr) {
  return arr.listItems;
}

/* 5
----Write a function called searchOrder that takes in array of orders and
----a item. Your function should output if the item is included in the array of orders or not
*/
//
function searchOrder(ordersArray, item) {
  if (ordersArray.includes(item)) {
    return ordersArray.item;
  }
}
//
