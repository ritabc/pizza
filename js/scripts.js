function Pie(size, type) {
  this.pieType = type
  if (size === "large") {
    this.pieSize = 3
  } else if (size === "medium") {
    this.pieSize = 2
  } else if (size === "small") {
    this.pieSize = 1
  } else {console.log("Please enter the size of the pie")}
}

Pie.prototype.calcCost = function() {
  if (typeof(this.pieType) === "object") {
    return (10 + this.pieSize + this.pieType.length)
  } else if (typeof(this.pieType) === "string") {
    return 10 + this.pieSize + 2.5
  }
}

function makePieReturnCost(size, type) {
  newPie = new Pie(size, type)
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
  // on load, disable choose size button, custom pie btn, and pre-made button
  disableSubmit("add-custom-pie")
  disableSubmit("choose-size")
  disableSubmit("add-pre-made-pie")

  // initiate totalCost
  var totalCost = 0

  // enable toppings pie iff at least 1 topping is checked
  $("#toppings-question").click(function() {
    var questionName = "[name=toppings]"
    var submitName = "add-custom-pie"
    if (anyChecked(questionName)) {
      enableSubmit(submitName)
    }
  })

  // enable choose-size button iff size is chosen
  $("#pie-size-question").click(function() {
    var questionName = "[name=pie-size]"
    var submitName = "choose-size"
    if (anyChecked(questionName)) {
      enableSubmit(submitName)
    }
  })

  // enable add pre-made button iff 1 is chosen
  $("#pre-made-question").click(function(){
    var questionName = "[name=pre-made]"
    var submitName = "add-pre-made-pie"
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
    totalCost += makePieReturnCost(size, toppingsArr)
    console.log(totalCost)
  })

  $("#add-pre-made-pie").click(function(e){
    e.preventDefault()
    var type = $("input[name=pre-made]:checked").val()
    var size = "large"
    totalCost += makePieReturnCost(size, type)
    console.log(totalCost)
  })

})


// comments:
onLoad:
  onClickChooseSize:
    hide size question
    show row with types
    return size
  onClickChooseToppings:
    hide row with pie types
    show section: would you like to order another?
    return toppingsArray
  onClickChooseCustom:
