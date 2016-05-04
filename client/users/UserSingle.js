Template.UserSingle.onCreated(function(){
  var self  = this;
  self.autorun(function () {
    var id = FlowRouter.getParam('id');
    self.subscribe('singleUser', id);
  });
});

// Meteor.subscribe('books');

Template.UserSingle.helpers({
  user: ()=>{
    var id = FlowRouter.getParam('id');
    return Meteor.users.findOne({_id: id});
  }
});
