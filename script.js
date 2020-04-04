
$(document).ready(function(){
    $("#searchBtn").on("click", function (event) {
        event.preventDefault();
    
        let apiKey = "muz4XtTNnVqzUeSoLsITsALHpaTa0HvM";
        let searchTerms = $("#searchBox").val().trim();
        console.log(searchTerms);
        
        let startYear = "&begin_date=" + $("#startYear").val() + "0101";
        let endYear = "&end_date=" + $("#endYear").val() + "1231";
    
    
        let queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerms + startYear + endYear + "&api-key=" + apiKey;
        $.ajax({
            url: queryUrl,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            
    
    
        });
    });

});




