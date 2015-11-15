/*****************************************************************************/
/* CreateProfile: Event Handlers */
/*****************************************************************************/
Template.CreateProfile.events({
	'submit form': function(e, tmpl){
		e.preventDefault();

		var profile = Profiles.find({owner_id: Meteor.userId()}).fetch()[0];
		console.log(profile);

		
		var name = tmpl.find('#name').value;
		var picture = tmpl.find('#picture').value;
		var website = tmpl.find('#website').value;
		var major = tmpl.find('#major').value;
		var course = tmpl.find('#course').value;
		var bio = tmpl.find('#bio').value;


		console.log(name);
		console.log(picture);
		console.log(website);
		console.log(major);
		console.log(course);
		console.log(bio);


		if (profile){
			var pid = profile._id;
			console.log(pid);
			console.log("update is required!");
		}else{
			Profiles.insert({
				name: name,
				picture: picture,
				website: website,
				major: major,
				course: course,
				bio: bio,
				owner_id: Meteor.userId()
			})

		}
	}});



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
	},

	// nameText: function(){

	// },

	// pictureText: function(){

	// },

	// majorText: function(){

	// },

	// courseText: function(){

	// },

	// bioText: function(){

	// }

	placeholderText : function(){
		var profile = Profiles.find({owner_id: Meteor.userId()}).fetch()[0];
		var textHelper = {};
		if (profile){
			textHelper.name = profile.name;
			textHelper.picture = profile.picture;
			textHelper.major = profile.major;
			textHelper.course = profile.course;
			textHelper.website = profile.website;
			textHelper.bio = profile.bio;
		}

		return textHelper;
	}
	// var picture = tmpl.find('#picture').value;
	// var website = tmpl.find('#website').value;
	// var major = tmpl.find('#major').value;
	// var course = tmpl.find('#course').value;
	// var bio = tmpl.find('#bio').value;
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
