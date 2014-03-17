window.Trellino.Views.BoardFormView = Backbone.View.extend({
	template: JST['boards/new'],

	initialize: function(options){
		this.listenTo(this.model, "change update add", this.render);
	},

	events: {
		'click #submit-new-board' : 'submitBoard'
	},

	submitBoard: function(event){
		var formView = this;
		event.preventDefault();
		var data = $('#new-board-form').serializeJSON()["board"]
		
		this.model.collection = this.collection;

		this.model.save(data, {
			success: function(model) {
				if (formView.collection.get(model.id)){
					Backbone.history.navigate("#boards/" + model.id, {trigger: true});
				} else {
					formView.collection.add(model);
					Backbone.history.navigate("#boards/" + model.id, {trigger: true});
				}
			},
			error: function(model, errors){
				formView.render();
				formView.displayErrors(errors.responseText);
			}
		});
	},

	render: function(){
		this.$el.html(this.template({ attrs: this.model.attributes }));
		return this;
	},

	displayErrors: function(errors){
		(this.$el).prepend(JST["errors"]({errors: errors}))
	}

});