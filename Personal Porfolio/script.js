 var tablinks = document.getElementsByClassName("about-links");
            var tabcontents = document.getElementsByClassName("about-contents");
            
            function opentab(tabname) {
                 for(tablink of tablinks){
                    tablink.classList.remove("active-link");
                 }
                 
                 for(tabcontent of tabcontents){
                    tabcontent.classList.remove("active-contents");
                 }
                 event.currentTarget.classList.add("active-link");
                 document.getElementById(tabname).classList.add("active-contents");
            };

function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}