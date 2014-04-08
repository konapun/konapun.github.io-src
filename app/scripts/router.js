KonapunGithubIo.Router.map(function () {
  
  this.resource('posts', { path: '/posts' }, function() {
    this.resource('post', { path: '/:post_id' });
  });
  
  this.resource('projects', function() {
    this.resource('project', { path: '/:project_id' });
  });
  
});
