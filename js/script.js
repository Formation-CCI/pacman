function jeu()
{

    /* ACTUALISE LE JEU */
    function refresh() 
    {  
        if (testfindejeu == false) {
            initGrille();
            gameplay(grille);
            setTimeout(refresh, 400);
        }
    }
    refresh();
}

function calculVie()
{
    if(suppressionVie == false)
    {
        while(inc < vie)
        {
            let nombreVie = document.createElement('div');
            nombreVie.classList.add("vie")
            nombreVie.style.gridColumn = 10;
            nombreVie.style.gridRow = 1;
            affichageVie.appendChild(nombreVie);
            inc++;
        }
    }
    else
    {
        let nombreVie = affichageVie.lastElementChild; 
        affichageVie.removeChild(nombreVie);
        suppressionVie = false;
    }
}
// LANCE LE JEU
jeu(); 

