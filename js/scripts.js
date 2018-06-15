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
  return (10 + this.pieSize + this.pieToppings.length)
}

function makePieReturnCost(size, toppingsArr) {
  newPie = new Pie(size, toppingsArr)
  return newPie.calcCost()
}

function disableSubmit(buttonId) {
  $("#" + buttonId).prop("disabled", true)
}

function enableSubmit(buttonId) {
  $("#" + buttonId).prop("disabled", false)
}

function anyChecked(name) {
  // count checked, if it's > 0, return true
  var numOfChecked = 0
  $(name).each(function(index, item) {
    if ($(item).is(":checked")) {
      numOfChecked++
    }
  })
  if (numOfChecked > 0) {
    return true
  } else {
    return false
  }
}

$(document).ready(function(){
  // on load, disable toppings and pre-made buttons
  disableSubmit("add-custom-pie")
  // disableSubmit("add-pre-made-pie")

  // On click of any of the labels for a given question (eg. toppings), run the function that: 1) runs the if anyChecked, then enableSubmit
  $("#toppings-question").click(function(e) {
    var questionName = "[name=toppings]"
    var submitName = "add-custom-pie"
    if (anyChecked(questionName)) {
      enableSubmit(submitName)
    }
  })


  $("#add-custom-pie").click(function(e) {
    e.preventDefault()
    var toppingsArr = []
    $("input[name=toppings]:checked").each(function(){
      toppingsArr.push($(this).val())
    })
    var size = $("input[name=pie-size]:checked").val()
    var totalCost = 0
    totalCost += makePieReturnCost(size, toppingsArr)
  })
})
