let count = 0;
let score = 0;
let imageArr = ['Happy.png', 'Happy.png', 'Frog.jpg', 'Frog.jpg', 'Cat.png', 'Cat.png'];
let compareArr = [];
let completeArr = [];
imageArr.sort(() => Math.random() - 0.5);

const coverTileOne = document.getElementById('tiles1');
const coverTileTwo = document.getElementById('tiles2');
const coverTileThree = document.getElementById('tiles3');
const coverTileFour = document.getElementById('tiles4');
const coverTileFive = document.getElementById('tiles5');
const coverTileSix = document.getElementById('tiles6');

function setImages() {
    for(let i = 1; i < 7; i++) {
        document.getElementById(`image${i}`).src = imageArr[i-1];
    }
}

setImages();

function flipCoverTile(tile) {
    tile.target.style.zIndex = -1;
    for(let i = 1; i < 7; i++) {
        if(document.getElementById(`tiles${i}`).style.zIndex == -1 && count < 2) {
           if(compareArr[0] == undefined) {
                compareArr[0] = document.getElementById(`image${i}`).src;
                document.getElementById(`tiles${i}`).style.zIndex = -2;
                count++;
            } else {
                compareArr[1] = document.getElementById(`image${i}`).src;
                document.getElementById(`tiles${i}`).style.zIndex = -2;
                count++;
            }
        } 
    }
    if(count > 1) {
        if(compareArr[0] === compareArr[1]) {
            for(let i = 1; i < 7; i++) {
                for(let j = 0; j < 2; j++) {
                    if(compareArr[j] == document.getElementById(`image${i}`).src && document.getElementById(`tiles${i}`).style.zIndex == -2) {
                        document.getElementById(`tiles${i}`).style.zIndex = -3;
                    }
                }
            }
            completeArr.push(...compareArr);
            compareArr = [];
            if(completeArr.length == 6) {
                score++;
                document.getElementById('score').innerHTML = score;
                for(let i = 1; i < 7; i++) {
                    document.getElementById(`tiles${i}`).style.zIndex = 2;
                }
                count = 0;
                completeArr = [];
                return setTimeout(completeAlert, 50);
            }
            return count = 0;
        } else {
        document.getElementById('modal').style.display = 'block';
        compareArr = [];
        count = 0;
        return setTimeout(unflipCoverTile, 1000);
        }
    }
};

function completeAlert() {
    alert('Congratulations!');
};

coverTileOne.addEventListener('click', flipCoverTile);
coverTileTwo.addEventListener('click', flipCoverTile);
coverTileThree.addEventListener('click', flipCoverTile);
coverTileFour.addEventListener('click', flipCoverTile);
coverTileFive.addEventListener('click', flipCoverTile);
coverTileSix.addEventListener('click', flipCoverTile);

function unflipCoverTile() {
    for(let i = 1; i < 7; i++) {
        if(document.getElementById(`tiles${i}`).style.zIndex == -2) {
        document.getElementById(`tiles${i}`).style.zIndex = 2;
        }
    }
    return document.getElementById('modal').style.display = 'none';
}

function resetScore() {
    document.getElementById('score').innerHTML = 0;
    return score = 0;
}