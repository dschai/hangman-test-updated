
class Rectangle {
	constructor() {
	}
 
	//add svg rectangle to the dom
	addToDom() {
	  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	  var svgNS = svg.namespaceURI;
 
	  var rect = document.createElementNS(svgNS,'rect');
	  rect.setAttribute('x',270);
	  rect.setAttribute('y',60);
	  rect.setAttribute('width',10);
	  rect.setAttribute('height', 10);
	  rect.setAttribute('fill','red');
	  svg.appendChild(rect);
	  document.body.appendChild(svg);
 
	}
  }

  //add a small decorative red square
  var rec = new Rectangle();
  rec.addToDom();

 
  //play button leads to page.html
  $( "#play" ).click(function() {
	  document.location.href = 'page.html'
	});
 
 
  $("#h1_1").mouseenter(function () {
	  $(this).css('color', 'yellow');
 
	});
 
  $("#h1_1").mouseleave(function () {
	$(this).css('color', 'white');
	}
  ).mouseleave();
 
var path = window.location.pathname;
var page = path.split("/").pop();

if (page == "page.html") {
	document.getElementById("A").addEventListener("click", function() {
		var audio1 = new Audio("sounds/1.mp3");
		audio1.play();	
	});
	
	document.getElementById("B").addEventListener("click", function() {
		var audio2 = new Audio("sounds/2.mp3");
		audio2.play();	
	});
	
	
	document.getElementById("C").addEventListener("click", function() {
		var audio3 = new Audio("sounds/3.mp3");
		audio3.play();	
	});
	
	 document.getElementById("D").addEventListener("click", function() {
		var audio4 = new Audio("sounds/4.mp3");
		audio4.play();	
	});
	
	document.getElementById("E").addEventListener("click", function() {
		var audio5 = new Audio("sounds/5.mp3");
		audio5.play();	
	});
	
	document.getElementById("F").addEventListener("click", function() {
		var audio6 = new Audio("sounds/6.mp3");
		audio6.play();	
	});
	
	document.getElementById("G").addEventListener("click", function() {
		var audio7 = new Audio("sounds/7.mp3");
		audio7.play();	
	});
	
	document.getElementById("H").addEventListener("click", function() {
		var audio8 = new Audio("sounds/8.mp3");
		audio8.play();	
	});
	
	document.getElementById("I").addEventListener("click", function() {
		var audio9 = new Audio("sounds/9.mp3");
		audio9.play();	
	});
	
	document.getElementById("J").addEventListener("click", function() {
		var audio10 = new Audio("sounds/10.mp3");
		audio10.play();	
	});
	
	document.getElementById("K").addEventListener("click", function() {
		var audio11 = new Audio("sounds/11.mp3");
		audio11.play();	
	});
	
	document.getElementById("L").addEventListener("click", function() {
		var audio12 = new Audio("sounds/12.mp3");
		audio12.play();	
	});
	
	document.getElementById("M").addEventListener("click", function() {
		var audio13 = new Audio("sounds/13.mp3");
		audio13.play();	
	});
	
	document.getElementById("N").addEventListener("click", function() {
		var audio14 = new Audio("sounds/14.mp3");
		audio14.play();	
	});
	
	document.getElementById("O").addEventListener("click", function() {
		var audio15 = new Audio("sounds/15.mp3");
		audio15.play();	
	});
	
	document.getElementById("P").addEventListener("click", function() {
		var audio16 = new Audio("sounds/16.mp3");
		audio16.play();	
	});
	
	document.getElementById("Q").addEventListener("click", function() {
		var audio17 = new Audio("sounds/17.mp3");
		audio17.play();	
	});
	
	document.getElementById("R").addEventListener("click", function() {
		var audio18 = new Audio("sounds/18.mp3");
		audio18.play();	
	});
	
	document.getElementById("S").addEventListener("click", function() {
		var audio19 = new Audio("sounds/19.mp3");
		audio19.play();	
	});
	
	document.getElementById("T").addEventListener("click", function() {
		var audio20 = new Audio("sounds/20.mp3");
		audio20.play();	
	});
	
	document.getElementById("U").addEventListener("click", function() {
		var audio21 = new Audio("sounds/21.mp3");
		audio21.play();	
	});
	
	document.getElementById("V").addEventListener("click", function() {
		var audio22 = new Audio("sounds/22.mp3");
		audio22.play();	
	});
	
	document.getElementById("W").addEventListener("click", function() {
		var audio23 = new Audio("sounds/23.mp3");
		audio23.play();	
	});
	
	document.getElementById("X").addEventListener("click", function() {
		var audio24 = new Audio("sounds/24.mp3");
		audio24.play();	
	});
	
	document.getElementById("Y").addEventListener("click", function() {
		var audio25 = new Audio("sounds/25.mp3");
		audio25.play();	
	});
	
	document.getElementById("Z").addEventListener("click", function() {
		var audio26 = new Audio("sounds/26.mp3");
		audio26.play();	
	});

}



 
  $(document).ready(function() {


	window.categories = [];
	  fetch("file.json") 
	  .then(response=>{

		  return response.json();
	  })
	  .then(response => {
		  window.categories.push(response.vegetable);
		  window.categories.push(response.color);
	

	
	  //function expression for picking a random category
	  var pickCategory = function (categories) {
		var num = Math.floor((Math.random() * categories.length));
		return categories[num];
	  }

	var randCatList = pickCategory(window.categories);

	//function declaration for picking a random word out of a category array
	function pickWord(catList) {
	  return (catList[Math.floor((Math.random() * randCatList.length))]).toUpperCase();

	}

   
	var chosenWord = pickWord(randCatList);
	var chosenWordArray = chosenWord.split("");

	//arrow function for printing category name
	var printCat;
	printCat = () => {
		if ($.inArray("celery", randCatList) > -1) {
		  $(".message").text("Category is vegetable");
	  } else {
		  $(".message").text("Category is color");
	  }
	}
	printCat();

	//function declarations for drawing squares
	function drawSquares() {
	  // Draw squares for secret word & hide alphabets
	  for(var i = 1; i <= chosenWord.length; i++) {
		$('#box').append('<div class="alphabet ' + (i-1) + '"></div>');
		$(".alphabet").css("color", "#ABE3BE"); 
		$('#box').find(":nth-child(" + (i) + ")").text(chosenWordArray[i-1]);
		
	  } 
	}
	drawSquares();


	
	var wrongNum = 0;
	$("button").on("click", function(){
		$(this).attr("disabled", "true");
		$(this).addClass("defunct");
		var winMove = false;

		var checkWord;
		checkWord = () => {
		
		  var input = $(this).text();
		  for (var i = 1; i <= chosenWord.length; i++) {
			  if (input === chosenWord.charAt(i-1)) {
				  var target =  $('#box').find(":nth-child(" + (i) + ")");
				  target.addClass("success");
				  target.css("color", "#191970");
				  winMove = true;
			  }
		  }
		}
		checkWord();



		//function expression
		var processCorrectGuesses = function() {
		  //Check who wins
		  var rightChoices = [];
		  $(".alphabet").each(function( index ) {
			  if ($(this).attr('class').indexOf("success") >= 0) {
				  rightChoices.push(index);
				  if (chosenWordArray.length === rightChoices.length) {
					$("button").attr("disabled", "true");
					$(".message").text("Great job! you guessed the secret word!");
					$(".message").append("<br><button class='restart'>Start Over?</button>");
					$("#box").hide();
					

				  }
			  }
		  });

		}
		processCorrectGuesses();

		//function declaration
		function processWrong() {
		  // If no match, increase count and add appropriate image
		  if (winMove === false) {
			wrongNum += 1;
			$("#hangman").attr("src", "img/" + wrongNum+ ".png");
		  }
		  // If wrong guesses gets to 7 exit the game
		  if (wrongNum === 7) {
			$("button").attr("disabled", "true");
			$(".message").text("You Lost. The real answer is " + chosenWord);
			$(".message").append("<br> <button class='restart'>Start Over?</button>");
			
			$("#box").hide();

		  }
		}
		processWrong();

		// Play again button
		$(".restart").on("click", function(){
			location.reload();
		});

	}); 
		
		 
	});

 
  }); 