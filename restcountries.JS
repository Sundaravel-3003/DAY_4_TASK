// use rest countries and print all country names,region,subregion and population

const xhr = new XMLHttpRequest();
xhr.open ("GET","https://restcountries.com/v3.1/all");
xhr.send();
xhr.responseType = "json";
xhr.onload=function displayResult(){
    const countries = xhr.response;
    console.log(countries);
    
    for(var key in countries)
    {
        console.log(key);
        console.log("country name : " + countries[key].name.common);
         console.log("region name : " + countries[key].region);
         console.log("subregion name : " + countries[key].subregion);
         console.log("population : " + countries[key].population);
    }
    

}
