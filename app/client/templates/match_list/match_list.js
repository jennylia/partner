/*****************************************************************************/
/* MatchList: Event Handlers */
/*****************************************************************************/
Template.MatchList.events({
});

/*****************************************************************************/
/* MatchList: Helpers */
/*****************************************************************************/
Template.MatchList.helpers({
	// This is a customized view...
	// You are looking up all the profiles that are matched by this user 
	//and that are being matches back
	matches: function(){
		var curProfile = Profiles.find({'owner_id': Meteor.userId()}).fetch()[0];
		var profileId = curProfile._id;
		var myMatches = Matches.find({from_id: profileId}).fetch();
		var myMatchedProfiles = [];
		myMatches.forEach(function(data){
			var lookupId = data.to_id;
			var tempProfile = Profiles.findOne({'_id': lookupId});
			if (tempProfile){
				myMatchedProfiles.push(tempProfile);
			}
		});
		return myMatchedProfiles;
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
