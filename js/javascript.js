$(document).ready(function () {
    $('.slider').slick({
        centerMode: true, // 以中心式的方式顯示
        centerPadding: '1rem', // banner間距
        slidesToShow: 1, // 一次顯示幾張
        autoplay: false, // 自動輪播
        autoplaySpeed: 2000, // 輪播換圖秒數
        variableWidth: false, // 則輪播圖片的寬度會保持一致
        responsive: [
            {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '1rem',
                slidesToShow: 1
            }
            },
            {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0rem',
                slidesToShow: 1
            }
            }
        ], // 用於設置響應式設計
        prevArrow: '<span class="material-symbols-outlined prev">chevron_left</span>',
        nextArrow: '<span class="material-symbols-outlined next">chevron_right</span>',
    });
    $('.responsive').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ],
        prevArrow: '<span class="material-symbols-outlined prev">chevron_left</span>',
        nextArrow: '<span class="material-symbols-outlined next">chevron_right</span>',
    });
});

new Vue ({
    el: "#app",
    data: {
        itemsData: [
            {
                img: "images/item-01.png",
                name: "手機線材"
            },{
                img: "images/item-02.png",
                name: "充電器"
            },{
                img: "images/item-03.png",
                name: "直播專區"
            },{
                img: "images/item-04.png",
                name: "車用專區"
            },{
                img: "images/item-05.png",
                name: "耳機專區"
            },{
                img: "images/item-06.png",
                name: "視聽專區"
            }
        ],
        newProdData: [
            {
                img: "images/pic-01.png",
                name: "【現貨】編織快充線│USB A TO TYPE C│日本同步 馬卡龍色系 (共5色)",
                star: "★★★★★",
                starTotal: 5.0,
                starNum: 23,
                price: 399,
            },{
                img: "images/pic-02.png",
                name: "【現貨】PD20W 快速充電頭",
                star: "★★★★★",
                starTotal: 5.0,
                starNum: 23,
                price: 399,
            },{
                img: "images/pic-03.png",
                name: "【現貨】20W USB-A TO TYPE-C超強機能性！USB車用充電器│擊破逃生功能│隱藏刀片迅速切斷安全帶│CNC高質感",
                star: "★★★★★",
                starTotal: 5.0,
                starNum: 23,
                price: 399,
            },{
                img: "images/pic-04.png",
                name: "【現貨】10 吋美顏環形 LED 攝影燈/直播燈/補光燈",
                star: "★★★★★",
                starTotal: 5.0,
                starNum: 23,
                price: 399,
            },{
                img: "images/pic-05.png",
                name: "【現貨】編織快充線│USB A TO TYPE C│日本同步 馬卡龍色系 (共5色)",
                star: "★★★★★",
                starTotal: 5.0,
                starNum: 23,
                price: 399,
            },{
                img: "images/pic-01.png",
                name: "【現貨】編織快充線│USB A TO TYPE C│日本同步 馬卡龍色系 (共5色)",
                star: "★★★★★",
                starTotal: 5.0,
                starNum: 23,
                price: 399,
            },{
                img: "images/pic-02.png",
                name: "【現貨】編織快充線│USB A TO TYPE C│日本同步 馬卡龍色系 (共5色)",
                star: "★★★★★",
                starTotal: 5.0,
                starNum: 23,
                price: 399,
            },{
                img: "images/pic-03.png",
                name: "【現貨】編織快充線│USB A TO TYPE C│日本同步 馬卡龍色系 (共5色)",
                star: "★★★★★",
                starTotal: 5.0,
                starNum: 23,
                price: 399,
            }
        ],
        cardGroupData: [
            {
                img: "images/img_productBanner01.png",
                title: "映照最真實的你、最真摯的心",
                item: "攝影燈",
                link: "#"
            },{
                img: "images/img_productBanner02.png",
                title: "即便夜晚，也要照亮你的生活",
                item: "快充線",
                link: "#"
            },{
                img: "images/img_productBanner03.png",
                title: "聆聽音樂，感受幸福的力量",
                item: "耳機",
                link: "#"
            },{
                img: "images/img_productBanner04.png",
                title: "在到達目的地前，旅途都心安",
                item: "車充",
                link: "#"
            },
        ],
        infoBoxData: [
            {
                img: "images/img_info01.png",
                title: "20 年的開發、設計、加工經驗",
                content: "提供專業且高品質的產品和服務，讓您的需求得到最佳的滿足。"
            },{
                img: "images/img_info02.png",
                title: "加入會員獲得更多優惠",
                content: "會員享受更多專屬優惠及福利，讓您的消費更有價值！"
            },{
                img: "images/img_info03.png",
                title: "商品種類多樣化",
                content: "商品應有盡有，讓您輕鬆購足所需，享受愉悅購物體驗。"
            },{
                img: "images/img_info04.png",
                title: "隨時隨地購物",
                content: "在家或外出時購物，享受快速方便的購物樂趣。"
            },{
                img: "images/img_info05.png",
                title: "24小時客服",
                content: "我們提供24小時客服，隨時為您解答問題，讓您安心購物。"
            },{
                img: "images/img_info06.png",
                title: "輕鬆退貨/退款",
                content: "我們提供輕鬆退貨與退款服務，讓您購物無後顧之憂。"
            }
        ],
        f_navData: [
            {
                title: "產品一覽",
                nav: ["手機線材","充電器","直播專區","車用專區","耳機專區","視聽專區"]
            },{
                title: "客戶服務",
                nav: ["關於我們","購物指南","訊息公告","問與答","聯絡我們"]
            },{
                title: "會員權益",
                nav: ["隱私權政策","服務條款","退貨政策","會員制度"]
            },{
                title: "海外同步上架",
                nav: ["日本樂天","Kyohaya"]
            }
        ],
        mediaData: [
            {
                img: "images/ic_media01.svg",
                alt: "IG",
            },{
                img: "images/ic_media02.svg",
                alt: "LINE",
            },{
                img: "images/ic_media03.svg",
                alt: "FB",
            },{
                img: "images/ic_media04.svg",
                alt: "YT",
            },
        ],
    },
});