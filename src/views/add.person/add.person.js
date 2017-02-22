$(function(){
    var AddPersonRouter = Backbone.Router.extend({
        routes: {
            "addPerson": "add-person"
        },

    })

    new AddPersonRouter;
    Backbone.history.start();
})