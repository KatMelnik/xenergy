$(function(){
  $('#datepicker').datepicker();
  // Доступ к экземпляру объекта
  $('#datepicker').data('datepicker');
});

$(function(){
  $('#datepicker1').datepicker();
  // Доступ к экземпляру объекта
  $('#datepicker1').data('datepicker');
});
$(function(){
  $('#datepicker-sam1').datepicker();
  // Доступ к экземпляру объекта
  $('#datepicker-sam1').data('datepicker');
});

$(function(){
  $('#datepicker-sam2').datepicker();
  // Доступ к экземпляру объекта
  $('#datepicker-sam2').data('datepicker');
});


$('#datepicker').on('click',function(){
    $(this).addClass('wh');
});
$('#datepicker1').on('click',function(){
    $(this).addClass('wh');
});
$('.datepicker-here').on('click',function(){
    $(this).addClass('wh');
});
$('.inp-time').on('click',function(){
    $(this).addClass('wh');
});

/*
$('.main-forms__tabs-container input').on('change', function() {
   		$('.main-forms__tabs-item').removeClass('active');
   		if ($('input').is(':checked')) {
            $(this).closest('.main-forms__tabs-item').addClass('active');
        }
});*/

$(function(){
    var max = $(".best-deals__Wrap").hide(), inp = $("input[name='deals']");
    inp.click(function() {
        var indx = inp.index(this);
        max.hide().eq(indx).show().css({display:'flex'});
    }).filter(':checked').click();
});

$(function(){
    var max = $(".deals__Wrap").hide(), inp = $("input[name='choose']");
    inp.click(function() {
        var indx = inp.index(this);
        max.hide().eq(indx).show().css({display:'flex'});
    }).filter(':checked').click();
});

$(function(){
    var max = $(".best-deals__Wrap").hide(), inp = $("input[name='dealsRFP']");
    inp.click(function() {
        var indx = inp.index(this);
        max.hide().eq(indx).show().css({display:'flex'});
    }).filter(':checked').click();
});

$(function(){
    var max = $(".all__change-requirements").hide(), inp = $("input[name='deals-rfp']");
    inp.click(function() {
        var indx = inp.index(this);
        max.hide().eq(indx).show().css({display:'flex'});
    }).filter(':checked').click();
});

$('.tabs-container input').on('change', function() {
      $('.tabs-container__item').removeClass('active');
      if ($('input').is(':checked')) {
            $(this).closest('.tabs-container__item').addClass('active');
        }
});

$(function(){
    var max = $(".deal-details__info-content__Wrap").hide(), inp = $("input[name='choose_sub']");
    inp.click(function() {
        var indx = inp.index(this);
        max.hide().eq(indx).show().css({display:'flex'});
    }).filter(':checked').click();
});

$(function(){
    var max = $(".deal-details__info-content__Wrap").hide(), inp = $("input[name='choose_rfp']");
    inp.click(function() {
        var indx = inp.index(this);
        max.hide().eq(indx).show().css({display:'flex'});
    }).filter(':checked').click();
});


$('.popap-editMatrix .main-forms__tabs-item.itemM input').on('click', function() {
      $('.main-forms__tabs-item.itemM').removeClass('active');
      if ($('input').is(':checked')) {
            $(this).closest('.main-forms__tabs-item.itemM').addClass('active');
        }
});

$(function(){
    var max = $(".edit__WrapM").hide(), inp = $("input[name='editMatr']");
    inp.click(function() {
        var indx = inp.index(this);
        max.hide().eq(indx).show().css({display:'flex'});
    }).filter(':checked').click();
});

$('.main-forms__tabs-item.itemBlock input').on('click', function() {
      $('.main-forms__tabs-item.itemBlock').removeClass('active');
      if ($('input').is(':checked')) {
            $(this).closest('.main-forms__tabs-item.itemBlock').addClass('active');
        }
});
/*Popap Edit Custom*/
$('.main-forms__tabs-item.itemC input').on('click', function() {
      $('.main-forms__tabs-item.itemC').removeClass('active');
      if ($('input').is(':checked')) {
            $(this).closest('.main-forms__tabs-item.itemC').addClass('active');
        }
});
$(function(){
    var max1 = $(".edit__WrapC").hide(), inp1 = $("input[name='editC']");
    inp1.click(function() {
        var indx1 = inp1.index(this);
        max1.hide().eq(indx1).show().css({display:'flex'});
    }).filter(':checked').click();
});
/**/

$(function(){
    var max = $(".page-deals__Wrap").hide(), inp = $("input[name='deals-page']");
    inp.click(function() {
        var indx = inp.index(this);
        max.hide().eq(indx).show().css({display:'flex'});
    }).filter(':checked').click();
});

/*
/*Left-menu RFPResp */
$('.menu__tabs-item input').on('click', function() {
      $('.menu__tabs-item').removeClass('active');
      if ($('input').is(':checked')) {
            $(this).closest('.menu__tabs-item').addClass('active');
        }
});
$(function(){
    var max = $(".cont-main__Wrap").hide(), inp = $("input[name='menuRFP']");
    inp.click(function() {
        var indx = inp.index(this);
        max.hide().eq(indx).show().css({display:'flex'});
    }).filter(':checked').click();
});
/*--------------*/

$('.docs-container__btn input').on('change', function() {
      $('.docs-container__btn-item').removeClass('active');
      if ($('input').is(':checked')) {
            $(this).closest('.docs-container__btn-item').addClass('active');
        }
});

$(function(){
    var max = $(".page-container").hide(), inp = $("input[name='choose-docs']");
    inp.click(function() {
        var indx = inp.index(this);
        max.hide().eq(indx).show().css({display:'flex'});
    }).filter(':checked').click();
});

$('.pageProfileAgents .main-forms__tabs-container input').on('change', function() {
      $('.main-forms__tabs-item').removeClass('active');
      if ($('input').is(':checked')) {
            $(this).closest('.main-forms__tabs-item').addClass('active');
        }
});

$(function(){
    var max = $(".pageProfileAgents .best-deals__Wrap").hide(), inp = $("input[name='choose-pr_ag']");
    inp.click(function() {
        var indx = inp.index(this);
        max.hide().eq(indx).show().css({display:'flex'});
    }).filter(':checked').click();
});

$(function(){
    var max = $(".check__Wrap.pPrice").hide(), inp = $("input[name='ch']");
    inp.click(function() {
        var indx = inp.index(this);
        max.hide().eq(indx).show().css({display:'flex'});
    }).filter(':checked').click();
});

$(function(){
    var max = $(".check__Wrap-pr.custE").hide(), inp = $("input[name='ch1']");
    inp.click(function() {
        var indx = inp.index(this);
        max.hide().eq(indx).show().css({display:'flex'});
    }).filter(':checked').click();
});

$(function(){
    var max = $(".check__Wrap-pr.matrAdd").hide(), inp = $("input[name='ch2']");
    inp.click(function() {
        var indx = inp.index(this);
        max.hide().eq(indx).show().css({display:'flex'});
    }).filter(':checked').click();
});

$(function(){
    var max = $(".check__Wrap-pr.custAdd").hide(), inp = $("input[name='ch3']");
    inp.click(function() {
        var indx = inp.index(this);
        max.hide().eq(indx).show().css({display:'flex'});
    }).filter(':checked').click();
});
$(function(){
    var max = $(".check__Wrap-pr.matrE").hide(), inp = $("input[name='ch4']");
    inp.click(function() {
        var indx = inp.index(this);
        max.hide().eq(indx).show().css({display:'flex'});
    }).filter(':checked').click();
});

$('.check__tabs-container input').on('change', function() {
      $('.check__tabs-item').removeClass('active');
      if ($('input').is(':checked')) {
            $(this).closest('.check__tabs-item').addClass('active');
        }
});


$('.pageResult .close').click(function(){
	$(this).closest('.thank-info').hide();
});
$('.pageResult .btn-ok').click(function(){
	$(this).closest('.thank-info').hide();
}); 

$('.pageAgreement .legalAgreement-container__item-question').click(function(){
  if ($(this).next('.legalAgreement-container__item-answer').hasClass('hidden')) {
    $(this).next('.legalAgreement-container__item-answer').removeClass('hidden').addClass('visible');
    $(this).removeClass('open-answ').addClass('close-answ');
  } else {
    $(this).next('.legalAgreement-container__item-answer').removeClass('visible').addClass('hidden');
    $(this).removeClass('close-answ').addClass('open-answ');
  }
});  

$('.pageInfoDealDetails .faq-item__question').click(function(){
  if ($(this).next('.faq-item__answer').hasClass('hidden')) {
    $(this).next('.faq-item__answer').removeClass('hidden').addClass('visible');
    $(this).removeClass('open-answ').addClass('close-answ');
  } else {
    $(this).next('.faq-item__answer').removeClass('visible').addClass('hidden');
    $(this).removeClass('close-answ').addClass('open-answ');
  }
});  

$('.form-group .select').change(function() {
    var selectedColor = $(this, 'option:selected').val();
    $(this).css('background', selectedColor);
    $(this).css('color', '#111111');
    $(this).addClass('wh');
});


$('.result-block__container .delete-block').click(function(){
    $(this).closest('.result-block__container').hide();
});  

$('.add-details .collapse-buttons').click(function(){
  if ($(this).hasClass('expend-block')) {
    $(this).parent().parent().children('.add-details__form').removeClass('visible').addClass('hidden');
    $(this).parent().children('.line').removeClass('hidden').addClass('visible');
    $(this).removeClass('expend-block').addClass('collapse-block');
  } else {
    $(this).parent().parent().children('.add-details__form').removeClass('hidden').addClass('visible');
    $(this).parent().children('.line').removeClass('visible').addClass('hidden');
    $(this).removeClass('collapse-block').addClass('expend-block');
  }
});  


$('.pageRfp .select-product__container-item').click(function(){
  if ($(this).hasClass('choose')) {
    $(this).removeClass('choose');
    if ($(this).children().hasClass("grid-power")) {
      $(this).closest('.change-requirements').next('.choose-click').children('.choose-product').children('#GP').addClass("hidden");
    } else if ($(this).children().hasClass("solar-energy")) {
      $(this).closest('.change-requirements').next('.choose-click').children('.choose-product').children("#SE").addClass("hidden");
    } else if ($(this).children().hasClass("natural-gas")) {
       $(this).closest('.change-requirements').next('.choose-click').children('.choose-product').children("#NG").addClass("hidden");
    } else if ($(this).children().hasClass("onside-generation")) {
       $(this).closest('.change-requirements').next('.choose-click').children('.choose-product').children("#OG").addClass("hidden");
    } else if ($(this).children().hasClass("demand-response")) {
       $(this).closest('.change-requirements').next('.choose-click').children('.choose-product').children("#DR").addClass("hidden");
    }
  } else {
    $(this).addClass('choose');
    if ($(this).children().hasClass("grid-power")) {
      var k1=$(this).closest('.change-requirements').next('.choose-click').children('.choose-product').children('#GP').removeClass("hidden");
      $(this).closest('.change-requirements').next('.choose-click').children('.choose-product').prepend($(k1));
    } else if ($(this).children().hasClass("solar-energy")) {
      var k2=$(this).closest('.change-requirements').next('.choose-click').children('.choose-product').children("#SE").removeClass("hidden");
      $(this).closest('.change-requirements').next('.choose-click').children('.choose-product').prepend($(k2));
    } else if ($(this).children().hasClass("natural-gas")) {
      var k3=$(this).closest('.change-requirements').next('.choose-click').children('.choose-product').children("#NG").removeClass("hidden");
      $(this).closest('.change-requirements').next('.choose-click').children('.choose-product').prepend($(k3));
    } else if ($(this).children().hasClass("onside-generation")) {
      var k4=$(this).closest('.change-requirements').next('.choose-click').children('.choose-product').children("#OG").removeClass("hidden");
      $(this).closest('.change-requirements').next('.choose-click').children('.choose-product').prepend($(k4));
    } else if ($(this).children().hasClass("demand-response")) {
     // $('.choose-product').prepend($('#DR'));
      var k5=$(this).closest('.change-requirements').next('.choose-click').children('.choose-product').children("#DR").removeClass("hidden");
      $(this).closest('.change-requirements').next('.choose-click').children('.choose-product').prepend($(k5));
    }
  }
});


$('.pageRes .select-product__container-item').click(function(){
  if ($(this).hasClass('choose')) {
    $(this).removeClass('choose');
    if ($(this).children().hasClass("grid-power")) {
      $("#GP").addClass("hidden");
    } else if ($(this).children().hasClass("solar-energy")) {
      $("#SE").addClass("hidden");
    } else if ($(this).children().hasClass("natural-gas")) {
      $("#NG").addClass("hidden");
    } else if ($(this).children().hasClass("onside-generation")) {
      $("#OG").addClass("hidden");
    } else if ($(this).children().hasClass("demand-response")) {
      $("#DR").addClass("hidden");
    }
  } else {
    $(this).addClass('choose');
    if ($(this).children().hasClass("grid-power")) {
      $('.choose-product').prepend($('#GP'));
      $("#GP").removeClass("hidden");
    } else if ($(this).children().hasClass("solar-energy")) {
      $('.choose-product').prepend($('#SE'));
      $("#SE").removeClass("hidden");
    } else if ($(this).children().hasClass("natural-gas")) {
      $('.choose-product').prepend($('#NG'));
      $("#NG").removeClass("hidden");
    } else if ($(this).children().hasClass("onside-generation")) {
      $('.choose-product').prepend($('#OG'));
      $("#OG").removeClass("hidden");
    } else if ($(this).children().hasClass("demand-response")) {
      $('.choose-product').prepend($('#DR'));
      $("#DR").removeClass("hidden");
    }
  }
});  


$('.result-block__container .click-block').click(function(){
  if ($(this).hasClass('expended-block')) {
   // $(this).parent().parent().parent().children('.result-block__containerWrap').hide();
    $(this).closest(".result-block__container").find('.result-block__containerWrap').hide();
    $(this).removeClass('expended-block').addClass('collapsed-block');
  } else {
  //  $(this).parent().parent().parent().children('.result-block__containerWrap').show();
   $(this).closest(".result-block__container").find('.result-block__containerWrap').show();
    $(this).removeClass('collapsed-block').addClass('expended-block');
  }
});  

$('.collapseAll .expendBlock').click(function(){
  $('.result-block__containerWrap').show();
  $('.result-block__container .click-block').removeClass('collapsed-block').addClass('expended-block');
});  
$('.collapseAll .collapseBlock').click(function(){
  $('.result-block__containerWrap').hide();
  $('.result-block__container .click-block').removeClass('expended-block').addClass('collapsed-block');
});  

$('.change-requirements .click__visible-block').click(function(){
  if ($(this).hasClass('expended-block')) {
    $(this).parent().parent().parent().children('.add-requirements').removeClass('visible').addClass('hidden');
    $('.addMoreLocation').hide();
    $('.submitDetails').hide();
    $(this).removeClass('expended-block').addClass('collapsed-block');
  } else {
    $(this).parent().parent().parent().children('.add-requirements').removeClass('hidden').addClass('visible');
    $(this).removeClass('collapsed-block').addClass('expended-block');
    $('.addMoreLocation').show();
    $('.submitDetails').show();
  }
});

$('.add-details__form .company-item span').click(function(){
  $(this).parent('.company-item').hide();
});  

$('.pageProfileAgents .addAgent-btn').click(function(){
  $(this).closest('.best-deals__Wrap').find('.agent.hidden').first().removeClass('hidden');
});
$('.pageProfileAgents .addLocation-btn').click(function(){
  $(this).closest('.best-deals__Wrap').find('.newLocation.hidden').first().removeClass('hidden');
});
$('.pageProfileAgents .close').click(function(){
  $(this).parent().addClass('hidden');
});

$('.btn-sub').click(function(){
  $('.result-blockWrap').prepend($('.newResultBlockContainer'));
  $('.newResultBlockContainer').show();
  });

$('.close-menu').click(function(){
  $('.navbar-collapse').removeClass('show')
});
$('.navbar-toggler').click(function(){
  $('.navbar-collapse').addClass('show')
});

$('.pageRes input#suppliersToExclude').keydown(function(e) {
   if(e.keyCode === 13) {
     $('.company').prepend($('.newCompany'));
     $('.newCompany').show().css('display', 'flex');
     $('.result').html($(this).val());
     $(this).val('');
   }
  });
$('.pageRfp input#suppliersToExclude').keydown(function(e) {
  var i1=$(this).closest('.add-details__form').find('.company').children('.newCompany');
   if(e.keyCode === 13) {
     $(this).closest('.add-details__form').find('.company').prepend($(i1));
     $(i1).show().css('display', 'flex');
     $(i1).children('.result').html($(this).val());
     $(this).val('');
   }
});
/*
function f1(){
  var val = $('.range').val();
  $('.range').css({'background':'-webkit-linear-gradient(left ,#33A1A9 0%,#33A1A9 '+val+'%,#fff '+val+'%, #fff 100%)'});
 }

function f__SE(){
  var val = $('.range__SE').val();
  $('.range__SE').css({'background':'-webkit-linear-gradient(left ,#33A1A9 0%,#33A1A9 '+val+'%,#fff '+val+'%, #fff 100%)'});
 }

*/
$(document).on('input change', 'input[type="range"]', function() {
   var val = $(this).val();
  $(this).css({'background':'-webkit-linear-gradient(left ,#33A1A9 0%,#33A1A9 '+val+'%,#fff '+val+'%, #fff 100%)'});
  $(this).prev('p').children('.l_r1').html($(this).val());

});
/*
$('.l_r1').html($('#GP input[type="range"]').val());

$(document).on('#GP input change', '#GP input[type="range"]', function() {
  $('.l_r1').html($(this).val());
});

*/

$('.dropdown-item').click(function(){
        var num = $(this).index();
        var classType = choose(num);
        $(this).parent().parent().find('p').hide();
        $(this).parent().parent().find('.top-menu-lang-icon').removeClass().addClass('top-menu-lang-icon ' + classType);
});
function choose(num){
        switch(num) {
            case 0: classType = 'solar';
                break;
            case 1: classType = 'power';
                break;
            case 2: classType = 'solarAndPower';
                break;
        }
        return classType;
    };

$(function(){
  var fileUpload = document.getElementById("fileUpload"),
  uploadLabel = document.querySelector("label[for='fileUpload']"),
  fileInsert = document.createElement("button");
  fileInsert.id = "fileSelector";
  fileInsert.innerHTML = uploadLabel.innerHTML;
  fileUpload.parentNode.insertBefore(fileInsert, fileUpload.nextSibling)
  fileUpload.style.display = "none";
  uploadLabel.style.display = "none";
  fileInsert.addEventListener('click', function(e){
    e.preventDefault();
    fileUpload.click();
  }, false);
  
  var fileUpload1 = document.getElementById("fileUpload1"),
  uploadLabel1 = document.querySelector("label[for='fileUpload1']"),
  fileInsert1 = document.createElement("button");
  fileInsert1.id = "fileSelector";
  fileInsert1.innerHTML = uploadLabel1.innerHTML;
  fileUpload1.parentNode.insertBefore(fileInsert1, fileUpload1.nextSibling)
  fileUpload1.style.display = "none";
  uploadLabel1.style.display = "none";
  fileInsert1.addEventListener('click', function(e){
    e.preventDefault();
    fileUpload1.click();
  }, false);

  var fileUpload2 = document.getElementById("fileUpload2"),
  uploadLabel2 = document.querySelector("label[for='fileUpload2']"),
  fileInsert2 = document.createElement("button");
  fileInsert2.id = "fileSelector";
  fileInsert2.innerHTML = uploadLabel2.innerHTML;
  fileUpload2.parentNode.insertBefore(fileInsert2, fileUpload2.nextSibling)
  fileUpload2.style.display = "none";
  uploadLabel2.style.display = "none";
  fileInsert2.addEventListener('click', function(e){
    e.preventDefault();
    fileUpload2.click();
  }, false);

  var fileUpload3 = document.getElementById("fileUpload3"),
  uploadLabel3 = document.querySelector("label[for='fileUpload3']"),
  fileInsert3 = document.createElement("button");
  fileInsert3.id = "fileSelector";
  fileInsert3.innerHTML = uploadLabel3.innerHTML;
  fileUpload3.parentNode.insertBefore(fileInsert3, fileUpload3.nextSibling)
  fileUpload3.style.display = "none";
  uploadLabel3.style.display = "none";
  fileInsert3.addEventListener('click', function(e){
    e.preventDefault();
    fileUpload3.click();
  }, false);

  var fileUpload4 = document.getElementById("fileUpload4"),
  uploadLabel4 = document.querySelector("label[for='fileUpload4']"),
  fileInsert4 = document.createElement("button");
  fileInsert4.id = "fileSelector";
  fileInsert4.innerHTML = uploadLabel4.innerHTML;
  fileUpload4.parentNode.insertBefore(fileInsert4, fileUpload4.nextSibling)
  fileUpload4.style.display = "none";
  uploadLabel4.style.display = "none";
  fileInsert4.addEventListener('click', function(e){
    e.preventDefault();
    fileUpload4.click();
  }, false);

  var fileUpload5 = document.getElementById("fileUpload5"),
  uploadLabel5 = document.querySelector("label[for='fileUpload5']"),
  fileInsert5 = document.createElement("button");
  fileInsert5.id = "fileSelector";
  fileInsert5.innerHTML = uploadLabel5.innerHTML;
  fileUpload5.parentNode.insertBefore(fileInsert5, fileUpload5.nextSibling)
  fileUpload5.style.display = "none";
  uploadLabel5.style.display = "none";
  fileInsert5.addEventListener('click', function(e){
    e.preventDefault();
    fileUpload5.click();
  }, false);

  var fileUpload6 = document.getElementById("fileUpload6"),
  uploadLabel6 = document.querySelector("label[for='fileUpload6']"),
  fileInsert6 = document.createElement("button");
  fileInsert6.id = "fileSelector";
  fileInsert6.innerHTML = uploadLabel6.innerHTML;
  fileUpload6.parentNode.insertBefore(fileInsert6, fileUpload6.nextSibling)
  fileUpload6.style.display = "none";
  uploadLabel6.style.display = "none";
  fileInsert6.addEventListener('click', function(e){
    e.preventDefault();
    fileUpload6.click();
  }, false);

  var fileUpload7 = document.getElementById("fileUpload7"),
  uploadLabel7 = document.querySelector("label[for='fileUpload7']"),
  fileInsert7 = document.createElement("button");
  fileInsert7.id = "fileSelector";
  fileInsert7.innerHTML = uploadLabel6.innerHTML;
  fileUpload7.parentNode.insertBefore(fileInsert7, fileUpload7.nextSibling)
  fileUpload7.style.display = "none";
  uploadLabel7.style.display = "none";
  fileInsert7.addEventListener('click', function(e){
    e.preventDefault();
    fileUpload7.click();
  }, false);

  var fileUpload8 = document.getElementById("fileUpload8"),
  uploadLabel8 = document.querySelector("label[for='fileUpload8']"),
  fileInsert8 = document.createElement("button");
  fileInsert8.id = "fileSelector";
  fileInsert8.innerHTML = uploadLabel8.innerHTML;
  fileUpload8.parentNode.insertBefore(fileInsert8, fileUpload8.nextSibling)
  fileUpload8.style.display = "none";
  uploadLabel8.style.display = "none";
  fileInsert8.addEventListener('click', function(e){
    e.preventDefault();
    fileUpload8.click();
  }, false);

  var fileUpload9 = document.getElementById("fileUpload9"),
  uploadLabel9 = document.querySelector("label[for='fileUpload9']"),
  fileInsert9 = document.createElement("button");
  fileInsert9.id = "fileSelector";
  fileInsert9.innerHTML = uploadLabel6.innerHTML;
  fileUpload9.parentNode.insertBefore(fileInsert9, fileUpload9.nextSibling)
  fileUpload9.style.display = "none";
  uploadLabel9.style.display = "none";
  fileInsert9.addEventListener('click', function(e){
    e.preventDefault();
    fileUpload9.click();
  }, false);

  var fileUpload10 = document.getElementById("fileUpload10"),
  uploadLabel10 = document.querySelector("label[for='fileUpload10']"),
  fileInsert10 = document.createElement("button");
  fileInsert10.id = "fileSelector";
  fileInsert10.innerHTML = uploadLabel10.innerHTML;
  fileUpload10.parentNode.insertBefore(fileInsert10, fileUpload10.nextSibling)
  fileUpload10.style.display = "none";
  uploadLabel10.style.display = "none";
  fileInsert10.addEventListener('click', function(e){
    e.preventDefault();
    fileUpload10.click();
  }, false);

  var fileUpload11 = document.getElementById("fileUpload11"),
  uploadLabel11 = document.querySelector("label[for='fileUpload11']"),
  fileInsert11 = document.createElement("button");
  fileInsert11.id = "fileSelector";
  fileInsert11.innerHTML = uploadLabel11.innerHTML;
  fileUpload11.parentNode.insertBefore(fileInsert11, fileUpload11.nextSibling)
  fileUpload11.style.display = "none";
  uploadLabel11.style.display = "none";
  fileInsert11.addEventListener('click', function(e){
    e.preventDefault();
    fileUpload11.click();
  }, false);

  var fileUpload12 = document.getElementById("fileUpload12"),
  uploadLabel12 = document.querySelector("label[for='fileUpload12']"),
  fileInsert12 = document.createElement("button");
  fileInsert12.id = "fileSelector";
  fileInsert12.innerHTML = uploadLabel12.innerHTML;
  fileUpload12.parentNode.insertBefore(fileInsert12, fileUpload12.nextSibling)
  fileUpload12.style.display = "none";
  uploadLabel12.style.display = "none";
  fileInsert12.addEventListener('click', function(e){
    e.preventDefault();
    fileUpload12.click();
  }, false);

  var fileUpload13 = document.getElementById("fileUpload13"),
    uploadLabel13 = document.querySelector("label[for='fileUpload13']"),
    fileInsert13 = document.createElement("button");
    fileInsert13.id = "fileSelector";
    fileInsert13.innerHTML = uploadLabel13.innerHTML;
    fileUpload13.parentNode.insertBefore(fileInsert13, fileUpload13.nextSibling)
    fileUpload13.style.display = "none";
    uploadLabel13.style.display = "none";
    fileInsert13.addEventListener('click', function(e){
      e.preventDefault();
      fileUpload13.click();
    }, false);  
});

$('.chat-main .chat-header').click(function(){
  if ($(this).next().hasClass('hidden')) {
    $(this).next().removeClass('hidden');
    $(this).children('.chat-header__subtitle').removeClass('hidden');
  } else {
    $(this).next().addClass('hidden');
    $(this).children('.chat-header__subtitle').addClass('hidden');
  }
});

$('.pageRfp .add-more').click(function(){
  $(this).closest('.versRfp').find('.main-forms__tabs-item.hidden').first().removeClass('hidden');
});

$('.mob-page').text($('.active .name-page').text());

$('.name-page').click(function(){
  $('.mob-page').text($(this).text());
});


$('.pageRfp .main-forms__tabs-container input').on('change',function() { 
    if (!($(this).closest('.main-forms__tabs-item').hasClass('hidden'))) {
      $('.pageRfp .main-forms__tabs-item').removeClass('active');
      $(this).closest('.main-forms__tabs-item').addClass('active');
    }
});
var k=1;
$('.pageRfp .close-block').on('click',function(event) {
   $('.main-forms__tabs-item').removeClass('active');
   $(this).closest('.main-forms__tabs-item').addClass('hidden').removeClass('active');
      $(function(){
        var max = $(".all__change-requirements").hide(), inp = $("input[name='deals-rfp']");
        var indx = inp.index(this);
        max.hide().eq(indx).show().css({display:'none'});
        max.hide().eq(0).show().css({display:'flex'});
      });

      $('.pageRfp .main-forms__tabs-item').first().addClass('active').children('.input-hidden').filter(':checked').click();
});


if($('html').width() < 768){
  $('.pageRfp .contain').addClass('dropdown-menu');
  $('.pageRfp .main-forms__tabs-item').addClass('dropdown-item');
 } else {
   $('.pageRfp .contain').removeClass('dropdown-menu');
   $('.pageRfp .main-forms__tabs-item').removeClass('dropdown-item');
 }; 

$(window).on('resize',function(){
if($('html').width() < 768){
  $('.pageRfp .contain').addClass('dropdown-menu');
  $('.pageRfp .main-forms__tabs-item').addClass('dropdown-item');
 } else {
   $('.pageRfp .contain').removeClass('dropdown-menu');
   $('.pageRfp .main-forms__tabs-item').removeClass('dropdown-item');
 };  

});


$('#checkForCompany').on('change', function() {
      if ($(this).is(':checked')) {
          $(this).closest('.form-check').next("#Profile__companyAcc").removeClass('hidden');
        } else {
          $(this).closest('.form-check').next("#Profile__companyAcc").addClass('hidden');
        }
});

$('#checkForUser').on('change', function() {
      if ($(this).is(':checked')) {
          $(this).closest('.form-check').next("#Profile__userAcc").removeClass('hidden');
        } else {
          $(this).closest('.form-check').next("#Profile__userAcc").addClass('hidden');
        }
});

$('.checkForAdd').on('change', function() {
      if ($(this).is(':checked')) {
          $(this).closest('.form-check').next('.form-group').removeClass('hidden');
        } else {
          $(this).closest('.form-check').next().addClass('hidden');
        }
});



$('.chat__contact-list__person').click(function() {
  if ($(this).children().hasClass('on')) {
    $('.chat-dialog').addClass('show');
  }
});
$('.chat-header__person').click(function() {
    $('.chat-dialog').removeClass('show');
});


$('.pageSupplier .select-product__container-item').click(function(){
  if ($(this).hasClass('choose')) {
    $(this).removeClass('choose');
  } else {
    $(this).addClass('choose');
    $(this).closest('.page-deals__Wrap').find('.title').removeClass('err');
  }
});
/*
$('.pageRFPResp .select-product__container-item').click(function(){
  if ($(this).hasClass('choose')) {
    $(this).removeClass('choose');
  } else {
    $(".select-product__container-item").removeClass('choose');
    $(this).addClass('choose');
  }
});*/

$('form .form-control').on('change', function() {
  $(this).removeAttr('style');
  $(this).next('.error').hide();
});


(function( $ ){

$(function() {

  $('.rf').each(function(){
    // Объявляем переменные (форма и кнопка отправки)
  var form = $(this),
      btn = form.find('.btn_submit');

    // Добавляем каждому проверяемому полю, указание что поле пустое
    form.find('.form-control').addClass('empty_field');

    // Функция проверки полей формы
    function checkInput(){
      form.find('.form-control').each(function(){
        if($(this).val() != ''){
          // Если поле не пустое удаляем класс-указание
          $(this).removeClass('empty_field');
        } else {
                // Если поле пустое добавляем класс-указание
          $(this).addClass('empty_field');
        }
      });
    }

    // Функция подсветки незаполненных полей
    function lightEmpty(){
      form.find('.empty_field').css({'border-color':'#EB5757'}).next('.error').show();
    }

    // Проверка в режиме реального времени
     setInterval(function(){
      // Запускаем функцию проверки полей на заполненность
      checkInput();
      // Считаем к-во незаполненных полей
      var sizeEmpty = form.find('.empty_field').length;
     // Вешаем условие-тригер на кнопку отправки формы
      if(sizeEmpty > 0){
        if(btn.hasClass('disabled')){
          return false;
        } else {
          btn.addClass('disabled');
        }
      } else {
        btn.removeClass('disabled');
      }
    },500);

// Событие клика по кнопке отправить
    $('.first-step-submit').click(function(){
      if (!$('.pageSupplier .select-product__container-item').hasClass('choose')) {
        $(this).closest('.page-deals__Wrap').find('.title').addClass('err');
      } else { 
        if($(this).hasClass('disabled')){
          // подсвечиваем незаполненные поля и форму не отправляем, если есть незаполненные поля
          lightEmpty();
          return false
        } else {
          // Все хорошо, все заполнено, отправляем форму
         // form.submit();
          $('.input-hidden')[1].click();
         /* $('body').css('background-image', 'url(../img/Supplier_back2.png)');*/
        }
      }
    });
  });
});

//        

})( jQuery );

$(function(){
  //Инициализация всплывающей панели для
  //элементов веб-страницы, имеющих атрибут
  //data-toggle="popover"
  $('.off').popover({
    //Установление направления отображения popover
    trigger: 'hover',
    placement : 'bottom'
  });
});

$('.svg-states path').click(function(){

  if ($(this).hasClass('off')) {
    $(this).removeClass('off').addClass('on');  
  } else { 
    $(this).removeClass('on').addClass('off'); 
  }
});

//----------------------------------------Разворот чекбоксов
    $('.post-project__main-block__main').click(function () {
        if($(this).hasClass('unrolled')){
            var el = $(this).closest('.parent_li').children('.post-project__main-block__slills'),
                curHeight = el.height(),
                autoHeight = 0;
            el.height(curHeight).animate({height: autoHeight}, 50);
            $(this).removeClass('unrolled');
             $('.togg').removeClass('expend');
        }else{
            var el = $(this).closest('.parent_li').children('.post-project__main-block__slills'),
                curHeight = el.height(),
                autoHeight = el.css('height', 'auto').height();
            el.height(curHeight).animate({height: autoHeight}, 50);
            $(this).addClass('unrolled');
             $('.togg').addClass('expend');
           
        }

        // $(this).siblings('.post-project__main-block__slills').toggleClass('collapsed');
    });
    //------------------------------------------Выбор чекбоксов одним
    $('.skills-check').on('change', function () {
        if($(this).prop('checked')){
            $(this).closest('.parent_li').children('.post-project__main-block__slills').find('input').prop('checked', true);
        }else if($(this).prop('checked', false)){
            $(this).closest('.parent_li').children('.post-project__main-block__slills').find('input').prop('checked', false);
        }
    });

 $('.togg').click(function () {
  if($(this).hasClass('expend')){
    var el = $('.post-project__main-block__slills'),
                curHeight = el.height(),
                autoHeight = 0;
            el.height(curHeight).animate({height: autoHeight}, 50);

            $('.post-project__main-block__main').removeClass('unrolled');
            $(this).removeClass('expend');
  } else {
    var el = $('#PJM1'),
                curHeight = el.height(),
                autoHeight = el.css('height', 'auto').height();
            el.height(curHeight).animate({height: autoHeight}, 50);
    var el1 = $('#NYISO1'),
                curHeight1 = el1.height(),
                autoHeight1 = el1.css('height', 'auto').height();
            el1.height(curHeight1).animate({height: autoHeight1}, 50);
    var el2 = $('#ERCOT1'),
                curHeight2 = el2.height(),
                autoHeight2 = el2.css('height', 'auto').height();
            el2.height(curHeight2).animate({height: autoHeight2}, 50);
    var el3 = $('#ISO_NE1'),
                curHeight3 = el3.height(),
                autoHeight3 = el3.css('height', 'auto').height();
            el3.height(curHeight3).animate({height: autoHeight3}, 50);
    var el4 = $('#CAISO1'),
                curHeight4 = el4.height(),
                autoHeight4 = el4.css('height', 'auto').height();
            el4.height(curHeight4).animate({height: autoHeight4}, 50);
           $('.post-project__main-block__main').addClass('unrolled');
           $(this).addClass('expend');
    var el5 = $('#OTHER1'),
                curHeight5 = el5.height(),
                autoHeight5 = el5.css('height', 'auto').height();
            el5.height(curHeight5).animate({height: autoHeight5}, 50);
           $('.post-project__main-block__main').addClass('unrolled');
           $(this).addClass('expend');
  }
 });
 //Открытие модального окна
function openModal(cl){
    $('.' + cl).removeClass('modal-close');
    $ ('.datepicker').css('z-index', 5000);
}
function openModalAdd(cl){
    $('.' + cl).removeClass('modal-close');
    $(".popap-newProduct").addClass('modal-close');
}


$(".btn_submit_main").click(function () {
    $(this).closest('.popap-congrat').addClass('modal-close');
});

$(".popap-newProduct .close").click(function () {
    $(this).closest('.popap-newProduct').addClass('modal-close');
});
$(".popapPr .close").click(function () {
    $(this).closest('.popapPr').addClass('modal-close');
});

$(".btn-PriceBid").click(function () {
  $(".block-main__p1").addClass('hidden');
  $(".block-main__p2").removeClass('hidden');
});
$(".back-rfplist").click(function () {
  $(".block-main__p2").addClass('hidden');
  $(".block-main__p1").removeClass('hidden');
});

$(".content-row__main").click(function () {
  if ($(this).hasClass("cl")) {
    $(this).parent(".content-row").children(".content-row__sub").removeClass('hidden');
    $(this).find(".btn-up").addClass('down');
    $(this).removeClass("cl");
  } else {
    $(this).parent(".content-row").children(".content-row__sub").addClass('hidden');
    $(this).find(".btn-up").removeClass('down');
    $(this).addClass("cl");
  }
});

  /* page RFP-response: Choose Matrix-Custom*/
$("#products .main-forms__tabs-item ").click(function () {
  $(".main-forms__tabs-item").removeClass("act");
  $(this).addClass("act");
  $(this).closest("#products").find(".custom-prod").addClass("hidden");
  $(this).closest("#products").find(".matrix-prod").addClass("hidden");
  if ($(".cust").hasClass("act")) {
     $(this).closest("#products").find(".custom-prod").removeClass("hidden");
  } else {
    $(this).closest("#products").find(".matrix-prod").removeClass("hidden");
  }
});

/*Delete check-row in table*/
$('.repid-check__row').on('change', function () {
  $(this).is(':checked') ? (
    $(this).closest(".content-row").addClass("active-row").removeClass("pasiv-row")
)
    :
    $(this).closest(".content-row").addClass("pasiv-row").removeClass("active-row");
});

$('.del-prod').click( function () {
  $('.content-row.active-row').remove();
});

/*Check all row of table*/
$('.repid-check').on('change', function () {
    if($(this).prop('checked')){
        $(this).closest('.table-content').children('.content-row').find('input').prop('checked', true);
        $(this).closest('.table-content').children('.content-row').addClass('active-row').removeClass('pasiv-row');
    } else if($(this).prop('checked', false)){
        $(this).closest('.table-content').children('.content-row').find('input').prop('checked', false);
         $(this).closest('.table-content').children('.content-row').addClass('pasiv-row').removeClass('active-row');
    }
});

/*Open popap Edit Matrix/Custom */
$('.edit-prod').click( function () {
  if ($(".custom-prod").hasClass("hidden")) {
    if ($(".matrix-prod").find(".content-row").hasClass("active-row")) {
      openModal('popap-editMatrix');
    } else {alert("You did not select any row. Please select at least one row");} 
  } else {
    if ($(".custom-prod").find(".content-row").hasClass("active-row")) {
      openModal('popap-editCustom');
    } else {alert("You did not select any row. Please select at least one row");}
  }
});

$('.delete-file').click( function () { 
  $(this).closest(".files-container__item").addClass("hidden");
});
$('#settings .delete').click( function () {
  $(this).closest('.container-row__item').remove();
});
$('#settings .view').click( function () {
  openModal('popap-viewDoc');
});
 

$('.delete-doc').click(function(){
  $(this).parent().detach();
});
$('.faq-tab .delete').click(function(){
  $(this).closest(".faq-container__item").remove();
});

$('.faq-tab .faq__item-question').click(function(){
  if ($(this).next('.faq__item-answer').hasClass('hidden')) {
    $(this).next('.faq__item-answer').removeClass('hidden').addClass('visible');
     $(this).children('.block-btn').removeClass('hidden').addClass('visible');
    $(this).removeClass('open-answ').addClass('close-answ');
  } else {
    $(this).next('.faq__item-answer').removeClass('visible').addClass('hidden');
    $(this).removeClass('close-answ').addClass('open-answ');
     $(this).children('.block-btn').removeClass('visible').addClass('hidden');
  }
});  

$('#settings .edit').click( function () {
  $(this).closest('.container-row__item').find('input').removeClass('d-none');
  $(this).closest('.container-row__item').find('.content-info').addClass('d-none');
});
$('.products-tab .doc-name').click( function () {
   openModal('popap-viewDoc');
});
$('.rfp-tab .doc-name').click( function () {
   openModal('popap-viewDoc');
});

$('.faq-tab .edit').click(function(){
  openModal('popap-editFaq');
});

$(".add-row").click(function(){
  var $d=$(this).closest('.table-content').find(".tab-cont");
  $(this).closest('.table-content').find(".t-row").first().clone(true).removeClass("copy").appendTo($d);
});

$(".basket").click(function(){
  $(this).closest(".t-row").remove();
});





