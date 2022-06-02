//Initializing objects array
let messageList = [];
let recommendations = [];

function load() {
  //check if it is the first run of the page and initialize session variables
  if (sessionStorage.getItem("firstRun") === null) {
    sessionStorage.setItem("messages", JSON.stringify(messageList));
      sessionStorage.setItem("recommendations", JSON.stringify(recommendations));
      sessionStorage.setItem("firstRun", true);
  }
}

//This function create an new message object and stores it into the corresponding session variable 
function getMessage() {
  messageList = JSON.parse(sessionStorage.getItem("messages"));
  let newMessage = new Message(
    document.getElementById("sender").value,
    document.getElementById("message").value
  );
  messageList.push(newMessage);
  sessionStorage.setItem("messages", JSON.stringify(messageList));
  alert("Message Sucessfully sent");
}

//this is the constructor for Message objects
function Message(sender, content) {
  this.sender = sender;
  this.content = content;
}

//this is the constructor for Feedback objects
function Feedback(recommendationRate) {
  this.recommendationRate = recommendationRate;
}

//This function create an new feedback object and stores it into the corresponding session variable 
function getFeedback() {
  recommendations = JSON.parse(sessionStorage.getItem("recommendations"));
  let newFeedback = new Feedback(document.getElementById("feedback").value);
  recommendations.push(newFeedback);
  sessionStorage.setItem("recommendations", JSON.stringify(recommendations));
  alert("Feedback Sucessfully sent");
}
