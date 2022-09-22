const colorPicker = document.getElementById("colorPicker")
const scaleSelector = document.getElementsByClassName("scaleOption")

var api = "https://www.thecolorapi.com/scheme?hex="
var hexValue = colorPicker.value
var mode = "&mode="
var modeValue = "triad"
var count = "&count=6"




const myUrl =
  api + colorPicker.value.replace("#", "") + mode + modeValue + count
//! GET THE FETCH URL TO UPDATE THE HEX VALUE WITH THE COLOR PICKER
render()
function render() {
  fetch(myUrl)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      document.getElementById("colorBox").innerHTML = `
      <div class="colorContainer">
        <img class="color-image" src="${data.colors[0].image.named}">
        <img class="color-image" src="${data.colors[1].image.named}">
        <img class="color-image" src="${data.colors[2].image.named}">
        <img class="color-image" src="${data.colors[3].image.named}">
        <img class="color-image" src="${data.colors[4].image.named}">
        <img class="color-image" src="${data.colors[5].image.named}">
      </div>
      `
    })
}
colorPicker.addEventListener("input", function hexCode() {
  console.log(colorPicker.value)
  return colorPicker.value
})



document.getElementById("getColorBtn").addEventListener("click",function generate(){
    render()
    console.log(colorPicker.value)
  
    console.log(myUrl)
  })
