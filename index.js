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
        <label class="form-check-label ms-2" for="name${id}">
          ${names[id]}
        </label>
        <div class="removedor d-flex ms-2 justify-content-center" 
        value="campo${id}" onclick="remove(event)">x</div>
        </div>`;
    }
    names_container.innerHTML = elementsHtml;
};

create_opts();

const get_random_item = list=>{
    const index = Math.floor(Math.random()*list.length)
    return list[index]
}

const pickWinner = () => {
    const checkboxes = document.getElementsByClassName("form-check-input");

    const checkedNames = [];

    for (const checkbox of checkboxes) {
        if (checkbox.checked) {
            checkedNames.push(checkbox.value);
        }
    }

    let count = 0
    const loop_id = setInterval(() => {
        const winner = get_random_item(checkedNames)
        const winnerElement = document.getElementById("winner");
    
        winner ? (winnerElement.innerHTML = `<center class="text-danger">${winner}</center>`) : null;
        count++;
        if(count == 20){
            clearInterval(loop_id);
            winner ? (winnerElement.innerHTML = `<center class="text-success shadow-text">${winner}</center>`) : null;
        }
    }, 150);

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
