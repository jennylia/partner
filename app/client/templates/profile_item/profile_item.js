/*****************************************************************************/
/* ProfileItem: Event Handlers */
/*****************************************************************************/
// 6 - 8:02
Template.ProfileItem.events({
	'click [name=hate]': function(e, tmpl){
		console.log("hate");
	},

	'click [name="like"]': function(e, tmpl){

		// need to find the profile that belongs to this user
		var pid = Profiles.find({owner_id:Meteor.userId()}).fetch()[0]._id;
		console.log(pid);
		//To hack the problem with secure packages, we are going to store this in the profiles
		var Obj = Profiles.find({owner_id:Meteor.userId()}).fetch();
		// console.log(Obj);
		var likes = Profiles.find({owner_id:Meteor.userId()}).fetch()[0].likes;
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
