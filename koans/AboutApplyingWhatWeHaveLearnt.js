var _; // globals

describe("About Applying What We Have Learnt", function() {
  var products;

  beforeEach(function() {
    products = [
      {
        name: "Sonoma",
        ingredients: ["artichoke", "sundried tomatoes", "mushrooms"],
        containsNuts: false
      },
      {
        name: "Pizza Primavera",
        ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"],
        containsNuts: false
      },
      {
        name: "South Of The Border",
        ingredients: ["black beans", "jalapenos", "mushrooms"],
        containsNuts: false
      },
      {
        name: "Blue Moon",
        ingredients: ["blue cheese", "garlic", "walnuts"],
        containsNuts: true
      },
      {
        name: "Taste Of Athens",
        ingredients: ["spinach", "kalamata olives", "sesame seeds"],
        containsNuts: true
      }
    ];
  });

  /*********************************************************************************/

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (imperative)", function() {
    var i,
      j,
      hasMushrooms,
      productsICanEat = [];

    for (i = 0; i < products.length; i += 1) {
      if (products[i].containsNuts === false) {
        hasMushrooms = false;
        for (j = 0; j < products[i].ingredients.length; j += 1) {
          if (products[i].ingredients[j] === "mushrooms") {
            hasMushrooms = true;
          }
        }
        if (!hasMushrooms) productsICanEat.push(products[i]);
      }
    }

    expect(productsICanEat.length).toBe(1);
  });

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)", function() {
    var productsICanEat = [];

    /* solve using filter() & all() / any() */

    var answer = function(arrayOfProducts) {
      for (i = 0; i < arrayOfProducts.length; i++) {
        if (
          _(arrayOfProducts[i].ingredients).all(
            ingredient => ingredient != "mushrooms"
          )
        ) {
          if (arrayOfProducts[i].containsNuts === false) {
            productsICanEat.push(arrayOfProducts[i]);
          }
        }
      }
      return Object.values(productsICanEat).length - 1;
    };

    expect(productsICanEat.length).toBe(answer(products));
  });

  /*********************************************************************************/

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (imperative)", function() {
    var sum = 0;

    for (var i = 1; i < 1000; i += 1) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }

    expect(sum).toBe(233168);
  });

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (functional)", function() {
    var sum = _.range(1, 1000).reduce(function(acc, el) {
      if (el % 3 === 0 || el % 5 === 0) {
        return acc + el;
      }
      return acc;
    }, 0);

    /* try chaining range() and reduce() */

    expect(233168).toBe(sum);
  });

  /*********************************************************************************/
  it("should count the ingredient occurrence (imperative)", function() {
    var ingredientCount = { "{ingredient name}": 0 };

    for (i = 0; i < products.length; i += 1) {
      for (j = 0; j < products[i].ingredients.length; j += 1) {
        ingredientCount[products[i].ingredients[j]] =
          (ingredientCount[products[i].ingredients[j]] || 0) + 1;
      }
    }

    expect(ingredientCount["mushrooms"]).toBe(2);
  });

  it("should count the ingredient occurrence (functional)", function() {
    var ingredientCount = { mushrooms: 2 };

    var countIngredient = function(ingredient) {
      let ingredients = [];
      products.forEach(product => {
        ingredients.push(product.ingredients);
      });
      let hash = _.flatten(ingredients).reduce((tally, el) => {
        tally[el] = (tally[el] || 0) + 1;
        return tally;
      }, {});
      return hash[ingredient];
    };

    expect(ingredientCount["mushrooms"]).toBe(countIngredient("mushrooms"));
  });

  /*********************************************************************************/
  /* UNCOMMENT FOR EXTRA CREDIT */

  it("should find the largest prime factor of a composite number", function() {
    let largestPrime = function(n) {
        return false;
      }

    expect("ANSWER").toBe(largestPrime(1000));
  });

  it("should find the largest palindrome made from the product of two 3 digit numbers", function() {
    let largestPalindrome = function(num1, num2) {
      return num1 + num2;
    };
    expect("ANSWER").toBe(largestPalindrome(101, 298));
  });

  it("should find the smallest number divisible by each of the numbers 1 to 20", function() {
    let smallest = function() {
      let result = 2;
      let flag = true;
      while (flag) {
        for (let i = 1; i <= 20; i++) {
          if (result % i === 0) {
            flag = false;
          } else {
            flag = true;
          }
        }
        result += 1;
      }
      return result;
    };
    expect("ANSWER").toBe(smallest());
  });

  it("should find the difference between the sum of the squares and the square of the sums", function() {
    let difference = function(num1, num2) {
      return num1 + num2;
    };
    expect("ANSWER").toBe(difference(101, 298));
  });

  it("should find the 10001st prime", function() {
    let nthPrime = function(n) {
      return n;
    };
    expect("ANSWER").toBe(nthPrime(10001));
  });
});
