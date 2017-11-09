function getRandom(){
	var today = new Date();
	var seed = today.getSeconds();
	var x = Math.sin(seed++) * 10000;
	return x - Math.floor(x);
    };


function load_pics(x){
	if (x == "thesis"){
	    return "images/thesis.jpg";
	}
	if (x == "ai.book"){
	    return "images/springer.jpg";
	}
	var vibs_pics = ["images/1966.png",
			   "images/1982.jpg",
			   "images/1983.png",
			   "images/1984.png",
			   "images/1986.png",
			   "images/2000.jpg",
			   "images/2003.png",
			   "images/2007.png",
			   "images/2007-2.png", 			   			   
			   "images/2008.png",
      			   "images/2008a.png",
			   "images/2008.Jun.jpg",
			   "images/2009.png",
			   "images/2009a.png",
      			   "images/2009b.png",      
			   "images/2010a.png",
			   "images/2011.png",
			   "images/2011a.png",      
			   "images/2011-2.png",
			   "images/2012.png",
			   "images/2012a.png",      
			   "images/2014.jpg",
			   "images/2016.jpg",
			  ];
    // return vibs_pics[Math.floor(getRandom()*vibs_pics.length)];
    return "images/1966.png";
}


function Introductory_pic(){
    var papers_div = document.getElementById("papersDiv"),
        tbl  = document.createElement('table');

    for(var i = 0; i < publications.length; i++){
        var tr = tbl.insertRow();
	var title = publications[i].title;
	var auth  = publications[i].authors;	
	var conf  = publications[i].conference;
	var loc   = publications[i].loc;
	var year  = publications[i].year;
	var org   = publications[i].org;	
        var td = tr.insertCell();
        td.appendChild(document.createTextNode(i + 1 + "."));
        td = tr.insertCell();	
        td.appendChild(document.createTextNode(title));	
        td = tr.insertCell();
        td.appendChild(document.createTextNode(auth));	
        td = tr.insertCell();
        td.appendChild(document.createTextNode(conf));	
        td = tr.insertCell();
        td.appendChild(document.createTextNode(loc));	
        td = tr.insertCell();
        td.appendChild(document.createTextNode(year));	
        td = tr.insertCell();
        td.appendChild(document.createTextNode(org));	
    }
    papers_div.appendChild(tbl);
}


document.getElementById("profpic").src = load_pics("vibs")


