/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Techdegree Student: Ewerton Luna
******************************************/


let quotes = [
    {
        quote: "Be yourself; everyone else is already taken.",
        source: 'Oscar Wilde',
        citation: null,
        year: null,
    },
    {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        source: 'Albert Einstein',
        citation: null,
        year: null,
    },
    {
        quote: "No, the opposite of happiness is hopelessness, an endless gray horizon of resignation and indifference. It’s the belief that everything is f****, so why do anything at all",
        source: 'Mark Mason',
        citation: 'Everything Is F****: A Book About Hope',
        year: 2019,
    },
    {
        quote: "Freedom itself demands discomfort.",
        source: 'Mark Mason',
        citation: 'Everything Is F****: A Book About Hope',
        year: 2019,
    },
    {
        quote: "I have tried to live my life such that in the hour of my death I would feel joy rather than fear.",
        source: 'Mark Mason',
        citation: 'Everything Is F****: A Book About Hope',
        year: 2019,
    },
    {
        quote: "In three words I can sum up everything I've learned about life: it goes on.",
        source: 'Robert Frost',
        citation: "This Week Magazine",
        year: 1954,
    },
    {
        quote: "Don't cry because it's over, smile because it happened.",
        source: 'Doctor Seuss',
        citation: null,
        year: null,
    },
];


function getRandomNumber(upper){
    let number = Math.round(Math.random() * upper);
    return number;
}

function getRandomQuote(){
    let index = getRandomNumber(quotes.length - 1);
    let quote = quotes[index];
    return quote;
}

// Prints string argument inside the div element with the 'quote-box' id.
function print(quoteString){
    let output = document.getElementById('quote-box');
    output.innerHTML = quoteString;
}

function printQuote(){
    let quote = getRandomQuote();
    let html = '';
    html += "<p>" + quote.quote + "</p>";
    html += "<p class='source'>" + quote.source;

    if (quote.citation !== null){
        let citationString = "<span class='citation'>" + quote.citation + "</span>";
        html += citationString;
    }
    if (!quote.year !== null){
        let yearString = "<span class='year'>" + quote.year + "</span>";
        html += yearString;
    }
    html += '</p>';
    print(html); 
}


document.getElementById('loadQuote').addEventListener("click", printQuote, false);
