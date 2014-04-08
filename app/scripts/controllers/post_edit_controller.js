KonapunGithubIo.PostEditController = Ember.ObjectController.extend({
  needs: 'post',
  actions: {
    save: function(){
      self = this
      this.get('buffer').forEach(function(attr){
        self.get('controllers.post.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('post',this.get('model'));
    }
  }
});

