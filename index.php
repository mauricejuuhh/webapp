<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>
  <body>

<div class="mid">
<span id="show_opdracht">Druk op je team hieronder</span>
</div>

<div class="mid" id="team_selector">
<div class="mid_team_selector"><img src="t.png" id="t" alt="Terrorist side"></div>
<div class="mid_team_selector"><img src="ct.png" id="ct" alt="Counter Terrorist side"></div>
</div>

<div class="mid" style="height: 50px;">
<input type="text" id="opdrachtform" placeholder="opdracht" style="width: 440px;"><br>
<select id="opdrachtSelect">
  <option value="t">Terrorists</option>
  <option value="ct">Counter Terrorists</option>
</select>
<input type="submit" id="opdrachtsubmit" value="verstuur">
</div>

<script src="opdrachten.js" charset="utf-8"></script>
<script src="script.js" charset="utf-8"></script>
  </body>
</html>
