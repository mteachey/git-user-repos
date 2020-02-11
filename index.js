//listen for form submit (return or button click)
//get the entered user name from the form submit (enter or button click)
//Call the getRepos function which will
    //modify the url with the entered username and use as a parameter for fetchAPI to get response of repos
    //include error message if that uesr name doesn't exist
//call rendering function 
    //display the repo names and urls in a list




function watchForm(){
// this function will be responsible for when users submit the name they want repos for
    //listens for submit event and assigns input value to variable to pass to getRepos function
    $('#git-user-form').submit(function(event){
        event.preventDefault();
        const userName = $(this).find('input[name="git-user"]');
        const userNameValue = userName.val();
        console.log(`this is the var ${userNameValue}`);
        userName.val("");
    //call function
        getRepos(userNameValue);
        
    });
    console.log(`watchForm ran`);
}    

function getRepos(userName){
// this function will be responsible for making the GET request to the GitAPI
const url = `https://api.github.com/users/${userName}/repos`;
   fetch(url)
        .then(response => response.json())
        .then(responseJSON => {
            displayResults(responseJSON, userName);
            //console.log(responseJSON);       
          })
        .catch(error => alert('Something went wrong, please try again'));    
    console.log(`getRepos ran`); 
}


function displayResults(results, userName){
// this function will display the results of the request (names and titles) in the DOM
   //clear results if new submit again
   $('.results').empty();
   //display the name and link to the repos
   let numberOfResults = results.length;
   console.log(numberOfResults);
$('.results').append(`<h2>Your Results for ${userName}</h2><ul class="results-list"></ul>`);
   for (i=0; i < numberOfResults; i++){
    $('.results-list').append(`<li class="result"><h3>Result ${i+1}</h3><p>Repo Name: ${results[i].name}</p><a href="${results[i].html_url}">Repo Link: ${results[i].html_url}</a></li>`)   
   }//end of for loop
    $('.results').removeClass('js-hidden');
    console.log(`displayResults ran`);
}

$(watchForm);

