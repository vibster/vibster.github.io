"use strict";


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
};



function intro_div(){
    var intro_div = document.getElementById("pic-name-quote");
    var mypic  = document.createElement('IMG');
    mypic.id   = "profpic";
    mypic.src = load_pics("vibs");
    //
    var myH1  = document.createElement('H1');
    var myname = document.createTextNode('Vibhu Mittal');
    myH1.appendChild(myname);
    //
    var myquote1  = document.createTextNode('Yesterday is History. Tomorrow is a Mystery.');
    var myquote2  = document.createTextNode('Today is a Gift!');        

    
    intro_div.appendChild(mypic);
    intro_div.appendChild(myH1);
    intro_div.appendChild(myquote1);
    intro_div.appendChild(document.createElement('BR'));
    intro_div.appendChild(myquote2);        
    
};



intro_div();






