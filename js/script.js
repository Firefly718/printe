// Phone list in header
$(document).ready(function(){
    $("body > header > div > div > div.header__contact > div.header__contact--second > div").click(function(){
      $("body > header > div > div > div.header__contact > div.header__contact--second > div > ul").toggle('slow', 'swing');
    });
});