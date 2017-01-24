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
//     var jsonDataString = JSON.stringify(jsonData);
    // console.log(jsonData);


    // var countryList = JSON.parse(jsonDataString);
    // console.log(countryList[0].title);


//sort by alphabet
    function compareByAlphabet(a, b) {
        if(a.title < b.title) return -1;
        if(a.title > b.title) return 1;
        return 0;

    };


   var checkedForDel = $("input:checked");
    console.log(checkedForDel);

//fucktion for delete item from accordion
    $("#delelement").on("click", function () {
        var checkedForDel = $("input:checked"),
            del = $(checkedForDel).closest(".accordion-item", "#accordion");
        $(del).each(function () {
            $(this).remove();
        });

    });

    function cleanAccordion() {
        var item = $(".accordion-item");
        $(item).each(function () {
            $(this).remove();
        });
    }


//function alphabet sort
    $("#sort").on("click", function () {
        jsonData.sort(compareByAlphabet);
        cleanAccordion();
        generateHtml(jsonData);
    });

//alphabet revert sort
    $("#revertsort").on("click", function () {
        jsonData.reverse();
        cleanAccordion();
        generateHtml(jsonData);
    });

//
    $("#add-country").on("click", function () {
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
        jsonData.push(newCountry);
        console.log(jsonData);
        cleanAccordion();
        generateHtml(jsonData);
    });

    function generateHtml(data) {
        var template = Handlebars.compile( $('#handlebars-accordion').html() );
        console.log(data);
        $("#accordion").append(template(data));
    }
    generateHtml(jsonData);

    //accordion
    $("#accordion .title").on("click", function () {
        event.preventDefault();
        // event.stopPropagation();
        console.log($(this).parent(".title-wrapper"));
        $(this).parent(".title-wrapper").toggleClass("active");
    });



});