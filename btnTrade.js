function trocar() {
    de = document.getElementById("de").value;
    para = document.getElementById("para").value;

    document.getElementById("de").value = para;
    document.getElementById("para").value = de;

    converter()
}