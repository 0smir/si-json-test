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
    

//sort by alphabet
    function compareByAlphabet(a, b) {
        if(a.title < b.title) return -1;
        if(a.title > b.title) return 1;
        return 0;

    };


   var checkedForDel = $("input:checked");
    console.log(checkedForDel);

//function for delete item from accordion
    $(".btn-delelement").on("click", function () {
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

//
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
        generateHtml(countryList);
    });

    function generateHtml(data) {
        var template = Handlebars.compile( $('#handlebars-accordion').html() );
        console.log(data);
        $("#accordion").append(template(data));
    }
    generateHtml(countryList);

    //accordion
    $("#accordion .title").on("click", function () {
        $(this).parent(".title-wrapper").parent(".accordion-item")
                .toggleClass("active").siblings().removeClass("active");
    });



});