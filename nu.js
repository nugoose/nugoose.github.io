$(document).ready(function(){
    
    var toggled = false;

   $('#toggleButton').click(function(){
       if (toggled){
           $('html').css('background-color', 'var(--base02)');
           toggled = false;
       }
       else{
           $('html').css('background-color', 'var(--base2)');
           toggled = true;
       }
   });

});