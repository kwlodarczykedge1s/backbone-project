$(function () {

    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'index',
            'add-person': 'person',

        },
        index: function(){
            $(document.body).append('Index Route')
        },
        person: function(){
            $(document.body).append('Add Person Route Route')
        }
    })

    var myRouter = new AppRouter();

    // var $addDisciple = $('<button>', {
    //     click: function () {
    //         console.log('click')
    //     },
    //     class: ['btn btn-primary'],
    //     text: 'dodaj dziecko'
    // })

    // var KinderGardenCollection = Backbone.Collection.extend({});
    // var classes = new KinderGardenCollection();

    // var Person = Backbone.Model.extend({
    //     name: null,
    //     lastName: null,
    //     age: null
    // })
    // var disciple = new Person({
    //     name: 'Jan',
    //     lastName: 'Kowalski',
    //     age: '15'
    // });

    // $('#buttons')
    // .append($addDisciple)
})