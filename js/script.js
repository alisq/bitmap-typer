


$("#font-size").on('input', function(){
    fs = $(this).val()/100+'in'
    ws = $(this).val()/400*3+'in'
    $(".letter").css("height",fs);
    $(".letter-space").css("width",ws);

});



$("#line-height").on('input', function(){
    lh = $(this).val()/50+'in'
    $("#container").css("line-height",lh);
    

});


 $("#text").focus().trigger( "keypress" );;

let s = $(window).height()/($("#container").height()-40)




$("#container").css({
    "transform":"scale("+s+")"
})


$("#text").keyup(function(e){

    

    $("#container").empty();


    

    let lines = $("#text").val();

    for (i=0;i<lines.length;i++ ){
        if (lines[i] == " ") {
    $("<div></div>")    			
        .addClass("letter letter-space")
        
        .appendTo("#container")
} else if (lines[i] == "\n") {
    $("<br />")
    .appendTo("#container")

}else {

    let letter = lines[i].toUpperCase()
    $("<img>")
        .attr("src","alphabet/"+letter+".gif")
        .addClass("letter letter-"+letter)
        .appendTo("#container")

    

}




    }


    if (($("#font-size").val() != 50) && ($("#leading").val() != 50)) {
        fs = $("#font-size").val()/100+'in'
        ws = $("#font-size").val()/400*3+'in'

        $(".letter").css("height",fs);
        $(".letter-space").css("width",ws);

        lh = $("#leading").val()/50+'in'
        $("#container").css("line-height",lh);

    }
    

})



$("#nudge").click(function(){
    $("#menu").fadeOut(200);
    $(".letter").css("cursor", "move").draggable()
})
