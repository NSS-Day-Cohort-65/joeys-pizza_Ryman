/* 
  The owners of Joey's Pizza want your team to develop some software
  that allows employees to build customer pizzas with 2 toppings, at the
  right size, get it paid for, bake it, and then output a message that
  it is being delivered.

  The delivery message should only happen if the pizza has been paid for.




  Goals of the pizza project:
  ---------------------------
    1. Function for adding the toppings to the pizza
    2. Function that bakes a pizza
    3. Function that adds `size` property to pizza
    4. Function to mark the pizza as being paid.
    5. Function that logs a "Your {pizza details} is being delivered".
          If pizza is not paid for yet, display "Please pay us first"
    6. Each function copies the input object and returns
          modified copy
*/

//declare a variable named pizza with a value of an empty object

const createPizza = () => {
      const pizza = {}
      return pizza
}

const pizzaObject = createPizza() 

console.log(pizzaObject)
// 1. Function for adding the toppings to the pizza object

//create function named addTopping with a single parameter for the pizza object
const addTopping = (t) => {
      //use dot notation to add a topping propery to the pizza object
      t.topping = "pepperoni"
      //return the pizza object   
}

// 2. Function that bakes a pizza

//create a function called bakePizza 
const bakePizza = (pizza) => {
      //use dot notation to add a baked property with a value of true
      pizza.bake = true
      //return the pizza    
}

addTopping(pizzaObject)
console.log(pizzaObject)

bakePizza(pizzaObject)
console.log(pizzaObject)