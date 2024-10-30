var wrote = document.getElementById('write');

function write(elem, str, duration, callback) {
    let length = str.length;
    let ms = (duration * 1000) / length;
    let currStr = "";
    let i = 0;

    let int = setInterval(type, ms);

    function type() {
        currStr += str[i];
        elem.innerHTML = currStr;
        i++;

        if (i === length) {
            clearInterval(int);
            setTimeout(() => {
                if (callback) callback();
            }, 1000); // 1-second pause before the next line types
        }
    }
}

// First line types, followed by the second, and finally the third with an emoji
setTimeout(() => {
    write(wrote, "Deploying Code at the Speed of Comfort", 2, function () {
        let newLine = document.createElement('div'); // Create new line for second text
        newLine.style.fontSize = "0.75em"; // Smaller font size
        newLine.style.marginTop = "10px"; // Add spacing above this line
        wrote.appendChild(newLine); // Append it to the parent element

        // Start typing the second line
        write(newLine, "Check out our flight roster", 2, function () {
            let thirdLine = document.createElement('div'); // Create new line for third text
            thirdLine.style.fontSize = "1em"; // Normal font size
            thirdLine.style.marginTop = "10px"; // Add spacing above this line
            wrote.appendChild(thirdLine); // Append it to the parent element

            // Start typing the third line with the rocket emoji
            write(thirdLine, "🚀", 2);
        });
    });
}, 1000);
