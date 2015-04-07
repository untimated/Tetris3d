#pragma strict

//CONSTANT
private var BOARD_WIDTH : int = 20;
private var BOARD_HEIGHT : int = 20;
private var currentTetriPivot :int[,] = new int[1,2];


public var tetri:TetriminoesPiece;
var board : int[,]= new int[20,20];
var belowHitBlock : boolean = false;



function Start () {
	//board = new boolean[20,20];
	
	//tetri = GameObject.Find("Tetriminoe").GetComponent(TetriminoesPiece);
	initBoard();
	
}

function Update()
{
	
}

function initBoard()
{
	
	for(var i:int = 0; i<BOARD_HEIGHT-1; i++)
	{
		for(var j:int=0; j<BOARD_WIDTH-1; j++)
		{
			board[i,j] = 0;
		}
	}
	
}
function getBelowHitBlock()
{
	return belowHitBlock;
}

function toggleBelowHitBlock()
{
	belowHitBlock = false;
}

function updateBoard()
{
	
	for(var i=BOARD_HEIGHT-1; i>=0; i--)
	{
		for(var j=0; j<BOARD_WIDTH; j++)
		{

				if(board[i,j] > 0 && board[i,j] < 3)
				{
					if((i+1)>19)
					{
						belowHitBlock = true;
						break;
					}
					if(board[i+1,j] == 3)
					{
						belowHitBlock = true;
						break;
					}else 
						{
						belowHitBlock = false;
						}
				}

		}
		
		if(!belowHitBlock)
		{
			for(var k=0; k<BOARD_WIDTH;k++)
			{
				if(board[i,k] != 3){
				if(board[i,k] > 1)
				{
					board[i+1,k] = 2;
					board[i,k] = 0;

				}else if(board[i,k] > 0)
				{
					board[i+1,k] = 1;
					board[i,k] = 0;
				}
				}
				
			}
		}else{
			for(var a=0; a<BOARD_WIDTH;a++)
			{
				if(board[i,a] > 0)
				{
					board[i,a] = 3;
				}
				
			}
		}

	}	
}
function checkPivot()
{
		//Check Pivot
	for(var i = 0; i<BOARD_HEIGHT; i++)
	{
		for(var j=0; j<BOARD_WIDTH; j++)
		{
			if(board[i,j] ==2)
			{
					currentTetriPivot[0,0] = i;
					currentTetriPivot[0,1] = j;
					break;
			}	
		}
	}
}

function rotateTetri(type:int,rot:int)
{

	checkPivot();
	var pY = currentTetriPivot[0,0];
	var pX = currentTetriPivot[0,1];
	var initPosX = pX-2;
	var initPosY = pY-2;
	
	
	
	for(var i=0; i<5;i++)
	{
		for(var j=0; j<5;j++)
		{
		
			if(tetri.getTetriminoBlock(type,rot,i,j) > 1)
			{
				//Debug.Log(i);
				board[i+initPosY,j+initPosX] = 2;
				//board[i,j+10] = 2;
				
			}else if(tetri.getTetriminoBlock(type,rot,i,j) > 0)
			{
				//Debug.Log(i);
				board[i+initPosY,j+initPosX] = 1;
				//board[i,j+10] = 1;
			}else if(tetri.getTetriminoBlock(type,rot,i,j) >= 0)
			{
				//Debug.Log(i);
				board[i+initPosY,j+initPosX] = 0;
				//board[i,j+10] = 1;
			}
			
		}
	}

}



function tetriMoveLeft()
{
	for(var i=0; i<BOARD_HEIGHT; i++){
	for(var k=0; k<BOARD_WIDTH;k++)
	{
		if(board[i,k] != 3){
		if(board[i,k] > 1)
		{
			board[i,k-1] = 2;
			board[i,k] = 0;

		}else if(board[i,k] > 0)
		{
			board[i,k-1] = 1;
			board[i,k] = 0;
		}
	}
	}
			
	
}
}

function tetriMoveRight()
{
	for(var a=0; a<BOARD_HEIGHT; a++){
		for(var b=BOARD_WIDTH-1; b>=0;b--)
		{
			if(board[a,b] != 3){
				if(board[a,b] > 1)
				{
					board[a,b+1] = 2;
					board[a,b] = 0;

				}else if(board[a,b] > 0)
				{
					board[a,b+1] = 1;
					board[a,b] = 0;
				}
			}
		}
	}
}
		
	

function setTetrimino(type:int,rot:int)
{

	for(var i=0; i<5; i++)
	{
		for(var j=0; j<5; j++)
		{
			if(tetri.getTetriminoBlock(type,rot,i,j) > 1)
			{
				//Debug.Log(i);
				board[i,j+10] = 2;
				
			}else if(tetri.getTetriminoBlock(type,rot,i,j) > 0)
			{
				//Debug.Log(i);
				board[i,j+10] = 1;
			}
			
		}
	}
	//board[19,10] = 3;board[19,11] = 3;board[19,12] = 3;
}

//Check To delete Line
function checkLine()
{
	var fullLine : boolean = false;
	for(var i=BOARD_HEIGHT-1; i>=0; i++){
		for(var k=0; k<BOARD_WIDTH;k++)
		{
			if(board[i,k]!=3)
			{
				fullLine = true;
			}else{
				fullLine = false;
			}	
		}
	}
}

function getBoardSize(spec)
{
	if(spec == "w")
	{ 
		return BOARD_WIDTH;
	}
	else if(spec == "h") {
		return BOARD_HEIGHT;
	}
	else return 0;
	
}

function getArrayBoard()
{
	return board;
}
