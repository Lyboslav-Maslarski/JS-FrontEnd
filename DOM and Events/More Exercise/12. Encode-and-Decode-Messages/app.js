function encodeAndDecodeMessages() {
    let [sendTextArea, receiveTextArea] = Array.from(document.getElementsByTagName('textarea'));
    let [encodeBtn, decodeBtn] = Array.from(document.getElementsByTagName('button'));

    encodeBtn.addEventListener('click', encode);
    decodeBtn.addEventListener('click', decode);


    function encode() {
        let result = '';
        for (const letter of sendTextArea.value) {
            result += String.fromCharCode(letter.charCodeAt(0) + 1);
        }
        sendTextArea.value = '';
        receiveTextArea.value = result;
    }

    function decode() {
        let result = '';
        for (const letter of receiveTextArea.value) {
            result += String.fromCharCode(letter.charCodeAt(0) - 1);
        }
        receiveTextArea.value = result;
    }
}