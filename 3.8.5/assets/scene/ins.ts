import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("ins")
export class ins extends Component {
  start() {
    this.node.on(Node.EventType.TOUCH_START, () => {
      console.log("click 1");
    });
    this.node.on(Node.EventType.TOUCH_START, () => {
      console.log("click 2");
    });
  }

  update(deltaTime: number) {}
}
