import moment from 'moment';

Template.Users.onCreated(function(){
  this.autorun(() => {
    this.subscribe('allUsers');
  })
});

Template.Users.helpers({
  users: function(){
    return Meteor.users.find();
  },
  userEmail: function(){
    return this.emails[0].address;
  },
  isAdmin: function () {
    return Roles.userIsInRole(this.userId, 'admin')?'admin':'';
  },
  dateFormat: function(){
    return moment(this.createdAt).format('MMMM Do YYYY');
  },
  editMode: function(){
    return Session.get('currentUser')?'edit-mode':'';
  },
  currentEdit: function(){
    let user = Session.get('currentUser');
    return user._id ===this._id;
  },
  admin: function () {
     return Roles.userIsInRole(Meteor.userId(),'admin');
  }


});

Template.Users.events({
      'click .new-btn': function(){
        Session.set('newUser', true);
      },
      'click .user_id': function () {
        Session.set('currentUser',this);
      },
      'click .toggle-admin':function () {
          Meteor.call('toggleAdmin', this._id);
      }
  });
