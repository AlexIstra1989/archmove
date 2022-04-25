$(function() {
 $('.gallery__link').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  // other options
  //removalDelay: 300,
 // mainClass: 'mfp-with-zoom', // this class is for CSS animation below
  closeOnBgClick: true,

 });
});


// $(function() {
//  $('.gallery__box').magnificPopup({
//   type: 'image',
//   gallery:{
//     enabled:true
//   }
//  });
// });



