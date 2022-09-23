const colorPicker = document.getElementById("colorPicker")
const scaleSelector = document.getElementById("scaleSelector")
// let value = scaleSelector[scaleSelector.selectedIndex].value
// var text = scaleSelector[scaleSelector.selectedIndex].text.toLowerCase()


var api = "https://www.thecolorapi.com/scheme?hex="

var mode = "&mode="

var count = "&count=6"

render()
function render() {
  let myUrl =
    api +
    colorPicker.value.replace("#", "") +
    mode +
    scaleSelector[scaleSelector.selectedIndex].text.toLowerCase() +
    count

  fetch(myUrl)
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("colorBox").innerHTML = `
      <div class="colorContainer">
        <div class="colorBox"> 
          <img class="color-image" src="${data.colors[0].image.bare}">
          <h3 class="hex-value">${data.colors[0].hex.value}</h3>
        </div>
        <div class="colorBox"> 
          <img class="color-image" src="${data.colors[1].image.bare}">
          <h3 class="hex-value">${data.colors[1].hex.value}</h3>
        </div>
        <div class="colorBox"> 
          <img class="color-image" src="${data.colors[2].image.bare}">
          <h3 class="hex-value">${data.colors[2].hex.value}</h3>
        </div>
        <div class="colorBox"> 
          <img class="color-image" src="${data.colors[3].image.bare}">
          <h3 class="hex-value">${data.colors[3].hex.value}</h3>
        </div>
        <div class="colorBox"> 
          <img class="color-image" src="${data.colors[4].image.bare}">
          <h3 class="hex-value">${data.colors[4].hex.value}</h3>
        </div>
        <div class="colorBox"> 
          <img class="color-image" src="${data.colors[5].image.bare}">
          <h3 class="hex-value">${data.colors[5].hex.value}</h3>
        </div>

       
      </div>
      `
    })

  console.log(myUrl)
}

colorPicker.addEventListener("input", function hexCode() {
  console.log(colorPicker.value)
  return colorPicker.value
})

document
  .getElementById("getColorBtn")
  .addEventListener("click", function generate() {
    render()
  })
