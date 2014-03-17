Trellino.Models.Board = Backbone.Model.extend({
  rootUrl: "/boards",

  initialize: function(){
    this.lists = new Trellino.Collections.Lists([], {
      board: this
    });
  }


});