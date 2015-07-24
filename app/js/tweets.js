
//USE THIS FOR PRODUCTION WEBSITE
// $(function(){
//   $.ajax({
//     url: 'get_twitter.php',
//     type: 'GET',
//     success: function(response){
//       if(typeof response.errors ==='undefined' || response.errors.length < 1){
//         var $tweets = $('<ul></ul>');
//         $.each(response,function(i,obj){
//           $tweets.append('<li>'+obj.text+'</li>');
//         });

//         $('.tweets-container').html($tweets);

//       } else {
//         $('.tweets-container p:first').text('Response Error');
//       }

//     },
//       error: function(errors){
//         $('.tweets-container p:first').text('Request error');
//       }
//   });
// });

//USING DOWNLOADED JSON FILE SO NOT EXPOSE TWITTER API KEYS
$(function(){
  $.ajax({
    url: 'twt.json',
    type: 'GET',
    success: function(response){
      if(typeof response.errors ==='undefined' || response.errors.length < 1){
        var $tweets = $('<ul class="twitter-list"></ul>');
        $.each(response,function(i,obj){
          $tweets.append('<li class="tweet">'+'<h5>'+obj.user.name+'</h5>'+obj.text+'</li>').fadeIn(4000);
        });

        $('.tweets-container').html($tweets);

      } else {
        $('.tweets-container p:first').text('Response Error');
      }

    },
      error: function(errors){
        $('.tweets-container p:first').text('Request error');
      }
  });
});

