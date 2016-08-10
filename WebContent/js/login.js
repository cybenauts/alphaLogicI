var s=0;
window.onload=function(){
	//startApp();
}
var callerId;
//function gSign(caller) {
//localStorage.setItem("call", "php");
   
function ch(){
	startApp();
}
 function startApp() { 
    gapi.load('auth2', function(){
      console.log("Primary GAuth2");
      auth2 = gapi.auth2.init({
        client_id: '329202657822-391gk8gd7qoq7mei7lo57l1juc36cc37.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
      attachSignin(document.getElementById('gpsignup'));
      attachSignin(document.getElementById('gplogin'));
    });
  }


 function attachSignin(element) {
	    console.log(element.id);
	    auth2.attachClickHandler(element, {},
	        function(googleUser) {
	         // callerId =element;
	              var profile=googleUser.getBasicProfile();
	              console.log(profile.getName());
	               sendDataGp(profile);
	        }, function(error) {
	          alert(JSON.stringify(error, undefined, 2));
	        });

	  }

/*<----------------------------------------------facebook---------------------------------------------------------------------->*/


function statusChangeCallback(response) {

    
      fb_login();
       if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      /*document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';*/
        console.log('NA');
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      /*document.getElementById('status').innerHTML = 'Please log ' +
        'into Facebook.';*/
        console.log('X');
    }
  }



  window.fbAsyncInit = function() {
  FB.init({
    appId      : '1115798441815419',
    cookie     : true,  // enable cookies to allow the server to access 
     oauth     : true,
     status    :true,                   // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.5' // use graph api version 2.5
  });

   };

 function checkLoginState_C(caller) {
    callerId = caller;
     FB.getLoginStatus(function(response) {
      fb_login();
    });
  }


function fb_login () {
   
    FB.login(function(response) {
     if (response.authResponse) {
        // Logged into your app and Facebook.
        console.log('Welcome!  Fetching your information.... ');
            //console.log(response); // dump complete info
            access_token = response.authResponse.accessToken; //get access token
            user_id = response.authResponse.userID; //get FB UID

            FB.api('/me/?fields=name,picture{url},email', function(response) {
                user_email = response.email; //get user email
          // you can store this data into your database 
                console.log(response.email);
                console.log(response.name);
                console.log(response.picture.data);
            sendDataFb(response);            
            });
      } else if (response.status === 'not_authorized') {
        // The person is logged into Facebook, but not your app.
        console.log('Not Authorized');
      } else {
        // The person is not logged into Facebook, so we're not sure if
        // they are logged into this app or not.
        console.log('User cancelled login or did not fully authorize.');
      }
   }, {scope: 'public_profile,email'});
  
  }

  // Load the SDK asynchronously
  (function() {
     var e = document.createElement('script');
    e.src = document.location.protocol + '//connect.facebook.net/en_US/all.js';
    e.async = true;   
    document.getElementById('facesignup').appendChild(e);
    document.getElementById('facelogin').appendChild(e);
  }());

  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  
/*-------------------sending data---------------*/
function sendDataFb(rs) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      var res = xhttp.responseText.trim();
      alert("IN FB"+res);
      document.getElementById("notify").innerHTML = 'Authorized:::'+xhttp.responseText.trim();
     
    }
  };
  
  xhttp.open("POST", "socialsignup", true);

var emailvalue=rs.email;
var namevalue=rs.name;
//var imagevalue=rs.picture.data.url;
//var srcvalue=1;
/*if(callerId.id=='facelogin'){
var slosvalue=1;
}*/
var parameters="email="+emailvalue+"&name="+namevalue;
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(parameters);
}

function sendDataGp(rs) {
  alert('in gpdata:'+rs+":::"+callerId.id);
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
    	
     var res = xhttp.responseText.trim();
     alert("IN GP"+res);
     /*window.location.href=res;*/
     document.getElementById("notify").innerHTML = 'Authorized:::'+xhttp.responseText.trim();
    }
  };
  
  xhttp.open("POST", "socialsignup", true);

var emailvalue=rs.getEmail();
var namevalue=rs.getName();
/*var imagevalue=rs.getImageUrl();
var srcvalue=1;
if(callerId.id=='googlelogin'){
var slosvalue=1;
}*/
var parameters="email="+emailvalue+"&name="+namevalue;
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(parameters);
}


var checkemail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var checkpass = /^.{4,8}$/;

/*from dashboard add new client module*/

function sendLoginData() {
//console.log("in send Data");
    var email = document.getElementById("lCustomerEmail").value;
    var pass = document.getElementById("lCustomerPassword").value;
    //var gIdvalue = document.getElementById("gId").value;

    if (email.match(checkemail)) {
        if (pass.match(checkpass)) {

            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                //alert(xhttp.responseText);
                if (xhttp.readyState == 4 && xhttp.status == 200) {
                    //Trim really necessary .................................................[IMPORTANT]
                    //alert(xhttp.responseText.trim());
                    if (xhttp.responseText.trim() != -1) {
                        document.getElementById("notify").innerHTML = 'Authorized:::'+xhttp.responseText.trim();
                        /*setTimeout(function() {
                            document.getElementById("notify").innerHTML = 'Add Client';
                        }, 3000);*/
                       /* document.getElementById("clientEmail").value = "";
                        document.getElementById("clientName1").value = "";
                        document.getElementById("clientType").value = "";*/
                        //alist();
                    } else {
                        document.getElementById("notify").innerHTML = 'Invalid Credentials:::'+xhttp.responseText.trim();
                        setTimeout(function() {
                            document.getElementById("notify").innerHTML = 'Status';
                        }, 3000);
                    }
                }
            };

            xhttp.open("POST", "login", true);
            var parameters = "lCustomerEmail=" + email + "&lCustomerPassword=" + pass;
            //alert(parameters);
            xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhttp.send(parameters);
        } else {
            document.getElementById("passStatus").innerHTML = 'Invalid Password';
            document.getElementById("passStatus").style.color="red";
            document.getElementById("passStatus").focus();
            setTimeout(function() {
                document.getElementById("passStatus").innerHTML = 'Password';
                document.getElementById("passStatus").style.color="gray";
            }, 3000);
        }
    } else {
        document.getElementById("emailStatus").innerHTML = 'Invalid Email';
        document.getElementById("emailStatus").style.color="red";
        document.getElementById("emailStatus").focus();
        setTimeout(function() {
            document.getElementById("emailStatus").innerHTML = 'Username';
            document.getElementById("emailStatus").style.color="gray";
        }, 3000);
    }
}

function sendSignupData(){
	var email = document.getElementById("sCustomerEmail").value;
    var pass = document.getElementById("sCustomerRePassword").value;
    //var gIdvalue = document.getElementById("gId").value;

    if (email.match(checkemail)) {
        if (pass.match(checkpass)) {

            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                //alert(xhttp.responseText);
                if (xhttp.readyState == 4 && xhttp.status == 200) {
                    
                    //alert(xhttp.responseText.trim());
                    if (xhttp.responseText.trim() != -1) {
                        document.getElementById("notify").innerHTML = 'Inserted:::'+xhttp.responseText.trim();
                        /*setTimeout(function() {
                            document.getElementById("notify").innerHTML = 'Add Client';
                        }, 3000);*/
                       /* document.getElementById("clientEmail").value = "";
                        document.getElementById("clientName1").value = "";
                        document.getElementById("clientType").value = "";*/
                        //alist();
                    } else {
                        document.getElementById("notify").innerHTML = 'Not Inserted:::'+xhttp.responseText.trim();
                        setTimeout(function() {
                            document.getElementById("notify").innerHTML = 'Status';
                        }, 3000);
                    }
                }
            };

            xhttp.open("POST", "signup", true);
            var parameters = "sCustomerEmail=" + email + "&sCustomerRePassword=" + pass;
            //alert(parameters);
            xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhttp.send(parameters);
        } else {
            document.getElementById("sPassStatus").innerHTML = 'Invalid Password';
            document.getElementById("sPassStatus").style.color="red";
            document.getElementById("sPassStatus").focus();
            setTimeout(function() {
                document.getElementById("sPassStatus").innerHTML = 'Password';
                document.getElementById("sPassStatus").style.color="gray";
            }, 3000);
        }
    } else {
        document.getElementById("sEmailStatus").innerHTML = 'Invalid Email';
        document.getElementById("sEmailStatus").style.color="red";
        document.getElementById("sEmailStatus").focus();
        setTimeout(function() {
            document.getElementById("sEmailStatus").innerHTML = 'Username';
            document.getElementById("sEmailStatus").style.color="gray";
        }, 3000);
    }
}

function test() {
	 var email = document.getElementById("customerEmail").value;
	    var pass = document.getElementById("customerPassword").value;
	alert("Hie::"+email+":::"+pass);
	document.getElementById("notify").innerHTML = 'Client Already Present';
	
}


