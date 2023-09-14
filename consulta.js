const desativarOption = (name)=>{
    const checkboxes = document.getElementsByClassName("form-check-input");

    for (const checkbox of checkboxes) {
        if (checkbox.value == name) checkbox.checked = false 
    }
}

async function readLastThreeLines(fileURL) {
    try {
        const response = await fetch(fileURL);
        const text = await response.text();
        const lines = text.split('\n').filter(line => line.trim() !== '');
        const lastThreeLines = lines.slice(-3);

        const result = lastThreeLines.map(line => {
            const [firstWord, ...rest] = line.trim().split(' ');
            return [firstWord, rest.join(' ')];
        });

        return result;
    } catch (error) {
        console.error('Error reading the file:', error);
        return [];
    }
}

const fileURL = 'data.txt';
readLastThreeLines(fileURL)
    .then(resultArray => {
        resultHTML = ''
        for (const data of resultArray) {
            resultHTML += `<div class="row d-flex flex-nowrap">
                                <div class="col">
                                    <p class="fw-bold">${data[0]}</p>
                                </div>
                                <div class="col">
                                    <p class="text-secondary fw-bold">${data[1]}</p></div>
                                </div>`
            trocadores.innerHTML = resultHTML;
            desativarOption(data[0]);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
