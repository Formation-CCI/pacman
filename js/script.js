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
        [0, 0, 0, 0, 2, 0, 2, 0, 0, 1, 0, 0, 2, 0, 2, 0, 0, 0, 0],
        [2, 2, 2, 2, 2, 2, 2, 0, 1, 1, 1, 0, 2, 2, 2, 2, 2, 2, 2],
        [0, 0, 0, 0, 2, 0, 2, 0, 0, 1, 0, 0, 2, 0, 2, 0, 0, 0, 0],
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
    var affichageVie = document.querySelector('.AffichageVie');
    var grille = document.querySelector("#grille");
    var vie = 3;
    var inc = 0;
    var suppressionVie = false;
    var pacman = new personnage(5, 2, 0);
    var fantome = new personnage(10, 11, 0);
    var fantome2 = new personnage(10, 11, 0);
    var fantome3 = new personnage(10, 11, 0);
    
    // FONCTION DECLARER
    document.querySelector('#rejouer').addEventListener('click', function () 
        {
            refresh();
        });
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
            var nombreVie = affichageVie.lastElementChild; 
            affichageVie.removeChild(nombreVie);
            suppressionVie = false;
        }
    }

    function getRandomIntInclusive(min, max) 
    {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function personnage(x, y, direction)
    {
        this.x = x;
        this.y = y;
        this.direction = 0;

        /* DEPLACEMENT PERSONNAGE */
        this.deplacementPersonnage = function(personnageDirection)
        {
            /* FAIT AVANCER LE PERSONNAGE */
            this.direction = personnageDirection;
            if(this.direction == 1)
                this.y--;
            else if(this.direction == 2)
                this.y++;
            else if(this.direction == 3)
                this.x++;
            else if(this.direction == 4)
                this.x--;
        
            /* DETECTE SI IL Y A UN MUR */
            if(espaceGrille[this.y - 1][this.x - 1] == 0 && this.direction == 1)
                this.y++;
            else if(espaceGrille[this.y - 1][this.x - 1] == 0 && this.direction == 2)
                this.y--;
            else if(espaceGrille[this.y - 1][this.x - 1] == 0 && this.direction == 3)
                this.x--;
            else if(espaceGrille[this.y - 1][this.x - 1] == 0 && this.direction == 4)
                this.x++;
        }

        /* AFFICHAGE PERSONNAGE */
        this.affichagePersonnage = function(magrille, classPersonnage)
        {
            perso = document.createElement('div');
            perso.classList.add(classPersonnage);
            perso.style.gridRow = this.y;
            perso.style.gridColumn = this.x;
            magrille.appendChild(perso);
        }
    }

    function viderGrille()
    {
        grille.innerHTML = "";
    }

    function genereMap(grille, classMap, i, y)
    {
        let type = document.createElement('div');
        type.classList.add(classMap)
        type.style.gridColumn = (+y) + 1;
        type.style.gridRow = (+i) + 1;
        grille.appendChild(type);
    }

    function initGrille()
    {   
        /* VIDE LA GRILLE */
        viderGrille();
        calculVie()

        /* CREATION DE LA GRILLE */
        grille.style.display = "grid";
        grille.style.gridTemplateRows = "repeat(22, 40px)";
        grille.style.gridTemplateColumns = "repeat(19, 40px)";
        let i = 0;
        let y = 0;
        if(score == 191)
        {
            alert('Vous avez gagné !');
        }
        /* PARCOURE LE TABLEAU ET REMPLIE LA GRILLE */
        while(i < espaceGrille.length)
        {
            y = 0;
            while(y < espaceGrille[i].length)
            {
                if(espaceGrille[i][y] == 0)
                    genereMap(grille, "mur", i, y);
                else if(espaceGrille[i][y] == 1)
                    genereMap(grille, "sol", i, y);
                else if(espaceGrille[i][y] == 2)
                {
                    genereMap(grille, "bonbon", i, y);
                }
                y++;
            }
            i++;
        }
    }
    
    function Collision(magrille, explorer,cibleToucher)
    {
        if(explorer.y == cibleToucher.y && explorer.x == cibleToucher.x)
        {
            vie--;
            suppressionVie = true;
            pacman.x = 5;
            pacman.y = 2;
            if(vie == 0)
            {
                alert('Game over');
            }
        }
    }

    function gameplay(magrille)
    {
        /* RECUPERE LES TOUCHES DU CLAVIER */
        document.querySelector('body').addEventListener('keydown', function () 
        {
            var touche = window.event ? event.keyCode : event.which;
            if (touche == 90)
                pacman.direction = 1;
            else if (touche == 83)
                pacman.direction = 2;
            else if (touche == 69) 
                pacman.direction = 3;
            else if (touche == 65)
                pacman.direction = 4;
        });

        var fantomeDirection = getRandomIntInclusive(1, 4);
        var fantomeDirection2 = getRandomIntInclusive(1, 4);
        var fantomeDirection3 = getRandomIntInclusive(1, 4);

        /* DEPLACE LES PERSONNAGES */
        pacman.deplacementPersonnage(pacman.direction);
        fantome.deplacementPersonnage(fantomeDirection);
        fantome2.deplacementPersonnage(fantomeDirection2);
        fantome3.deplacementPersonnage(fantomeDirection3);
        
        /* DETECTE SI IL Y A DES BONBONS */
        if(espaceGrille[pacman.y - 1][pacman.x - 1] == 2)
        {
            espaceGrille[pacman.y - 1][pacman.x - 1] = 1;
            score++;
            affichageScore.textContent = score; 
        } 
        
        /* DETECTE SI IL Y A DES FANTOMES */
        Collision(magrille, pacman, fantome);
        Collision(magrille, pacman, fantome2);
        Collision(magrille, pacman, fantome3);

        Collision(magrille, fantome, pacman);
        Collision(magrille, fantome2, pacman);
        Collision(magrille, fantome3, pacman);
        
        /* AFFICHAGE */
        pacman.affichagePersonnage(magrille, "pacman");
        fantome.affichagePersonnage(magrille, "fantome");
        fantome2.affichagePersonnage(magrille, "fantome2");
        fantome3.affichagePersonnage(magrille, "fantome3");
    }

    function refresh() 
    {  
        initGrille();
        gameplay(grille);
        setTimeout(refresh, 400);
    }
    
    // ACTUALISE LE JEU

    refresh();
}

// LANCE LE JEU

jeu(); 