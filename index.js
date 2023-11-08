let count = 0;

const coverTileOne = document.getElementById('tiles1');
const coverTileTwo = document.getElementById('tiles2');
const coverTileThree = document.getElementById('tiles3');
const coverTileFour = document.getElementById('tiles4');
const coverTileFive = document.getElementById('tiles5');
const coverTileSix = document.getElementById('tiles6');

function flipCoverTile(tile) {
    tile.target.style.zIndex = -1;
    checkFlippedTiles();
};

coverTileOne.addEventListener('click', flipCoverTile);
coverTileTwo.addEventListener('click', flipCoverTile);
coverTileThree.addEventListener('click', flipCoverTile);
coverTileFour.addEventListener('click', flipCoverTile);
coverTileFive.addEventListener('click', flipCoverTile);
coverTileSix.addEventListener('click', flipCoverTile);

function unflipCoverTile() {
    for(let i = 0; i < 6; i++) {
        document.getElementById(`tiles${i}`).style.zIndex = 2;
    }
    return document.getElementById('modal').style.display = 'none';
}

function checkFlippedTiles() {
    for(let i = 1; i < 7; i++) {
        if(document.getElementById(`tiles${i}`).style.zIndex == -1) {
            count++;
        }
        if(count > 1) {
            document.getElementById('modal').style.display = 'block';
            setTimeout(unflipCoverTile, 100);
            count = 0;
        }
    }
};

