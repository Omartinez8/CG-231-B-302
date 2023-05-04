
//CREACION DE LA ESCENA

var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;
var scene = new THREE.Scene();
var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0x000000, 1);
document.body.appendChild(renderer.domElement);

var size = 10;
var arrowSize = 4;
var divisions = 20;
var origin = new THREE.Vector3( 0, 0, 0 );
var x = new THREE.Vector3( 1, 0, 0 );
var y = new THREE.Vector3( 0, 1, 0 );
var z = new THREE.Vector3( 0, 0, 1 );
var color2 = new THREE.Color( 0x333333 );
var colorR = new THREE.Color( 0xAA0000 );
var colorG = new THREE.Color( 0x00AA00 );
var colorB = new THREE.Color( 0x0000AA );

//--------------------------------------------------------------------------------------

//Creacion de la guia (guilla)
var gridHelperXZ = new THREE.GridHelper( size, divisions, color2, color2);

//Creacion de los  ejes
var arrowX = new THREE.ArrowHelper( x, origin, arrowSize, colorR );
var arrowY = new THREE.ArrowHelper( y, origin, arrowSize, colorG );
var arrowZ = new THREE.ArrowHelper( z, origin, arrowSize, colorB );

//-----------------------------------------------------------------------------------------

//Creacion de la camara
var camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT);
camera.position.z = 4;
camera.position.y = 4;
camera.position.x = 4;
const light = new THREE.AmbientLight(0x404040, 5);

//-----------------------------------------------------------------------------------------

//Creacion de objeto
const icosaedroTruncado = crearIcosaedroTruncado();

//-------------------------------------------------------------------------------------------

//Escena
scene.add(arrowX, arrowY, arrowZ, gridHelperXZ, camera, light);
scene.add(icosaedroTruncado);
const controls = new THREE.OrbitControls(camera, renderer.domElement);  

animate();
