window.addEventListener('load', initScene);

const patos = [
    {x: 0, y: 0, z: -30},
    {x: 0, y: 0, z: 30},
    {x: 30, y: 0, z: 0},
    {x: -30, y: 0, z: 0}
   ];

let quack;
let score = 0;

function initScene() {
    quack = new Tone.Player('Assets/Audios/quack.mp3').toDestination();
    let orbits = document.querySelectorAll('.orbit');

    orbits.forEach(orbit => {

    patos.forEach(pos => {

        pato = document.createElement('a-entity');
        pato.setAttribute('gltf-model','Assets/3D/pato-conver.gltf');
        pato.object3D.position.set(pos.x, pos.y, pos.z);
        pato.setAttribute('shootable', '');

        orbit.appendChild(pato);
    });
   });
}

AFRAME.registerComponent('shootable', {
    init: function() {
        this.el.addEventListener('click', () => {
            //console.log('destruido');
            if (this.el.parentNode) {
                this.el.parentNode.removeChild(this.el);
            }
            document.querySelector('#scoreText').setAttribute('value', `${++score} patos capturados`);
    
            quack.start();
    
        });
    }
});