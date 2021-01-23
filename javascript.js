/*
FORMAT OF GITHUB SIDEBAR

# Contents
* [Home][home]
* [Change Log][changelog]
* [Overview][overview]
  
[home]: https://github.com/youruser/yourRepo/wiki/Home
[changelog]: https://github.com/youruser/yourRepo/wiki/Change-Log
[overview]:https://github.com/youruser/yourRepo/wiki#overview
*/

function echoTop(arr) {
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
};

function echoBot(arr) {
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
};

function createLinks() {
	let aaa = document.getElementsByTagName('a');
	let allLinks = {};
		allLinks.top = [];
		allLinks.bot = [];
	for (let i=0; i < aaa.length; i++) {
		let currentId = aaa[i].id;
		console.log(">>> " + currentId);
		let currentHref = aaa[i].href;
		console.log("<<<< " + currentHref);
		if ((!!currentId) && (currentId !="") && (currentId.toLowerCase().indexOf('user-content-') > -1)) {
			console.log("PUSHED: TRUE " + currentId);
			let cutId = currentId.split('user-content-')[1];
			allLinks.top.push('* [' + cutId.replace(/-/g,' ') + ']' + '[' + cutId + ']');
			allLinks.bot.push('[' + cutId + ']:' + currentHref);
		} else {
			console.log("PUSHED: FALSE " + currentId);
		}
	}
	echoTop(allLinks.top);
	echoBot(allLinks.bot);
	return allLinks;
}
let allLinksArray = createLinks();
