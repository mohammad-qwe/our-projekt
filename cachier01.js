/** ArticleStore:Object Array */
// Object properties: name, price
var ArticleStore = [
    {name: "Bannane", price: 1},
{name: "Orange", price: 1.3},
]
/** addPos */
// in: article:String, amount
// out: total
function addPos(article, amount) {  /** scanen function */
    var articlePrice = getArticlePrice(article)
    var articleWithVAT = articlePrice * 1.19
    var posTotal = articleWithVAT * amount
    var currentTotal = addToTotal(posTotal)
    return currentTotal
}
/** removePos */
// in: article:String, amount:Number
// out: total
/** getArticlePrice */
// in: article:String
// price:Number
function getArticlePrice(articleName) {
    var price = 0
    for(var i =0; i< ArticleStore.length;i++)
    { var obj = ArticleStore[i]
        if(articleName == obj.name )
        {
            return obj.price
        }
    }
}
/** pay */
// in: given
// out: change
function pay(given){
    var rest = change(given)
    for(var i = 0; i < checkout.positions.length; i++) {
        console.log("Pos "+ (i + 1) + ": " + checkout.positions[i])
    }
    checkout.reset()
    return rest
}

