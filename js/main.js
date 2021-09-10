

function downloadFile()
{
    let link = document.createElement("a");
    link.download = "islamAbdelbasset-Resume";
    link.href = "cv/islamAbdelbasset-Resume.pdf";
    link.click();
}
