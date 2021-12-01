// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property
    text: string = "基础脚本";

    // LIFE-CYCLE CALLBACKS:
    private _input = {};
    private _speed:number = 200;

    onLoad() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }

    onDestroy() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }

    onKeyDown(e: any) {
        this._input[e.keyCode] = 1;
    }

    onKeyUp(e: any) {
        this._input[e.keyCode] = 0;
    }

    start() {

    }

    update(dt:number) {
        if (this._input[cc.macro.KEY.a] || this._input[cc.macro.KEY.left]) {
            this.node.x -= this._speed * dt;
        }else if(this._input[cc.macro.KEY.d] || this._input[cc.macro.KEY.right]){
            this.node.x += this._speed * dt;
        }else if(this._input[cc.macro.KEY.s] || this._input[cc.macro.KEY.down]){
            this.node.y -= this._speed * dt;
        }else if(this._input[cc.macro.KEY.w] || this._input[cc.macro.KEY.up]){
            this.node.y += this._speed * dt;
        }
    }
}
