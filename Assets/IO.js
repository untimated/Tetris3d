#pragma strict
var game : GameControllerScript;
private var keyDown : boolean;
private var keyHeld : boolean;
private var keyUp : boolean;


function Start () {

}

function Update () {

	if(Input.GetKeyDown(KeyCode.Space))
	{
		Debug.Log("TEST");
		game.setRotated(true);
		
	}
	
	else if(Input.GetKeyDown(KeyCode.LeftArrow))
	{
		Debug.Log("TEST");
		game.goLeft(true);
		
	}
	
	
	else if(Input.GetKeyDown(KeyCode.RightArrow))
	{
		Debug.Log("TEST");
		game.goRight(true);
		
	}

}