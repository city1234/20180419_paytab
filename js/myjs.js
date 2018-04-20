$(document).ready(function() {
    $(".pay_add").click(function() {
        $(".pay_add").toggleClass("pay_add_active");
        $(".onlineMenu>ul").toggleClass("onlineMenu_active");
    });
    $(".moneybox li").click(function () {
        $(this).addClass("moneybox_active").siblings().removeClass("moneybox_active");
    });
});
