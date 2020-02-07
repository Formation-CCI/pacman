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

function viderGrille()
{
        grille.innerHTML = "";
}
function initGrille()
{
    /* SELECTION DE LA GRILLE */
    
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
    document.querySelector('body').addEventListener('keydown', function () {
        console.log(event.which);
        var touche = window.event ? event.keyCode : event.which;
        if (touche == 38) {
            pacman.direction = 1;
        }
        if (touche == 40) {
            pacman.direction = 2;
        }
        if (touche == 39) {
            pacman.direction = 3;
        }
        if (touche == 37) {
            pacman.direction = 4;
        }
    });
    
    
    let pacmanEmplacement = document.createElement('div');
    pacmanEmplacement.classList.add("pacman");
    pacmanEmplacement.style.gridRow = pacman.y;
    pacmanEmplacement.style.gridColumn = pacman.x;
    magrille.appendChild(pacmanEmplacement);
    let i = 0;
    let y = 0;
    
    /* PARCOURIR LE TABLEAU ET REMPLIR LA GRILLE */
    while(i < espaceGrille.length)
    {
        y = 0;
        while(y < espaceGrille[i].length)
        {
            if(espaceGrille[i][y] == 0 || espaceGrille[i] == 0)
            {
                
            }
            else
            {
                if(pacman.direction == 1)
                {
                    pacman.y--;
                    pacman.direction = 0;
                }
                if(pacman.direction == 2)
                {
                    pacman.y++;
                    pacman.direction = 0;
                }
                if(pacman.direction == 3)
                {
                    pacman.x++;
                    pacman.direction = 0;
                }
                if(pacman.direction == 4)
                {
                    pacman.x--;
                    pacman.direction = 0;
                }
            }
            y++;
        }
        i++;
    }
}

var pacman = {
    x : 5,
    y : 2,
    direction : 0
}
var grille = document.querySelector("#grille");

function refresh() {  
        initGrille();
        pacmanBouge(grille);
        setTimeout(refresh, 100);
}
refresh();
