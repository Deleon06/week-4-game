//hit points//
var Gokuhp;
var Nappahp;
var Friezahp;
var Cellhp;

//Damage//
var Gokudam;
var Nappadam;
var Friezadam;
var Celldam;

//empty functions//
var attack;
var defence;
var yourcharacter;
var defender;
// making id Character a variable//
var Character = "Character";
//starting value of the game//
function startgame() {
	Gokuhp = 120;
	Nappahp = 100;
	Friezahp = 150;
	Cellhp = 180;
	Gokudam = 8;
    Nappadam = 5;
	Friezadam = 20;
	Celldam = 25;

	$("#Goku, #Nappa, #Frieza, #Cell").append("#start");
 
};
	
	$("#Goku").on("click", function() {
		if (Character = 'Your Character' && Character != "<div id='moved'></div>" ) {
			$("#Character").append("<div id='moved'></div>");
			$("#moved").append(Goku);
		}
		return false;
		}),
	
	$("#Nappa").on("click", function() {
		if (Character = 'Your Character' && Character != "<div id='moved'></div>" ) {
			$("#Character").append("<div id='moved'></div>")
			$("#moved").append(Nappa);
		}
		}),
	
	$("#Frieza").on("click", function() {
		if (Character = 'Your Character' && Character != "<div id='moved'></div>" ) {
			$("#Character").append("<div id='moved'></div>");
			$("#moved").append(Frieza);
		}
		}),

	
	$("#Cell").on("click", function() {
		if (Character = 'Your Character' && Character != "<div id='moved'></div>" ) {
			$("#Character").append("<div id='moved'></div>");
			$("#moved").append(Cell);
		}
		})
//$("#Character").html('Your Character')
// #Nappa, #Frieza, #Cell"
// 
//adding the click function//
// function clicking() {
	
// };

//defining what clicking does//

	//move: function() {
