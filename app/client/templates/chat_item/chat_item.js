/*****************************************************************************/
/* ChatItem: Event Handlers */
/*****************************************************************************/
Template.ChatItem.events({
});

/*****************************************************************************/
/* ChatItem: Helpers */
/*****************************************************************************/
Template.ChatItem.helpers({
	time: function(){
		return moment(this.CreatedAt).fromNow();
	}
});

/*****************************************************************************/
/* ChatItem: Lifecycle Hooks */
/*****************************************************************************/
Template.ChatItem.onCreated(function () {
});

Template.ChatItem.onRendered(function () {
});

Template.ChatItem.onDestroyed(function () {
});
