<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
  <style type="text/css">
    .hidden {
      display: none;
    }

    .complete {
      text-decoration: line-through;
    }
  </style>
  <script>
    function doIt() {
      var toDos = $('.js-to-dos');
      toDos.find('.js-complete').addClass('complete');
      toDos.parent().removeClass('hidden');
    }
    function first() {
     $('.first').addClass('complete');
    }
    function second() {
     $('.second').addClass('complete');
    }
    function third() {
     $('.third').addClass('complete');
    }
    function reset(){
      $('.first').removeClass('complete');
      $('.second').removeClass('complete');
      $('.third').removeClass('complete');
    }

  </script>
</head>
<body>

  <div class='hidden js-parent-demo'>
    <ul class='js-to-dos'>
      <li class="js-complete">Buy milk</li>
      <li>mail rent check</li>
      <li>write great american novel</li>
    </ul>
  </div>
  <input type="button" value="click" onclick="doIt()" name="">

  <div class='js-parent-demo'>
    <ul class='js-to-dos'>
      <li class="first">Buy milk</li>
      <li class="second">mail rent check</li>
      <li class="third">write great american novel</li>
    </ul>
  </div>
  <input type="button" value="first" onclick="first()" name="">
  <input type="button" value="second" onclick="second()" name="">
  <input type="button" value="third" onclick="third()" name="">
  <input type="button" value="reset" onclick="reset()">
  <script src="https://code.jquery.com/jquery-3.0.0.js"></script>
</body>
</html>