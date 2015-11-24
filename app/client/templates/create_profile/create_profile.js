/*****************************************************************************/
/* CreateProfile: Event Handlers */
/*****************************************************************************/
Template.CreateProfile.events({
    'submit form': function (e, tmpl)
    {
        e.preventDefault();

        var profile = Profiles.find({owner_id: Meteor.userId()}).fetch()[0];
        console.log(profile);

        var nameT = tmpl.find('#name').value;
        var pictureT = tmpl.find('#picture').value;
        var websiteT = tmpl.find('#website').value;
        var majorT = tmpl.find('#major').value;
        var courseT = tmpl.find('#course').value;
        var bioT = tmpl.find('#bio').value;

        var name;
        var picture;
        var website;
        var major;
        var course;
        var bio;

        //This part is for cleaning the data. Please refactor this to something more effective
        if (profile)
        {
            nameT ? name = nameT : name = profile.name;
            pictureT ? picture = pictureT : picture = profile.picture;
            websiteT ? website = websiteT : website = profile.website;
            majorT ? major = majorT : major = profile.major;
            courseT ? course = courseT : course = profile.course;
            bioT ? bio = bioT : bio = profile.bio;

        } else
        {
            if (nameT)
            {
                name = nameT;
            }
            if (pictureT)
            {
                picture = pictureT;
            }
            if (websiteT)
            {
                website = websiteT;
            }
            if (majorT)
            {
                major = majorT;
            }
            if (courseT)
            {
                course = courseT;
            }
            if (bioT)
            {
                bio = bioT;

            }
        }

        console.log(name);
        console.log(picture);
        console.log(website);
        console.log(major);
        console.log(course);
        console.log(bio);

        //Profiles.update( {_id:"myMubWkP5NbbmhGWD"}, {$set: {name: "Jenny L"}})

        if (profile)
        {
            var pid = profile._id;
            console.log(pid);
            console.log("update is required!");


            Profiles.update({_id: pid},
            {
                $set: {
                    name: name,
                    picture: picture,
                    website: website,
                    major: major,
                    course: course,
                    bio: bio,
                    owner_id: Meteor.userId()
                }
            }
            );
        } else
        {
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
    },

    'change .myFileInput': function(event, template) {
        var profile = Profiles.find({owner_id: Meteor.userId()}).fetch()[0];
        var pid = profile._id;
        console.log("pid is: " + pid);

        FS.Utility.eachFile(event, 
            function(file) {
                Images.insert(file, function (err, fileObj) {
                    if (err){
             // handle error
             console.log("error happened upload upload");
             console.log(err);
         } else {
             // handle success depending what you need to do
             var userId = Meteor.userId();
             var imagesURL =  "/cfs/files/images/" + fileObj._id;
             console.log(imagesURL);
            //Don't know if this will work...
            // Meteor.users.update(userId, {$set: imagesURL});


            Profiles.update({_id: pid},
            {
                $set: {
                    profilePic: imagesURL
                }
            }
            );



            }
        });
            });
    }
});


/*****************************************************************************/
/* CreateProfile: Helpers */
/*****************************************************************************/
Template.CreateProfile.helpers({
    profile: function ()
    {
        var profile = Profiles.find({owner_id: Meteor.userId()}).fetch()[0];
        // console.log(profile);
        return profile;
    },

    noProfile: function ()
    {
        var profile = Profiles.find({owner_id: Meteor.userId()}).fetch()[0];
        if (profile)
        {
            return false;
        }
        return true;
    },

    placeholderText: function ()
    {
        var profile = Profiles.find({owner_id: Meteor.userId()}).fetch()[0];
        var textHelper = {};
        if (profile)
        {
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
    ,

    likes:function(){
        var profile = Profiles.find({owner_id: Meteor.userId()}).fetch()[0];
        return profile.likes;
    },

    likesNameArray: function(){
        var profile = Profiles.find({owner_id: Meteor.userId()}).fetch()[0];
        var likes = profile.likes;
        var names = [];
        likes.forEach(addName);
        function addName (element){
            var newName = Profiles.find({_id: element}).fetch()[0];
            names.push(newName);
            // console.log(newName);   
        }
        console.log(names);
        return names;
    }
});

/*****************************************************************************/
/* CreateProfile: Lifecycle Hooks */
/*****************************************************************************/
Template.CreateProfile.onCreated(function ()
{
});

Template.CreateProfile.onRendered(function ()
{
});

Template.CreateProfile.onDestroyed(function ()
{
});
