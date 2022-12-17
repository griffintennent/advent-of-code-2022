import { input } from './input'

const evalLine = (line: string): number => {
	const opponentChoice = line.charAt(0)
	const playerChoice = line.charAt(2)

	const baseChoiceValue: number =
		playerChoice === 'X'
			? 1
			: playerChoice === 'Y'
			? 2
			: playerChoice === 'Z'
			? 3
			: 0
	let lineValue = 0

	if (opponentChoice === 'A') {
		if (playerChoice === 'X') {
			lineValue = 3
		} else if (playerChoice === 'Y') {
			lineValue = 6
		} else if (playerChoice === 'Z') {
			lineValue = 0
		}
	} else if (opponentChoice === 'B') {
		if (playerChoice === 'X') {
			lineValue = 0
		} else if (playerChoice === 'Y') {
			lineValue = 3
		} else if (playerChoice === 'Z') {
			lineValue = 6
		}
	} else if (opponentChoice === 'C') {
		if (playerChoice === 'X') {
			lineValue = 6
		} else if (playerChoice === 'Y') {
			lineValue = 0
		} else if (playerChoice === 'Z') {
			lineValue = 3
		}
	}

	return baseChoiceValue + lineValue
}

export const a = (): number => {
	return input
		.split('\n')
		.map(line => evalLine(line))
		.reduce((accum: number, total: number) => accum + total)
}

// eslint-disable-next-line no-console
console.log(a())
