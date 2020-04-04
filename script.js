
$(document).ready(function(){
    $("#searchBtn").on("click", function (event) {
        event.preventDefault();
    
        let apiKey = "muz4XtTNnVqzUeSoLsITsALHpaTa0HvM";
        let searchTerms = $("#searchBox").val().trim();
        console.log(searchTerms);
        let articlesNum = $("#numberOfArticles").val();
        let startYear = "&begin_date=" + $("#startYear").val() + "0101";
        let endYear = "&end_date=" + $("#endYear").val() + "1231";
    
    
        let queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerms + startYear + endYear + "&api-key=" + apiKey;
        $.ajax({
            url: queryUrl,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            for (i = 0; i < articlesNum; i++) {
                let articleElement = $("<a>");
                let authorElement =$("<p>");
                articleElement.text(response.response.docs[i].headline.main); 
                articleElement.attr("href", response.response.docs[i].web_url);
                authorElement.text(response.response.docs[i].byline.original);
                $(articleElement).append(authorElement);
                $("#articlesHere").append(articleElement);
                

            };

    
    
        });

    });

    $("#clearBtn").on("click", function (e){
        e.preventDefault();

        $("#articlesHere").empty();
    })

});




