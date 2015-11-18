/*****************************************************************************/
/* MatchList: Event Handlers */
/*****************************************************************************/
Template.MatchList.events({
});

/*****************************************************************************/
/* MatchList: Helpers */
/*****************************************************************************/
Template.MatchList.helpers({
	matches: function(){
		return Matches.find();
	}
});

/*****************************************************************************/
/* MatchList: Lifecycle Hooks */
/*****************************************************************************/
Template.MatchList.onCreated(function () {
});

Template.MatchList.onRendered(function () {
});

Template.MatchList.onDestroyed(function () {
});
