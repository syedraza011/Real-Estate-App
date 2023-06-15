class realEstateP {
  constructor(address, propertyType, city, state) {
    this.address = address;
    this.propertyType = propertyType;
    this.city = city;
    this.state = state;
  }
}
let submit_btn=document.getElementById("button")
submit_btn.addEventListener("click", ()=>{
    console.log(submit_btn);
    let address = document.querySelector("#address");
    console.log(address)
    let propertyType = document.querySelector("#propertyType");
    let city = document.querySelector("#city");
    let state = document.querySelector("#state");
    let container=document.createElement("ul")
    let insdieConatiner=document.createElement("li")
    insdieConatiner.append(address)
    // ,propertyType,city,state
    container.innerHTML=insdieConatiner
    console.log(container)
})


