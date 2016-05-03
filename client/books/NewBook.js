Template.NewBook.events({
  'click .fa-close': function () {
      Session.set('newBook',false);
  }
});
