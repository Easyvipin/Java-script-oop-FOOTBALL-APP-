window.onload = function() {
  // Animate loader off screen
  $(".se-pre-con").fadeOut("slow");
};
document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".collapsible.popout");
  var instances = M.Collapsible.init(elems);
});
document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".carousel");
  var instances = M.Carousel.init(elems);
});

class EnglishLeague {
  constructor(id, found, venue, color, players, contact) {
    this.id = id;
    this.found = found;
    this.venue = venue;
    this.logo = logo;
    this.players = players;
    this.contact = contact;
  }

  renderlogo() {
    document.getElementById(
      "image"
    ).innerHTML = `<img class="responsive-img" id="logo" src="${logo}"/>`;
  }
  renderInf() {
    document.getElementById(
      "information"
    ).innerHTML = ` <ul class="collection with-header">
    <li class="collection-header"><h4>${this.found}</h4></li>
    <li class="collection-header"><h4>${this.venue}</h4></li>
  </ul>`;
  }
  renderContacts() {
    document.getElementById(
      "contacts"
    ).innerHTML = `<div class="row" id="contact-card">
    <div class="col s12 m5">
      <div class="card-panel teal">
        <span class="black-text">
         <ul class="collection with-header" >
        <li class="collection-header"><h4>Contact</h4></li>
        <li class="collection-header"><h5><i class="material-icons">email</i></h5></li>
        <li class="collection-item">${this.contact.email}</li>
        <li class="collection-header"><h5><i class="material-icons">phone </i></h5></li>
        <li class="collection-item"> ${this.contact.phone}</li>
        <li class="collection-header"><h5><i class="material-icons">details</i></h5></li>
        <li class="collection-item">${this.contact.address}</li>
      </ul>
        </span>
      </div>
    </div>
  </div>
    `;
  }
  renderPlayers() {
    let stats = document.getElementById("squad");
    this.players.forEach(player => {
      console.log(player.name);
      stats.innerHTML += `<tr>
        <td><i class="material-icons">person</i>${player.name}</td>
        <td><i class="material-icons">play_for_work</i>${player.position}</td>
        <td><i class="material-icons">event</i>${player.dob}</td>
        <td><i class="material-icons">flight</i>${player.nation}</td>
      </tr>`;
    });
  }
  displayOff() {
    document.getElementById("slide").style.display = "none";
    document.getElementById("choose").style.display = "none";
  }
  displayOn(elementid) {
    document.getElementById(`${elementid}`).style.display = "inherit";
    document.getElementById("back").style.display = "";
  }
  changeBack() {
    document.body.style = "background-color:yellow";
  }
}
check = () => {
  let id = document.getElementById("teams").value;
  let found;
  let venue;
  let color;
  let players = {};
  let contact = {};
  $.ajax({
    headers: { "X-Auth-Token": "65d5e34360034e4d869589556d90383b" },
    url: `https://api.football-data.org/v2/teams/${id}`,
    dataType: "json",
    type: "GET"
  })
    .done(function(response) {
      console.log(response);
      found = response.founded;
      venue = response.venue;
      contact = {
        email: response.email,
        phone: response.phone,
        address: response.address
      };
      logo = response.crestUrl;
      players = response.squad.map(members => {
        return {
          name: members.name,
          position: members.position,
          dob: members.dateOfBirth,
          nation: members.nationality
        };
      });
      const team = new EnglishLeague(id, found, venue, logo, players, contact);

      team.renderlogo();
      team.renderInf();
      team.renderContacts();
      team.renderPlayers();
      team.changeBack();
      team.displayOn("resultlist");
      team.displayOff();
    })
    .fail(() => {
      alert("Please Choose Your club");
    });
};
backto = () => {
  location.reload();
};
/* error */
