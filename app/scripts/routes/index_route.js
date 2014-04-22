KonapunGithubIo.IndexRoute = Ember.Route.extend({
  render: function(name, opts) { // Render default content into outlets on initial render
    if (!name) {
      this._super('index');
      this._super('highlight_about', {
        into: 'index',
        outlet: 'highlight'
      });
    }
    else {
      this._super(name, opts);
    }
  },
  actions: {
    showHighlight: function(name) {
      var highlightTemplate = 'highlight_' + name;
      
      this.render(highlightTemplate, {
        into: 'index',
        outlet: 'highlight'
      });
    }
  }
});
