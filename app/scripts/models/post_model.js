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
  },
  {
    id: 1,
    date: new Date(2014, 3, 23),
    headline: "More page content",
    article: "I've added more page content. Even though this article is mainly just a test, be sure to check some stuff out while you're here!"
  }
  
];
