
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/hero-player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxoZXJvLXBsYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXNFQztRQW5FRyxVQUFJLEdBQVcsTUFBTSxDQUFDO1FBRXRCLHdCQUF3QjtRQUNoQixZQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1osWUFBTSxHQUFVLEdBQUcsQ0FBQztRQUNwQixnQkFBVSxHQUFXLGFBQWEsQ0FBQzs7SUE4RC9DLENBQUM7SUE1REcseUJBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNFLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUNuRSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFdEMsQ0FBQztJQUVELDRCQUFTLEdBQVQ7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFNB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LENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztTQUNuQzthQUFLLElBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFDO1lBQ3BFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1NBQ25DO2FBQUssSUFBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUM7WUFDbkUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7U0FDbkM7YUFBSyxJQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBQztZQUNqRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztTQUNuQztJQUNMLENBQUM7SUFsRUQ7UUFEQyxRQUFROzBDQUNhO0lBSEwsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXNFNUI7SUFBRCxlQUFDO0NBdEVELEFBc0VDLENBdEVxQyxFQUFFLENBQUMsU0FBUyxHQXNFakQ7a0JBdEVvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHRleHQ6IHN0cmluZyA9IFwi5Z+656GA6ISa5pysXCI7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcbiAgICBwcml2YXRlIF9pbnB1dCA9IHt9O1xyXG4gICAgcHJpdmF0ZSBfc3BlZWQ6bnVtYmVyID0gMjAwO1xyXG4gICAgcHJpdmF0ZSBfYW5pbWF0aW9uIDpzdHJpbmcgPSAncGxheWVyX2lkbGUnO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5vbihjYy5BbmltYXRpb24uRXZlbnRUeXBlLkZJTklTSEVELFxyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbkZpbmlzaGVkLCB0aGlzKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5vZmYoY2MuQW5pbWF0aW9uLkV2ZW50VHlwZS5GSU5JU0hFRCwgdGhpcy5hbmltYXRpb25GaW5pc2hlZCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgYW5pbWF0aW9uRmluaXNoZWQoZXZlbnQ6IHN0cmluZywgZGF0YTogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQgLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBvbktleURvd24oZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5faW5wdXRbZS5rZXlDb2RlXSA9IDE7XHJcbiAgICAgICAgbGV0IGFuaSA9ICdwbGF5ZXJfaWRsZSc7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lucHV0W2NjLm1hY3JvLktFWS5hXSB8fCB0aGlzLl9pbnB1dFtjYy5tYWNyby5LRVkubGVmdF0pIHtcclxuICAgICAgICAgICAgYW5pID0gJ3BsYXllcl9hJztcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLl9pbnB1dFtjYy5tYWNyby5LRVkuZF0gfHwgdGhpcy5faW5wdXRbY2MubWFjcm8uS0VZLnJpZ2h0XSl7XHJcbiAgICAgICAgICAgIGFuaSA9ICdwbGF5ZXJfZCc7XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5faW5wdXRbY2MubWFjcm8uS0VZLnNdIHx8IHRoaXMuX2lucHV0W2NjLm1hY3JvLktFWS5kb3duXSl7XHJcbiAgICAgICAgICAgIGFuaSA9ICdwbGF5ZXJfcyc7XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5faW5wdXRbY2MubWFjcm8uS0VZLnddIHx8IHRoaXMuX2lucHV0W2NjLm1hY3JvLktFWS51cF0pe1xyXG4gICAgICAgICAgICBhbmkgPSAncGxheWVyX3cnO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBsYXlBbmltYXRpb24oYW5pKTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5QW5pbWF0aW9uKGFuaTpzdHJpbmcpe1xyXG4gICAgICAgIGlmKHRoaXMuX2FuaW1hdGlvbiAhPT0gYW5pKXtcclxuICAgICAgICAgICAgdGhpcy5fYW5pbWF0aW9uID0gYW5pO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShhbmkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbktleVVwKGU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX2lucHV0W2Uua2V5Q29kZV0gPSAwO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0Om51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLl9pbnB1dFtjYy5tYWNyby5LRVkuYV0gfHwgdGhpcy5faW5wdXRbY2MubWFjcm8uS0VZLmxlZnRdKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS54IC09IHRoaXMuX3NwZWVkICogZHQ7XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5faW5wdXRbY2MubWFjcm8uS0VZLmRdIHx8IHRoaXMuX2lucHV0W2NjLm1hY3JvLktFWS5yaWdodF0pe1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUueCArPSB0aGlzLl9zcGVlZCAqIGR0O1xyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuX2lucHV0W2NjLm1hY3JvLktFWS5zXSB8fCB0aGlzLl9pbnB1dFtjYy5tYWNyby5LRVkuZG93bl0pe1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUueSAtPSB0aGlzLl9zcGVlZCAqIGR0O1xyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuX2lucHV0W2NjLm1hY3JvLktFWS53XSB8fCB0aGlzLl9pbnB1dFtjYy5tYWNyby5LRVkudXBdKXtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnkgKz0gdGhpcy5fc3BlZWQgKiBkdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19