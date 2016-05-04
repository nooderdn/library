import moment from 'moment';

Template.User.onCreated(function () {
    this.editUserMode = new ReactiveVar(false);
});

Template.User.helpers({
    updateUserId: function () {
        return this._id;
    },
    editUserMode: function () {
        return Template.instance().editUserMode.get();
    },
    userEmail: function(){
      return this.emails[0].address;
    },
    isAdmin: function () {
      return Roles.userIsInRole(this._id, 'admin')?'admin':'';
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

Template.User.events({
  'click .user_id': function () {
    Session.set('currentUser',this);
  },
  'click .toggle-admin':function () {
      Meteor.call('toggleAdmin', this._id);
  },
  'click .edit-user':function (event, template) {
      template.editUserMode.set(!template.editUserMode.get());
  },
  'click .delete-user':function () {
      Meteor.call('deleteUser', this._id)
  }
})
