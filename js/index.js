// .on event listener documentation - https://api.jquery.com/on/#on-events-selector-data-handler

// Step 1: Hide a div
$('#button1').click(function(){
    $('.hideMe').slideToggle( "slow" , function() {});
  });

 
    $(".header").click(function() {
      $header = $(this);
      $content = $header.next();
      $content.slideToggle(500, function() {
        $header.toggleClass('close');
      });
    });