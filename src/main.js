import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    const city = $('#location').val();
    $('#location').val("");

    asyncApiCall();

    async function asyncApiCall() {
      let response = await fetch(`http://www.omdbapi.com/?t=${city}&apikey=${process.env.API_KEY}`);
      let jsonifiedResponse = await response.json();
      getElements(jsonifiedResponse);
    }

    const getElements = function(response) {
      $('.showHumidity').text(`${response.Title}`);
       $('.showTemp').text(`${response.Director}`);
    }
  });
});
