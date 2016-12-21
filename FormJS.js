$(document).ready(function () {
    $(":input").focus(function () {
        $("this").addClass("focus");
    }).blur(function () {
        $("this").removeClass("focus");
    });

    var $comment=$("#comment");
    $(".bigger").click(function () {
        if (!$comment.is(":animated")){
            $comment.animate({scrollTop:"-=50"},400);
        }

});
    $(".smaller").click(function () {
        if (!$comment.is(":animated")) {
                $comment.animate({scrollTop:"+=50"}, 400);
        }
    });

    $("[name=items]:checkbox").click(function () {
        var flag=true
        $("[name=items]:checkbox").each(function () {
            if (!this.checked){
                flag=false;
            }
        })
        $("#CheckedAll").prop("checked",flag);
    });
    $("#CheckedAll").click(function () {
        $("[name=items]:checkbox").prop("checked",this.checked);
    });
    $("#CheckedRev").click(function () {
        var flag=true
        $("[name=items]").each(function () {
            $(this).prop('checked',!$(this).prop('checked'));
        });
        $("[name=items]:checkbox").each(function () {
            if (!this.checked){
                flag=false;
            }
        })
        $("#CheckedAll").prop("checked",flag);


    });
    $("#send").click(function () {
        var str="你选择的是:\r\n";
        $("[name=items]:checkbox:checked").each(function () {
            str+=$(this).val()+"\r\n"
        });
        alert(str);
    })

    $("#add").click(function () {
        var $option=$("#select1 option:selected");
        $option.appendTo("#select2");
    });
    $("#add_all").click(function () {
        var $option=$("#select1 option");
        $option.appendTo("#select2");
    });
    $("#select1").dblclick(function () {
        var $option=$("option:selected",this);
        $option.appendTo("#select2");
    })
    $("#remove").click(function () {
        var $option=$("#select2 option:selected");
        $option.appendTo("#select1");
    });
    $("#remove_all").click(function () {
        var $option=$("#select2 option");
        $option.appendTo("#select1");
    });
    $("#select2").dblclick(function () {
        var $option=$("option:selected",this);
        $option.appendTo("#select1");
    })
  $(":input.required").each(function () {
      var $required=$("<strong class='high'>*</strong>");
      $(this).parent().append($required);
  });
    $(":input.required").blur(function () {
        var $parent=$(this).parent();
        $parent.find(".formtip").remove();
        if ($(this).is("#username1")){
            if (this.value==""||this.value.length<6){
                var errormsg="请输入6位数用户名"
                $parent.append("<span class='formtip onerror'>"+errormsg+"</span>");
            }else{
                var Okmsg="输入正确"
                $parent.append("<span class='formtip onsuccess'>"+Okmsg+"</span>");
            }
        }
        if ($(this).is("#email")){
            if (this.value==""||( this.value != "" && !/.+@.+\.[a-zA-Z]{2,4}/.test(this.value) ) ){
                var errormsg="请输入正确Email地址"
                $parent.append("<span class='formtip onerror'>"+errormsg+"</span>");
            }else{
                var Okmsg="输入正确"
                $parent.append("<span class='formtip onsuccess'>"+Okmsg+"</span>");
            }
        }
    }).keyup(function () {
        $(this).triggerHandler("blur");
    }).focus(function () {
        $(this).triggerHandler("blur");
    });
    $("#send1").click(function () {
        $(":input.required").trigger( "blur")
        var number=$("form .onerror").length;
        if (number){
            return false;
        }else {
            alert("注册成功")
        }
    })
});
