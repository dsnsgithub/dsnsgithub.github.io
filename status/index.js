let DSNS = document.getElementById("DSNS");
let AmKale = document.getElementById("AmKale");
let jiebi = document.getElementById("jiebi");

let DSNSgame = document.getElementById("DSNSgame");
let jiebigame = document.getElementById("jiebigame");
let AmKalegame = document.getElementById("AmKalegame");

async function getStatus(playerName) {
	let response = await (await fetch(`https://api.slothpixel.me/api/players/${playerName}/status`)).json();

	if (response["online"]) {
		return `${playerName} is online. They are playing ${response["game"]["mode"]} ${response["game"]["type"]}.`;
	} else {
		return `${playerName} is offline`;
	}
}

async function getRecentGame(playerName) {
	let response = await (await fetch(`https://api.slothpixel.me/api/players/${playerName}/recentGames`)).json();

	time = new Date(response[0]["date"]).toLocaleDateString("en-US", {
		hour: "numeric",
		minute: "numeric",
		hour12: true
	});
	return `${playerName} played ${response[0]["mode"]} ${response[0]["gameType"]} at ${time}.`;

	return string;
}

async function run() {
	DSNS.innerHTML = await getStatus("DSNS");
	AmKale.innerHTML = await getStatus("AmKale");
	jiebi.innerHTML = await getStatus("jiebi");

	DSNSgame.innerHTML = await getRecentGame("DSNS");
	jiebigame.innerHTML = await getRecentGame("jiebi");
	AmKalegame.innerHTML = await getRecentGame("AmKale");
}

run();
