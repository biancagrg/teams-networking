function displayTeams(teams) {
  // var member = document.querySelector("tbody");
  // for (var i = 0; i < teams.length; i++) {
  //   member.innerHTML += `<tr><td>${teams[i].promotion}</td><td>${teams[i].members}</td>
  //   <td>${teams[i].project}</td>
  //   <td><a href="${teams[i].url}"</a>url</td>
  //   <td>x e</td>
  // </tr>`;
  // }

  // transforma in html
  var teamsHTML = "";
  teams.forEach(function (team) {
    teamsHTML += `
      <tr>
        <td>${team.promotion}</td>
        <td>${team.members}</td>
        <td>${team.name}</td>
        <td>
          <a href="${team.url}">open</a>
        </td>
        <td>x e</td>
      </tr>`;
  });

  // afisare
  document.querySelector("table tbody").innerHTML = teamsHTML;
}

function loadTeams() {
  fetch("data/teams.json")
    .then(function (r) {
      return r.json();
    })
    .then(function (teams) {
      displayTeams(teams);
    });
}

loadTeams();
