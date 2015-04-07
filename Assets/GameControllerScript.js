#pragma strict

public var gameBoard : BoardScript;

private var tetriType : int;
private var tetriRotate : int;
private var curRotation :int;
private var rotated : boolean = false;
private var moveL :boolean = false;
private var moveR :boolean = false;
public var boardArray : int[,] = new int[20,20];


public var cubePink : GameObject;
public var cubeBlue : GameObject;
public var cubeDead : GameObject;


private static var counter : int = 20;
private static var nextTime = 0.0f;
private static var period = 0.1f;
private static var finalTime = 0.0f;

//InvokeRepeating("moveTetri",1.0f,1.0f);

function Start () {
	boardArray = gameBoard.getArrayBoard();
	tetriType = Random.Range(0,6);
	tetriRotate = Random.Range(0,3);
	curRotation = tetriRotate;
	gameBoard.setTetrimino(tetriType,tetriRotate);
	renderBoard();
}

function Update () {
	
	nextTime += Time.deltaTime;
	finalTime+= Time.deltaTime;
	
	if(nextTime>1)
	{
		//Debug.Log(gameBoard.getBelowHitBlock());
		if(gameBoard.getBelowHitBlock()){
			//gameBoard.checkLine();
			tetriType = Random.Range(0,6);
			tetriRotate = Random.Range(0,3);
			gameBoard.setTetrimino(tetriType,tetriRotate);
			gameBoard.toggleBelowHitBlock();
			finalTime = 0.0f;
		}else{
		moveTetri();
		nextTime = 0;
		}
	}
}

function setRotated(t:boolean)
{
	rotated = t;
}
function goLeft(t:boolean)
{
	moveL = t;
}
function goRight(t:boolean)
{
	moveR = t;
}
function triggerRotate()
{

	Debug.Log(curRotation);
	if(curRotation > 3)
	{
		curRotation = 0;
	}else{
		curRotation++;
	}
	Debug.Log(curRotation);
	gameBoard.rotateTetri(tetriType,curRotation);
}

function triggerMoveL()
{
	
}

function triggerMoveR()
{
}

function moveTetri()
{
	if(rotated){
		triggerRotate();
		rotated = false;
	}
	
	if(moveR)
	{
		gameBoard.tetriMoveRight();
		moveR = false;
	}
	if(moveL)
	{
		gameBoard.tetriMoveLeft();
		moveL = false;
	}
	
	gameBoard.updateBoard();
	renderBoard();
}

function renderBoard()
{
	
	var width:int = gameBoard.getBoardSize("w");
	var height:int = gameBoard.getBoardSize("h");
	var instance : GameObject;
	var gap:int = 0;
	for(var i:int  = 0; i < height; i++)
	{
		for(var j:int = 0; j < width; j++)
		{
			
			if(boardArray[i,j] > 2)
			{
				instance = GameObject.Instantiate(cubeDead, Vector3(j,-i-0.5,0) , Quaternion.identity);
				GameObject.Destroy(instance,1.0);
			}else if(boardArray[i,j] > 1)
			{
				//Debug.Log(boardArray[i,j]);
				instance = GameObject.Instantiate(cubeBlue, Vector3(j,-i-0.5,0) , Quaternion.identity);
				GameObject.Destroy(instance,1.0);
			}else if(boardArray[i,j] > 0)
			{
				//Debug.Log(boardArray[i,j]);
				instance = GameObject.Instantiate(cubePink, Vector3(j,-i-0.5,0) , Quaternion.identity);
				GameObject.Destroy(instance,1.0);
			}
			
		}
	}
}



