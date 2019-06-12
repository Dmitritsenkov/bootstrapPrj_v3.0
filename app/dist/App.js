
$(document).ready(function(){

  $("#prime_nav").on("click","a", function (event) {
    event.preventDefault();

    var id  = $(this).attr('href'),

      top = $(id).offset().top-100;
    
    $('body,html').animate({scrollTop: top}, 500);
  });
});


function down(event){

   var id = event.path[0].id;
   console.log(id);

   var top = $(id).offset().top-51;

   $('body,html').animate({scrollTop: top}, 500);
}



function changeStep(event){

	let prevOrNext = event.path[0].getAttribute('data-slide');
  let currenctItem = $("#carousel-indicators .indicator-item.active");
  let stepToChange = currenctItem[0].getAttribute("data-md-step");

  if(prevOrNext=='next'){
    $("body").find('#' + stepToChange).addClass('done active');

      let lastSymbol = stepToChange[stepToChange.length-1];
      lastSymbol = parseInt(lastSymbol, 10)
      lastSymbol++;
      $("body").find('#' + stepToChange.replace(/.$/, lastSymbol)).addClass('active');
      
       if(stepToChange=='md-step4'){
          $("body").find('#' + 'md-step5').addClass('done');
        }

      else if(stepToChange=='md-step5'){
        $("body").find('.md-step').removeClass('active done');
        $("body").find('#md-step1').addClass('active');
      }

  }

  else if(prevOrNext=='prev'){

      if(stepToChange=='md-step1'){
        $("body").find('.md-step').addClass('active done')
      }
      else{
        let lastSymbol = stepToChange[stepToChange.length-1];
        lastSymbol = parseInt(lastSymbol, 10)
        lastSymbol--;
        $("body").find('#' + stepToChange.replace(/.$/,lastSymbol)).removeClass('done');
        $("body").find('#' + stepToChange).removeClass('active done');
      }



      }
  }


$( ".btn_card_programs" ).click(function() {

  if ($(".collapse_programs").hasClass("show")){
    $(".programs").animate({height: "100%"}, 0);
  }

  else if(!$(".collapse_programs").hasClass("show")){
    $(".programs").animate({height: "120%"}, 320);
  }

console.log(math.Random(1,6))

});



$( ".toTheTop" ).mouseover(function() {
  $(".toTheTop").animate({opacity: ".5"});
});


$( ".toTheTop" ).mouseleave(function() {
  $(".toTheTop").animate({opacity: ".3"});
});




$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if(st>1200){
    $(".toTheTop").css("opacity", ".3");
    $(".toTheTop").css("display", "block");

   }

   else if(st<1200){
    $(".toTheTop").css("display", "none");
   }
});

function toTheTop(event){
  var id = event.path[0].id;
   console.log(id);

   var top = $(id).offset();

   $('body,html').animate({scrollTop: 0}, 500);
}