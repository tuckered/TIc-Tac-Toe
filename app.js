// GLOBAL GAME VARIABLES
let grid
let firstGame = true
let turnCount
let shape = 'X'
let gameState
let playerInput
let xPosition
let yPosition
let validInput
let validMove


// GAME FUNCTIONS
function emptyBoard() {
	return {
		1: ['.', '.', '. '],
		2: ['.', '.', '.'],
		3: ['.', '.', '. ']
	}
}

function gameStartMessage() {
	if (firstGame) {
		// These empty console logs are just to get the text readable behind the prompt box. 
		console.log(' ')
		console.log(' ')
		console.log(' ')
		console.log(' ')
		console.log(' ')
		console.log('Welcome to Tik-Tak-Toe. To win the game you need to get 3 of your shape in a line horizontally, vertically or diagonally.')
		console.log('Player X <--VS--> Player O.')
		console.log('To enter your move, put in the row followed by the column. For exmaple, 1,2 would look like this on the board:')
		console.log('------------------------------------------')
		console.log('. X .')
		console.log('. . . ')
		console.log('. . .')
	}
	console.log('------------------------------------------')
	console.log('You can play for as long as you like. Try and have fun.')
	console.log('------------------------------------------')
	console.log('Player X goes first...')
	firstGame = false
}

function printBoard(row) {
	for (i= 1; i <= 3; i++) {
		console.log(row[i].join(' '))
	}
}

function changePlayer(num) {
	if (num % 2 != 0) {
		console.log('------------------------------------------')
		console.log('Player X, it\'s your turn...')
		shape = 'X' 
	}
	else {
		console.log('------------------------------------------')
		console.log('Player O, it\'s your turn...')
		shape = 'O'
	}
}

function requestInput() {
	playerInput = prompt('Please enter your move or press Q to quit')
}

function checkIfValidInput(input) {
	let splitNumbers = input.split('')
	if (splitNumbers.length === 3 && splitNumbers[1] === ',') {
		validInput = true
	} else {
		console.log('Sorry chum, that is not a valid input. Write your row then your column with a comma like this: 2,1.')
		validInput = false
	}
}

function checkIfQuitGame(input) {
	if (input.toLowerCase() === 'q') {
		console.log('That\'s the end of the game.')
		gameState = 'quit'
	}
}

function quitGame() {
	throw new Error("The game has been quit! Reload the page if you want to play again.");
}

function validateInput() {
	requestInput()
	checkIfQuitGame(playerInput)
	if (gameState === 'quit') {
		playAgainPrompt()
		if (gameState === 'newGame') {
		newGame()
		}
	}
	checkIfValidInput(playerInput)
}

function receiveInput() {
	validateInput()
	while (validInput === false) {
		validateInput()
	}
}

function filterInput(num) {
	let filtered = [...num].filter(function(index) {
		return index.match(/\d+/g);
	});
	xPosition = Number(filtered[0])
	yPosition = Number(filtered[1])
}

function checkInputIsValid(x,y,board) {
	if (x > board[1].length || y > board[1].length) {
		console.log('That move is not allowed. Please try again.')
		validMove = false;
	} else {validMove = true}
}

function checkMoveIsValid(x, y, board) {
	if (board[x][(y-1)] === ('X') || board[x][(y-1)] === ('O')) {
		console.log('Sorry, that place is already taken. Try again.')
		validMove = false;
	} else {validMove = true }
}

function placeMoveOnGrid(x, y, board, shape) {
	board[x][(y - 1)] = shape
}

function processInput() {
	filterInput(playerInput)
	checkInputIsValid(xPosition, yPosition,grid)
	if (validMove) {
		debugger
		checkMoveIsValid(xPosition, yPosition, grid)
	}
}

function applyMove() {
	placeMoveOnGrid(xPosition, yPosition, grid, shape)
	console.log('------------------------------------------')
	console.log('Good job. That was an acceptable move.')
}

function checkForWinner(shape, board) {
	if (board[1][0] === (shape) && board[1][1] === (shape) && board[1][2] === (shape)) {
		gameState = 'winner'
	}
	else if (board[2][0] === (shape) && board[2][1] === (shape) && board[2][2] === (shape)) {
		gameState = 'winner'
	}
	else if (board[3][0] === (shape) && board[3][1] === (shape) && board[3][2] === (shape)) {
		gameState = 'winner'
	}
	else if (board[1][0] === (shape) && board[2][0] === (shape) && board[3][0] === (shape)) {
		gameState = 'winner'
	}
	else if (board[1][1] === (shape) && board[2][1] === (shape) && board[3][1] === (shape)) {
		gameState = 'winner'
	}
	else if (board[1][2] === (shape) && board[2][2] === (shape) && board[3][2] === (shape)) {
		gameState = 'winner'
	}
	else if (board[1][0] === (shape) && board[2][1] === (shape) && board[3][2] === (shape)) {
		gameState = 'winner'
	}
	else if (board[1][2] === (shape) && board[2][1] === (shape) && board[3][0] === (shape)) {
		gameState = 'winner'
	}
}

function ifWinner() {
	if (gameState === 'winner') {
		winMessage()
		printBoard(grid)
		playAgainPrompt()
		newGame()
	}
	else {
		turnCount++
		changePlayer(turnCount)
	}
}

function newGame() {
	resetGame()
	playGame()
}

function winMessage() {
	console.log('------------------------------------------')
	console.log('Victory!! You have bested your opponent Player ' + shape + '. Feel free to gloat.')
}

function drawMessage() {
	console.log ('It\'s a draw!! That means you\'re both winners in my eyes.')
}

function playAgainPrompt() {
	let response
	response = prompt('Would you like to play again? Yes or No...')
	if (response.toLowerCase() === 'yes') {
		gameState = 'newGame'
	} else if (response === 'no') {
		console.log('Thanks for playing. ')
		quitGame()
	}
}

function resetGame() {
	grid = emptyBoard()
	turnCount = 1
	gameState = 'playing'
	shape = 'X'
}

// GAME ORDER & LOGIC

function playGame() {
	gameStartMessage()
	resetGame()
	printBoard(grid)
	while (turnCount < 10) {
		receiveInput()
		processInput()
		if (validMove) {
			applyMove()
			checkForWinner(shape, grid)
			ifWinner()
			printBoard(grid)
		}
	}
	if (turnCount === 10) {
		drawMessage()
		playAgainPrompt()
		newGame()
	}
	
}

playGame()
