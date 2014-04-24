KonapunGithubIo.PostsRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').find('post');
  },
  
  redirect: function() { // automatically select the latest post
    var post = this.modelFor('posts').get('lastObject');
    this.transitionTo('post', post);
  }
});

