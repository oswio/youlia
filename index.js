

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
const imgCol = [
    {
        imgSrc: '1024/1',
        info: "del"
    },

    {
        imgSrc: '1024/2',
        info: "new1"
    },

    {
        imgSrc: '1024/3',
        info: "new1"
    },

    {
        imgSrc: '1024/13',
        info: "new1"
    },

    {
        imgSrc: 'new1',
        info: "new1"
    },

    {
        imgSrc: 'new3',
        info: "new3"
    },

    {
        imgSrc: '1024/14',
        info: "new1"
    },


    {
        imgSrc: 'three',
        info: "3"
    },
    // ]
    // col2
    // const imgCol2 = [

    {
        imgSrc: '1024/6',
        info: "new1"
    },

    {
        imgSrc: '1024/12',
        info: "new1"
    },

    {
        imgSrc: '1024/11',
        info: "new1"
    },

    {
        imgSrc: '1024/15',
        info: "new1"
    },

    {
        imgSrc: '1024/16',
        info: "new1"
    },

    {
        imgSrc: 'new2',
        info: "new2"
    },

    {
        imgSrc: '1024/4',
        info: "new1"
    },


    // ]
    // col3
    // const imgCol3 = [
    {
        imgSrc: '1024/7',
        info: "new1"
    },

    {
        imgSrc: '1024/1a',
        info: "new1"
    },

    {
        imgSrc: '1024/8',
        info: "new1"
    },

    {
        imgSrc: '1024/5',
        info: "new1"
    },

    {
        imgSrc: '1024/19',
        info: "new1"
    },

    {
        imgSrc: '1024/20',
        info: "new1"
    },

    {
        imgSrc: '1024/9',
        info: "new1"
    },

    {
        imgSrc: '1024/10',
        info: "new1"
    },

    {
        imgSrc: 'new4',
        info: "new4"
    },


]

function getImgHtml() {
    return imgCol.map(function (id) {
        return `<img onclick="click()" src="../img/main_page/${id.imgSrc}.jpg" alt="grid img">
        <div class="art-title">
            <p><a href="#">${id.info}</a></p>
        </div>
    `
    }).join("")
}

// function getImgHtml2() {
//     return imgCol2.map(function (id) {
//         return `<img src="../img/main_page/${id.imgSrc}.jpg" alt="grid img">
//         <div class="art-title">
//             <p><a href="#">${id.info}</a></p>
//         </div>
//     `
//     }).join("")
// }

// function getImgHtml3() {
//     return imgCol3.map(function (id) {
//         return `<img src="../img/main_page/${id.imgSrc}.jpg" alt="grid img" >
//         <div class="art-title">
//             <p><a href="#">${id.info}</a></p>
//         </div>
//     `
//     }).join("")
// }


column2.innerHTML = getImgHtml();
// column2.innerHTML = getImgHtml2();
// column3.innerHTML = getImgHtml3();
