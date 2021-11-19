
const {ccclass, property} = cc._decorator;

@ccclass
export default class WebViewControl extends cc.Component {

    private m_ntime = 2000;

    start () {
        let webview = this.node.getComponent(cc.WebView);
        setTimeout(()=>{
            webview.url = "https://www.bilibili.com/video/BV14q4y1u7ub?spm_id_from=333.851.b_7265636f6d6d656e64.7";
        },this.m_ntime)
    }
}
