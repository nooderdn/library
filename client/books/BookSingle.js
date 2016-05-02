Template.BookSingle.onCreated(function(){
  var self  = this;
  self.autorun(function () {
    var id = FlowRouter.getParam('id');
    self.subscribe('singleBook', id);
  });
});

// Meteor.subscribe('books');

Template.BookSingle.helpers({
  book: ()=>{
    var id = FlowRouter.getParam('id');
    return Books.findOne({_id: id});
  }
});
