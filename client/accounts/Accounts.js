// Them cac truong moi cho Account mac dinh cua Meteor
// Meteor.users.allow({
//   insert: function(userId,doc){
//     return !!userId;
//   },
//   update: function (userId, doc) {
//     return !!userId;
//   }
// });

/**
Cau hinh cho form account: register
*/
var myLogoutFunc= function () {
  Session.set('nav-toggle','');
  FlowRouter.go('/');

};
AccountsTemplates.configure({
  onLogoutHook: myLogoutFunc
});


AccountsTemplates.addField({
    _id: 'name',
    type: 'text',
    displayName: "Name",
});
AccountsTemplates.addField({
    _id: 'address',
    type: 'text',
    displayName: "Address",
});
AccountsTemplates.addField({
    _id: 'phone',
    type: 'tel',
    displayName: "Phone Number",
});
