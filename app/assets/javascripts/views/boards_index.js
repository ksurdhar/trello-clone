Trellino.Views.BoardsIndexView = Backbone.View.extend({
	template: JST['boards/index'],

	initialize: function(){
		this.listenTo(this.collection, "remove", this.render);
	},

	events: {
		'click button.destroy': 'killBoard'
	},

	render: function(){
		var renderedContent = this.template({
      boards: this.collection
    });

    this.$el.html(renderedContent);

    return this;
	},

	killBoard: function(event){
		var board = this.collection.get($(event.target).data("id"));
		board.destroy();
	}

});