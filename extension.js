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
// import * as userService from "./src/user/user.js"
import {userClass as user } from "./src/user/user.js"
import {productClass as product } from "./src/product/product.js"

function deactivate() {
	console.log('from extension')
}

function updatedTest() {
	console.log('updated to v0.0.7')
}

function detectPlatform(userAgent) {
	/* userAgent */
	/* for APP (iPad/Tablet/Mobile Devices) : plus.navigator.getUserAgent() */
	/* for WEB: window.navigator.userAgent */ 
	
	var md = new mobileDetector(userAgent);
	
	return {
		"mobile" : md.mobile(),
		"phone" : md.phone(),
		"tablet" : md.tablet(),
		"userAgent" : md.userAgent(),
		"os" : md.os(),
		"is" : md.is('iPhone'),
		"is" : md.is('bot'),
		"version" : md.version('Webkit'),
		"versionStr" : md.versionStr('Build'),
		"match" : md.match('playstation|xbox')
	}
	
	// console.log( md.mobile() );    
	// console.log( md.phone() );     
	// console.log( md.tablet() );    
	// console.log( md.userAgent() ); 
	// console.log( md.os() );        
	// console.log( md.is('iPhone') );
	// console.log( md.is('bot') );   
	// console.log( md.version('Webkit') );   
	// console.log( md.versionStr('Build') ); 
	// console.log( md.match('playstation|xbox') );
}

// function reactDetectPlatform(){
// 	console.log('react-mobileDetector', isMobile)
// }

// function vueDetectPlatform(){
// 	console.log('vue-mobileDetector', VueMobileDetection.isMobile)
// }

module.exports = {
	deactivate,
	updatedTest,
	detectPlatform,
	user,
	product
}
