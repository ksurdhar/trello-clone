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
