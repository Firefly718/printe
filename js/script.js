// Phone list in header
$(document).ready(function(){
    $("body > header > div > div > div.header__contact > div.header__contact--second > div").click(function(){
      $("body > header > div > div > div.header__contact > div.header__contact--second > div > ul").toggle('slow', 'swing');
    });
});

// Phone list in footer
$(document).ready(function(){
  $("body > footer > div > div > div:nth-child(4) > div > div").click(function(){
    $("body > footer > div > div > div:nth-child(4) > div > div > ul").toggle('slow', 'swing');
  });
});