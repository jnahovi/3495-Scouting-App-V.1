var canCargo = new Boolean (false);
var firstlvl = new Boolean (false);
var secondlvl = new Boolean (false);
var thirdlvl = new Boolean (false);
var statPick = new Boolean (false);
var statFloor = new Boolean (false);
var canHatch = new Boolean (false);
var firstlvlhat = new Boolean (false);
var secondlvlhat = new Boolean (false);
var thirdlvlhat = new Boolean (false);
var statPickHat = new Boolean (false);
var statFloorHat = new Boolean (false);

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      document.getElementById("firstfields").style.display = "none";
      document.getElementById("continue").style.display = "none";
      document.getElementById("secondfields").style.display = "block";
      document.getElementById("hatch-log").style.display = "none";
      document.getElementById("cargo-log").style.display = "none";
      document.getElementById("submitTheShit").style.display = "none";
      document.getElementById("thankYou").style.display = "none";
      
      var user = firebase.auth().currentUser.email;
      var userInfo = firebase.UserInfo
      console.log(userInfo)
      
      var name, email;
      if (user = !null) {
        console.log(user)
        var email = user.email;
        window.alert ("Welcome : " + firebase.auth().currentUser.email);
      }
      
    
    } else {
      
      document.getElementById("firstfields").style.display = "block";
      document.getElementById("secondfields").style.display = "none";
      document.getElementById("continue").style.display = "none";
      document.getElementById("hatch-log").style.display = "none";
      document.getElementById("cargo-log").style.display = "none";
      document.getElementById("submitTheShit").style.display = "none";
      document.getElementById("thankYou").style.display = "none";
      
   
    }
  });

  function login() {
      var userEmail = document.getElementById("email_field").value;
      var userPass = document.getElementById("password_field").value;
      document.getElementById("continue").style.display = "none";
      window.alert("You are now logged in");
      firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        window.alert("Error: " + errorMessage);
      });
      console.log("login user = " + firebase.auth().currentUser);
      
  }

  function logout() {
    firebase.auth().signOut()
  }




function benShapiroCOLLECTSDataWITHFactsANDLogic(team, match) {
    var teamNumber = document.getElementById('teamNumber').value;
    var matchNumber = document.getElementById('matchNumber').value;
    document.getElementById("continue").style.display = "block";
    
    firebase.database().ref("Team: " + teamNumber + " :: Match: " + matchNumber).set( {
      
      team : teamNumber,
      match : matchNumber,
   });
    console.log(teamNumber);
    console.log(matchNumber);
    window.alert("Background Data Submitted");

  }



  function continueToMain () {
      document.getElementById("firstfields").style.display = "none";
      document.getElementById("continue").style.display = "none";
      document.getElementById("secondfields").style.display = "none";
      document.getElementById("hatch-log").style.display = "block";
      document.getElementById("cargo-log").style.display = "block";
      document.getElementById("submitTheShit").style.display = "block"
      document.getElementById("signout").style.display = "none";
      document.getElementById("thankYou").style.display = "none";


  }

    function submitAllTheNumbers(team, match, hatch_skills, cargo_skills, first_level, second_level, third_level, off_floor, from_station) {
    var cargoPoints = document.getElementById('totalCargo').value;
    var hatchPoints = document.getElementById('totalHatch').value;
    var teamNumber = document.getElementById('teamNumber').value;
    var matchNumber = document.getElementById('matchNumber').value;
    var averageHatchTime = 120 / document.getElementById('totalHatch').value;
    var averageCargoTime = 120/ document.getElementById('totalCargo').value;
    
    if (document.getElementById('totalHatch').value == 0) {
      averageHatchTime = 0 // error message, means that the average couldn't be counted
    }else {
      averageHatchTime = 120 / document.getElementById('totalHatch').value;
    }
   
    if (document.getElementById('totalCargo').value == 0) {
      averageCargoTime = 0
    }else {
      averageCargoTime = 120 / document.getElementById('totalCargo').value;
    }
   
    document.getElementById("signout").style.display = "block";

    window.alert("Data Successfully Submitted");
    
    firebase.database().ref("Team: " + teamNumber + " :: Match: " + matchNumber).set( {
      team : teamNumber,
      match : matchNumber,
      hatch_skills : hatchPoints,
      cargo_skills : cargoPoints,
      First_Level_Rocket_Cargo : window.firstlvl,
      First_Level_Rocket_Hatch : window.firstlvlhat,
      Second_Level_Rocket_Cargo : window.secondlvl,
      Second_Level_Rocket_Hatch : window.secondlvlhat,
      Third_Level_Rocket_Cargo : window.thirdlvl,
      Third_Level_Rocket_Hatch : window.thirdlvlhat,
      Can_Grab_Hatch_Off_Floor : window.statFloorHat,
      Can_Grab_Cargo_Off_Floor: window.statFloor,
      Average_Hatch_Time: averageHatchTime,
      Average_Cargo_Time: averageCargoTime,
      User: firebase.auth().currentUser.email,
  });
}

  function addBotSkills() {
    
    var cargoCheck = document.getElementById("canPlaceCargo");
    var cargoFirstLevel = document.getElementById("cargoFirstLvl");
    var cargoSecondLevel = document.getElementById("cargoSecondLvl")
    var cargoThirdLevel = document.getElementById("cargoThirdLvl");
    var cargoStationPickup = document.getElementById("cargoStatPickup");
    var cargoFloorPickup = document.getElementById("cargoGroundPickup");
    var hatchCheck = document.getElementById("canPlaceHatch");
    var hatchFirstLevel = document.getElementById("hatchFirstLvl");
    var hatchSecondLevel = document.getElementById("hatchSecondLvl")
    var hatchThirdLevel = document.getElementById("hatchThirdLvl");
    var hatchFloorPickup = document.getElementById("cargoGroundPickup");
    var hatchStatPickup = document.getElementById("cargoStatPickup") ;
    document.getElementById("signout").style.display = "none";


    if(cargoCheck.checked == true) {
      window.canCargo = true;
    }else if (cargoCheck.checked == false) {
      window.canCargo = false;
    }
    if(cargoFirstLevel.checked == true) {
      window.firstlvl = true;
    }else if (cargoFirstLevel.checked == false) {
      window.firstlvl = false;
    }
    if(cargoSecondLevel.checked == true) {
      window.secondlvl = true;
    }else if (cargoSecondLevel.checked == false) {
      window.secondlvl = false;
    }
    if(cargoThirdLevel.checked == true) {
      window.thirdlvl = true;
    }else if (cargoThirdLevel.checked == false) {
      window.thirdlvl = false;
    }
    if(cargoFloorPickup.checked == true) {
      window.statPick = true;
    }else if (cargoFloorPickup.checked == false) {
      window.statPick = false;
    }
    if (cargoStationPickup.checked == true) {
      window.statFloor = true;
    }else if (cargoStationPickup.checked == false) {
      window.statFloor = false;
    }

    if(hatchCheck.checked == true) {
      window.canHatch = true;
    }else if (hatchCheck.checked == false) {
      window.canHatch = false;
    }
    if(hatchFirstLevel.checked == true) {
      window.firstlvlhat = true;
    }else if (hatchFirstLevel.checked == false) {
      window.firstlvlhat = false;
    }
    if(hatchSecondLevel.checked == true) {
      window.secondlvlhat = true;
    }else if (hatchSecondLevel.checked == false) {
      window.secondlvlhat = false;
    }
    if(hatchThirdLevel.checked == true) {
      window.thirdlvlhat = true;
    }else if (hatchThirdLevel.checked == false) {
      window.thirdlvlhat = false;
    }
    if(hatchStatPickup.checked == true) {
      window.statPickHat = true;
    }else if (hatchStatPickup.checked == false) {
      window.statPickHat = false;
    }
    if (hatchFloorPickup.checked == true) {
      window.statFloorHat = true;
    }else if (hatchFirstLevel.checked == false) {
      window.statFloorHat = false;
    }

  }


  function continueToSignOut() {
      
      document.getElementById("firstfields").style.display = "none";
      document.getElementById("continue").style.display = "none";
      document.getElementById("secondfields").style.display = "none";
      document.getElementById("hatch-log").style.display = "none";
      document.getElementById("cargo-log").style.display = "none";
      document.getElementById("submitTheShit").style.display = "none";
      document.getElementById("thankYou").style.display = "block";


  }


  function backFromSignOut() {
      document.getElementById("firstfields").style.display = "none";
      document.getElementById("continue").style.display = "none";
      document.getElementById("secondfields").style.display = "block";
      document.getElementById("hatch-log").style.display = "none";
      document.getElementById("cargo-log").style.display = "none";
      document.getElementById("submitTheShit").style.display = "none";
      document.getElementById("thankYou").style.display = "none";
  }

 


