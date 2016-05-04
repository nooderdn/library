
Meteor.publish('books',function () {
    return Books.find();
});

Meteor.publish('singleBook',function (id) {
    check(id, String);
    return Books.find({_id: id});
})


Meteor.publish('allUsers',function () {
  if(Roles.userIsInRole(this.userId,'admin'))
  {
    return Meteor.users.find({});
  }
});

Meteor.publish('singleUser',function (id) {
    check(id, String);
    return Meteor.users.find({_id: id});
})
