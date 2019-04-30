import Service from '@ember/service';
import $ from 'jquery';
import config from '../config/environment';

export default Service.extend({

  findMovieBySearchValue(val) {
    return $.ajax({
       data: {
         t: val,
         apikey: config.omdbapi.apikey
       },
       method: 'GET',
       url: config.omdbapi.apiurl
     });
  }

});
