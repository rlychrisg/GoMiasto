

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
})
document.getElementById("gameTypeUsCities").addEventListener("click", function() {
    createGameUs();
    chooseGameBox.close();
})
document.getElementById("gameTypeMcrMetro").addEventListener("click", function() {
    createGameMcr();
    chooseGameBox.close();
})


let unit = 'imperial';

// note to people who aren't chris
// this bit is very long so if your editor doesn't have folding
// then do a text search for 'arrayend'

// {{{
answerListFull = [
        {name: "Birmingham", lat: "52.485596374699405", lon: "-1.8924272744413595", pixX: "62.69%", pixY: "70.75%", gametype: "UK Cities"},
        {name: "Leeds", lat: "53.79534574330523", lon: "-1.5508494373387873", pixX: "65.77%", pixY: "58.25%", gametype: "UK Cities"},
        {name: "Glasgow", lat: "55.859335550466085", lon: "-4.260483405444064", pixX: "41.92%", pixY: "38.00%", gametype: "UK Cities"},
        {name: "Manchester", lat: "53.47950713833537", lon: "-2.243297836552983", pixX: "59.62%", pixY: "61.25%", gametype: "UK Cities"},
        {name: "Sheffield", lat: "53.38039556365622", lon: "-1.4702766518583539", pixX: "66.54%", pixY: "62.25%", gametype: "UK Cities"},
        {name: "Bradford", lat: "53.79329651171096", lon: "-1.7563274082522964", pixX: "63.85%", pixY: "58.25%", gametype: "UK Cities"},
        {name: "Liverpool", lat: "53.40582417090412", lon: "-2.989514433251325", pixX: "53.08%", pixY: "62.00%", gametype: "UK Cities"},
        {name: "Bristol", lat: "51.45666550999953", lon: "-2.5908810351798435", pixX: "56.54%", pixY: "80.25%", gametype: "UK Cities"},
        {name: "Edinburgh", lat: "55.95229348698538", lon: "-3.1889649192855782", pixX: "51.15%", pixY: "37.00%", gametype: "UK Cities"},
        {name: "Cardiff", lat: "51.48299862799452", lon: "-3.1681470147153914", pixX: "51.54%", pixY: "80.00%", gametype: "UK Cities"},
        {name: "Leicester", lat: "52.637869890874846", lon: "-1.1392701319216532", pixX: "69.23%", pixY: "69.25%", gametype: "UK Cities"},
        {name: "Coventry", lat: "52.41105602827567", lon: "-1.5101795240874005", pixX: "66.15%", pixY: "71.50%", gametype: "UK Cities"},
        {name: "Wakefield", lat: "53.680834832307404", lon: "-1.5064566829927426", pixX: "66.15%", pixY: "59.50%", gametype: "UK Cities"},
        {name: "Belfast", lat: "54.60002323599576", lon: "-5.93315814083374", pixX: "27.31%", pixY: "50.50%", gametype: "UK Cities"},
        {name: "Nottingham", lat: "52.95164525828196", lon: "-1.154974628029673", pixX: "69.23%", pixY: "66.25%", gametype: "UK Cities"},
        {name: "Newcastle upon Tyne", lat: "54.9735851004131", lon: "-1.6221704838393036", pixX: "65.00%", pixY: "46.75%", gametype: "UK Cities"},
        {name: "Doncaster", lat: "53.52045159694294", lon: "-1.129982741526036", pixX: "69.23%", pixY: "61.00%", gametype: "UK Cities"},
        {name: "Milton Keynes", lat: "52.03896923909999", lon: "-0.7619889364411534", pixX: "72.69%", pixY: "75.00%", gametype: "UK Cities"},
        {name: "Salford", lat: "53.4866327878882", lon: "-2.2829614088829735", pixX: "59.23%", pixY: "61.25%", gametype: "UK Cities"},
        {name: "Sunderland", lat: "54.90306332983547", lon: "-1.3848145748115184", pixX: "66.92%", pixY: "47.50%", gametype: "UK Cities"},
        {name: "Brighton & Hove", lat: "50.833399423524874", lon: "-0.13554453805539696", pixX: "78.08%", pixY: "86.00%", gametype: "UK Cities"},
        {name: "Wolverhampton", lat: "52.58434983042991", lon: "-2.128996084935993", pixX: "60.77%", pixY: "69.75%", gametype: "UK Cities"},
        {name: "Kingston upon Hull", lat: "53.757006633090455", lon: "-0.32821196508953443", pixX: "76.54%", pixY: "58.75%", gametype: "UK Cities"},
        {name: "Plymouth", lat: "50.371557136462386", lon: "-4.146218568250271", pixX: "43.08%", pixY: "90.00%", gametype: "UK Cities"},
        {name: "Derby", lat: "52.91911191757612", lon: "-1.4768368775759895", pixX: "66.15%", pixY: "66.75%", gametype: "UK Cities"},
        {name: "Stoke-on-Trent", lat: "53.00551974271028", lon: "-2.185168330637043", pixX: "60.00%", pixY: "65.75%", gametype: "UK Cities"},
        {name: "Southampton", lat: "50.90708092147495", lon: "-1.406332341946639", pixX: "66.92%", pixY: "85.25%", gametype: "UK Cities"},
        {name: "Swansea", lat: "51.62077116108503", lon: "-3.946366250428829", pixX: "44.62%", pixY: "78.75%", gametype: "UK Cities"},
        {name: "Aberdeen", lat: "57.14726689279527", lon: "-2.1095806576442806", pixX: "60.77%", pixY: "24.75%", gametype: "UK Cities"},
        {name: "Peterborough", lat: "52.563116084096784", lon: "-0.2421859032382186", pixX: "76.92%", pixY: "70.00%", gametype: "UK Cities"},
        {name: "Westminster", lat: "51.49839754324327", lon: "-0.136114074936179", pixX: "78.08%", pixY: "79.75%", gametype: "UK Cities"},
        {name: "Portsmouth", lat: "50.80441491586336", lon: "-1.066881164223327", pixX: "70.00%", pixY: "86.25%", gametype: "UK Cities"},
        {name: "York", lat: "53.961922331925685", lon: "-1.0785323557235285", pixX: "69.62%", pixY: "56.75%", gametype: "UK Cities"},
        {name: "Colchester", lat: "51.8888454455942", lon: "0.8971211765695077", pixX: "86.92%", pixY: "76.25%", gametype: "UK Cities"},
        {name: "Chelmsford", lat: "51.73352037697284", lon: "0.47138420891211763", pixX: "83.46%", pixY: "77.75%", gametype: "UK Cities"},
        {name: "Southend-on-Sea", lat: "51.54017187460825", lon: "0.7088105392340642", pixX: "85.38%", pixY: "79.50%", gametype: "UK Cities"},
        {name: "Oxford", lat: "51.74868708278359", lon: "-1.2589204007959458", pixX: "68.08%", pixY: "77.50%", gametype: "UK Cities"},
        {name: "Newport", lat: "51.57640590000147", lon: "-2.9919950308122334", pixX: "53.08%", pixY: "79.25%", gametype: "UK Cities"},
        {name: "Canterbury", lat: "51.27905492691657", lon: "1.0802409824553934", pixX: "88.85%", pixY: "81.75%", gametype: "UK Cities"},
        {name: "Preston", lat: "53.76385676746858", lon: "-2.702302286463369", pixX: "55.77%", pixY: "58.50%", gametype: "UK Cities"},
        {name: "Cambridge", lat: "52.19852896525259", lon: "0.12305763416064161", pixX: "80.38%", pixY: "73.50%", gametype: "UK Cities"},
        {name: "St Albans", lat: "51.750513040961785", lon: "-0.33507105473064047", pixX: "76.15%", pixY: "77.50%", gametype: "UK Cities"},
        {name: "Dundee", lat: "56.4764850961792", lon: "-2.964155608466504", pixX: "53.46%", pixY: "31.50%", gametype: "UK Cities"},
        {name: "Lancaster", lat: "54.044054866664816", lon: "-2.8001137225079016", pixX: "54.62%", pixY: "56.00%", gametype: "UK Cities"},
        {name: "Norwich", lat: "52.63235860323026", lon: "1.2933412840721206", pixX: "90.38%", pixY: "69.25%", gametype: "UK Cities"},
        {name: "Exeter", lat: "50.722247482638544", lon: "-3.5296844143252533", pixX: "48.46%", pixY: "87.00%", gametype: "UK Cities"},
        {name: "Wrexham", lat: "53.04528147147678", lon: "-2.9955542203903565", pixX: "53.08%", pixY: "65.50%", gametype: "UK Cities"},
        {name: "Gloucester", lat: "51.86277403121018", lon: "-2.245946504478892", pixX: "59.62%", pixY: "76.50%", gametype: "UK Cities"},
        {name: "Winchester", lat: "51.0616550386822", lon: "-1.3199340831241553", pixX: "67.69%", pixY: "83.75%", gametype: "UK Cities"},
        {name: "London", lat: "51.511838193042664", lon: "-0.09122520975505334", pixX: "78.46%", pixY: "79.75%", gametype: "UK Cities"},
        {name: "Londonderry", lat: "55.000730600389154", lon: "-7.310274889482804", pixX: "15.38%", pixY: "46.50%", gametype: "UK Cities"},
        {name: "Carlisle", lat: "54.89336758205871", lon: "-2.940562132938573", pixX: "53.46%", pixY: "47.50%", gametype: "UK Cities"},
        {name: "Worcester", lat: "52.191561226468934", lon: "-2.223643658417036", pixX: "59.62%", pixY: "73.50%", gametype: "UK Cities"},
        {name: "Lincoln", lat: "53.229080940777564", lon: "-0.541433482306852", pixX: "74.62%", pixY: "63.75%", gametype: "UK Cities"},
        {name: "Durham", lat: "54.774130638035196", lon: "-1.5786910889189747", pixX: "65.38%", pixY: "48.75%", gametype: "UK Cities"},
        {name: "Chester", lat: "53.192481844507356", lon: "-2.8914873437896125", pixX: "53.85%", pixY: "64.00%", gametype: "UK Cities"},
        {name: "Bath", lat: "51.37786917730211", lon: "-2.3645307348486706", pixX: "58.46%", pixY: "81.00%", gametype: "UK Cities"},
        {name: "Inverness", lat: "57.48026534509089", lon: "-4.2261499161420595", pixX: "42.31%", pixY: "21.25%", gametype: "UK Cities"},
        {name: "Bangor (County Down)", lat: "54.657315734263896", lon: "-5.672690403384835", pixX: "29.62%", pixY: "50.00%", gametype: "UK Cities"},
        {name: "Hereford", lat: "52.0551666480208", lon: "-2.720030585068402", pixX: "55.38%", pixY: "74.75%", gametype: "UK Cities"},
        {name: "Dunfermline", lat: "56.06814243992346", lon: "-3.4522747956629236", pixX: "48.85%", pixY: "35.75%", gametype: "UK Cities"},
        {name: "Perth", lat: "56.395323707282216", lon: "-3.4403431912284206", pixX: "49.23%", pixY: "32.50%", gametype: "UK Cities"},
        {name: "Lisburn", lat: "54.51455806041022", lon: "-6.054911443810513", pixX: "26.15%", pixY: "51.25%", gametype: "UK Cities"},
        {name: "Salisbury", lat: "51.0698702617009", lon: "-1.797533834236236", pixX: "63.46%", pixY: "83.75%", gametype: "UK Cities"},
        {name: "Stirling", lat: "56.11630595051125", lon: "-3.937467457526118", pixX: "44.62%", pixY: "35.25%", gametype: "UK Cities"},
        {name: "Lichfield", lat: "52.68118036421666", lon: "-1.829394816375147", pixX: "63.08%", pixY: "69.00%", gametype: "UK Cities"},
        {name: "Newry", lat: "54.1732216952356", lon: "-6.34022303207332", pixX: "23.85%", pixY: "54.75%", gametype: "UK Cities"},
        {name: "Chichester", lat: "50.83821861847997", lon: "-0.7775125976820606", pixX: "72.31%", pixY: "85.75%", gametype: "UK Cities"},
        {name: "Ely", lat: "52.394856639429136", lon: "0.2635655971562637", pixX: "81.54%", pixY: "71.50%", gametype: "UK Cities"},
        {name: "Bangor (Gwynedd)", lat: "53.22618368067622", lon: "-4.130416188893599", pixX: "43.08%", pixY: "63.75%", gametype: "UK Cities"},
        {name: "Truro", lat: "50.26274524419426", lon: "-5.058463364773839", pixX: "35.00%", pixY: "91.00%", gametype: "UK Cities"},
        {name: "Ripon", lat: "54.13519113245494", lon: "-1.5227785124891842", pixX: "65.77%", pixY: "55.00%", gametype: "UK Cities"},
        {name: "Armagh", lat: "54.34899598691848", lon: "-6.656284345980317", pixX: "21.15%", pixY: "53.00%", gametype: "UK Cities"},
        {name: "Wells", lat: "51.20881907744404", lon: "-2.6513396239243607", pixX: "56.15%", pixY: "82.50%", gametype: "UK Cities"},
        {name: "St Asaph", lat: "53.257285657678025", lon: "-3.442674118959031", pixX: "49.23%", pixY: "63.50%", gametype: "UK Cities"},
        {name: "St Davids", lat: "51.89609836952549", lon: "-5.28054571583195", pixX: "33.08%", pixY: "76.25%", gametype: "UK Cities"},

        {name: "Anchorage, AK", lat: "61.17", lon: "-149.28", pixX: "23.61%", pixY: "88.58%", gametype: "US Cities"},
        {name: "Honolulu, HI", lat: "21.32", lon: "-157.85", pixX: "35.19%", pixY: "86.11%", gametype: "US Cities"},
        {name: "New York, NY", lat: "40.66", lon: "-73.94", pixX: "81.50%", pixY: "42.50%", gametype: "US Cities"},
        {name: "Los Angeles, CA", lat: "34.02", lon: "-118.41", pixX: "18.25%", pixY: "66.25%", gametype: "US Cities"},
        {name: "Chicago, IL", lat: "41.84", lon: "-87.68", pixX: "61.88%", pixY: "38.00%", gametype: "US Cities"},
        {name: "Houston, TX", lat: "29.79", lon: "-95.39", pixX: "51.00%", pixY: "80.50%", gametype: "US Cities"},
        {name: "Phoenix, AZ", lat: "33.57", lon: "-112.09", pixX: "27.25%", pixY: "67.75%", gametype: "US Cities"},
        {name: "Philadelphia, PA", lat: "40.01", lon: "-75.13", pixX: "79.75%", pixY: "45.00%", gametype: "US Cities"},
        {name: "San Antonio, TX", lat: "29.46", lon: "-98.52", pixX: "46.50%", pixY: "81.50%", gametype: "US Cities"},
        {name: "San Diego, CA", lat: "32.81", lon: "-117.14", pixX: "20.00%", pixY: "70.25%", gametype: "US Cities"},
        {name: "Dallas, TX", lat: "32.79", lon: "-96.77", pixX: "49.00%", pixY: "70.50%", gametype: "US Cities"},
        {name: "Austin, TX", lat: "30.30", lon: "-97.75", pixX: "47.63%", pixY: "78.75%", gametype: "US Cities"},
        {name: "Jacksonville, FL", lat: "30.34", lon: "-81.66", pixX: "70.50%", pixY: "78.50%", gametype: "US Cities"},
        {name: "San Jose, CA", lat: "37.30", lon: "-121.81", pixX: "13.38%", pixY: "54.75%", gametype: "US Cities"},
        {name: "Fort Worth, TX", lat: "32.78", lon: "-97.35", pixX: "48.13%", pixY: "70.50%", gametype: "US Cities"},
        {name: "Columbus, OH", lat: "39.99", lon: "-82.99", pixX: "68.63%", pixY: "45.00%", gametype: "US Cities"},
        {name: "Charlotte, NC", lat: "35.21", lon: "-80.83", pixX: "71.63%", pixY: "62.00%", gametype: "US Cities"},
        {name: "Indianapolis, IN", lat: "39.78", lon: "-86.15", pixX: "64.13%", pixY: "45.75%", gametype: "US Cities"},
        {name: "San Francisco, CA", lat: "37.73", lon: "-123.03", pixX: "11.63%", pixY: "53.25%", gametype: "US Cities"},
        {name: "Seattle, WA", lat: "47.62", lon: "-122.35", pixX: "12.63%", pixY: "14.75%", gametype: "US Cities"},
        {name: "Denver, CO", lat: "39.76", lon: "-104.88", pixX: "37.50%", pixY: "45.75%", gametype: "US Cities"},
        {name: "Oklahoma City, OK", lat: "35.47", lon: "-97.51", pixX: "48.00%", pixY: "61.25%", gametype: "US Cities"},
        {name: "Nashville, TN", lat: "36.17", lon: "-86.79", pixX: "63.25%", pixY: "58.75%", gametype: "US Cities"},
        {name: "El Paso, TX", lat: "31.85", lon: "-106.43", pixX: "35.25%", pixY: "73.50%", gametype: "US Cities"},
        {name: "Washington, DC", lat: "38.90", lon: "-77.02", pixX: "77.13%", pixY: "49.00%", gametype: "US Cities"},
        {name: "Las Vegas, NV", lat: "36.23", lon: "-115.26", pixX: "22.75%", pixY: "58.50%", gametype: "US Cities"},
        {name: "Boston, MA", lat: "42.34", lon: "-71.02", pixX: "85.63%", pixY: "36.00%", gametype: "US Cities"},
        {name: "Portland, OR", lat: "45.54", lon: "-122.65", pixX: "12.25%", pixY: "23.50%", gametype: "US Cities"},
        {name: "Louisville, KY", lat: "38.17", lon: "-85.65", pixX: "64.75%", pixY: "51.50%", gametype: "US Cities"},
        {name: "Memphis, TN", lat: "35.11", lon: "-89.97", pixX: "58.63%", pixY: "62.50%", gametype: "US Cities"},
        {name: "Detroit, MI", lat: "42.38", lon: "-83.10", pixX: "68.50%", pixY: "36.00%", gametype: "US Cities"},
        {name: "Baltimore, MD", lat: "39.30", lon: "-76.61", pixX: "77.63%", pixY: "47.50%", gametype: "US Cities"},
        {name: "Milwaukee, WI", lat: "43.06", lon: "-87.97", pixX: "61.50%", pixY: "33.25%", gametype: "US Cities"},
        {name: "Albuquerque, NM", lat: "35.10", lon: "-106.65", pixX: "35.00%", pixY: "62.50%", gametype: "US Cities"},
        {name: "Tucson, AZ", lat: "32.15", lon: "-110.87", pixX: "29.00%", pixY: "72.50%", gametype: "US Cities"},
        {name: "Fresno, CA", lat: "36.78", lon: "-119.79", pixX: "16.25%", pixY: "56.50%", gametype: "US Cities"},
        {name: "Sacramento, CA", lat: "38.57", lon: "-121.47", pixX: "13.88%", pixY: "50.25%", gametype: "US Cities"},
        {name: "Mesa, AZ", lat: "33.40", lon: "-111.72", pixX: "27.75%", pixY: "68.25%", gametype: "US Cities"},
        {name: "Kansas City, MO", lat: "39.12", lon: "-94.56", pixX: "52.13%", pixY: "48.25%", gametype: "US Cities"},
        {name: "Atlanta, GA", lat: "33.76", lon: "-84.42", pixX: "66.50%", pixY: "67.25%", gametype: "US Cities"},
        {name: "Colorado Springs, CO", lat: "38.87", lon: "-104.76", pixX: "37.63%", pixY: "49.00%", gametype: "US Cities"},
        {name: "Omaha, NE", lat: "41.26", lon: "-96.05", pixX: "50.00%", pixY: "40.25%", gametype: "US Cities"},
        {name: "Raleigh, NC", lat: "35.83", lon: "-78.64", pixX: "74.75%", pixY: "60.00%", gametype: "US Cities"},
        {name: "Virginia Beach, VA", lat: "36.78", lon: "-76.03", pixX: "78.50%", pixY: "56.50%", gametype: "US Cities"},
        {name: "Long Beach, CA", lat: "33.78", lon: "-118.17", pixX: "18.50%", pixY: "67.00%", gametype: "US Cities"},
        {name: "Miami, FL", lat: "25.78", lon: "-80.21", pixX: "72.50%", pixY: "93.25%", gametype: "US Cities"},
        {name: "Oakland, CA", lat: "37.77", lon: "-122.23", pixX: "12.75%", pixY: "53.00%", gametype: "US Cities"},
        {name: "Minneapolis, MN", lat: "44.96", lon: "-93.27", pixX: "54.00%", pixY: "25.75%", gametype: "US Cities"},
        {name: "Tulsa, OK", lat: "36.13", lon: "-95.90", pixX: "50.25%", pixY: "59.00%", gametype: "US Cities"},
        {name: "Bakersfield, CA", lat: "35.35", lon: "-119.04", pixX: "17.38%", pixY: "61.75%", gametype: "US Cities"},
        {name: "Tampa, FL", lat: "27.97", lon: "-82.47", pixX: "69.38%", pixY: "86.25%", gametype: "US Cities"},
        {name: "Wichita, KS", lat: "37.69", lon: "-97.35", pixX: "48.13%", pixY: "53.25%", gametype: "US Cities"},
        {name: "Arlington, TX", lat: "32.70", lon: "-97.12", pixX: "48.50%", pixY: "70.75%", gametype: "US Cities"},
        {name: "Aurora, CO", lat: "39.70", lon: "-104.72", pixX: "37.75%", pixY: "46.00%", gametype: "US Cities"},
        {name: "New Orleans, LA", lat: "30.05", lon: "-89.93", pixX: "58.75%", pixY: "79.50%", gametype: "US Cities"},
        {name: "Cleveland, OH", lat: "41.48", lon: "-81.68", pixX: "70.50%", pixY: "39.25%", gametype: "US Cities"},
        {name: "Anaheim, CA", lat: "33.86", lon: "-117.76", pixX: "19.13%", pixY: "66.75%", gametype: "US Cities"},
        {name: "Henderson, NV", lat: "36.01", lon: "-115.04", pixX: "23.00%", pixY: "59.25%", gametype: "US Cities"},
        {name: "Stockton, CA", lat: "37.98", lon: "-121.31", pixX: "14.12%", pixY: "52.25%", gametype: "US Cities"},
        {name: "Riverside, CA", lat: "33.94", lon: "-117.39", pixX: "19.63%", pixY: "66.50%", gametype: "US Cities"},
        {name: "Lexington, KY", lat: "38.04", lon: "-84.46", pixX: "66.50%", pixY: "52.00%", gametype: "US Cities"},
        {name: "Corpus Christi, TX", lat: "27.75", lon: "-97.17", pixX: "48.38%", pixY: "87.00%", gametype: "US Cities"},
        {name: "Orlando, FL", lat: "28.41", lon: "-81.25", pixX: "71.13%", pixY: "85.00%", gametype: "US Cities"},
        {name: "Irvine, CA", lat: "33.68", lon: "-117.77", pixX: "19.13%", pixY: "67.50%", gametype: "US Cities"},
        {name: "Cincinnati, OH", lat: "39.14", lon: "-84.51", pixX: "66.38%", pixY: "48.00%", gametype: "US Cities"},
        {name: "Santa Ana, CA", lat: "33.74", lon: "-117.88", pixX: "19.00%", pixY: "67.25%", gametype: "US Cities"},
        {name: "Newark, NJ", lat: "40.72", lon: "-74.17", pixX: "81.13%", pixY: "42.25%", gametype: "US Cities"},
        {name: "Saint Paul, MN", lat: "44.95", lon: "-93.10", pixX: "54.25%", pixY: "25.75%", gametype: "US Cities"},
        {name: "Pittsburgh, PA", lat: "40.44", lon: "-79.98", pixX: "72.88%", pixY: "43.25%", gametype: "US Cities"},
        {name: "Greensboro, NC", lat: "36.10", lon: "-79.83", pixX: "73.13%", pixY: "59.00%", gametype: "US Cities"},
        {name: "Lincoln, NE", lat: "40.81", lon: "-96.68", pixX: "49.13%", pixY: "42.00%", gametype: "US Cities"},
        {name: "Durham, NC", lat: "35.98", lon: "-78.90", pixX: "74.38%", pixY: "59.50%", gametype: "US Cities"},
        {name: "Plano, TX", lat: "33.05", lon: "-96.75", pixX: "49.00%", pixY: "69.50%", gametype: "US Cities"},
        {name: "Jersey City, NJ", lat: "40.71", lon: "-74.06", pixX: "81.25%", pixY: "42.25%", gametype: "US Cities"},
        {name: "St. Louis, MO", lat: "38.64", lon: "-90.24", pixX: "58.25%", pixY: "50.00%", gametype: "US Cities"},
        {name: "Chandler, AZ", lat: "33.28", lon: "-111.85", pixX: "27.50%", pixY: "68.75%", gametype: "US Cities"},
        {name: "North Las Vegas, NV", lat: "36.28", lon: "-115.09", pixX: "23.00%", pixY: "58.25%", gametype: "US Cities"},
        {name: "Chula Vista, CA", lat: "32.63", lon: "-117.02", pixX: "20.25%", pixY: "71.00%", gametype: "US Cities"},
        {name: "Buffalo, NY", lat: "42.89", lon: "-78.86", pixX: "74.50%", pixY: "34.00%", gametype: "US Cities"},
        {name: "Gilbert, AZ", lat: "33.31", lon: "-111.74", pixX: "27.75%", pixY: "68.75%", gametype: "US Cities"},
        {name: "Reno, NV", lat: "39.55", lon: "-119.85", pixX: "16.13%", pixY: "46.50%", gametype: "US Cities"},
        {name: "Madison, WI", lat: "43.09", lon: "-89.43", pixX: "59.38%", pixY: "33.25%", gametype: "US Cities"},
        {name: "Fort Wayne, IN", lat: "41.09", lon: "-85.14", pixX: "65.50%", pixY: "40.75%", gametype: "US Cities"},
        {name: "Toledo, OH", lat: "41.66", lon: "-83.58", pixX: "67.75%", pixY: "38.75%", gametype: "US Cities"},
        {name: "Lubbock, TX", lat: "33.57", lon: "-101.89", pixX: "41.75%", pixY: "67.75%", gametype: "US Cities"},
        {name: "St. Petersburg, FL", lat: "27.77", lon: "-82.64", pixX: "69.13%", pixY: "87.00%", gametype: "US Cities"},
        {name: "Laredo, TX", lat: "27.56", lon: "-99.49", pixX: "45.13%", pixY: "87.75%", gametype: "US Cities"},
        {name: "Irving, TX", lat: "32.86", lon: "-96.97", pixX: "48.75%", pixY: "70.25%", gametype: "US Cities"},
        {name: "Chesapeake, VA", lat: "36.68", lon: "-76.30", pixX: "78.13%", pixY: "57.00%", gametype: "US Cities"},
        {name: "Glendale, AZ", lat: "33.53", lon: "-112.19", pixX: "27.13%", pixY: "68.00%", gametype: "US Cities"},
        {name: "Winston-Salem, NC", lat: "36.10", lon: "-80.26", pixX: "72.50%", pixY: "59.00%", gametype: "US Cities"},
        {name: "Scottsdale, AZ", lat: "33.68", lon: "-111.86", pixX: "27.50%", pixY: "67.50%", gametype: "US Cities"},
        {name: "Garland, TX", lat: "32.91", lon: "-96.63", pixX: "49.25%", pixY: "70.00%", gametype: "US Cities"},
        {name: "Boise, ID", lat: "43.60", lon: "-116.23", pixX: "21.38%", pixY: "31.25%", gametype: "US Cities"},
        {name: "Norfolk, VA", lat: "36.92", lon: "-76.24", pixX: "78.25%", pixY: "56.00%", gametype: "US Cities"},
        {name: "Port St. Lucie, FL", lat: "27.28", lon: "-80.39", pixX: "72.25%", pixY: "88.50%", gametype: "US Cities"},
        {name: "Spokane, WA", lat: "47.67", lon: "-117.43", pixX: "19.63%", pixY: "14.50%", gametype: "US Cities"},
        {name: "Richmond, VA", lat: "37.53", lon: "-77.48", pixX: "76.38%", pixY: "54.00%", gametype: "US Cities"},
        {name: "Fremont, CA", lat: "37.49", lon: "-121.94", pixX: "13.25%", pixY: "54.00%", gametype: "US Cities"},
        {name: "Huntsville, AL", lat: "34.78", lon: "-86.53", pixX: "63.50%", pixY: "63.50%", gametype: "US Cities"},
        {name: "Tacoma, WA", lat: "47.25", lon: "-122.46", pixX: "12.50%", pixY: "16.25%", gametype: "US Cities"},
        {name: "Baton Rouge, LA", lat: "30.44", lon: "-91.13", pixX: "57.00%", pixY: "78.25%", gametype: "US Cities"},
        {name: "Santa Clarita, CA", lat: "34.41", lon: "-118.49", pixX: "18.13%", pixY: "65.00%", gametype: "US Cities"},
        {name: "San Bernardino, CA", lat: "34.14", lon: "-117.29", pixX: "19.88%", pixY: "65.75%", gametype: "US Cities"},
        {name: "Hialeah, FL", lat: "25.87", lon: "-80.30", pixX: "72.38%", pixY: "93.00%", gametype: "US Cities"},
        {name: "Frisco, TX", lat: "33.16", lon: "-96.82", pixX: "48.88%", pixY: "69.25%", gametype: "US Cities"},
        {name: "Modesto, CA", lat: "37.64", lon: "-121.00", pixX: "14.50%", pixY: "53.50%", gametype: "US Cities"},
        {name: "Cape Coral, FL", lat: "26.65", lon: "-81.99", pixX: "70.00%", pixY: "90.50%", gametype: "US Cities"},
        {name: "Fontana, CA", lat: "34.11", lon: "-117.46", pixX: "19.63%", pixY: "66.00%", gametype: "US Cities"},
        {name: "Moreno Valley, CA", lat: "33.92", lon: "-117.21", pixX: "19.88%", pixY: "66.50%", gametype: "US Cities"},
        {name: "Des Moines, IA", lat: "41.57", lon: "-93.61", pixX: "53.50%", pixY: "39.00%", gametype: "US Cities"},
        {name: "Rochester, NY", lat: "43.17", lon: "-77.62", pixX: "76.25%", pixY: "32.75%", gametype: "US Cities"},
        {name: "Fayetteville, NC", lat: "35.08", lon: "-78.97", pixX: "74.25%", pixY: "62.50%", gametype: "US Cities"},
        {name: "Yonkers, NY", lat: "40.95", lon: "-73.87", pixX: "81.63%", pixY: "41.25%", gametype: "US Cities"},
        {name: "McKinney, TX", lat: "33.20", lon: "-96.66", pixX: "49.13%", pixY: "69.00%", gametype: "US Cities"},
        {name: "Worcester, MA", lat: "42.27", lon: "-71.81", pixX: "84.50%", pixY: "36.25%", gametype: "US Cities"},
        {name: "Salt Lake City, UT", lat: "40.78", lon: "-111.93", pixX: "27.38%", pixY: "42.00%", gametype: "US Cities"},
        {name: "Little Rock, AR", lat: "34.72", lon: "-92.36", pixX: "55.25%", pixY: "63.75%", gametype: "US Cities"},
        {name: "Columbus, GA", lat: "32.51", lon: "-84.87", pixX: "65.88%", pixY: "71.25%", gametype: "US Cities"},
        {name: "Augusta, GA", lat: "33.37", lon: "-82.07", pixX: "69.88%", pixY: "68.50%", gametype: "US Cities"},
        {name: "Sioux Falls, SD", lat: "43.54", lon: "-96.73", pixX: "49.00%", pixY: "31.50%", gametype: "US Cities"},
        {name: "Grand Prairie, TX", lat: "32.69", lon: "-97.02", pixX: "48.63%", pixY: "70.75%", gametype: "US Cities"},
        {name: "Tallahassee, FL", lat: "30.46", lon: "-84.25", pixX: "66.75%", pixY: "78.25%", gametype: "US Cities"},
        {name: "Amarillo, TX", lat: "35.20", lon: "-101.83", pixX: "41.75%", pixY: "62.25%", gametype: "US Cities"},
        {name: "Oxnard, CA", lat: "34.20", lon: "-119.21", pixX: "17.13%", pixY: "65.50%", gametype: "US Cities"},
        {name: "Peoria, AZ", lat: "33.79", lon: "-112.31", pixX: "26.88%", pixY: "67.00%", gametype: "US Cities"},
        {name: "Overland Park, KS", lat: "38.89", lon: "-94.69", pixX: "52.00%", pixY: "49.00%", gametype: "US Cities"},
        {name: "Montgomery, AL", lat: "32.35", lon: "-86.27", pixX: "63.88%", pixY: "72.00%", gametype: "US Cities"},
        {name: "Birmingham, AL", lat: "33.53", lon: "-86.80", pixX: "63.13%", pixY: "68.00%", gametype: "US Cities"},
        {name: "Grand Rapids, MI", lat: "42.96", lon: "-85.66", pixX: "64.75%", pixY: "33.75%", gametype: "US Cities"},
        {name: "Knoxville, TN", lat: "35.97", lon: "-83.95", pixX: "67.25%", pixY: "59.50%", gametype: "US Cities"},
        {name: "Vancouver, WA", lat: "45.64", lon: "-122.60", pixX: "12.25%", pixY: "23.00%", gametype: "US Cities"},
        {name: "Huntington Beach, CA", lat: "33.70", lon: "-118.00", pixX: "18.75%", pixY: "67.25%", gametype: "US Cities"},
        {name: "Providence, RI", lat: "41.82", lon: "-71.42", pixX: "85.00%", pixY: "38.00%", gametype: "US Cities"},
        {name: "Brownsville, TX", lat: "26.00", lon: "-97.45", pixX: "48.00%", pixY: "92.50%", gametype: "US Cities"},
        {name: "Glendale, CA", lat: "34.18", lon: "-118.25", pixX: "18.50%", pixY: "65.75%", gametype: "US Cities"},
        {name: "Akron, OH", lat: "41.08", lon: "-81.52", pixX: "70.63%", pixY: "40.75%", gametype: "US Cities"},
        {name: "Tempe, AZ", lat: "33.39", lon: "-111.93", pixX: "27.38%", pixY: "68.50%", gametype: "US Cities"},
        {name: "Newport News, VA", lat: "37.08", lon: "-76.52", pixX: "77.75%", pixY: "55.50%", gametype: "US Cities"},
        {name: "Chattanooga, TN", lat: "35.07", lon: "-85.25", pixX: "65.38%", pixY: "62.50%", gametype: "US Cities"},
        {name: "Mobile, AL", lat: "30.67", lon: "-88.10", pixX: "61.38%", pixY: "77.50%", gametype: "US Cities"},
        {name: "Fort Lauderdale, FL", lat: "26.14", lon: "-80.15", pixX: "72.63%", pixY: "92.25%", gametype: "US Cities"},
        {name: "Cary, NC", lat: "35.78", lon: "-78.82", pixX: "74.50%", pixY: "60.25%", gametype: "US Cities"},
        {name: "Shreveport, LA", lat: "32.47", lon: "-93.79", pixX: "53.25%", pixY: "71.50%", gametype: "US Cities"},
        {name: "Ontario, CA", lat: "34.04", lon: "-117.60", pixX: "19.38%", pixY: "66.25%", gametype: "US Cities"},
        {name: "Eugene, OR", lat: "44.06", lon: "-123.12", pixX: "11.50%", pixY: "29.25%", gametype: "US Cities"},
        {name: "Aurora, IL", lat: "41.76", lon: "-88.29", pixX: "61.00%", pixY: "38.25%", gametype: "US Cities"},
        {name: "Elk Grove, CA", lat: "38.41", lon: "-121.38", pixX: "14.00%", pixY: "50.75%", gametype: "US Cities"},
        {name: "Salem, OR", lat: "44.92", lon: "-123.02", pixX: "11.63%", pixY: "26.00%", gametype: "US Cities"},
        {name: "Santa Rosa, CA", lat: "38.45", lon: "-122.71", pixX: "12.13%", pixY: "50.50%", gametype: "US Cities"},
        {name: "Clarksville, TN", lat: "36.57", lon: "-87.35", pixX: "62.38%", pixY: "57.25%", gametype: "US Cities"},
        {name: "Rancho Cucamonga, CA", lat: "34.12", lon: "-117.56", pixX: "19.38%", pixY: "66.00%", gametype: "US Cities"},
        {name: "Oceanside, CA", lat: "33.22", lon: "-117.31", pixX: "19.75%", pixY: "69.00%", gametype: "US Cities"},
        {name: "Springfield, MO", lat: "37.19", lon: "-93.29", pixX: "54.00%", pixY: "55.25%", gametype: "US Cities"},
        {name: "Pembroke Pines, FL", lat: "26.01", lon: "-80.34", pixX: "72.38%", pixY: "92.50%", gametype: "US Cities"},
        {name: "Garden Grove, CA", lat: "33.78", lon: "-117.96", pixX: "18.88%", pixY: "67.00%", gametype: "US Cities"},
        {name: "Fort Collins, CO", lat: "40.55", lon: "-105.06", pixX: "37.25%", pixY: "42.75%", gametype: "US Cities"},
        {name: "Lancaster, CA", lat: "34.69", lon: "-118.18", pixX: "18.50%", pixY: "64.00%", gametype: "US Cities"},
        {name: "Palmdale, CA", lat: "34.59", lon: "-118.11", pixX: "18.63%", pixY: "64.25%", gametype: "US Cities"},
        {name: "Murfreesboro, TN", lat: "35.85", lon: "-86.42", pixX: "63.75%", pixY: "60.00%", gametype: "US Cities"},
        {name: "Salinas, CA", lat: "36.69", lon: "-121.63", pixX: "13.63%", pixY: "57.00%", gametype: "US Cities"},
        {name: "Corona, CA", lat: "33.86", lon: "-117.57", pixX: "19.38%", pixY: "66.75%", gametype: "US Cities"},
        {name: "Killeen, TX", lat: "31.08", lon: "-97.73", pixX: "47.63%", pixY: "76.25%", gametype: "US Cities"},
        {name: "Hayward, CA", lat: "37.63", lon: "-122.10", pixX: "13.00%", pixY: "53.50%", gametype: "US Cities"},
        {name: "Paterson, NJ", lat: "40.91", lon: "-74.16", pixX: "81.13%", pixY: "41.50%", gametype: "US Cities"},
        {name: "Macon, GA", lat: "32.81", lon: "-83.69", pixX: "67.63%", pixY: "70.25%", gametype: "US Cities"},
        {name: "Lakewood, CO", lat: "39.70", lon: "-105.12", pixX: "37.13%", pixY: "46.00%", gametype: "US Cities"},
        {name: "Alexandria, VA", lat: "38.82", lon: "-77.08", pixX: "77.00%", pixY: "49.25%", gametype: "US Cities"},
        {name: "Roseville, CA", lat: "38.77", lon: "-121.32", pixX: "14.12%", pixY: "49.50%", gametype: "US Cities"},
        {name: "Surprise, AZ", lat: "33.67", lon: "-112.45", pixX: "26.75%", pixY: "67.50%", gametype: "US Cities"},
        {name: "Springfield, MA", lat: "42.12", lon: "-72.54", pixX: "83.50%", pixY: "37.00%", gametype: "US Cities"},
        {name: "Charleston, SC", lat: "32.83", lon: "-79.97", pixX: "72.88%", pixY: "70.25%", gametype: "US Cities"},
        {name: "Kansas City, KS", lat: "39.12", lon: "-94.74", pixX: "51.88%", pixY: "48.25%", gametype: "US Cities"},
        {name: "Sunnyvale, CA", lat: "37.39", lon: "-122.03", pixX: "13.13%", pixY: "54.50%", gametype: "US Cities"},
        {name: "Bellevue, WA", lat: "47.60", lon: "-122.16", pixX: "12.88%", pixY: "15.00%", gametype: "US Cities"},
        {name: "Hollywood, FL", lat: "26.03", lon: "-80.16", pixX: "72.63%", pixY: "92.50%", gametype: "US Cities"},
        {name: "Denton, TX", lat: "33.22", lon: "-97.14", pixX: "48.50%", pixY: "69.00%", gametype: "US Cities"},
        {name: "Escondido, CA", lat: "33.13", lon: "-117.07", pixX: "20.13%", pixY: "69.25%", gametype: "US Cities"},
        {name: "Joliet, IL", lat: "41.52", lon: "-88.15", pixX: "61.25%", pixY: "39.25%", gametype: "US Cities"},
        {name: "Naperville, IL", lat: "41.75", lon: "-88.16", pixX: "61.25%", pixY: "38.25%", gametype: "US Cities"},
        {name: "Bridgeport, CT", lat: "41.19", lon: "-73.20", pixX: "82.50%", pixY: "40.50%", gametype: "US Cities"},
        {name: "Savannah, GA", lat: "32.00", lon: "-81.15", pixX: "71.25%", pixY: "73.00%", gametype: "US Cities"},
        {name: "Mesquite, TX", lat: "32.76", lon: "-96.59", pixX: "49.25%", pixY: "70.50%", gametype: "US Cities"},
        {name: "Pasadena, TX", lat: "29.65", lon: "-95.15", pixX: "51.25%", pixY: "80.75%", gametype: "US Cities"},
        {name: "Rockford, IL", lat: "42.26", lon: "-89.06", pixX: "60.00%", pixY: "36.50%", gametype: "US Cities"},
        {name: "Pomona, CA", lat: "34.06", lon: "-117.76", pixX: "19.13%", pixY: "66.00%", gametype: "US Cities"},
        {name: "Jackson, MS", lat: "32.32", lon: "-90.21", pixX: "58.38%", pixY: "72.00%", gametype: "US Cities"},
        {name: "Olathe, KS", lat: "38.88", lon: "-94.82", pixX: "51.75%", pixY: "49.00%", gametype: "US Cities"},
        {name: "Gainesville, FL", lat: "29.68", lon: "-82.35", pixX: "69.50%", pixY: "80.75%", gametype: "US Cities"},
        {name: "McAllen, TX", lat: "26.22", lon: "-98.25", pixX: "46.88%", pixY: "92.00%", gametype: "US Cities"},
        {name: "Syracuse, NY", lat: "43.04", lon: "-76.14", pixX: "78.38%", pixY: "33.25%", gametype: "US Cities"},
        {name: "Waco, TX", lat: "31.56", lon: "-97.19", pixX: "48.38%", pixY: "74.50%", gametype: "US Cities"},
        {name: "Visalia, CA", lat: "36.33", lon: "-119.33", pixX: "16.88%", pixY: "58.25%", gametype: "US Cities"},
        {name: "Thornton, CO", lat: "39.92", lon: "-104.94", pixX: "37.38%", pixY: "45.25%", gametype: "US Cities"},
        {name: "Torrance, CA", lat: "33.83", lon: "-118.36", pixX: "18.25%", pixY: "67.00%", gametype: "US Cities"},
        {name: "Fullerton, CA", lat: "33.89", lon: "-117.93", pixX: "18.88%", pixY: "66.75%", gametype: "US Cities"},
        {name: "Columbia, SC", lat: "34.04", lon: "-80.91", pixX: "71.50%", pixY: "66.25%", gametype: "US Cities"},
        {name: "Lakewood, NJ", lat: "40.08", lon: "-74.20", pixX: "81.13%", pixY: "44.50%", gametype: "US Cities"},
        {name: "New Haven, CT", lat: "41.31", lon: "-72.92", pixX: "82.88%", pixY: "40.00%", gametype: "US Cities"},
        {name: "Hampton, VA", lat: "37.05", lon: "-76.30", pixX: "78.13%", pixY: "55.75%", gametype: "US Cities"},
        {name: "Miramar, FL", lat: "25.97", lon: "-80.34", pixX: "72.38%", pixY: "92.75%", gametype: "US Cities"},
        {name: "Victorville, CA", lat: "34.53", lon: "-117.35", pixX: "19.75%", pixY: "64.50%", gametype: "US Cities"},
        {name: "Warren, MI", lat: "42.49", lon: "-83.03", pixX: "68.50%", pixY: "35.50%", gametype: "US Cities"},
        {name: "West Valley City, UT", lat: "40.69", lon: "-112.01", pixX: "27.38%", pixY: "42.25%", gametype: "US Cities"},
        {name: "Cedar Rapids, IA", lat: "41.97", lon: "-91.68", pixX: "56.25%", pixY: "37.50%", gametype: "US Cities"},
        {name: "Stamford, CT", lat: "41.08", lon: "-73.55", pixX: "82.00%", pixY: "40.75%", gametype: "US Cities"},
        {name: "Orange, CA", lat: "33.79", lon: "-117.86", pixX: "19.00%", pixY: "67.00%", gametype: "US Cities"},
        {name: "Dayton, OH", lat: "39.78", lon: "-84.20", pixX: "66.88%", pixY: "45.75%", gametype: "US Cities"},
        {name: "Midland, TX", lat: "32.02", lon: "-102.11", pixX: "41.38%", pixY: "73.00%", gametype: "US Cities"},
        {name: "Kent, WA", lat: "47.39", lon: "-122.21", pixX: "12.88%", pixY: "15.75%", gametype: "US Cities"},
        {name: "Elizabeth, NJ", lat: "40.67", lon: "-74.19", pixX: "81.13%", pixY: "42.50%", gametype: "US Cities"},
        {name: "Pasadena, CA", lat: "34.16", lon: "-118.14", pixX: "18.63%", pixY: "65.75%", gametype: "US Cities"},
        {name: "Carrollton, TX", lat: "32.99", lon: "-96.90", pixX: "48.75%", pixY: "69.75%", gametype: "US Cities"},
        {name: "Coral Springs, FL", lat: "26.27", lon: "-80.26", pixX: "72.50%", pixY: "91.75%", gametype: "US Cities"},
        {name: "Sterling Heights, MI", lat: "42.58", lon: "-83.03", pixX: "68.50%", pixY: "35.25%", gametype: "US Cities"},
        {name: "Fargo, ND", lat: "46.86", lon: "-96.83", pixX: "48.88%", pixY: "18.00%", gametype: "US Cities"},
        {name: "Lewisville, TX", lat: "33.05", lon: "-96.98", pixX: "48.75%", pixY: "69.50%", gametype: "US Cities"},
        {name: "Meridian, ID", lat: "43.61", lon: "-116.40", pixX: "21.13%", pixY: "31.25%", gametype: "US Cities"},
        {name: "Norman, OK", lat: "35.24", lon: "-97.35", pixX: "48.13%", pixY: "62.00%", gametype: "US Cities"},
        {name: "Palm Bay, FL", lat: "27.96", lon: "-80.66", pixX: "71.88%", pixY: "86.25%", gametype: "US Cities"},
        {name: "Athens, GA", lat: "33.95", lon: "-83.37", pixX: "68.00%", pixY: "66.50%", gametype: "US Cities"},
        {name: "Columbia, MO", lat: "38.95", lon: "-92.33", pixX: "55.25%", pixY: "48.75%", gametype: "US Cities"},
        {name: "Abilene, TX", lat: "32.45", lon: "-99.74", pixX: "44.75%", pixY: "71.50%", gametype: "US Cities"},
        {name: "Pearland, TX", lat: "29.56", lon: "-95.32", pixX: "51.00%", pixY: "81.25%", gametype: "US Cities"},
        {name: "Santa Clara, CA", lat: "37.36", lon: "-121.97", pixX: "13.13%", pixY: "54.50%", gametype: "US Cities"},
        {name: "Round Rock, TX", lat: "30.53", lon: "-97.66", pixX: "47.75%", pixY: "78.00%", gametype: "US Cities"},
        {name: "Topeka, KS", lat: "39.03", lon: "-95.69", pixX: "50.50%", pixY: "48.50%", gametype: "US Cities"},
        {name: "Allentown, PA", lat: "40.59", lon: "-75.48", pixX: "79.25%", pixY: "42.75%", gametype: "US Cities"},
        {name: "Clovis, CA", lat: "36.83", lon: "-119.68", pixX: "16.38%", pixY: "56.50%", gametype: "US Cities"},
        {name: "Simi Valley, CA", lat: "34.27", lon: "-118.75", pixX: "17.75%", pixY: "65.50%", gametype: "US Cities"},
        {name: "College Station, TX", lat: "30.59", lon: "-96.30", pixX: "49.63%", pixY: "77.75%", gametype: "US Cities"},
        {name: "Thousand Oaks, CA", lat: "34.19", lon: "-118.87", pixX: "17.63%", pixY: "65.75%", gametype: "US Cities"},
        {name: "Vallejo, CA", lat: "38.11", lon: "-122.26", pixX: "12.75%", pixY: "51.75%", gametype: "US Cities"},
        {name: "Concord, CA", lat: "37.97", lon: "-122.00", pixX: "13.13%", pixY: "52.25%", gametype: "US Cities"},
        {name: "Rochester, MN", lat: "44.02", lon: "-92.48", pixX: "55.13%", pixY: "29.50%", gametype: "US Cities"},
        {name: "Arvada, CO", lat: "39.83", lon: "-105.15", pixX: "37.13%", pixY: "45.50%", gametype: "US Cities"},
        {name: "Lafayette, LA", lat: "30.21", lon: "-92.03", pixX: "55.75%", pixY: "79.00%", gametype: "US Cities"},
        {name: "Independence, MO", lat: "39.09", lon: "-94.35", pixX: "52.50%", pixY: "48.25%", gametype: "US Cities"},
        {name: "West Palm Beach, FL", lat: "26.75", lon: "-80.13", pixX: "72.63%", pixY: "90.25%", gametype: "US Cities"},
        {name: "Hartford, CT", lat: "41.77", lon: "-72.68", pixX: "83.25%", pixY: "38.25%", gametype: "US Cities"},
        {name: "Wilmington, NC", lat: "34.21", lon: "-77.89", pixX: "75.88%", pixY: "65.50%", gametype: "US Cities"},
        {name: "Lakeland, FL", lat: "28.06", lon: "-81.95", pixX: "70.13%", pixY: "86.00%", gametype: "US Cities"},
        {name: "Billings, MT", lat: "45.79", lon: "-108.55", pixX: "32.25%", pixY: "22.50%", gametype: "US Cities"},
        {name: "Ann Arbor, MI", lat: "42.28", lon: "-83.73", pixX: "67.50%", pixY: "36.25%", gametype: "US Cities"},
        {name: "Fairfield, CA", lat: "38.26", lon: "-122.03", pixX: "13.13%", pixY: "51.25%", gametype: "US Cities"},
        {name: "Berkeley, CA", lat: "37.87", lon: "-122.30", pixX: "12.63%", pixY: "52.75%", gametype: "US Cities"},
        {name: "Richardson, TX", lat: "32.97", lon: "-96.71", pixX: "49.13%", pixY: "69.75%", gametype: "US Cities"},
        {name: "North Charleston, SC", lat: "32.92", lon: "-80.07", pixX: "72.75%", pixY: "70.00%", gametype: "US Cities"},
        {name: "Cambridge, MA", lat: "42.38", lon: "-71.12", pixX: "85.50%", pixY: "36.00%", gametype: "US Cities"},
        {name: "Broken Arrow, OK", lat: "36.04", lon: "-95.78", pixX: "50.38%", pixY: "59.25%", gametype: "US Cities"},
        {name: "Clearwater, FL", lat: "27.98", lon: "-82.77", pixX: "68.88%", pixY: "86.25%", gametype: "US Cities"},
        {name: "West Jordan, UT", lat: "40.60", lon: "-112.00", pixX: "27.38%", pixY: "42.75%", gametype: "US Cities"},
        {name: "Evansville, IN", lat: "37.99", lon: "-87.53", pixX: "62.13%", pixY: "52.25%", gametype: "US Cities"},
        {name: "League City, TX", lat: "29.49", lon: "-95.11", pixX: "51.38%", pixY: "81.50%", gametype: "US Cities"},
        {name: "Antioch, CA", lat: "37.98", lon: "-121.80", pixX: "13.38%", pixY: "52.25%", gametype: "US Cities"},
        {name: "Manchester, NH", lat: "42.98", lon: "-71.44", pixX: "85.00%", pixY: "33.50%", gametype: "US Cities"},
        {name: "High Point, NC", lat: "35.99", lon: "-79.99", pixX: "72.88%", pixY: "59.50%", gametype: "US Cities"},
        {name: "Waterbury, CT", lat: "41.56", lon: "-73.04", pixX: "82.75%", pixY: "39.00%", gametype: "US Cities"},
        {name: "Westminster, CO", lat: "39.88", lon: "-105.06", pixX: "37.25%", pixY: "45.25%", gametype: "US Cities"},
        {name: "Richmond, CA", lat: "37.95", lon: "-122.36", pixX: "12.63%", pixY: "52.50%", gametype: "US Cities"},
        {name: "Carlsbad, CA", lat: "33.13", lon: "-117.28", pixX: "19.88%", pixY: "69.25%", gametype: "US Cities"},
        {name: "Las Cruces, NM", lat: "32.33", lon: "-106.79", pixX: "34.75%", pixY: "72.00%", gametype: "US Cities"},
        {name: "Murrieta, CA", lat: "33.57", lon: "-117.19", pixX: "20.00%", pixY: "67.75%", gametype: "US Cities"},
        {name: "Lowell, MA", lat: "42.64", lon: "-71.32", pixX: "85.25%", pixY: "35.00%", gametype: "US Cities"},
        {name: "Provo, UT", lat: "40.25", lon: "-111.65", pixX: "27.88%", pixY: "44.00%", gametype: "US Cities"},
        {name: "Springfield, IL", lat: "39.79", lon: "-89.64", pixX: "59.13%", pixY: "45.75%", gametype: "US Cities"},
        {name: "Elgin, IL", lat: "42.04", lon: "-88.33", pixX: "61.00%", pixY: "37.25%", gametype: "US Cities"},
        {name: "Odessa, TX", lat: "31.88", lon: "-102.35", pixX: "41.00%", pixY: "73.50%", gametype: "US Cities"},
        {name: "Lansing, MI", lat: "42.71", lon: "-84.56", pixX: "66.38%", pixY: "34.75%", gametype: "US Cities"},
        {name: "Pompano Beach, FL", lat: "26.24", lon: "-80.13", pixX: "72.63%", pixY: "91.75%", gametype: "US Cities"},
        {name: "Beaumont, TX", lat: "30.08", lon: "-94.15", pixX: "52.75%", pixY: "79.50%", gametype: "US Cities"},
        {name: "Temecula, CA", lat: "33.49", lon: "-117.13", pixX: "20.00%", pixY: "68.00%", gametype: "US Cities"},
        {name: "Gresham, OR", lat: "45.50", lon: "-122.44", pixX: "12.50%", pixY: "23.50%", gametype: "US Cities"},
        {name: "Allen, TX", lat: "33.11", lon: "-96.67", pixX: "49.13%", pixY: "69.25%", gametype: "US Cities"},
        {name: "Pueblo, CO", lat: "38.27", lon: "-104.61", pixX: "37.88%", pixY: "51.25%", gametype: "US Cities"},
        {name: "Everett, WA", lat: "47.95", lon: "-122.19", pixX: "12.88%", pixY: "13.50%", gametype: "US Cities"},
        {name: "South Fulton, GA", lat: "33.66", lon: "-84.57", pixX: "66.38%", pixY: "67.50%", gametype: "US Cities"},
        {name: "Peoria, IL", lat: "40.75", lon: "-89.62", pixX: "59.13%", pixY: "42.00%", gametype: "US Cities"},
        {name: "Nampa, ID", lat: "43.58", lon: "-116.56", pixX: "20.88%", pixY: "31.25%", gametype: "US Cities"},
        {name: "Tuscaloosa, AL", lat: "33.23", lon: "-87.53", pixX: "62.13%", pixY: "69.00%", gametype: "US Cities"},
        {name: "Miami Gardens, FL", lat: "25.95", lon: "-80.24", pixX: "72.50%", pixY: "92.75%", gametype: "US Cities"},
        {name: "Santa Maria, CA", lat: "34.93", lon: "-120.44", pixX: "15.38%", pixY: "63.00%", gametype: "US Cities"},
        {name: "Downey, CA", lat: "33.94", lon: "-118.13", pixX: "18.63%", pixY: "66.50%", gametype: "US Cities"},
        {name: "Concord, CA", lat: "37.97", lon: "-122.00", pixX: "13.13%", pixY: "52.25%", gametype: "US Cities"},
        {name: "Ventura, CA", lat: "34.27", lon: "-119.25", pixX: "17.00%", pixY: "65.50%", gametype: "US Cities"},
        {name: "Costa Mesa, CA", lat: "33.67", lon: "-117.91", pixX: "18.88%", pixY: "67.50%", gametype: "US Cities"},
        {name: "Sugar Land, TX", lat: "29.59", lon: "-95.63", pixX: "50.63%", pixY: "81.00%", gametype: "US Cities"},
        {name: "Menifee, CA", lat: "33.69", lon: "-117.18", pixX: "20.00%", pixY: "67.25%", gametype: "US Cities"},
        {name: "Tyler, TX", lat: "32.32", lon: "-95.31", pixX: "51.13%", pixY: "72.00%", gametype: "US Cities"},
        {name: "Sparks, NV", lat: "39.57", lon: "-119.72", pixX: "16.38%", pixY: "46.50%", gametype: "US Cities"},
        {name: "Greeley, CO", lat: "40.41", lon: "-104.77", pixX: "37.63%", pixY: "43.50%", gametype: "US Cities"},
        {name: "Rio Rancho, NM", lat: "35.29", lon: "-106.70", pixX: "34.88%", pixY: "61.75%", gametype: "US Cities"},
        {name: "Sandy Springs, GA", lat: "33.93", lon: "-84.37", pixX: "66.63%", pixY: "66.50%", gametype: "US Cities"},
        {name: "Dearborn, MI", lat: "42.31", lon: "-83.21", pixX: "68.25%", pixY: "36.25%", gametype: "US Cities"},
        {name: "Jurupa Valley, CA", lat: "34.00", lon: "-117.47", pixX: "19.50%", pixY: "66.25%", gametype: "US Cities"},
        {name: "Edison, NJ", lat: "40.50", lon: "-74.35", pixX: "80.88%", pixY: "43.00%", gametype: "US Cities"},
        {name: "Spokane Valley, WA", lat: "47.66", lon: "-117.23", pixX: "19.88%", pixY: "14.75%", gametype: "US Cities"},
        {name: "Hillsboro, OR", lat: "45.53", lon: "-122.94", pixX: "11.75%", pixY: "23.50%", gametype: "US Cities"},
        {name: "Davie, FL", lat: "26.08", lon: "-80.28", pixX: "72.50%", pixY: "92.25%", gametype: "US Cities"},
        {name: "Green Bay, WI", lat: "44.52", lon: "-87.99", pixX: "61.50%", pixY: "27.50%", gametype: "US Cities"},
        {name: "Centennial, CO", lat: "39.59", lon: "-104.87", pixX: "37.50%", pixY: "46.50%", gametype: "US Cities"},
        {name: "Buckeye, AZ", lat: "33.43", lon: "-112.64", pixX: "26.38%", pixY: "68.25%", gametype: "US Cities"},
        {name: "Boulder, CO", lat: "40.02", lon: "-105.25", pixX: "36.88%", pixY: "44.75%", gametype: "US Cities"},
        {name: "Goodyear, AZ", lat: "33.25", lon: "-112.37", pixX: "26.75%", pixY: "68.75%", gametype: "US Cities"},
        {name: "El Monte, CA", lat: "34.07", lon: "-118.03", pixX: "18.75%", pixY: "66.00%", gametype: "US Cities"},
        {name: "West Covina, CA", lat: "34.06", lon: "-117.91", pixX: "18.88%", pixY: "66.00%", gametype: "US Cities"},
        {name: "Brockton, MA", lat: "42.08", lon: "-71.02", pixX: "85.63%", pixY: "37.00%", gametype: "US Cities"},
        {name: "New Braunfels, TX", lat: "29.70", lon: "-98.12", pixX: "47.13%", pixY: "80.75%", gametype: "US Cities"},
        {name: "El Cajon, CA", lat: "32.80", lon: "-116.96", pixX: "20.25%", pixY: "70.50%", gametype: "US Cities"},
        {name: "Edinburg, TX", lat: "26.32", lon: "-98.16", pixX: "47.00%", pixY: "91.50%", gametype: "US Cities"},
        {name: "Renton, WA", lat: "47.48", lon: "-122.19", pixX: "12.88%", pixY: "15.50%", gametype: "US Cities"},
        {name: "Burbank, CA", lat: "34.19", lon: "-118.33", pixX: "18.38%", pixY: "65.75%", gametype: "US Cities"},
        {name: "Inglewood, CA", lat: "33.96", lon: "-118.34", pixX: "18.38%", pixY: "66.50%", gametype: "US Cities"},
        {name: "Rialto, CA", lat: "34.12", lon: "-117.39", pixX: "19.63%", pixY: "66.00%", gametype: "US Cities"},
        {name: "Lee's Summit, MO", lat: "38.92", lon: "-94.38", pixX: "52.38%", pixY: "49.00%", gametype: "US Cities"},
        {name: "Bend, OR", lat: "44.06", lon: "-121.31", pixX: "14.12%", pixY: "29.25%", gametype: "US Cities"},
        {name: "Woodbridge, NJ", lat: "40.56", lon: "-74.29", pixX: "81.00%", pixY: "42.75%", gametype: "US Cities"},
        {name: "South Bend, IN", lat: "41.68", lon: "-86.27", pixX: "63.88%", pixY: "38.50%", gametype: "US Cities"},
        {name: "Wichita Falls, TX", lat: "33.91", lon: "-98.53", pixX: "46.50%", pixY: "66.50%", gametype: "US Cities"},
        {name: "St. George, UT", lat: "37.08", lon: "-113.56", pixX: "25.12%", pixY: "55.50%", gametype: "US Cities"},
        {name: "Fishers, IN", lat: "39.96", lon: "-85.97", pixX: "64.38%", pixY: "45.00%", gametype: "US Cities"},
        {name: "Carmel, IN", lat: "39.97", lon: "-86.15", pixX: "64.13%", pixY: "45.00%", gametype: "US Cities"},
        {name: "Vacaville, CA", lat: "38.36", lon: "-121.97", pixX: "13.13%", pixY: "51.00%", gametype: "US Cities"},
        {name: "Quincy, MA", lat: "42.26", lon: "-71.01", pixX: "85.63%", pixY: "36.50%", gametype: "US Cities"},
        {name: "Conroe, TX", lat: "30.32", lon: "-95.49", pixX: "50.88%", pixY: "78.75%", gametype: "US Cities"},
        {name: "Chico, CA", lat: "39.76", lon: "-121.82", pixX: "13.38%", pixY: "45.75%", gametype: "US Cities"},
        {name: "San Mateo, CA", lat: "37.56", lon: "-122.31", pixX: "12.63%", pixY: "53.75%", gametype: "US Cities"},
        {name: "Lynn, MA", lat: "42.47", lon: "-70.96", pixX: "85.75%", pixY: "35.50%", gametype: "US Cities"},
        {name: "Albany, NY", lat: "42.67", lon: "-73.80", pixX: "81.63%", pixY: "34.75%", gametype: "US Cities"},
        {name: "Hesperia, CA", lat: "34.40", lon: "-117.32", pixX: "19.75%", pixY: "65.00%", gametype: "US Cities"},
        {name: "New Bedford, MA", lat: "41.66", lon: "-70.94", pixX: "85.75%", pixY: "38.75%", gametype: "US Cities"},
        {name: "Davenport, IA", lat: "41.56", lon: "-90.60", pixX: "57.75%", pixY: "39.00%", gametype: "US Cities"},
        {name: "Daly City, CA", lat: "37.69", lon: "-122.47", pixX: "12.50%", pixY: "53.25%", gametype: "US Cities"},

        {name: "Abraham Moss", lat: "53.51076419089969", lon: "-2.2359096315304097", pixX: "58.06%", pixY: "48.50%", gametype: "Manchester Metrolink"},
        {name: "Altrincham", lat: "53.38727988134867", lon: "-2.3477598623493154", pixX: "47.10%", pixY: "81.50%", gametype: "Manchester Metrolink"},
        {name: "Anchorage", lat: "53.47438218746536", lon: "-2.2859554163195743", pixX: "53.21%", pixY: "58.25%", gametype: "Manchester Metrolink"},
        {name: "Ashton Moss", lat: "53.4834769747597", lon: "-2.1220785675221325", pixX: "69.48%", pixY: "56.00%", gametype: "Manchester Metrolink"},
        {name: "Ashton-under-Lyne", lat: "53.4903293394926", lon: "-2.0980089298124853", pixX: "71.83%", pixY: "54.00%", gametype: "Manchester Metrolink"},
        {name: "Ashton West", lat: "53.49026233399121", lon: "-2.1096606849074075", pixX: "70.58%", pixY: "54.00%", gametype: "Manchester Metrolink"},
        {name: "Audenshaw", lat: "53.47827634698982", lon: "-2.1312508506971755", pixX: "68.54%", pixY: "57.25%", gametype: "Manchester Metrolink"},
        {name: "Baguley", lat: "53.39669649397134", lon: "-2.29251944515979", pixX: "52.58%", pixY: "79.00%", gametype: "Manchester Metrolink"},
        {name: "Barlow Moor Road", lat: "53.43277379222486", lon: "-2.269446530392422", pixX: "54.77%", pixY: "69.50%", gametype: "Manchester Metrolink"},
        {name: "Barton Dock Road", lat: "53.465739757496685", lon: "-2.3420568877542425", pixX: "47.57%", pixY: "60.50%", gametype: "Manchester Metrolink"},
        {name: "Benchill", lat: "53.38730908528439", lon: "-2.2562807739957353", pixX: "56.18%", pixY: "81.50%", gametype: "Manchester Metrolink"},
        {name: "Besses o' th' Barn", lat: "53.54184263031793", lon: "-2.2859696844831783", pixX: "53.21%", pixY: "40.25%", gametype: "Manchester Metrolink"},
        {name: "Bowker Vale", lat: "53.524913143919655", lon: "-2.249945362566439", pixX: "56.81%", pixY: "44.75%", gametype: "Manchester Metrolink"},
        {name: "Broadway", lat: "53.47473827755738", lon: "-2.2947973973302287", pixX: "52.27%", pixY: "58.25%", gametype: "Manchester Metrolink"},
        {name: "Brooklands", lat: "53.417094846146036", lon: "-2.326111548974207", pixX: "49.14%", pixY: "73.50%", gametype: "Manchester Metrolink"},
        {name: "Burton Road", lat: "53.42911402821671", lon: "-2.2405925057048193", pixX: "57.59%", pixY: "70.25%", gametype: "Manchester Metrolink"},
        {name: "Bury", lat: "53.59077118392832", lon: "-2.297224204197119", pixX: "52.11%", pixY: "27.25%", gametype: "Manchester Metrolink"},
        {name: "Cemetery Road", lat: "53.47989094286928", lon: "-2.1548966212791187", pixX: "66.20%", pixY: "56.75%", gametype: "Manchester Metrolink"},
        {name: "Central Park", lat: "53.50158376489478", lon: "-2.199252599876479", pixX: "61.82%", pixY: "51.00%", gametype: "Manchester Metrolink"},
        {name: "Chorlton", lat: "53.44280783635196", lon: "-2.2735626229920047", pixX: "54.46%", pixY: "66.75%", gametype: "Manchester Metrolink"},
        {name: "Clayton Hall", lat: "53.48282951073749", lon: "-2.182162889814979", pixX: "63.38%", pixY: "56.00%", gametype: "Manchester Metrolink"},
        {name: "Cornbrook", lat: "53.469983415979215", lon: "-2.2676411706427593", pixX: "54.93%", pixY: "59.50%", gametype: "Manchester Metrolink"},
        {name: "Crossacres", lat: "53.38332070323014", lon: "-2.256318148739995", pixX: "56.03%", pixY: "82.50%", gametype: "Manchester Metrolink"},
        {name: "Crumpsall", lat: "53.51730271293248", lon: "-2.2411382571537817", pixX: "57.59%", pixY: "47.00%", gametype: "Manchester Metrolink"},
        {name: "Dane Road", lat: "53.42998428091061", lon: "-2.311620971659586", pixX: "50.55%", pixY: "70.25%", gametype: "Manchester Metrolink"},
        {name: "Deansgate-Castlefield", lat: "53.47469011391269", lon: "-2.2504111672833136", pixX: "56.65%", pixY: "58.25%", gametype: "Manchester Metrolink"},
        {name: "Derker", lat: "53.54981147580321", lon: "-2.1016359321103435", pixX: "71.52%", pixY: "38.25%", gametype: "Manchester Metrolink"},
        {name: "Didsbury Village", lat: "53.4167317419471", lon: "-2.228597827210528", pixX: "58.84%", pixY: "73.75%", gametype: "Manchester Metrolink"},
        {name: "Droylsden", lat: "53.47949252998392", lon: "-2.144790965633684", pixX: "67.14%", pixY: "57.00%", gametype: "Manchester Metrolink"},
        {name: "East Didsbury", lat: "53.41210595738415", lon: "-2.217331913581288", pixX: "59.94%", pixY: "75.00%", gametype: "Manchester Metrolink"},
        {name: "Eccles", lat: "53.4830607319574", lon: "-2.3348144437545435", pixX: "48.36%", pixY: "56.00%", gametype: "Manchester Metrolink"},
        {name: "Edge Lane", lat: "53.480894819400326", lon: "-2.1652439402476973", pixX: "65.10%", pixY: "56.50%", gametype: "Manchester Metrolink"},
        {name: "Etihad Campus", lat: "53.48542740082557", lon: "-2.2017755272492576", pixX: "61.50%", pixY: "55.25%", gametype: "Manchester Metrolink"},
        {name: "Exchange Quay", lat: "53.46772848199821", lon: "-2.2824030060291567", pixX: "53.52%", pixY: "60.00%", gametype: "Manchester Metrolink"},
        {name: "Exchange Square", lat: "53.484414070410566", lon: "-2.24273348681127", pixX: "57.43%", pixY: "55.75%", gametype: "Manchester Metrolink"},
        {name: "Failsworth", lat: "53.51063339149269", lon: "-2.1628910939175685", pixX: "65.41%", pixY: "48.75%", gametype: "Manchester Metrolink"},
        {name: "Firswood", lat: "53.45118117292429", lon: "-2.2776701187840813", pixX: "53.99%", pixY: "64.50%", gametype: "Manchester Metrolink"},
        {name: "Freehold", lat: "53.53754956523114", lon: "-2.138424199550225", pixX: "67.76%", pixY: "41.50%", gametype: "Manchester Metrolink"},
        {name: "Harbour City", lat: "53.474064479819596", lon: "-2.291485696825293", pixX: "52.58%", pixY: "58.50%", gametype: "Manchester Metrolink"},
        {name: "Heaton Park", lat: "53.53050804441937", lon: "-2.2672635049553573", pixX: "55.09%", pixY: "43.25%", gametype: "Manchester Metrolink"},
        {name: "Hollinwood", lat: "53.51995912664655", lon: "-2.1473949773074152", pixX: "66.98%", pixY: "46.25%", gametype: "Manchester Metrolink"},
        {name: "Holt Town", lat: "53.48323282047104", lon: "-2.2122578410135385", pixX: "60.41%", pixY: "56.00%", gametype: "Manchester Metrolink"},
        {name: "Imperial War Museum", lat: "53.46861198035093", lon: "-2.296790775983045", pixX: "52.11%", pixY: "59.75%", gametype: "Manchester Metrolink"},
        {name: "Kingsway Business Park", lat: "53.61111303786389", lon: "-2.123701623071251", pixX: "69.33%", pixY: "21.75%", gametype: "Manchester Metrolink"},
        {name: "Ladywell", lat: "53.484051653721835", lon: "-2.3269834036327244", pixX: "49.14%", pixY: "55.75%", gametype: "Manchester Metrolink"},
        {name: "Langworthy", lat: "53.48071329336492", lon: "-2.2963232731088983", pixX: "52.11%", pixY: "56.50%", gametype: "Manchester Metrolink"},
        {name: "Manchester Airport", lat: "53.36537160481345", lon: "-2.272457783944666", pixX: "54.46%", pixY: "87.25%", gametype: "Manchester Metrolink"},
        {name: "Market Street", lat: "53.48192950702642", lon: "-2.2387748674678978", pixX: "57.90%", pixY: "56.25%", gametype: "Manchester Metrolink"},
        {name: "Martinscroft", lat: "53.391872839780845", lon: "-2.2798005463161553", pixX: "53.83%", pixY: "80.25%", gametype: "Manchester Metrolink"},
        {name: "MediaCityUK", lat: "53.47206850424154", lon: "-2.297333790657279", pixX: "51.96%", pixY: "59.00%", gametype: "Manchester Metrolink"},
        {name: "Milnrow", lat: "53.60817751609644", lon: "-2.1121793231990047", pixX: "70.42%", pixY: "22.75%", gametype: "Manchester Metrolink"},
        {name: "Monsall", lat: "53.50113303207379", lon: "-2.210715781056433", pixX: "60.56%", pixY: "51.25%", gametype: "Manchester Metrolink"},
        {name: "Moor Road", lat: "53.40344417980127", lon: "-2.29523596357385", pixX: "52.27%", pixY: "77.25%", gametype: "Manchester Metrolink"},
        {name: "Navigation Road", lat: "53.395877976376134", lon: "-2.343339518172027", pixX: "47.42%", pixY: "79.25%", gametype: "Manchester Metrolink"},
        {name: "New Islington", lat: "53.481099465088874", lon: "-2.2197302992936483", pixX: "59.78%", pixY: "56.50%", gametype: "Manchester Metrolink"},
        {name: "Newbold", lat: "53.613391792342654", lon: "-2.135509279887829", pixX: "68.08%", pixY: "21.25%", gametype: "Manchester Metrolink"},
        {name: "Newhey", lat: "53.60077627529588", lon: "-2.0945060991342253", pixX: "72.14%", pixY: "24.50%", gametype: "Manchester Metrolink"},
        {name: "Newton Heath and Moston", lat: "53.504220153682695", lon: "-2.183894451661451", pixX: "63.22%", pixY: "50.25%", gametype: "Manchester Metrolink"},
        {name: "Northern Moor", lat: "53.414535452185625", lon: "-2.2880899263076584", pixX: "52.90%", pixY: "74.25%", gametype: "Manchester Metrolink"},
        {name: "Old Trafford", lat: "53.456229569783396", lon: "-2.2847290430162963", pixX: "53.21%", pixY: "63.25%", gametype: "Manchester Metrolink"},
        {name: "Oldham Central", lat: "53.54031826856967", lon: "-2.1122318099685877", pixX: "70.42%", pixY: "40.75%", gametype: "Manchester Metrolink"},
        {name: "Oldham King Street", lat: "53.539531644960185", lon: "-2.1172388711427", pixX: "69.95%", pixY: "41.00%", gametype: "Manchester Metrolink"},
        {name: "Oldham Mumps", lat: "53.54247074978724", lon: "-2.1032392469133057", pixX: "71.36%", pixY: "40.25%", gametype: "Manchester Metrolink"},
        {name: "Parkway", lat: "53.46823335886211", lon: "-2.3240399353564194", pixX: "49.45%", pixY: "60.00%", gametype: "Manchester Metrolink"},
        {name: "Peel Hall", lat: "53.37408836609517", lon: "-2.251003291185519", pixX: "56.65%", pixY: "85.00%", gametype: "Manchester Metrolink"},
        {name: "Piccadilly", lat: "53.477138742500536", lon: "-2.230577043510132", pixX: "58.69%", pixY: "57.50%", gametype: "Manchester Metrolink"},
        {name: "Piccadilly Gardens", lat: "53.48036662317499", lon: "-2.2370980764434925", pixX: "58.06%", pixY: "56.75%", gametype: "Manchester Metrolink"},
        {name: "Pomona", lat: "53.465201898340254", lon: "-2.2780376353565903", pixX: "53.99%", pixY: "60.75%", gametype: "Manchester Metrolink"},
        {name: "Prestwich", lat: "53.53331340554512", lon: "-2.282019043078627", pixX: "53.52%", pixY: "42.50%", gametype: "Manchester Metrolink"},
        {name: "Queens Road", lat: "53.50166860267194", lon: "-2.2265890503503", pixX: "59.00%", pixY: "51.00%", gametype: "Manchester Metrolink"},
        {name: "Radcliffe", lat: "53.56250195694398", lon: "-2.320967019793899", pixX: "49.77%", pixY: "34.75%", gametype: "Manchester Metrolink"},
        {name: "Robinswood Road", lat: "53.37675512529106", lon: "-2.259850053158602", pixX: "55.71%", pixY: "84.25%", gametype: "Manchester Metrolink"},
        {name: "Rochdale Railway Station", lat: "53.611065902653614", lon: "-2.1544994970017703", pixX: "66.20%", pixY: "21.75%", gametype: "Manchester Metrolink"},
        {name: "Rochdale Town Centre", lat: "53.617305844057334", lon: "-2.1554158074862184", pixX: "66.04%", pixY: "20.25%", gametype: "Manchester Metrolink"},
        {name: "Roundthorn", lat: "53.3926009552247", lon: "-2.2891823172675725", pixX: "52.90%", pixY: "80.00%", gametype: "Manchester Metrolink"},
        {name: "Sale", lat: "53.42424865168755", lon: "-2.318963232681137", pixX: "49.92%", pixY: "71.75%", gametype: "Manchester Metrolink"},
        {name: "Sale Water Park", lat: "53.42818041026681", lon: "-2.290956830518045", pixX: "52.74%", pixY: "70.50%", gametype: "Manchester Metrolink"},
        {name: "Salford Quays", lat: "53.47037415969401", lon: "-2.2840758505854457", pixX: "53.36%", pixY: "59.50%", gametype: "Manchester Metrolink"},
        {name: "Shadowmoss", lat: "53.367822337654836", lon: "-2.2523801939129044", pixX: "56.49%", pixY: "86.75%", gametype: "Manchester Metrolink"},
        {name: "Shaw and Crompton", lat: "53.57618747365913", lon: "-2.089478224156269", pixX: "72.61%", pixY: "31.25%", gametype: "Manchester Metrolink"},
        {name: "Shudehill", lat: "53.48529644289496", lon: "-2.239207905967343", pixX: "57.75%", pixY: "55.50%", gametype: "Manchester Metrolink"},
        {name: "South Chadderton", lat: "53.526624089122826", lon: "-2.145132550091206", pixX: "67.14%", pixY: "44.50%", gametype: "Manchester Metrolink"},
        {name: "St Peter's Square", lat: "53.47831178958344", lon: "-2.2430903313806048", pixX: "57.43%", pixY: "57.25%", gametype: "Manchester Metrolink"},
        {name: "St Werburgh's Road", lat: "53.43880576045693", lon: "-2.2655943009905695", pixX: "55.24%", pixY: "67.75%", gametype: "Manchester Metrolink"},
        {name: "Stretford", lat: "53.44616585848627", lon: "-2.3037535285061383", pixX: "51.33%", pixY: "65.75%", gametype: "Manchester Metrolink"},
        {name: "The Trafford Centre", lat: "53.46575650792806", lon: "-2.3420192630509944", pixX: "47.57%", pixY: "60.50%", gametype: "Manchester Metrolink"},
        {name: "Timperley", lat: "53.404286670533224", lon: "-2.33830065042567", pixX: "48.04%", pixY: "77.00%", gametype: "Manchester Metrolink"},
        {name: "Trafford Bar", lat: "53.46165903093975", lon: "-2.2775408708758764", pixX: "53.99%", pixY: "61.75%", gametype: "Manchester Metrolink"},
        {name: "Velopark", lat: "53.48223913502989", lon: "-2.193041577701564", pixX: "62.44%", pixY: "56.25%", gametype: "Manchester Metrolink"},
        {name: "Victoria", lat: "53.48781531363937", lon: "-2.241690360082368", pixX: "57.59%", pixY: "54.75%", gametype: "Manchester Metrolink"},
        {name: "Village", lat: "53.46742348061914", lon: "-2.3090627556378087", pixX: "50.86%", pixY: "60.25%", gametype: "Manchester Metrolink"},
        {name: "Weaste", lat: "53.48239133793047", lon: "-2.3076062503621877", pixX: "51.02%", pixY: "56.25%", gametype: "Manchester Metrolink"},
        {name: "West Didsbury", lat: "53.42442905705163", lon: "-2.235946270137536", pixX: "58.06%", pixY: "71.50%", gametype: "Manchester Metrolink"},
        {name: "Westwood", lat: "53.54233609114404", lon: "-2.1255783780084854", pixX: "69.01%", pixY: "40.25%", gametype: "Manchester Metrolink"},
        {name: "Wharfside", lat: "53.46635726343364", lon: "-2.287931043963574", pixX: "52.90%", pixY: "60.50%", gametype: "Manchester Metrolink"},
        {name: "Whitefield", lat: "53.55111801595941", lon: "-2.2950928110543174", pixX: "52.27%", pixY: "37.75%", gametype: "Manchester Metrolink"},
        {name: "Withington", lat: "53.43270610092655", lon: "-2.2492589210568186", pixX: "56.81%", pixY: "69.50%", gametype: "Manchester Metrolink"},
        {name: "Wythenshawe Park", lat: "53.40770920726552", lon: "-2.2956861085032476", pixX: "52.27%", pixY: "76.00%", gametype: "Manchester Metrolink"},
        {name: "Wythenshawe Town Centre", lat: "53.38005176569033", lon: "-2.263722977651996", pixX: "55.40%", pixY: "83.50%", gametype: "Manchester Metrolink"}];





// }}}
// arrayend


// create the map pic
// the map and the markers are placed within the mapbox container
// which is adjusted in accordance with window size in create game funcs
function setMap(mbSrc, mbAlt) {
    mapPic = document.createElement('img');
    mapPic.src = `media/${mbSrc}.png`;
    mapPic.id = 'mapPic';
    mapPic.alt = `${mbAlt}`;
    mapBox.appendChild(mapPic);
    mapBox.style.display = 'inline-block';
}


// select game
// since map image needs to be fixed to markers, it's better to
// adjust height. maybe there's a more straight forward way. but
// for now this works.
function createGameUk() {
    selectedGame = "UK Cities";

    if (window.innerHeight < 599) {
        mapBox.style.height = '242px';
    } else if (window.innerHeight >= 600 && window.innerHeight < 799) {
        mapBox.style.height = '345px';
    } else if (window.innerHeight >= 800 && window.innerHeight < 1079) {
        mapBox.style.height = '400px';
    } else {
        mapBox.style.height = '562px';
    }
    setMap('uk_400', "A silhouette of the United Kingdom");

    answerList = answerListFull.filter(x => x.gametype == selectedGame);
    answersArray = answerList.map((a) => { // this is for the autocomplete
        return a.name;
    });
    difficultyModeSelect('medium');
    console.log(`New game started. ${selectedGame}, ${difficultyMode}`);
}

function createGameUs() {
    selectedGame = "US Cities";
    goHead = document.getElementById('gameHeader');   // because i left too much white space on top of usa.png
    goHead.style.marginBottom = '0px';              // and this is easier than lining up a modified verion

    if (window.innerWidth < 374) {
        mapBox.style.height = '151px';
    } else if (window.innerWidth >= 375 && window.innerWidth < 439) {
        mapBox.style.height = '174px';
    } else if (window.innerWidth >= 440 && window.innerWidth < 539) {
        mapBox.style.height = '215px';
    } else if (window.innerWidth >= 540 && window.innerWidth < 654) {
        mapBox.style.height = '263px';
    } else if (window.innerWidth >= 655 && window.innerWidth < 990) {
        mapBox.style.height = '324px';
    } else if (window.innerWidth >= 800 && window.innerHeight < 900) {
        mapBox.style.height = '324px';
    } else {
        mapBox.style.height = '491px';
    }
    setMap('usa_400', "A silhouette of the USA");


    answerList = answerListFull.filter(x => x.gametype == selectedGame);
    answersArray = answerList.map((a) => { // for autocomplete
        return a.name;
    });
    difficultyModeSelect('medium');
    console.log(`New game started. ${selectedGame}, ${difficultyMode}`);
}

function createGameMcr() {
    selectedGame = "Manchester Metrolink";

    if (window.innerWidth <= 380) {
        mapBox.style.height = '228px';
    } else if (window.innerWidth > 380 && window.innerWidth <= 460) {
        mapBox.style.height = '261px';
    } else if (window.innerWidth > 460 && window.innerWidth <= 545) {
        mapBox.style.height = '323px';
    } else if (window.innerWidth > 460 && window.innerWidth <= 545) {
        mapBox.style.height = '397px';
    } else if (window.innerWidth > 545 && window.innerHeight <= 900) {
        mapBox.style.height = '397px';
    } else if (window.innerWidth > 545 && window.innerWidth <= 765 && window.innerHeight > 900) {
        mapBox.style.height = '397px';
    } else {
        mapBox.style.height = '458px';
    }
    setMap('metro', "A silhouette of the Greater Manchester");


    answerList = answerListFull.filter(x => x.gametype == selectedGame);
    answersArray = answerList.map((a) => { // for autocomplete
        return a.name;
    });
    difficultyModeSelect('medium');
    console.log(`New game started. ${selectedGame}, ${difficultyMode}`);
}


// Function to add a marker to the map and the layer group
function addMarker(name, x, y, z) {
    const mapArrow = document.createElement('img');
    mapArrow.src = 'media/pointer_small.png';
    mapArrow.classList.add('mapArrows');
    mapArrow.style.position = 'absolute';
    mapArrow.style.left = `${x}`;
    mapArrow.style.top = `${y}`;
    mapArrow.style.transform = `rotate(${z}deg)`;

    getCompassDirection(z);
    mapArrow.alt = `An arrow placed over ${name}, pointing in the direction of ${compassDirection}`;
    mapBox.appendChild(mapArrow);
    console.log(`Placing arrow at ${x} x ${y}, ${z}deg`);
}


// clear the table and remove map markers
function clearTable() {
    // Loop through each row and remove it
    while (guessesTable.rows.length > 0) {
        guessesTable.deleteRow(0);
    }
    // loop through marker class and remove
    mapArrows = document.querySelectorAll('.mapArrows');
    for (const el of mapArrows) {
      el.parentNode.removeChild(el);
    }

    guessNo = 1;
    // pick an answer at random
    answer = answerList[(Math.floor(Math.random() * answerList.length))];
    // answer = getTheDeets('salford');  // leave this in and uncomment if i need to fix the game
    console.log(`New round started. Difficulty: ${difficultyMode} streak: ${streakNo} guess: ${guessNo} of ${maxGuesses}`);
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
    console.log(`Submitting suggestion entry ${suggestion.textContent}`);
    removeDropdown();
    processGuess();
}

// matches input to an object in the array
function getTheDeets(cityName) {
  const city = answerList.find(city => city.name.toLowerCase() === cityName.toLowerCase());
  if (city) {
    return { name: city.name, lat: city.lat, lon: city.lon, pixX: city.pixX, pixY: city.pixY };
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
    if (roundedDegree >= 337.6 || roundedDegree <= 22.5) {
        compassDirection = "North";
    } else if (roundedDegree >= 22.6 && roundedDegree <= 67.5) {
        compassDirection = "North East";
    } else if (roundedDegree >= 67.6 && roundedDegree <= 112.5) {
        compassDirection = "East";
    } else if (roundedDegree >= 112.6 && roundedDegree <= 157.5) {
        compassDirection = "South East";
    } else if (roundedDegree >= 157.6 && roundedDegree <= 202.5) {
        compassDirection = "South";
    } else if (roundedDegree >= 202.6 && roundedDegree <= 247.5) {
        compassDirection = "South West";
    } else if (roundedDegree >= 247.6 && roundedDegree <= 292.5) {
        compassDirection = "West";
    } else if (roundedDegree >= 292.6 && roundedDegree <= 337.5) {
        compassDirection = "North West";
    }
    return;
}

// convert units
function convertUnits(unit) {
    let rowCount = document.getElementById('guessesTable').rows.length;
    console.log(`got rowcount ${rowCount}`);
    for (let i = 0; i < rowCount; i++) {
        let cellId = "distanceCell" + i; // each row gives its distance cell a unique id
        console.log(`cellid is ${cellId}`);
        let cell = document.getElementById(cellId);
        if (cell) {

            let distance = parseFloat(cell.textContent);

            if (unit === "miles") {
                distance = distance * 0.621371;
                cell.textContent = `${distance.toFixed(1)} mi`;
            } else if (unit === "km") {
                distance = distance * 1.60934;
                cell.textContent = `${distance.toFixed(1)} km`;
            }
        }
    }
}

// endgame popup window
function popUp(result) {
    endGame.showModal();
    if (result === 'win') {
        endGameHeader.textContent = "Correct!";
        if (guessNo == 1) {
            endGamePara.textContent = `What are the odds? You got ${answer.name} on the first try! That brings your streak to ${streakNo}!`
            copyText = `I just got ${answer.name} on the first go in #GoMiasto - ${selectedGame}, ${difficultyMode} mode, with a win streak of ${streakNo}! \n\nhttps://rlychrisg.github.io/gomiasto/`
        } else {
            endGamePara.textContent = `That's correct, it's ${answer.name}! You got this round in ${guessNo} attempts, bringing your win streak to ${streakNo}!`
            copyText = `I just guessed ${answer.name} in ${guessNo} attempts on #GoMiasto - ${selectedGame}, ${difficultyMode} mode! That brings my win streak to ${streakNo}. \n\nhttps://rlychrisg.github.io/gomiasto/`;
        }
    } else {
        endGameHeader.textContent = "Game Over!";
        endGamePara.textContent = `Unlucky, the correct answer was ${answer.name}. Your win streak was ${streakNo}. \n\n Having difficulties? Try an easier game mode in the settings menu.`;

        copyText = `Curse you, ${answer.name}!! I just lost a streak of ${streakNo} in #GoMiasto - ${selectedGame}, ${difficultyMode} mode! \n\nhttps://rlychrisg.github.io/GoMiasto/`;
    }
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
        sleep(2000).then(() => { share.textContent = 'Share'; });

    }

    const share = document.getElementById('shareBtn');
    share.onclick = copyContent;

    const playAgain = document.getElementById('playAgain');
    playAgain.onclick = function() {
        endGame.close();
        clearTable();
    }

    // prevents users getting trapped if they hit escape
    // by starting a new round.
    endGame.addEventListener('cancel', (event) => {
        // event.preventDefault();
        clearTable();
    });
}


// difficulty modes
function difficultyModeSelect(mode) {
    if (mode === 'fun') {
        maxGuesses = 999;
        difficultyMode = 'Fun';
    } else if (mode === 'easy') {
        maxGuesses = 10;
        difficultyMode = 'Easy';
    } else if (mode === 'medium') {
        maxGuesses = 6;
        difficultyMode = 'Medium';
    } else if (mode === 'hard') {
        maxGuesses = 4;
        difficultyMode = 'Hard';
    }
    clearTable();
    streakNo = 0;
    settingsBox.close();
    console.log(`Difficulty mode changed to ${difficultyMode}. max guesses is now ${maxGuesses}, win streak is now ${streakNo}`);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// some variables..
let distance;
let maxGuesses = 6;
let streakNo = 0;

// make processing the guess a funtion that can be called by pressing enter or pressing the button
function processGuess($event) {
    event.preventDefault();
    removeDropdown();
    let guess = getTheDeets(cityInput.value);
    console.log(`Input: ${cityInput.value}`);

    if (guess) {
        cityInput.value = ''; // clear the field, this may cause issues if misplaced
        console.log(`${guess.name} lat: ${guess.lat} lon: ${guess.lon}`);

        // correct answer
        if (guess.name === answer.name) {
            streakNo++;
            jsConfetti.addConfetti({
                  confettiRadius: 3,
                  confettiNumber: 500,
            })
            console.log(`Correct guess. Streak increased to ${streakNo}`);
            popUp('win');
        // out of guesses
        } else if (guessNo === maxGuesses) {
            popUp('lose');
            streakNo = 0;
            console.log(`Incorrect guess. Streak is now ${streakNo}`);
        // information given on incorrect guess
        } else if (guess.name) {
            distance = getDistance(guess.lat, guess.lon, answer.lat, answer.lon);

            console.log(`Giving info for incorrect guess: ${guess.name}`);
            console.log(`Distance from answer: ${distance.miles} miles / ${distance.km} km`);
            console.log(`Direction to answer: ${distance.bearing}`);

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
            getCompassDirection(distance.bearing);
            arrow.alt = `An arrow pointing in the direction of ${compassDirection}`;

            // place the marker on the map
            addMarker(guess.name, guess.pixX, guess.pixY, distance.bearing);

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
            cell3.id = `distanceCell${guessNo - 1}`; // unique id must be given for converting
            cell4.innerHTML = ' ';
            cell4.appendChild(arrow);

            // update details
            guessNo++;
            row++;
            console.log(`Guess ${guessNo} of ${maxGuesses}`);
        }
    } else {
        console.log(`Invalid guess: ${cityInput.value}`);
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
    convertUnits('km');
});
document.getElementById('imperial').addEventListener('click', function() {
    unit = 'imperial';
    convertUnits('miles');
});
document.getElementById('difficultyFunBtn').addEventListener('click', function() {
    difficultyModeSelect('fun');
});
document.getElementById('difficultyEasyBtn').addEventListener('click', function() {
    difficultyModeSelect('easy');
});
document.getElementById('difficultyMediumBtn').addEventListener('click', function() {
    difficultyModeSelect('medium');
});
document.getElementById('difficultyHardBtn').addEventListener('click', function() {
    difficultyModeSelect('hard');
});
const closeSettings = document.getElementById('closeSettings');
closeSettings.addEventListener('click', () => {
    settingsBox.close();
});

// function to inform of invalid guess.
function invalidGuess() {
    // just show, because user should be able to click back on the input
    invalidGuessBox.show();

    sleep(2000).then(() => { invalidGuessBox.close(); });
    }





