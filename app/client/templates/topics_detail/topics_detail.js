/*****************************************************************************/
/* TopicsDetail: Event Handlers */
/*****************************************************************************/
Template.TopicsDetail.events({
});

/*****************************************************************************/
/* TopicsDetail: Helpers */
/*****************************************************************************/
Template.TopicsDetail.helpers({
	comments: function() {
		// console.log(this._id);
		// var chats = Chats.find({topic_id: this._id}).fetch().sort({createdAt: -1});
		return Chats.find({topic_id: this._id}, 
			{sort: {createdAt: -1}
		});
	}
});

/*****************************************************************************/
/* TopicsDetail: Lifecycle Hooks */
/*****************************************************************************/
Template.TopicsDetail.onCreated(function () {
});

Template.TopicsDetail.onRendered(function () {
});

Template.TopicsDetail.onDestroyed(function () {
});
