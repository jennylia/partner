/*****************************************************************************/
/* ProfileItem: Event Handlers */
/*****************************************************************************/
// 6 - 8:02
Template.ProfileItem.events({
	'click [name=hate]': function(e, tmpl){
		console.log("hate");
	},

	'click [name="like"]': function(e, tmpl){

		// need to find my profile;
		var pid = Profiles.findOne({owner_id:Meteor.userId()})._id;
		var likes = Profiles.findOne({owner_id:Meteor.userId()}).likes;

		var updatedLikes;
		if (likes){
			updatedLikes = likes;
			updatedLikes.push(this._id);

		}else{
			updatedLikes = [];
			updatedLikes.push(this._id);

		}
		console.log(updatedLikes);

		Profiles.update({_id: pid}, {$set: {likes: updatedLikes}});



		// Over here we will also calculate to see if we can create a match
		findMatch();

		function findMatch(){
			console.log("meh");
		}
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
