KonapunGithubIo.IndexRoute = Ember.Route.extend({
  actions: {
    showHighlight: function(name) {
      var highlightTemplate = 'highlight_' + name,
          contentTemplate = 'content_' + name;
      this.render(highlightTemplate, {
        into: 'index',
        outlet: 'highlight'
      });
      this.render(contentTemplate, {
        into: 'index',
        outlet: 'content'
      });
    }
  }
});
