window.Trellino = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {

    Trellino.boards = new Trellino.Collections.Boards();
   
    Trellino.boardsRouter = new Trellino.Routers.AppRouter({
      $rootEl: $('#content')
    });
    Backbone.history.start();
  }
};

Backbone.CompositeView = Backbone.View.extend({
  addSubview: function(selector, subview){
    var selectorSubviews = 
      this.subviews()[selector] || (this.subviews()[selector] = []);

    selectorSubviews.push(subview);
    var $selectorEl = this.$(selector);
    $selectorEl.append(subview.$el);
  }
})
