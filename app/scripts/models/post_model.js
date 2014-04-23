KonapunGithubIo.Post = DS.Model.extend({
  date: DS.attr('string', { // date of post; defaults to date inserted
    defaultValue: function() {
      return new Date(); // now
    }
  }),
  headline: DS.attr('string'),
  article: DS.attr('string'),
  tags: DS.attr('string', { defaultValue: [] })
});

// temporarily keep data as fixture until heroku REST API server is set up
KonapunGithubIo.Post.FIXTURES = [
  
  {
    id: 0,
    date: new Date(2014, 3, 22),
    headline: "Welcome!",
    article: "I finally got the Grunt build system working and everything seems to be fine now!"
  }
  
];
