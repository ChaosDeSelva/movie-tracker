import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  Actors: DS.attr('string'),
  Awards: DS.attr('string'),
  BoxOffice: DS.attr('string'),
  Country: DS.attr('string'),
  Director: DS.attr('string'),
  Genre: DS.attr('string'),
  Language: DS.attr('string'),
  Metascore: DS.attr('string'),
  Plot: DS.attr('string'),
  Poster: DS.attr('string'),
  Production: DS.attr('string'),
  Rated: DS.attr('string'),
  Ratings: DS.hasMany('rating'),
  Released: DS.attr('string'),
  Response: DS.attr('string'),
  Runtime: DS.attr('string'),
  Title: DS.attr('string'),
  Type: DS.attr('string'),
  Website: DS.attr('string'),
  Writer: DS.attr('string'),
  Year: DS.attr('string'),
  imdbID: DS.attr('string'),
  imdbRating: DS.attr('string'),
  imdbVotes: DS.attr('string')
});
