//discuss Global Object in js windows and Other

/// work in client side  not server side  window
// const hostory= history.pushState(state object, title, url)
//replaceState(data,title,url)
function Back(){
    window.history.go(-2)
    // client side to go back
}

//Navigation Object get Browser data 
function getBrowser(){
    json = "[{",
      /* The array containing the browser info */
      info = [
      navigator.userAgent, // Get the User-agent
      navigator.cookieEnabled, // Checks whether cookies are enabled in browser
      navigator.appName, // Get the Name of Browser
      navigator.language, // Get the Language of Browser
      navigator.appVersion, // Get the Version of Browser
      navigator.platform // Get the platform for which browser is compiled
      ],
      /* The array containing the browser info names */
      infoNames = [
      "userAgent",
      "cookiesEnabled",
      "browserName",
      "browserLang",
      "browserVersion",
      "browserPlatform"
      ];
      /* Creating the JSON object */
      for (var i = 0; i < info.length; i++) {
      if (i === info.length - 1) {
      json += '"' + infoNames[i] + '": "' + info[i] + '"';
      }
      else {
      json += '"' + infoNames[i] + '": "' + info[i] + '",';
      }
      };
      return json + "}]";
    }

    /*
    window.alert() Description
Creates dialog box with message and an OK button
   window.blur()   Remove focus from window
   window.close()     Closes a browser window
   window.confirm()   Creates dialog box with message, an OK button and a cancel button
   window.getComputedStyle()     Get CSS styles applied to an element
   window.moveTo(x,y)   Move a window's left and top edge to supplied coordinates
   window.open()    Opens new browser window with URL specified as parameter
   window.print()   Tells browser that user wants to print contents of current page
   window.prompt()  Creates dialog box for retrieving user input
   window.scrollBy()     Scrolls the document by the specified number of pixels
   window.scrollTo()    Scrolls the document to the specified coordinates
   window.setInterval()     Do something repeatedly at specified intervals
   window.setTimeout()  Do something after a specified amount of time
   window.stop()    stop window from loading
    
    */


   // event loop in web browser
   function react(){
    console.log("this a script entry point");
    document.body.onclick = () => {
    console.log("onclick");
    };
    setTimeout(() => {
    console.log("setTimeout callback log 1");
    console.log("setTimeout callback log 2");
    }, 100);
   }

   //STRICK mode
//    "use strict";
// strict mode now applies for the rest of the script
// it can alsobe defined in functions
function strik(){
    "use strike";
    const inner=function(){
        return console.log(`Strike Mode is applied in this function` )
    }
    function notstrik(){
        //not applied in this function
    }
}
// it helps us to not delete the undeleted properties