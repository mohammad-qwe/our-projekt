var checkout = {
    total: 0,
    position: [],
    reset: function(){
        this.total= 0
        this.positions = []
    }
}

/** addToTotal */
// in: article sum
// out: total
function addToTotal(sum) {
lastPos++
positions[lastPos] = sum
checkout.positions.push(sum)
total += sum
return total
}
/** subtractFromTotal */
// in: article sum
// out: total
/** change */
// in: given
// out: change
function change(given) {
var rest = given - total
return rest
}
/** reset for next customer */
function reset() {
total = 0
positions = []
lastPos = -1
}

