// // alert("hello");
// const data = [
//   {
//     address: ["1235, Edgar Rice"],
//     PropertyType: "com",
//     city: ["Long island"],
//     sate: "New York",
//   },
//   {
//     address: ["bnson ave , riggs street "],
//     PropertyType: "com",
//     city: ["Canal Street "],
//     sate: "New York",
//   },
//   {
//     address: ["1235, Edgar Rice"],
//     PropertyType: "res",
//     city: ["brooklyn"],
//     sate: "New York",
//   },
//   {
//     address: ["1235, calendron street"],
//     PropertyType: "com",
//     city: ["Manhattan"],
//     sate: "China Town",
//   },
//   {
//     address: ["10012 emmons, Edgar Rice street "],
//     PropertyType: "res",
//     city: ["queens"],
//     sate: "New York",
//   },
//   {
//     address: ["bay pkwy, sutter ave"],
//     PropertyType: "store",
//     city: ["brooklyn"],
//     sate: "michigan",
//   },
// ];
class realEstateP {
  constructor(address, propertyType, city, state) {
    this.address = address;
    this.PropertyType = propertyType;
    this.city = city;
    this.state = state;
  }
}
let submit_btn=document.querySelector("button")
submit_btn.addEventListener("click", ()=>{
    let address = document.querySelector("#address");
    let PropertyType = document.querySelector("#propertyType");
    let city = document.querySelector("#city");
    let state = document.querySelector("#state");
    let container=document.createElement("div")
})


