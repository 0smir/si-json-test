/**
 * Created by Olga on 12/23/16.
 */
$(document).ready(function(){

    console.log( "ready!" );

    var countryList = [{
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
    ],
    accordion = $('#accordion');

    // add tabs of accordion
    function createAccordion() {
        console.log("#accordion h4");
        $("#accordion h4").each(function (i) {
            $(this).text(countryList[i].title);
            $(this).next("p").text(countryList[i].text);
        });
    };
    createAccordion();


//sort by alphabet
    function compareByAlphabet(a, b) {
        if(a.title < b.title) return -1;
        if(a.title > b.title) return 1;
        return 0;

    };


//function alphabet sort
    $(".btn-sort").on("click", function () {
        countryList.sort(compareByAlphabet);
        cleanAccordion();
        generateHtml(countryList);
    });

//alphabet revert sort
    $(".btn-revertsort").on("click", function () {
        countryList.reverse();
        cleanAccordion();
        generateHtml(countryList);
    });


    function cleanAccordion() {
        $("#accordion h4").each(function (i) {
            $(this).empty();
            $(this).next("p").empty();
        });
    }

    function addAccordionItem() {
        $("#accordion").append("<h4 class='title'></h4><p></p>");

    }


    $(".btn-add-country").on("click", function () {
        var countryName = $("input[name=country-name]").val(),
            countryDescription = $("input[name=country-description]").val();
        console.log(countryName);
        console.log(countryDescription);

        //create new object with custom data
        var newCountry = new Object();
            newCountry["title"] = countryName;
            newCountry["text"] = countryDescription;
            console.log(newCountry);
        //add new element in country array
        countryList.push(newCountry);
        console.log(countryList);
        cleanAccordion();
        // return(countryList)
        addAccordionItem();
        createAccordion(countryList);
        $(".addinfo-panel").reset();
    });


    //accordion
    // $("#accordion .title").on("click", function () {
    //     $(this).toggleClass("active").siblings().removeClass("active");
    // });

    // new accordion
    $("#accordion").on("click", function () {
        var targetElement = $(event.target);
        if (targetElement.is(".title")){
            targetElement.toggleClass("active").siblings().removeClass("active");
        }
    });




});