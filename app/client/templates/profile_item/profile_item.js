/*****************************************************************************/
/* ProfileItem: Event Handlers */
/*****************************************************************************/
// 6 - 8:02
Template.ProfileItem.events({
	'click [name=hate]': function(e, tmpl){
		console.log("hate");
	},

	'click [name="like"]': function(e, tmpl){
		console.log("like");
	}
});

/*****************************************************************************/
/* ProfileItem: Helpers */
/*****************************************************************************/
Template.ProfileItem.helpers({
});

/*****************************************************************************/
/* ProfileItem: Lifecycle Hooks */
/*****************************************************************************/
Template.ProfileItem.onCreated(function () {
});

Template.ProfileItem.onRendered(function () {
});

Template.ProfileItem.onDestroyed(function () {
});
