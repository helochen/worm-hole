// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    playerNode:cc.Node = null;
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        let playerNode = this.node.getParent().getChildByName("roles").getChildByName("player");
        cc.log(playerNode);
        this.playerNode = playerNode;
    }

    update(dt: number) {
        if (this.playerNode) {
            let w_pos = this.playerNode.convertToWorldSpaceAR(cc.v2(0,0));
            let n_post = this.node.parent.convertToNodeSpaceAR(w_pos);

            this.node.position = cc.v3(n_post);
        }
    }
}
