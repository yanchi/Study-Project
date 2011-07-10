//module('$(document).ready');


test("hello test", function () {
//        $(function(){
//            $("#btn").click(function(){
//            $("#test").html("hello");
                $("#abc").hello();
//            });
//        });
equal( $("#abc").text(), "hello","We expect value to be hello" );

});