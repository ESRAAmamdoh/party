var d1 = new Date(); //"now"
var d2 = new Date("2024/02/26");
var diff = Math.abs(d1-d2); 
function convertdates(m) {
    ints=[24,60,60,1000,1];
    res=[];
    divisor=0;
    mod=m;
    for (let i =0;i<4;i++){
        divisor=ints.reduce((a,c)=>a*c)
        res.push(Math.floor(mod/divisor));
        mod=mod%(ints.reduce((a,c)=>a*c))
        ints.shift();
    }
    return res;
}
setInterval(()=>{
    var d1 = new Date(); //"now"
    var diff = Math.abs(d1-d2); 
    let arr=convertdates(diff)
    let cartona=``
    cartona+=`

    <div class="col-md-3">
    <span class="con">-${arr[0]}D</span>
</div>
<div class="col-md-3">
    <span class="con">${arr[1]}h</span>
</div>
<div class="col-md-3">
    <span class="con">${arr[2]}m</span>
</div>
<div class="col-md-3">
    <span class="con">${arr[3]}s</span>
</div>

    
    
    
    
    `
    document.getElementById('coun').innerHTML=cartona
   // console.log(convertdates(diff))
},1000)



$('.openNav').on('click',()=>{
    let width=$('.leftmenu').width()
    let width_open=$('.leftmenu').width()+10
    let left=$('.leftmenu').css('left')
if(left=='-250px'){
    $('.openNav').animate({left:width_open},1000,()=>{
        $('.leftmenu').animate({left:0},1000)
        })
}
else{
    $('.leftmenu').animate({left:-width},1000,()=>{
        $('.openNav').animate({left:0},1000)
    })

}  
})

// $('.head').on('click',(e)=>{
// $('e.target').slideToggle();
// })
$('#sliderDown .toggle').click(function(){
    $('.inner').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
});


var maxLength = 100;
$('textarea').keyup(function() {
  var length = $(this).val().length;
  var AmountLeft = maxLength-length;
  if(AmountLeft<=0)
            {
                 $("#chars").text("your available character finished");
                 $("#word").text(".");
                
            }
        else{
        
        $("#chars").text(AmountLeft);
        }
});
$('.leftmenu a').on('click',()=>{
   
let offsetsection=$($(this).attr('href').offset().top)
$('body').animate({scrollTop:offsetsection},1000)
})