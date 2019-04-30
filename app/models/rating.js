import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  movie: DS.belongsTo('movie'),
  Source: DS.attr('string'),
  Value: DS.attr('string'),
});
