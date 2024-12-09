window.onload = function() {
    // Aseta 1-2 sekunnin viive logon poistamiseen
    setTimeout(function() {
        // Poista logo ja näytä sisältö
        document.getElementById("logo-container").style.opacity = 0;
        document.getElementById("content").style.display = "block";
        
        // Lisää animaatio sisällön esiin tulemiseksi
        setTimeout(function() {
            document.getElementById("content").classList.add("fade-in");
        }, 100); // Pieni viive ennen animaation alkua
    }, 1500); // Logo näkyy 1,5 sekuntia ennen kuin se katoaa
};
