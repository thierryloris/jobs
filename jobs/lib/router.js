Router.route('/jobdescription', {
  name: 'jobdescription',
  template: 'jobdescription',
  title: 'Braincities'
});

Router.route('/', function () {
  this.render('hello');
});
