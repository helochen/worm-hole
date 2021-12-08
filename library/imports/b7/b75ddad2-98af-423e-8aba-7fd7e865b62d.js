"use strict";
cc._RF.push(module, 'b75ddrSmK9CPoq6f9foZbYt', 'hero-player');
// Script/hero-player.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.text = "基础脚本";
        // LIFE-CYCLE CALLBACKS:
        _this._input = {};
        _this._speed = 15;
        _this._animation = 'player_idle';
        _this._ani = 'player_idle';
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        this.node.getComponent(cc.Animation).on(cc.Animation.EventType.FINISHED, this.animationFinished, this);
        this._position = this.node.getPosition();
        var rigid = this.node.getComponent(cc.RigidBody);
        this._lv = rigid.linearVelocity;
    };
    NewClass.prototype.onBeginContact = function (contact, selfCollider, otherCollider) {
        console.log("touch....");
    };
    NewClass.prototype.onEndContact = function (contact, selfCollider, otherCollider) {
        console.log("end.........");
    };
    NewClass.prototype.onDestroy = function () {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        this.node.getComponent(cc.Animation).off(cc.Animation.EventType.FINISHED, this.animationFinished, this);
    };
    NewClass.prototype.animationFinished = function (event, data) {
        console.log(event, data);
    };
    NewClass.prototype.onKeyDown = function (e) {
        this._input[e.keyCode] = 1;
        if (this._input[cc.macro.KEY.a]) {
            this._ani = 'player_a';
            //this._position.x -= this._speed;
            this._lv.y = 0;
            this._lv.x = -this._speed;
        }
        else if (this._input[cc.macro.KEY.d]) {
            this._ani = 'player_d';
            //this._position.x += this._speed;
            this._lv.y = 0;
            this._lv.x = this._speed;
        }
        else if (this._input[cc.macro.KEY.s]) {
            this._ani = 'player_s';
            //this._position.y -= this._speed;
            this._lv.x = 0;
            this._lv.y = -this._speed;
        }
        else if (this._input[cc.macro.KEY.w]) {
            this._ani = 'player_w';
            //this._position.y += this._speed;
            this._lv.x = 0;
            this._lv.y = this._speed;
        }
        else {
            this._lv.x = 0;
            this._lv.y = 0;
        }
        console.log("key press:" + e.keyCode + "speed:" + this._lv);
        this.node.getComponent(cc.RigidBody).linearVelocity = this._lv;
    };
    NewClass.prototype.playAnimation = function (ani) {
        if (this._animation !== ani) {
            this._animation = ani;
            this.node.getComponent(cc.Animation).play(ani);
        }
    };
    NewClass.prototype.onKeyUp = function (e) {
        this._input[e.keyCode] = 0;
        if (e.keyCode == cc.macro.KEY.a || e.keyCode == cc.macro.KEY.d) {
            this._lv.x = 0;
        }
        else if (e.keyCode == cc.macro.KEY.s || e.keyCode == cc.macro.KEY.w) {
            this._lv.y = 0;
        }
        console.log("key up:" + e.keyCode + "speed:" + this._lv);
        this.node.getComponent(cc.RigidBody).linearVelocity = this._lv;
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.update = function (dt) {
        this.playAnimation(this._ani);
    };
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();