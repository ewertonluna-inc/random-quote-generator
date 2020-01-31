/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Techdegree Student: Ewerton Luna
******************************************/


let quotes = [
    {
        quote: "Be yourself; everyone else is already taken.",
        source: 'Oscar Wilde',
        tags: '#inspiration',
    },
    {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        source: 'Albert Einstein',
        tags: '#philosophy',

    },
    {
        quote: "No, the opposite of happiness is hopelessness, an endless gray horizon of resignation and indifference. It’s the belief that everything is f****, so why do anything at all",
        source: 'Mark Mason',
        citation: 'Everything Is F****: A Book About Hope',
        year: 2019,
        tags: '#philosophy',
    },
    {
        quote: "Freedom itself demands discomfort.",
        source: 'Mark Mason',
        citation: 'Everything Is F****: A Book About Hope',
        year: 2019,
        tags: '#inspiration',
    },
    {
        quote: "I have tried to live my life such that in the hour of my death I would feel joy rather than fear.",
        source: 'Mark Mason',
        citation: 'Everything Is F****: A Book About Hope',
        year: 2019,
        tags: '#inspiration',
    },
    {
        quote: "In three words I can sum up everything I've learned about life: it goes on.",
        source: 'Robert Frost',
        citation: "This Week Magazine",
        year: 1954,
        tags: '#philosophy',
    },
    {
        quote: "Don't cry because it's over, smile because it happened.",
        source: 'Doctor Seuss',
        tags: '#inspiration',
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


function setRandomBackgroundColor(){
    // Creating values from 0 to 255 for red, blue and green.
    let randomColor;
    let red = Math.random() * 256;
    let green = Math.random() * 256;
    let blue = Math.random() * 256;

    // randomColor = 'rgb([red], [green], [bluee])'
    randomColor = 'rgb(' + red + ', ' + green + ', ' + blue + ')';

    document.body.style.backgroundColor = randomColor;
}

function printQuote(){
    setRandomBackgroundColor();

    let quote = getRandomQuote();
    let html = '';
    html += "<p class='quote'>" + quote.quote + "</p>";
    html += "<p class='source'>" + quote.source;

    // If there is a citation, it is added to the html string
    if (quote.citation){
        let citationString = "<span class='citation'>" + quote.citation + "</span>";
        html += citationString;
    }
    // If there is a year, it is added to the html string
    if (quote.year){
        let yearString = "<span class='year'>" + quote.year + "</span>";
        html += yearString;
    }
    let tag = quote.tags;

    // Including tags at the end
    html += "<span class='tag'>" + quote.tags + "</span>"
    html += '</p>';

    print(html); 
}

setInterval(printQuote, 5000);

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


