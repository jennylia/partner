/*****************************************************************************/
/* TopicItem: Event Handlers */
/*****************************************************************************/
Template.TopicItem.events({
	'click button': function(e,t){
		var id = this._id;
		Topics.remove(id);
	}
});

/*****************************************************************************/
/* TopicItem: Helpers */
/*****************************************************************************/
Template.TopicItem.helpers({
});

/*****************************************************************************/
/* TopicItem: Lifecycle Hooks */
/*****************************************************************************/
Template.TopicItem.onCreated(function () {
});

Template.TopicItem.onRendered(function () {
});

Template.TopicItem.onDestroyed(function () {
});
