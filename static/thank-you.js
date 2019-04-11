function getWindowSearch() {
  return typeof window !== 'undefined' ? window.location.search : '';
}

function thankYou() {
  if(getWindowSearch().indexOf('?thankyou') > -1) {
    document.getElementById('basin-form').className += ' show-thank-you';
  }
}
thankYou()