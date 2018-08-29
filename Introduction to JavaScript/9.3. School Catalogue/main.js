const menu = {
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: [],
    get appetizers() {
      return this._appetizers;
    },
    set appetizers(appetizerIn) {
      this._appetizers = appetizerIn;       // SGN : Added setter 
    },
    get mains() {
      return this._mains;
    },
    set mains(mainsIn) {
       this._mains = mainsIn;               // SGN : Added setter 
    },
    get desserts() {
      return this._desserts;
    },
    set desserts(dessertsIn){
        this._desserts = dessertsIn;        // SGN : Added setter 
    },
  },
  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts,
    };
  },

  /*  ==============================================================
    SGN : passed parameters to object
    ==============================================================   */


  addDishToCourse (courseName, dishName, dishPrice) {
     
    const dish = {
      name: dishName,   // SGN : Assigned dishName
      price: dishPrice, // SGN : Assigned dishPrice
    };
    this._courses[courseName].push(dish);
    },

/*  ==============================================================
    SGN : Added parameters for courseName, 
    ==============================================================   */

  getRandomDishFromCourse (courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const mains = this.getRandomDishFromCourse('mains');
    const desserts = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + mains.price + desserts.price;

    // SGN  Updated ${main.name} to ${mains.name}
    return `Your meal is ${appetizer.name}, ${mains.name}, ${desserts.name}, with a total price of ${totalPrice}.`;
  },
  
};
 
menu.addDishToCourse('appetizers', 'Caprese Salad', 5.00);

menu.addDishToCourse('appetizers', 'cheese curds', 6.00);

menu.addDishToCourse('appetizers', 'Hummus and Dip', 4.25);
 
menu.addDishToCourse('mains', 'Shrimp Flambee', 5.00);
menu.addDishToCourse('mains', 'Chicken Alfredo', 5.00);
menu.addDishToCourse('mains', 'Filet mignon', 5.00);

 
menu.addDishToCourse('desserts', 'Coconut Cake', 6.75);
menu.addDishToCourse('desserts', 'Starburst', 2.00);
menu.addDishToCourse('desserts', 'Chocolate Cake', 8.50);
 
let meal = menu.generateRandomMeal();
console.log(meal);