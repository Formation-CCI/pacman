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

    bougePacman(magrille, fantome)
    {
        /* FAIT AVANCER PACMAN */
        if(this.direction == 1)
            this.y--;
        else if(this.direction == 2)
            this.y++;
        else if(this.direction == 3)
            this.x++;
        else if(this.direction == 4)
            this.x--;

        /* DETECTE SI IL Y A UN MUR | BLOQUE  */
        if(espaceGrille[this.y - 1][this.x - 1] == 0 && this.direction == 1)
            this.y++;
        else if(espaceGrille[this.y - 1][this.x - 1] == 0 && this.direction == 2)
            this.y--;
        else if(espaceGrille[this.y - 1][this.x - 1] == 0 && this.direction == 3)
            this.x--;
        else if(espaceGrille[this.y - 1][this.x - 1] == 0 && this.direction == 4)
            this.x++;
        else if (this.x == 0 && this.y == 11)  {
            this.x = 19;
        }
        else if (this.x == 20 && this.y == 11)  {
            this.x = 1;
        }

        /* DETECTE LES BONBONS */
        if(espaceGrille[this.y - 1][this.x - 1] == 2)
        {
            espaceGrille[this.y - 1][this.x - 1] = 1;
        }

        /* DETECTE LES FANTOMES */
        if(this.y == fantome.y && this.x == fantome.x)
        {
            this.x = 5;
            this.y = 2;
        } 

        /* AFFICHAGE PACMAN */
        let pacmanAffichage = document.createElement('div');
        pacmanAffichage.classList.add('pacman');
        pacmanAffichage.style.gridRow = this.y;
        pacmanAffichage.style.gridColumn = this.x;
        magrille.appendChild(pacmanAffichage);
    }
}

