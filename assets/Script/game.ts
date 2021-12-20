// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {


    @property(cc.Prefab)
    plyer: cc.Prefab = null;
    @property(cc.Prefab)
    enemy: cc.Prefab = null;
    @property(cc.Prefab)
    actor: cc.Prefab = null;
    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        console.log("...物理引擎...");
        let c = cc.director.getCollisionManager();
        c.enabled = true;
        c.enabledDebugDraw = true;
        c.enabledDrawBoundingBox = true;

        let p = cc.director.getPhysicsManager();
        p.enabled = true;
        //p.debugDrawFlags = 1;
        p.gravity = cc.v2(0, 0);
        console.log("...添加角色...");

        let plyer = cc.instantiate(this.plyer);
        plyer.setPosition(cc.v2(10, 3));
        let enemy = cc.instantiate(this.enemy);
        enemy.setPosition(cc.v2(100, 10));
        let actor = cc.instantiate(this.actor);
        actor.setPosition(cc.v2(80, 5));

        plyer.parent = this.node;
        enemy.parent = this.node;
        actor.parent = this.node;
    }

    start() {

    }

    // update (dt) {}
}
