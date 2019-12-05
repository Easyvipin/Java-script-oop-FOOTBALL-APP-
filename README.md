# About project
This  App helps to find Team details of Premier League.
1. crest
2. contacts
3. squad

# FOCUS
This project basically focus on javascript class structure and how it basically works.

### Docs
[Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

# STRUCTURE
### Class defination
```
class EnglishLeague {
  constructor(id, found, venue, color, players, contact) {
    this.id = id;
    this.found = found;
    this.venue = venue;
    this.logo = logo;
    this.players = players;
    this.contact = contact;
  }

 }
```
### MAJOR methods
as follows :
1. renderlogo() 
> This render the Logo to the response div.
2.  renderPlayers()
> This render the sqaud details to the response div.
3. renderInf()
> This render the information of club team .
4. renderContacts() 
> This render the contact details of Teams.
# AJAX call outside a class

### Why not inside the class?
 Because of its asynchronous behaviour,the properties of class were uneffected.
### CALL
```
$.ajax({
    headers: { "X-Auth-Token": "65d5e34360034e4d86--API" },
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
```


### API RESPONSE
```
squad: Array(31)
0: {id: 3189, name: "Kepa Arrizabalaga", position: "Goalkeeper", dateOfBirth: "1994-10-03T00:00:00Z", countryOfBirth: "Spain", …}
1: {id: 3203, name: "Willy Caballero", position: "Goalkeeper", dateOfBirth: "1981-09-28T00:00:00Z", countryOfBirth: "Argentina", …}
2: {id: 101077, name: "Jamie Cumming", position: "Goalkeeper", dateOfBirth: "1999-09-04T00:00:00Z", countryOfBirth: "England", …}
3: {id: 3177, name: "Antonio Rüdiger", position: "Defender", dateOfBirth: "1993-03-03T00:00:00Z", countryOfBirth: "Germany", …}
4: {id: 3191, name: "Azpilicueta", position: "Defender", dateOfBirth: "1989-08-28T00:00:00Z", countryOfBirth: "Spain", …}
5: {id: 3195, name: "Marcos Alonso", position: "Defender", dateOfBirth: "1990-12-28T00:00:00Z", countryOfBirth: "Spain", …}
6: {id: 3455, name: "Andreas Christensen", position: "Defender", dateOfBirth: "1996-04-10T00:00:00Z", countryOfBirth: "Denmark", …}
7: {id: 7809, name: "Emerson", position: "Defender", dateOfBirth: "1994-08-03T00:00:00Z", countryOfBirth: "Brazil", …}
8: {id: 7948, name: "Kurt Zouma", position: "Defender", dateOfBirth: "1994-10-27T00:00:00Z", countryOfBirth: "France", …}
9: {id: 11528, name: "Fikayo Tomori", position: "Defender", dateOfBirth: "1997-12-19T00:00:00Z", countryOfBirth: "Canada", …}
10: {id: 56628, name: "Reece James", position: "Defender", dateOfBirth: "1999-12-08T00:00:00Z", countryOfBirth: "England", …}
11: {id: 118489, name: "Marc Guéhi", position: "Defender", dateOfBirth: "2000-07-13T00:00:00Z", countryOfBirth: "England", …}
12: {id: 131119, name: "Faustino Anjorin", position: "Defender", dateOfBirth: "2001-11-23T00:00:00Z", countryOfBirth: "England", …}
13: {id: 131120, name: "Ian Maatsen", position: "Defender", dateOfBirth: "2002-03-10T00:00:00Z", countryOfBirth: "Netherlands", …}
14: {id: 65, name: "Mateo Kovačić", position: "Midfielder", dateOfBirth: "1994-05-06T00:00:00Z", countryOfBirth: "Austria", …}
15: {id: 145, name: "Christian Pulisic", position: "Midfielder", dateOfBirth: "1998-09-18T00:00:00Z", countryOfBirth: "United States", …}
16: {id: 2094, name: "Jorginho", position: "Midfielder", dateOfBirth: "1991-12-20T00:00:00Z", countryOfBirth: "Brazil", …}
17: {id: 3230, name: "Willian", position: "Midfielder", dateOfBirth: "1988-08-09T00:00:00Z", countryOfBirth: "Brazil", …}
18: {id: 3367, name: "N'Golo Kanté", position: "Midfielder", dateOfBirth: "1991-03-29T00:00:00Z", countryOfBirth: "France", …}
19: {id: 7450, name: "Marco van Ginkel", position: "Midfielder", dateOfBirth: "1992-12-01T00:00:00Z", countryOfBirth: "Netherlands", …}
20: {id: 7599, name: "Mason Mount", position: "Midfielder", dateOfBirth: "1999-01-10T00:00:00Z", countryOfBirth: "England", …}
21: {id: 7816, name: "Callum Hudson-Odoi", position: "Midfielder", dateOfBirth: "2000-11-07T00:00:00Z", countryOfBirth: "England", …}
22: {id: 7817, name: "Ross Barkley", position: "Midfielder", dateOfBirth: "1993-12-05T00:00:00Z", countryOfBirth: "England", …}
23: {id: 8159, name: "Ruben Loftus-Cheek", position: "Midfielder", dateOfBirth: "1996-01-23T00:00:00Z", countryOfBirth: "England", …}
24: {id: 126289, name: "Billy Gilmour", position: "Midfielder", dateOfBirth: "2001-06-11T00:00:00Z", countryOfBirth: "Scotland", …}
25: {id: 133787, name: "Tariq Lamptey", position: "Midfielder", dateOfBirth: "2000-09-30T00:00:00Z", countryOfBirth: "England", …}
26: {id: 3371, name: "Olivier Giroud", position: "Attacker", dateOfBirth: "1986-09-30T00:00:00Z", countryOfBirth: "France", …}
27: {id: 3664, name: "Michy Batshuayi", position: "Attacker", dateOfBirth: "1993-10-02T00:00:00Z", countryOfBirth: "Belgium", …}
28: {id: 7818, name: "Pedro", position: "Attacker", dateOfBirth: "1987-07-28T00:00:00Z", countryOfBirth: "Spain", …}
29: {id: 7985, name: "Tammy Abraham", position: "Attacker", dateOfBirth: "1997-10-02T00:00:00Z", countryOfBirth: "England", …}
30: {id: 25598, name: "Frank Lampard", position: null, dateOfBirth: "1978-06-20T00:00:00Z", countryOfBirth: "England", …}
```

