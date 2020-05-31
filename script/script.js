var pageLoaded = false;

window.onload = function() {
   PageLoaded = true;
   console.log("страница загружена");
   
}


// function init() {
//     request.open("GET", requestURL);
//     request.responseType = "json";
//     request.send;
//     request.onload = function() {
//         console.log("ответ пришел")
//         questionsList = request.response;
//     }

// }

function startGame() {

}

document.getElementById("button-start").onclick = function() {
    var requestQuestionFile = "https://github.com/Kermort/quiz/blob/master/files/questions.json";
    // var requestURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
    var request = new XMLHttpRequest();
    var questionsList;
    request.open("GET", requestQuestionFile, true);
    request.responseType = "json";
    request.send();
    request.onload = function() {
        console.log("ответ пришел")
        questionsList = request.response;
        console.log(questionsList);
        console.log(request);
        console.log(requestQuestionFile);
    }
console.log("start");
console.log(request);
}
