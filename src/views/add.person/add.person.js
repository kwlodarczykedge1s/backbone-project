$(function(){
    var AppRouter = Backbone.Router.extend({
        routes: {
            'add-person': 'addPerson'
        },
        addPerson: function(){
            console.log('AddPerson');
        }
    });

    TableView = Backbone.View.extend({
        el: $('body'),
        initialize: function(){
            this.render();
        },
        render: function(){
            var template = _.template($('#add-person').html(), {});
            this.$el.html(template);

        }
    });


    Router = new AppRouter();
    Backbone.history.start();
})