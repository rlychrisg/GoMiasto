

// define variables for elements
const canvas = document.querySelector("confetti");
const jsConfetti = new JSConfetti();
const cityInput = document.getElementById("cityInput");
const submitBtn = document.getElementById("submitBtn");
const guessesTable = document.getElementById('guessesTable');
const endGame = document.getElementById("endGame");
const endGameHeader = document.getElementById("endGameHeader");
const endGamePara = document.getElementById("endGamePara");
const aboutBox = document.getElementById("aboutBox");
const mapBox = document.getElementById('mapBox');
const chooseGameBox = document.getElementById('chooseGameBox');
const aboutIcon = document.getElementById('aboutIcon');
const settingsIcon = document.getElementById('settingsIcon');
const invalidGuessBox = document.getElementById('invalidGuessBox');

// a pop up window allows user to select game type
window.onload = function() {
    chooseGameBox.showModal();
}
document.getElementById("gameTypeUkCities").addEventListener("click", function() {
    createGameUk();
    chooseGameBox.close();
    clearTable();

})
document.getElementById("gameTypeUsCities").addEventListener("click", function() {
    createGameUs();
    chooseGameBox.close();
    clearTable();
})
document.getElementById("gameTypeMcrMetro").addEventListener("click", function() {
    createGameMcr();
    chooseGameBox.close();
    clearTable();
})


let unit = 'imperial';

// note to people who aren't chris
// this bit is very long so if your editor doesn't have folding
// then do a text search for 'arrayend'
// {{{
answerListFull = [{name: "Birmingham", lat: "52.485596374699405", lon: "-1.8924272744413595", gametype: "UK Cities"},
        {name: "Leeds", lat: "53.79534574330523", lon: "-1.5508494373387873", gametype: "UK Cities"},
        {name: "Glasgow", lat: "55.859335550466085", lon: "-4.260483405444064", gametype: "UK Cities"},
        {name: "Manchester", lat: "53.47950713833537", lon: "-2.243297836552983", gametype: "UK Cities"},
        {name: "Sheffield", lat: "53.38039556365622", lon: "-1.4702766518583539", gametype: "UK Cities"},
        {name: "Bradford", lat: "53.79329651171096", lon: "-1.7563274082522964", gametype: "UK Cities"},
        {name: "Liverpool", lat: "53.40582417090412", lon: "-2.989514433251325", gametype: "UK Cities"},
        {name: "Bristol", lat: "51.45666550999953", lon: "-2.5908810351798435", gametype: "UK Cities"},
        {name: "Edinburgh", lat: "55.95229348698538", lon: "-3.1889649192855782", gametype: "UK Cities"},
        {name: "Cardiff", lat: "51.48299862799452", lon: "-3.1681470147153914", gametype: "UK Cities"},
        {name: "Leicester", lat: "52.637869890874846", lon: "-1.1392701319216532", gametype: "UK Cities"},
        {name: "Coventry", lat: "52.41105602827567", lon: "-1.5101795240874005", gametype: "UK Cities"},
        {name: "Wakefield", lat: "53.680834832307404", lon: "-1.5064566829927426", gametype: "UK Cities"},
        {name: "Belfast", lat: "54.60002323599576", lon: "-5.93315814083374", gametype: "UK Cities"},
        {name: "Nottingham", lat: "52.95164525828196", lon: "-1.154974628029673", gametype: "UK Cities"},
        {name: "Newcastle upon Tyne", lat: "54.9735851004131", lon: "-1.6221704838393036", gametype: "UK Cities"},
        {name: "Doncaster", lat: "53.52045159694294", lon: "-1.129982741526036", gametype: "UK Cities"},
        {name: "Milton Keynes", lat: "52.03896923909999", lon: "-0.7619889364411534", gametype: "UK Cities"},
        {name: "Salford", lat: "53.4866327878882", lon: "-2.2829614088829735", gametype: "UK Cities"},
        {name: "Sunderland", lat: "54.90306332983547", lon: "-1.3848145748115184", gametype: "UK Cities"},
        {name: "Brighton & Hove", lat: "50.833399423524874", lon: "-0.13554453805539696", gametype: "UK Cities"},
        {name: "Wolverhampton", lat: "52.58434983042991", lon: "-2.128996084935993", gametype: "UK Cities"},
        {name: "Kingston upon Hull", lat: "53.757006633090455", lon: "-0.32821196508953443", gametype: "UK Cities"},
        {name: "Plymouth", lat: "50.371557136462386", lon: "-4.146218568250271", gametype: "UK Cities"},
        {name: "Derby", lat: "52.91911191757612", lon: "-1.4768368775759895", gametype: "UK Cities"},
        {name: "Stoke-on-Trent", lat: "53.00551974271028", lon: "-2.185168330637043", gametype: "UK Cities"},
        {name: "Southampton", lat: "50.90708092147495", lon: "-1.406332341946639", gametype: "UK Cities"},
        {name: "Swansea", lat: "51.62077116108503", lon: "-3.946366250428829", gametype: "UK Cities"},
        {name: "Aberdeen", lat: "57.14726689279527", lon: "-2.1095806576442806", gametype: "UK Cities"},
        {name: "Peterborough", lat: "52.563116084096784", lon: "-0.2421859032382186", gametype: "UK Cities"},
        {name: "Westminster", lat: "51.49839754324327", lon: "-0.136114074936179", gametype: "UK Cities"},
        {name: "Portsmouth", lat: "50.80441491586336", lon: "-1.066881164223327", gametype: "UK Cities"},
        {name: "York", lat: "53.961922331925685", lon: "-1.0785323557235285", gametype: "UK Cities"},
        {name: "Colchester", lat: "51.8888454455942", lon: "0.8971211765695077", gametype: "UK Cities"},
        {name: "Chelmsford", lat: "51.73352037697284", lon: "0.47138420891211763", gametype: "UK Cities"},
        {name: "Southend-on-Sea", lat: "51.54017187460825", lon: "0.7088105392340642", gametype: "UK Cities"},
        {name: "Oxford", lat: "51.74868708278359", lon: "-1.2589204007959458", gametype: "UK Cities"},
        {name: "Newport", lat: "51.57640590000147", lon: "-2.9919950308122334", gametype: "UK Cities"},
        {name: "Canterbury", lat: "51.27905492691657", lon: "1.0802409824553934", gametype: "UK Cities"},
        {name: "Preston", lat: "53.76385676746858", lon: "-2.702302286463369", gametype: "UK Cities"},
        {name: "Cambridge", lat: "52.19852896525259", lon: "0.12305763416064161", gametype: "UK Cities"},
        {name: "St Albans", lat: "51.750513040961785", lon: "-0.33507105473064047", gametype: "UK Cities"},
        {name: "Dundee", lat: "56.4764850961792", lon: "-2.964155608466504", gametype: "UK Cities"},
        {name: "Lancaster", lat: "54.044054866664816", lon: "-2.8001137225079016", gametype: "UK Cities"},
        {name: "Norwich", lat: "52.63235860323026", lon: "1.2933412840721206", gametype: "UK Cities"},
        {name: "Exeter", lat: "50.722247482638544", lon: "-3.5296844143252533", gametype: "UK Cities"},
        {name: "Wrexham", lat: "53.04528147147678", lon: "-2.9955542203903565", gametype: "UK Cities"},
        {name: "Gloucester", lat: "51.86277403121018", lon: "-2.245946504478892", gametype: "UK Cities"},
        {name: "Winchester", lat: "51.0616550386822", lon: "-1.3199340831241553", gametype: "UK Cities"},
        {name: "London", lat: "51.511838193042664", lon: "-0.09122520975505334", gametype: "UK Cities"},
        {name: "Londonderry", lat: "55.000730600389154", lon: "-7.310274889482804", gametype: "UK Cities"},
        {name: "Carlisle", lat: "54.89336758205871", lon: "-2.940562132938573", gametype: "UK Cities"},
        {name: "Worcester", lat: "52.191561226468934", lon: "-2.223643658417036", gametype: "UK Cities"},
        {name: "Lincoln", lat: "53.229080940777564", lon: "-0.541433482306852", gametype: "UK Cities"},
        {name: "Durham", lat: "54.774130638035196", lon: "-1.5786910889189747", gametype: "UK Cities"},
        {name: "Chester", lat: "53.192481844507356", lon: "-2.8914873437896125", gametype: "UK Cities"},
        {name: "Bath", lat: "51.37786917730211", lon: "-2.3645307348486706", gametype: "UK Cities"},
        {name: "Inverness", lat: "57.48026534509089", lon: "-4.2261499161420595", gametype: "UK Cities"},
        {name: "Bangor (County Down)", lat: "54.657315734263896", lon: "-5.672690403384835", gametype: "UK Cities"},
        {name: "Hereford", lat: "52.0551666480208", lon: "-2.720030585068402", gametype: "UK Cities"},
        {name: "Dunfermline", lat: "56.06814243992346", lon: "-3.4522747956629236", gametype: "UK Cities"},
        {name: "Perth", lat: "56.395323707282216", lon: "-3.4403431912284206", gametype: "UK Cities"},
        {name: "Lisburn", lat: "54.51455806041022", lon: "-6.054911443810513", gametype: "UK Cities"},
        {name: "Salisbury", lat: "51.0698702617009", lon: "-1.797533834236236", gametype: "UK Cities"},
        {name: "Stirling", lat: "56.11630595051125", lon: "-3.937467457526118", gametype: "UK Cities"},
        {name: "Lichfield", lat: "52.68118036421666", lon: "-1.829394816375147", gametype: "UK Cities"},
        {name: "Newry", lat: "54.1732216952356", lon: "-6.34022303207332", gametype: "UK Cities"},
        {name: "Chichester", lat: "50.83821861847997", lon: "-0.7775125976820606", gametype: "UK Cities"},
        {name: "Ely", lat: "52.394856639429136", lon: "0.2635655971562637", gametype: "UK Cities"},
        {name: "Bangor (Gwynedd)", lat: "53.22618368067622", lon: "-4.130416188893599", gametype: "UK Cities"},
        {name: "Truro", lat: "50.26274524419426", lon: "-5.058463364773839", gametype: "UK Cities"},
        {name: "Ripon", lat: "54.13519113245494", lon: "-1.5227785124891842", gametype: "UK Cities"},
        {name: "Armagh", lat: "54.34899598691848", lon: "-6.656284345980317", gametype: "UK Cities"},
        {name: "Wells", lat: "51.20881907744404", lon: "-2.6513396239243607", gametype: "UK Cities"},
        {name: "St Asaph", lat: "53.257285657678025", lon: "-3.442674118959031", gametype: "UK Cities"},
        {name: "St Davids", lat: "51.89609836952549", lon: "-5.28054571583195", gametype: "UK Cities"},
        {name: "New York, NY", lat: "40.66", lon: "-73.94", gametype: "US Cities"},
        {name: "Los Angeles, CA", lat: "34.02", lon: "-118.41", gametype: "US Cities"},
        {name: "Chicago, IL", lat: "41.84", lon: "-87.68", gametype: "US Cities"},
        {name: "Houston, TX", lat: "29.79", lon: "-95.39", gametype: "US Cities"},
        {name: "Phoenix, AZ", lat: "33.57", lon: "-112.09", gametype: "US Cities"},
        {name: "Philadelphia, PA", lat: "40.01", lon: "-75.13", gametype: "US Cities"},
        {name: "San Antonio, TX", lat: "29.46", lon: "-98.52", gametype: "US Cities"},
        {name: "San Diego, CA", lat: "32.81", lon: "-117.14", gametype: "US Cities"},
        {name: "Dallas, TX", lat: "32.79", lon: "-96.77", gametype: "US Cities"},
        {name: "Austin, TX", lat: "30.30", lon: "-97.75", gametype: "US Cities"},
        {name: "Jacksonville, FL", lat: "30.34", lon: "-81.66", gametype: "US Cities"},
        {name: "San Jose, CA", lat: "37.30", lon: "-121.81", gametype: "US Cities"},
        {name: "Fort Worth, TX", lat: "32.78", lon: "-97.35", gametype: "US Cities"},
        {name: "Columbus, OH", lat: "39.99", lon: "-82.99", gametype: "US Cities"},
        {name: "Charlotte, NC", lat: "35.21", lon: "-80.83", gametype: "US Cities"},
        {name: "Indianapolis, IN", lat: "39.78", lon: "-86.15", gametype: "US Cities"},
        {name: "San Francisco, CA", lat: "37.73", lon: "-123.03", gametype: "US Cities"},
        {name: "Seattle, WA", lat: "47.62", lon: "-122.35", gametype: "US Cities"},
        {name: "Denver, CO", lat: "39.76", lon: "-104.88", gametype: "US Cities"},
        {name: "Oklahoma City, OK", lat: "35.47", lon: "-97.51", gametype: "US Cities"},
        {name: "Nashville, TN", lat: "36.17", lon: "-86.79", gametype: "US Cities"},
        {name: "El Paso, TX", lat: "31.85", lon: "-106.43", gametype: "US Cities"},
        {name: "Washington, DC", lat: "38.90", lon: "-77.02", gametype: "US Cities"},
        {name: "Las Vegas, NV", lat: "36.23", lon: "-115.26", gametype: "US Cities"},
        {name: "Boston, MA", lat: "42.34", lon: "-71.02", gametype: "US Cities"},
        {name: "Portland, OR", lat: "45.54", lon: "-122.65", gametype: "US Cities"},
        {name: "Louisville, KY", lat: "38.17", lon: "-85.65", gametype: "US Cities"},
        {name: "Memphis, TN", lat: "35.11", lon: "-89.97", gametype: "US Cities"},
        {name: "Detroit, MI", lat: "42.38", lon: "-83.10", gametype: "US Cities"},
        {name: "Baltimore, MD", lat: "39.30", lon: "-76.61", gametype: "US Cities"},
        {name: "Milwaukee, WI", lat: "43.06", lon: "-87.97", gametype: "US Cities"},
        {name: "Albuquerque, NM", lat: "35.10", lon: "-106.65", gametype: "US Cities"},
        {name: "Tucson, AZ", lat: "32.15", lon: "-110.87", gametype: "US Cities"},
        {name: "Fresno, CA", lat: "36.78", lon: "-119.79", gametype: "US Cities"},
        {name: "Sacramento, CA", lat: "38.57", lon: "-121.47", gametype: "US Cities"},
        {name: "Mesa, AZ", lat: "33.40", lon: "-111.72", gametype: "US Cities"},
        {name: "Kansas City, MO", lat: "39.12", lon: "-94.56", gametype: "US Cities"},
        {name: "Atlanta, GA", lat: "33.76", lon: "-84.42", gametype: "US Cities"},
        {name: "Colorado Springs, CO", lat: "38.87", lon: "-104.76", gametype: "US Cities"},
        {name: "Omaha, NE", lat: "41.26", lon: "-96.05", gametype: "US Cities"},
        {name: "Raleigh, NC", lat: "35.83", lon: "-78.64", gametype: "US Cities"},
        {name: "Virginia Beach, VA", lat: "36.78", lon: "-76.03", gametype: "US Cities"},
        {name: "Long Beach, CA", lat: "33.78", lon: "-118.17", gametype: "US Cities"},
        {name: "Miami, FL", lat: "25.78", lon: "-80.21", gametype: "US Cities"},
        {name: "Oakland, CA", lat: "37.77", lon: "-122.23", gametype: "US Cities"},
        {name: "Minneapolis, MN", lat: "44.96", lon: "-93.27", gametype: "US Cities"},
        {name: "Tulsa, OK", lat: "36.13", lon: "-95.90", gametype: "US Cities"},
        {name: "Bakersfield, CA", lat: "35.35", lon: "-119.04", gametype: "US Cities"},
        {name: "Tampa, FL", lat: "27.97", lon: "-82.47", gametype: "US Cities"},
        {name: "Wichita, KS", lat: "37.69", lon: "-97.35", gametype: "US Cities"},
        {name: "Arlington, TX", lat: "32.70", lon: "-97.12", gametype: "US Cities"},
        {name: "Aurora, CO", lat: "39.70", lon: "-104.72", gametype: "US Cities"},
        {name: "New Orleans, LA", lat: "30.05", lon: "-89.93", gametype: "US Cities"},
        {name: "Cleveland, OH", lat: "41.48", lon: "-81.68", gametype: "US Cities"},
        {name: "Anaheim, CA", lat: "33.86", lon: "-117.76", gametype: "US Cities"},
        {name: "Honolulu, HI", lat: "21.32", lon: "-157.85", gametype: "US Cities"},
        {name: "Henderson, NV", lat: "36.01", lon: "-115.04", gametype: "US Cities"},
        {name: "Stockton, CA", lat: "37.98", lon: "-121.31", gametype: "US Cities"},
        {name: "Riverside, CA", lat: "33.94", lon: "-117.39", gametype: "US Cities"},
        {name: "Lexington, KY", lat: "38.04", lon: "-84.46", gametype: "US Cities"},
        {name: "Corpus Christi, TX", lat: "27.75", lon: "-97.17", gametype: "US Cities"},
        {name: "Orlando, FL", lat: "28.41", lon: "-81.25", gametype: "US Cities"},
        {name: "Irvine, CA", lat: "33.68", lon: "-117.77", gametype: "US Cities"},
        {name: "Cincinnati, OH", lat: "39.14", lon: "-84.51", gametype: "US Cities"},
        {name: "Santa Ana, CA", lat: "33.74", lon: "-117.88", gametype: "US Cities"},
        {name: "Newark, NJ", lat: "40.72", lon: "-74.17", gametype: "US Cities"},
        {name: "Saint Paul, MN", lat: "44.95", lon: "-93.10", gametype: "US Cities"},
        {name: "Pittsburgh, PA", lat: "40.44", lon: "-79.98", gametype: "US Cities"},
        {name: "Greensboro, NC", lat: "36.10", lon: "-79.83", gametype: "US Cities"},
        {name: "Lincoln, NE", lat: "40.81", lon: "-96.68", gametype: "US Cities"},
        {name: "Durham, NC", lat: "35.98", lon: "-78.90", gametype: "US Cities"},
        {name: "Plano, TX", lat: "33.05", lon: "-96.75", gametype: "US Cities"},
        {name: "Anchorage, AK", lat: "61.17", lon: "-149.28", gametype: "US Cities"},
        {name: "Jersey City, NJ", lat: "40.71", lon: "-74.06", gametype: "US Cities"},
        {name: "St. Louis, MO", lat: "38.64", lon: "-90.24", gametype: "US Cities"},
        {name: "Chandler, AZ", lat: "33.28", lon: "-111.85", gametype: "US Cities"},
        {name: "North Las Vegas, NV", lat: "36.28", lon: "-115.09", gametype: "US Cities"},
        {name: "Chula Vista, CA", lat: "32.63", lon: "-117.02", gametype: "US Cities"},
        {name: "Buffalo, NY", lat: "42.89", lon: "-78.86", gametype: "US Cities"},
        {name: "Gilbert, AZ", lat: "33.31", lon: "-111.74", gametype: "US Cities"},
        {name: "Reno, NV", lat: "39.55", lon: "-119.85", gametype: "US Cities"},
        {name: "Madison, WI", lat: "43.09", lon: "-89.43", gametype: "US Cities"},
        {name: "Fort Wayne, IN", lat: "41.09", lon: "-85.14", gametype: "US Cities"},
        {name: "Toledo, OH", lat: "41.66", lon: "-83.58", gametype: "US Cities"},
        {name: "Lubbock, TX", lat: "33.57", lon: "-101.89", gametype: "US Cities"},
        {name: "St. Petersburg, FL", lat: "27.77", lon: "-82.64", gametype: "US Cities"},
        {name: "Laredo, TX", lat: "27.56", lon: "-99.49", gametype: "US Cities"},
        {name: "Irving, TX", lat: "32.86", lon: "-96.97", gametype: "US Cities"},
        {name: "Chesapeake, VA", lat: "36.68", lon: "-76.30", gametype: "US Cities"},
        {name: "Glendale, AZ", lat: "33.53", lon: "-112.19", gametype: "US Cities"},
        {name: "Winston-Salem, NC", lat: "36.10", lon: "-80.26", gametype: "US Cities"},
        {name: "Scottsdale, AZ", lat: "33.68", lon: "-111.86", gametype: "US Cities"},
        {name: "Garland, TX", lat: "32.91", lon: "-96.63", gametype: "US Cities"},
        {name: "Boise, ID", lat: "43.60", lon: "-116.23", gametype: "US Cities"},
        {name: "Norfolk, VA", lat: "36.92", lon: "-76.24", gametype: "US Cities"},
        {name: "Port St. Lucie, FL", lat: "27.28", lon: "-80.39", gametype: "US Cities"},
        {name: "Spokane, WA", lat: "47.67", lon: "-117.43", gametype: "US Cities"},
        {name: "Richmond, VA", lat: "37.53", lon: "-77.48", gametype: "US Cities"},
        {name: "Fremont, CA", lat: "37.49", lon: "-121.94", gametype: "US Cities"},
        {name: "Huntsville, AL", lat: "34.78", lon: "-86.53", gametype: "US Cities"},
        {name: "Tacoma, WA", lat: "47.25", lon: "-122.46", gametype: "US Cities"},
        {name: "Baton Rouge, LA", lat: "30.44", lon: "-91.13", gametype: "US Cities"},
        {name: "Santa Clarita, CA", lat: "34.41", lon: "-118.49", gametype: "US Cities"},
        {name: "San Bernardino, CA", lat: "34.14", lon: "-117.29", gametype: "US Cities"},
        {name: "Hialeah, FL", lat: "25.87", lon: "-80.30", gametype: "US Cities"},
        {name: "Frisco, TX", lat: "33.16", lon: "-96.82", gametype: "US Cities"},
        {name: "Modesto, CA", lat: "37.64", lon: "-121.00", gametype: "US Cities"},
        {name: "Cape Coral, FL", lat: "26.65", lon: "-81.99", gametype: "US Cities"},
        {name: "Fontana, CA", lat: "34.11", lon: "-117.46", gametype: "US Cities"},
        {name: "Moreno Valley, CA", lat: "33.92", lon: "-117.21", gametype: "US Cities"},
        {name: "Des Moines, IA", lat: "41.57", lon: "-93.61", gametype: "US Cities"},
        {name: "Rochester, NY", lat: "43.17", lon: "-77.62", gametype: "US Cities"},
        {name: "Fayetteville, NC", lat: "35.08", lon: "-78.97", gametype: "US Cities"},
        {name: "Yonkers, NY", lat: "40.95", lon: "-73.87", gametype: "US Cities"},
        {name: "McKinney, TX", lat: "33.20", lon: "-96.66", gametype: "US Cities"},
        {name: "Worcester, MA", lat: "42.27", lon: "-71.81", gametype: "US Cities"},
        {name: "Salt Lake City, UT", lat: "40.78", lon: "-111.93", gametype: "US Cities"},
        {name: "Little Rock, AR", lat: "34.72", lon: "-92.36", gametype: "US Cities"},
        {name: "Columbus, GA", lat: "32.51", lon: "-84.87", gametype: "US Cities"},
        {name: "Augusta, GA", lat: "33.37", lon: "-82.07", gametype: "US Cities"},
        {name: "Sioux Falls, SD", lat: "43.54", lon: "-96.73", gametype: "US Cities"},
        {name: "Grand Prairie, TX", lat: "32.69", lon: "-97.02", gametype: "US Cities"},
        {name: "Tallahassee, FL", lat: "30.46", lon: "-84.25", gametype: "US Cities"},
        {name: "Amarillo, TX", lat: "35.20", lon: "-101.83", gametype: "US Cities"},
        {name: "Oxnard, CA", lat: "34.20", lon: "-119.21", gametype: "US Cities"},
        {name: "Peoria, AZ", lat: "33.79", lon: "-112.31", gametype: "US Cities"},
        {name: "Overland Park, KS", lat: "38.89", lon: "-94.69", gametype: "US Cities"},
        {name: "Montgomery, AL", lat: "32.35", lon: "-86.27", gametype: "US Cities"},
        {name: "Birmingham, AL", lat: "33.53", lon: "-86.80", gametype: "US Cities"},
        {name: "Grand Rapids, MI", lat: "42.96", lon: "-85.66", gametype: "US Cities"},
        {name: "Knoxville, TN", lat: "35.97", lon: "-83.95", gametype: "US Cities"},
        {name: "Vancouver, WA", lat: "45.64", lon: "-122.60", gametype: "US Cities"},
        {name: "Huntington Beach, CA", lat: "33.70", lon: "-118.00", gametype: "US Cities"},
        {name: "Providence, RI", lat: "41.82", lon: "-71.42", gametype: "US Cities"},
        {name: "Brownsville, TX", lat: "26.00", lon: "-97.45", gametype: "US Cities"},
        {name: "Glendale, CA", lat: "34.18", lon: "-118.25", gametype: "US Cities"},
        {name: "Akron, OH", lat: "41.08", lon: "-81.52", gametype: "US Cities"},
        {name: "Tempe, AZ", lat: "33.39", lon: "-111.93", gametype: "US Cities"},
        {name: "Newport News, VA", lat: "37.08", lon: "-76.52", gametype: "US Cities"},
        {name: "Chattanooga, TN", lat: "35.07", lon: "-85.25", gametype: "US Cities"},
        {name: "Mobile, AL", lat: "30.67", lon: "-88.10", gametype: "US Cities"},
        {name: "Fort Lauderdale, FL", lat: "26.14", lon: "-80.15", gametype: "US Cities"},
        {name: "Cary, NC", lat: "35.78", lon: "-78.82", gametype: "US Cities"},
        {name: "Shreveport, LA", lat: "32.47", lon: "-93.79", gametype: "US Cities"},
        {name: "Ontario, CA", lat: "34.04", lon: "-117.60", gametype: "US Cities"},
        {name: "Eugene, OR", lat: "44.06", lon: "-123.12", gametype: "US Cities"},
        {name: "Aurora, IL", lat: "41.76", lon: "-88.29", gametype: "US Cities"},
        {name: "Elk Grove, CA", lat: "38.41", lon: "-121.38", gametype: "US Cities"},
        {name: "Salem, OR", lat: "44.92", lon: "-123.02", gametype: "US Cities"},
        {name: "Santa Rosa, CA", lat: "38.45", lon: "-122.71", gametype: "US Cities"},
        {name: "Clarksville, TN", lat: "36.57", lon: "-87.35", gametype: "US Cities"},
        {name: "Rancho Cucamonga, CA", lat: "34.12", lon: "-117.56", gametype: "US Cities"},
        {name: "Oceanside, CA", lat: "33.22", lon: "-117.31", gametype: "US Cities"},
        {name: "Springfield, MO", lat: "37.19", lon: "-93.29", gametype: "US Cities"},
        {name: "Pembroke Pines, FL", lat: "26.01", lon: "-80.34", gametype: "US Cities"},
        {name: "Garden Grove, CA", lat: "33.78", lon: "-117.96", gametype: "US Cities"},
        {name: "Fort Collins, CO", lat: "40.55", lon: "-105.06", gametype: "US Cities"},
        {name: "Lancaster, CA", lat: "34.69", lon: "-118.18", gametype: "US Cities"},
        {name: "Palmdale, CA", lat: "34.59", lon: "-118.11", gametype: "US Cities"},
        {name: "Murfreesboro, TN", lat: "35.85", lon: "-86.42", gametype: "US Cities"},
        {name: "Salinas, CA", lat: "36.69", lon: "-121.63", gametype: "US Cities"},
        {name: "Corona, CA", lat: "33.86", lon: "-117.57", gametype: "US Cities"},
        {name: "Killeen, TX", lat: "31.08", lon: "-97.73", gametype: "US Cities"},
        {name: "Hayward, CA", lat: "37.63", lon: "-122.10", gametype: "US Cities"},
        {name: "Paterson, NJ", lat: "40.91", lon: "-74.16", gametype: "US Cities"},
        {name: "Macon, GA", lat: "32.81", lon: "-83.69", gametype: "US Cities"},
        {name: "Lakewood, CO", lat: "39.70", lon: "-105.12", gametype: "US Cities"},
        {name: "Alexandria, VA", lat: "38.82", lon: "-77.08", gametype: "US Cities"},
        {name: "Roseville, CA", lat: "38.77", lon: "-121.32", gametype: "US Cities"},
        {name: "Surprise, AZ", lat: "33.67", lon: "-112.45", gametype: "US Cities"},
        {name: "Springfield, MA", lat: "42.12", lon: "-72.54", gametype: "US Cities"},
        {name: "Charleston, SC", lat: "32.83", lon: "-79.97", gametype: "US Cities"},
        {name: "Kansas City, KS", lat: "39.12", lon: "-94.74", gametype: "US Cities"},
        {name: "Sunnyvale, CA", lat: "37.39", lon: "-122.03", gametype: "US Cities"},
        {name: "Bellevue, WA", lat: "47.60", lon: "-122.16", gametype: "US Cities"},
        {name: "Hollywood, FL", lat: "26.03", lon: "-80.16", gametype: "US Cities"},
        {name: "Denton, TX", lat: "33.22", lon: "-97.14", gametype: "US Cities"},
        {name: "Escondido, CA", lat: "33.13", lon: "-117.07", gametype: "US Cities"},
        {name: "Joliet, IL", lat: "41.52", lon: "-88.15", gametype: "US Cities"},
        {name: "Naperville, IL", lat: "41.75", lon: "-88.16", gametype: "US Cities"},
        {name: "Bridgeport, CT", lat: "41.19", lon: "-73.20", gametype: "US Cities"},
        {name: "Savannah, GA", lat: "32.00", lon: "-81.15", gametype: "US Cities"},
        {name: "Mesquite, TX", lat: "32.76", lon: "-96.59", gametype: "US Cities"},
        {name: "Pasadena, TX", lat: "29.65", lon: "-95.15", gametype: "US Cities"},
        {name: "Rockford, IL", lat: "42.26", lon: "-89.06", gametype: "US Cities"},
        {name: "Pomona, CA", lat: "34.06", lon: "-117.76", gametype: "US Cities"},
        {name: "Jackson, MS", lat: "32.32", lon: "-90.21", gametype: "US Cities"},
        {name: "Olathe, KS", lat: "38.88", lon: "-94.82", gametype: "US Cities"},
        {name: "Gainesville, FL", lat: "29.68", lon: "-82.35", gametype: "US Cities"},
        {name: "McAllen, TX", lat: "26.22", lon: "-98.25", gametype: "US Cities"},
        {name: "Syracuse, NY", lat: "43.04", lon: "-76.14", gametype: "US Cities"},
        {name: "Waco, TX", lat: "31.56", lon: "-97.19", gametype: "US Cities"},
        {name: "Visalia, CA", lat: "36.33", lon: "-119.33", gametype: "US Cities"},
        {name: "Thornton, CO", lat: "39.92", lon: "-104.94", gametype: "US Cities"},
        {name: "Torrance, CA", lat: "33.83", lon: "-118.36", gametype: "US Cities"},
        {name: "Fullerton, CA", lat: "33.89", lon: "-117.93", gametype: "US Cities"},
        {name: "Columbia, SC", lat: "34.04", lon: "-80.91", gametype: "US Cities"},
        {name: "Lakewood, NJ", lat: "40.08", lon: "-74.20", gametype: "US Cities"},
        {name: "New Haven, CT", lat: "41.31", lon: "-72.92", gametype: "US Cities"},
        {name: "Hampton, VA", lat: "37.05", lon: "-76.30", gametype: "US Cities"},
        {name: "Miramar, FL", lat: "25.97", lon: "-80.34", gametype: "US Cities"},
        {name: "Victorville, CA", lat: "34.53", lon: "-117.35", gametype: "US Cities"},
        {name: "Warren, MI", lat: "42.49", lon: "-83.03", gametype: "US Cities"},
        {name: "West Valley City, UT", lat: "40.69", lon: "-112.01", gametype: "US Cities"},
        {name: "Cedar Rapids, IA", lat: "41.97", lon: "-91.68", gametype: "US Cities"},
        {name: "Stamford, CT", lat: "41.08", lon: "-73.55", gametype: "US Cities"},
        {name: "Orange, CA", lat: "33.79", lon: "-117.86", gametype: "US Cities"},
        {name: "Dayton, OH", lat: "39.78", lon: "-84.20", gametype: "US Cities"},
        {name: "Midland, TX", lat: "32.02", lon: "-102.11", gametype: "US Cities"},
        {name: "Kent, WA", lat: "47.39", lon: "-122.21", gametype: "US Cities"},
        {name: "Elizabeth, NJ", lat: "40.67", lon: "-74.19", gametype: "US Cities"},
        {name: "Pasadena, CA", lat: "34.16", lon: "-118.14", gametype: "US Cities"},
        {name: "Carrollton, TX", lat: "32.99", lon: "-96.90", gametype: "US Cities"},
        {name: "Coral Springs, FL", lat: "26.27", lon: "-80.26", gametype: "US Cities"},
        {name: "Sterling Heights, MI", lat: "42.58", lon: "-83.03", gametype: "US Cities"},
        {name: "Fargo, ND", lat: "46.86", lon: "-96.83", gametype: "US Cities"},
        {name: "Lewisville, TX", lat: "33.05", lon: "-96.98", gametype: "US Cities"},
        {name: "Meridian, ID", lat: "43.61", lon: "-116.40", gametype: "US Cities"},
        {name: "Norman, OK", lat: "35.24", lon: "-97.35", gametype: "US Cities"},
        {name: "Palm Bay, FL", lat: "27.96", lon: "-80.66", gametype: "US Cities"},
        {name: "Athens, GA", lat: "33.95", lon: "-83.37", gametype: "US Cities"},
        {name: "Columbia, MO", lat: "38.95", lon: "-92.33", gametype: "US Cities"},
        {name: "Abilene, TX", lat: "32.45", lon: "-99.74", gametype: "US Cities"},
        {name: "Pearland, TX", lat: "29.56", lon: "-95.32", gametype: "US Cities"},
        {name: "Santa Clara, CA", lat: "37.36", lon: "-121.97", gametype: "US Cities"},
        {name: "Round Rock, TX", lat: "30.53", lon: "-97.66", gametype: "US Cities"},
        {name: "Topeka, KS", lat: "39.03", lon: "-95.69", gametype: "US Cities"},
        {name: "Allentown, PA", lat: "40.59", lon: "-75.48", gametype: "US Cities"},
        {name: "Clovis, CA", lat: "36.83", lon: "-119.68", gametype: "US Cities"},
        {name: "Simi Valley, CA", lat: "34.27", lon: "-118.75", gametype: "US Cities"},
        {name: "College Station, TX", lat: "30.59", lon: "-96.30", gametype: "US Cities"},
        {name: "Thousand Oaks, CA", lat: "34.19", lon: "-118.87", gametype: "US Cities"},
        {name: "Vallejo, CA", lat: "38.11", lon: "-122.26", gametype: "US Cities"},
        {name: "Concord, CA", lat: "37.97", lon: "-122.00", gametype: "US Cities"},
        {name: "Rochester, MN", lat: "44.02", lon: "-92.48", gametype: "US Cities"},
        {name: "Arvada, CO", lat: "39.83", lon: "-105.15", gametype: "US Cities"},
        {name: "Lafayette, LA", lat: "30.21", lon: "-92.03", gametype: "US Cities"},
        {name: "Independence, MO", lat: "39.09", lon: "-94.35", gametype: "US Cities"},
        {name: "West Palm Beach, FL", lat: "26.75", lon: "-80.13", gametype: "US Cities"},
        {name: "Hartford, CT", lat: "41.77", lon: "-72.68", gametype: "US Cities"},
        {name: "Wilmington, NC", lat: "34.21", lon: "-77.89", gametype: "US Cities"},
        {name: "Lakeland, FL", lat: "28.06", lon: "-81.95", gametype: "US Cities"},
        {name: "Billings, MT", lat: "45.79", lon: "-108.55", gametype: "US Cities"},
        {name: "Ann Arbor, MI", lat: "42.28", lon: "-83.73", gametype: "US Cities"},
        {name: "Fairfield, CA", lat: "38.26", lon: "-122.03", gametype: "US Cities"},
        {name: "Berkeley, CA", lat: "37.87", lon: "-122.30", gametype: "US Cities"},
        {name: "Richardson, TX", lat: "32.97", lon: "-96.71", gametype: "US Cities"},
        {name: "North Charleston, SC", lat: "32.92", lon: "-80.07", gametype: "US Cities"},
        {name: "Cambridge, MA", lat: "42.38", lon: "-71.12", gametype: "US Cities"},
        {name: "Broken Arrow, OK", lat: "36.04", lon: "-95.78", gametype: "US Cities"},
        {name: "Clearwater, FL", lat: "27.98", lon: "-82.77", gametype: "US Cities"},
        {name: "West Jordan, UT", lat: "40.60", lon: "-112.00", gametype: "US Cities"},
        {name: "Evansville, IN", lat: "37.99", lon: "-87.53", gametype: "US Cities"},
        {name: "League City, TX", lat: "29.49", lon: "-95.11", gametype: "US Cities"},
        {name: "Antioch, CA", lat: "37.98", lon: "-121.80", gametype: "US Cities"},
        {name: "Manchester, NH", lat: "42.98", lon: "-71.44", gametype: "US Cities"},
        {name: "High Point, NC", lat: "35.99", lon: "-79.99", gametype: "US Cities"},
        {name: "Waterbury, CT", lat: "41.56", lon: "-73.04", gametype: "US Cities"},
        {name: "Westminster, CO", lat: "39.88", lon: "-105.06", gametype: "US Cities"},
        {name: "Richmond, CA", lat: "37.95", lon: "-122.36", gametype: "US Cities"},
        {name: "Carlsbad, CA", lat: "33.13", lon: "-117.28", gametype: "US Cities"},
        {name: "Las Cruces, NM", lat: "32.33", lon: "-106.79", gametype: "US Cities"},
        {name: "Murrieta, CA", lat: "33.57", lon: "-117.19", gametype: "US Cities"},
        {name: "Lowell, MA", lat: "42.64", lon: "-71.32", gametype: "US Cities"},
        {name: "Provo, UT", lat: "40.25", lon: "-111.65", gametype: "US Cities"},
        {name: "Springfield, IL", lat: "39.79", lon: "-89.64", gametype: "US Cities"},
        {name: "Elgin, IL", lat: "42.04", lon: "-88.33", gametype: "US Cities"},
        {name: "Odessa, TX", lat: "31.88", lon: "-102.35", gametype: "US Cities"},
        {name: "Lansing, MI", lat: "42.71", lon: "-84.56", gametype: "US Cities"},
        {name: "Pompano Beach, FL", lat: "26.24", lon: "-80.13", gametype: "US Cities"},
        {name: "Beaumont, TX", lat: "30.08", lon: "-94.15", gametype: "US Cities"},
        {name: "Temecula, CA", lat: "33.49", lon: "-117.13", gametype: "US Cities"},
        {name: "Gresham, OR", lat: "45.50", lon: "-122.44", gametype: "US Cities"},
        {name: "Allen, TX", lat: "33.11", lon: "-96.67", gametype: "US Cities"},
        {name: "Pueblo, CO", lat: "38.27", lon: "-104.61", gametype: "US Cities"},
        {name: "Everett, WA", lat: "47.95", lon: "-122.19", gametype: "US Cities"},
        {name: "South Fulton, GA", lat: "33.66", lon: "-84.57", gametype: "US Cities"},
        {name: "Peoria, IL", lat: "40.75", lon: "-89.62", gametype: "US Cities"},
        {name: "Nampa, ID", lat: "43.58", lon: "-116.56", gametype: "US Cities"},
        {name: "Tuscaloosa, AL", lat: "33.23", lon: "-87.53", gametype: "US Cities"},
        {name: "Miami Gardens, FL", lat: "25.95", lon: "-80.24", gametype: "US Cities"},
        {name: "Santa Maria, CA", lat: "34.93", lon: "-120.44", gametype: "US Cities"},
        {name: "Downey, CA", lat: "33.94", lon: "-118.13", gametype: "US Cities"},
        {name: "Concord, NC", lat: "35.39", lon: "-80.64", gametype: "US Cities"},
        {name: "Ventura, CA", lat: "34.27", lon: "-119.25", gametype: "US Cities"},
        {name: "Costa Mesa, CA", lat: "33.67", lon: "-117.91", gametype: "US Cities"},
        {name: "Sugar Land, TX", lat: "29.59", lon: "-95.63", gametype: "US Cities"},
        {name: "Menifee, CA", lat: "33.69", lon: "-117.18", gametype: "US Cities"},
        {name: "Tyler, TX", lat: "32.32", lon: "-95.31", gametype: "US Cities"},
        {name: "Sparks, NV", lat: "39.57", lon: "-119.72", gametype: "US Cities"},
        {name: "Greeley, CO", lat: "40.41", lon: "-104.77", gametype: "US Cities"},
        {name: "Rio Rancho, NM", lat: "35.29", lon: "-106.70", gametype: "US Cities"},
        {name: "Sandy Springs, GA", lat: "33.93", lon: "-84.37", gametype: "US Cities"},
        {name: "Dearborn, MI", lat: "42.31", lon: "-83.21", gametype: "US Cities"},
        {name: "Jurupa Valley, CA", lat: "34.00", lon: "-117.47", gametype: "US Cities"},
        {name: "Edison, NJ", lat: "40.50", lon: "-74.35", gametype: "US Cities"},
        {name: "Spokane Valley, WA", lat: "47.66", lon: "-117.23", gametype: "US Cities"},
        {name: "Hillsboro, OR", lat: "45.53", lon: "-122.94", gametype: "US Cities"},
        {name: "Davie, FL", lat: "26.08", lon: "-80.28", gametype: "US Cities"},
        {name: "Green Bay, WI", lat: "44.52", lon: "-87.99", gametype: "US Cities"},
        {name: "Centennial, CO", lat: "39.59", lon: "-104.87", gametype: "US Cities"},
        {name: "Buckeye, AZ", lat: "33.43", lon: "-112.64", gametype: "US Cities"},
        {name: "Boulder, CO", lat: "40.02", lon: "-105.25", gametype: "US Cities"},
        {name: "Goodyear, AZ", lat: "33.25", lon: "-112.37", gametype: "US Cities"},
        {name: "El Monte, CA", lat: "34.07", lon: "-118.03", gametype: "US Cities"},
        {name: "West Covina, CA", lat: "34.06", lon: "-117.91", gametype: "US Cities"},
        {name: "Brockton, MA", lat: "42.08", lon: "-71.02", gametype: "US Cities"},
        {name: "New Braunfels, TX", lat: "29.70", lon: "-98.12", gametype: "US Cities"},
        {name: "El Cajon, CA", lat: "32.80", lon: "-116.96", gametype: "US Cities"},
        {name: "Edinburg, TX", lat: "26.32", lon: "-98.16", gametype: "US Cities"},
        {name: "Renton, WA", lat: "47.48", lon: "-122.19", gametype: "US Cities"},
        {name: "Burbank, CA", lat: "34.19", lon: "-118.33", gametype: "US Cities"},
        {name: "Inglewood, CA", lat: "33.96", lon: "-118.34", gametype: "US Cities"},
        {name: "Rialto, CA", lat: "34.12", lon: "-117.39", gametype: "US Cities"},
        {name: "Lee's Summit, MO", lat: "38.92", lon: "-94.38", gametype: "US Cities"},
        {name: "Bend, OR", lat: "44.06", lon: "-121.31", gametype: "US Cities"},
        {name: "Woodbridge, NJ", lat: "40.56", lon: "-74.29", gametype: "US Cities"},
        {name: "South Bend, IN", lat: "41.68", lon: "-86.27", gametype: "US Cities"},
        {name: "Wichita Falls, TX", lat: "33.91", lon: "-98.53", gametype: "US Cities"},
        {name: "St. George, UT", lat: "37.08", lon: "-113.56", gametype: "US Cities"},
        {name: "Fishers, IN", lat: "39.96", lon: "-85.97", gametype: "US Cities"},
        {name: "Carmel, IN", lat: "39.97", lon: "-86.15", gametype: "US Cities"},
        {name: "Vacaville, CA", lat: "38.36", lon: "-121.97", gametype: "US Cities"},
        {name: "Quincy, MA", lat: "42.26", lon: "-71.01", gametype: "US Cities"},
        {name: "Conroe, TX", lat: "30.32", lon: "-95.49", gametype: "US Cities"},
        {name: "Chico, CA", lat: "39.76", lon: "-121.82", gametype: "US Cities"},
        {name: "San Mateo, CA", lat: "37.56", lon: "-122.31", gametype: "US Cities"},
        {name: "Lynn, MA", lat: "42.47", lon: "-70.96", gametype: "US Cities"},
        {name: "Albany, NY", lat: "42.67", lon: "-73.80", gametype: "US Cities"},
        {name: "Hesperia, CA", lat: "34.40", lon: "-117.32", gametype: "US Cities"},
        {name: "New Bedford, MA", lat: "41.66", lon: "-70.94", gametype: "US Cities"},
        {name: "Davenport, IA", lat: "41.56", lon: "-90.60", gametype: "US Cities"},
        {name: "Daly City, CA", lat: "37.69", lon: "-122.47", gametype: "US Cities"},
        {name: "Abraham Moss", lat: "53.51076419089969", lon: "-2.2359096315304097", gametype: "Manchester Metrolink"},
        {name: "Altrincham", lat: "53.38727988134867", lon: "-2.3477598623493154", gametype: "Manchester Metrolink"},
        {name: "Anchorage", lat: "53.47438218746536", lon: "-2.2859554163195743", gametype: "Manchester Metrolink"},
        {name: "Ashton Moss", lat: "53.4834769747597", lon: "-2.1220785675221325", gametype: "Manchester Metrolink"},
        {name: "Ashton-under-Lyne", lat: "53.4903293394926", lon: "-2.0980089298124853", gametype: "Manchester Metrolink"},
        {name: "Ashton West", lat: "53.49026233399121", lon: "-2.1096606849074075", gametype: "Manchester Metrolink"},
        {name: "Audenshaw", lat: "53.47827634698982", lon: "-2.1312508506971755", gametype: "Manchester Metrolink"},
        {name: "Baguley", lat: "53.39669649397134", lon: "-2.29251944515979", gametype: "Manchester Metrolink"},
        {name: "Barlow Moor Road", lat: "53.43277379222486", lon: "-2.269446530392422", gametype: "Manchester Metrolink"},
        {name: "Barton Dock Road", lat: "53.465739757496685", lon: "-2.3420568877542425", gametype: "Manchester Metrolink"},
        {name: "Benchill", lat: "53.38730908528439", lon: "-2.2562807739957353", gametype: "Manchester Metrolink"},
        {name: "Besses o' th' Barn", lat: "53.54184263031793", lon: "-2.2859696844831783", gametype: "Manchester Metrolink"},
        {name: "Bowker Vale", lat: "53.524913143919655", lon: "-2.249945362566439", gametype: "Manchester Metrolink"},
        {name: "Broadway", lat: "53.47473827755738", lon: "-2.2947973973302287", gametype: "Manchester Metrolink"},
        {name: "Brooklands", lat: "53.417094846146036", lon: "-2.326111548974207", gametype: "Manchester Metrolink"},
        {name: "Burton Road", lat: "53.42911402821671", lon: "-2.2405925057048193", gametype: "Manchester Metrolink"},
        {name: "Bury", lat: "53.59077118392832", lon: "-2.297224204197119", gametype: "Manchester Metrolink"},
        {name: "Cemetery Road", lat: "53.47989094286928", lon: "-2.1548966212791187", gametype: "Manchester Metrolink"},
        {name: "Central Park", lat: "53.50158376489478", lon: "-2.199252599876479", gametype: "Manchester Metrolink"},
        {name: "Chorlton", lat: "53.44280783635196", lon: "-2.2735626229920047", gametype: "Manchester Metrolink"},
        {name: "Clayton Hall", lat: "53.48282951073749", lon: "-2.182162889814979", gametype: "Manchester Metrolink"},
        {name: "Cornbrook", lat: "53.469983415979215", lon: "-2.2676411706427593", gametype: "Manchester Metrolink"},
        {name: "Crossacres", lat: "53.38332070323014", lon: "-2.256318148739995", gametype: "Manchester Metrolink"},
        {name: "Crumpsall", lat: "53.51730271293248", lon: "-2.2411382571537817", gametype: "Manchester Metrolink"},
        {name: "Dane Road", lat: "53.42998428091061", lon: "-2.311620971659586", gametype: "Manchester Metrolink"},
        {name: "Deansgate-Castlefield", lat: "53.47469011391269", lon: "-2.2504111672833136", gametype: "Manchester Metrolink"},
        {name: "Derker", lat: "53.54981147580321", lon: "-2.1016359321103435", gametype: "Manchester Metrolink"},
        {name: "Didsbury Village", lat: "53.4167317419471", lon: "-2.228597827210528", gametype: "Manchester Metrolink"},
        {name: "Droylsden", lat: "53.47949252998392", lon: "-2.144790965633684", gametype: "Manchester Metrolink"},
        {name: "East Didsbury", lat: "53.41210595738415", lon: "-2.217331913581288", gametype: "Manchester Metrolink"},
        {name: "Eccles", lat: "53.4830607319574", lon: "-2.3348144437545435", gametype: "Manchester Metrolink"},
        {name: "Edge Lane", lat: "53.480894819400326", lon: "-2.1652439402476973", gametype: "Manchester Metrolink"},
        {name: "Etihad Campus", lat: "53.48542740082557", lon: "-2.2017755272492576", gametype: "Manchester Metrolink"},
        {name: "Exchange Quay", lat: "53.46772848199821", lon: "-2.2824030060291567", gametype: "Manchester Metrolink"},
        {name: "Exchange Square", lat: "53.484414070410566", lon: "-2.24273348681127", gametype: "Manchester Metrolink"},
        {name: "Failsworth", lat: "53.51063339149269", lon: "-2.1628910939175685", gametype: "Manchester Metrolink"},
        {name: "Firswood", lat: "53.45118117292429", lon: "-2.2776701187840813", gametype: "Manchester Metrolink"},
        {name: "Freehold", lat: "53.53754956523114", lon: "-2.138424199550225", gametype: "Manchester Metrolink"},
        {name: "Harbour City", lat: "53.474064479819596", lon: "-2.291485696825293", gametype: "Manchester Metrolink"},
        {name: "Heaton Park", lat: "53.53050804441937", lon: "-2.2672635049553573", gametype: "Manchester Metrolink"},
        {name: "Hollinwood", lat: "53.51995912664655", lon: "-2.1473949773074152", gametype: "Manchester Metrolink"},
        {name: "Holt Town", lat: "53.48323282047104", lon: "-2.2122578410135385", gametype: "Manchester Metrolink"},
        {name: "Imperial War Museum", lat: "53.46861198035093", lon: "-2.296790775983045", gametype: "Manchester Metrolink"},
        {name: "Kingsway Business Park", lat: "53.61111303786389", lon: "-2.123701623071251", gametype: "Manchester Metrolink"},
        {name: "Ladywell", lat: "53.484051653721835", lon: "-2.3269834036327244", gametype: "Manchester Metrolink"},
        {name: "Langworthy", lat: "53.48071329336492", lon: "-2.2963232731088983", gametype: "Manchester Metrolink"},
        {name: "Manchester Airport", lat: "53.36537160481345", lon: "-2.272457783944666", gametype: "Manchester Metrolink"},
        {name: "Market Street", lat: "53.48192950702642", lon: "-2.2387748674678978", gametype: "Manchester Metrolink"},
        {name: "Martinscroft", lat: "53.391872839780845", lon: "-2.2798005463161553", gametype: "Manchester Metrolink"},
        {name: "MediaCityUK", lat: "53.47206850424154", lon: "-2.297333790657279", gametype: "Manchester Metrolink"},
        {name: "Milnrow", lat: "53.60817751609644", lon: "-2.1121793231990047", gametype: "Manchester Metrolink"},
        {name: "Monsall", lat: "53.50113303207379", lon: "-2.210715781056433", gametype: "Manchester Metrolink"},
        {name: "Moor Road", lat: "53.40344417980127", lon: "-2.29523596357385", gametype: "Manchester Metrolink"},
        {name: "Navigation Road", lat: "53.395877976376134", lon: "-2.343339518172027", gametype: "Manchester Metrolink"},
        {name: "New Islington", lat: "53.481099465088874", lon: "-2.2197302992936483", gametype: "Manchester Metrolink"},
        {name: "Newbold", lat: "53.613391792342654", lon: "-2.135509279887829", gametype: "Manchester Metrolink"},
        {name: "Newhey", lat: "53.60077627529588", lon: "-2.0945060991342253", gametype: "Manchester Metrolink"},
        {name: "Newton Heath and Moston", lat: "53.504220153682695", lon: "-2.183894451661451", gametype: "Manchester Metrolink"},
        {name: "Northern Moor", lat: "53.414535452185625", lon: "-2.2880899263076584", gametype: "Manchester Metrolink"},
        {name: "Old Trafford", lat: "53.456229569783396", lon: "-2.2847290430162963", gametype: "Manchester Metrolink"},
        {name: "Oldham Central", lat: "53.54031826856967", lon: "-2.1122318099685877", gametype: "Manchester Metrolink"},
        {name: "Oldham King Street", lat: "53.539531644960185", lon: "-2.1172388711427", gametype: "Manchester Metrolink"},
        {name: "Oldham Mumps", lat: "53.54247074978724", lon: "-2.1032392469133057", gametype: "Manchester Metrolink"},
        {name: "Parkway", lat: "53.46823335886211", lon: "-2.3240399353564194", gametype: "Manchester Metrolink"},
        {name: "Peel Hall", lat: "53.37408836609517", lon: "-2.251003291185519", gametype: "Manchester Metrolink"},
        {name: "Piccadilly", lat: "53.477138742500536", lon: "-2.230577043510132", gametype: "Manchester Metrolink"},
        {name: "Piccadilly Gardens", lat: "53.48036662317499", lon: "-2.2370980764434925", gametype: "Manchester Metrolink"},
        {name: "Pomona", lat: "53.465201898340254", lon: "-2.2780376353565903", gametype: "Manchester Metrolink"},
        {name: "Prestwich", lat: "53.53331340554512", lon: "-2.282019043078627", gametype: "Manchester Metrolink"},
        {name: "Queens Road", lat: "53.50166860267194", lon: "-2.2265890503503", gametype: "Manchester Metrolink"},
        {name: "Radcliffe", lat: "53.56250195694398", lon: "-2.320967019793899", gametype: "Manchester Metrolink"},
        {name: "Robinswood Road", lat: "53.37675512529106", lon: "-2.259850053158602", gametype: "Manchester Metrolink"},
        {name: "Rochdale Railway Station", lat: "53.611065902653614", lon: "-2.1544994970017703", gametype: "Manchester Metrolink"},
        {name: "Rochdale Town Centre", lat: "53.617305844057334", lon: "-2.1554158074862184", gametype: "Manchester Metrolink"},
        {name: "Roundthorn", lat: "53.3926009552247", lon: "-2.2891823172675725", gametype: "Manchester Metrolink"},
        {name: "Sale", lat: "53.42424865168755", lon: "-2.318963232681137", gametype: "Manchester Metrolink"},
        {name: "Sale Water Park", lat: "53.42818041026681", lon: "-2.290956830518045", gametype: "Manchester Metrolink"},
        {name: "Salford Quays", lat: "53.47037415969401", lon: "-2.2840758505854457", gametype: "Manchester Metrolink"},
        {name: "Shadowmoss", lat: "53.367822337654836", lon: "-2.2523801939129044", gametype: "Manchester Metrolink"},
        {name: "Shaw and Crompton", lat: "53.57618747365913", lon: "-2.089478224156269", gametype: "Manchester Metrolink"},
        {name: "Shudehill", lat: "53.48529644289496", lon: "-2.239207905967343", gametype: "Manchester Metrolink"},
        {name: "South Chadderton", lat: "53.526624089122826", lon: "-2.145132550091206", gametype: "Manchester Metrolink"},
        {name: "St Peter's Square", lat: "53.47831178958344", lon: "-2.2430903313806048", gametype: "Manchester Metrolink"},
        {name: "St Werburgh's Road", lat: "53.43880576045693", lon: "-2.2655943009905695", gametype: "Manchester Metrolink"},
        {name: "Stretford", lat: "53.44616585848627", lon: "-2.3037535285061383", gametype: "Manchester Metrolink"},
        {name: "The Trafford Centre", lat: "53.46575650792806", lon: "-2.3420192630509944", gametype: "Manchester Metrolink"},
        {name: "Timperley", lat: "53.404286670533224", lon: "-2.33830065042567", gametype: "Manchester Metrolink"},
        {name: "Trafford Bar", lat: "53.46165903093975", lon: "-2.2775408708758764", gametype: "Manchester Metrolink"},
        {name: "Velopark", lat: "53.48223913502989", lon: "-2.193041577701564", gametype: "Manchester Metrolink"},
        {name: "Victoria", lat: "53.48781531363937", lon: "-2.241690360082368", gametype: "Manchester Metrolink"},
        {name: "Village", lat: "53.46742348061914", lon: "-2.3090627556378087", gametype: "Manchester Metrolink"},
        {name: "Weaste", lat: "53.48239133793047", lon: "-2.3076062503621877", gametype: "Manchester Metrolink"},
        {name: "West Didsbury", lat: "53.42442905705163", lon: "-2.235946270137536", gametype: "Manchester Metrolink"},
        {name: "Westwood", lat: "53.54233609114404", lon: "-2.1255783780084854", gametype: "Manchester Metrolink"},
        {name: "Wharfside", lat: "53.46635726343364", lon: "-2.287931043963574", gametype: "Manchester Metrolink"},
        {name: "Whitefield", lat: "53.55111801595941", lon: "-2.2950928110543174", gametype: "Manchester Metrolink"},
        {name: "Withington", lat: "53.43270610092655", lon: "-2.2492589210568186", gametype: "Manchester Metrolink"},
        {name: "Wythenshawe Park", lat: "53.40770920726552", lon: "-2.2956861085032476", gametype: "Manchester Metrolink"},
        {name: "Wythenshawe Town Centre", lat: "53.38005176569033", lon: "-2.263722977651996", gametype: "Manchester Metrolink"}];





// }}}
// arrayend


// position leaflet map over the map image
function setMap(mbWidth, mbZoom, mbLat, mbLon, mbSrc, mbAlt) {
    mapBox.style.width = `${mbWidth}px`;
    map = L.map('mapBox', {dragging: false,

        maxZoom : mbZoom,
        minZoom : mbZoom,
        zoomControl: false,
    } ).setView([mbLat, mbLon], mbZoom);
    L.DomEvent.disableClickPropagation(map);
    mapPic = document.createElement('img');
    mapPic.src = `media/${mbSrc}.png`;
    mapPic.id = 'mapPic';
    mapPic.alt = `${mbAlt}`;
    mapBox.appendChild(mapPic);
}


// select game
// since map needs to be locked to map image, absolute values
// must be given, which causes problems for responsive design
// hence this mess...
function createGameUk() {
    selectedGame = "UK Cities";
    mapAlt = "A silhouette of the United Kingdom";
    if (window.innerHeight < 599) {
        mapBox.style.height = '242px';
        setMap(260, 4.3, 54.646, -3.4, 'uk_400', mapAlt);
    } else if (window.innerHeight >= 600 && window.innerHeight < 799) {
        mapBox.style.height = '345px';
        setMap(260, 4.8, 54.646, -3.34, 'uk_400', mapAlt);
    } else if (window.innerHeight >= 800 && window.innerHeight < 1079) {
        mapBox.style.height = '400px';
        setMap(260, 5, 54.646, -3.34, 'uk_400', mapAlt);
    } else {
        mapBox.style.height = '562px';
        setMap(365, 5.5, 54.64, -3.34, 'uk_400', mapAlt);
    }
    answerList = answerListFull.filter(x => x.gametype == selectedGame);
    answersArray = answerList.map((a) => { // this is for the autocomplete
        return a.name;
    });
}

function createGameUs() {
    selectedGame = "US Cities";
    mapAlt = "A silhouette of the USA";
    goHead = document.getElementById('gameHeader');   // because i left too much white space on top of usa.png
    goHead.style.marginBottom = '0px';              // and this is easier than lining up a modified verion
    if (window.innerWidth < 374) {
        mapBox.style.height = '151px';
        setMap(310, 2.6, 38.646, -96.04, 'usa_400', mapAlt);
    } else if (window.innerWidth >= 375 && window.innerWidth < 439) {
        mapBox.style.height = '174px';
        setMap(360, 2.8, 38.646, -96.04, 'usa_400', mapAlt);
    } else if (window.innerWidth >= 440 && window.innerWidth < 539) {
        mapBox.style.height = '215px';
        setMap(430, 3.1, 38.646, -96.04, 'usa_400', mapAlt);
    } else if (window.innerWidth >= 540 && window.innerWidth < 654) {
        mapBox.style.height = '263px';
        setMap(530, 3.4, 38.646, -96.04, 'usa_400', mapAlt);
    } else if (window.innerWidth >= 655 && window.innerWidth < 990) {
        mapBox.style.height = '324px';
        setMap(648, 3.7, 38.646, -96.04, 'usa_400', mapAlt);
    } else if (window.innerWidth >= 800 && window.innerHeight < 900) {
        mapBox.style.height = '324px';
        setMap(648, 3.7, 38.646, -96.04, 'usa_400', mapAlt);
    } else {
        mapBox.style.height = '491px';
        setMap(980, 4.3, 38.646, -96.04, 'usa_400', mapAlt);
    }
    answerList = answerListFull.filter(x => x.gametype == selectedGame);
    answersArray = answerList.map((a) => { // for autocomplete
        return a.name;
    });
}

function createGameMcr() {
    selectedGame = "Manchester Metrolink";
    mapAlt = "A silhouette of the Greater Manchester";
    if (window.innerWidth <= 380) {
        mapBox.style.height = '228px';
        setMap(315, 9.0, 53.506, -2.318, 'metro', mapAlt);
    } else if (window.innerWidth > 380 && window.innerWidth <= 460) {
        mapBox.style.height = '261px';
        setMap(370, 9.2, 53.506, -2.318, 'metro', mapAlt);
    } else if (window.innerWidth > 460 && window.innerWidth <= 545) {
        mapBox.style.height = '323px';
        setMap(450, 9.5, 53.506, -2.318, 'metro', mapAlt);
    } else if (window.innerWidth > 460 && window.innerWidth <= 545) {
        mapBox.style.height = '397px';
        setMap(535, 9.8, 53.506, -2.318, 'metro', mapAlt);
    } else if (window.innerWidth > 545 && window.innerHeight <= 900) {
        mapBox.style.height = '397px';
        setMap(535, 9.8, 53.506, -2.318, 'metro', mapAlt);
    } else if (window.innerWidth > 545 && window.innerWidth <= 765 && window.innerHeight > 900) {
        mapBox.style.height = '397px';
        setMap(535, 9.8, 53.506, -2.318, 'metro', mapAlt);
    } else {
        mapBox.style.height = '458px';
        setMap(621, 10, 53.506, -2.318, 'metro', mapAlt);
    }
    answerList = answerListFull.filter(x => x.gametype == selectedGame);
    answersArray = answerList.map((a) => { // for autocomplete
        return a.name;
    });
}


// Function to add a marker to the map and the layer group
function addMarker(lat, lon) {
    const markerLayer = L.layerGroup().addTo(map);
    const marker = L.marker([lat, lon]);
    marker.addTo(map);
    marker.addTo(markerLayer);
}


// clear the table and remove map markers
function clearTable() {
    // Loop through each row and remove it
    while (guessesTable.rows.length > 0) {
        guessesTable.deleteRow(0);
    }
    // remove all marker layers
    map.eachLayer((layer) => {
      layer.remove();
    });
    // pick an answer at random
    answer = answerList[(Math.floor(Math.random() * answerList.length))];
    guessNo = 1;
    // answer = getTheDeets('leeds');  // leave this in and uncomment if i need to fix the game
    console.log('new game started');
}

// functions to create and manage autocomplete menu
// pretty much taken from examples in Devistry's youtube video
cityInput.addEventListener('input', onInputChange);
function onInputChange() {

    removeDropdown();
    const inputValue = cityInput.value.toLowerCase()

    if (inputValue.length === 0) return;

    const filteredCities = [];
    answersArray.forEach((cityName) => {
        if (cityName.substr(0, inputValue.length).toLowerCase() === inputValue)
            filteredCities.push(cityName);
    });

    createDropdown(filteredCities);
}

function createDropdown(list) {
    const listElement = document.createElement("ul");
    listElement.className = "autocomplete-list";
    listElement.id = "autocompleteList";

    list.forEach((entry) => {
        const listItem = document.createElement('li');
        const suggestionBtn = document.createElement('button');
        suggestionBtn.innerHTML = entry;
        suggestionBtn.addEventListener('click', onSuggestionBtnClick);
        listItem.appendChild(suggestionBtn);
        listElement.appendChild(listItem);
    });

    document.getElementById('autoCompleteWrapper').appendChild(listElement);
}

// escape closes dropdown
function removeDropdown() {
    const autocompleteList = document.getElementById('autocompleteList');
    if (autocompleteList) autocompleteList.remove();
}
document.addEventListener('keydown', function(e) {
    if(e.keyCode == 27){
        removeDropdown();
    }
});

// pass entry to input and submit.
function onSuggestionBtnClick(e) {
    e.preventDefault();
    const suggestion = e.target;
    cityInput.value = suggestion.textContent;
    console.log(suggestion.textContent);
    removeDropdown();
    processGuess();
}

// matches input to an object in the array
function getTheDeets(cityName) {
  const city = answerList.find(city => city.name.toLowerCase() === cityName.toLowerCase());
  if (city) {
    return { name: city.name, lat: city.lat, lon: city.lon };
  } else {
    return null; // invalid entry if name doesn't exist in array.
  }
}

// functions to conver units for getting distance and heading
function deg2rad(deg) {
    return deg * (Math.PI / 180);
}
function rad2deg(radians) {
    return radians * 180 / Math.PI;
}

// get distance and heading
function getDistance(coord1lat, coord1lon, coord2lat, coord2lon) {
    const R = 6371;

    // convert decimal degrees to radians
    const lat1 = deg2rad(coord1lat);
    const lon1 = deg2rad(coord1lon);
    const lat2 = deg2rad(coord2lat);
    const lon2 = deg2rad(coord2lon);

    // haversine formula
    const dlat = lat2 - lat1;
    const dlon = lon2 - lon1;
    const a = Math.sin(dlat / 2) * Math.sin(dlat / 2) +
              Math.cos(lat1) * Math.cos(lat2) *
              Math.sin(dlon / 2) * Math.sin(dlon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distanceKm = R * c;

    // convert kilometers to miles
    const distanceMiles = distanceKm * 0.621371;

    // get compass heading
    y = Math.sin(lon2 - lon1) * Math.cos(lat2);
    x = Math.cos(lat1) * Math.sin(lat2) -
          Math.sin(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1);
    brng = Math.atan2(y, x);
    brng = rad2deg(brng);
    brng = (brng + 360) % 360;

    return { km: distanceKm, miles: distanceMiles, bearing: brng};
}


// a function for assigning alt text to direction arrows
function getCompassDirection(degree) {
    roundedDegree = Math.round(degree * 10) / 10
    if (roundedDegree >= 337.6 && roundedDegree <= 22.5) {
        compassDirection = "North";
    } else if (roundedDegree >= 22.6 || roundedDegree <= 67.5) {
        compassDirection = "North East";
    } else if (roundedDegree >= 67.6 || roundedDegree <= 112.5) {
        compassDirection = "East";
    } else if (roundedDegree >= 112.6 || roundedDegree <= 157.5) {
        compassDirection = "South East";
    } else if (roundedDegree >= 157.6 || roundedDegree <= 202.5) {
        compassDirection = "South";
    } else if (roundedDegree >= 202.6 || roundedDegree <= 247.5) {
        compassDirection = "South West";
    } else if (roundedDegree >= 247.6 || roundedDegree <= 292.5) {
        compassDirection = "West";
    } else if (roundedDegree >= 292.6 || roundedDegree <= 337.5) {
        compassDirection = "North West";
    }
    return;
}

// endgame popup window
function popUp(header, para) {
    endGame.showModal();
    endGameHeader.textContent = header;
    endGamePara.textContent = para;

    let copyText = `I just got a streak of ${streakNo} on #GoMiasto - ${selectedGame}. \n\nPlay for free at https://rlychrisg.github.io/GoMiasto/`;
    // boiler plate code to copy to clipboard
    const copyContent = async () => {
        try {
            await navigator.clipboard.writeText(copyText);
            console.log('Content copied to clipboard');
            share.textContent = 'Copied';
        } catch (err) {
            console.error('Failed to copy: ', err);
            share.textContent = 'Failed';
        }
    }

    const share = document.getElementById('shareBtn');
    share.onclick = copyContent;

    const playAgain = document.getElementById('playAgain');
    playAgain.onclick = function() {
        endGame.close();
        clearTable();
    }
}

// some variables..
let distance;
const maxGuesses = 6;
let streakNo = 0;

// make processing the guess a funtion that can be called by pressing enter or pressing the button
function processGuess($event) {
    event.preventDefault();
    removeDropdown();
    let guess = getTheDeets(cityInput.value);
    if (guess) {
        cityInput.value = ''; // clear the field, this may cause issues if misplaced

        if (guess.name === answer.name) {
            streakNo++;
            jsConfetti.addConfetti({
                  confettiRadius: 3,
                  confettiNumber: 500,
            })
            popUp("Correct!", `Congrats, you got this round in ${guessNo} attempts, bringing your win streak to ${streakNo}!`);
        } else if (guessNo === maxGuesses) {
            popUp("Game Over!", `Unlucky, the correct answer was ${answer.name}. Your win streak was ${streakNo}`);
            streakNo = 0;
        // for incorrect guesses
        } else if (guess.name) {
            distance = getDistance(guess.lat, guess.lon, answer.lat, answer.lon);

            // create an arrow for the table
            const arrow = document.createElement('img');
            if (window.innerWidth < 600) {
                arrow.src = "media/pointer_small.png";
            } else {
                arrow.src = "media/pointer.png";
            }
            arrow.style.transition = 'transform 1s ease-in-out';
            setTimeout(() => { // time out needs to exist for the transition animation to work
                arrow.style.transform = 'rotate(' + distance.bearing + 'deg)';
            }, 0);

            // create alt text
            console.log(distance.bearing);
            getCompassDirection(distance.bearing);
            arrow.alt = `An arrow pointing in the direction of ${compassDirection}`;

            // place the marker on the map
            // if map includes bits from miles away, fake coords need to be given
            // rather than the coords in the array
            if (guess.name === "Anchorage, AK") {
                L.marker([27.3, -114.5]).addTo(map);
            } else if (guess.name === "Honolulu, HI") {
                L.marker([28.1, -106.4]).addTo(map);
            } else {
                addMarker(guess.lat, guess.lon);
            }

            // create the table row
            let row = 0;
            const newRow = guessesTable.insertRow(row);
            const cell1 = newRow.insertCell(0);
            const cell2 = newRow.insertCell(1);
            const cell3 = newRow.insertCell(2);
            const cell4 = newRow.insertCell(3);
            cell1.innerHTML = `${guessNo}/${maxGuesses}`;
            cell2.innerHTML = guess.name;
            if (unit === 'imperial') {
                cell3.innerHTML = `${Math.round(distance.miles * 10) / 10} mi`;
            } else {
                cell3.innerHTML = `${Math.round(distance.km * 10) / 10} km`;
            }
            cell4.innerHTML = ' ';
            cell4.appendChild(arrow);

            // update details
            guessNo++;
            row++;
        }
    } else {
        console.log('invalid guess');
        invalidGuess();
        cityInput.value = '';
    }
}

// buttons and icons
document.getElementById("submitBtn").addEventListener("click", function() {
    processGuess();
})
// about stuff
aboutIcon.addEventListener('click', () => {
    aboutBox.showModal();
})
const closeAbout = document.getElementById('closeAbout');
closeAbout.addEventListener('click', () => {
    aboutBox.close();
})

// settings stuff
settingsIcon.addEventListener('click', () => {
    settingsBox.showModal();
})
document.getElementById('metric').addEventListener('click', function() {
    unit = 'metric';
});
document.getElementById('imperial').addEventListener('click', function() {
    unit = 'imperial';
});
const closeSettings = document.getElementById('closeSettings');
closeSettings.addEventListener('click', () => {
    settingsBox.close();
})

// function to inform of invalid guess.
function invalidGuess() {
    // just show, because user should be able to click back on the input
    invalidGuessBox.show();

    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    sleep(2000).then(() => { invalidGuessBox.close(); });
    }





