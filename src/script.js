import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'
import map from './texture/earth.jpg'
import mapdump from './texture/earthbump.jpg'
import clouds from './texture/earthCloud.png'
import galaxy from './texture/galaxy.png'

 



// global variables
let scene;
let camera;
let renderer;
const canvas = document.querySelector(".webgl");
 
// scene setup
scene = new THREE.Scene();

// camera setup
const fov = 60;
const aspect = window.innerWidth / window.innerHeight;
const near = 0.1;
const far = 1000;
camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 4;
camera.position.x = -0.15;
scene.add(camera);

 



// renderer setup
renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);
renderer.autoClear = false;
renderer.setClearColor(0x000000, 0.0);





// orbit control setup
const controls = new OrbitControls(camera, renderer.domElement);



// earth 
const earthGeometry = new THREE.SphereGeometry(1, 32, 32);
const earthMaterial = new THREE.MeshPhongMaterial({
  map: new  THREE.TextureLoader().load(map),
  bumpMap: new  THREE.TextureLoader().load(mapdump),
  roughness: 1,
  metalness: 0,
  bumpScale: 0.3,
  
});
const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
scene.add(earthMesh);
 





// cloud 
const cloudGeometry = new THREE.SphereGeometry(1.02, 30, 30);
const cloudMetarial = new THREE.MeshPhongMaterial({
  map: new  THREE.TextureLoader().load(clouds),
  transparent: true,
});
const cloudMesh = new THREE.Mesh(cloudGeometry, cloudMetarial);
scene.add(cloudMesh);




// galaxy 
const starGeometry = new THREE.SphereGeometry(80, 64, 64);
const starMaterial = new THREE.MeshBasicMaterial({
  map: new  THREE.TextureLoader().load(galaxy),
  side: THREE.BackSide,
});
const starMesh = new THREE.Mesh(starGeometry, starMaterial);
scene.add(starMesh);




// ambient light
const ambientlight = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(ambientlight);




// point light
const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(5, 3, 5);
scene.add(pointLight);



// point light helper
const Helper = new THREE.PointLightHelper(pointLight);
scene.add(Helper);



 
// points mesh   
const Geometry1 = new THREE.SphereGeometry(0.025, 32, 50);
const Material1 = new THREE.MeshPhongMaterial({color:0xF5EC36});

const moon1 = new THREE.Mesh(Geometry1, Material1);
const moon8  = new THREE.Mesh(Geometry1, Material1);
const moon9 = new THREE.Mesh(Geometry1, Material1);
const moon10  = new THREE.Mesh(Geometry1, Material1);
const moon12  = new THREE.Mesh(Geometry1, Material1);
const moon13  = new THREE.Mesh(Geometry1, Material1);
const moon14  = new THREE.Mesh(Geometry1, Material1);
const moon15  = new THREE.Mesh(Geometry1, Material1);
const moon16  = new THREE.Mesh(Geometry1, Material1);
const moon18  = new THREE.Mesh(Geometry1, Material1);
 


 // points coordinations  
let point1 = {lat: -13.8350425,   lng: -76.2496219 }
let point8 = { lat: 25.4448,      lng: 8.9976 }
let point9 = { lat: 29.2034664 ,  lng: 25.5192273 }
let point10 = { lat: 29.9870753 , lng: 31.2118063 }
let point12 = { lat: 29.9351669 , lng: 52.8904041 }
let point13 = { lat: 27.321657  , lng:  68.1365933 }
let point14 = { lat: 24.8515132 , lng: 79.9259786 }
let point15 = { lat: 18.816667 ,  lng: 95.216667 }
let point16 = { lat: 17.1446985 , lng: 99.4375845 }
let point18 = { lat: -27.1259451 ,lng:  -109.3496335 }


// 2 4 6 7 11  17 

// point liste 
let Pline = [ point1, point8, point9, point10, point12, point13, point14, point15, point16, point18 ]
// init pos point 
let pos1 = colcposFormLatLonRad(point1.lat, point1.lng);
let pos8 = colcposFormLatLonRad(point8.lat, point8.lng);
let pos9 = colcposFormLatLonRad(point9.lat, point9.lng);
let pos10 = colcposFormLatLonRad(point10.lat, point10.lng);
let pos12 = colcposFormLatLonRad(point12.lat, point12.lng);
let pos13 = colcposFormLatLonRad(point13.lat, point13.lng);
let pos14 = colcposFormLatLonRad(point14.lat, point14.lng);
let pos15 = colcposFormLatLonRad(point15.lat, point15.lng);
let pos16 = colcposFormLatLonRad(point16.lat, point16.lng);
let pos18 = colcposFormLatLonRad(point18.lat, point18.lng);
 


moon1.position.set(pos1.x,pos1.y,pos1.z);
moon8.position.set(pos8.x,pos8.y,pos8.z);
moon9.position.set(pos9.x,pos9.y,pos9.z);
moon10.position.set(pos10.x,pos10.y,pos10.z);
moon12.position.set(pos12.x,pos12.y,pos12.z);
moon13.position.set(pos13.x,pos13.y,pos13.z);
moon14.position.set(pos14.x,pos14.y,pos14.z);
moon15.position.set(pos15.x,pos15.y,pos15.z);
moon16.position.set(pos16.x,pos16.y,pos16.z);
moon18.position.set(pos18.x,pos18.y,pos18.z);
 

 

// pivot
const pivotPoint = new THREE.Object3D();
pivotPoint.add(moon1);
pivotPoint.add(moon8);
pivotPoint.add(moon9);
pivotPoint.add(moon10);
pivotPoint.add(moon12);
pivotPoint.add(moon13);
pivotPoint.add(moon14);
pivotPoint.add(moon15);
pivotPoint.add(moon16);
pivotPoint.add(moon18);

 
scene.add(pivotPoint);

 
getline(pos1,pos8); 
getline(pos8,pos9);
getline(pos9,pos10);
getline(pos10,pos12);
getline(pos12,pos13);
getline(pos13,pos14);
getline(pos14,pos15);
getline(pos15,pos16);
getline(pos16,pos18);
getline(pos18,pos1);


 

function getline(p1,p2) {  


  let v1 = new THREE.Vector3(p1.x,p1.y,p1.z);
  let v2 = new THREE.Vector3(p2.x,p2.y,p2.z);
  let points = [] ;

  for ( let  i=0 ; i <20 ; i++  ) { 
    let p = new THREE.Vector3().lerpVectors(v1,v2,i/20)
    p.normalize();
    p.multiplyScalar (1 + 0.02*Math.sin(Math.PI*i/20)) ;
    points.push(p);
  }

  let path = new THREE.CatmullRomCurve3(points)
  const geometry = new THREE.TubeGeometry( path, 20, 0.005, 8, false );
  const material =  new THREE.MeshPhysicalMaterial ({color: 0xF53636} );
  const mesh = new THREE.Mesh( geometry, material );
  pivotPoint.add( mesh );
}

// convertissuer de repère 
function colcposFormLatLonRad (latt, lon) {

  var phi =   (latt)*(Math.PI/180);
  var theta = (lon+180)*(Math.PI/180);

  let x = -(Math.cos(phi)*Math.cos(theta));
  let z = (Math.cos(phi)*Math.sin(theta));
  let y = (Math.sin(phi));

  return{x,y,z};
  }
  
 
// handling resizing
 

window.addEventListener(
  "resize",
  () => {
   
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();
  }
);
 

const animate = () => {
  requestAnimationFrame(animate);
 
    starMesh.rotation.y -= 0.0014;
    earthMesh.rotation.y -= 0.0039;
    cloudMesh.rotation.y -= 0.0045;
    pivotPoint.rotation.y -= 0.0039;
 
    controls.update();

  render();
 
};

// rendering
const render = () => {
  renderer.render(scene, camera);
    
};
 

animate();
 