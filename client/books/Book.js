Template.Book.onCreated(function () {
    this.editMode = new ReactiveVar(false);
      // this.editMode = new ReactiveVar();
      // this.editMode.set(false);
});

Template.Book.helpers({
    updateBookId: function () {
        return this._id;
    },
    editMode: function () {
        return Template.instance().editMode.get();
    }
});

Template.Book.events({
    'click .fa-trash':function(){
      Meteor.call('deleteBook', this._id);
    },
    'click .fa-pencil':function(event, template){
      template.editMode.set(!template.editMode.get());
    }
})
