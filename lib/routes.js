
if(Meteor.isClient){
    Accounts.onLogin(function(){
        FlowRouter.go('books');
    });

    Accounts.onLogout(function(){
        FlowRouter.go('home');
    });
}



FlowRouter.triggers.enter([function(context, redirect){
    if(!Meteor.userId()){
      FlowRouter.go('home');
    }
}]);

FlowRouter.route('/', {
  name: 'home',
  action(){
    if(Meteor.userId()){
      FlowRouter.go('books');
    }
    GAnalytics.pageview();
    BlazeLayout.render('HomeLayout');
  }
});

FlowRouter.route('/books', {
  name: 'books',
  action(){
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: 'Books'});
  }
});
FlowRouter.route('/users', {
  name: 'users',
  action(){
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: 'Users'});
  }
});


FlowRouter.route('/book/:id',{
  name: 'book-detail',
  action(){
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout',{main: 'BookSingle'});
  }
})

FlowRouter.route('/user/:id',{
  name: 'user-detail',
  action(){
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout',{main: 'UserSingle'});
  }
})
