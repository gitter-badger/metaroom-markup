class MetaTsurfaceController extends MRM.MetaBaseController {
  constructor(dom){
    super(dom)
    this.dom = dom;
    this.metaObject = this.createMetaObject();

    this.setupComponent();
    this.parent = null;

    this.updateMetaObject()
  }

  get propertiesSettings() {
    return {
      tableWidth: {
        type: Number,
        default: 1,
        onChange: "updateDimension"
      },
      tableHeight: {
        type: Number,
        default: 1,
        onChange: "updateMetaObject"
      },
      tableLength: {
        type: Number,
        default: 1,
        onChange: "updateDimension"
      },

      width: {
        type: Number,
        default: 1,
        onChange: "updateMetaObject"
      },
      length: {
        type: Number,
        default: 1,
        onChange: "updateMetaObject"
      }
    }
  }

  get tagName() {
    return "meta-tsurface"
  }

  updateDimension() {
    this.properties.width = this.properties.tableWidth
    this.properties.length = this.properties.tableLength
  }

  createMetaObject(){
    var height = 1;
    var width = 1;
    var depth = 1;
    var texture = THREE.ImageUtils.loadTexture(
      'img/box.png'
    );
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(20, 20);

    var geometry = new THREE.BoxGeometry(width, height, depth);
    var material = new THREE.MeshBasicMaterial({
      map: texture,
      color: 0xffffff,
      side: THREE.DoubleSide
    });

    var mesh = new THREE.Mesh(geometry, material);
    var group = new THREE.Group();
    group.add( mesh );

    return {
      mesh: mesh,
      group: group
    };
  }

  updateMetaObject(){
    this.metaObject.mesh.scale.x = this.properties.width;
    this.metaObject.mesh.scale.y = this.properties.length;

    this.metaObject.group.position.z = this.properties.tableHeight;
  }
}

class MetaTsurface extends MRM.MetaBase {
  createdCallback() {
    this.controller = new MetaTsurfaceController(this);
  }
}

document.registerElement('meta-tsurface', MetaTsurface);
