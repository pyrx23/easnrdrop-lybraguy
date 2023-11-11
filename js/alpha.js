function ajaxcall(number) {
    // (B1) GET FORM DATA

    var id = document.getElementById(number).id;
    var checkbox = document.getElementById(number).checked;


    var card = document.getElementById("card" + number);
    if (card != undefined){
    card.classList.toggle("white");
    }

    

    var formData = new FormData();
    formData.append("id_strategy", id);
    formData.append("checkbox", checkbox); 
    // (B2) AJAX CALL
               var xhr = new XMLHttpRequest();
    xhr.open("POST.html", "helpers/update_strategy.html");
    xhr.onload = function() {

    };
    xhr.withCredentials = true;
    xhr.send(formData);
}

