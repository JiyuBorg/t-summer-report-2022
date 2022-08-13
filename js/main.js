$(function () {

  /*=================================================
  ハンバーガーメニュー
  ===================================================*/
  /*.hamburgerクリックでheaderに.open付与と削除(サイドメニュー表示/非表示)切替*/
  $('.hamburger').on('click', function () {
    if ($('.header').hasClass('open')) {
      $('.header').removeClass('open');
    } else {
      $('.header').addClass('open');
    }
  });

  // #maskのエリアをクリックした時に.open削除(サイドメニュー非表示)
  $('#mask').on('click', function () {
    $('.header').removeClass('open');
  });

  // navをクリックした時に.open削除(サイドメニュー非表示)
  $('nav').on('click', function () {
    $('.header').removeClass('open');
  });

  /*=================================================
  トップに戻るボタン表示制御
  ===================================================*/
  let pagetop = $('.to-top');
  // 最初に画面が表示された時は、トップに戻るボタンを非表示に設定
  pagetop.hide();

  // スクロールイベント（スクロールされた際に実行）
  $(window).scroll(function () {
    // スクロール位置が700pxを超えた場合
    if ($(this).scrollTop() > 700) {
      // トップに戻るボタンを表示する
      pagetop.fadeIn();

      // スクロール位置が700px未満の場合
    } else {
      // トップに戻るボタンを非表示にする
      pagetop.fadeOut();
    }
  });

  /*=================================================
  モーダル用
  ===================================================*/
  $('.modaal-iframe').modaal({
    type: 'iframe', //ajaxだと強制白背景のためiframe利用
    fullscreen: 'true', //fullscreenにすることでサイズ調整
  });

});//$function()ここまで

/*=================================================
not jQuery
ふわっと表現のScrollReveal.js 表現は以下参考
https://nakox.jp/web/coding/js_animetion_scrollreveal
===================================================*/
//ベースの設定
ScrollReveal({
  reset: false, //フレームインの度に動かすか否か(boolean)
  delay: 100, //アニメーション開始までの時間ms
  duration: 1000, //アニメーション完了にかかる時間ms
  origin: "bottom", //アニメーションの開始方向top,bottom,left,right
  distance: "50px", //アニメーションの移動距離
});
//アニメーションを付与する対象 ベース設定とは別に個別設定も可能
ScrollReveal().reveal('.animation-right', { origin: "left" });
ScrollReveal().reveal('.animation-bottom', { origin: "bottom" });
