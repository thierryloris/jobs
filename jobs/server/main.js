
    jobs = new Meteor.Collection('jobs');

    Meteor.methods ({
        ajouteJob : function (post) {
            var timestamp = Math.round(new Date().getTime() / 1000);
            jobs.insert({
                title : post.tittle,
                contrat : post.contrat,
                competences : post.competences,
                mission : post.mission,
                time : timestamp
            });
        }
    });

Meteor.startup(() => {
  // coe to run on server at startup
});
