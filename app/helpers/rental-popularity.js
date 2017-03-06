import Ember from 'ember';

export function rentalPopularity(params) {
  var rental = params[0];

  if(rental.get('reviews').get('length') >= 5) {
    return Ember.String.htmlSafe('<i class="fa fa-star" aria-hidden="true"></i>');
  }
}

export default Ember.Helper.helper(rentalPopularity);