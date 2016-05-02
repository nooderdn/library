Meteor.publish('books',function () {
    return Books.find();
});

Meteor.publish('singleBook',function (id) {
    check(id, String);
    return Books.find({_id: id});
})
