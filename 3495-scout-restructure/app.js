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
var firstLvlClimb = new Boolean (false);
var secondLvlClimb = new Boolean (false);
var thirdLvlClimb = new Boolean (false); 

var createObjectClickCount = 0;
var teamCount = 0;

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      document.getElementById("firstfields").style.display = "none";
      document.getElementById("continue").style.display = "none";
      document.getElementById("secondfields").style.display = "block";
      document.getElementById("hatch-log").style.display = "none";
      document.getElementById("cargo-log").style.display = "none";
      document.getElementById("submitTheShit").style.display = "none";
      document.getElementById("thankYou").style.display = "none";
      document.getElementById("indexShit").style.display = "none";
      document.getElementById("navigation").style.display = "block";
      document.getElementById("climb-log").style.display = "none";
      
      var user = firebase.auth().currentUser.email;
      var userInfo = firebase.UserInfo;
      
      var name, email;
      if (user = !null) {
        var email = user.email;
        window.alert ("Welcome : " + firebase.auth().currentUser.email);
        console.log(firebase.auth().currentUser.email);
      }
      
    
    } else {
      
      document.getElementById("firstfields").style.display = "block";
      document.getElementById("secondfields").style.display = "none";
      document.getElementById("continue").style.display = "none";
      document.getElementById("hatch-log").style.display = "none";
      document.getElementById("cargo-log").style.display = "none";
      document.getElementById("submitTheShit").style.display = "none";
      document.getElementById("thankYou").style.display = "none";
      document.getElementById("indexShit").style.display = "none";
      document.getElementById("navigation").style.display = "none";
      document.getElementById("climb-log").style.display = "none";
      
   
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

      
  }

  function logout() {
    firebase.auth().signOut()
  }




function benShapiroCOLLECTSDataWITHFactsANDLogic(team, match) {
    var teamNumber = document.getElementById('teamNumber').value;
    var matchNumber = document.getElementById('matchNumber').value;
    document.getElementById("continue").style.display = "block";
    var firebaseRef = firebase.database().ref();

    const refObject = firebaseRef.child('Team: ' + teamNumber);
    const refList = refObject.child('Match: ' + matchNumber);


    refObject.child('Match: ' + matchNumber).set( {
   
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
      document.getElementById("climb-log").style.display = "block";
      document.getElementById("signout").style.display = "none";
      document.getElementById("thankYou").style.display = "none";
      document.getElementById("indexShit").style.display = "none";
      window.canCargo = false;
      console.log(window.canCargo);
      window.createObjectClickCount = 0;


  }

    function submitAllTheNumbers(team, match, hatch_skills, cargo_skills, first_level, second_level, third_level, off_floor, from_station) {
    var cargoPoints = document.getElementById('totalCargo').value;
    var hatchPoints = document.getElementById('totalHatch').value;
    var teamNumber = document.getElementById('teamNumber').value;
    var matchNumber = document.getElementById('matchNumber').value;
    var averageHatchTime = 120 / document.getElementById('totalHatch').value;
    var averageCargoTime = 120/ document.getElementById('totalCargo').value;
    window.cargoPoints = document.getElementById('totalCargo').value;
    window.hatchPoints = document.getElementById('totalHatch').value;
    window.teamNumber = document.getElementById('teamNumber').value;
    window.matchNumber = document.getElementById('matchNumber').value;
    window.averageHatchTime = 120 / document.getElementById('totalHatch').value;
    window.averageCargoTime = 120/ document.getElementById('totalCargo').value;
    
    if(document.getElementById('totalCargo').value == "") {
      hatchPoints = 0;
    }
    if(document.getElementById("totalCargo").value == "") {
      cargoPoints = 0;
    }
    if(window.canCargo == false) {
      window.cargoAbilityString = "Data pulled from the most recent match shows that this team does not have the ability to place cargo. ";
    }
    if(window.firstlvl == false) {
      window.cargoFirstAbility = "This team does not have the ability to place cargo on the first level of the rocket ship.";
    }
    if(window.secondlvl == false) {
      window.cargoSecondAbility = "This team does not have the ability to place cargo on the second level of the rocket ship.";
    }
    if(window.thirdlvl == false) {
      window.cargoThirdAbility = "This team does not have the ability to place cargo on the third level of the rocket ship.";
    }

    if(window.firstlvlhat == false) {
      window.hatchFirstAbility = "This team does not have the ability to place hatches on the first level of the rocket ship."
    }
    if (window.secondlvlhat == false) {
      window.hatchSecondAbility = "This team does not have the ability to place hatches on the second level of the rocket ship."
    }
    if (window.thirdlvlhat == false) {
      window.hatchThirdAbility = "This team does not have the ability to place hatches on the third level of the rocket ship."
    }
    if(window.canHatch == false) {
      window.hatchAbilityString = "This team does not have the ability to place hatches in general."
    }
    if(window.firstLvlClimb == false) {
      window.climbFirstAbility = "This team cannot climb on the first level of the HAB.";
    }
    if(window.secondLvlClimb == false) {
      window.climbSecondAbility = "This team cannot climb on the second level of the HAB.";
    }
    if(window.thirdLvlClimb == false) {
      window.climbThirdAbility = "This team cannot climb on the third level of the HAB.";
    }

    console.log(window.cargoAbilityString);
    console.log(window.canCargo);
    
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

    var averageHatchNumber = [];

   
    document.getElementById("signout").style.display = "block";
    var firebaseRef = firebase.database().ref();

    const refObject = firebaseRef.child('Team: ' + teamNumber);
    const refList = refObject.child('Match: ' + matchNumber);



    window.alert("Data Successfully Submitted");
    
    refObject.child('Match: ' + matchNumber).set( {
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
      Can_Climb_First_Level: window.firstLvlClimb,
      Can_Climb_Second_Level: window.secondLvlClimb,
      Can_Climb_Third_Level: window.secondLvlClimb,
      Average_Hatch_Time: averageHatchTime,
      Average_Cargo_Time: averageCargoTime,
      User: firebase.auth().currentUser.email,

  });

    var skillArray = [];
    window.skillArray = [];
    var hatchSkillArray = [];
    window.hatchSkillArray = [];

    refObject.on("child_added", function(data, prevChildKey) {
       
       var teamInformation = data.val();
       console.log(teamInformation.cargo_skills);
       var currentTeamSkill = parseInt(teamInformation.cargo_skills);
       skillArray.push(currentTeamSkill);
       window.skillArray.push(currentTeamSkill);
       console.log(window.skillArray);
       
       var currentHatchSkill = parseInt(teamInformation.hatch_skills);
       hatchSkillArray.push(currentHatchSkill);
       window.hatchSkillArray.push(currentHatchSkill);

       let count = window.skillArray.length;
       console.log(count);
       console.log(window.skillArray);
       var sum = window.skillArray.reduce(function(a, b) { return a + b; }, 0);
       console.log(sum);
       var averageCargoNumber = sum / count;
       window.averageCargoNumber = sum / count;

       let hatchCount = window.hatchSkillArray.length;
       var hatchSum = window.hatchSkillArray.reduce(function(a, b) { return a + b; }, 0);
       var averageHatchNumber = hatchSum / hatchCount;
       window.averageHatchNumber = hatchSum / hatchCount;
       console.log(averageHatchNumber);
       console.log(hatchSkillArray);

    });

    refObject.on("value", function(snapshot) {
        console.log(snapshot.val());
      }, function (error) {
        console.log("Error" + errorCode);
      })





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
    var climbFirstStory = document.getElementById("canClimbFirst");
    var climbSecondStory = document.getElementById("canClimbSecond");
    var climbThirdStory = document.getElementById("canClimbThird");
    var cargoAbilityString = "We have a lack of data regarding this team's ability to place cargo"
    var cargoFirstAbility = "We have a lack of data regarding this team's ability to place cargo on the first level of the rocket";
    var cargoSecondAbility = "We have a lack of data regarding this team's ability to place cargo on the second level of the rocket";
    var cargoThirdAbility = "We have a lack of data regarding this team's ability to place cargo on the third level of the rocket";
    var hatchFirstAbility = "We have a lack of data regarding this team's ability to place hatches on the first level of the rocket";
    var hatchAbilityString = "We have a lack of data regarding this team's ability to place cargo";
    var hatchSecondAbility = "We have a lack of data regarding this team's ability to place hatches on the second level of the rocket";
    var hatchThirdAbility = "We have a lack of data regarding this team's ability to place hatches on the third level of the rocket";
    var climbFirstAbility = "We have a lack of data regarding this team's ability to climb the first level";
    var climbSecondAbility = "We have a lack of data regarding this team's ability to climb the second level";
    var climbThirdAbility = "We have a lack of data regarding this team's ability to climb the third level";
    var cargoAverage = "On average, this team can place an average of" + window.averageCargoNumber;
    window.cargoAbilityString = "We have a lack of data regarding this team's ability to place cargo";
    window.cargoFirstAbility = "We have a lack of data regarding this team's ability to place cargo on the first level of the rocket";
    window.cargoSecondAbility = "We have a lack of data regarding this team's ability to place cargo on the second level of the rocket";
    window.cargoThirdAbility = "We have a lack of data regarding this team's ability to place cargo on the third level of the rocket";
    window.hatchFirstAbility = "We have a lack of data regarding this team's ability to place hatches on the first level of the rocket";
    window.hatchAbilityString = "We have a lack of data regarding this team's ability to place cargo";
    window.hatchSecondAbility = "We have a lack of data regarding this team's ability to place hatches on the second level of the rocket";
    window.hatchThirdAbility = "We have a lack of data regarding this team's ability to place hatches on the third level of the rocket";
    window.climbFirstAbility = "We have a lack of data regarding this team's ability to climb the first level";
    window.climbSecondAbility = "We have a lack of data regarding this team's ability to climb the second level";
    window.climbThirdAbility = "We have a lack of data regarding this team's ability to climb the third level";
    window.cargoAverage = "On average, this team can place an average of" + window.averageCargoNumber;



    document.getElementById("signout").style.display = "none";

    if(cargoCheck.checked == true) {
      window.canCargo = true;
      window.cargoAbilityString = "From the most recent match, this team can place cargo in general."
    }else if (cargoCheck.checked == false) {
      window.canCargo = false;
      window.cargoAbilityString = "From the most recent match, this team cannot place cargo in general."
    }
    if(cargoFirstLevel.checked == true) {
      window.firstlvl = true;
      window.cargoFirstAbility = "This team can place cargo on the first level of the cargo ship."
    }else if (cargoFirstLevel.checked == false) {
      window.firstlvl = false;
      window.cargoFirstAbility = "This team cannot place cargo on the first level of the cargo ship."
    }
    if(cargoSecondLevel.checked == true) {
      window.secondlvl = true;
      window.cargoSecondAbility = "This team can place cargo on the second level of the cargo ship."
    }else if (cargoSecondLevel.checked == false) {
      window.secondlvl = false;
      window.cargoSecondAbility = "This team can place cargo on the second level of the cargo ship."
    }
    if(cargoThirdLevel.checked == true) {
      window.thirdlvl = true;
      window.cargoThirdAbility = "This team can place cargo on the third level of the cargo ship."
    }else if (cargoThirdLevel.checked == false) {
      window.thirdlvl = false;
      window.cargoThirdAbility = "This team cannot place cargo on the third level of the cargo ship."
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
      window.hatchAbilityString = "From the most recent match, this team can place hatches in general."
    }else if (hatchCheck.checked == false) {
      window.canHatch = false;
      window.hatchAbilityString = "This team can't place hatches in general."
    }
    if(hatchFirstLevel.checked == true) {
      window.firstlvlhat = true;
      window.hatchFirstAbility = "This team can place hatches on the first level of the rocket ship."
    }else if (hatchFirstLevel.checked == false) {
      window.firstlvlhat = false;
      window.hatchFirstAbility = "This team can't place hatches on the first level of the rocket ship."
    }
    if(hatchSecondLevel.checked == true) {
      window.secondlvlhat = true;
      window.hatchSecondAbility = "This team can place hatches on the second level of the rocket ship."
    }else if (hatchSecondLevel.checked == false) {
      window.secondlvlhat = false;
      window.hatchThirdAbility = "This team can't place hatches on the second level of the rocket ship."
    }
    if(hatchThirdLevel.checked == true) {
      window.thirdlvlhat = true;
      window.hatchThirdAbility = "This team can place hatches on the third level of the rocket ship."
    }else if (hatchThirdLevel.checked == false) {
      window.thirdlvlhat = false;
      window.hatchThirdAbility = "This team can't place hatches on the third level of the rocket ship."
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
    if (climbFirstStory.checked == true) {
      window.firstLvlClimb = true;
      window.climbFirstAbility = "This team has the ability to climb on the first level of the HAB.";
    }else if (climbFirstAbility.checked == false) {
      window.firstLvlClimb = false;
      window.climbFirstAbility = "This team cannot climb on the first level.";
    }

    if (climbSecondStory.checked == true) {
      window.secondLvlClimb = true;
      window.climbSecondAbility = "This team has the ability to climb on the second level of the HAB.";
    }else if (climbFirstAbility.checked == false) {
      window.firstLvlClimb = false;
      window.climbSecondAbility = "This team cannot climb on the second level.";
    }

    if (climbThirdStory.checked == true) {
      window.thirdLvlClimb = true;
      window.climbThirdAbility = "This team has the ability to climb on the third level of the HAB.";
    }else if (climbFirstAbility.checked == false) {
      window.firstLvlClimb = false;
      window.climbThirdAbility = "This team cannot climb on the third level.";
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
      document.getElementById("indexShit").style.display = "none";
      document.getElementById("climb-log").style.display = "none";

      window.cargoAverage = "On average, this team can place an average of " + window.averageCargoNumber + " cargo balls, and " + window.averageHatchNumber + " hatches";
      
      var totalAbilityString = "All Abilities: " + window.cargoAbilityString + window.cargoFirstAbility + " " + window.cargoSecondAbility + " " + window.cargoThirdAbility + " " + window.hatchAbilityString + " " + window.hatchFirstAbility + " " + window.hatchSecondAbility + " " + window.hatchThirdAbility + " " + window.climbFirstAbility + " " + window.climbSecondAbility + " " + window.climbThirdAbility + " " + window.cargoAverage;
      window.totalAbilityString = "All Abilities: " + window.cargoAbilityString + window.cargoFirstAbility + " " + window.cargoSecondAbility + " " + window.cargoThirdAbility + " " + window.hatchAbilityString + " " + window.hatchFirstAbility + " " + window.hatchSecondAbility + " " + window.hatchThirdAbility + " " + window.climbFirstAbility + " " + window.climbSecondAbility + " " + window.climbThirdAbility + " " + window.cargoAverage;
      var firebaseRef = firebase.database().ref("Index/");
  
      var indexRef = firebaseRef.child("Data: ");
      firebaseRef.child('Team: ' + window.teamNumber).set( {
        Abilities: window.totalAbilityString,
        Team: window.teamNumber,
      });

      document.getElementById("indexShit").style.display = "none";

      const Teams = {
        teamNo: window.teamNumber,
        match: window.matchNumber,
        ability_summary: window.totalAbilityString,
      }

      const newTeam = Object.create(Teams);
      newTeam.teamNo = window.teamNumber;
      newTeam.match = window.matchNumber;
      newTeam.ability_summary = window.totalAbilityString;

      console.log(newTeam.ability_summary);
      console.log(window.matchNumber);

      firebaseRef.on("child_added", function(data, prevChildKey) {
        console.log(indexShit);
        var newObjectTeam = data.val();
        console.log(newObjectTeam.Abilities);
        console.log(newObjectTeam.Team);
        console.log(newObjectTeam.Team);
        console.log(window.createObjectClickCount);
        var new_team = document.createElement("BUTTON");
        window.new_team = document.createElement("BUTTON");
        new_team.id = "new_team";
        var para = document.createTextNode(newObjectTeam.Team);
        new_team.appendChild(para);
        new_team.onclick = function(){window.alert(newObjectTeam.Abilities)};
        document.getElementById("indexShit").appendChild(new_team);
        var teamArray = [];
        teamArray.push(newObjectTeam.Team);
        console.log(teamArray);
        var element = document.getElementById("new_team");
        console.log(element);
        console.log(indexShit);

      });


      firebaseRef.on("child_changed", function(data) {
        var newObjectTeam = data.val();
        var para = document.createTextNode(newObjectTeam.Team);
        window.para = document.createTextNode(newObjectTeam.Team);
        console.log(newObjectTeam.Team);
        window.new_team.appendChild(para);
        new_team.onclick = function(){window.alert(newObjectTeam.Abilities)};
      });


    }
    

  function backFromSignOut() {
      document.getElementById("firstfields").style.display = "none";
      document.getElementById("continue").style.display = "none";
      document.getElementById("secondfields").style.display = "block";
      document.getElementById("hatch-log").style.display = "none";
      document.getElementById("cargo-log").style.display = "none";
      document.getElementById("submitTheShit").style.display = "none";
      document.getElementById("thankYou").style.display = "none";
      document.getElementById("indexShit").style.display = "none";
      location.reload();

  }






