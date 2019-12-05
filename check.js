/* lass fullname {
  constructor() {
    this.name;
    this.lastname;
  }
  result() {
    this.name = "vipin";
    this.lastname = "chandra";
    console.log(`this is my name ${this.name}`);
  }
  what() {
    console.log(this);
  }
}
const student = +new fullname();
console.log(student);
 */
$.ajax({
  headers: { "X-Auth-Token": "65d5e34360034e4d869589556d90383b" },
  url: ` https://api.football-data.org/v2/competitions/2021/teams`,
  dataType: "json",
  type: "GET"
}).done(function(response) {
  console.log(response);
});
