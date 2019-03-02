document.getElementById("indexSection").style.display = "none";

function createTeamObject() {

    var firebaseRef = firebase.database().ref("Index/");

    firebaseRef.on("value", function(snapshot) {
      console.log(snapshot.val());
    }, function (error) {
      console.log("Error" + errorCode);
    })

    document.getElementById("indexSection").style.display = "block";

    firebaseRef.on("child_added", function(data, prevChildKey) {
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
      document.getElementById("indexSection").appendChild(new_team);
      var teamArray = [];
      teamArray.push(newObjectTeam.Team);
      console.log(teamArray);
      var element = document.getElementById("new_team");
      console.log(element);


    });

    firebaseRef.on("child_changed", function(data) {
      var newObjectTeam = data.val();
      var para = document.createTextNode(newObjectTeam.Team);
      window.para = document.createTextNode(newObjectTeam.Team);
      console.log(newObjectTeam.Team);
      window.new_team.appendChild(para);
      new_team.onclick = function(){window.alert(newObjectTeam.Abilities)};
    });

    document.getElementById("revealIndex").disabled = true;
  }
