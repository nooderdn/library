Meteor.methods({
    toggleAdmin(id){
        if(Roles.userIsInRole(id, 'admin')){
            Roles.removeUsersFromRoles(id, 'admin');
        }else{
          Roles.addUsersToRoles(id,'admin');
        }
    },
    addUser(emailVar, passwordVar, nameVar, addressVar, phoneVar){
        Accounts.createUser({
        email: emailVar,
        password: passwordVar,
        profile: {name: nameVar, phone: phoneVar, address: addressVar}
      });
    },
    updateUser(id, emailVar, passwordVar, nameVar, phoneVar , addressVar){
      Meteor.users.update(
        {_id: id},
        {$set: {
          'emails[0].address': emailVar,
          'password': passwordVar,
          'profile.name': nameVar,
          'profile.address': addressVar,
          'profile.phone': phoneVar
        }}
      );
    },
    deleteUser(id){
      Meteor.users.remove(id);
    }
});
