
jobs = new Meteor.Collection('jobs');

Template.hello.events({
   'submit .formulaire': function(event) {
      event.preventDefault();
      var post = {
          tittle :   document.getElementById('titlejob').value,
          contrat :   document.getElementById('contrat').value,
          competences :   document.getElementById('compétences').value,
          mission :   document.getElementById('mission').value,
      }
      if ( (post.tittle != "") && (post.contrat != "") ) {
          Meteor.call("ajouteJob", post);
      }
  }
});

Template.hello.events({
  'submit .description': function(event) {
     event.preventDefault();
     console.log(this);
     var data = this;
  }
})

Template.hello.helpers({
    derniersMessages : function() {
      return jobs.find({});
     }
});

Template.jobdescription.helpers({
    jobdescription : function() {

     }
});
import './main.html';
