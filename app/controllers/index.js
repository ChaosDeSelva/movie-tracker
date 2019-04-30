import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  store: service(),
  omdbapi: service(),

  activeMovie: null,
  showToastError: false,
  toastErrorMessage: '',

  actions: {
    handleSearchSubmit(searchValue) {
      if (searchValue.length <= 0) {
        this.set('toastErrorMessage', 'A movie title is required.');
        this.set('showToastError', true);
      }

      this.get('omdbapi').findMovieBySearchValue(searchValue).then((movie) => {
        if(movie.Response === "True") {
           const activeMovie = this.store.push(this.store.normalize('movie', movie));
           this.set('activeMovie', activeMovie);
         } else {
           this.set('toastErrorMessage', movie.Error);
           this.set('showToastError', true);
         }
      });
    },

    handleViewItem(id) {
      const movie = this.store.peekRecord('movie', id);
      this.set('activeMovie', movie);
    },

    handleRemoveItem(id) {
      const movie = this.store.peekRecord('movie', id);
      this.store.unloadRecord(movie)

      if (this.get('activeMovie.id') === id) {
         const movieList = this.store.peekAll('movie');
         if (movieList.length > 0) {
           this.set('activeMovie', movieList.get('firstObject'));
         } else {
           this.set('activeMovie', null);
         }
      }
    },

    closeToast() {
      this.set('showToastError', false);
    }
  }
});
