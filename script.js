//6) We made a button variable inside this we done a dom on button id
const button = document.getElementById("search-button");
//7) We made a input variable inside this we done a dom on input id
const input = document.getElementById("city-input");


// 14)
  const Cityname = document.getElementById("city-name");
  const Citytime = document.getElementById("city-time");
  const Citytemp = document.getElementById("city-temp");



//10). Now Here we will fetch our api key with the help of Fetch async function

// 11) As we have to insert that London in there dynamically so for that we have to use String Interpolation
//  and we are making this as a Async for await in last we are returning as the promise
async function getData(cityName){
   const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key= dcdaff5d1c994aa7933134929243105 &q=${cityName}&aqi=yes`
);
   return await promise.json();
};


//8). Adding Event listener on button by using callback fnc
button.addEventListener('click', async () =>{
    
    // 12)
    const value = input.value;
    const result = await getData(value);
    
    // 15).
    Cityname.innerText = `${result.location.name}, ${result.location.region}, ${result.location.country}`
    Citytime.innerText = result.location.localtime;
    Citytemp.innerText = result.current.temp_c;
})


// 9). We have copied API KEY AND GONE TO API EXPLORER AND COPIED THAT KEY AND THEN SET THE VALUE YES.

//http://api.weatherapi.com/v1/current.json?key= dcdaff5d1c994aa7933134929243105 &q=London&aqi=yes