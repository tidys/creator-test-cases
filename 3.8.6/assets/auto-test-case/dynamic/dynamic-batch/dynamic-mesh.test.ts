// @ts-ignore
import { find } from "cc";
// @ts-ignore
import { runScene, testCase, testClass,sleep, waitForFrames } from "db://automation-framework/runtime/test-framework.mjs";
import { screenshot_custom_by_wait } from "../common/utils";

@runScene("dynamic-mesh")
@testClass("DynamicMesh")
export class DynamicMesh {
    _dt = 20;//500;
    // this test scene can't capture,so this test case cancle test
    @testCase
    async start() {
        let num = 1000; //Used for counting frames, up to 1000 frames
        let isLoadedMesh =  find("Canvas").getComponent("DynamicMeshCreator").isLoadedMesh;
        while(!isLoadedMesh && num>0){
            num -= 1;
            isLoadedMesh =  find("Canvas").getComponent("DynamicMeshCreator").isLoadedMesh;
            await waitForFrames(1); 
        }

        //waitForFrames(1);
        //await sleep(2);
        console.log("DynamicMesh num:"+num);
        await screenshot_custom_by_wait(this._dt - 1);
    }

    @testCase
    async update() {
       //@ts-ignore
       find("Canvas").getComponent("DynamicMeshCreator").onButtonUpdateDynamicMesh(find("Canvas/UpdateDynamicMesh")?.getComponent("cc.Button"));
       //await sleep(3)
       for(let i = 0; i < 4; i++){
            await sleep(1)
            await screenshot_custom_by_wait(this._dt*5);
       }
    }
}
