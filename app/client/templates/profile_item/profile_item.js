/*****************************************************************************/
/* ProfileItem: Event Handlers */
/*****************************************************************************/
// 6 - 8:02
Template.ProfileItem.events({
	'click [name="hate"]': function(e, tmpl){
		console.log("hate");
		var a = [1,2,3];
		var boo = lodash.includes(a, 1);
		console.log(a);
		console.log(boo);
	},

	'click [name="like"]': function(e, tmpl){

		// need to find my profile;
		var pid = Profiles.findOne({owner_id:Meteor.userId()})._id;
		var likes = Profiles.findOne({owner_id:Meteor.userId()}).likes;

		var updatedLikes;
		if (likes){
			updatedLikes = likes;
			var hasit = lodash.includes(likes, this._id);
			if (!hasit){
				updatedLikes.push(this._id);
			}
		}else{
			updatedLikes = [];
			updatedLikes.push(this._id);
		}
		// console.log(updatedLikes);

		Profiles.update({_id: pid}, {$set: {likes: updatedLikes}});


		// Over here we will also calculate to see if we can create a match
		findInsertMatch(pid, this._id);

		function findInsertMatch(myId, theirId){
			var thierLikes = Profiles.findOne({_id:theirId}).likes;
			var likeYouBack = lodash.includes(thierLikes, myId);

			// The below code will only get excuted if they like you back!
			if (likeYouBack){
				//we need to do this smarter
				var existMatch1 = Matches.findOne({from_id: pid, to_id: theirId});
				var existMatch2 = Matches.findOne({from_id: theirId, to_id: pid});
				var existMatch = existMatch1 || existMatch2;

				if (existMatch){
					console.log(existMatch);
					console.log("this match already exist");
				}else{
					console.log("this match gotta be created");
					Matches.insert({from_id: myId, to_id: theirId});
					Matches.insert({from_id: theirId, to_id: myId});
				}
			}
		};

		// function findInsertMatch(likes, pid){
		// 	likes.forEach(function(like) {
		// 		console.log(like);
		// 		//who do they like
		// 		var thierLikes = Profiles.findOne({_id:like}).likes;
		// 		//do they like you back
		// 		var likeYouBack = lodash.includes(thierLikes, pid);

		// 		//if they like you back, we insert a match
		// 		if (likeYouBack){
		// 			//does this match exit?
		// 			var existMatch = Matches.find({from_id: pid, to_id: like});
		// 			if (existMatch){
		// 				console.log("Match already exist")
		// 			}else{
		// 				Matches.insert({from_id: pid, to_id: like});

		// 			}
		// 		}
		// 	});			
		// };
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
