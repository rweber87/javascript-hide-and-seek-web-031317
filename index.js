 function getFirstSelector(selector) {
 	return document.querySelector(selector)
 }

 function nestedTarget() {
 	return document.querySelector("div.target")
 }

 function deepestChild() {
 	var node = document.getElementById("grand-node")
 	var nextNode = node.children[0]

 	while(nextNode) {
 		node = nextNode
 		nextNode = node.children[0]
 	}

 	return node
 }

 function increaseRankBy(n) {
 	const rankedLists = document.querySelectorAll('.ranked-list')

 	for (var i = 0; i < rankedLists.length; i++) {
 		let children = rankedLists[i].children

 		for (var j = 0; j < children.length; j++) {
 			children[j].innerHTML = parseInt(children[j].innerHTML) + n
 		}
 	}
 }