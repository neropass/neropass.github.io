$(document).ready(function () {

    $(window).scroll(() => {
        let scrollDistance = $(window).scrollTop();

        $(".section").each((i, el) => {

            if ($(el).offset().top - $("nav").outerHeight() <= scrollDistance) {
                $("nav a").each((i, el) => {
                    if ($(el).hasClass("active__btn")) {
                        $(el).removeClass("active__btn");
                    }
                });

                $('nav li:eq(' + i + ')').find('a').addClass('active__btn');
            }
        });
    });

    $('a[href^="#"]').click(function () {
        let valHref = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(valHref).offset().top - 60 + "px"
        });
    });



    document.querySelector('.site').addEventListener("change", requests);
    document.querySelector('.design').addEventListener("change", requests);
    document.querySelector('.adapt').addEventListener("change", requests);

    function requests() {

        let sitePrice = [
            ["1000", "2000", "4000", "1000"],
            ["3000", "1000", "4000"],
            ["3000", "1000", "2000"],
        ];

        let siteDate = [
            ["3", "7", "14", "3"],
            ["3", "2", "5"],
            ["4", "1", "2"],
        ];

        let priceResult = +0;

        let timeResult = +0;

        if ($("#site").val() == 0) {
            priceResult = priceResult + +0;
            timeResult = timeResult + +0;

        } else {
            if ($("#site").val() == 1) {
                priceResult = priceResult + +sitePrice[0][0];
                timeResult = timeResult + +siteDate[0][0];

            } else {
                if ($("#site").val() == 2) {
                    priceResult = priceResult + +sitePrice[0][1];
                    timeResult = timeResult + +siteDate[0][1];

                } else {
                    if ($("#site").val() == 3) {
                        priceResult = priceResult + +sitePrice[0][2];
                        timeResult = timeResult + +siteDate[0][2];

                    } else {
                        if ($("#site").val() == 4) {
                            priceResult = priceResult + +sitePrice[0][3];
                            timeResult = timeResult + +siteDate[0][3];

                        };
                    };
                };
            };
        };

        if ($("#design").val() == 0) {
            priceResult = priceResult + +0;
            timeResult = timeResult + +0;

        } else {
            if ($("#design").val() == 1) {
                priceResult = priceResult + +sitePrice[0][0];
                timeResult = timeResult + +siteDate[0][0];

            } else {
                if ($("#design").val() == 2) {
                    priceResult = priceResult + +sitePrice[0][1];
                    timeResult = timeResult + +siteDate[0][1];

                } else {
                    if ($("#design").val() == 3) {
                        priceResult = priceResult + +sitePrice[0][2];
                        timeResult = timeResult + +siteDate[0][2];

                    };
                };
            };
        };


        if ($("#adapt").val() == 0) {
            priceResult = priceResult + +0;
            timeResult = timeResult + +0;

        } else {
            if ($("#adapt").val() == 1) {
                priceResult = priceResult + +sitePrice[0][0];
                timeResult = timeResult + +siteDate[0][0];

            } else {
                if ($("#adapt").val() == 2) {
                    priceResult = priceResult + +sitePrice[0][1];
                    timeResult = timeResult + +siteDate[0][1];

                } else {
                    if ($("#adapt").val() == 3) {
                        priceResult = priceResult + +sitePrice[0][2];
                        timeResult = timeResult + +siteDate[0][2];

                    };
                };
            };
        };

        $('#site__date').text(`${timeResult}`);
        $('#site__price').text(`${priceResult}`);
    };

    requests();

    // Get the modal
    let modal1 = document.getElementById("case_modal1");
    let modal2 = document.getElementById("case_modal2");
    let modal3 = document.getElementById("case_modal3");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    let img1 = document.getElementById("case__image1");
    let img2 = document.getElementById("case__image2");
    let img3 = document.getElementById("case__image3");
    let modalImg1 = document.getElementById("img01");
    let modalImg2 = document.getElementById("img02");
    let modalImg3 = document.getElementById("img03");
    let captionText1 = document.getElementById("caption1");
    let captionText2 = document.getElementById("caption2");
    let captionText3 = document.getElementById("caption3");
    img1.onclick = function () {
        modal1.style.display = "block";
        modalImg1.src = this.src;
        captionText1.innerHTML = 'Первый проект';
    }
    img2.onclick = function () {
        modal2.style.display = "block";
        modalImg2.src = this.src;
        captionText2.innerHTML = 'Второй проект';
    }
    img3.onclick = function () {
        modal3.style.display = "block";
        modalImg3.src = this.src;
        captionText3.innerHTML = 'Третий проект';
    }

    // Get the <span> element that closes the modal
    let span1 = document.getElementsByClassName("close1")[0];
    let span2 = document.getElementsByClassName("close2")[0];
    let span3 = document.getElementsByClassName("close3")[0];

    // When the user clicks on <span> (x), close the modal
    span1.onclick = function () {
        modal1.style.display = "none";
    };
    span2.onclick = function () {
        modal2.style.display = "none";
    };
    span3.onclick = function () {
        modal3.style.display = "none";
    };


    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function first(event) {
        if (event.target == modal1) {
            modal1.style.display = "none";
        }
        if (event.target == modal2) {
            modal2.style.display = "none";
        }
        if (event.target == modal3) {
            modal3.style.display = "none";
        }
    };

    $(window).scroll(function () {
        if ($(window).scrollTop() >= ($('.calc__sub').position().top - $(window).height()) && $("#modal__popup").attr("displayed") === "false") {
            $('#modal__popup').modal('show');
            $("#modal__popup").attr("displayed", "true");
        }
    });


    $(function () {

        let target_block1 = $(".client__number"); // Ищем блок 
        let blockStatus = true;

        $(window).scroll(function () {

            let scrollEvent1 = ($(window).scrollTop() > (target_block1.position().top - $(window).height()));

            if (scrollEvent1 && blockStatus) {
                blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.
                $({
                    numberValue: 0
                }).animate({
                    numberValue: 120
                }, {
                    duration: 1050,
                    easing: "linear",
                    step: function (val) {
                        $(".client__number").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
                    }
                });
            }

        });

    });

    $(function () {

        let target_block2 = $(".hours__number");
        let blockStatus = true;

        $(window).scroll(function () {

            let scrollEvent2 = ($(window).scrollTop() > (target_block2.position().top - $(window).height()));

            if (scrollEvent2 && blockStatus) {
                blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.
                $({
                    numberValue: 0
                }).animate({
                    numberValue: 4600
                }, {
                    duration: 1050,
                    easing: "linear",
                    step: function (val) {
                        $(".hours__number").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
                    }
                });
            }

        });

    });

    $(function () {

        let target_block3 = $(".projects__number");
        let blockStatus = true;

        $(window).scroll(function () {

            let scrollEvent3 = ($(window).scrollTop() > (target_block3.position().top - $(window).height()));

            if (scrollEvent3 && blockStatus) {
                blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.
                $({
                    numberValue: 0
                }).animate({
                    numberValue: 340
                }, {
                    duration: 1050,
                    easing: "linear",
                    step: function (val) {
                        $(".projects__number").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
                    }
                });
            }

        });

    });

    $(function () {

        let target_block4 = $(".rewards__number");
        let blockStatus = true;

        $(window).scroll(function () {

            let scrollEvent4 = ($(window).scrollTop() > (target_block4.position().top - $(window).height()));

            if (scrollEvent4 && blockStatus) {
                blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.
                $({
                    numberValue: 0
                }).animate({
                    numberValue: 23
                }, {
                    duration: 1050, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд 
                    easing: "linear",
                    step: function (val) {
                        $(".rewards__number").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
                    }
                });
            }

        });

    });

    // конфиг: rootMargin и порог срабатывания
    // два свойства, представленные интерфейсом
    const config = {
        rootMargin: '0px 0px 50px 0px',
        threshold: 0
    };

    function preloadImage() {
        $('body').find("img").each(function() {   
            $(this).attr("src",$(this).attr("data-src"));
            $(this).removeAttr("data-src");
            //console.log($(this)[0].outerHTML);
        });
    };

    // регистрируем config с экземпляром
    // intersectionObserver
    let observer = new IntersectionObserver(function (entries, self) {
        // перебираем записи
        entries.forEach(entry => {
            // обрабатывать только изображения, которые пересекают
            // isIntersecting - это свойство предоставляется интерфейсом
            if (entry.isIntersecting) {
                // функция, которая копирует путь к IMG
                // из data-src в src
                preloadImage(entry.target);
                // изображение теперь на месте, прекращаем наблюдение
                self.unobserve(entry.target);
            }
        });
    }, config);

    const imgs = document.querySelectorAll('[data-src]');
    imgs.forEach(img => {
        observer.observe(img);
    });

});