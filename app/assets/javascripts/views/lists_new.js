Trellino.Views.NewListView = Backbone.View.extend({
  template: JST["lists/new"],

  initialize: function(options){
    this.board = options.board
  },

  events: {
    "submit form": "submit"
  },

  render: function(){
    var renderedContent = this.template({
      board: this.board
    });

    this.$el.html(renderedContent);
    return this;
  },

  submit: function(event){
    var view = this;

    event.preventDefault();

    var params = $(event.currentTarget).serializeJSON()["list"]
    var list = new Trellino.Models.List(params);

    list.save({}, {
      success: function(){
        view.board.lists().add(list);
        // navigate anywhere? will board show render automatically?
      }
    });
  }
});