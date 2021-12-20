// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';
    private _input = {};
    private _speed: number = 5;
    private _animation: string = 'player_idle';
    private _position: cc.Vec2;
    private _ani = 'player_idle';
    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        this.node.getComponent(cc.Animation).on(cc.Animation.EventType.FINISHED,
            this.animationFinished, this);

        this._position = this.node.getPosition();

        this.node.getComponent(cc.RigidBody).type = cc.RigidBodyType.Static;

    }

    onCollisionEnter(other, self) {
        console.log(other);
    }

    start() {

    }
    onDestroy() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        this.node.getComponent(cc.Animation).off(cc.Animation.EventType.FINISHED, this.animationFinished, this);
    }

    animationFinished(event: string, data: any) {
        console.log(event, data);
    }

    onKeyDown(e: any) {
        this._input[e.keyCode] = 1;
        if (this._input[cc.macro.KEY.left]) {
            this._ani = 'player_a';
            this._position.x -= this._speed;
        } else if (this._input[cc.macro.KEY.right]) {
            this._ani = 'player_d';
            this._position.x += this._speed;
        } else if (this._input[cc.macro.KEY.up]) {
            this._ani = 'player_s';
            this._position.y += this._speed;
        } else if (this._input[cc.macro.KEY.down]) {
            this._ani = 'player_w';
            this._position.y -= this._speed;
        }

    }

    playAnimation(ani: string) {
        if (this._animation !== ani) {
            this._animation = ani;
            this.node.getComponent(cc.Animation).play(ani);
        }
    }

    onKeyUp(e: any) {
        this._input[e.keyCode] = 0;
    }

    update(dt: number) {
        this.node.x = this._position.x;
        this.node.y = this._position.y;
        this.playAnimation(this._ani);
    }
}
