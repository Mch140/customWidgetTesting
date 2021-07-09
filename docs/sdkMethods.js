console.log(">>>>>>>>>> inside sdkMethod.js");

var notificationHandler1 = function(data) {
    // Do something with the notifications
    console.log(">>>>>>>>>> 1111");
    console.log(">>>>>>>>>> @1111", data)
    console.log(">>>>>>>>>> JSON@1111", JSON.stringify(data));
    document.getElementById("data1").innerHTML = JSON.stringify(data);
};
var notificationHandler2 = function(data) {
    // Do something with the notifications
    console.log(">>>>>>>>>> 2222");
    console.log(">>>>>>>>>> @2222", data)
    console.log(">>>>>>>>>> JSON@2222", JSON.stringify(data));
    document.getElementById("data2").innerHTML = JSON.stringify(data);
};


lpTag.agentSDK.init({notificationCallback: notificationHandler1});
console.log(">>>>>>>>>> after INIT");
lpTag.agentSDK.onNotify(notificationHandler2);
