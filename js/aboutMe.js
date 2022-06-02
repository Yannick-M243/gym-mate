let messageList = [];
let recommendations = [];

function load() {
  if (sessionStorage.getItem("firstRun") === null) {
    sessionStorage.setItem("messages", JSON.stringify(messageList));
      sessionStorage.setItem("recommendations", JSON.stringify(recommendations));
      sessionStorage.setItem("firstRun", true);
  }
}

function getMessage() {
  messageList = JSON.parse(sessionStorage.getItem("messages"));
  let newMessage = new Comment(
    document.getElementById("sender").value,
    document.getElementById("message").value
  );
  messageList.push(newMessage);
  sessionStorage.setItem("messages", JSON.stringify(messageList));
  alert("Message Sucessfully sent");
}

function Message(sender, content) {
  this.sender = sender;
  this.content = content;
}

function Feedback(recommendationRate) {
  this.recommendationRate = recommendationRate;
}

function getFeedback() {
  recommendations = JSON.parse(sessionStorage.getItem("recommendations"));
  let newFeedback = new Feedback(document.getElementById("feedback").value);
  recommendations.push(newFeedback);
  sessionStorage.setItem("recommendations", JSON.stringify(recommendations));
  alert("Feedback Sucessfully sent");
}
