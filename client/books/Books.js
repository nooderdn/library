
Template.Books.onCreated(function(){
  var self  = this;
  self.autorun(function () {
    self.subscribe('books');
  });
});

// Meteor.subscribe('books');

Template.Books.helpers({
  books: ()=>{
    return Books.find({});
  }
});
