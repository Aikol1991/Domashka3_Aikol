const tabContent = document.querySelectorAll(".tabcontent");
const tabs = document.querySelectorAll(".tabheader__item");
const tabsParent = document.querySelector(".tabheader__items");

const hideTabContent = () => {
    tabContent.forEach((item) => {
        item.style.display = "none";
    });
    tabs.forEach((item) => {
        item.classList.remove("tabheader__item_active");
    });
};

const showTabContent = (i = 3) => {
    tabContent [i].style.display = "block";
    tabs[i].classList.add("tabheader__item_active");
};

hideTabContent();
showTabContent();

let currSLide = 0;
let sliderInterval;
let resetSliderTime;
function handleSlider () {
    sliderInterval = setInterval(() => {
        if(currSLide < tabContent.length - 1){
            currSLide++
            hideTabContent();
            showTabContent(currSLide);
        } else {
        currSLide = 0;
        hideTabContent();
        showTabContent(currSLide);
        }
    }, 2000)
};
handleSlider();

tabsParent.addEventListener("click", (e) => {
    const target = e.target;

    if (target.classList.contains("tabheader__item")) {
        tabs.forEach((item, idx) => {
           if(target === item) {
               clearInterval(sliderInterval);
               clearTimeout(resetSliderTime);
               resetSliderTime = setTimeout(() => {
                   handleSlider();
               }, 3000)

               currSLide = i;
               hideTabContent();
               showTabContent(idx);
           }
        });
    }
});

const modal = document.querySelector(".modal");
const openModalBtn = document.querySelector(".btn_white");
const closeModalBtn = document.querySelector(".modal__close");
let isModalOpened = false;
const openModal = () => {
    modal.classList.add ("show");
    modal.classList.remove ("hide");
    document.body.style.overflow = "hidden";
};

const closeModal = () => {
    modal.classList.add ("hide");
    modal.classList.remove ("show");
    document.body.style.overflow = "";
};

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);

window.onscroll = () => {
    if(document.documentElement.scrollTop >= 3270 && isModalOpened === false){
        isModalOpened = true;
        openModal();
    }
};

document.body.addEventListener('click', (e) => {
    closeModal();
});