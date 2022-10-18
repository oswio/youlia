

const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {

    const visiblity = nav.getAttribute("data-visible");
    if (visiblity === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
})

// IMAGES ===============================
const column1 = document.getElementById("col1");
const column2 = document.getElementById("col2");
const column3 = document.getElementById("col3");

const artInfo = document.getElementById("art_info")
const box = document.getElementById("box")
// col1
const imgCol1 = [
    {
        imgSrc: 'new1',
        info: "new1"
    },

    {
        imgSrc: 'new3',
        info: "new3"
    },

    {
        imgSrc: 'first',
        info: "First"
    },

    {
        imgSrc: 'second',
        info: "2"
    },

    {
        imgSrc: 'three',
        info: "3"
    },

    {
        imgSrc: '4',
        info: "4"
    },

    {
        imgSrc: '5',
        info: "5"
    },

    {
        imgSrc: '6',
        info: "6"
    },

    {
        imgSrc: '7',
        info: "7"
    },

    {
        imgSrc: '8',
        info: "8"
    },

    {
        imgSrc: '9',
        info: "9"
    },

    {
        imgSrc: '10',
        info: "10"
    },

    {
        imgSrc: '12',
        info: "12"
    },

    {
        imgSrc: '13',
        info: "13"
    },

    {
        imgSrc: '14',
        info: "14"
    },

    {
        imgSrc: '15',
        info: "15"
    },

    {
        imgSrc: '15a',
        info: "16"
    }
]
// col2
const imgCol2 = [
    {
        imgSrc: 'new2',
        info: "new2"
    },

    {
        imgSrc: 'new5',
        info: "new5"
    },

    {
        imgSrc: '16',
        info: ""
    },

    {
        imgSrc: '17',
        info: ""
    },

    {
        imgSrc: '18',
        info: ""
    },

    {
        imgSrc: '19',
        info: ""
    },

    {
        imgSrc: '20',
        info: ""
    },

    {
        imgSrc: '21',
        info: ""
    },

    {
        imgSrc: '22',
        info: ""
    },

    {
        imgSrc: '23',
        info: ""
    },

    {
        imgSrc: '24',
        info: ""
    },

    {
        imgSrc: '24a',
        info: ""
    },

    {
        imgSrc: '25',
        info: ""
    },

    {
        imgSrc: '26',
        info: ""
    },

    {
        imgSrc: '27',
        info: ""
    }
]
// col3
const imgCol3 = [
    {
        imgSrc: 'new4',
        info: "new4"
    },

    {
        imgSrc: '29',
        info: ""
    },

    {
        imgSrc: '30',
        info: ""
    },

    {
        imgSrc: '31',
        info: ""
    },

    {
        imgSrc: '32',
        info: ""
    },

    {
        imgSrc: '33',
        info: ""
    },

    {
        imgSrc: '34',
        info: ""
    },

    {
        imgSrc: '35',
        info: ""
    },

    {
        imgSrc: '36',
        info: ""
    },

    {
        imgSrc: '37',
        info: ""
    },

    {
        imgSrc: '38',
        info: ""
    },

    {
        imgSrc: '39',
        info: ""
    },

    {
        imgSrc: '40',
        info: ""
    },

    {
        imgSrc: '41',
        info: ""
    },
]

function getImgHtml1() {
    return imgCol1.map(function (id) {
        return `<img src="../img/main_page/${id.imgSrc}.jpg" alt="grid img">
        <div class="art-title">
            <p><a href="#">${id.info}</a></p>
        </div>
    `
    }).join("")
}

function getImgHtml2() {
    return imgCol2.map(function (id) {
        return `<img src = "../img/main_page/${id.imgSrc}.jpg" alt = "grid img">
        <div class="art-title">
            <p><a href="#">${id.info}</a></p>
        </div>
    `
    }).join("")
}

function getImgHtml3() {
    return imgCol3.map(function (id) {
        return `<img src = "../img/main_page/${id.imgSrc}.jpg" alt = "grid img" onmouseover="hide()">
        <div class="art-title">
            <p><a href="#">${id.info}</a></p>
        </div>
    `
    }).join("")
}

column1.innerHTML = getImgHtml1();
column2.innerHTML = getImgHtml2();
column3.innerHTML = getImgHtml3();