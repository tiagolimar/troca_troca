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

const fileURL = 'data.txt'; // Substitua pelo URL do seu arquivo de texto
readLastThreeLines(fileURL)
    .then(resultArray => {
        resultHTML = ''
        for (const data of resultArray) {
            resultHTML += `<div class="row d-flex flex-nowrap">
                                <div class="col">
                                    <p>${data[0]}</p>
                                </div>
                                <div class="col">
                                    <p class="text-secondary">${data[1]}</p></div>
                                </div>`
            trocadores.innerHTML = resultHTML;
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });