﻿#pragma strict


var tetrimino = 
	[
		//Square
		[
			[
				[0,0,0,0,0],
				[0,0,0,0,0],
				[0,0,2,1,0],
				[0,0,1,1,0],
				[0,0,0,0,0]
			],
			[
				[0,0,0,0,0],
				[0,0,0,0,0],
				[0,0,2,1,0],
				[0,0,1,1,0],
				[0,0,0,0,0]
			],
			[
				[0,0,0,0,0],
				[0,0,0,0,0],
				[0,0,2,1,0],
				[0,0,1,1,0],
				[0,0,0,0,0]
			],
			[
				[0,0,0,0,0],
				[0,0,0,0,0],
				[0,0,2,1,0],
				[0,0,1,1,0],
				[0,0,0,0,0]
			]
		],
		//L
		[
			[
				[0,0,0,0,0],
				[0,0,1,0,0],
				[0,0,2,0,0],
				[0,0,1,1,0],
				[0,0,0,0,0]
			],
			[
				[0,0,0,0,0],
				[0,0,0,0,0],
				[0,1,2,1,0],
				[0,1,0,0,0],
				[0,0,0,0,0]
			],
			[
				[0,0,0,0,0],
				[0,1,1,0,0],
				[0,0,2,0,0],
				[0,0,1,0,0],
				[0,0,0,0,0]
			],
			[
				[0,0,0,0,0],
				[0,0,0,1,0],
				[0,1,2,1,0],
				[0,0,0,0,0],
				[0,0,0,0,0]
			]
		],
		//L'
		[
			[
				[0,0,0,0,0],
				[0,0,1,0,0],
				[0,0,2,0,0],
				[0,1,1,0,0],
				[0,0,0,0,0]
			],
			[
				[0,0,0,0,0],
				[0,0,1,0,0],
				[0,0,2,0,0],
				[0,0,1,1,0],
				[0,0,0,0,0]
			],
			[
				[0,0,0,0,0],
				[0,0,1,1,0],
				[0,0,2,0,0],
				[0,0,1,0,0],
				[0,0,0,0,0]
			],
			[
				[0,0,0,0,0],
				[0,0,0,0,0],
				[0,1,2,1,0],
				[0,0,0,1,0],
				[0,0,0,0,0]
			]
		],
		//T
		[
			[
				[0,0,0,0,0],
				[0,0,1,0,0],
				[0,0,2,1,0],
				[0,0,1,0,0],
				[0,0,0,0,0]
			],
			[
				[0,0,0,0,0],
				[0,0,0,0,0],
				[0,1,2,1,0],
				[0,0,1,0,0],
				[0,0,0,0,0]
			],
			[
				[0,0,0,0,0],
				[0,0,1,0,0],
				[0,1,2,0,0],
				[0,0,1,0,0],
				[0,0,0,0,0]
			],
			[
				[0,0,0,0,0],
				[0,0,1,0,0],
				[0,1,2,1,0],
				[0,0,0,0,0],
				[0,0,0,0,0]
			]
		],
		//I
		[
			[
				[0,0,0,0,0],
				[0,0,0,0,0],
				[0,1,2,1,1],
				[0,0,0,0,0],
				[0,0,0,0,0]
			],
			[
				[0,0,0,0,0],
				[0,0,1,0,0],
				[0,0,2,0,0],
				[0,0,1,0,0],
				[0,0,1,0,0]
			],
			[
				[0,0,0,0,0],
				[0,0,0,0,0],
				[1,1,2,1,0],
				[0,0,0,0,0],
				[0,0,0,0,0]
			],
			[
				[0,0,1,0,0],
				[0,0,1,0,0],
				[0,0,2,0,0],
				[0,0,1,0,0],
				[0,0,0,0,0]
			]
		],
		//Z
		[
			[
				[0,0,0,0,0],
				[0,0,0,1,0],
				[0,0,2,1,0],
				[0,0,1,0,0],
				[0,0,0,0,0]
			],
			[
				[0,0,0,0,0],
				[0,0,0,0,0],
				[0,1,2,0,0],
				[0,0,1,1,0],
				[0,0,0,0,0]
			],
			[
				[0,0,0,0,0],
				[0,0,1,0,0],
				[0,1,2,0,0],
				[0,1,0,0,0],
				[0,0,0,0,0]
			],
			[
				[0,0,0,0,0],
				[0,1,1,0,0],
				[0,0,2,1,0],
				[0,0,0,1,0],
				[0,0,0,0,0]
			]
		],
		//Z'
		[
			[
				[0,0,0,0,0],
				[0,0,1,0,0],
				[0,0,2,1,0],
				[0,0,0,1,0],
				[0,0,0,0,0]
			],
			[
				[0,0,0,0,0],
				[0,0,0,0,0],
				[0,0,2,1,0],
				[0,1,1,0,0],
				[0,0,0,0,0]
			],
			[
				[0,0,0,0,0],
				[0,1,0,0,0],
				[0,1,2,0,0],
				[0,0,1,0,0],
				[0,0,0,0,0]
			],
			[
				[0,0,0,0,0],
				[0,0,1,1,0],
				[0,1,2,0,0],
				[0,0,0,0,0],
				[0,0,0,0,0]
			]	
		]
	];
	




function Start () {
	

}

function Update () {

}

function getTetriminoBlock(type:int, rot:int, i:int, j:int)
{
	return tetrimino[type][rot][i][j];
}