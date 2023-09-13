const names = [
    "TIAGO",
    "MATHEUS",
    "VINÍCIUS",
    "JANSEN",
    "FERNANDO",
    "WESCLEY",
    "GEORGE",
];

const create_opts = () => {
    elementsHtml = "";
    for (const id in names) {
        elementsHtml += `<div class="d-flex form-check" id="campo${id}">
        <input class="form-check-input" type="checkbox" value="${names[id]}" id="name${id}" checked>
        <label class="form-check-label" for="name${id}">
          ${names[id]}
        </label>
        <div class="removedor d-flex ms-2 justify-content-center" 
        value="campo${id}" onclick="remove(event)">x</div>
        </div>`;
    }
    names_container.innerHTML = elementsHtml;
};

create_opts();

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
    winner ? (winnerElement.innerHTML = `<center>${winner}</center>`) : null;
};

const getId = () => {
    const checkboxes = document.getElementsByClassName("form-check-input");
    return checkboxes.length;
};

const adicionar = () => {
    if (novo_nome.value) {
        let name = novo_nome.value.toUpperCase();
        let id = getId();
        names_container.innerHTML += `<div class="form-check">
        <input class="form-check-input" type="checkbox" value="${name}" id="name${id}" checked>
        <label class="form-check-label" for="name${id}">
          ${name}
        </label>
        </div>`;
    }
};

const markChecks = (op) => {
    const checkboxes = document.getElementsByClassName("form-check-input");
    for (const checkbox of checkboxes) {
        checkbox.checked = op;
    }
};

const remove = (e) => {
    id = e.srcElement.getAttribute("value");
    campo = document.getElementById(id);
    campo.remove()
    console.log(campo);
};
