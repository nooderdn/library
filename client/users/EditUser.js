Template.EditUser.events({
       'submit form': function(event, template) {

           event.preventDefault();
           var emailVar = template.find('#email').value;
           var passwordVar = template.find('#password').value;
           var nameVar = template.find('#name').value;
           var phoneVar = template.find('#phone').value;
           var addressVar = template.find('#address').value;
           Meteor.call('updateUser', this._id ,emailVar, passwordVar,nameVar, phoneVar,addressVar);
           console.log(emailVar);     
       },
       'click .fa-close': function () {
           Session.set('newUser',false);
       }
     });
Template.EditUser.helpers({
         updateUserId: function () {
             return this._id;
         },
         userEmail: function(){
           return this.emails[0].address;
         },
         password:function () {
           return this.password;
         },
         dateFormat: function(){
           return moment(this.createdAt).format('MMMM Do YYYY');
         },
         userName:function () {
           return this.profile.name;
         },
         address: function () {
           return this.profile.address;
         },
         phoneNumber:  function () {
           return this.profile.phone;
         },
         editMode: function(){
           return Session.get('currentUser')?'edit-mode':'';
         },
         admin: function () {
            return Roles.userIsInRole(Meteor.userId(),'admin');
         }
     });
