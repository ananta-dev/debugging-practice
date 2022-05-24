const { loadFile } = require("./loadFile");
const { countChars } = require("./countChars");

const [char, file] = process.argv.splice(2);
if (!char) {
    console.error("ERROR: You must provide a character as an argument");
    process.exit(1);
}

const main = async () => {
    const fileText = loadFile(file);
    const count = await countChars(char, fileText);
    console.log("We found ${count} ${char} in the file");
};

main();
