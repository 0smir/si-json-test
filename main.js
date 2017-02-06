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
    ];

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

    //revert sort by alphabet
    function compareByRevertAlphabet(a, b) {
        if(a.title < b.title) return 1;
        if(a.title > b.title) return -1;
        return 0;

    };


    function cleanAccordion() {
        $("#accordion h4").each(function (i) {
            $(this).empty();
            $(this).next("p").empty();
        });
    }

    function addAccordionItem() {
        $("#accordion").append("<h4 class='title'></h4><p></p>");

    }

    function cleanInput() {
        $("input[name=country-name]").val('');
        $("input[name=country-description]").val('');
    }


    $(".btn-add-country").on("click", function () {
        var countryName = $("input[name=country-name]").val(),
            countryDescription = $("input[name=country-description]").val();
        console.log(countryName);
        console.log(countryDescription);

        function capitalize() {
            var countryNameFirstLetter = countryName.charAt(0).toUpperCase(),
                countryNameNoFirstLetter = countryName.substring(1);
            countryName = countryNameFirstLetter + countryNameNoFirstLetter;
        }
        capitalize();

        //create new object with custom data
        var newCountry = new Object();
            newCountry["title"] = countryName;
            newCountry["text"] = countryDescription;
            console.log(newCountry);
        //add new element in country array
        countryList.push(newCountry);
        console.log(countryList);
        cleanAccordion();
        addAccordionItem();
        createAccordion(countryList);
        cleanInput();
        return(countryList);
    });

    //function alphabet sort
    $(".btn-sort").on("click", function () {
        countryList.sort(compareByAlphabet);
        cleanAccordion();
        createAccordion(countryList);
    });

    //alphabet revert sort
    $(".btn-revertsort").on("click", function () {
        countryList.sort(compareByRevertAlphabet);
        cleanAccordion();
        createAccordion(countryList);
    });

    // new accordion
    $("#accordion").on("click", function () {
        var targetElement = $(event.target);
        if (targetElement.is(".title")){
            targetElement.toggleClass("active").siblings().removeClass("active");
        }
    });

});