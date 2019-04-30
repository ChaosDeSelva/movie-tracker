import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  router: service(),

  actions: {
    goHome() {
      this.get('router').transitionTo('/');
    },

    goAbout() {
      this.get('router').transitionTo('about');
    }
  }

});
