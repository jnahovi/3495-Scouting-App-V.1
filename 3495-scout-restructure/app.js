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
var canCarry = new Boolean (false);
var brokeDown = new Boolean (false);
var brownOut = new Boolean (false);
var canDefend = new Boolean (false);



var script = document.createElement('script');
script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js";
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);


  firebase.auth().onAuthStateChanged(function(user) {
    
    if (user) {
        $(document).ready(function(){
          //document.getElementById("firstfields").style.display = "none";
          $("#firstfields").hide();
          //document.getElementById("continue").style.display = "none";
          $("#continue").hide();
          //document.getElementById("secondfields").style.display = "block";
          $("#secondfields").show();
          //document.getElementById("hatch-log").style.display = "none";
          $("#hatch-log").hide();
          //document.getElementById("cargo-log").style.display = "none";
          $("#cargo-log").hide();
          //document.getElementById("submitTheShit").style.display = "none";
          $("submitTheShit").hide();
          //document.getElementById("thankYou").style.display = "none";
          $("#thankYou").hide();
        //document.getElementById("indexShit").style.display = "none";
          $("#indexShit").hide();
          //document.getElementById("navigation").style.display = "block";
          $("#navigation").show();
          //document.getElementById("climb-log").style.display = "none";
          $("#climb-log").hide();
          //document.getElementById("issues-log").style.display = "none";
          $("#issues-log").hide();
          //document.getElementById("defense-log").style.display = "none";
          $("#defense-log").hide()
          $("#signout").hide();
          $("#submitAllTheShit").hide();
       });
      
      var user = firebase.auth().currentUser.email;
      var userInfo = firebase.UserInfo;
      
      var name, email;
      if (user = !null) {
        var email = user.email;
        window.alert ("Welcome : " + firebase.auth().currentUser.email);
        console.log(firebase.auth().currentUser.email);
      }
    
    
      
    
    } else {
      $(document).ready(function() {
      //document.getElementById("firstfields").style.display = "block";
      $("#firstfields").show();
      //document.getElementById("secondfields").style.display = "none";
      $("#secondfields").hide();
      document.getElementById("continue").style.display = "none";
      document.getElementById("hatch-log").style.display = "none";
      document.getElementById("cargo-log").style.display = "none";
      document.getElementById("submitTheShit").style.display = "none";
      document.getElementById("thankYou").style.display = "none";
      document.getElementById("indexShit").style.display = "none";
      document.getElementById("navigation").style.display = "none";
      document.getElementById("climb-log").style.display = "none";
      document.getElementById("issues-log").style.display = "none";
      document.getElementById("defense-log").style.display = "none";
      });
        
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
      //document.getElementById("firstfields").style.display = "none";
      $("#firstfields").hide();
      //document.getElementById("continue").style.display = "none";
      $("#continue").hide();
      //document.getElementById("secondfields").style.display = "none";
      $("#secondfields").hide();
      //document.getElementById("hatch-log").style.display = "block";
      $("#hatch-log").show();
      //document.getElementById("cargo-log").style.display = "block";
      $("#cargo-log").show();
      //document.getElementById("submitTheShit").style.display = "block";
      $("#submitTheShit").show();
      $("#submitAllTheShit").show();
      //document.getElementById("climb-log").style.display = "block";
      $("#climb-log").show();
      //document.getElementById("signout").style.display = "none";
      $("#signout").hide();
      //document.getElementById("thankYou").style.display = "none";
      $("#thankYou").hide();
      //document.getElementById("indexShit").style.display = "none";
      $("#indexShit").hide();
      //document.getElementById("issues-log").style.display = "block";
      $("#issues-log").show();
      //document.getElementById("defense-log").style.display = "block";
      $("#defense-log").show();
      window.canCargo = false;
      window.createObjectClickCount = 0;


  }

  function submitAllTheNumbers() {
    var cargoPoints = document.getElementById('totalCargo').value;

    var teamNumber = document.getElementById('teamNumber').value;
    var matchNumber = document.getElementById('matchNumber').value;
    var defenseValue = document.getElementById("aggroRating").value

    var averageCargoTime = 120/ document.getElementById('totalCargo').value;
    window.cargoPoints = document.getElementById('totalCargo').value;

    window.teamNumber = document.getElementById('teamNumber').value;
    window.matchNumber = document.getElementById('matchNumber').value;

    window.averageCargoTime = 120/ document.getElementById('totalCargo').value;
    window.defenseValue = document.getElementById("aggroRating").value;
    
   
    if(document.getElementById("totalCargo").value == "") {
      cargoPoints = 0;
    }
    if(document.getElementById("aggroRating").value == "") {
      defenseValue = 0;
    }
    if(window.canCargo == false) {
      window.cargoAbilityString = "Can't shoot balls. ";
    }
    if(window.firstlvl == false) {
      window.cargoFirstAbility = "Can't shoot to first level";
    }
    if(window.secondlvl == false) {
      window.cargoSecondAbility = "Can't shoot to second level";
    }
    if(window.thirdlvl == false) {
      window.cargoThirdAbility = "Can't shoot to third (highest) level";
    }

    if(window.firstlvlhat == false) {
      window.hatchFirstAbility = "Can't spin to certain rotations";
    }
    if (window.secondlvlhat == false) {
      window.hatchSecondAbility = "Can't spin to certain color";
    }
    if (window.thirdlvlhat == false) {
      window.hatchThirdAbility = "Can't run under trench";
    }
    if(window.canHatch == false) {
      window.hatchAbilityString = "Can't spin wheel.";
    }
    if(window.firstLvlClimb == false) {
      window.climbFirstAbility = "Cannot climb on the generator switch";
    }
    if(window.secondLvlClimb == false) {
      window.climbSecondAbility = "Could not balance generator switch";
    }
   
    if(window.canCarry == false) {
      window.canCarryClimb = "Cannot carry other teams.";
    }
    if(window.brokeDown == false) {
      window.brokeDownSentence = "Didn't break down";
    }
    if(window.brownOut == false) {
      window.brownOutSentence = "Didn't brown out";
    }
    if(window.canDefend == false) {
      window.defendSentence = "Didn't defend";
    }
  
    if (document.getElementById('totalCargo').value == 0) {
      averageCargoTime = 120;
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

      cargo_skills : cargoPoints,
      Can_Shoot_Balls_To_First : window.firstlvl,
      Can_Rotate_Wheel_NumofTimes : window.firstlvlhat,
      Can_Shoot_Balls_To_Second : window.secondlvl,
      Can_Spin_To_Certain_Color : window.secondlvlhat,
      Can_Shoot_Balls_To_Third : window.thirdlvl,
      Can_Run_Under_Trench: window.thirdlvlhat,
      Can_Grab_Balls_Off_Floor: window.statFloor,
      Can_Climb_Generator_Switch: window.firstLvlClimb,
      Can_Balance_Switch: window.secondLvlClimb,
      Defense_Value: defenseValue,
      User: firebase.auth().currentUser.email,
      Match: matchNumber,

  });

    var skillArray = [];
    var averageCargoTime = [];
    var averageHatchTime
    window.skillArray = [];
    var hatchSkillArray = [];
    window.hatchSkillArray = [];
    var aggroArray = [];
    window.aggroArray = [];
    window.averageCargoTime = [];
    window.averageHatchTime = [];

    refObject.on("child_added", function(data, prevChildKey) {
       
       var teamInformation = data.val();
       var currentTeamSkill = parseInt(teamInformation.cargo_skills);
       skillArray.push(currentTeamSkill);
       window.skillArray.push("Match " + teamInformation.Match + ": " + "Cargo: " + currentTeamSkill + "\n");
       var formattedTeamInfo = skillArray.join(" ");
       window.formattedTeamInfo = skillArray.join(" ");
       console.log(formattedTeamInfo)

       var currentHatchSkill = parseInt(teamInformation.hatch_skills);
       hatchSkillArray.push(currentHatchSkill);
       window.hatchSkillArray.push("Match " + teamInformation.Match + ": " + "Hatches: " + currentHatchSkill + "\n");
       var formattedHatchInfo = hatchSkillArray.join(" ");
       window.formattedHatchInfo = hatchSkillArray.join(" ");
       

       var aggroRating = parseInt(teamInformation.Defense_Value);
       window.aggroArray.push(aggroRating);


       let aggroCount = window.aggroArray.length;
       var aggroSum = window.aggroArray.reduce(function(a, b) { return a + b; }, 0);
       var averageAggroNumber = aggroSum / aggroCount;
       window.averageAggroNumber = aggroSum / aggroCount;

   

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


    var climbFirstStory = document.getElementById("canClimbFirst");
    window.climbFirstStory = document.getElementById("canClimbFirst");
    var climbSecondStory = document.getElementById("canClimbSecond");

    var brownOutValue = document.getElementById("brownouts");
    var canLiftBots = document.getElementById("canLiftOthers");
    var brokeDownValue = document.getElementById("brokeDown");
    var defendCheck = document.getElementById("defendCheck");
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
    var canCarryClimb = "We have a lack of data regarding whether or not this team can assist other bots";
    var brownOutSentence = "";
    var brokeDownSentence = "";
    var defendSentence = "We have a lack of data regarding this team's ability to defend";
    var aggroRatingSentence = "Average aggro rating" + window.averageAggroNumber;
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
    window.canCarryClimb = "We have a lack of data regarding whether or not this team can assist other bots";
    window.brownOutSentence = "";
    window.brokeDownSentence = "";
    window.defendSentence = "We have a lack of data regarding this team's ability to defend"
    window.aggroRatingSentence = "Average aggro rating" + window.averageAggroNumber;
    

    document.getElementById("signout").style.display = "none";

    if(cargoCheck.checked == true) {
      window.canCargo = true;
      window.cargoAbilityString = "Can shoot power cells."
    }else if (cargoCheck.checked == false) {
      window.canCargo = false;
      window.cargoAbilityString = "From the most recent match, this team cannot shoot balls in general."
    }
    if(cargoFirstLevel.checked == true) {
      window.firstlvl = true;
      window.cargoFirstAbility = "Can shoot to first level."
    }else if (cargoFirstLevel.checked == false) {
      window.firstlvl = false;
      window.cargoFirstAbility = "This team cannot shoot to the first level"
    }
    if(cargoSecondLevel.checked == true) {
      window.secondlvl = true;
      window.cargoSecondAbility = "Can shoot to second level."
    }else if (cargoSecondLevel.checked == false) {
      window.secondlvl = false;
      window.cargoSecondAbility = "This team cannot shoot balls on the second level of the cargo ship."
    }
    if(cargoThirdLevel.checked == true) {
      window.thirdlvl = true;
      window.cargoThirdAbility = "Can shoot to third level."
    }else if (cargoThirdLevel.checked == false) {
      window.thirdlvl = false;
      window.cargoThirdAbility = "This team cannot shoot to the third level of the cargo ship."
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
      window.hatchAbilityString = "Can spin wheel"
    }else if (hatchCheck.checked == false) {
      window.canHatch = false;
      window.hatchAbilityString = "Can't spin wheel"
    }
    if(hatchFirstLevel.checked == true) {
      window.firstlvlhat = true;
      window.hatchFirstAbility = "Can rotate certain num of times"
    }else if (hatchFirstLevel.checked == false) {
      window.firstlvlhat = false;
      window.hatchFirstAbility = "Can't rotate certain num of times"
    }
    if(hatchSecondLevel.checked == true) {
      window.secondlvlhat = true;
      window.hatchSecondAbility = "Can rotate to certain color"
    }else if (hatchSecondLevel.checked == false) {
      window.secondlvlhat = false;
      window.hatchSecondAbility = "Can't rotate to certain color"
    }
    if(hatchThirdLevel.checked == true) {
      window.thirdlvlhat = true;
      window.hatchThirdAbility = "Can run under trench"
    }else if (hatchThirdLevel.checked == false) {
      window.thirdlvlhat = false;
      window.hatchThirdAbility = "Can't run under trench"
    }
 
    if (climbFirstStory.checked == true) {
      window.firstLvlClimb = true;
      window.climbFirstAbility = "Can climb onto generator switch";
      console.log(firstLvlClimb);
    }else if (climbFirstStory.checked == false) {
      window.firstLvlClimb = false;
      window.climbFirstAbility = "Can't climb onto generator switch";
    }

    if (climbSecondStory.checked == true) {
      window.secondLvlClimb = true;
      window.climbSecondAbility = "Can balance generator switch";
    }else if (climbSecondStory.checked == false) {
      window.firstLvlClimb = false;
      window.climbSecondAbility = "Can't balance generator switch";
    }


    if(brownOutValue.checked == true) {
      window.brownOut = true;
      window.brownOutSentence = "Browned out last match.";
    }else if(brownOutValue.checked == false) {
      window.brownOut = false;
    }

    if(brokeDownValue.checked == true) {
      window.brokeDown = true;
      window.brokeDownSentence = "Broke down last match.";
    }else if(brownOutValue.checked == false) {
      window.brownOut = false;
    }

    if(canLiftBots.checked == true) {
      window.canCarry = true;
      console.log(window.canCarry);
      window.canCarryClimb = "Can carry other bots";
    }else if (canCarryClimb.checked == false){
      window.canCarry = false;
      window.canCarryClimb = "This team was unable to carry other bots while climbing.";
    }

    if(defendCheck.checked == true) {
      window.canDefend = true;
      window.defendSentence = "Can defend";
    }else if (defendCheck.checked == false) {
      window.canDefend = false;
      window.defendSentence = "Can't defend";
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
      document.getElementById("issues-log").style.display = "none";
      document.getElementById("defense-log").style.display = "none";
      
 

      console.log(window.firstLvlClimb);

      window.cargoAverage = "Average of " + window.averageCargoNumber + " energy balls.";

      window.aggroRatingSentence = "Average aggro rating: " + window.averageAggroNumber;
      
      var totalAbilityString = "Balls: " 
      + window.cargoAbilityString + window.cargoFirstAbility + " " + window.cargoSecondAbility + " " + window.cargoThirdAbility + " " + window.skillArray; 
      
      var totalAbilityStringPt2 = "Color Wheel: "
      + window.hatchAbilityString + " " + window.hatchFirstAbility + "\n " + window.hatchSecondAbility + " \n" + window.hatchThirdAbility ;

      var totalAbilityStringPt3 = "Climbing: "
      + window.climbFirstAbility + " " + window.climbSecondAbility + " " + window.canCarryClimb + " " 

      var totalAbilityStringPt4 = "Problems: "
      + window.brownOutSentence + window.brokeDownSentence

      var totalAbilityStringPt5 = "Defense: "
      + window.defendSentence + window.aggroRatingSentence

      window.totalAbilityString = "Balls: \n" 
      + window.cargoAbilityString + " \n" + window.cargoFirstAbility + " \n" + window.cargoSecondAbility + " \n" + window.cargoThirdAbility + " \n" + window.skillArray + " \n";
      
      window.totalAbilityStringPt2 = "Wheel: \n" 
      + window.hatchAbilityString + " \n" + window.hatchFirstAbility + " \n" + window.hatchSecondAbility + " \n" + window.hatchThirdAbility  + " \n";

      window.totalAbilityStringPt3 = "Climbing: \n"
      + window.climbFirstAbility + " \n" + window.climbSecondAbility + "\n" + window.canCarryClimb;

      window.totalAbilityStringPt4 = "Problems: \n"
      + window.brownOutSentence + " \n" + window.brokeDownSentence;

      window.totalAbilityStringPt5 = "Defense: \n"
      + window.defendSentence  + " \n" + window.aggroRatingSentence;



      var firebaseRef = firebase.database().ref("Index/");
  
      var indexRef = firebaseRef.child("Data: ");
      firebaseRef.child('Team: ' + window.teamNumber).set( {
        Ball_Abilities: window.totalAbilityString,
        Color_Wheel_Abilities: window.totalAbilityStringPt2,
        Climbing_Abilities: window.totalAbilityStringPt3,
        Problems: window.totalAbilityStringPt4,
        Defense: window.totalAbilityStringPt5,
        Aggro_Rating: window.averageAggroNumber,

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
        new_team.onclick = function(){window.alert(newObjectTeam.Ball_Abilities)
                                      window.alert(newObjectTeam.Color_Wheel_Abilities)
                                      window.alert(newObjectTeam.Climbing_Abilities)
                                      window.alert(newObjectTeam.Problems);
        };

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
        window.new_team.appendChild(para);
        new_team.onclick = function(){window.alert(newObjectTeam.Ball_Abilities)
                                      window.alert(newObjectTeam.Color_Wheel_Abilities)
                                      window.alert(newObjectTeam.Climbing_Abilities)
                                      window.alert(newObjectTeam.Problems)
        };

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
      document.getElementById("issues-log").style.display = "none";
      document.getElementById("defense-log").style.display = "none";
      location.reload();

  }






