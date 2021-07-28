class Rectangle {
	constructor(height, width) {
	  this.height = height;
	  this.width = width;
	}
 
	//add svg rectangle to the dom
	addToDom(width, height) {
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

  var rec = new Rectangle(10, 10);
  rec.addToDom(10, 10);

 
  $( "#play" ).click(function() {
	  document.location.href = 'index.html'
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

if (page == "") {
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
	      console.log(window.categories + "CATEGORIES");


	
	
	  //function expression for picking a random category
	  var pickCategory = function (categories) {
		var num = Math.floor((Math.random() * categories.length));
		console.log(num)
		return categories[num];
	}

	var randomCategoryArray = pickCategory(window.categories);
	console.log(randomCategoryArray);

	//function declaration for picking a random word out of a category array
	function pickWord(categoryArray) {
	  return (categoryArray[Math.floor((Math.random() * randomCategoryArray.length))]).toUpperCase();

	}

   
	var randomWord = pickWord(randomCategoryArray);
	console.log(randomWord);
	var randomWordArray = randomWord.split("");

	//arrow function for printing category name
	var printCat;
	printCat = () => {
		if ($.inArray("celery", randomCategoryArray) > -1) {
		  $(".category").text("Category is vegetable");
	  } else if ($.inArray("red", randomCategoryArray) > -1) {
		  $(".category").text("Category is color");
	  }
	}
	printCat();


	function drawSquares() {
	  // Draw squares for secret word & hide letters
	  for(var i = 0; i < randomWord.length; i++) {
		$('#container').append('<div class="letter ' + i + '"></div>');
		$('#container').find(":nth-child(" + (i + 1) + ")").text(randomWordArray[i]);
		$(".letter").css("color", "#4ABDAC");
	  }
	}
	drawSquares();


	// Button click function
	var wrongGuesses = 0;
	$("button").on("click", function(){
		$(this).addClass("used");
		$(this).prop("disabled", "true");
		var matchFound = false;

		var checkWord;
		checkWord = () => {
		  // Check if clicked letter is in secret word
		  var userGuess = $(this).text();
		  for (var i = 0; i < randomWord.length; i++) {
			  if (userGuess === randomWord.charAt(i)) {
				  $('#container').find(":nth-child(" + (i + 1) + ")").css("color", "#EFEFEF").addClass("winner");
				  matchFound = true;
			  }
		  }
		}
		checkWord();



		//function expression
		var processCorrectGuesses = function() {
		  //Check for winner
		  var goodGuesses = [];
		  $(".letter").each(function( index ) {
			  if ( $(this).hasClass("winner") ) {
				  goodGuesses.push(index);
				  if (goodGuesses.length === randomWordArray.length) {
					  $("#container").hide();
					  $("button").prop("disabled", "true");
					  $(".category").text("Great job you guessed the secret word!");
					  $(".category").append("<br><button enabled class='play-again'>Play again?</button>");
				  }
			  }
		  });

		}
		processCorrectGuesses();

		//function declaration
		function processWrongGuesses() {
		  // If no match, increase count and add appropriate image
		  if (matchFound === false) {
			wrongGuesses += 1;
			$("#hangman").attr("src", "img/" + wrongGuesses + ".png");
		  }
		  // If wrong guesses gets to 7 exit the game
		  if (wrongGuesses === 7) {
			$("#container").hide();
			$("button").prop("disabled", "true");
			$(".category").text("Sorry you lost! The secret word was " + randomWord);
			$(".category").append("<br><button enabled class='play-again'>Play again?</button>");
		  }
		}
		processWrongGuesses();


		// Play again button
		$(".play-again").on("click", function(){
			location.reload();
		});

	}); 
		
		 
	});

 
  }); 