import { input } from './input'

const choiceValues = {
	rock: 1,
	paper: 2,
	scissors: 3,
}

const evalLine = (line: string): number => {
	const opponentChoice = line.charAt(0)
	const matchResult = line.charAt(2)

	let lineValue = 0

	if (opponentChoice === 'A') {
		//rock
		if (matchResult === 'X') {
			lineValue = 0 + choiceValues['scissors']
		} else if (matchResult === 'Y') {
			lineValue = 3 + choiceValues['rock']
		} else if (matchResult === 'Z') {
			lineValue = 6 + choiceValues['paper']
		}
	} else if (opponentChoice === 'B') {
		//paper
		if (matchResult === 'X') {
			lineValue = 0 + choiceValues['rock']
		} else if (matchResult === 'Y') {
			lineValue = 3 + choiceValues['paper']
		} else if (matchResult === 'Z') {
			lineValue = 6 + choiceValues['scissors']
		}
	} else if (opponentChoice === 'C') {
		//scissors
		if (matchResult === 'X') {
			lineValue = 0 + choiceValues['paper']
		} else if (matchResult === 'Y') {
			lineValue = 3 + choiceValues['scissors']
		} else if (matchResult === 'Z') {
			lineValue = 6 + choiceValues['rock']
		}
	}

	return lineValue
}

export const applySolution = (): number => {
	return input
		.split('\n')
		.map(line => evalLine(line))
		.reduce((accum: number, total: number) => accum + total)
}

// eslint-disable-next-line no-console
console.log(applySolution())
