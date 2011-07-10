(function($){
    /* jQueryに新しいメソッドを付加 */
    $.fn.hello=function(){
        /* プラグイン名（animateMenu）を指定 */
        /* 関数にオプション変数を渡す */
     //   hello:function(){
            /* 引数の初期値を設定（カンマ区切り） */
            $(this).html("hello");
     //   }
    };
    /* jQueryに関数を渡す */
})(jQuery);
