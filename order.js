window.addEventListener("load",function(){
    initCard();
});

var addToCardButttons = document.getElementsByClassName("add-to-card");
for(let i = 0; i < addToCardButttons.length; i++){
    addToCardButttons[i].addEventListener("click",function(){
        let product = JSON.parse(this.getAttribute("data-product"));
        addToCard(product);
    });
}

var removeFromCardButtons = document.getElementsByClassName("remove-from-card");
for(let i = 0; i < removeFromCardButtons.length; i++){
    removeFromCardButtons[i].addEventListener("click",function(){
         let id = JSON.parse(this.getAttribute("data-id"));
         removeFromCard(id);
    });
}

var increaseButtons = document.getElementsByClassName("increase");
for(let i = 0; i < increaseButtons.length; i++){
    increaseButtons[i].addEventListener("click",function(){
        let id = JSON.parse(this.getAttribute("data-id"));
        increasePiece(id);
    });
}

var reduceButtons = document.getElementsByClassName("reduce");
for(let i = 0; i < reduceButtons.length; i++){
    reduceButtons[i].addEventListener("click",function(){
        let id = JSON.parse(this.getAttribute("data-id"));
        reducePiece(id);
    });
}

