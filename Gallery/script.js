
//VARIABLES STORED TO ALLOW CLEARING OF FILTERS UPON NEW CLICKS

$(function() {
  var chosen = "none";
  var clear = function(){
    $('#full').removeClass('filter');
    $('#full').removeClass('high');
    $('#full').removeClass('low');
    $('#full').removeClass('dance');
    $('#full').removeClass('wes');
  }

  $('.previews a').on('click',function(e){ 
  	e.preventDefault();
  	clear();
    chosen = "none";
    var fullImage = $(this).data('full'); 
    var info = $(this).data('info');
    var info1 = $(this).data('info1')
    $('img.main').attr('src',fullImage);
    $('.single-image').attr('href',fullImage);
      // $('.caption').html('<p>' + info + '</p>');
      // $('.caption2').html('<p>' + info1 + '</p>')
  });

  $('.previews a img').on('click', function() {
    $('.previews a img').removeClass("on");
    $(this).removeClass('off');
    $(this).addClass('on');
  });

  //HOVER STATE CHANGE BASED HERE
  $('.selected').hover(function(e){
  	e.preventDefault();
  	$(this).toggleClass('off');
  });


  //ON AND OFF FILTERS WORK FROM HERE
  $('.filter1').on('click', function(e){
  	e.preventDefault();
  	clear();
  	$('#full').addClass('filter');
    chosen = "filter";
  });

  $('.filter2').on('click', function(e){
  	e.preventDefault();
  	clear();
  	$('#full').addClass('low');
    chosen = "low";
  });

  $('.filter3').on('click', function(e){
  	e.preventDefault();
  	clear();
  	$('#full').addClass('dance');
    chosen = "dance";
  });

  $('.filter4').on('click', function(e){
  	e.preventDefault();
  	clear();
  	$('#full').addClass('high');
    chosen = "high";
  });

  $('.filter5').on('click', function(e){
  	e.preventDefault();
  	clear();
  	$('#full').addClass('wes');
    chosen="wes";
  });

  //FANCY BOX 
	$("a.single-image").fancybox({
      beforeShow: function(){
        $('#full').classList;
        if(chosen !== "none")
          $('.fancybox-image').addClass(chosen);
      }
  });	
  
});