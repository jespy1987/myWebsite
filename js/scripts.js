// $(document).ready(function () {
//   autoPlayYouTubeModal();
// });

// function autoPlayYouTubeModal() {
//   var trigger = $("body").find('[data-toggle="modal"]');
//   trigger.click(function () {
//     var theModal = $(this).data("target"),
//       videoSRC = $(this).attr("data-theVideo"),
//       videoSRCauto = videoSRC + "?autoplay=1";
//     $(theModal + ' iframe').attr('src', videoSRCauto);
//     $(theModal + ' button.close').click(function () {
//       $(theModal + ' iframe').attr('src', videoSRC);
//     });
//   });
// }
function addElement(){
  var newElement=document.createElement("input");
  newElement.setAttribute('type', 'text');
  var parent=document.getElementById("test").appendChild(newElement);

}
function save_data1() {
  var input = document.getElementById("peopleS");
  localStorage.setItem("peopleS", input.value);
  var storedValue1 = localStorage.getItem("peopleS");
    function addElement();  
}





$("#Cart").click(function () {
       $("#cartModal").modal("show");
});
