/*****************************************************************************/
/* CreateProfile: Event Handlers */
/*****************************************************************************/
Template.CreateProfile.events({
	'submit form': function(e, tmpl){
		e.preventDefault();

		var profile = Profiles.find({owner_id: Meteor.userId()}).fetch()[0];
		var pid = profile._id;
		console.log(profile);

		if (profile){
			console.log("update is required!");
		}else{
			console.log("create a new user profile");
		}
		var name = tmpl.find('#name').value;
		var picture = tmpl.find('#picture').value;
		var website = tmpl.find('#website').value;
		// var  = tmpl.find('#').value;
		// var  = tmpl.find('#').value;
		// var  = tmpl.find('#').value;
		// var  = tmpl.find('#').value;

		// console.log(subject);
		// console.log(description);

		// Topics.insert({
		// 	name: subject,
		// 	description: description,
		// 	host: Meteor.userId,
		// 	hostname: Meteor.user().emails[0].address
		// })
}
});



/*****************************************************************************/
/* CreateProfile: Helpers */
/*****************************************************************************/
Template.CreateProfile.helpers({
	profile: function(){
		var profile = Profiles.find({owner_id: Meteor.userId()}).fetch()[0];
		// console.log(profile);
		return profile;
	},

	noProfile : function(){
		var profile = Profiles.find({owner_id: Meteor.userId()}).fetch()[0];
		if (profile){
			return false;
		}
		return true;
	}
});

/*****************************************************************************/
/* CreateProfile: Lifecycle Hooks */
/*****************************************************************************/
Template.CreateProfile.onCreated(function () {
});

Template.CreateProfile.onRendered(function () {
});

Template.CreateProfile.onDestroyed(function () {
});
