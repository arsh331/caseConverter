window.onload = function () {

    let textElement = document.getElementById("text-area");


    document.getElementById("upper-case").addEventListener("click", upperCase);   // add event listeners to all the buttons.
    document.getElementById("lower-case").addEventListener("click", lowerCase);
    document.getElementById("proper-case").addEventListener("click", properCase);
    document.getElementById("sentence-case").addEventListener("click", sentenceCase);

    document.getElementById("save-text-file").addEventListener("click", download);

    function upperCase() {
        let text = textElement.value;
        textElement.value = text.toUpperCase();
    }

    function lowerCase() {
        let text = textElement.value;
        textElement.value = text.toLowerCase();
    }

    function properCase() {
        let text = textElement.value;
        let textArr = text.split(" ");
        let sentence = "";

            for(let i = 0; i < textArr.length; i++){
                let word = textArr[i];
                word = word.toLowerCase();

                let firstLetter = word.charAt(0);
                let newFirstLetter = firstLetter.toUpperCase();

                word = word.replace(firstLetter, newFirstLetter);
                sentence = sentence.concat(" ", word);

            }
            textElement.value = sentence.substr(1);
    }

    function sentenceCase() {
        let text = textElement.value;
        let sentenceArr = text.split(". ");
        let sentence = "";

        for(let j = 0; j < sentenceArr.length; j++){
            let textArr = sentenceArr[j].split(" ");

            for(let i = 0; i < textArr.length; i++){
                let word = textArr[i];
                word = word.toLowerCase();

                if(i == 0) {
                    let firstLetter = word.charAt(0);
                    let newFirstLetter = firstLetter.toUpperCase();
                    word = word.replace(firstLetter, newFirstLetter);
                }
                sentence = sentence.concat(" ", word);
            }
            sentence = sentence.concat(".");
        }
        console.log(sentence);
        textElement.value = sentence.substring(1, sentence.length - 1);
    }

    function download(){
        let text = textElement.value;
        let element = document.createElement("a");
        let filename = "text.txt";
        element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURI(text));
        element.setAttribute("download", filename);

        element.style.display = "none";
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }
}