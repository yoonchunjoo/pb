$(function(){

// 계정관리 > 기타설정 : 푸시 on/off 버튼
$(".push_1").on("click", function(){

    let isMove = $(".push_1").hasClass("right");

    if(isMove){
        $(".push_1").removeClass("right");
    }else{
        $(".push_1").addClass("right");
    }
});

$(".push_2").on("click", function(){

    let isMove = $(".push_2").hasClass("right");

    if(isMove){
        $(".push_2").removeClass("right");
    }else{
        $(".push_2").addClass("right");
    }
});

$(".push_3").on("click", function(){

    let isMove = $(".push_3").hasClass("right");

    if(isMove){
        $(".push_3").removeClass("right");
    }else{
        $(".push_3").addClass("right");
    }
});

// 기본정보 > 가입경로 : 셀렉트박스 
    let selectFlag;
    $('.custom-select').on('click', function() {
      $(this).toggleClass('selected');
      if($(this).hasClass('selected')) {
        $('.custom-select-list').show();
      } else {
        $('.custom-select-list').hide();
      }
    })
    
    $('.custom-select').on('focusin', function() {
      $('.custom-select-list').show();
    });
    
    $('.custom-select').on('focusout', function() {
      if(!selectFlag) {
        $('.custom-select-list').hide();
      }
      $(this).removeClass('selected');
    });
    
    $('.custom-select-option').on('mouseenter', function() {
      selectFlag = true;
    });
    
    $('.custom-select-option').on('mouseout', function() {
      selectFlag = false;
    });
    
    $('.custom-select-option').on('click', function() {
      let value = $(this).attr('value');
    
      $('.custom-select-text').text($(this).text());
      $('.select-origin').val(value);
      $('.custom-select-list').hide();
    
      $('.select-origin').find('option').each(function(index, el) {
        if($(el).attr('value') == value) {
          $(el).attr('selected', 'selected');
        } else {
          $(el).removeAttr('selected');
        }
      });
    });



    // 연락처 셀렉트박스
    $(".arrowWrap>.down").on("click", function(e){
      e.preventDefault();

      $(".select .bottom").css({"display" : "block"});

      $(this).css({"display" : "none"});
      $(".arrowWrap>.up").css({"display" : "block"});
  });


  $(".arrowWrap>.up").on("click", function(e){
      e.preventDefault();

      $(".select .bottom").css({"display" : "none"});

      $(this).css({"display" : "none"});
      $(".arrowWrap>.down").css({"display" : "block"});
  });


  $(".select .bottom>div").on("click", function(){

      let ii = $(this).index();

      $(".select .btn>div").removeClass("active");
      $(".select .btn>div").eq(ii).addClass("active");

      $(".select .bottom").css({"display" : "none"});
      
      $(".arrowWrap>.down").css({"display" : "block"});
      $(".arrowWrap>.up").css({"display" : "none"});
  });




});


