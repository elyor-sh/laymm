"use strict"


let mapDropdown = document.querySelector('.map__dropdown');
if (mapDropdown) {
    mapDropdown.addEventListener("click", function(e) {
        let dropdownBlock = document.querySelector('.map__dropdown-block');
        dropdownBlock.classList.toggle('_active');
        e.preventDefault();
    })
}

window.addEventListener("resize", removeClassList);

const subMenuLinkActive = document.querySelector('.header__submenu-link__active');
const headerBasketActive = document.querySelector('.header__basket-active');
if (subMenuLinkActive.classList.contains('_active')) {
    removeClassList();
}

function removeClassList() {
    if (window.innerWidth < 450) {
        subMenuLinkActive.classList.remove('_active');
        headerBasketActive.classList.remove('_active');
    } else {
        subMenuLinkActive.classList.add('_active');
        headerBasketActive.classList.add('_active');
    }

}

const subMenuLink = document.querySelectorAll('.header__submenu-link');
const subMenuBlock = document.querySelectorAll('.header__submenu-block');
if (subMenuLink.length > 0 && subMenuBlock.length > 0) {
    for (let i = 0; i < subMenuLink.length; i++) {
        subMenuLink[i].addEventListener("click", function(e) {
            subMenuLink[i].classList.toggle('_active');
            if (subMenuLink[i].classList.contains('_active')) {
                Array.from(subMenuLink).forEach(item => {
                    item.classList.remove('_active')
                })
                subMenuLink[i].classList.toggle('_active');
                Array.from(subMenuBlock).forEach(item => {
                    item.classList.remove('_active')
                })
                subMenuBlock[i].classList.add('_active');
            }
            if (!subMenuLink[i].classList.contains('_active')) {
                Array.from(subMenuLink).forEach(item => {
                    item.classList.remove('_active')
                })
                subMenuLink[i].classList.remove('_active');
                Array.from(subMenuBlock).forEach(item => {
                    item.classList.remove('_active')
                })
                subMenuBlock[i].classList.remove('_active');
            }



            e.preventDefault();
        })
    }
}



const catalogLink = document.querySelector('.catalog__main-link');
if (catalogLink) {
    catalogLink.addEventListener("click", function(e) {
        let catalogDropdownMenu = document.querySelector('.catalog__dropdown-menu');
        catalogDropdownMenu.classList.toggle('_active');
        let wrapper = document.querySelectorAll('.wrapper');
        if (catalogDropdownMenu.classList.contains('_active') == false) {
            for (let i = 0; i < wrapper.length; i++) {
                wrapper[i].classList.remove('_lock');
            }

        }
        if (catalogDropdownMenu.classList.contains('_active')) {
            for (let i = 0; i < wrapper.length; i++) {
                wrapper[i].classList.add('_lock');
            }
        }
        e.preventDefault();
    })
}


const productsCatalog = document.querySelectorAll('.dropdown__products-catalog');
if (productsCatalog.length > 0) {
    const dropdownProducts = document.querySelectorAll('.dropdown__products');
    for (let i = 0; i < productsCatalog.length; i++) {
        productsCatalog[i].addEventListener("click", function(e) {
            dropdownProducts[i].classList.toggle('_active');
            productsCatalog[i].classList.toggle('_active');

            if (productsCatalog[i].classList.contains('_active')) {
                Array.from(dropdownProducts).forEach(item => {
                    item.classList.remove('_active');
                    dropdownProducts[i].classList.add('_active');
                })
            } else {
                Array.from(dropdownProducts).forEach(item => {
                    item.classList.remove('_active');
                    dropdownProducts[i].classList.remove('_active');
                })
            }

            e.preventDefault();
        })

    }
}


const swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        checkable: true,
    },
    spaceBetween: 15,
    simulateTouch: false,
    breakpoints: {
        320: {
            pagination: {
                el: '',

            },
            simulateTouch: true,

            autoplay: {
                delay: 1000,
            },
            effect: 'fade',

        }
    }
});

let slideShowNext1 = document.querySelector('.slide__show-next-1');
let slideShowNext2 = document.querySelector('.slide__show-next-2');


const buttonPrev = document.querySelector('.slide__button-prev');
const buttonNext = document.querySelector('.slide__button-next');

buttonPrev.addEventListener("click", function() {
    if (slideShowNext1 && slideShowNext2) {
        let swiperSlide = document.querySelectorAll('.slider-show-next');

        for (let i = 0; i < swiperSlide.length; i++) {
            if (swiperSlide[i].classList.contains('swiper-slide-active') && i == swiperSlide.length - 2) {
                slideShowNext1.innerHTML = swiperSlide[i + 1].innerHTML;
                slideShowNext2.innerHTML = swiperSlide[0].innerHTML;
                if (i % 3 == 0) {
                    slideShowNext1.childNodes[1].style.cssText = `background: linear-gradient(90deg, #1A2980 0%, #26D0CE 100%);`;
                    slideShowNext2.childNodes[1].style.cssText = ` background: linear-gradient(90deg, #C21500 0%, #FFC500 100%);`;
                }
                if (i % 3 == 1) {
                    slideShowNext1.childNodes[1].style.cssText = ` background: linear-gradient(90deg, #C21500 0%, #FFC500 100%);`;
                    slideShowNext2.childNodes[1].style.cssText = ` background: linear-gradient(90deg, #E53935 0%, #E35D5B 100%);`;
                }
                if (i % 3 == 2) {
                    slideShowNext1.childNodes[1].style.cssText = ` background: linear-gradient(90deg, #E53935 0%, #E35D5B 100%);`;
                    slideShowNext2.childNodes[1].style.cssText = `background: linear-gradient(90deg, #1A2980 0%, #26D0CE 100%);`;
                }
                return;
            }
            if (swiperSlide[i].classList.contains('swiper-slide-active') && i == swiperSlide.length - 1) {
                slideShowNext1.innerHTML = swiperSlide[i + 1].innerHTML;
                slideShowNext2.innerHTML = swiperSlide[1].innerHTML;
                if (i % 3 == 0) {
                    slideShowNext1.childNodes[1].style.cssText = `background: linear-gradient(90deg, #1A2980 0%, #26D0CE 100%);`;
                    slideShowNext2.childNodes[1].style.cssText = ` background: linear-gradient(90deg, #C21500 0%, #FFC500 100%);`;
                }
                if (i % 3 == 1) {
                    slideShowNext1.childNodes[1].style.cssText = ` background: linear-gradient(90deg, #C21500 0%, #FFC500 100%);`;
                    slideShowNext2.childNodes[1].style.cssText = ` background: linear-gradient(90deg, #E53935 0%, #E35D5B 100%);`;
                }
                if (i % 3 == 2) {
                    slideShowNext1.childNodes[1].style.cssText = ` background: linear-gradient(90deg, #E53935 0%, #E35D5B 100%);`;
                    slideShowNext2.childNodes[1].style.cssText = `background: linear-gradient(90deg, #1A2980 0%, #26D0CE 100%);`;
                }
                return;
            }
            if (swiperSlide[i].classList.contains('swiper-slide-active')) {
                slideShowNext1.innerHTML = swiperSlide[i + 1].innerHTML;
                slideShowNext2.innerHTML = swiperSlide[i + 2].innerHTML;
                if (i % 3 == 0) {
                    slideShowNext1.childNodes[1].style.cssText = `background: linear-gradient(90deg, #1A2980 0%, #26D0CE 100%);`;
                    slideShowNext2.childNodes[1].style.cssText = ` background: linear-gradient(90deg, #C21500 0%, #FFC500 100%);`;
                }
                if (i % 3 == 1) {
                    slideShowNext1.childNodes[1].style.cssText = ` background: linear-gradient(90deg, #C21500 0%, #FFC500 100%);`;
                    slideShowNext2.childNodes[1].style.cssText = ` background: linear-gradient(90deg, #E53935 0%, #E35D5B 100%);`;
                }
                if (i % 3 == 2) {
                    slideShowNext1.childNodes[1].style.cssText = ` background: linear-gradient(90deg, #E53935 0%, #E35D5B 100%);`;
                    slideShowNext2.childNodes[1].style.cssText = `background: linear-gradient(90deg, #1A2980 0%, #26D0CE 100%);`;
                }
            }
        }
    }
});

buttonNext.addEventListener("click", function() {
    if (slideShowNext1 && slideShowNext2) {
        let swiperSlide = document.querySelectorAll('.slider-show-next');
        for (let i = 0; i < swiperSlide.length; i++) {
            if (swiperSlide[i].classList.contains('swiper-slide-active') && i == swiperSlide.length - 2) {
                slideShowNext1.innerHTML = swiperSlide[i + 1].innerHTML;
                slideShowNext2.innerHTML = swiperSlide[0].innerHTML;
                if (i % 3 == 0) {
                    slideShowNext1.childNodes[1].style.cssText = `background: linear-gradient(90deg, #1A2980 0%, #26D0CE 100%);`;
                    slideShowNext2.childNodes[1].style.cssText = ` background: linear-gradient(90deg, #C21500 0%, #FFC500 100%);`;
                }
                if (i % 3 == 1) {
                    slideShowNext1.childNodes[1].style.cssText = ` background: linear-gradient(90deg, #C21500 0%, #FFC500 100%);`;
                    slideShowNext2.childNodes[1].style.cssText = ` background: linear-gradient(90deg, #E53935 0%, #E35D5B 100%);`;
                }
                if (i % 3 == 2) {
                    slideShowNext1.childNodes[1].style.cssText = ` background: linear-gradient(90deg, #E53935 0%, #E35D5B 100%);`;
                    slideShowNext2.childNodes[1].style.cssText = `background: linear-gradient(90deg, #1A2980 0%, #26D0CE 100%);`;
                }
                return;
            }
            if (swiperSlide[i].classList.contains('swiper-slide-active') && i == swiperSlide.length - 1) {
                slideShowNext1.innerHTML = swiperSlide[0].innerHTML;
                slideShowNext2.innerHTML = swiperSlide[1].innerHTML;
                if (i % 3 == 0) {
                    slideShowNext1.childNodes[1].style.cssText = `background: linear-gradient(90deg, #1A2980 0%, #26D0CE 100%);`;
                    slideShowNext2.childNodes[1].style.cssText = ` background: linear-gradient(90deg, #C21500 0%, #FFC500 100%);`;
                }
                if (i % 3 == 1) {
                    slideShowNext1.childNodes[1].style.cssText = ` background: linear-gradient(90deg, #C21500 0%, #FFC500 100%);`;
                    slideShowNext2.childNodes[1].style.cssText = ` background: linear-gradient(90deg, #E53935 0%, #E35D5B 100%);`;
                }
                if (i % 3 == 2) {
                    slideShowNext1.childNodes[1].style.cssText = ` background: linear-gradient(90deg, #E53935 0%, #E35D5B 100%);`;
                    slideShowNext2.childNodes[1].style.cssText = `background: linear-gradient(90deg, #1A2980 0%, #26D0CE 100%);`;
                }
                return;

            }
            if (swiperSlide[i].classList.contains('swiper-slide-active')) {
                slideShowNext1.innerHTML = swiperSlide[i + 1].innerHTML;
                slideShowNext2.innerHTML = swiperSlide[i + 2].innerHTML;

                if (i % 3 == 0) {
                    slideShowNext1.childNodes[1].style.cssText = `background: linear-gradient(90deg, #1A2980 0%, #26D0CE 100%);`;
                    slideShowNext2.childNodes[1].style.cssText = ` background: linear-gradient(90deg, #C21500 0%, #FFC500 100%);`;
                }
                if (i % 3 == 1) {
                    slideShowNext1.childNodes[1].style.cssText = ` background: linear-gradient(90deg, #C21500 0%, #FFC500 100%);`;
                    slideShowNext2.childNodes[1].style.cssText = ` background: linear-gradient(90deg, #E53935 0%, #E35D5B 100%);`;
                }
                if (i % 3 == 2) {
                    slideShowNext1.childNodes[1].style.cssText = ` background: linear-gradient(90deg, #E53935 0%, #E35D5B 100%);`;
                    slideShowNext2.childNodes[1].style.cssText = `background: linear-gradient(90deg, #1A2980 0%, #26D0CE 100%);`;
                }



            }
        }
    }
});

let newsItemLink = document.querySelectorAll('.news__item-link');
if (newsItemLink.length > 0) {
    for (let i = 0; i < newsItemLink.length; i++) {
        let newsItemInfo = document.querySelectorAll('.news__item-info');
        newsItemLink[i].addEventListener("click", function(e) {

            Array.from(newsItemInfo).forEach(item => {
                item.classList.remove('_more');
            })
            newsItemInfo[i].classList.add('_more');
            Array.from(newsItemLink).forEach(item => {
                item.textContent = 'Читать дальше';
                item.style.opacity = '0.5';
            })
            if (newsItemInfo[i].classList.contains('_more')) {
                newsItemLink[i].textContent = 'Скрыть';
                newsItemLink[i].style.opacity = '1';
            }
            e.preventDefault();
        })
        newsItemLink[i].addEventListener("dblclick", function(e) {
            Array.from(newsItemInfo).forEach(item => {
                item.classList.remove('_more');
            })
            Array.from(newsItemLink).forEach(item => {
                item.textContent = 'Читать дальше';
                item.style.opacity = '0.5';
            })
        })
    }
}

const promotionSwiper = new Swiper('.promotion__container', {
    navigation: {
        nextEl: '.item__button-next',
        prevEl: '.item__button-prev',
    },
    slidesPerView: 6,
    slidesPerGroup: 1,
    loop: true,
    spaceBetween: 12,
    breakpoints: {
        992: {
            slidesPerView: 5,
        },
        768: {
            slidesPerView: 4,
        },
        576: {
            slidesPerView: 3,
        },
        320: {
            slidesPerView: 2,
        }
    }
});

const noveltySwiper = new Swiper('.novelty__container', {
    navigation: {
        nextEl: '.item__button-next',
        prevEl: '.item__button-prev',
    },
    slidesPerView: 6,
    slidesPerGroup: 1,
    loop: true,
    spaceBetween: 12,
    breakpoints: {
        992: {
            slidesPerView: 5,
        },
        768: {
            slidesPerView: 4,
        },
        576: {
            slidesPerView: 3,
        },
        320: {
            slidesPerView: 2,
        }
    }
});

const vegetarianSwiper = new Swiper('.vegetarian__container', {
    navigation: {
        nextEl: '.item__button-next',
        prevEl: '.item__button-prev',
    },
    slidesPerView: 6,
    slidesPerGroup: 1,
    loop: true,
    spaceBetween: 12,
    breakpoints: {
        992: {
            slidesPerView: 5,
        },
        768: {
            slidesPerView: 4,
        },
        576: {
            slidesPerView: 3,
        },
        320: {
            slidesPerView: 2,
        }
    }
});

const popularSwiper = new Swiper('.popular__container', {
    navigation: {
        nextEl: '.item__button-next',
        prevEl: '.item__button-prev',
    },
    slidesPerView: 6,
    slidesPerGroup: 1,
    loop: true,
    spaceBetween: 12,
    breakpoints: {
        992: {
            slidesPerView: 5,
        },
        768: {
            slidesPerView: 4,
        },
        576: {
            slidesPerView: 3,
        },
        320: {
            slidesPerView: 2,
        }
    }
});

const recieptSwiper = new Swiper('.main__receipt-slider__container', {
    navigation: {
        nextEl: '.item__button-next',
        prevEl: '.item__button-prev',
    },
    slidesPerView: 2.3,
    slidesPerGroup: 1,
    loop: true,
    spaceBetween: 12,
    breakpoints: {
        992: {
            slidesPerView: 2.3,
        },
        880: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 1.6,
        },
        576: {
            slidesPerView: 2,
        },
        420: {
            slidesPerView: 1.3,
            centeredSlides: true,
        },
        380: {
            slidesPerView: 1.2,
            centeredSlides: true,

        },
        350: {
            slidesPerView: 1.1,
            centeredSlides: true,

        },
        319: {
            slidesPerView: 1.03,
            centeredSlides: true,

        },


    }
});

const reviewsSwiper = new Swiper('.reviews__slider-container', {
    navigation: {
        nextEl: '.item__button-next',

    },
    slidesPerView: 4,
    slidesPerGroup: 1,
    loop: true,
    breakpoints: {

        768: {
            slidesPerView: 3,
        },
        576: {
            slidesPerView: 2,
        },
        320: {
            slidesPerView: 2,
            spaceBetween: 10,
        }
    }
});


const baskets = document.querySelectorAll('.baskets-row');
let basketContent = document.querySelector('.header__basket');
let orderBox = document.querySelectorAll('.header__submenu-block-order__box');
let itemContent = document.querySelectorAll('.item');
let basketContentNull = document.querySelector('.header__basket-content');
let basketContentNullClone = basketContentNull.cloneNode(true);
let itemCancel;
let indexCancel = 0;

for (let i = 0; i < baskets.length; i++) {

    baskets[i].addEventListener('click', function() {



        if (basketContentNull || basketContentNullClone) {
            basketContentNull.remove();
            basketContentNullClone.remove();
        }



        let itemContentClone = itemContent[i].cloneNode(true);
        itemContentClone.className = '_added';


        itemContentClone.appendChild(document.querySelector('.item-count').cloneNode(true));
        itemContentClone.appendChild(document.querySelector('.item-cancel').cloneNode(true));


        basketContent.appendChild(itemContentClone);
        itemContentClone.classList.add('_added');
        basketContent.classList.add('_checked');
        check();



        itemCancel = document.querySelectorAll('.item-cancel');

        for (let j = 0; j < itemCancel.length; j++) {
            itemCancel[j].addEventListener("click", function() {
                let parentItemCancel = itemCancel[j].parentNode;
                if (basketContent.contains(parentItemCancel)) {
                    parentItemCancel.remove();
                }
                if (basketContent.childNodes.length == 3) {
                    orderBox[0].remove();
                }
                if (basketContent.childNodes.length == 2) {
                    basketContent.appendChild(basketContentNullClone);

                }
                calculateTotalCost();
                calculateCountAllProducts();
                calculateTotalProduct()
            })


        }
        if (basketContent.childNodes.length == 2) {
            basketContent.appendChild(basketContentNullClone);

        }


        // let itemCount = basketContent.querySelectorAll('.item-count');
        // itemCount[itemCount.length - 1].querySelector('.item-number').textContent = 1;


        calculateTotalProduct();
        calculateTotalCost();
        calculateCountAllProducts();


    })
}

function calculateTotalProduct() {
    let itemCount = basketContent.querySelectorAll('.item-count');

    Array.from(itemCount).forEach(item => {
        let itemNumber = 0;
        itemNumber = Number(item.querySelector('.item-number').textContent);
        item.addEventListener('click', function(e) {
            const target = e.target;
            if (target.classList.contains('item-plus')) {

                itemNumber++;
                target.closest('.item-count').querySelector('.item-number').textContent = itemNumber;


                target.closest('._added').querySelector('.price-now').textContent = Number(target.closest('.item-count').querySelector('.item-number').textContent) * Number(target.closest('._added').querySelector('.price-now').dataset.price) + ' руб';
                calculateTotalCost();
                calculateCountAllProducts()
            }
            if (target.classList.contains('item-minus')) {

                if (Number(item.querySelector('.item-number').textContent) > 1) {

                    itemNumber--;
                    target.closest('.item-count').querySelector('.item-number').textContent = itemNumber;

                    target.closest('._added').querySelector('.price-now').textContent = Number(target.closest('.item-count').querySelector('.item-number').textContent) * Number(target.closest('._added').querySelector('.price-now').dataset.price) + ' руб'; + ' руб';

                    calculateTotalCost();
                    calculateCountAllProducts();
                }
            }
        })
    })
}

function calculateTotalCost() {

    let totalCost = 0;

    [...document.querySelectorAll('._added')].forEach(item => {
        totalCost += parseFloat(item.querySelector('.price-now').textContent);
        basketContent.querySelector('.header__submenu-block-order__box-price').textContent = totalCost + ' руб';
    })
}


function check() {

    let n = 0;
    n++;
    if (basketContent.classList.contains('_checked') && n == 1) {
        basketContent.appendChild(orderBox[0]);
    }

}

function calculateCountAllProducts() {

    let count = 0;
    [...document.querySelectorAll('._added')].forEach(item => {
        count += Number(item.querySelector('.item-number').textContent);
    })
    let countAllProducts = basketContent.querySelector('.order__count');
    countAllProducts.textContent = count;

}

let iconHeart = document.querySelectorAll('.item__heart');
let chosenBlock = document.querySelector('.header__chosen-block');
let chosenContentNull = document.querySelector('.header__chosen-content');
let chosenContentNullClone = chosenContentNull.cloneNode(true);
for (let i = 0; i < iconHeart.length; i++) {
    iconHeart[i].addEventListener("click", function() {
        this.classList.toggle('_chosen');

        let chosenItem = iconHeart[i].closest('.item');
        let chosenItemClone = chosenItem.cloneNode(true);
        chosenItemClone.classList = '_chosen-item item';
        chosenItemClone.appendChild(document.querySelector('.item-cancel').cloneNode(true));




        if (chosenBlock || chosenContentNullClone) {
            chosenContentNull.remove();
            chosenContentNullClone.remove();
        }


        if (iconHeart[i].classList.contains('_chosen')) {
            iconHeart[i].setAttribute('data-name', `product-${i}`);
            chosenItemClone.setAttribute('data-name', `product-${i}`);
            chosenBlock.appendChild(chosenItemClone);
        }


        if (!iconHeart[i].classList.contains('_chosen')) {

            removed();

            nullView();

        }

        let itemCancel = chosenBlock.querySelectorAll('.item-cancel');
        [...itemCancel].forEach(item => {
            item.addEventListener("click", function() {
                if (item.closest('._chosen-item').hasAttribute('data-name')) {
                    let attr = item.closest('._chosen-item').getAttribute('data-name');
                    if (item.closest('._chosen-item').getAttribute('data-name') == attr && iconHeart[i].getAttribute('data-name') == attr) {
                        item.closest('._chosen-item').remove();
                        iconHeart[i].classList.remove('_chosen');
                        nullView();
                    }
                }

            })
        })



        function removed() {
            iconHeart[i].removeAttribute('data-name', `product-${i}`);
            for (let k = 0; k < chosenBlock.children.length; k++) {
                if (chosenBlock.children[k].getAttribute("data-name") == `product-${i}`) {
                    chosenBlock.children[k].remove();
                }

            }
        }

        function nullView() {
            if (chosenBlock.children.length == 0) {
                chosenBlock.appendChild(chosenContentNullClone);
            }
        }

    })
}


const reviewsBtn = document.querySelector('.reviews__write-btn');

if (reviewsBtn) {
    reviewsBtn.addEventListener('click', function() {
        document.body.classList.add('_lock');

        let modalWindow = document.querySelector('.modal__window-reviews');
        modalWindow.classList.add('_active');

        if (modalWindow.classList.contains('_active')) {
            modalWindow.style.cssText = `top: -300%`
        }
        if (modalWindow.classList.contains('_active')) {

            let scroll = document.documentElement.scrollTop;
            let location = scroll + 70;
            modalWindow.style.cssText = `top: ${location}px`


        }




        let modalCancel = document.querySelector('.modal__cancel');
        if (modalCancel) {
            modalCancel.addEventListener('click', function() {
                modalWindow.classList.remove('_active');
                modalWindow.style.cssText = `top: -300%`
                document.body.classList.remove('_lock');
            })
        }

    })
}

let reviewsLink = document.querySelectorAll('.reviews__link');
let reviewsMore = document.querySelectorAll('.reviews__more');
if (reviewsLink.length > 0 || reviewsMore.length > 0) {



    for (let i = 0; i < reviewsLink.length; i++) {
        reviewsLink[i].addEventListener("click", function(e) {
            reviewsLink[i].classList.toggle('_show');

            if (reviewsLink[i].classList.contains('_show')) {
                reviewsMore[i].classList.add('_more');

                reviewsLink[i].innerHTML = 'скрыть';
            }
            if (!reviewsLink[i].classList.contains('_show')) {
                reviewsMore[i].classList.remove('_more');

                reviewsLink[i].innerHTML = 'еще';
            }

            e.preventDefault();
        })

    }
}

let user = prompt("Введите свое имя", "Пользователь!");
if (user == null) {
    user = "Пользователь!";
}
let userName = document.querySelectorAll('.user-name');
[...userName].forEach(item => {
    item.textContent = user;
})