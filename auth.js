
{
    var prijava = $("#prijava");
    var odjava = $("#odjava");
    var nastavniplan = $("#nastavniplan");
    
    if(localStorage.hasOwnProperty('token'))
    {
        prijava.hide();
        odjava.show();
        nastavniplan.show();
    }
    else
    {
        prijava.show();
        odjava.hide();
        nastavniplan.hide();
    }

}

function logout()
{
  localStorage.clear();
  setTimeout(() => {
    window.location.replace("index.html");
  }, 1000);
}
