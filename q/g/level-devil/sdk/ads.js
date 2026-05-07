var show_ads_dmv =function () {
}
var adsRewardedDmvF = function (e) {
    show_ads_dmv();
    e(true);
}

var adsCommercialDmvF = function (e) {
    var keys_check= "times_key_mv_410";
    var so_phut_hien_1_quang_cao = 1;
    var x = localStorage.getItem(keys_check);
    var tt = -10;
    const d = new Date();
    let a = d.getMinutes();
    if (x !== null) {
        tt = parseInt(x);
    }
    if (Math.abs(a - tt) >= so_phut_hien_1_quang_cao) {
        show_ads_dmv();
        localStorage.setItem(keys_check, a + "");
    }
    e();
}