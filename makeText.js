const fs = require('fs');
const axios = require('axios');
const { MarkovMachine } = require('./markov');

async function getTextFromFile(filename) {
    try {
        let text = fs.readFileSync(filename, 'utf8');
        return text;
    } catch (error) {
        throw error;
    }
}

async function getTextFromUrl(url) {
    try {
        let response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw error;
    }
}

function makeText (text) {
    let mm = new MarkovMachine(text);
    return mm.makeText();
}

async function main() {
    try {
        let filenameOrUrl = process.argv[3];
        let text;

        if (filenameOrUrl.startsWith('http://') || filenameOrUrl.startsWith('https://')) {
            text = await getTextFromUrl(filenameOrUrl);
        } else {
            text = await getTextFromFile(filenameOrUrl);
        }

        let output = makeText(text);
        console.log(output);
    } catch(error) {
        console.error(`An error occurred: ${error.message}`);
        process.exit(1);
    }
}

main();
