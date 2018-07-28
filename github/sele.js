

//  <div class="hjk-sele-input">
//  <span class="selected">weowpe</span>
//  <span class="icon"><i class="icon-chevron-up" ></i></span>
//  <div>
//      <ul>
//          <li class="hjk-sele-input-li" data-number='0'>January</li>
// 
//      </ul>
//  </div>`

$(
    function(){
        var list = $(".serach-table-body .list[data-hjk='select']");
        
        list.each(
           function(){
            var stSelment =$(
                `
                <div class="hjk-sele-input">
                <input type="text" class="selected" readonly="readonly" value=""> </input>
                <span class="icon"><i class="icon-chevron-up" ></i></span>
                <div>
                    <ul>
                    </ul>
                </div>`
            )
                var that = $(this);
                let selectli = $(this).find("select");
                let selsectwidth = selectli.width();
                let int = selectli.clone(true).attr("class");
                var text;
                selectli.hide();
               
               stSelment.find(".selected").val(selectli.find("option:selected").text()); 
               selectli.find("option:selected").attr("selected","selected") ;
               stSelment.width(selsectwidth + 15);
               stSelment.find(".selected").width(selsectwidth - 20);
               stSelment.find("div").width($(this).width() + selsectwidth +5 );
                $(this).find("option").each(function(index,event){
                    let contvalue = $(this).text();
                    let cont = $("<li class='hjk-sele-input-li' data-number='"+ index +"'>"+ contvalue+"</li>");
                    stSelment.find("div ul").append(cont);
                })
                $(this).append(stSelment);
                $(this).data("hjk","selecttrue");
           }
       );
       
    }
)

var list = $(".serach-table-body .list[data-hjk='select']");

list.on("click",".hjk-sele-input",function(){
    $(this).find(".icon").toggleClass("iconani")
    $(this).find("div").toggle();

});

$(document).mousemove(function(e){ 
    x = e.pageX;
    y = e.pageY; 
});
list.on("blur",".hjk-sele-input ",function(){
    
var div = $(this).find("div"); 
var y1 = div.offset().top;   
var y2 = y1 + div.height(); 
var x1 = div.offset().left;   
var x2 = x1 + div.width(); 
if( x < x1 || x > x2 || y < y1 || y > y2){
	$(this).find("div").hide()
}
});
list.on("click",".hjk-sele-input  li",function(){
  
    let number =  $(this).data("number");
    let val =  $(this).html()
    $(this).closest(".hjk-sele-input").find(".selected").val(val);
    $(this).closest(".hjk-sele-input").find(".selected").css({"color":"#4D4D4D"})
    $(this).closest(".hjk-sele-input").siblings("select").find("option:selected").removeAttr("selected");
    $(this).closest(".hjk-sele-input").siblings("select").find("option").eq(number).attr("selected","selected");
    
});
