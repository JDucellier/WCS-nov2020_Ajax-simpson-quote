// This function loads simpson quotes data from the simpson API
function fetchSimpsonJSON() {

  let url = `https://simpsons-quotes-api.herokuapp.com/quotes?count=3`;
  axios.get(url)
    .then(function(response) {
      return response.data; // response.data instead of response.json() with fetch
    })
    .then(function(simpsons) {

      let  simpsonHtml = simpsons.map(simpson => 
        `
        <div class="card">
          <img class="img" src="${simpson.image}" />
          <div class="card-body">
            <p><strong>${simpson.character}</strong></p>
            <p>${simpson.quote}</p>
          </div>
        </div>
      `
      );

      // Build a block of HTML
      document.querySelector('#simpson').innerHTML = simpsonHtml.reduce((acc, currentValue) => acc + currentValue);
    });
}

fetchSimpsonJSON();