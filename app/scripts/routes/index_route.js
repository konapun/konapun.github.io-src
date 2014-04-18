KonapunGithubIo.IndexRoute = Ember.Route.extend({
  actions: {
    showHighlight: function(name) {
      var highlightTemplate = 'highlight_' + name,
          contentTemplate = 'content_' + name;
      this.render(highlightTemplate, {
        outlet: 'highlight'
      });
      this.render(contentTemplate, {
        outlet: 'content'
      });
    }
  }
});
