var shoppingCard = null;
var shoppingCardName = "gozcuCard";

function initCard() {
    if (localStorage == undefined)
        console.log("localStorage is not supported by your browser.");
    else {
        shoppingCard = getCard();
        if (shoppingCard == undefined) {
            shoppingCard = [];
            updateCard();
        }
    }
}

function isAny(item) {
    for (let i = 0; i < shoppingCard.length; i++)
        if (shoppingCard[i].Id == item.Id)
            return i;
    return -1;
}

function isAnyWithId(id) {
    for (let i = 0; i < shoppingCard.length; i++)
        if (shoppingCard[i].Id == id)
            return i;
    return -1;
}

function getItem(index) {
    return shoppingCard[index];
}

function increasePiece(id, piece) {
    let index = isAnyWithId(id);
    if (index != -1) {
        if (piece == undefined)
            shoppingCard[index].Adet++;
        else
            shoppingCard[index].Adet += piece;
        updateCard();
    }
}

function increasePieceWithIndex(index, piece) {
    if (index != -1) {
        if (piece == undefined)
            shoppingCard[index].Adet++;
        else
            shoppingCard[index].Adet += piece;
    }
}

function reducePiece(id, piece) {
    let index = isAnyWithId(id);
    if (index != -1) {
        if (piece == undefined)
            shoppingCard[index].Adet--;
        else
            shoppingCard[index].Adet -= piece;
        updateCard();
    }
}

function addToCard(item) {
    let index = isAny(item);
    if (index != -1)
        increasePieceWithIndex(index, item.Adet);
    else {
        item.Adet = 1;
        shoppingCard.push(item);
    }
    updateCard();
}

function removeFromCard(id) {
    console.log(id);
    let index = isAnyWithId(id);
    console.log(index);
    if (index != -1) {
        shoppingCard.splice(index, 1);
        updateCard();
    }
}

function getCard() {
    return JSON.parse(localStorage.getItem(shoppingCardName));
}

function updateCard() {
    localStorage.setItem(shoppingCardName, JSON.stringify(shoppingCard));
}

function removeCard() {
    shoppingCard = null;
    localStorage.removeItem(shoppingCardName);
}
