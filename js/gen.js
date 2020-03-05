var quotes = [
    'BLANK',
    '"\"The Way Get Started Is To Quit Talking And Begin Doing."\"<br>  – Walt Disney"',
    '"\"The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.\"<br>  – Winston Churchill"',
    '"\"Don\’t Let Yesterday Take Up Too Much Of Today."\"<br>  – Will Rogers"',
    '"\"You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.\"<br>  – Unknown"',
    '"\"It\’s Not Whether You Get Knocked Down, It’s Whether You Get Up.\"<br>  – Inspirational Quote By Vince Lombardi"',
    '"\"If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.\"<br>  – Steve Jobs"',
    '"\"People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.\"<br>  – Rob Siltanen"',
    '"\"We May Encounter Many Defeats But We Must Not Be Defeated.\"<br>  – Maya Angelou"',
    '"\"We Generate Fears While We Sit. We Overcome Them By Action.\"<br>  – Dr. Henry Link"',
    '"\"Whether You Think You Can Or Think You Can’t, You’re Right.\"<br>  – Quote By Henry Ford"',
    '"\"Security Is Mostly A Superstition. Life Is Either A Daring Adventure Or Nothing.\"<br>  – Life Quote By Helen Keller"',
    '"\"Knowledge will give you power, but character respect.\"<br>  - Bruce Lee"',
    '"\"If you love, don\'t waste time, for time is what life is made up of.\"<br> - Bruce Lee"',
    '"\"Old programmers never die. they just lose some of their functions.\"<br> - via Codepen"',
]



/*function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));

    document.getElementById('quoteContainer').innerHTML = quotes[randonNumber];
    
}*/

function genQuote() {
    var randNum = Math.floor(Math.random() * 8) + 1;
    document.getElementById( 'quoteContainer' ).innerHTML = quotes[randNum];
}