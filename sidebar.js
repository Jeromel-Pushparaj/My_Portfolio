function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

//adding links to all the buttons
document.addEventListener("DOMContentLoaded", function() {
    const abtb = document.getElementById('abtb');
    abtb.addEventListener('click', function() {
        window.open('https://www.linkedin.com/in/jeromel-pushparaj/', '_blank');
    });
    //for project section button link
    //this is project 1
    const pb1 = document.getElementById('pb1');
    pb1.addEventListener('click', function() {
        window.open('https://github.com/Jeromel-Pushparaj/Begining_times', '_blank');
    });
    const pdb1 = document.getElementById('pdb1');
    pdb1.addEventListener('click', function() {
        window.open('https://github.com/Jeromel-Pushparaj/Begining_times', '_blank');
    });
    //this is for project 2
    const pb2 = document.getElementById('pb2');
    pb2.addEventListener('click', function() {
        window.open('https://github.com/Jeromel-Pushparaj/MySQL-Database-Manipulation-Program', '_blank');
    });
    const pdb2 = document.getElementById('pdb2');
    pdb2.addEventListener('click', function() {
        window.open('https://github.com/Jeromel-Pushparaj/MySQL-Database-Manipulation-Program', '_blank');
    });
    const pb3 = document.getElementById('pb3');
    pb3.addEventListener('click', function() {
        window.open('https://github.com/Jeromel-Pushparaj/My-projects', '_blank');
    });
    const pdb3 = document.getElementById('pdb3');
    pdb3.addEventListener('click', function() {
        window.open('https://github.com/Jeromel-Pushparaj/My-projects', '_blank');
    });

    const cb = document.getElementById('cb');
    cb.addEventListener('click', function() {
        window.open('https://www.linkedin.com/in/jeromel-pushparaj/', '_blank');
    });
});


