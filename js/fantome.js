class Fantome
{
    x;
    y;
    direction;

    constructor(){
        this.x = 10;
        this.y = 11;
        this.direction = 0;
    }

    bougeFantome(magrille, pacman, couleurFantome, fantomeDirection)
    {
        this.direction = fantomeDirection;

        /* FAIT AVANCER LE FANTOME */
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
        
        /* DETECTE PACMAN */
        if(this.y == pacman.y && this.x == pacman.x)
        {
            pacman.x = 5;
            pacman.y = 2;
        } 

        /* AFFICHAGE FANTOME */
        let pacmanAffichage = document.createElement('div');
        pacmanAffichage.classList.add(couleurFantome);
        pacmanAffichage.style.gridRow = this.y;
        pacmanAffichage.style.gridColumn = this.x;
        magrille.appendChild(pacmanAffichage);
    }
}

