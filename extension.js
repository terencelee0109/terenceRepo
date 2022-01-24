// var hx = require("hbuilderx");
// //该方法将在插件激活的时候调用
// function activate(context) {
// 	let disposable = hx.commands.registerCommand('extension.helloWorld', () => {
// 		hx.window.showInformationMessage('你好，这是我的第一个插件扩展。');
// 	});
// 	//订阅销毁钩子，插件禁用的时候，自动注销该command。
// 	context.subscriptions.push(disposable);
// }
//该方法将在插件禁用的时候调用（目前是在插件卸载的时候触发）

import mobileDetector from "mobile-detect"
import {isMobile} from 'react-device-detect';
import VueMobileDetection from 'vue-mobile-detection'

function deactivate() {
	console.log('from extension')
}

function updatedTest() {
	console.log('updated to v0.0.7')
}

function detectPlatform() {
	console.log('mobileDetector', mobileDetector.mobile())
}

function reactDetectPlatform(){
	console.log('react-mobileDetector', isMobile)
}

function vueDetectPlatform(){
	console.log('vue-mobileDetector', VueMobileDetection.isMobile)
}

module.exports = {
	deactivate,
	updatedTest,
	detectPlatform,
	reactDetectPlatform
}
