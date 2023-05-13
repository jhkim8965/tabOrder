/*=======================================================================================
    Default Section
=========================================================================================*/
const PATH_ADMIN = "/html/admin/features";
const $bodyIframe = document.getElementById("body-iframe");


/*=======================================================================================
    Funtion Section
=========================================================================================*/



/*=======================================================================================
    Event Section
=========================================================================================*/
// 메인으로
$("#btn-main").click(function() {
    sessionStorage.setItem("screen", "");
    window.parent.location.replace("/");
});

// 재고 관리
$("#btn-stock").click(function() {
    $bodyIframe.src = PATH_ADMIN + "/stock.html";
});

// 메뉴 관리
$("#btn-menu").click(function() {
    $bodyIframe.src = PATH_ADMIN + "/menu.html";
});

// 매출 관리
$("#btn-sales").click(function() {
    $bodyIframe.src = PATH_ADMIN + "/sales.html";
});


// api test
$("#btn-api").click(function() {
    fetch('http://localhost:3000/')
        .then(response => response.text())
        .then(data => alert(data))
        .catch(error => console.error(error));
});