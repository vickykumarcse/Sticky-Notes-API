window.onload = function(){
    //Navbar
    var elem = document.querySelector('.sidenav');
    var options = {};
    options.edge = "left"; 
    var instance = M.Sidenav.init(elem, options);

    //tabs
    var el = document.querySelector('.tabs');
    var instance = M.Tabs.init(el, {});

    //URL Binding
    var urls = document.getElementsByClassName("urlBinding");
    for(var i=0; i < urls.length; i++){
        urls[i].innerHTML = location.protocol+ "//" + location.host +"/" + urls[i].innerHTML;
    }
}
