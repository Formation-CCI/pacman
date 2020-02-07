function jeu()
{
    // VARIABLE DECLARER

    var espaceGrille =[
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0],
        [0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0],
        [0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0],
        [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
        [0, 2, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 2, 0],
        [0, 2, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 2, 0],
        [0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0],
        [0, 1, 1, 0, 2, 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 1, 1, 0],
        [0, 0, 0, 0, 2, 0, 2, 0, 0, 2, 0, 0, 2, 0, 2, 0, 0, 0, 0],
        [2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2],
        [0, 0, 0, 0, 2, 0, 2, 0, 0, 2, 0, 0, 2, 0, 2, 0, 0, 0, 0],
        [0, 1, 1, 0, 2, 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 1, 1, 0],
        [0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0],
        [0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0],
        [0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0],
        [0, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 0],
        [0, 0, 2, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 2, 0, 0],
        [0, 2, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 2, 0],
        [0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0],
        [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    var score = 0;
    var affichageScore = document.querySelector('h1');
    var grille = document.querySelector("#grille");
    var pacman = {
        x : 5,
        y : 2,
        direction : 0
    }

    // FONCTION DECLARER

    function viderGrille()
    {
        grille.innerHTML = "";
    }

    function initGrille()
    {   
        /* VIDER LA GRILLE */
        viderGrille();

        /* CREATION DE LA GRILLE */
        grille.style.display = "grid";
        grille.style.gridTemplateRows = "repeat(22, 40px)";
        grille.style.gridTemplateColumns = "repeat(19, 40px)";
        let i = 0;
        let y = 0;
        
        /* PARCOURIR LE TABLEAU ET REMPLIR LA GRILLE */
        while(i < espaceGrille.length)
        {
            y = 0;
            while(y < espaceGrille[i].length)
            {
                if(espaceGrille[i][y] == 0)
                {
                    let mur = document.createElement('div');
                    mur.classList.add("mur")
                    mur.style.gridColumn = (+y) + 1;
                    mur.style.gridRow = (+i) + 1;
                    grille.appendChild(mur);
                }
                if(espaceGrille[i][y] == 1)
                {
                    let sol = document.createElement('div');
                    sol.classList.add("sol");
                    sol.style.gridColumn = (+y) + 1;
                    sol.style.gridRow = (+i) + 1;
                    grille.appendChild(sol);
                }
                if(espaceGrille[i][y] == 2)
                {
                    let bonbon = document.createElement('div');
                    bonbon.classList.add("bonbon");
                    bonbon.style.gridColumn = (+y) + 1;
                    bonbon.style.gridRow = (+i) + 1;
                    grille.appendChild(bonbon);
                }
                y++;
            }
            i++;
        }
    }

    function pacmanBouge(magrille)
    {
        /* RECUPERE LES TOUCHES DU CLAVIER */
        document.querySelector('body').addEventListener('keydown', function () 
        {
            var touche = window.event ? event.keyCode : event.which;
            if (touche == 90) {
                pacman.direction = 1;
            }
            if (touche == 83) {
                pacman.direction = 2;
            }
            if (touche == 69) {
                pacman.direction = 3;
            }
            if (touche == 65) {
                pacman.direction = 4;
            }
        });
        
        /* FAIT AVANCER LE PERSONNAGE */
        if(pacman.direction == 1)
        {
            pacman.y--;
        }
        else if(pacman.direction == 2)
        {
            pacman.y++;
        }
        else if(pacman.direction == 3)
        {
            pacman.x++;
        }
        else if(pacman.direction == 4)
        {
            pacman.x--;
        }
    
        /* DETECTE SI IL Y A UN MUR */
        if(espaceGrille[pacman.y - 1][pacman.x - 1] == 0 && pacman.direction == 1)
        {
            pacman.y++;
        }
        else if(espaceGrille[pacman.y - 1][pacman.x - 1] == 0 && pacman.direction == 2)
        {
            pacman.y--;
        }
        else if(espaceGrille[pacman.y - 1][pacman.x - 1] == 0 && pacman.direction == 3)
        {
            pacman.x--;
        }
        else if(espaceGrille[pacman.y - 1][pacman.x - 1] == 0 && pacman.direction == 4)
        {
            pacman.x++;
        }

        /* DETECTE SI IL Y A DES PIECES */
        if(espaceGrille[pacman.y - 1][pacman.x - 1] == 2)
        {
            espaceGrille[pacman.y - 1][pacman.x - 1] = 1;
            score++;
            affichageScore.textContent = "Votre score : " + score;
        }
    
        /* AFFICHAGE */
        let pacmanEmplacement = document.createElement('div');
        pacmanEmplacement.classList.add("pacman");
        pacmanEmplacement.style.gridRow = pacman.y;
        pacmanEmplacement.style.gridColumn = pacman.x;
        magrille.appendChild(pacmanEmplacement);
    }

    function refresh() 
    {  
        initGrille();
        pacmanBouge(grille);
        setTimeout(refresh, 500);
    }
    
    // ACTUALISE LE JEU

    refresh();
}

// LANCE LE JEU

jeu(); 