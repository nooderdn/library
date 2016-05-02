Books = new Mongo.Collection('books');

Books.allow({
  insert: function(userId,doc){
    return !!userId;
  },
  update: function (userId, doc) {
    return !!userId;
  }
})

BookSchema = new SimpleSchema({
   title: {
     type: String,
     label: "Title",
   },
   author: {
     type: String,
     label: "Author"
   },
   releasedYear:{
     type: Number,
     label: "Released Year",
     autoValue: function() {
       var date = new Date();
       return date.getFullYear();
     }
   },
   edition:{
     type: String,
     label: "Edition"
   },
   desc: {
     type: String,
     label: "Description"
   },
   createdAt: {
      type: Date,
      label: "Created At",
      autoValue: function () {
        return new Date();
      },
      autoform: {
        type: "hidden"
      }
   }
});

Meteor.methods({

});

Books.attachSchema(BookSchema);
