let cities = [
    "New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas",
    "San Jose", "Austin", "Jacksonville", "San Francisco", "Indianapolis", "Columbus", "Fort Worth", "Charlotte", "Seattle",
    "Denver", "El Paso", "Detroit", "Washington", "Boston", "Memphis", "Nashville", "Portland", "Oklahoma City", "Las Vegas",
    "Baltimore", "Louisville", "Milwaukee", "Albuquerque", "Tucson", "Fresno", "Sacramento", "Mesa", "Kansas City", "Atlanta",
    "Long Beach", "Colorado Springs", "Raleigh", "Miami", "Oakland", "Minneapolis", "Tulsa", "Cleveland", "Wichita", "Arlington",
    "New Orleans", "Bakersfield", "Tampa", "Honolulu", "Aurora", "Anaheim", "Santa Ana", "St. Louis", "Riverside", "Corpus Christi",
    "Lexington", "Pittsburgh", "Anchorage", "Stockton", "Cincinnati", "St. Paul", "Toledo", "Greensboro", "Newark", "Plano",
    "Henderson", "Lincoln", "Buffalo", "Jersey City", "Chula Vista", "Fort Wayne", "Orlando", "St. Petersburg", "Chandler",
    "Laredo", "Norfolk", "Durham", "Madison", "Lubbock", "Irvine", "Winston-Salem", "Glendale", "Garland", "Hialeah", "Reno",
    "Chesapeake", "Gilbert", "Baton Rouge", "Irving", "Scottsdale", "North Las Vegas", "Fremont", "Boise", "Richmond",
    "San Bernardino", "Birmingham", "Spokane", "Rochester", "Des Moines", "Modesto", "Fayetteville", "Tacoma", "Oxnard",
    "Fontana", "Columbus", "Montgomery", "Moreno Valley", "Shreveport", "Aurora", "Yonkers", "Akron", "Huntington Beach",
    "Little Rock", "Augusta", "Amarillo", "Glendale", "Mobile", "Grand Rapids", "Salt Lake City", "Tallahassee", "Huntsville",
    "Worcester", "Knoxville", "Grand Prairie", "Newport News", "Brownsville", "Santa Clarita", "Overland Park", "Providence",
    "Jackson", "Garden Grove", "Oceanside", "Fort Lauderdale", "Rancho Cucamonga", "Chattanooga", "Tempe", "Cape Coral",
    "Sioux Falls", "Springfield", "Pembroke Pines", "Elk Grove", "Salem", "Lancaster", "Corona", "Eugene", "Palmdale",
    "Salinas", "Pasadena", "Joliet","Vadodara","Kochi", "Chennai", "Hyderabad", "Ahmedabad", "Kolkata", "Bangalore",
    "Mumbai", "Delhi", "Pune", "Jaipur", "Lucknow", "Chandigarh", "Patna", "Bhopal", "Indore", "Agra",
    "Varanasi", "Kanpur", "Nagpur", "Coimbatore", "Surat", "Visakhapatnam", "Thiruvananthapuram", "Guwahati",
    "Bhubaneswar", "Amritsar", "Kota", "Ajmer", "Aligarh", "Srinagar", "Nashik", "Vadodara", "Ludhiana",
    "Faridabad", "Madurai", "Mangalore", "Raipur", "Aurangabad", "Jamshedpur", "Vijayawada", "Ranchi",
    "Cuttack", "Dehradun", "Udaipur", "Jhansi", "Gwalior", "Mathura", "Rourkela", "Siliguri", "Dhanbad",
    "Tiruchirappalli", "Allahabad", "Gorakhpur", "Jalandhar", "Warangal", "Shillong", "Itanagar", "Gangtok",
    "Kohima", "Imphal", "Agartala", "Aizawl", "Kavaratti"
];

const apiid = "abe6bbbe9f6ba379ee6cebfd595341b6";
const api = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";



searchip = document.querySelector(".search input");
searchbtn = document.querySelector(".search button");
const weatheri= document.querySelector(".weather-icon");
const main = document.getElementById("city");



for(let cood in cities){
    const option = document.createElement("option");
    option.value = cities[cood];
    option.text = cities[cood];
    main.appendChild(option);
}

async function weathercheck(city){
    const response = await fetch(api +city +`&appid=${apiid}`); 

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
    }else{
    var data = await response.json();
    console.log(data.weather[0].main);

    if(data.weather[0].main =="Clouds" || data.weather[0].main =="Haze"){
        weatheri.src = "cloudy.png";
    } else if(data.weather[0].main =="Clear"){
        weatheri.src = "clear.png";
    } else if(data.weather[0].main =="Rain"){
        weatheri.src = "rain.png";
    }else if(data.weather[0].main =="Drizzle"){
        weatheri.src = "drizzle.png";
    }else if(data.weather[0].main =="Snow"){
        weatheri.src = "snow.png";
    }else if(data.weather[0].main =="Mist"){
        weatheri.src = "drizzle.png";
    }


    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c" ;
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humid").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML =  Math.round(data.wind.speed) + " Km/ h";


    document.querySelector(".weather").style.display ="block";
    document.querySelector(".error").style.display = "none";
    }}
 searchbtn.addEventListener("click", ()=>{
    weathercheck(searchip.value);
 })


