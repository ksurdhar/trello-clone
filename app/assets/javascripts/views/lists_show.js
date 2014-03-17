Trellino.Views.ShowListView = Backbone.View.extend({
  attributes: function(){
    return{
      "data-id": this.model.get("id")
    };
  }

});
