KonapunGithubIo.Router.map(function () {
  
  this.route('about', {
    path: '/about'
  });
  
  this.route('contact', {
    path: '/contact'
  });
  
  this.route('news', {
    path: '/news'
  });
  
  this.route('facilities', {
    path: '/facilities'
  });
  
  this.route('seminars', {
    path: '/seminars'
  });
  
  this.route('training', {
    path: '/training'
  });
  
  this.route('labs', {
    path: '/labs'
  });
  this.resource('labs', function() {
    this.route('create');
  });
  
  this.resource('people', function() {
    this.resource('person', { path: '/:person_id' });
  });
  
  this.resource('posts', { path: '/posts' }, function() {
    this.resource('post', { path: '/:post_id' });
  });
  
  this.resource('projects', function() {
    this.resource('project', { path: '/:project_id' });
  });
  
});
