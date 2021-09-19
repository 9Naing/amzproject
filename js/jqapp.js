$(document).ready(function(){

//Start Navbar
//for navbutton
$('.navbuttons').click(function(){
     $('.navbuttons').toggleClass('changes');
});

//for navbar
$(window).scroll(function(){
     let getscrolly = $(this).scrollTop();
     // console.log(getscrolly);
     if(getscrolly >= 200){
          $('.navbar').addClass('navmenus');
     }else{
          $('.navbar').removeClass('navmenus');
     }
});
//End Navbar

//Start Mission Section
$(window).scroll(function(){
     let getscrolly = $(this).scrollTop();
     if(getscrolly >= 650){
          $('.cameraimgs').addClass('fromlefts');
          $('.missiontexts').addClass('fromrights');
     }else{
          $('.cameraimgs').addClass('fromlefts');
          $('.missiontexts').addClass('fromrights');
     }
});
//End Mission Section


//Start Gallery Section
$('.gallerylists').click(function(){
     let datafilter = $(this).attr('data-filter');

     if(datafilter === 'all'){
      $('.filters').show();
     }else{
          $('.filters').not('.' +datafilter).hide();

          $('.filters').filter('.' + datafilter).show();
     }
});

//remove current active item
$('.gallerylists').click(function(){
     // $(this).addClass('activeitems')
     $(this).addClass('activeitems').siblings().removeClass('activeitems');
});

//Start Pricing Section
$(window).scroll(function(){
     let getscrolly = $(this).scrollTop();
     if(getscrolly >= 4050){
          $('.cardones').addClass('movefromlefts');
          $('.cardtwos').addClass('movefrombottoms');
          $('.cardthrees').addClass('movefromrights');
     }else{
          $('.cardones').removeClass('movefromlefts');
          $('.cardtwos').removeClass('movefrombottoms');
          $('.cardthrees').removeClass('movefromrights');
     }
});
//End Pricing Section













//End Gallery Section
});