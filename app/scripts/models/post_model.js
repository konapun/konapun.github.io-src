KonapunGithubIo.Post = DS.Model.extend({
  date: DS.attr('string', { // date of post; defaults to date inserted
    defaultValue: function() {
      return new Date(); // now
    }
  }),
  headline: DS.attr('string'),
  article: DS.attr('string')
});

// temporarily keep data as fixture until heroku REST API server is set up
KonapunGithubIo.Post.FIXTURES = [
  
  {
    id: 0,
    date: new Date(2014, 3, 3),
    headline: "First Article",
    article: "This is my first article"
  },
  
  {
    id: 1,
    date: new Date(2014, 3, 6),
    headline: "Second Article",
    article: "This is my second article"
  }
  
];
