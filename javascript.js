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

function addCapsToString(str) {
	const capitalize = (s) => {
		if (typeof s !== 'string') return ''
		return s.charAt(0).toUpperCase() + s.slice(1)
	};
	let oldString = str;
	let splitStringArr = oldString.split(" ");
	let newStringArr=[];
	let returnString = null;
	for (let i=0; i < splitStringArr.length; i++) {
		let newString = null;
		if ( i != splitStringArr.length -1) {
			newString = capitalize(splitStringArr[i]) + " ";
		} else {
			newString = capitalize(splitStringArr[i]);
		}
		newStringArr.push(newString)
	}
	returnString = newStringArr.join(" ");
	return returnString;
	
};

function echoTop(arr) {
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
	console.log("  ");
	console.log("  ");
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
		//console.log(">>> " + currentId);
		let currentHref = aaa[i].href;
		//console.log("<<<< " + currentHref);
		if ((!!currentId) && (currentId !="") && (currentId.toLowerCase().indexOf('user-content-') > -1)) {
			//console.log("PUSHED: TRUE " + currentId);
			let cutId = currentId.split('user-content-')[1];
			allLinks.top.push('* [' + addCapsToString(cutId.replace(/-/g,' ')) + ']' + '[' + cutId + ']');
			allLinks.bot.push('[' + cutId + ']:' + currentHref);
		} else {
			//console.log("PUSHED: FALSE " + currentId);
		}
	}
	echoTop(allLinks.top);
	echoBot(allLinks.bot);
	return allLinks;
}
let allLinksArray = createLinks();
