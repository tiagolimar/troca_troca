
const names=["TIAGO","MATHEUS","VINÍCIUS","JANSEN","FERNANDO"]

const create_opts = ()=>{
    elementsHtml = ''
    for (const id in names){
        elementsHtml += `<div class="form-check">
        <input class="form-check-input" type="checkbox" value="${names[id]}" id="name${id}" checked>
        <label class="form-check-label" for="name${id}">
          ${names[id]}
        </label>
        </div>`
    }
    names_container.innerHTML = elementsHtml;
}

create_opts()

const pickWinner = () => {

    const checkboxes = document.getElementsByClassName("form-check-input");

    const checkedNames = [];

    for (const checkbox of checkboxes) {
        if (checkbox.checked) {
            checkedNames.push(checkbox.value);
        }
    }

    const winnerIndex = Math.floor(Math.random() * checkedNames.length);
    const winner = checkedNames[winnerIndex];

    const winnerElement = document.getElementById("winner");
    winnerElement.innerHTML = `<center>${winner}</center>`;
}