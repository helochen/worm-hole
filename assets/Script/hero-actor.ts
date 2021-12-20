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
    private _speed: number = 15;
    private _animation: string = 'actor_idle';
    private _position: cc.Vec2;
    private _ani = 'actor_idle';
    private _lv: cc.Vec2;
    onLoad() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        this.node.getComponent(cc.Animation).on(cc.Animation.EventType.FINISHED,
            this.animationFinished, this);

        this._position = this.node.getPosition();

        let rigid = this.node.getComponent(cc.RigidBody);
        this._lv = rigid.linearVelocity;

    }

    onBeginContact(contact: cc.PhysicsContact, selfCollider: cc.PhysicsCollider, otherCollider: cc.PhysicsCollider) {
        console.log("touch....")
    }

    onEndContact(contact: cc.PhysicsContact, selfCollider: cc.PhysicsCollider, otherCollider: cc.PhysicsCollider) {
        console.log("end.........")
    }

    onDestroy() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        this.node.getComponent(cc.Animation).off(cc.Animation.EventType.FINISHED, this.animationFinished, this);
    }

    animationFinished(event: string, data: any) {
        console.log(event, data);
        this._ani = 'actor_idle';
    }

    onKeyDown(e: any) {
        this._input[e.keyCode] = 1;
        if (this._input[cc.macro.KEY.a]) {
            this._ani = 'actor_idle';
            this._lv.y = 0;
            this._lv.x = -this._speed;
        } else if (this._input[cc.macro.KEY.d]) {
            this._ani = 'actor_idle';
            this._lv.y = 0;
            this._lv.x = this._speed;
        } else if (this._input[cc.macro.KEY.s]) {
            this._ani = 'actor_idle';
            this._lv.x = 0;
            this._lv.y = -this._speed;
        } else if (this._input[cc.macro.KEY.w]) {
            this._ani = 'actor_idle';
            this._lv.x = 0;
            this._lv.y = this._speed;
        } else if (this._input[cc.macro.KEY.j]) {
            this._lv.x = 0;
            this._lv.y = 0;
            this._ani = 'actor_attack';
        } else {
            this._lv.x = 0;
            this._lv.y = 0;
        }
        console.log("key press:" + e.keyCode + "speed:" + this._lv);
        this.node.getComponent(cc.RigidBody).linearVelocity = this._lv;
    }

    playAnimation(ani: string) {
        if (this._animation !== ani) {
            this._animation = ani;
            this.node.getComponent(cc.Animation).play(ani);
        }
    }

    onKeyUp(e: any) {
        this._input[e.keyCode] = 0;
        if (e.keyCode == cc.macro.KEY.a || e.keyCode == cc.macro.KEY.d) {
            this._lv.x = 0;
        }
        else if (e.keyCode == cc.macro.KEY.s || e.keyCode == cc.macro.KEY.w) {
            this._lv.y = 0;
        }
        console.log("key up:" + e.keyCode + "speed:" + this._lv);
        this.node.getComponent(cc.RigidBody).linearVelocity = this._lv;
    }


    start() {

    }

    update(dt: number) {
        this.playAnimation(this._ani);
    }
}
