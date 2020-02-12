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
}
let fantome = new personnage(10, 11, 0);
let fantome2 = new personnage(10, 11, 0);
let fantome3 = new personnage(10, 11, 0);

function getRandomIntInclusive(min, max) 
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
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
            testfindejeu = true;
            alert('Game over');
        }
    }
}

function gameplay(magrille)
{
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

    /* DEPLACE LES PERSONNAGES */
    let fantomeDirection = getRandomIntInclusive(1, 4);
    let fantomeDirection2 = getRandomIntInclusive(1, 4);
    let fantomeDirection3 = getRandomIntInclusive(1, 4);

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

    if (score == 191) {
        testfindejeu = true;
        lvl = 2;
        alert("Vous avez gagné !");
    }
}

