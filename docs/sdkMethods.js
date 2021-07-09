console.log(">>>>>>>>>> inside sdkMethod.js");

var notificationHandler = function(data) {
    // Do something with the notifications
    console.log(">>>>>>>>>> 1111");
    console.log(">>>>>>>>>> @1111", data)
    console.log(">>>>>>>>>> JSON@1111", JSON.stringify(data));
    document.getElementById("data1").innerHTML = JSON.stringify(data);
};
    
var notificationHandlerOnNotify = function(data) {
    // Do something with the notifications
    console.log(">>>>>>>>>> 2222");
    console.log(">>>>>>>>>> @2222", data)
    console.log(">>>>>>>>>> JSON@2222", JSON.stringify(data));
    document.getElementById("data2").innerHTML = JSON.stringify(data);
};


var updateCallback = function(data){
    console.log(">>>>>>>>>> data in updateCallback: ")
    console.log(JSON.stringify(data));
    var path = data.key;
    console.log(">>>>>>>>>> data.key in updateCallback: "+ path);
    var value = data.newValue;
    console.log(">>>>>>>>>> data.newValue in updateCallback: "+ value);
    var line = value[value.length -1];
    console.log(">>>>>>>>>> newValue[-1] in updateCallback: "+ line);
    var movieName = line.text;
    console.log("moviename : "+movieName);
    if (line.source.toLowerCase()==="visitor"){
        var url = "https://www.omdbapi.com?t="+movieName+"&apikey=fb7c45ff";
        fetch(url)
                .then(function(response){
                    
                    return response.json();
                }
                ).then(function(res){
                    document.getElementById("Title").innerHTML = res.Title;
                    document.getElementById("Year").innerHTML = res.Year;
                    document.getElementById("Rated").innerHTML = res.Rated;
                    document.getElementById("Actors").innerHTML = res.Actors;
                    document.getElementById("Genre").innerHTML = res.Genre;
                    document.getElementById("Plot").innerHTML = res.Plot;
                    document.getElementById("Released").innerHTML = res.Released;
                    document.getElementById("Runtime").innerHTML = res.Runtime;
                    document.getElementById("Director").innerHTML = res.Director;
                    document.getElementById("Awards").innerHTML = res.Awards;
                    document.getElementById("imdbRating").innerHTML = res.imdbRating;

 

                }).catch(function(error){
                    console.log("I am inside catch");
                    console.log("Error Message : "+error);
                })
    }
};

var notifyWhenDone = function(error) {
    if (err){
        console.log("I am inside notifyWhenDone function : "+err);
    }
    var pathToData = "chatTranscript.lines";
    errorMessage.innerHTML = "Unable to find the movie";
};
lpTag.agentSDK.init({notificationCallback: notificationHandler});
console.log(">>>>>>>>>> after INIT");
lpTag.agentSDK.onNotify(notificationHandlerOnNotify);
console.log(">>>>>>>>>> after OnNotify");
lpTag.agentSDK.bind(pathToData, updateCallback, notifyWhenDone);



