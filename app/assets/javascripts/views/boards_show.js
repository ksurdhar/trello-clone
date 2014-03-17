window.Trellino.Views.BoardShowView = Backbone.View.extend({
  template: JST['boards/show'],

  initialize: function(options){
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.lists(), "add", this.addList);
    this.listenTo(this.model.lists(), "remove", this.removeList);

    this.model.lists().each(this.addList.bind(this));

    var listNewView = new Trellino.Views.NewListView({
      board: this.model
    });
    this.addSubview(".list-new", listNewView);

  },

  addList: function(){


  },

  removeList: function(){

  },

  render: function(){
    
    this.$el.html( this.template({board: this.model}));
    return this;
  }

});