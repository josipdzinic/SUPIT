var i = 0;
var j = 0;
var txt = 'Budi izvrstan u onome što vidiš.';
var txt2 = 'ZAISKRI!';
var once = false;
var speed = 150;


function typeWriter() {

  if (i < txt.length) {
    document.getElementById("textType").innerHTML += txt.charAt(i);
    i++;
  }
  if (i == txt.length) {
    if(!once)
    {
      document.getElementById("textType").innerHTML = 'Budi izvrstan u onome što ';
      once = true;
      i = 26;
    }
    txt = 'Budi izvrstan u onome što voliš.';
    
    if (j < txt2.length && i != 26)  {
      document.getElementById("textType2").innerHTML += txt2.charAt(j);
      j++;
    }
  }



  setTimeout(typeWriter, speed);
}

