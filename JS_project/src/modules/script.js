import {Save, Load} from "./data.js"

const gridBox = document.getElementById("array-grid");
const singleBox = document.createElement("div");


singleBox.style.width = "20px";
singleBox.style.height = "20px";
singleBox.style.background = "#fff";


const saveMapButton = document.getElementById("save-button");

const row = 20;
const down = 20;
const cellSize = 20;


const mapState = Array.from({length: row}, () =>
Array.from({length: down}, () => null));        //null = white



function displayLayout(height, width) {
    gridBox.innerHTML = "";
    gridBox.style.display = "grid";

    gridBox.style.gridTemplateColumns = `repeat(${width}, ${cellSize}px)`;
    gridBox.style.gridTemplateRows = `repeat(${height}, ${cellSize}px)`;

    for (let i = 0; i < row * down; i++) {
        const cell = document.createElement("div");

        const rowIndex = Math.floor(i / width);
        const collumnIndex = i % width;


        cell.style.height = `${singleBox.style.height}`;
        cell.style.width = `${singleBox.style.width}`;
        cell.style.backgroundColor = mapState[rowIndex][collumnIndex] ?? "white";
        cell.style.border = "1px solid black";



        cell.addEventListener("dblclick", () => {

                if (mapState[rowIndex][collumnIndex] === null) {
                    mapState[rowIndex][collumnIndex] = currentBoxText.style.backgroundColor;
                }
                else {
                    mapState[rowIndex][collumnIndex] = null;
                }
                cell.style.backgroundColor = mapState[rowIndex][collumnIndex] ?? "white"    ;

        })

        gridBox.appendChild(cell);
    }
}
displayLayout(row, down);


let isSelected = false;


function GetText(colorTextElement) {
    return  colorTextElement.textContent;
}

const allColors = document.querySelectorAll(".color");
const allTexts = document.querySelectorAll(".color > p");

const currentBoxText = document.getElementById("current-track-text");

allColors.forEach(color => {
    color.addEventListener("click", () => {

        allColors.forEach(c => c.classList.remove("clicked"));
        color.classList.add("clicked");
        currentBoxText.textContent = GetText(color);
        const bg = window.getComputedStyle(color).backgroundColor;
        currentBoxText.style.backgroundColor = bg;
        isSelected = true;
    });
})


saveMapButton.addEventListener("click", () => {
    Save(mapState);
    console.log("Map is probably saved");
    window.location.href = "hp.html";
    alert("Map is probably saved");
});


console.log(mapState);

