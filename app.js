$(function () {
     $(".widget a,.widget button,.widget input,#btn").button();
     $("a").click(function(event){
        event.preventDefault();//阻止默认事件
    });
     $("#draggable").draggable().resizable();
     $("#droppable").droppable();//表示可拖拽放置，不可以省掉，绑定drop事件时不可省略
     $("#droppable").on("drop",function (event,ui) {
        alert("drop")
        $("#droppable").addClass("ui-state-highlight")
    });
     $("#droppable").on("dropout",function (event,ui) {
        $("#droppable").removeClass("ui-state-highlight")
    });
     $("#select").selectable();
     //select的标签会被添加上.ui-selected，可以在css中预先设置好样式
     $("#btn").on( "click",function () {
         if($("#right").hasClass( "ui-selected")){
             alert("恭喜你选择正确");
         }else {
             alert("回答错误请重新选择！");
         }
     });
     //sortable和selectable不能同时在一个列表中使用
    $("#sortable").sortable();

});

