import { Label, find } from 'cc';
// @ts-ignore
import { testCase, testClass, beforeClass } from 'db://automation-framework/runtime/test-framework.mjs';
import { screenshot_custom } from '../common/utils';
import { LoadResDirExample } from '../../../cases/scripting/asset_loading/LoadResDir/LoadResDir_example';

@testClass('LoadResDir', 'LoadResDir')
export class LoadResDir {
    private caseScript!: LoadResDirExample;
    private df = 10;

    @beforeClass
    initData() {
        this.caseScript = find('Canvas')?.getComponent(LoadResDirExample)!;
    }
    
    @testCase
    async startPlay() {
        await screenshot_custom(this.df);
    }

    @testCase
    async onLoadAll() {
        await this.caseScript.onLoadAll();
        const label = this.caseScript.scrollView.content!.children[0].getComponent(Label)!;
        label.string = label.string.replace(/https?:\/\/.+packages\/remote\//ig, 'http://localserver:port/planId/jobId/platformIndex/packages/remote/');
        await screenshot_custom(this.df);

        this.caseScript.scrollView.scrollToBottom();
        await screenshot_custom(this.df * 6);
    }

    @testCase
    async onLoadSpriteFrameAll() {
        this.caseScript.onClearAll();

        await this.caseScript.onLoadSpriteFrameAll();
        await screenshot_custom(this.df);
    }

    @testCase
    async onClearAll() {
        this.caseScript.onClearAll();
        await screenshot_custom(this.df);
    }
}