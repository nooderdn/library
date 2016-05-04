Template.NewUser.events({
       'submit form': function(event, template) {

           event.preventDefault();
           var emailVar = template.find('#email').value;
           var passwordVar = template.find('#password').value;
           var nameVar = template.find('#name').value;
           var phoneVar = template.find('#phone').value;
           var addressVar = template.find('#address').value;
           console.log(emailVar);
           Accounts.createUser({
             email: emailVar,
             password: passwordVar,
             profile: {name: nameVar, phone: phoneVar, address: addressVar}
           });
       },
       'click .fa-close': function () {
           Session.set('newUser',false);
       }
     });
