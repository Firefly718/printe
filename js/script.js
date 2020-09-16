// Phone list in header
$(document).ready(function(){
    $("body > header > div > div > div.header__contact > div.header__contact--second > div").click(function(){
      $("body > header > div > div > div.header__contact > div.header__contact--second > div > ul").toggle('slow', 'swing');
    });
});

// search icon in nav menu
// $(document).ready(function(){
//   $("body > header > nav > div > div > a:last-child").click(function(){
//     $("body > header > nav > div > div > a:last-child > input[type=search]").toggle('slow', 'swing');
//   });
// });

// document.querySelector("body > header > nav > div > div > a:nth-child(8)")
// document.querySelector("body > header > nav > div > div > a:nth-child(8) > input[type=search]")