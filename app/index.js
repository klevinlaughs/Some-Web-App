"use strict";
const algorithmia = require('algorithmia');
let authKey = "simXOPtvT5UO8Q1HN+eJOhURpLL1";
const allClients = "google bing wikipedia duckduckgo";
let numResults = 10;
document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");
    $("#the-form").submit(function (e) {
        e.preventDefault();
    });
});
function doSearch() {
    console.log($("#search").val());
    getAnswers($("#search").val(), 10);
}
window.doSearch = doSearch;
function getAnswers(query, numResults) {
    let input = {
        "clients": allClients,
        "query": query,
        "numResults": numResults
    };
    algorithmia.client(authKey)
        .algo("algo://nus/SearchEngineAggregator/0.1.1")
        .pipe(input)
        .then(function (response) {
        let results = response.get();
        displayResults(results);
    });
}
function displayResults(answers) {
    console.log(answers);
    let contentDiv = $('#content');
    contentDiv.empty();
    let results = answers.results;
    for (var i = 0; i < results.length; i++) {
        console.log("result");
        contentDiv.append($("div")).addClass("col-md-3 black");
    }
}
