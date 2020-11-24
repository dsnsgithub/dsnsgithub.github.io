usernames = [
	"DSNS",
	"jiebi",
	"Retsed",
	"Potatoismm",
	"AmKale",
	"LonelySouls",
	"Node13",
	"idot7",
	"valldant", 
	"jlne",
	"Cardassia",
	"Armster15",
	"GamingNinja2426",
	"carrot1446",
	"ploploalien",
	"JacobtheGreat1",
	"carrot1445",
	"B0B643",
	"GoofBallBoi",
	"_smeeba_",
	"Entity_69",
	"Archer2305",
	"Yumns",
	"Max_AS",
];


for (i = 0; i < usernames.length; i++) {
	currentUsername = usernames[i];
	link = `https://gen.plancke.io/exp/${currentUsername}.png`;
	index = i + 1;

	if (index % 3 == 0) {
		document.write("<div>");
	} else {
		document.write('<div class="grid-item">');
	}
	document.write(`<h1>${currentUsername}</h1>`);
	document.write(`<img style="zoom: 0.5;" src="${link}">`);
	document.write("</div>");
}
