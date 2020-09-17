// Phone list in header
$(document).ready(function(){
    $("body > header > div > div > div.header__contact > div.contact > div").click(function(){
      $("body > header > div > div > div.header__contact > div.contact > div > ul").toggle('slow', 'swing');
    });
});


// Phone list in footer
$(document).ready(function(){
  $("body > footer > div.container > div > div:nth-child(4) > div > div").click(function(){
    $("body > footer > div.container > div > div:nth-child(4) > div > div > ul").toggle('slow', 'swing');
  });
});
