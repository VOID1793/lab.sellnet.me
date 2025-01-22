// Ensure that the DOM Loads
document.addEventListener('DOMContentLoaded', function(){
    // Grab the needed elements from our HTML page
    const form = document.getElementById('countryForm');
    const countrySelect = document.getElementById('countrySelect');
    const searchButton = document.getElementById('searchButton');
    const flagContainer = document.getElementById('flagContainer');

    searchButton.addEventListener('click', function() {
        const code = countrySelect.value;
        //Make sure that a country has been selected before proceeding
        if(code) {
            
            //Define the API url
            const apiURL = "https://restcountries.com/v3.1/alpha/" + code;

            //Make the AJAX request -->
            var xhr = new XMLHttpRequest();

            
            xhr.onreadystatechange = function(){

                if (this.readyState == 4 && this.status == 200) {
                    var data = JSON.parse(this.responseText);
                    var flagUrl = data[0].flags.svg;

                    var flagImg = document.createElement('img');
                    flagImg.src = flagUrl;
                    flagImg.alt = data[0].flags.alt;
                    flagImg.id = 'flagSvg';


                    flagContainer.innerHTML = '';
                    flagContainer.appendChild(flagImg);

                    var image = document.getElementById('flagSvg');
                    image.setAttribute('width', 300);
                    image.setAttribute('height', 150);

                }



            };
            xhr.open("GET", apiURL, true);
            xhr.send();
        }
        else {
            flagContainer.textContent = 'Please Select a Country!'
        }
    });

});