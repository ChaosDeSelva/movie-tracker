import DS from 'ember-data';

export default DS.JSONSerializer.extend(DS.EmbeddedRecordsMixin, {
  primaryKey: 'imdbID',
  attrs: {
    Ratings: { embedded: 'always' },
  }
});
