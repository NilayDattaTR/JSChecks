// HTTP Requests

https://dev.to/full_stackgeek/callbacks-in-javascript-3kmi

const myPuzzle = puzzleAPIhit((error, puzzle) => {  
    if(error) {  
      console.log(`Error: ${error}`)  
    } else {  
      console.log(puzzle)  
    }  
  });  

  const puzzleAPIhit = (callback) => {  
    const request = new XMLHttpRequest()  
    request.addEventListener('readystatechange', (e) => {  
      if (e.target.readyState === 4 && e.target.status === 200) {  
        const data = JSON.parse(e.target.responseText)  
        callback(undefined, data.puzzle)  
      } else if (e.target.readyState === 4) {  
        callback('An error has taken place', undefined)  
      }  
    })  
    request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3')  
    request.send()  
  }  

// var url = "/design/images/Og-image-2018-08-31-06-17-20.jpg";
// function httpGetAsync(theUrl) {
//   var xmlHttp = new XMLHttpRequest();
//   xmlHttp.onreadystatechange = function() {
//     if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
//       if (xmlHttp.responseText == "Not found") {
//         console.log("File not found");
//         var data = {
//           value: xmlHttp.response,
//           status: xmlHttp.status
//         };
//         return data;
//       } else {
//         console.log("Final Result:");
//         console.log(typeof xmlHttp.response);
//         var data = {
//           value: xmlHttp.response,
//           status: xmlHttp.status
//         };
//         return data;
//       }
//     } else {
//       console.log("readyState is not 4 or 200 !");
//       var data = {
//         value: xmlHttp.response,
//         status: xmlHttp.status
//       };
//       return data;
//     }
//   };
//   xmlHttp.open("GET", theUrl, true); // true for asynchronous
//   xmlHttp.send(null);
// }
// var result = httpGetAsync(url);
// console.log(result);
// console.log(result.status);
// var img = new Image();
// img.src = result.data.value;
// // var file = new File([result], "og.jpg", {
// //   type: "image"
// // });
// var ogWidth = file.ogWidth;
// // var ogHeight = file.ogHeight;
// console.log(ogWidth);

// let request = obj => {
//   return new Promise((resolve, reject) => {
//     let xhr = new XMLHttpRequest();
//     xhr.open(obj.method || "GET", obj.url);
//     if (obj.headers) {
//       Object.keys(obj.headers).forEach(key => {
//         xhr.setRequestHeader(key, obj.headers[key]);
//       });
//     }
//     xhr.onload = () => {
//       if (xhr.status >= 200 && xhr.status < 300) {
//         resolve(xhr.response);
//       } else {
//         reject(xhr.statusText);
//       }
//     };
//     xhr.onerror = () => reject(xhr.statusText);
//     xhr.send(obj.body);
//   });
// };

// // Create the XHR object.
// function createCORSRequest(method, url) {
//   var xhr = new XMLHttpRequest();
//   if ("withCredentials" in xhr) {
//     // XHR for Chrome/Firefox/Opera/Safari.
//     xhr.open(method, url, true);
//   } else if (typeof XDomainRequest != "undefined") {
//     // XDomainRequest for IE.
//     xhr = new XDomainRequest();
//     xhr.open(method, url);
//   } else {
//     // CORS not supported.
//     xhr = null;
//   }
//   return xhr;
// }

// // Helper method to parse the title tag from the response.
// function getTitle(text) {
//   return text.match("<title>(.*)?</title>")[1];
// }

// // Make the actual CORS request.
// function makeCorsRequest() {
//   // This is a sample server that supports CORS.
//   var url =
//     "http://html5rocks-cors.s3-website-us-east-1.amazonaws.com/index.html";

//   var xhr = createCORSRequest("GET", url);
//   if (!xhr) {
//     console.log("CORS not supported");
//     return;
//   }

//   // Response handlers.
//   xhr.onload = function() {
//     var text = xhr.responseText;
//     var title = getTitle(text);
//     console.log("Response from CORS request to " + url + ": " + title);
//   };

//   xhr.onerror = function() {
//     console.log("Woops, there was an error making the request.");
//   };

//   xhr.send();
// }

// AJAX
// Defining HttpClient
// var HttpClient = function() {
//   this.get = function(aUrl, aCallback) {
//     var anHttpRequest = new XMLHttpRequest();

//     anHttpRequest.onreadystatechange = function() {
//       if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200) {
//         aCallback(anHttpRequest.responseText);
//       }
//     };

//     anHttpRequest.open("GET", aUrl, true);
//     anHttpRequest.send(null);
//   };
// };

// Using HttpClient
// var client = new HttpClient();
// client.get('http://some/thing?with=arguments', function(response) {
//     // do something with response
// });

// ES 6
// fetch(url).then(function(response) {
//   return response.json();
// }).then(function(data) {
//   console.log(data);
// }).catch(function() {
//   console.log("Booo");
// });

// ES 7
// async function fetchAsync (url) {
//   let response = await fetch(url);
//   let data = await response.json();
//   return data;
// }

// Dynamic image alternative
// var i = document.createElement("img");
// i.src = "/your/GET/url?params=here";

// var xmlHttp = null;

// function GetCustomerInfo()
// {
//     var CustomerNumber = document.getElementById( "TextBoxCustomerNumber" ).value;
//     var Url = "GetCustomerInfoAsJson.aspx?number=" + CustomerNumber;

//     xmlHttp = new XMLHttpRequest();
//     xmlHttp.onreadystatechange = ProcessRequest;
//     xmlHttp.open( "GET", Url, true );
//     xmlHttp.send( null );
// }

// function ProcessRequest()
// {
//     if ( xmlHttp.readyState == 4 && xmlHttp.status == 200 )
//     {
//         if ( xmlHttp.responseText == "Not found" )
//         {
//             document.getElementById( "TextBoxCustomerName"    ).value = "Not found";
//             document.getElementById( "TextBoxCustomerAddress" ).value = "";
//         }
//         else
//         {
//             var info = eval ( "(" + xmlHttp.responseText + ")" );

//             // No parsing necessary with JSON!
//             document.getElementById( "TextBoxCustomerName"    ).value = info.jsonData[ 0 ].cmname;
//             document.getElementById( "TextBoxCustomerAddress" ).value = info.jsonData[ 0 ].cmaddr1;
//         }
//     }
// }

// let request = new XMLHttpRequest();
// request.onreadystatechange = function () {
//     if (this.readyState === 4) {
//         if (this.status === 200) {
//             document.body.className = 'ok';
//             console.log(this.responseText);
//         } else if (this.response == null && this.status === 0) {
//             document.body.className = 'error offline';
//             console.log("The computer appears to be offline.");
//         } else {
//             document.body.className = 'error';
//         }
//     }
// };
// request.open("GET", url, true);
// request.send(null);