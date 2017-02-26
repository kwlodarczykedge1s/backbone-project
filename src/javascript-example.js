(function () {
    //obiekty
    var obj = {
        name: 'Marek',
        lastname: 'Pylak'
    }
    //kopiowanie obiektu
    var copy = Object.assign({}, obj)
    console.log('obiekt skopiowany: ', copy)

    //konstruktor
    function Tree(name) {
        this.name = name;
    }

    var clone = new Tree('Klon');
    console.log('konstruktor: ' + clone.name);

    //object seal
    var obj = {
        prop: function () { },
        foo: 'bar'
    };
    obj.foo = 'baz';
    obj.lumpy = 'woof';
    delete obj.prop;

    var o = Object.seal(obj);

    console.log('obj', obj);
    console.log('o', o);

    // Object Values
    var obj1 = {
        prop: function () { },
        foo: 'bar'
    };

    console.log('Wartości obiektu:', Object.values(obj1));

    //Object.keys

    var obj2 = {
        prop: function () { },
        foo: 'bar'
    };

    //Prototypy

    console.log(Object.keys(obj2));

    Object.dupa = function () {
        return 'dupa';
    }

    var obj4 = new Object();
    console.log(obj4);

    //Klasy
    var Person = function (firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    var person1 = new Person("Marek", "Kowalski", 46);
    var person2 = new Person("Adrian", "Wołowski", 28)

    //Korzystanie z prototypu

    Person.prototype.getFullName = function () {
        return 'Witaj ' + this.firstName + ' ' + this.lastName;
    }

    Person.prototype.getAge = this.getAge = function () {
        return 'Twój wiek: ' + this.age;
    }

    console.log(person1.getFullName() + ' / ' + person1.getAge());
    console.log(person2.getFullName() + ' / ' + person2.getAge());

    //nadpisywanie metod
    person1.getFullName = function () {
        return 'Witaj ' + this.firstName.toUpperCase() + ' ' + this.lastName.toUpperCase();
    }
    console.log(person1.getFullName())

    //Dziedziczenie wielokrotne

    function Shape(sideLenghts) {
        this._name = null;
        this._sideLenghts = sideLenghts;
    }

    Shape.prototype.getPerimeter = function () {
        this._sideLenghts.reduce(function (prevValue, value) {
            return prevValue + value;
        })
    }
    var shape1 = new Shape([20, 30, 40, 50]);

    function Rectangle(sideLenghts) {
        this._name = 'Prostokąt';
        Shape.call(this, [sideLenghts[0], sideLenghts[1], sideLenghts[0], sideLenghts[1]])
    }

    var shape2 = new Rectangle([20, 10])
    console.log(shape2); //Rectangle {_name: null, _sideLenghts: Array[4]}

    function Square(sideLenght) {
        Rectangle.call(this, [sideLenght, sideLenght]);
        this._name = 'kwadrat';
    }

    var shape3 = new Square(20);
    console.log(shape3); //Square {_name: "kwadrat", _sideLenghts: Array[4]}

    // call()
    var animal = {
        race: 'Maltańczyk',
        color: 'Czarny'
    }

    function dog() {
        console.log('rasa: ' + this.race + ' / kolor: ' + this.color)
    }

    console.log(dog.call(animal)) // rasa: Maltańczyk / kolor: Czarny

    //apply()
    function sum(first, second, third){
        return first + second + third;
    }

    sum.apply(this, [2,6,8]) // pierwszy argument this, drugi tablica

    //bind()
    function sayHello(text){
        console.log(text + ' ' + this.firstName+ ' ' +this.lastName)
    }

    var person4 = {
        firstName: 'Mariusz',
        lastName: 'Kot'
    }

    var hello = sayHello.bind(person4, 'Cześć')
    hello()

    

})();