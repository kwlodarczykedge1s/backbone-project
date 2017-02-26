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
    console.log('konstruktor: ' + clone.name)

    //object seal
    var obj = {
        prop: function () { },
        foo: 'bar'
    };

    obj.foo = 'baz'
    obj.lumpy = 'woof'
    delete obj.prop

    var o = Object.seal(obj)

    console.log('obj', obj)
    console.log('o', o)

    // Object Values
    var obj1 = {
        prop: function () { },
        foo: 'bar'
    };

    console.log('Wartości obiektu:', Object.values(obj1))

    //Object.keys

    var obj2 = {
        prop: function () { },
        foo: 'bar'
    };

    //Prototypy

    console.log(Object.keys(obj2))

    Object.dupa = function(){
        return 'dupa';
    }

    var obj4 = new Object();
    console.log(obj4)

    //Proto
    var Person = function(firstName, lastName, age){
       this.firstName = firstName;
       this.lastName = lastName;
       this.age = age;

       this.getFullName = function(){
           return 'Witaj ' + this.firstName + ' ' + this.lastName;
       }

       this.getAge = function(){
           return 'Twój wiek: ' + this.age;
       }
    }
    
    var person1 = new Person("Marek", "Kowalski", 46);
    var person2 = new Person("Adrian", "Wołowski", 28)
    console.log(person1.getFullName()+ ' / ' + person1.getAge())
    console.log(person2.getFullName()+ ' / ' + person2.getAge())



})();