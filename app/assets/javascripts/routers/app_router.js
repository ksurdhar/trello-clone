Trellino.Routers.AppRouter = Backbone.Router.extend({
	initialize:function(options){
		this.$rootEl = options.$rootEl;
	},

	routes: {
		"": "boardsIndex",
		"boards/new": "boardNew",
		"boards/:id": "boardShow"
	},

	boardsIndex: function(){
		
		var view = new Trellino.Views.BoardsIndexView({
			collection: Trellino.boards
		});
		// debugger
		this._swapView(view);
	},

	boardNew: function(){
		var board = new Trellino.Models.Board()
		var view = new Trellino.Views.BoardFormView({
			collection: Trellino.boards,
			model: board
		});

		this._swapView(view);
	},

	boardShow: function (id){
		var that = this;
		this._getBoard(id, function (board){
			var view = new Trellino.Views.BoardShowView({
				model: board
			});
			that._swapView(view);
		});
	},

	_getBoard: function (id, callback){
		var that = this;
		var board = Trellino.boards.get(id);
		if(!board){
			board = new Trellino.Models.Board({ id: id });
			board.collection = Trellino.boards;
			board.fetch({
				success: function(){
					Trellino.boards.add(board);
					callback(board);
				}
			});
		} else{
			callback(board);
		}
	},

	_swapView: function(view){
 		this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
	}

});