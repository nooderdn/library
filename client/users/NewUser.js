Template.NewUser.events({
       'submit form': function(event, template) {

           event.preventDefault();
           var emailVar = template.find('#email').value;
           var passwordVar = template.find('#password').value;
           var nameVar = template.find('#name').value;
           var phoneVar = template.find('#phone').value;
           var addressVar = template.find('#address').value;
           Meteor.call('addUser',emailVar, passwordVar,nameVar, phoneVar,addressVar);
           resetForm(template);
       },
       'click .fa-close': function () {
           Session.set('newUser',false);
       }
     });

function resetForm(template){
    template.find('#email').value = '';
    template.find('#password').value = '';
    template.find('#name').value = '';
    template.find('#phone').value = '';
    template.find('#address').value = '';
}
