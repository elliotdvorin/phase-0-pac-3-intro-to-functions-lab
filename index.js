function shout(string) {
    return string.toUpperCase();
  }
  function whisper(string) {
    return string.toLowerCase();
  }
  function logShout(string) {
    console.log(string.toUpperCase());
  }
  function logWhisper(string) {
    console.log(string.toLowerCase());
  }
  
  function sayHiToHeadphonedRoommate(string) {
    console.log(string);
    console.log(string.toLowerCase());
    console.log(string.toUpperCase());
    
    console.log(string === string.toLowerCase());
    
    if (string === string.toLowerCase()) {
        return "I can't hear you!"
    }
    if (string === string.toUpperCase()) {
      return "YES INDEED!"
    }
    
    if (string === string) {
      return "I would love to!"
    }}
    // sayHiToHeadphonedRoommate("hello")
    // sayHiToHeadphonedRoommate("HELLO")
    // sayHiToHeadphonedRoommate("Let's have dinner together!")