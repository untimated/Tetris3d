#pragma strict

	public var keyDown : boolean;
	public var keyHeld : boolean;
	public var keyUp : boolean;

	

function Start () {

}

function Update () {
	
	BoxMovement();
	if(keyDown){
		transform.Translate(Vector3.down * 1.0f);
	}else if(keyUp)
	{
		transform.Translate(Vector3.zero);
	}else if(keyHeld)
	{
		transform.Translate(Vector3.zero);
	}
}

function BoxMovement()
{
	keyDown = Input.GetKeyDown(KeyCode.DownArrow);
	keyUp = Input.GetKeyUp(KeyCode.DownArrow);
	keyHeld = Input.GetKey(KeyCode.DownArrow);
	
}