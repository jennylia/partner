/*****************************************************************************/
/* CreateChat: Event Handlers */
/*****************************************************************************/
Template.CreateChat.events({

	'submit form': function(e, tmpl){
		e.preventDefault();

		var body = tmpl.find('#chat').value;
		Chats.insert({
			topic_id: this._id,
			author_id: Meteor.userId(),
			body: body,
			createdAt: new Date
		});
	}

});

/*****************************************************************************/
/* CreateChat: Helpers */
/*****************************************************************************/
Template.CreateChat.helpers({
});

/*****************************************************************************/
/* CreateChat: Lifecycle Hooks */
/*****************************************************************************/
Template.CreateChat.onCreated(function () {
});

Template.CreateChat.onRendered(function () {
});

Template.CreateChat.onDestroyed(function () {
});
