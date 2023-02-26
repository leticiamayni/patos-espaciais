let pato;

const loader = new THREE.GLTFLoader();
loader.load('Assets/3D/pato-conver.gltf', (gltf) => {
  // Código para manipular o modelo após o carregamento
  pato = gltf.scene;

  pato.traverse((node) => {
    if (node.material) {
        if (node.material.map) {
            const texture = node.material.map;
            const assetId = `texture-${Math.random().toString(36).substring(7)}`;
            const asset = document.createElement('img');
            asset.setAttribute('src', texture.image.currentSrc);
            asset.setAttribute('id', assetId);

            asset.addEventListener('load', () => {
                node.material.map = document.querySelector(`#${assetId}`);
              });
        }
    }
  });
});

