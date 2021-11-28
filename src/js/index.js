$(document).ready(function() {
    $('a[href^="#"]').click(function () {
    let valHref = $(this).attr("href");
    $('html, body').animate({scrollTop: $(valHref).offset().top - 60 + "px"})
});
})

 

/*alert("Для расчёта цены сайта выберите нужные вам пункты.");

let siteType = prompt('Выберите из предложенных нужный вам тип сайта и напишите его номер:\n1 - Сайт-визитка (+1000 рублей и +3 дня)\n2 - Корпоративный сайт (+2000 рублей и +7 дня)\n3 - Интернет магазин (+4000 рублей и +14 дня)\n4 - Блог (+1000 рублей и +3 дня).', "");

let siteDesign = prompt('Выберите из предложенных нужный вам дизайн сайта и напишите его номер:\n1 - Индивидуальный (+3000 рублей и +3 дня)\n2 - По макету (+1000 рублей и +2 дня)\n3 - Копирайт (+4000 рублей и +5 дня).', "");

let siteAdaptive = prompt('Выберите из предложенных нужную вам адаптивность сайта и напишите её номер:\n1 - Полная (+3000 рублей и +4 дня)\n2 - Только ПК (+1000 рублей и +1 дня)\n3 - Только смартфоны (+2000 рублей и +2 дня).', "");

let priceResult = +0;

let timeResult = +0;


function calcPrice() {

    let sitePrice = [
        ["1000", "2000", "4000", "1000"],
        ["3000", "1000", "4000"],
        ["3000", "1000", "2000"],
    ]
    let siteDate = [
        ["3", "7", "14", "3"],
        ["3", "2", "5"],
        ["4", "1", "2"],
    ]

    if (siteType == 1) {
        priceResult = priceResult + +sitePrice[0][0];
        timeResult = timeResult + +siteDate[0][0];
    } else {
        if (siteType == 2) {
            priceResult = priceResult + +sitePrice[0][1];
            timeResult = timeResult + +siteDate[0][1];
        } else {
            if (siteType == 3) {
                priceResult = priceResult + +sitePrice[0][2];
                timeResult = timeResult + +siteDate[0][2];
            } else {
                if (siteType == 4) {
                    priceResult = priceResult + +sitePrice[0][3];
                    timeResult = timeResult + +siteDate[0][3];
                }
            }
        }
    }

    if (siteDesign == 1) {
        priceResult = priceResult + +sitePrice[1][0];
        timeResult = timeResult + +siteDate[1][0];
    } else {
        if (siteDesign == 2) {
            priceResult = priceResult + +sitePrice[1][1];
            timeResult = timeResult + +siteDate[1][1];
        } else {
            if (siteDesign == 3) {
                priceResult = priceResult + +sitePrice[1][2];
                timeResult = timeResult + +siteDate[1][2];
            }
        }
    }

    if (siteAdaptive == 1) {
        priceResult = priceResult + +sitePrice[2][0];
        timeResult = timeResult + +siteDate[2][0];
    } else {
        if (siteAdaptive == 2) {
            priceResult = priceResult + +sitePrice[2][1];
            timeResult = timeResult + +siteDate[2][1];
        } else {
            if (siteAdaptive == 3) {
                priceResult = priceResult + +sitePrice[2][2];
                timeResult = timeResult + +siteDate[2][2];
            }
        }
    }


}

calcPrice();

alert(`Сроки выполнения и цена  вашего сайте: ${timeResult} дней и ${priceResult} рублей.`);*/

