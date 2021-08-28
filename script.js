function Update() {

  var name = (document.getElementById('name').value);
  var title = (document.getElementById('title').value);
  var text = (document.getElementById('text').value);
  var icon = (document.getElementById('icon').value);
  var background = (document.getElementById('bck').value);

  window.stats_url = `https://github-readme-stats.vercel.app/api?username=${ name }&&show_icons=true&title_color=${ title }&icon_color=${ icon }&text_color=${ text }&bg_color=${ background }`

  document.getElementById('stats').src = window.stats_url;

}

function changeColor() {

  var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
  document.body.style.background = randomColor

}

function Copy() {

  window.prompt("Copy To Github Stats URL To Clipboard [CTRL + C]: ", window.stats_url);
  alert("Link Succesfully Copied To Clipboard!")

}

window.onload = changeColor;
