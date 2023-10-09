function copyToClipboard(event) {
    const copyIcon = event.currentTarget;
    const codeElement = copyIcon.nextElementSibling.querySelector("code");
    const textToCopy = codeElement.innerText;

    const tempTextarea = document.createElement("textarea");
    tempTextarea.value = textToCopy;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextarea);

    copyIcon.innerHTML = '<i class="fa-solid fa-clipboard-check d-block fs-6 text-end "> <span> Copy to Clipboard! </span></i>';

    setTimeout(() => {
        copyIcon.innerHTML = '<i class="fa-solid fa-copy text-end d-block fs-5"> </i>';
    }, 1000);
}
