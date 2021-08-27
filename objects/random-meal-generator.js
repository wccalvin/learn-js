const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set appetizers(appetizers) {
    this._courses.appetizer = appetizers;
  },
  set mains(mains) {
    this._courses.mains = mains;
  },
  set desserts(desserts) {
    this._courses.desserts = desserts;
  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your selected meal is ${appetizer.name}, ${main.name} and ${dessert.name} and the total price is ${totalPrice}.`;
  },
};

menu.addDishToCourse('appetizers', 'Fries', 3.50);
menu.addDishToCourse('appetizers', 'Wings', 8.00);
menu.addDishToCourse('appetizers', 'Fried Calamari', 11.00);

menu.addDishToCourse('mains', 'steak', 17.50);
menu.addDishToCourse('mains', 'Fried Chicken', 15.50);
menu.addDishToCourse('mains', 'Blackened Salmon', 21.50);

menu.addDishToCourse('desserts', 'Tiramisu', 8.00);
menu.addDishToCourse('desserts', 'Fried Icecream', 9.25);
menu.addDishToCourse('desserts', 'Chocolate lava cake', 7.00);

const meal = menu.generateRandomMeal();
console.log(meal);
