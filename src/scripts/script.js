const arr=[]
function read () {
    arr.push("Не трать еще один год на то же самое")
    arr.push("Любая трудность на вашем пути - это возможность чему-то научиться и стать лучше.")
    arr.push("Мечты не работают, пока не работаешь ТЫ.")
    arr.push("Вот тебе чувство причина любого искусства")
    arr.push("ПРОШЛАЯ ВЕРСИЯ ТЕБЯ ГОРДИТСЯ ТЕМ, КАК ТЫ СПРАВЛЯЕШЬСЯ")
    arr.push("НЕ СРАВНИВАЙ СВОЕ НАЧАЛО С ЧЬЕЙ-ТО СЕРЕДИНОЙ")
    arr.push("Сейчас не начнешь через год пожалеешь")
    arr.push("Трудись тихо. Пусть успех будет шумом.")
    arr.push("Все, что тебе нужно - верить в себя")
}

var delay = 7000;
var mess = 0;

function change_mess() {
    if (mess>=arr.length) mess = 0;
    document.getElementById("mess__box").innerHTML = arr[mess];
    mess++;
    setTimeout("change_mess()", delay);
}

read();
change_mess();
