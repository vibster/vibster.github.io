

var pub1 = {
    authors:"Jade Goldstein, Vibhu O. Mittal, Jaime Carbonell, and Jamie Callan",
    title:"A Statistical Approach to Multi-Document Summarization",
    conference:"In Proceedings of the Ninth International Conference on Information and Knowledge Management (CIKM-2000)",
    loc:"Washington, DC",
    year:"2000",
    org:"ACM",
};

var pub2 = {
    authors:"Adam Berger and Vibhu O. Mittal",
    title:"Learning to summarize using FAQs",
    conference:"Proceedings of the 38th Annual Meeting of the Association for Computational Linguistics (ACL-2000)",
    loc:"Hong Kong",
    year:"2000",
    org:"ACL",
};

var pub3 = {
    authors:"Michele Banko, Vibhu Mittal, and Michael Witbrock",
    title:"Natural Language Summarization as Statistical Translation",
    conference:"Proceedings of the 38th Annual Meeting of the Association for Computational Linguistics (ACL-2000)",
    loc:"Hong Kong",
    year:"2000",
    org:"ACL",
};

var pub4 = {
    authors:"Mark Kantrowitz, Behrang Mohit, and Vibhu Mittal",
    title:"The Impact of Stemming on IR Performance",
    conference:"Proceedings of the twenty-third annual International ACM  SIGIR Conference on Research and Development in Information Retrieval",
    loc:"Athens, Greece",
    year:"2000",
    org:"ACM",
};


var pub5 = {
    authors:"Vibhu Mittal, Adam Berger, and Michael Witbrock",
    title:"OCELOT: A System for Summarizing Web Pages",
    conference:"Proceedings of the twenty-third annual International ACM  SIGIR Conference on Research and Development in Information Retrieval",
    loc:"Athens, Greece",
    year:"2000",
    org:"ACM",
};



var pub6 = {
    authors:"Shumeet Baluja, Vibhu Mittal, and Rahul Sukthankar",
    title:"Applying Machine Learning for High Performance Named-Entity Extraction",
    conference:"Proceedings of PacLing-99: The Pacific Rim Conference on Computational Linguistics",
    loc:"Waterloo, Canada",
    year:"1999",
};


var pub7 = {
    authors:"Michele Banko, Vibhu Mittal, Mark Kantrowitz, and Jade Goldstein",
    title:"Text Span Alignment for Creating Summarization Corpora",
    conference:"Proceedings of PacLing-99: The Pacific Rim Conference on Computational Linguistics",
    loc:"Waterloo, Canada",
    year:"1999",
};

var pub8 = {
    authors:"Jade Goldstein, Mark Kantrowitz, Vibhu O. Mittal, and Jaime Carbonell",
    title:"Summarizing Text Documents: Sentence Selection and Evaluation  Metrics",
    conference:"Proceedings of the 22nd Annual International ACM  SIGIR Conference on Research and Development in Information Retrieval",
    loc:"Berkeley, CA",
    year:"1999",
    org:"ACM",
};


var pub9 = {
    authors:"Michael Witbrock and Vibhu O. Mittal",
    title:"Headline Generation: A Framework for Generating Highly-Condensed Non-Extractive Summaries",
    conference:"Best late-breaking paper award: Proceedings of the 22nd Annual International ACM  SIGIR Conference on Research and Development in Information Retrieval",
    loc:"Berkeley, CA",
    year:"1999",
    org:"ACM",
};


var publications = [pub1, pub2, pub3, pub4, pub5, pub6, pub7, pub8, pub9];

function print_pubs(){
    for (var i = 0; i < publications.length; i++){
	var auth  = publications[i].authors;
	var title = publications[i].title;
	var conf  = publications[i].conference;
	var loc   = publications[i].loc;
	var year  = publications[i].year;
	var org   = publications[i].org;	

    }
}


print_pubs();


/*


Vibhu O. Mittal, Mark Kantrowitz, Jade Goldstein, and Jaime Carbonell.
\newblock {Selecting Text Spans for Document Summaries: Heuristics and
  Metrics}.
\newblock In {Proceedings of the Sixteenth National Conference on
  Artificial Intelligence (AAAI-99)}, pages 467--473, Orlando, FL, July 1999.
  AAAI.


Vibhu O. Mittal.
\newblock {Visual Prompts and Graphical Design: A Framework for Exploring
  the Design Space of 2-D Charts and Graphs}.
\newblock In {Proceedings of the Fourteenth National Conference on
  Artifical Intelligence (AAAI 97)}, pages 57--63, Providence, RI, June 1997.
  AAAI.


Vibhu O. Mittal, Bruce G. Buchanan, Johanna D. Moore, and Giuseppe Carenini.
\newblock {Generating Patient Specific Natural Language Explanations}.
\newblock In {Proceedings of the First Conference on Emerging Technologies
  Linking Patients and Providers}, Burlington, VT, February 1997. University of
  Vermont.


Vibhu O. Mittal and Johanna D. Moore.
\newblock {Detecting Knowledge Base Inconsistencies Using Automated
  Generation of Text and Examples}.
\newblock In {Proceedings of the Thirteenth National Conference on
  Artifical Intelligence (AAAI 96)}, pages 483--488, Portland, OR, August 1996.
  AAAI.


Vibhu O. Mittal, Steven Roth, Johanna D. Moore, Joe Mattis, and Giuseppe
  Carenini.
\newblock {Generating Explanatory Captions for Information Graphics}.
\newblock In Chris Mellish, editor, {Proceedings of the Fourteenth
  International Joint Conference on Artificial Intelligence (IJCAI '95)}, pages
  1276--1283, Montreal, Canada, August 1995. AAAI/IJCAI, Morgan Kaufmann.


Vibhu O. Mittal.
\newblock {Generating Descriptions with Examples: A Preliminary Study from
  a Text Planning Perspective}.
\newblock In Jim Greer, editor, {Proceedings of the Second Annual
  Conference on Artificial Intelligence and Education (AI-Ed '95)}, pages
  299--306, Washington, D.C., August 1995. Association for the Advancement of
  Computing in Education.


Vibhu O. Mittal and Johanna D. Moore.
\newblock {Dynamic Generation of Follow up Question Menus: Facilitating
  Interactive Natural Language Dialogues}.
\newblock In {Proceedings of CHI '95: Conference on Human Factors in
  Computing Systems}, pages 90--97, Denver, CO, May 1995. ACM.
\newblock (Available through WWW at $http: //www. acm.
  org/sigchi/chi95/Electronic/documnts/papers/vm_bdy. htm$).


Giuseppe Carenini, Vibhu O. Mittal, and Johanna D. Moore.
\newblock {Generating Patient-Specific Natural Language Explanations}.
\newblock In Judy G. Ozbolt, editor, {Proceedings of the Eighteenth Annual
  Symposium on Computer Applications in Medical Care (SCAMC-94)}, pages 5--9,
  Washington, D.C., November 1994.


Giuseppe Carenini, Vibhu O. Mittal, and Johanna D. Moore.
\newblock {Generating Patient Specific Explanations in Migraine}.
\newblock In {Proceedings of the Fourth International Conference on User
  Modeling}, August 1994.


Sujata Banerjee and Vibhu O. Mittal.
\newblock {On the Use of Linguistic Ontologies for Accessing and Indexing
  Distributed Digital Libraries}.
\newblock In J. L. Schnase, J. J. Leggett, R. K. Furuta, and T. Metcalfe,
  editors, {Proceedings of the First Annual Conference on the Theory and
  Practice of Digital Libraries}, College Station, TX, June 1994. Texas A\&M
  University, Hypermedia Research Laboratory.
\newblock (Available through WWW at
  $http://atg1.wustl.edu:80/DL94/banerjee.html$).


Vibhu O. Mittal and C{\'e}cile L. Paris.
\newblock {Generating Examples For Use in Tutorial Explanations: The Use
  of a Subsumption Based Classifier}.
\newblock In {Proceedings of the Eleventh European Conference on Artificial
  Intelligence (ECAI-94)}, pages 530--534, Amsterdam, August 1994. John Wiley
  and Sons.


Vibhu O. Mittal and C{\'e}cile L. Paris.
\newblock {Automatic Documentation Generation: The Interaction between
  Text and Examples}.
\newblock In {Proceedings of the Thirteenth International Joint Conference
  on Artificial Intelligence}, pages 1158--1163, Chambery, France, September
  1993. IJCAI.


Vibhu O. Mittal and C{\'e}cile L. Paris.
\newblock {Generating Natural Language Descriptions with Examples:
  Differences between introductory and advanced texts}.
\newblock In {Proceedings of the Eleventh National Conference on Artificial
  Intelligence (AAAI '93)}, pages 271--276, Washington, DC, 1993.


Vibhu O. Mittal and C{\'e}cile L. Paris.
\newblock {Categorizing Example Types in Instructional Texts: The Need to
  Consider Context}.
\newblock In Paul Brna, Stellan Ohlsson, and Helen Pain, editors, {
  Proceedings of AI-ED 93: World Conference on Artificial Intelligence in
  Education}, pages 137--144, Edinburgh, Scotland, August 1993. AACE.
\newblock {\underline{(Best Paper Award nominee)}.


Vibhu O. Mittal and C{\'e}cile L. Paris.
\newblock {The Placement of Examples in Descriptions: Before, Within or
  After the Text}.
\newblock In Paul McFetridge and Fred Popowich, editors, {Proceedings of
  the First Conference of the Pacific Association for Computational
  Linguistics}, pages 279--287, Vancouver, BC, April 21--24 1993.


Vibhu O. Mittal and C{\'e}cile L. Paris.
\newblock {A Categorization of Example Types and their applications for the
  Generation of Tutorial Descriptions}.
\newblock In {Proceedings of the Fifteenth Annual Conference of The
  Cognitive Science Society}, pages 753--759, Boulder, CO, June 1993. Lawrence
  Erlbaum, Inc.


Vibhu O. Mittal and C{\'e}cile L. Paris.
\newblock {Building Intelligent Help Facilities: Generating Natural
  language Descriptions with examples}.
\newblock In {Proceedings of the 5th International Conference on
  Human-Computer Interaction}, pages 379--384, Orlando, FL, August 1993.
  Elsevier.


Vibhu O. Mittal and C{\'e}cile L. Paris.
\newblock {Finding and Using Analogies in Generating Natural Language
  Object Descriptions}.
\newblock In {Proceedings of the Fourteenth Annual Conference of The
  Cognitive Science Society}, pages 996--1002, Indianapolis, IN., August 1992.
  Lawrence Erlbaum, Inc.


Vibhu O. Mittal.
\newblock {Elaboration in Object Descriptions through Examples}.
\newblock In {Proceedings of the 30th Annual Meeting of the Association for
  Computational Linguistics (ACL-92)}, pages 315--317, Newark, Delaware, 1992.
\newblock (Student Session).


Vibhu O. Mittal and C{\'e}cile L. Paris.
\newblock {Planning the Generation of Integrated Text and Examples}.
\newblock In Carl Looney, editor, {Proceedings of the Golden West
  International Conference On Intelligent Systems}, pages 126--132, Reno, NV,
  June 1992.


Vibhu O. Mittal and C{\'e}cile L. Paris.
\newblock {Generating Effective Tutorial Descriptions with Examples}.
\newblock Accepted in the {Second International Conference on Intelligent
  Tutoring Systems\/}, June 1992.
\newblock (Montreal, Canada).


Vibhu O. Mittal and C{\'e}cile L. Paris.
\newblock {Generating Object Descriptions which integrate both Text and
  Examples}.
\newblock In {Proceedings of the Ninth Canadian Artificial Intelligence
  Conference (AI/GI/VI 92)}, pages 1--8, Vancouver, B.C., 1992. Canadian
  Society for the Computational Studies of Intelligence (CSCSI), Morgan
  Kaufmann Publishers.


Vibhu O. Mittal.
\newblock {Generating Natural Language Explanations which use Analogies}.
\newblock In Mladen A. Vouk and Cherri M. Pancake, editors, {Proceedings of
  the 30th Annual ACM Southeast Conference}, pages 239--246. ACM, April 1992.


Vibhu O. Mittal and Mukesh Singhal.
\newblock {\sc scatter-brain:} An Experiment in Distributed Problem
  Solving applied to Load Balancing}.
\newblock In {Proceedings of the Thirteenth International Conference on
  Computer Software and Applications}, pages 760--766, Orlando, Florida,
  September 1989. IEEE.


Vibhu O. Mittal and Mukesh Singhal.
\newblock {An Expert System Based Load Monitoring and Scheduling System
  for Load Balancing in Distributed Systems}.
\newblock In {Proceedings of the Third IEEE International Symposium on
  Intelligent Control}, Arlington, VA., August 24--26 1988. Institute for
  Electrical and Electronic Engineers.


Vibhu O. Mittal and Mukesh Singhal.
\newblock {\sc scatter-brain:} A system that makes decisions based on simulation}.
\newblock Accepted to the {Summer Computer Simulation Conference} (Austin,
  TX), July 1989.


*/
