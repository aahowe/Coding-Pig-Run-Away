
import { _decorator, Component, Node, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = landController
 * DateTime = Sat Mar 05 2022 19:13:34 GMT+0800 (中国标准时间)
 * Author = aahowe
 * FileBasename = landController.ts
 * FileBasenameNoExtension = landController
 * URL = db://assets/scripts/landController.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
 *
 */

@ccclass('landController')
export class landController extends Component {
    //背景移动速度
    @property
    speed: number = 100;
    //背景宽度
    @property
    width: number = 144;

    start() {

    }

    update(deltaTime: number) {
        //遍历背景子节点
        for (let bg of this.node.children) {
            //计算下一帧移动到的位置
            let x: number = bg.position.x - this.speed * deltaTime;
            //设置新位置
            bg.setPosition(new Vec3(x, 0, 0));
            //如果背景图出了视野则移动到后方等待下一轮循环
            if (bg.position.x < -this.width) {
                bg.setPosition(new Vec3(x + 2 * this.width, 0, 0));
            }
        }
    }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/zh/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/zh/scripting/decorator.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/zh/scripting/life-cycle-callbacks.html
 */