class PacMan
{
    x;
    y;
    direction;

    constructor(){
        this.x = 5;
        this.y = 2;
        this.direction = 0;
    }

    bougePacman()
    {
        /* RECUPERE LES TOUCHES DU CLAVIER */
        document.querySelector('body').addEventListener('keydown', function () 
        {
            let touche = window.event ? event.keyCode : event.which;
            if (touche == 90)
                this.direction = 1;
            else if (touche == 83)
                this.direction = 2;
            else if (touche == 69) 
                this.direction = 3;
            else if (touche == 65)
                this.direction = 4;
        });

        /* FAIT AVANCER PACMAN */
        if(pacman.direction == 1)
            pacman.y--;
        else if(pacman.direction == 2)
            pacman.y++;
        else if(pacman.direction == 3)
            pacman.x++;
        else if(pacman.direction == 4)
            pacman.x--;

        /* DETECTE SI IL Y A UN MUR | BLOQUE  */
        if(espaceGrille[pacman.y - 1][pacman.x - 1] == 0 && pacman.direction == 1)
            pacman.y++;
        else if(espaceGrille[pacman.y - 1][pacman.x - 1] == 0 && pacman.direction == 2)
            pacman.y--;
        else if(espaceGrille[pacman.y - 1][pacman.x - 1] == 0 && pacman.direction == 3)
            pacman.x--;
        else if(espaceGrille[pacman.y - 1][pacman.x - 1] == 0 && pacman.direction == 4)
            pacman.x++;
        else if (pacman.x == 0 && pacman.y == 11)  
            pacman.x = 19;
        else if (pacman.x == 20 && pacman.y == 11)  
            pacman.x = 1;

        /* DETECTE LES BONBONS */
        if(espaceGrille[pacman.y - 1][pacman.x - 1] == 2)
        {
            espaceGrille[pacman.y - 1][pacman.x - 1] = 1;
            score++;
            affichageScore.textContent = score; 
        }

        /* DETECTE LES FANTOMES */
        if(pacman.y == fantome.y && pacman.x == fantome.x)
        {
            vie--;
            suppressionVie = true;
            pacman.x = 5;
            pacman.y = 2;
            if(vie == 0)
            {
                testfindejeu = true;
                alert('Game over');
            }
        }

        /* AFFICHAGE PACMAN */
        perso = document.createElement('div');
        perso.classList.add('pacman');
        perso.style.gridRow = pacman.y;
        perso.style.gridColumn = pacman.x;
        magrille.appendChild(perso);

        /* CALCULE LE SCORE */
        if (score == 191) {
            testfindejeu = true;
            lvl = 2;
            alert("Vous avez gagné !");
        }
    }
}

var pacman = new PacMan();
pacman.bougePacman();