"use strict";

var canvas;
var canvas2;
var gl;
var gl2;

var theta = 0.0;
var theta2 = 0.0;
var thetaLoc;
var thetaLoc2;
var direction = 1;
var direction2 = 1;
var speed = 50;
var speed2 = 100;
//var i;
//var j;

//function thetaround(i, j){
//	var x;
//	if(j==0){
//		x = 72*i*Math.PI / 180;
//	}
//	if(j==1){
//		x = (72*i+36)*Math.PI / 180;
//	}
//	return x;
//}

function changeDir(){
	direction *= -1;
}

function changeDir2(){
	direction2 *= -1;
}


function initRotSquare(){
	canvas = document.getElementById( "rot-canvas" );
	gl = WebGLUtils.setupWebGL( canvas, "experimental-webgl" );
	if( !gl ){
		alert( "WebGL isn't available" );
	}

	gl.viewport( 0, 0, canvas.width, canvas.height );
	gl.clearColor( 1.0, 1.0, 1.0, 1.0 );

	var program = initShaders( gl, "rot-v-shader", "rot-f-shader" );
	gl.useProgram( program );

	//star
//	var R = 0.000004;
//	var r = Math.sin(18*Math.PI/180) / Math.sin(36*Math.PI/180);
//	console.log(r);
//	var R1_x, R1_y, R2_x, R2_y, R3_x, R3_y, R4_x, R4_y, R5_x, R5_y;
//	var r1_x, r1_y, r2_x, r2_y, r3_x, r3_y, r4_x, r4_y, r5_x, r5_y;
//	R1_x = R*Math.cos(thetaround(0, 0));R1_y = R*Math.sin(thetaround(0, 0));
//	R2_x = R*Math.cos(thetaround(1, 0));R2_y = R*Math.sin(thetaround(1, 0));
//	R3_x = R*Math.cos(thetaround(2, 0));R3_y = R*Math.sin(thetaround(2, 0));
//	R4_x = R*Math.cos(thetaround(3, 0));R4_y = R*Math.sin(thetaround(3, 0));
//	R5_x = R*Math.cos(thetaround(4, 0));R5_y = R*Math.sin(thetaround(4, 0));
//
//	r1_x = r*Math.cos(thetaround(0, 1)); r1_y = r*Math.sin(thetaround(0, 1));
//	console.log(r1_x, r1_y, Math.cos(36))
//	r2_x = r*Math.cos(thetaround(1, 1)); r2_y = r*Math.sin(thetaround(1, 1));
//	r3_x = r*Math.cos(thetaround(2, 1)); r3_y = r*Math.sin(thetaround(2, 1));
//	r4_x = r*Math.cos(thetaround(3, 1)); r4_y = r*Math.sin(thetaround(3, 1));
//	r5_x = r*Math.cos(thetaround(4, 1)); r5_y = r*Math.sin(thetaround(4, 1));


	var vertices = [

        //min三角形
        0.1,0.6,0.0,
        0.1,0.0,0.0,
        0.45,0.0,0.0,


        0.0,0.4,0.0,
        -0.35,0.0,0.0,
        0.0,0.0,0.0,


        //min梯形
        //left
         -0.6,0,0.0,
        -0.3,-0.3,0.0,
        -0.3,0.0,0.0,

        -0.3,0.0,0.0,
        -0.3,-0.3,0.0,
        0.0,0.0,0.0,

        0.0,0.0,0.0,
        -0.3,-0.3,0.0,
        0.0,-0.3,0.0,

        //right
        0.0,0.0,0.0,
        0.0,-0.3,0.0,
        0.3,0.0,0.0,

        0.0,-0.3,0.0,
        0.3,-0.3,0.0,
        0.3,0.0,0.0,

        0.3,0.0,0.0,
        0.3,-0.3,0.0,
        0.6,0.0,0.0,


        //半圆
        //left
        //10度
        -0.8,  -0.35, 0.0,
        -0.4924,-0.4368,0.0,
        0.0,   -0.35,  0.0,

        //20度
        0.0,   -0.35,  0.0,
        -0.4698,-0.521,0.0,
        -0.4924,-0.4368,0.0,

        //25度
       -0.4698,-0.521,0.0,
        -0.452,-0.561,0.0,
        0.0,   -0.35,  0.0,

        //30度
         -0.452,-0.561,0.0,
        -0.36, -0.6,  0.0,
        0.0,   -0.35,  0.0,

        //40度
         -0.36, -0.6,  0.0,
        -0.383,-0.6713,0.0,
        0.0,   -0.35,  0.0,

        //50度
        -0.383,-0.6713,0.0,
        -0.3213,-0.73,0.0,
        0.0,   -0.35,  0.0,

        //60度

        0.0,   -0.35, 0.0,
        -0.360,-0.6,  0.0,
        -0.25, -0.711,0.0,

        //70度

        -0.1701,-0.8198,0.0,
        -0.25, -0.711,0.0,
        0.0,   -0.35,  0.0,

        //80度
        -0.1701,-0.8198,0.0,
        -0.086,-0.8424,0.0,
        0.0,   -0.35,  0.0,

        //90度

        0.0,  -0.35,  0.0,
        -0.25,-0.711, 0.0,
        0.0,   -0.85, 0.0,

//
        //right
//        0.8,  -0.35, 0.0,
//        0.360,-0.6,  0.0,
//        0.0,  -0.35, 0.0,
//
//        0.0,  -0.35, 0.0,
//        0.360,-0.6,  0.0,
//        0.25, -0.711,0.0,
//
//        0.0,   -0.35, 0.0,
//        0.25, -0.711, 0.0,
//        0.0,   -0.85, 0.0,


        0.8,  -0.35, 0.0,
        0.4924,-0.4368,0.0,
        0.0,   -0.35,  0.0,

        //20度
        0.0,   -0.35,  0.0,
        0.4698,-0.521,0.0,
        0.4924,-0.4368,0.0,

        //25度
        0.4698,-0.521,0.0,
        0.452,-0.561,0.0,
        0.0,   -0.35,  0.0,

        //30度
         0.452,-0.561,0.0,
        0.36, -0.6,  0.0,
        0.0,   -0.35,  0.0,

        //40度
        0.36, -0.6,  0.0,
        0.383,-0.6713,0.0,
        0.0,   -0.35,  0.0,

        //50度
        0.383,-0.6713,0.0,
        0.3213,-0.73,0.0,
        0.0,   -0.35,  0.0,

        //60度

        0.0,   -0.35, 0.0,
        0.360,-0.6,  0.0,
        0.25, -0.711,0.0,

        //70度

        0.1701,-0.8198,0.0,
        0.25, -0.711,0.0,
        0.0,   -0.35,  0.0,

        //80度
        0.1701,-0.8198,0.0,
        0.086,-0.8424,0.0,
        0.0,   -0.35,  0.0,

        //90度

        0.0,  -0.35,  0.0,
        0.25,-0.711, 0.0,
        0.0,   -0.85, 0.0,






//        //star
//            R1_x, R1_y, 0,
//			r1_x, r1_y, 0,
//			r5_x, r5_y, 0,
//
//			R2_x, R2_y, 0,
//			r1_x, r1_y, 0,
//			r2_x, r2_y, 0,
//
//			R3_x, R3_y, 0,
//			r2_x, r2_y, 0,
//			r3_x, r3_y, 0,
//
//			R4_x, R4_y, 0,
//			r3_x, r3_y, 0,
//			r4_x, r4_y, 0,
//
//			R5_x, R5_y, 0,
//			r4_x, r4_y, 0,
//			r5_x, r5_y, 0,
//
//			r1_x, r1_y, 0,
//			r5_x, r5_y, 0,
//			r2_x, r2_y, 0,
//
//			r2_x, r2_y, 0,
//			r5_x, r5_y, 0,
//			r4_x, r4_y, 0,
//
//			r2_x, r2_y, 0,
//			r4_x, r4_y, 0,
//			r3_x, r3_y, 0,



 	];

	var bufferId = gl.createBuffer();
	gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
	gl.bufferData( gl.ARRAY_BUFFER, new Float32Array( vertices ), gl.STATIC_DRAW );

	var vPosition = gl.getAttribLocation( program, "vPosition" );
	gl.vertexAttribPointer( vPosition, 3, gl.FLOAT, false, 0, 0 );
	gl.enableVertexAttribArray( vPosition );

	thetaLoc = gl.getUniformLocation( program, "theta" );

	// document.getElementById( "speedcon" ).onchange = function( event ){
	// 	speed = 100-event.target.value;
	// 	initRotSquare();
	// }

	OK.onclick = function(){
		speed = 100-speedcon.value;
	}
	init();
	renderSquare();

}

function init(){
	canvas2 = document.getElementById( "canvas2" );
	gl2 = WebGLUtils.setupWebGL( canvas2, "experimental-webgl" );
	if( !gl2 ){
		alert( "WebGL isn't available" );
	}

	gl2.viewport( 0, 0, canvas2.width, canvas2.height );
	gl2.clearColor( 1.0, 1.0, 1.0, 1.0 );

	var program = initShaders( gl2, "rot-v-shader2", "rot-f-shader2" );
	gl2.useProgram( program );

	var vertices2 = [

		0.5,0.5,0.0,
		0.0,1.0,0.0,
		0.0,0.0,0.0,

		-1.0,0.0,0.0,
		-0.5,-0.5,0,
		0.0,-0.5,0.0,
		0.5,-0.5,0.0,
		1.0,0.0,0.0,
     	0.0,0.0,0.0


 	];

	var bufferId = gl2.createBuffer();
	gl2.bindBuffer( gl2.ARRAY_BUFFER, bufferId );
	gl2.bufferData( gl2.ARRAY_BUFFER, new Float32Array( vertices2 ), gl2.STATIC_DRAW );

	var vPosition = gl2.getAttribLocation( program, "vPosition" );
	gl2.vertexAttribPointer( vPosition, 3, gl2.FLOAT, false, 0, 0 );
	gl2.enableVertexAttribArray( vPosition );

	thetaLoc2 = gl2.getUniformLocation( program, "theta2" );



	OK2.onclick = function(){
		speed2 = 100-speedcon2.value;
	}
	render();
}
function renderSquare(){
	gl.clear( gl.COLOR_BUFFER_BIT );

	// set uniform values
	theta += direction * 0.1;

	gl.uniform1f( thetaLoc, theta );

	gl.drawArrays( gl.TRIANGLES, 0,84);
	//gl.drawArrays(gl.TRIANGLE_FAN, 2, 6);

	// update and render
	setTimeout( function(){ requestAnimFrame( renderSquare ); }, speed );
}

function render(){
	gl2.clear( gl2.COLOR_BUFFER_BIT );

	// set uniform values

	theta2 += direction2 * 0.1;
	gl2.uniform1f( thetaLoc2, theta2 );
	gl2.drawArrays( gl.TRIANGLES, 0, 3 );
	gl2.drawArrays(gl.TRIANGLE_FAN, 2, 6);

	// update and render
	setTimeout( function(){ requestAnimFrame( init ); }, speed2 );

}