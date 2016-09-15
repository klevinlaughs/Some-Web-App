/// <reference path='../typings/index.d.ts' />

import * as http from 'http';
import * as algorithmia from 'algorithmia';

let authKey = "simXOPtvT5UO8Q1HN+eJOhURpLL1";
const allClients = "google bing wikipedia duckduckgo";
let numResults = 10;

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    $("#the-form").submit(function(e) {
        e.preventDefault();
    });
});

function doSearch():void {
    console.log($("#search").val());
    getAnswers($("#search").val(), 10);
}
window.doSearch = doSearch;

function getAnswers(query : String, numResults : number) : void {
    let input = {
        "clients" : allClients,
        "query" : query,
        "numResults" : numResults
    };

    algorithmia.client(authKey)
               .algo("algo://nus/SearchEngineAggregator/0.1.1")
               .pipe(input)
               .then(function(response: any) {
                   let results = response.get();
                   displayResults(results);
               });
}

function displayResults(answers:Object):void {
    console.log(answers);

    let contentDiv = $('#content');

    // clear answers
    contentDiv.empty();

    let results = answers.results;

    for (var i = 0; i < results.length; i++) {
        console.log("result");
        contentDiv.append($("div")).addClass("col-md-3 black");
    }
}
