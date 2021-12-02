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
    private _animation :string = 'player_idle';

    onLoad() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        this.node.getComponent(cc.Animation).on(cc.Animation.EventType.FINISHED,
            this.animationFinished, this);
        
    }

    onDestroy() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        this.node.getComponent(cc.Animation).off(cc.Animation.EventType.FINISHED, this.animationFinished, this);
    }

    animationFinished(event: string, data: any) {
        console.log(event , data);
    }

    onKeyDown(e: any) {
        this._input[e.keyCode] = 1;
        let ani = 'player_idle';
        if (this._input[cc.macro.KEY.a] || this._input[cc.macro.KEY.left]) {
            ani = 'player_a';
        }else if(this._input[cc.macro.KEY.d] || this._input[cc.macro.KEY.right]){
            ani = 'player_d';
        }else if(this._input[cc.macro.KEY.s] || this._input[cc.macro.KEY.down]){
            ani = 'player_s';
        }else if(this._input[cc.macro.KEY.w] || this._input[cc.macro.KEY.up]){
            ani = 'player_w';
        }
        this.playAnimation(ani);
    }

    playAnimation(ani:string){
        if(this._animation !== ani){
            this._animation = ani;
            this.node.getComponent(cc.Animation).play(ani);
        }
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
