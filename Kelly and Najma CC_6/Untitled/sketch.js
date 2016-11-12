var d = {}; //dictionary
var stopwords;
//var stopwords = ["the", "a", "one", "about", "am", "he", "she", "in", "out", "at", "said", "was", "by", "mr", "an", "his", "with", "is", "for", "him", "her", "all", "and", "to", "too", "from", "on", "are", "has", "as", "two", "of" , "that"];
var font;
var sorted_dictionary;

function preload() {
  story = loadStrings("text/1.txt");
  font = loadFont("font/writer.ttf");
  stopwords = loadStrings("text/stopwords.txt");
}

function setup() {
  createCanvas(600, 600);
  
  frameRate(1);
  textFont(font);
  textSize(28);
  
  // parsing data
  for (var i=0; i< story.length; i++) {
    var l = story[i];
    l = l.toLowerCase(); //makes all words lowercase
    
    // get rid of symbols and digits
    l = l.replace(/[.[,?/\]@\\\d;:!-]+/g, '');
    // split token
    l = l.split(' ');
    
    for (var j=0; j<l.length; j++) {
      // get rid of stopwords
      if (stopwords.indexOf(l[j]) >= 0) {
        continue;
      }
      
      if (l[j] in d) {
        d[l[j]] += 1;
      } else {
        d[l[j]] = 1;
      }
    } // end for
  } // end for
  console.log(d);
  
  // sort them according to frequency
  sorted_dictionary = Object.keys(d).sort(function(a,b){return d[a]-d[b]});

}



function draw() {
  var top5 = [];
  
  textSize(48);
  for (var i=2;i<=6;i++) {
    var word = sorted_dictionary[sorted_dictionary.length - i];
    text(word, 200, 100 + i*60);
    top5.push(word);
  }
  

  textSize(20);
  //displays text
  for (var word in d) {
    if (top5.indexOf(word) >= 0)
      continue;
    if (d.hasOwnProperty(word)) {
      if (d[word] > 10) {
      
       var x = random(600);
       var y = random(600);
       if ((x < 400) && (x > 100) && (y>150) && (y<500)) {
         continue;
       }
       text(word, x, y);
      }
    }
  } // end for
    

  //text(d["visit"], 100, 100);
  //console.log(d["visit"]);
  
}