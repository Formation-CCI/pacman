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

// LANCE LE JEU
jeu(); 

