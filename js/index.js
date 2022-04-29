// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'Pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((onePeper) => {
    if (state.greenPeppers) {
      onePeper.style.visibility = 'visible';
    } else {
      onePeper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach((sauce) => {
    if (state.whiteSauce) {
      sauce.classList.add('sauce-white')
    } else {
      sauce.classList.remove('sauce-white')
    }
  });
}

function renderGlutenFreeCrust() {
  document.querySelectorAll('.crust').forEach((crust) => {
    if (state.glutenFreeCrust) {
      crust.classList.add('crust-gluten-free')
    } else {
      crust.classList.remove('crust-gluten-free')
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if (state.pepperoni === false) {
    document.querySelector(".btn.btn-pepperoni").classList.remove("active")
  }
  else {
    document.querySelector(".btn.btn-pepperoni").classList.add("active")
  }

  if (state.mushrooms === false) {
    document.querySelector(".btn.btn-mushrooms").classList.remove("active")
  }
  else {
    document.querySelector(".btn.btn-mushrooms").classList.add("active")
  }

  if (state.greenPeppers === false) {
    document.querySelector(".btn.btn-green-peppers").classList.remove("active")
  }
  else {
    document.querySelector(".btn.btn-green-peppers").classList.add("active")
  }

  if (state.whiteSauce === false) {
    document.querySelector(".btn.btn-sauce").classList.remove("active")
  }
  else {
    document.querySelector(".btn.btn-sauce").classList.add("active")
  }

  if (state.glutenFreeCrust === false) {
    document.querySelector(".btn.btn-crust").classList.remove("active")
  }
  else {
    document.querySelector(".btn.btn-crust").classList.add("active")
  }
};



function renderPrice() {
  let totalPrice = 10
  let listItems = document.querySelector('.panel.price ul');
  listItems.innerHTML = " ";

  for (let food in ingredients) {
    if (state[food]) {
      totalPrice += ingredients[food].price;
      listItems.innerHTML += `<li>$${ingredients[food].price} ${ingredients[food].name}</li>`;
    }
  }
  document.querySelector('.panel.price strong').innerHTML = `$${totalPrice}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});

