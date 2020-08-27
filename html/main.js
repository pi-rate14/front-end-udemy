$(document).ready(function(){ //put dollar sign to convert target(document) to a jquery object. whatver is written in ready function will run when the document is ready.
    $("#txt").html("text changed by jquery"); //$(".id or #class").html("new text");
    $(".btnInput").val("new input value");
    var el = document.getElementById("txt");
    console.log("EL in vanilla JS:",el);
    console.log("EL in j query",$(el));
    $("#goBtn").on("click",function(){ //.on('action'),function
        alert("nice job!");3
    });
    $('[data-trigger="dropdown"]').on('mouseenter',function(){ //event trigger
        var submenu = $(this).parent().find('.submenu'); //submenu variable finds the class submenu in the parent of 'this' trigger (dropdown).
        //submenu.addClass('active'); //adds the class of active to submenu variable which contains the submenu class.   
        submenu.fadeIn(250);

        $('.profileMenu').on('mouseleave',function(){
            //submenu.removeClass('active');
            submenu.fadeOut(250);
        }); 
    });
    
    $("#prepend,#append,#replace").on('click',function(e){//e for event
        var el = $(e.currentTarget); //el is whichever button is clicked
        var action = el.attr('id'); //stores the id of the attribute of el ie the id of whichever button is clicked.
        var content =$(".txtarea").val();
        if(action=='prepend'){
            $(".paragraph").prepend(content);
        }
        else if(action=='append'){
            $(".paragraph").append(content);
        }
        else if(action=='replace'){
            $(".paragraph").html(content);
        }
        $(".txtarea").val("");
    });










});   