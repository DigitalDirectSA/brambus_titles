//---Direct Links---//
//models
//s = 'https://drive.google.com/uc?export=download&id=1zAHqdZuPbxwrKV7PUlQXFtdBpxqYgPWH';
//h = 'https://drive.google.com/uc?export=download&id=17BOkoAOWTgRktF6Th7lQGdwVcn0fAd10';
//o = 'https://drive.google.com/uc?export=download&id=134Wm0z3Ml2dB1P_OGzsMQLm6cmfvxZW4';
//p = 'https://drive.google.com/uc?export=download&id=1nszE_EftdllISNl3Jj3uMnNbdsxYy0g2';
//shopstatic = 'https://drive.google.com/uc?export=download&id=1ZlDTxvCDolsZ925o5GVyurXpJW5XM1yG';
//shopanimated = 'https://drive.google.com/uc?export=download&id=1xBVJnmT2ge7GOGNZbeZDvIpgFuTaLnEw';

//textures
//var skytexture = 'https://drive.google.com/uc?export=download&id=1CbpX5htFX4q_-WSvFLFoCuipkwmd4unh';

//---------------------------------------------------------------------------------------------------
						
//PROBLEM: Importing does not work on wix from the iFrame
	
//import * as THREE from '../build/three.module.js';
//import Stats from './jsm/libs/stats.module.js';
//import { OrbitControls } from './jsm/controls/OrbitControls.js';
//import { GLTFLoader } from './jsm/loaders/GLTFLoader.js';
//import { DRACOLoader } from './jsm/loaders/DRACOLoader.js';

var scene, camera, pointLight;
var renderer, controls;

//var clock = new THREE.Clock();
var container = document.getElementById( 'container' );
			
			
//---------------------------------------------------------------------------------------------------
			
//CORS Anywhere to enable cross domain requests
			
(function() 
{
	var cors_api_host = 'cors-anywhere.herokuapp.com';
	var cors_api_url = 'https://' + cors_api_host + '/';
	var slice = [].slice;
	var origin = window.location.protocol + '//' + window.location.host;
	var open = XMLHttpRequest.prototype.open;
	XMLHttpRequest.prototype.open = function() 
	{
		var args = slice.call(arguments);
		var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
		if (targetOrigin && targetOrigin[0].toLowerCase() !== origin && targetOrigin[1] !== cors_api_host) 
		{
			args[1] = cors_api_url + args[1];
		}
			return open.apply(this, args);
	};
})();
			
//---------------------------------------------------------------------------------------------------

renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.outputEncoding = THREE.sRGBEncoding;
						
			
container.appendChild( renderer.domElement );
			
			
scene = new THREE.Scene();
scene.background = null;//new THREE.Color( 0xffffff );
			
			
//This is the camera controls. First parameter is FOV, then aspect, then near clip, then far clip
camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, .01, 100 );
//Set the camera position
camera.position.set( 0, 0, 0.3 );
			
//---------------------------------------------------------------------------------------------------

//Set up orbiting controls
//controls = new THREE.OrbitControls( camera, renderer.domElement );
//controls.target.set( 0, 0.5, 0 );
//controls.enablePan = false;

//---------------------------------------------------------------------------------------------------
//Lights

scene.add( new THREE.AmbientLight( 0x404040 ) );

pointLight = new THREE.PointLight( 0xffffff, 1 );
pointLight.position.copy( camera.position );
scene.add( pointLight );

// envmap - This is easily loaded when the file is uploaded to wix.
var path = 'https://static.wixstatic.com/media/dd3a53_e48ffeceffb4460b8d8e1509e716d943~mv2.jpg';
var format = '.jpg';
var envMap = new THREE.CubeTextureLoader().load( 
	[
	path + 'posx' + format, path + 'negx' + format,
	path + 'posy' + format, path + 'negy' + format,
	path + 'posz' + format, path + 'negz' + format
	] );

//---------------------------------------------------------------------------------------------------
//Model Loaders
	
var dracoLoader = new THREE.DRACOLoader();
//This important, version number here has to match the loader, and the threejs package.
dracoLoader.setDecoderPath( 'https://cdn.jsdelivr.net/npm/three@0.115.0/examples/js/libs/draco/draco_decoder.js' );
			
var loader = new THREE.GLTFLoader();
loader.setDRACOLoader( dracoLoader );
			
//Array for drag controls later on

var objects = [];


//Models
//This is loaded from google drive using CORS
//---------------------------------------------------------------------------------------------------
//Letter S
loader.load( 'https://drive.google.com/uc?export=download&id=1zAHqdZuPbxwrKV7PUlQXFtdBpxqYgPWH', function ( gltf ) 
	{
		var model = gltf.scene;
		model.position.set( 0, 0, 0 );
		model.scale.set( 1, 1, 1 );
		model.traverse( function ( child ) 
			{
				if ( child.isMesh ) child.material.envMap = envMap;
				if ( object.isMesh) objects.push( object );

			} );

		scene.add( model );

	}, undefined, function ( e ) 
				{

				console.error( e );

				});

//---------------------------------------------------------------------------------------------------
//Letter H
loader.load( 'https://drive.google.com/uc?export=download&id=17BOkoAOWTgRktF6Th7lQGdwVcn0fAd10', function ( gltf ) 
	{
		var model = gltf.scene;
		model.position.set( 0, 0, 0 );
		model.scale.set( 1, 1, 1 );
		model.traverse( function ( child ) 
			{
			
				if ( child.isMesh ) child.material.envMap = envMap;
				if ( object.isMesh) objects.push( object );

				} );

								
		scene.add( model );

	}, undefined, function ( e ) 
				{

				console.error( e );

				});

//---------------------------------------------------------------------------------------------------
//Letter O
loader.load( 'https://drive.google.com/uc?export=download&id=134Wm0z3Ml2dB1P_OGzsMQLm6cmfvxZW4', function ( gltf ) 
	{
		var model = gltf.scene;
		model.position.set( 0, 0, 0 );
		model.scale.set( 1, 1, 1 );
		model.traverse( function ( child ) 
			{
				if ( child.isMesh ) child.material.envMap = envMap;
				if ( object.isMesh) objects.push( object );

				} );

		scene.add( model );

	}, undefined, function ( e ) 
				{

				console.error( e );

				});

//---------------------------------------------------------------------------------------------------
//Letter P
loader.load( 'https://drive.google.com/uc?export=download&id=1nszE_EftdllISNl3Jj3uMnNbdsxYy0g2', function ( gltf ) 
			{
				var model = gltf.scene;
				model.position.set( 0, 0, 0 );
				model.scale.set( 1, 1, 1 );
				model.traverse( function ( child ) 
				{

					if ( child.isMesh ) child.material.envMap = envMap;
					
				} );

				gltf.scene.traverse( function( object ) {

   				if ( object.isMesh) objects.push( object );

				} );
				
				scene.add( model );

			}, undefined, function ( e ) 
				{

				console.error( e );

				});


//---------------------------------------------------------------------------------------------------
//Drag Controls.

	var dragControls = new THREE.DragControls( objects, camera, renderer.domElement );
		
	dragControls.addEventListener( 'dragstart', function ( event ) 
		{ 
			dragControls.enabled = true; 
				
		});
			
			
//this is where the mesh needs to move back to it's start position
	dragControls.addEventListener( 'dragend', function ( event ) 
		{ 
			dragControls.enabled = false;
			objects.position.set(0,0,0);
				 
		});
			

//Update Render matrix on screen resize
	window.onresize = function () 
		{
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize( window.innerWidth, window.innerHeight );
			
		};


//---------------------------------------------------------------------------------------------------
//Update
//game logic goes here, runs every frame. The tick function.
	var update = function()
		{
			//letter_p.rotation.x += 0.01;
			//letter_p.rotation.y += 0.005;

			var time = Date.now( ) * 0.0005;
	
		};

//---------------------------------------------------------------------------------------------------
//Render the scene
	var render = function()
		{
			renderer.render(scene,camera);	
		};
	
	
//Run Game Loop (update, render, repeat)
	var GameLoop = function()
		{
			requestAnimationFrame (GameLoop);
			update();
			render();
		
		
		};
	
	GameLoop();
