
$(document).ready(function() {

var num = Math.floor((Math.random() * 10));
var num1 = Math.floor((Math.random() * 10));
var num2 = Math.floor((Math.random() * 10));
var num3 = Math.floor((Math.random() * 10));

  $("#square" + num).insertAfter("#square" + num1);
  $("#square" + num).insertAfter("#square" + num2);
  $("#square" + num3).insertAfter("#square" + num1);


  var memory = "X";

  $("#square1").click(function() {
    if(memory === "X") {
      memory = $("#square1").css("background-color");
      $("#square1").css("background-color", "white");
    }
    if(memory === $("#square1").css("background-color")) {
      $("#square1").css("background-color", "white");
      memory = "X";
    }
  })

  $("#square2").click(function() {
      location.reload();
  })

  $("#square3").click(function() {
    if(memory === "X") {
      memory = $("#square3").css("background-color");
      $("#square3").css("background-color", "white");
    }
    if(memory === $("#square3").css("background-color")) {
      memory = "X";
      $("#square3").css("background-color", "white");
    }
  })

  $("#square4").click(function() {
    if(memory === "X") {
      memory = $("#square4").css("background-color");
      $("#square4").css("background-color", "white");
    }
    if(memory === $("#square4").css("background-color")) {
      $("#square4").css("background-color", "white");
      memory = "X";
    }
  })

  $("#square5").click(function() {
    if(memory === "X") {
      memory = $("#square5").css("background-color");
      $("#square5").css("background-color", "white");
    }
    if(memory === $("#square5").css("background-color")) {
      $("#square5").css("background-color", "white");
      memory = "X";
    }
  })

  $("#square6").click(function() {
    if(memory === "X") {
      memory = $("#square6").css("background-color");
      $("#square6").css("background-color", "white");
    }
    if(memory === $("#square6").css("background-color")) {
      memory = "X";
      $("#square6").css("background-color", "white");
    }
  })

  $("#square7").click(function() {
    if(memory === "X") {
      memory = $("#square7").css("background-color");
      $("#square7").css("background-color", "white");
    }
    if(memory === $("#square7").css("background-color")) {
      memory = "X";
      $("#square7").css("background-color", "white");
    }
  })

  $("#square8").click(function() {
    if(memory === "X") {
      memory = $("#square8").css("background-color");
      $("#square8").css("background-color", "white");
    }
    if(memory === $("#square8").css("background-color")) {
      memory = "X";
      $("#square8").css("background-color", "white");
    }
  })

  $("#square9").click(function() {
    if(memory === "X") {
      memory = $("#square9").css("background-color");
      $("#square9").css("background-color", "white");
    }
    if(memory === $("#square9").css("background-color")) {
      memory = "X";
      $("#square9").css("background-color", "white");
    }
  })

  });
