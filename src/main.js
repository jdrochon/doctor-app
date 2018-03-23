import {Doctor} from './doctor.js';

import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(function(){
  main();
});

function main()
{
  $('#btn-submit').click(function(){
      let name = $('#input-name').val();
      let
      $('#input-name').val("");
      $.ajax({
        url: `https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=10&user_key=${process.env.userKey}`,
        type: `GET`,
        data: {
          format: `json`
        },
        success: function(response){
          $(`#show-temp`).text(`The temp in ${city} is ` + tempFarenheit + ' F');
          $(`#show-pressure`).text(`The pressure in ${city} is ${response.main.pressure}`);
          $('#show-humidity').text(`The humidy in ${city} is ${response.main.humidity}%`);

        },
        error: function(){
          $('#errors').text("There was an error with the request.")
        }
      });
    });

}
