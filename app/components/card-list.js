import Component from '@ember/component';

export default Component.extend({

  actions: {
    viewItem(id) {
      this.onView(id);
    },

    removeItem(id) {
      this.onRemove(id);
    }
  }
});
