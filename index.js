
function watchForm(){
// this function will be responsible for when users submit the name they want repos for
  
    $('#js-number-of-image-form').submit(function(event){
            event.preventDefault();
           
    });
}    

function getRepos(url, number){
// this function will be responsible for making the GET request to the GitAPI
    fetch(url)
        .then(response => response.json())
        .then(responseJSON => displayResults(responseJSON, number))
        .catch(error => alert('Something went wrong, please try again'));     
}


function displayResults(object, number){
// this function will display the results of the request (names and titles) in the DOM
   //clear results if new submit again
   $('.results').empty();
   //display the name and link to the repos
    
    $('.image-container').removeClass('js-hidden');
}

$(watchForm);

