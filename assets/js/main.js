
// const copyButton = document.getElementById("copyButton");
// const codeElement = document.getElementById("code");
function copyToClipboard() {
    const copyButton = document.getElementById("copyButton");
    const codeElement = document.getElementById("code");
    const textToCopy = codeElement.innerText;
    console.log("yyyyyyyyyyyyyyyy");

    const tempTextarea = document.createElement("textarea");
    tempTextarea.value = textToCopy;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextarea);

    copyButton.innerHTML = '<i class="fa-solid fa-clipboard-check d-block fs-6 text-end "> <span> Copy to Clipboard! </span></i>';

    setTimeout(() => {
        copyButton.innerHTML = '<i class="fa-solid fa-copy text-end d-block fs-5"> </i>';
    }, 1000);
}