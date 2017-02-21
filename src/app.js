$(function () {
    var $addDisciple = $('<button>', {
        click: function () {
            console.log('click')
        },
        text: 'dodaj dziecko'
    })

    var KinderGardenCollection = Backbone.Collection.extend({});
    var classes = new KinderGardenCollection();

    var Person = Backbone.Model.extend({})
    var disciple = new Person();


    console.log(classes)

    $('#buttons')
    .append($addDisciple)
})