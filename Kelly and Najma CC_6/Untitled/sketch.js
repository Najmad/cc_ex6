var top, count;
var d = {};
var stopwords = ["the",  "a", "one" , "about" , "am" , "he" , "she" , "in" , "out" , "at" , "with" , "is" , "for" , "him" , "her" , "all" , "and" , "to" , "too", "from" , "on" , "are" , "has" , "as" , "two" , "of" , "that"];
var font;
var limit = 0;

function preload() {
  story = loadStrings("text/1.txt");
  font = loadFont("font/writer.ttf");
}

function setup() {
  createCanvas(600, 600);
  
  frameRate(1);
  textFont(font);
  textSize(28);
  for (var i=0; i< story.length; i++) {
    var l = story[i];
    l = l.toLowerCase(); //makes all words lowercase
    
    // get rid of symbols
    l = l.replace(/[.[,?/\\\]@\d;:!-]+/g, '');
    
    l = l.split(' ');
    
    for (var j=0; j<l.length; j++) {
      
      if (stopwords.indexOf(l[j]) >= 0) {
        continue;
      }
      
      if (l[j] in d) {
        d[l[j]] += 1;
      } else {
        d[l[j]] = 1;
      }
    }
  }
  console.log(d);

//this finds the most frequent word
count = 0;
  for (var word in d) {
    console.log(word);
    if (d.hasOwnProperty(word)) { 
      if (d[word] > count) {
        count = d[word];
        top = word;
      }
    }
  }
  
  
}



function draw() {

  //displays text
  for (var word in d) {
  
    if (d.hasOwnProperty(word)) {
      if (d[word] > 20) {
      
       var x = random(600);
       var y = random(600);
       text(word, x, y);
      }
    }

  }
    

  //text(d["visit"], 100, 100);
  //console.log(d["visit"]);
  
}