function Pie(size, toppingsArr) {
  this.pieToppings = toppingsArr
  if (size === "large") {
    this.pieSize = 3
  } else if (size === "medium") {
    this.pieSize = 2
  } else if (size === "small") {
    this.pieSize = 1
  } else {console.log("Please enter the size of the pie")}
}

Pie.prototype.calcCost = function() {
  console.log(this.pieToppings, this.pieToppings.length)
  console.log(this.pieSize, typeof(this.pieSize))
  return (10 + this.pieSize + this.pieToppings.length)
}

function makePieReturnCost(size, toppingsArr) {
  newPie = new Pie(size, toppingsArr)
  console.log(newPie, newPie.calcCost)
  return newPie.calcCost()
}

$(document).ready(function(){
  $("#add-one-pie").click(function(e) {
    e.preventDefault()
    var toppingsArr = []
    $("input[name=toppings]:checked").each(function(){
      toppingsArr.push($(this).val())
    })
    var size = $("input[name=pie-size]:checked").val()
    var totalCost = 0
    totalCost += makePieReturnCost(size, toppingsArr)
    console.log(totalCost)
  })
})
