/*****************************************************************************/
/* ProfileList: Event Handlers */
/*****************************************************************************/
Template.ProfileList.events({
});

/*****************************************************************************/
/* ProfileList: Helpers */
/*****************************************************************************/
Template.ProfileList.helpers({
	profiles : function(){
		return Profiles.find();
	}
	});

/*****************************************************************************/
/* ProfileList: Lifecycle Hooks */
/*****************************************************************************/
Template.ProfileList.onCreated(function () {
});

Template.ProfileList.onRendered(function () {
});

Template.ProfileList.onDestroyed(function () {
});
