// print all the flags of restcountries-

const xhr = new XMLHttpRequest();
xhr.open ("GET","https://restcountries.com/v3.1/all");
xhr.send();
xhr.responseType = "json";
xhr.onload=function displayResult(){
    const countries = xhr.response;
    console.log(countries);

    for(let key in countries){

        console.log(key);
        console.log(countries[key].flags);
    }


}