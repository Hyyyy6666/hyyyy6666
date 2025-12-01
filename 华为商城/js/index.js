// 顶部导航
let dropDown = document.querySelectorAll(".drop-down")
for (let i = 0; i < dropDown.length; i++) {
    dropDown[i].addEventListener("mouseenter", function () {
        // console.log(this.children)
        this.children[0].style.display = "none"
        this.children[1].style.display = "block"
        this.children[2].style.display = "block"
        this.style.backgroundColor = "#fff"
    })
    dropDown[i].addEventListener("mouseleave", function () {
        this.children[0].style.display = ""
        this.children[1].style.display = ""
        this.children[2].style.display = ""
        this.style.backgroundColor = ""
    })
}

// 购物车
let shopCar = document.querySelector(".shop-car")
shopCar.addEventListener("mouseenter", function () {
    this.children[0].classList.add("red")
    this.children[1].classList.add("red")
    this.children[2].style.display = "block"
    this.style.backgroundColor = "#fff"
})
shopCar.addEventListener("mouseleave", function () {
    this.children[0].classList.remove("red")
    this.children[1].classList.remove("red")
    this.children[2].style.display = ""
    this.style.backgroundColor = ""
})

// 主导航悬浮&返回顶部
let nav = document.querySelector(".nav")
let navTotal = document.querySelector(".nav .total")
let scrollToTop = document.querySelector(".slider .top")
window.addEventListener("scroll", function () {
    let num = document.documentElement.scrollTop
    if (num > 536) {
        nav.style.position = "fixed"
        navTotal.style.display = "block"
    } else if (num > 36) {
        nav.style.position = "fixed"
        navTotal.style.display = "none"
    } else {
        nav.style.position = ""
        navTotal.style.display = "none"
    }
    if (num > 800) {
        scrollToTop.style.display = ""
    } else {
        scrollToTop.style.display = "none"
    }
})
scrollToTop.addEventListener("click", function () {
    document.documentElement.scrollTop = 0
})

// 弹窗搜索框
let btnSearch = document.querySelector(".nav .search")
let alertSearch = document.querySelector(".nav .alert-search")
let alertSearchClose = document.querySelector(".nav .alert-search .close")
btnSearch.addEventListener("click", function () {
    alertSearch.style.display = ""
    document.body.parentNode.style.overflowY = "hidden"
})
alertSearchClose.addEventListener("click", function () {
    alertSearch.style.display = "none"
    alertSearch.querySelector("input").value = ""
    document.body.parentNode.style.overflowY = ""
})


// 轮播图
let bannerSlider = document.querySelector(".banner-slider")
let bannerIndex = 0
let bannerSelect = document.querySelectorAll(".banner .dots>div")
let bannerChange = function (i) {
    bannerSlider.style.marginLeft = `-${i * 100}%`
}
for (let i = 0; i < bannerSelect.length; i++) {
    bannerSelect[i].addEventListener("click", function () {
        document.querySelector(".selected").classList.remove("selected")
        this.firstElementChild.classList.add("selected")
        bannerChange(i)
        bannerIndex = i
    })
}
setInterval(function () {
    bannerIndex++
    if (bannerIndex >= 8) {
        bannerIndex = 0
    }
    bannerChange(bannerIndex)
    document.querySelector(".selected").classList.remove("selected")
    bannerSelect[bannerIndex].firstElementChild.classList.add("selected")
}, 8000)

// 边栏显示
let side = document.querySelectorAll(".banner .side .category")
for (let i = 0; i < side.length; i++) {
    side[i].addEventListener("mouseenter", function () {
        this.children[2].style.display = ""
    })
    side[i].addEventListener("mouseleave", function () {
        this.children[2].style.display = "none"
    })
}
