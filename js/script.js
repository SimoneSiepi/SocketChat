
function handleFocus() {
    var nicknameInput = document.getElementById("Nickname");
    if (nicknameInput.value === "Inserisci Nickname") {
        nicknameInput.value="";
        nicknameInput.style.color = "black"; // Cambia il colore del testo quando inizia a scrivere
    }
}

function handleBlur() {
    var nicknameInput = document.getElementById("Nickname");
    if (nicknameInput.value === "") {
        nicknameInput.value = "Inserisci Nickname";
        nicknameInput.style.color = "gray"; // Ripristina il colore del testo sbiadito quando non è in focus
    }
}
function setNickname() {
    var nicknameInput = document.getElementById("Nickname");
    var nickname = nicknameInput.value.trim();

    if (nickname !== "") {
        // Nascondi la sezione del nickname e mostra la sezione della chat
        document.getElementById("nicknameSection").style.display = "none";
        document.getElementById("chatSection").style.display = "flex";

        // Aggiungi il nickname al titolo della chat
        document.getElementById("nickname-title").innerHTML = "Chat - " + nickname;
    } else {
        alert("Inserisci un nickname valido.");
    }
}
