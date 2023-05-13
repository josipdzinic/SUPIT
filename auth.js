
{
    var prijava = $("#prijava");
    var odjava = $("#odjava");
    
    if(localStorage.hasOwnProperty('token'))
    {
        prijava.hide();
        odjava.show();
    }
    else
    {
        prijava.show();
        odjava.hide();
    }

}
