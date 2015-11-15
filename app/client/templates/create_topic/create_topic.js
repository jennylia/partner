/*****************************************************************************/
/* CreateTopic: Event Handlers */
/*****************************************************************************/
Template.CreateTopic.events({
	'submit form': function(e, tmpl){
		e.preventDefault();

		var subject = tmpl.find('#topic').value;
		var description = tmpl.find('#description').value;
		console.log(subject);
		console.log(description);

		Topics.insert({
			name: subject,
			description: description,
			host: Meteor.userId,
			hostname: Meteor.user().emails[0].address
		})
	}
});

/*****************************************************************************/
/* CreateTopic: Helpers */
/*****************************************************************************/
Template.CreateTopic.helpers({
});

/*****************************************************************************/
/* CreateTopic: Lifecycle Hooks */
/*****************************************************************************/
Template.CreateTopic.onCreated(function () {
});

Template.CreateTopic.onRendered(function () {
});

Template.CreateTopic.onDestroyed(function () {
});
