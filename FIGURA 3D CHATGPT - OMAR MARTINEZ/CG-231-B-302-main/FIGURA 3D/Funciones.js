/**
* SE CREA ICOSAEDRO CON LAS RESPIUESTA DADAS POR Chatgpt.
* APARTIR DE AMBAS FUNCIONES Y LA CORRECCION SE GENERA LA FIGURA.
*/
function Icosaedro() {

var phi = (1 + Math.sqrt(5)) / 2;

  var vertices = [  
        [-1, phi, 0],
        [1, phi, 0],
        [-1, -phi, 0],
        [1, -phi, 0],
        [0, -1, phi],
        [0, 1, phi],
        [0, -1, -phi],
        [0, 1, -phi],
        [phi, 0, -1],
        [phi, 0, 1],
        [-phi, 0, -1],
        [-phi, 0, 1]
  ];

    var faces = [

        [0, 11, 5],
        [0, 5, 1],
        [0, 1, 7],
        [0, 7, 10],
        [0, 10, 11],
        [1, 5, 9],
        [5, 11, 4],
        [11, 10, 2],
        [10, 7, 6],
        [7, 1, 8],
        [3, 9, 4],
        [3, 4, 2],
        [3, 2, 6],
        [3, 6, 8],
        [3, 8, 9],
        [4, 9, 5],
        [2, 4, 11],
        [6, 2, 10],
        [8, 6, 7],
        [9, 8, 1]
    ];

   
// Crear geometría del buffer a partir de la correcion de la IA
// Creando la figura por medio de sus vertices y caras
    var geometry = new THREE.BufferGeometry();    
    geometry.setIndex(faces.flat());
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices.flat(), 3));

// Material de la malla de la figura.
//Es de aclarar que si se utiliza solo el color como material
//sin la malla no se aprecia bien las caras de la figura, captura anexa
// en el documento.
    var material = new THREE.MeshBasicMaterial({color: 0x366e78, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    return mesh;
}

//Animate: 
//Funcion creada  para trabajar con una escena, una cámara y un objeto de control de cámara.

function animate() {

    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);   
  }