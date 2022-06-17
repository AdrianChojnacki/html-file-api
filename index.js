const inpFile = document.getElementById("inpFile");

inpFile.addEventListener("change", function () {
  console.log(inpFile.files);

  for (const file of inpFile.files) {
    if (file.size > 300000) {
      alert(`${file.name} is too big! Max is 300KB`);
    }
  }
});
