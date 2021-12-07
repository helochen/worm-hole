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
    plyer:cc.Prefab = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        console.log("...添加角色...");

        let role1 = cc.instantiate(this.plyer);
        role1.setPosition(cc.v2(10,3));
        let role2 = cc.instantiate(this.plyer);
        role2.setPosition(cc.v2(100,10));
        
        role1.parent = this.node;
        role2.parent = this.node;
    }

    start() {

    }

    // update (dt) {}
}
