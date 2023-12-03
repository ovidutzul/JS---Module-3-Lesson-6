// Rewrite the property so that it uses one object's parameter instead of a set of independent arguments.

function getBotReport({ companyName, bots: { repair: repairBots, defence: defenceBots } }) {
	return `${companyName} has ${repairBots + defenceBots} bots in stock`;
}

// It was
// console.log(getBotReport('Cyberdyne Systems', 150, 50));

// Is expected 
console.log(
	getBotReport({
		companyName: 'Cyberdyne Systems',
		bots: {
			repair: 150,
			defence: 50,
		}
	}),
); // "Cyberdyne Systems has 200 bots in stock"