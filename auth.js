
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


function contact()
{
    
  
  // contact form animations
  $('#contact').click(function() {
    $('#contactForm').fadeIn();
  })
  $(document).mouseup(function (e) {
    var container = $("#contactForm");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.fadeOut();
    }
  });
}