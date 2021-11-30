let myText = document.getElementById("MyText");

let butUpp = document.getElementById("upper-case");
let butLow = document.getElementById("lower-case");
let butProp = document.getElementById("proper-case");
let butSent = document.getElementById("sentence-case");
let butSave = document.getElementById("save-text-file");

butUpp.addEventListener("click", function() {
    myText.value = myText.value.toUpperCase()
});
butLow.addEventListener("click", function() {
    myText.value = myText.value.toLowerCase()
});
butProp.addEventListener("click", function() {
    const words = myText.value.split(" "); //получаю массив элементов из слов (word)
    myText.value = words.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(" ");
    //для каждого элемента (слова) берем первый знак (букву) и добавляем остальные знаки, начиная со второго
});
butSent.addEventListener("click", function() {
    const words = myText.value.split(". "); //получаю массив элементов из предложений (word)
    //myText.value = words.map(word => word[0].toUpperCase() + word.substring(1)).join(". ");
    myText.value = words.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(". ");
    //для каждого элемента (предложения) берем первый знак (букву) и добавляем остальные знаки, начиная со второго
});
butSave.addEventListener("click", function() {
        let element = document.createElement('a'); //создаем новый тег "a" - гиперссылка
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(myText.value));
        element.setAttribute('download', "text.txt");
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    // текст сохранаяется в файл Save_file.txt
});


