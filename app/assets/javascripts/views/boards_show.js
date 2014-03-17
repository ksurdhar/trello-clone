window.Trellino.Views.BoardShowView = Backbone.View.extend({
  template: JST['boards/show'],

  initialize: function(options){
    this.listenTo(this.model, "change update sync", this.render);
  },

  render: function(){
    
    this.$el.html( this.template({board: this.model}));
    return this;
  }

});