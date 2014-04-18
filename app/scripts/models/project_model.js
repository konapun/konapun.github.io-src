KonapunGithubIo.Project = DS.Model.extend({
  name: DS.attr('string'),
  language: DS.attr('string'),
  description: DS.attr('string'),
  isCompleted: DS.attr('boolean'),
  technologies: DS.attr('string', { defaultValue: [] }),
  tags: DS.attr('string', { defaultValue: [] }),
  link: DS.attr('string')
});


// temporarily keep data as fixture until heroku REST API server is set up
KonapunGithubIo.Project.FIXTURES = [
  
  {
    id: 0,
    name: "A Mystery at the Mansion on the Mound",
    language: "Javascript",
    description: "A clone of a board game with a similar name",
    isCompleted: false,
    link: "https://github.com/konapun/mansion-on-the-mound"
  },
  
  {
    id: 1,
    name: "konapun.github.io",
    language: "Javascript",
    description: "Source for this site",
    isCompleted: false,
    link: "https://github.com/konapun/konapun.github.io"
  }
  
];
