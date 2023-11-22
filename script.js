//CHOICE ID
let fruit = document.getElementById("Fruit");
let vegetable = document.getElementById("Vegetable");

    //TITLES IMAGE ID - FRUIT
    let Tpineapple = document.getElementById("Titlepineapple");
    let Torange = document.getElementById("Titleorange");
    let Twatermelon = document.getElementById("Titlewatermelon");
    let Tbanana = document.getElementById("Titlebanana");
    let Tgrape = document.getElementById("Titlegrape");
    let Tcherry = document.getElementById("Titlecherry");
    let Tpomegranate = document.getElementById("Titlepomegranate");
    let Tgrapefruit = document.getElementById("Titlegrapefruit");
    let Tpear = document.getElementById("Titlepear");
    let Tmelon = document.getElementById("Titlemelon");
    let Tkiwi = document.getElementById("Titlekiwi");
    let Tcocoon = document.getElementById("Titlecocoon");
    let Tcoconut = document.getElementById("Titlecoconut");
    let Tlime = document.getElementById("Titlelime");
    let Tlemon = document.getElementById("Titlelemon");

//STANDART POSSITION
fruit.style.backgroundColor = "rgba(0,0,0, 0.80)";
fruit.style.borderRadius = "20px";
fruit.style.padding = "5px 30px";
fruit.style.boxShadow = "rgba(0,0,0, 0.50) 0px 4px 2px 0px";
fruit.style.color = "rgb(255, 235, 116)";

//EVENT ONCLICK FRUIT
fruit.onclick = function () {
    fruit.style.backgroundColor = "rgba(0,0,0, 0.80)";
    fruit.style.borderRadius = " 20px";
    fruit.style.padding = "5px 30px";
    fruit.style.boxShadow = "rgba(0,0,0, 0.50) 0px 4px 2px 0px";
    fruit.style.color = "rgb(255, 235, 116)";

    vegetable.style.backgroundColor = "rgba(0,0,0, 0.0)";
    vegetable.style.borderRadius = " 0px";
    vegetable.style.padding = "0px 0px";
    vegetable.style.boxShadow = "rgba(0,0,0, 0.0) 0px 0px 0px 0px";
    vegetable.style.color = "black";

    //IMAGES ID - FRUIT SRC 
    let pineapple = document.getElementById("pineapple").src = "Images/pineapple.jpg";
    let orange = document.getElementById("orange").src = "Images/orange.jpg";
    let watermelon = document.getElementById("watermelon").src = "Images/watermelon.jpg";
    let banana = document.getElementById("banana").src = "Images/banana.jpg";
    let grape = document.getElementById("grape").src = "Images/grape.jpg";
    let cherry = document.getElementById("cherry").src = "Images/cherry.jpg";
    let pomegranate = document.getElementById("pomegranate").src = "Images/pomegranate.jpg";
    let grapefruit = document.getElementById("grapefruit").src = "Images/grapefruit.jpg";
    let pear = document.getElementById("pear").src = "Images/pear.jpg";
    let melon = document.getElementById("melon").src = "Images/melon.jpg";
    let kiwi = document.getElementById("kiwi").src = "Images/kiwi.jpg";
    let cocoon = document.getElementById("cocoon").src = "Images/cocoon.jpg";
    let coconut = document.getElementById("coconut").src = "Images/coconut.jpg";
    let lime = document.getElementById("lime").src = "Images/lime.jpg";
    let lemon = document.getElementById("lemon").src = "Images/lemon.jpg";

    //TITLES IMAGE ID - FRUIT
     Tpineapple.textContent = "Ананас";
     Torange.textContent = "Апельсин";
     Twatermelon.textContent = "Арбуз";
     Tbanana.textContent = "Банан";
     Tgrape.textContent = "Виноград";
     Tcherry.textContent = "Вишня";
     Tpomegranate.textContent = "Гранат";
     Tgrapefruit.textContent = "Грейпфрукт";
     Tpear.textContent = "Груша";
     Tmelon.textContent = "Дыня";
     Tkiwi.textContent = "Киви";
     Tcocoon.textContent = "Кокона";
     Tcoconut.textContent = "Кокос";
     Tlime.textContent = "Лайм";
     Tlemon.textContent = "Лимон";
}
//EVENT ONCLICK VEGETABLE
vegetable.onclick = function () {
    vegetable.style.backgroundColor = "rgba(0,0,0, 0.80)";
    vegetable.style.borderRadius = "20px";
    vegetable.style.padding = "5px 30px";
    vegetable.style.boxShadow = "rgba(0,0,0, 0.50) 0px 4px 2px 0px";
    vegetable.style.color = "rgb(255, 235, 116)";

    fruit.style.backgroundColor = "rgba(0,0,0, 0.0)";
    fruit.style.borderRadius = " 0px";
    fruit.style.padding = "0px 0px";
    fruit.style.boxShadow = "rgba(0,0,0, 0.0) 0px 0px 0px 0px";
    fruit.style.color = "black";

    //IMAGES ID - VEGETABLE SRC 
    pineapple = document.getElementById("pineapple").src = "Images/peas.jpg";
    orange = document.getElementById("orange").src = "Images/zucchini.jpg";
    watermelon = document.getElementById("watermelon").src = "Images/cabbage.jpg";
    banana = document.getElementById("banana").src = "Images/potato.jpg";
    grape = document.getElementById("grape").src = "Images/corn.jpg";
    cherry = document.getElementById("cherry").src = "Images/lettuce.jpg";
    pomegranate = document.getElementById("pomegranate").src = "Images/onion.jpg";
    grapefruit = document.getElementById("grapefruit").src = "Images/carrot.jpg";
    pear = document.getElementById("pear").src = "Images/cucumber.jpg";
    melon = document.getElementById("melon").src = "Images/radish.jpg";
    kiwi = document.getElementById("kiwi").src = "Images/turnip.jpg";
    cocoon = document.getElementById("cocoon").src = "Images/beet.jpg";
    coconut = document.getElementById("coconut").src = "Images/celery.jpg";
    lime = document.getElementById("lime").src = "Images/tomato.jpg";
    lemon = document.getElementById("lemon").src = "Images/pumpkin.jpg";

    //TITLES IMAGE ID - VEGETABLE
    Tpineapple.textContent = "Горох";
    Torange.textContent = "Кабачок";
    Twatermelon.textContent = "Капуста";
    Tbanana.textContent = "Картошка";
    Tgrape.textContent = "Кукуруза";
    Tcherry.textContent = "Латук";
    Tpomegranate.textContent = "Лук";
    Tgrapefruit.textContent = "Морковь";
    Tpear.textContent = "Огурец";
    Tmelon.textContent = "Редис";
    Tkiwi.textContent = "Репа";
    Tcocoon.textContent = "Свекла";
    Tcoconut.textContent = "Сильдерей";
    Tlime.textContent = "Помидор";
    Tlemon.textContent = "Тыква";

}

//EVENT MOUSEOVER FRUIT
fruit.addEventListener("mouseover", function () {
    fruit.style.boxShadow = "rgba(0,0,0, 0.50) 0px 4px 2px 2px";
    if (vegetable.style.borderRadius === "20px") {
        fruit.style.boxShadow = "rgba(0,0,0, 0.0) 0px 0px 0px 0px";
    }
    if (fruit.style.borderRadius === "20px") {
        vegetable.style.boxShadow = "rgba(0,0,0, 0.0) 0px 0px 0px 0px";
    }
});
//EVENT MOUSEOUT FRUIT
fruit.addEventListener("mouseout", function () {
    fruit.style.boxShadow = "rgba(0,0,0, 0.50) 0px 4px 2px 0px";
    if (fruit.style.borderRadius === "20px") {
        vegetable.style.boxShadow = "rgba(0,0,0, 0.0) 0px 0px 0px 0px";
    }
    if (vegetable.style.borderRadius === "20px") {
        fruit.style.boxShadow = "rgba(0,0,0, 0.0) 0px 0px 0px 0px";
    }
});
//EVENT MOUSEOVER VEGETABLE
vegetable.addEventListener("mouseover", function () {
    vegetable.style.boxShadow = "rgba(0,0,0, 0.50) 0px 4px 2px 2px";
    if (vegetable.style.borderRadius === "20px") {
        fruit.style.boxShadow = "rgba(0,0,0, 0.0) 0px 0px 0px 0px";
    }
    if (fruit.style.borderRadius === "20px") {
        vegetable.style.boxShadow = "rgba(0,0,0, 0.0) 0px 0px 0px 0px";
    }
});
//EVENT MOUSEOUT VEGETABLE
vegetable.addEventListener("mouseout", function () {
    vegetable.style.boxShadow = "rgba(0,0,0, 0.50) 0px 4px 2px 0px";
    if (vegetable.style.borderRadius === "20px") {
        fruit.style.boxShadow = "rgba(0,0,0, 0.0) 0px 0px 0px 0px";
    }
    if (fruit.style.borderRadius === "20px") {
        vegetable.style.boxShadow = "rgba(0,0,0, 0.0) 0px 0px 0px 0px";
    }
});
