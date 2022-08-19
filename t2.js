var request = new XMLHttpRequest();
 request.open('get','https://restcountries.com/v3.1/all',true);
 request.send();
 request.onload=function(){
     var data=JSON.parse(request.response);

    console.log(data);

     var result =data.filter((ele)=>ele.population<=200000);
    console.log(result);
}
