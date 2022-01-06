// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.TiledMap)
    tiledMap: cc.TiledMap = null;
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        if (cc.TiledMap) {
            let tiledSize = this.tiledMap.getTileSize();
            cc.log(tiledSize);
            let layer = this.tiledMap.getLayer("collision");
            let layerSize = layer.getLayerSize();

            for (let i = 0; i < layerSize.width; ++i) {
                for (let j = 0; j < layerSize.height; ++j) {
                    let tiled = layer.getTiledTileAt(i, j, true);
                    if (tiled.gid != 0) {
                        tiled.node.group = 'wall';
                        cc.log(tiled.node.name);
                        let body = tiled.node.addComponent(cc.RigidBody);
                        body.type = cc.RigidBodyType.Static;
                        body.enabledContactListener = true; 
                        let collider = tiled.node.addComponent(cc.PhysicsBoxCollider);
                        collider.offset = new cc.Vec2(tiledSize.width / 2, tiledSize.height / 2);
                        collider.size = tiledSize;
                        collider.apply();
                    }
                }
            }
        }
    }

    // update (dt) {}
}
