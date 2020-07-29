function copyToClipboard(){

}

function loadXMLDocToTree(inputFile){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      formatXMLTree(this.responseXML);
    }
  };
  
  xmlhttp.open("GET",  inputFile, true);
  xmlhttp.send();
}

function loadXMLStringToTree(xml){
    if(!isXMLDeclarationPresent(xml)){
	var xmlDeclaration = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
    	var xmlString =  xmlDeclaration +  "<xmlTree>" + xml + "</xmlTree>";
	xml = xmlString;
    }
	var parser = new DOMParser();	
	var xmlDoc = parser.parseFromString(xml, "text/xml");
	formatXMLTree(xmlDoc);
}

function isXMLDeclarationPresent(xml){
    return xml[1] == "?";
}

function formatXMLTree(xmlDoc){
	//var xmlDoc = xml.responseXML;
	var root = xmlDoc.firstElementChild;
	var list = "";

	list += formatXMLTreeRec(xmlDoc, root);

	document.getElementById("XMLTree").innerHTML = list;

	var toggler = document.getElementsByClassName("caret");
	var j;
	for (j = 0; j < toggler.length; j++) {
	  toggler[j].addEventListener("click", function() {
	    this.parentElement.querySelector(".nested").classList.toggle("active");
	    this.classList.toggle("caret-down");
	  });
	}
	var keyColor = document.getElementsByClassName("key");
	var k;
	for(k = 0; k < keyColor.length; k++){
		keyColor[k].style.color="blue";
	}
}

function setStyle(node){
	var value = node.textContent;
	var toReturn = "";
	
	if(node.tagName == "SDI"){
		toReturn += "</br>" + '&nbsp;&nbsp;&nbsp;&nbsp;'+ "[ 9]: Channel (0 = A, 1 = B) </br>" + '&nbsp;&nbsp;&nbsp;&nbsp;' + "[10]: SPARE (always 0)\n";
	}
	/*
	else if(node.tagName == "Data"){
		var arr = value.split("                 ");
		var i;
		for(i = 0; i < arr.length; i++){
			if(arr[i].length != 0){
				
				toReturn += "<br>" + '&nbsp;&nbsp;&nbsp;&nbsp;';
				toReturn += "[" + arr[i].substring(0, 2) + "]";
				toReturn += arr[i].substring(3, arr[i].length);
			}

		}
	}
	*/

	else{
		toReturn += "<span class=\"value\">" + value + "</span>";
	}
	return toReturn;
}



function formatXMLTreeRec(xml, root){
	var list = "";
	if(root.children.length != 0){//If the node is a parent
		list += "<li style=\"list-style-type:none;\">";
		if(root.tagName != "ARINC_429_Word"){
			list+= "<span id=\"" + root.tagName + "\" class=\"caret\">";
		}else{
			list += "<span class=\"caret\">";
		}
		list += root.tagName;
		list += " [" + root.childElementCount + "]";

		list += "</span>";
		list +="<ul  style=\"list-style-type:none;\" class=\"nested\">";
		var i;
		for(i = 0; i < root.children.length; i++){
			var currChild = root.children[i];
			if(currChild.children.length > 0){
				list += formatXMLTreeRec(xml, currChild);
			}else{
				var key = currChild.tagName;
				var value = currChild.textContent;
				list += "<li style=\"list-style-type:none;\">";
				list += "<span class=\"key\">" + key  + ": " + "</span>";
				//list += "<span class=\"value\">" + value + "</span>";
				list += setStyle(currChild);
				list += "</li>";
			}
		}
		list += "</ul>";
		list += "</li>";	
	}else {//the node is barren
		list += "<li style=\"list-style-type:none;\">" + root.tagName + "</li>";
	}
	return list;
}



var show = function (elem) {
	elem.style.display = 'block';
};

var hide = function (elem) {
	elem.style.display = 'none';
};

var toggle = function (elem) {
	if (window.getComputedStyle(elem).display === 'block') {
		hide(elem);
		return;
	}
	show(elem);
};
// Listen for click events
document.addEventListener('click', function (event) {
	// Make sure clicked element is our toggle
	if (!event.target.classList.contains('toggle')) return;
	// Prevent default link behavior
	event.preventDefault();
	// Get the content
	var content = document.querySelector(event.target.hash);
	if (!content) return;
	// Toggle the content
	toggle(content);
}, false);


function toTable(node){
	table="<table> <tr><td>HELLO</td></tr></table>";
}

