

var myOptions = [
	{
	    type: "basic",
	    title: "Debendra Notification.",
	    message: "Message from Debendra.",
	    expandedMessage: "Have a Nice Day..",
	   // iconUrl: "img/myimg.png"
	}
	

];

// Window initialization code. Set up the various event handlers
window.addEventListener("load", function () {
    document.getElementById("basic").addEventListener("click", doNotify);
   
});

// Create the notification with the given parameters as they are set in the UI
function doNotify(evt) {
    var imgurl ="img/myimg.png"
    var options = null;
  
    
    options = myOptions[0];
    
  
    options.iconUrl = imgurl;

  //  chrome.notifications.create("id", options, creationCallback);
    chrome.notifications.create("id", options);
}

