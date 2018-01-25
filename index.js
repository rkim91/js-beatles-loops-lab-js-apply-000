function theBeatlesPlay(musicians, instruments) {
  var result = [];
  var i
    for (i=0; i<musicians.length; i++) {
        result[i] = musicians[i] + " plays " + instruments[i]}
    return result;
}
function johnLennonFacts(facts) {
  var i = 0
  while (i<facts.length) {
    facts[i] = facts[i] + "!!!";
    i++;
  }
  return facts;
}
function iLoveTheBeatles(i) {
  var result = [];
  var test = 0;
    do {
        result[test] = "I love the Beatles!";
        i++;
        test++;
    }
    while (i<15);
    return result
}
