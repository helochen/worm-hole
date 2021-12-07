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
        _this._speed = 200;
        _this._animation = 'player_idle';
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        this.node.getComponent(cc.Animation).on(cc.Animation.EventType.FINISHED, this.animationFinished, this);
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
        var ani = 'player_idle';
        if (this._input[cc.macro.KEY.a] || this._input[cc.macro.KEY.left]) {
            ani = 'player_a';
        }
        else if (this._input[cc.macro.KEY.d] || this._input[cc.macro.KEY.right]) {
            ani = 'player_d';
        }
        else if (this._input[cc.macro.KEY.s] || this._input[cc.macro.KEY.down]) {
            ani = 'player_s';
        }
        else if (this._input[cc.macro.KEY.w] || this._input[cc.macro.KEY.up]) {
            ani = 'player_w';
        }
        this.playAnimation(ani);
    };
    NewClass.prototype.playAnimation = function (ani) {
        if (this._animation !== ani) {
            this._animation = ani;
            this.node.getComponent(cc.Animation).play(ani);
        }
    };
    NewClass.prototype.onKeyUp = function (e) {
        this._input[e.keyCode] = 0;
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.update = function (dt) {
        if (this._input[cc.macro.KEY.a] || this._input[cc.macro.KEY.left]) {
            this.node.x -= this._speed * dt;
        }
        else if (this._input[cc.macro.KEY.d] || this._input[cc.macro.KEY.right]) {
            this.node.x += this._speed * dt;
        }
        else if (this._input[cc.macro.KEY.s] || this._input[cc.macro.KEY.down]) {
            this.node.y -= this._speed * dt;
        }
        else if (this._input[cc.macro.KEY.w] || this._input[cc.macro.KEY.up]) {
            this.node.y += this._speed * dt;
        }
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