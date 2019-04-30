import Component from '@ember/component';

export default Component.extend({

  multipleConstraints: null,
  searchValue: '',
  searchPlaceholder: '',

  init() {
    this._super(...arguments);
    this.set('multipleConstraints', []);
  },

  actions: {
    keyDownReceived() {
      const keycode = (event.keyCode ? event.keyCode : event.which);
      if(keycode === 13){
          this.send('submitSearch', this.get('searchValue'));
      }
    },

    submitSearch(searchValue) {
      this.onSubmit(searchValue);
      this.set('searchValue', '');
    }
  }

});
