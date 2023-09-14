let type;
let totype;
let degrees;
let result;
document.getElementById('convert').onclick = function(){
    totype = document.querySelector('#totype').value;
    type =  document.querySelector('#type').value;
    degrees = document.querySelector('#degrees').value;
    degrees = Number(degrees);
    result = document.querySelector('#result');
    if(type === "fahrenheit" && totype === "celsius"){
        result.value = (degrees - 32) * 5/9 + "\xB0C";
    }
    else if(type === "celsius" && totype === "fahrenheit"){
        result.value = (degrees * 9/5) + 32 + "\xB0F"
    }
    else if(type === "fahrenheit" && totype === "kelvin"){
        result.value = (degrees - 32) * 5/9 + 273.15 + "\xB0K"
    }
    else if(type === "kelvin" && totype === "fahrenheit"){
        result.value = (degrees - 273.15) * 9/5 + 32 + "\xB0F"
    }
    else if(type === "celsius" && totype === "kelvin"){
        result.value = degrees + 273.15 + "\xB0K"
    }
    else if(type === "kelvin" && totype === "celsius"){
        result.value = degrees - 273.15 + "\xB0C"
    }
    else if(type === "kelvin" && totype === "kelvin"){
        result.value = degrees + "\xB0k";
    }
    else if(type === "fahrenheit" && totype === "fahrenheit"){
        result.value = degrees + "\xB0F";
    }
    else{
        result.value = degrees + "\xB0C";
    }
    
}
