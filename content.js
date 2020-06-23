/*
Chrome extension that plays "Here Comes The Money (Entrance Theme)" 
once you have passed all public/release tests on UMD submit server!
*/

var tests //list with all pass or fail fields (scraped from html)
const URL = "https://www.youtube.com/watch?v=HMuYfScGpbE" //Link to song
var passed = false //Begins false, if flag DOESNT see a test fail, set to true
var flag = true   //used to avoid passed beginning true
var money = false //Result condition on money or being BROKE
let visitedArray = [] //Stores concattenated strings of links visited



// Make sure we're on the right wesbite
if ((location.host.localeCompare("submit.cs.umd.edu") == 0)
   || (location.host.localeCompare("www.gradescope.com") == 0)){
	// If theres already storage, call that otherwise make new storage
	if (localStorage.getItem('visited')) {
	  visitedArray = JSON.parse(localStorage.getItem('visited'))
	} else {
	  visitedArray = []
	}



	if (location.host.localeCompare("www.gradescope.com") == 0){
		// length gives # of tests
		var allTests = document.querySelectorAll("div.testCase")
		// length gives # of passed tests
		tests = document.querySelectorAll("div.testCase.testCase-passed")

		// If the amount of passed tests = total tests, it passed
		if (allTests.length > 0 && tests.length == allTests.length 
			&& !window.localStorage.getItem('visited').includes(window.location)) {
			money = true
			visitedArray.push(window.location)
		}


	} else {//submit server
		tests = document.querySelectorAll("tr td:nth-child(3)")
		// loop through list make sure all passed
		function verifyPassed(item, index, list){
			if (list.length > 0 && list[index].innerHTML.localeCompare("passed") != 0) {flag = false}
		}
		//if there isn't a table on this page we're at the wrong page
		if (tests.length == 0) {flag = false}
		else tests.forEach(verifyPassed)


		//If nothing offended flag, you passed everything so passed = true
		if (flag) {passed = true}
		// If at submit server and passed we will gain this grain
		if (passed) {
			alert("passed")
			if (window.localStorage.getItem('visited') == null ){
				money = true
				visitedArray.push(window.location)
			}//if list empty
			else if (!window.localStorage.getItem('visited').includes(window.location)){
				money = true
				visitedArray.push(window.location)
			} //if you havent visited this link
		}
	}


	//updates visited list
	localStorage.setItem('visited', JSON.stringify(visitedArray))
	if(money) {window.open(URL, '_blank')}//opens tab if result money is true
}
