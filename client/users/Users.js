
Template.Users.onCreated(function(){
  this.autorun(() => {
    this.subscribe('allUsers');
  })
});

Template.Users.helpers({
  users: function(){
    return Meteor.users.find();
  },
  admin: function () {
     return Roles.userIsInRole(Meteor.userId(),'admin');
  }
});

Template.Users.events({
      'click .new-btn': function(){
        Session.set('newUser', true);
      }
  });
