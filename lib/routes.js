FlowRouter.route('/', {
  name: 'home',
  action(){
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
