/**
 * Created by Olga on 12/23/16.
 */
$(document).ready(function(){

    console.log( "ready!" );

    var jsonData = [{
            "title":"United Kingdom",
            "text":"The United Kingdom of Great Britain and Northern Ireland, commonly known as the United Kingdom (UK) or Britain, is a sovereign state in Europe."},
        {
            "title":"France",
            "text":"France, officially the French Republic (French: R\u00e9publique fran\u00e7aise), is a unitary sovereign state comprising territory in western Europe and several overseas regions and territories."},
        {
            "title":"Spain",
            "text":"Spain (Spanish: Espa\u00f1a), officially the Kingdom of Spain (Spanish: Reino de Espa\u00f1a), is a sovereign state located on the Iberian Peninsula in southwestern Europe."},
        {
            "title":"Germany",
            "text":"Germany, officially the Federal Republic of Germany (German: Bundesrepublik Deutschland), is a federal parliamentary republic in western-central Europe."}
    ];


//json-data as string
    var jsonDataString = JSON.stringify(jsonData);
    console.log(jsonData);


    var countryList = JSON.parse(jsonDataString);
    console.log(countryList[0].title);


    function generateHtml(data) {
        var template = Handlebars.compile( $('#handlebars-accordion').html() );
        console.log(countryList);
        $("#accordion").append(template(countryList));
    }
    generateHtml(countryList);


    // });

//sort by alphabet
    function compareByAlphabet(a, b) {
        if(a.title < b.title) return -1;
        if(a.title > b.title) return 1;
        return 0;

    };

    countryList.sort(compareByAlphabet);
    // console.log(countryList);

//alphabet revert sort
    countryList.reverse();
    // console.log(countryList);

    //accordion
    $("#accordion .title").click(function (event) {
        event.preventDefault();
        $(this).parent(".title-wrapper").toggleClass("active");
    });




$("#accordion").find(".accordion-item input:checked").css("border","1px solid green");







});