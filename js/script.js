function jeu()
{
    /* ALEATOIRE */
    function getRandomIntInclusive(min, max) 
    {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /* PERSONNAGE */
    var pacman = new PacMan();
    var fantome = new Fantome();
    var fantome2 = new Fantome();
    var fantome3 = new Fantome();
    var fantome4 = new Fantome();

    /* RECUPERE LES TOUCHES DU CLAVIER */
    document.querySelector('body').addEventListener('keydown', function () 
        {
            let touche = window.event ? event.keyCode : event.which;
            if (touche == 90)
                pacman.direction = 1;
            else if (touche == 83)
                pacman.direction = 2;
            else if (touche == 69) 
                pacman.direction = 3;
            else if (touche == 65)
                pacman.direction = 4;
        });

    /* ACTUALISE LE JEU */
    function refresh() 
    {  
            /* CREATION DE LA  MAP */
            espaceGrilleGenere.initGrille(espaceGrille);

            /* DEPLACEMENT PERSONNAGE */
            let fantomeDirection = getRandomIntInclusive(1, 4);
            let fantomeDirection2 = getRandomIntInclusive(1, 4);
            let fantomeDirection3 = getRandomIntInclusive(1, 4);
            let fantomeDirection4 = getRandomIntInclusive(1, 4);

            pacman.bougePacman(grille, fantome);
            fantome.bougeFantome(grille, pacman, "fantome-bleue", fantomeDirection);
            fantome2.bougeFantome(grille, pacman, "fantome-orange", fantomeDirection2);
            fantome3.bougeFantome(grille, pacman, "fantome-rouge", fantomeDirection3);
            fantome4.bougeFantome(grille, pacman, "fantome-vert", fantomeDirection4);

            /* BOUCLE LE JEU */
            setTimeout(refresh, 400);
    }
    refresh();
}

// LANCE LE JEU
jeu(); 

