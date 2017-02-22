$(function () {

    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'index',
        },
        index: function(){
            console.log('Index');
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
    var personTable = new TableView({
        el: $('#person-table')
    });

});