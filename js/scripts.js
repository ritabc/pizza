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

Pie.prototype.findCost = function() {
  return 10 + this.pieSize + this.pieToppings.length
}

$(document).ready(function(){
  $("#add-one-pie").click(function(e) {
    e.preventDefault()
    var toppingsArr = []
    $("input[name=toppings]:checked").each(function(){
      toppingsArr.push($(this).val())
    })
    console.log(toppingsArr)
  })
})
