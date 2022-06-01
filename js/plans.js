let planList = [];
let userPlans = [];
let commentList = [];

function load() {
  //checks if it is the first time to load this page
  if (sessionStorage.getItem("hasCodeRunBefore") === null) {
    let commentTitle = document.getElementById("comments-title");
    commentTitle.style.visibility = "hidden";

    sessionStorage.setItem("plans", JSON.stringify(planList));
    sessionStorage.setItem("userPlans", JSON.stringify(userPlans));
    sessionStorage.setItem("comments", JSON.stringify(commentList));
    sessionStorage.setItem("hasCodeRunBefore", true);

    // creating 5 plan objects
    planList.push(
      new Plan("Weight loss", 80, "Best training plan", "training")
    );
    planList.push(new Plan("Bulking", 70, "Best diet plan", "diet"));
    planList.push(
      new Plan("Shredding", 90, "Very instensive training plan", "training")
    );
    planList.push(
      new Plan("Healthy Lifestyle", 60, "Best diet plan for yur health", "diet")
    );
    planList.push(
      new Plan("Detox", 30, "Best diet plan to clean your body", "diet")
    );
    sessionStorage.setItem("plans", JSON.stringify(planList));
  }

  planList = JSON.parse(sessionStorage.getItem("plans"));
  let i = 0;
  let container = document.getElementById("container");

  //This loop creates a item container for each plan
  planList.forEach(function (plan) {
    let planId = i;
    //creatin the container that will hold the item detail
    let itemContainer = document.createElement("div");
    itemContainer.classList.add("item-container");

    //creating item header section
    let itemHeader = document.createElement("div");
    itemHeader.classList.add("item-header");
    let h3 = document.createElement("h3");
    h3.innerHTML = plan.name;

    itemHeader.appendChild(h3);
    itemContainer.appendChild(itemHeader);

    //creatin the item description section
    let itemDesc = document.createElement("div");
    itemDesc.classList.add("item-desc");
    let paragraph = document.createElement("p");
    paragraph.textContent = plan.description;

    itemDesc.appendChild(paragraph);
    itemContainer.appendChild(itemDesc);

    //creating the footer
    let itemFooter = document.createElement("div");
    itemFooter.classList.add("item-footer");
    paragraph = document.createElement("p");
    paragraph.textContent = "Plan duration : " + plan.duration;
    itemFooter.appendChild(paragraph);
    paragraph = document.createElement("p");
    paragraph.textContent = "Plan type : " + plan.type;

    let btn = document.createElement("button");
    btn.classList.add("get-plan");
    btn.innerHTML = "Save for later";
    btn.onclick = function () {
      save4later(planId); //calling the function save4later() when the btn is clicked
    };

    itemFooter.appendChild(btn);
    itemContainer.appendChild(itemFooter);
    i = i + 1;

    container.appendChild(itemContainer);
  });

  commentList = JSON.parse(sessionStorage.getItem("comments"));
  i = 0;
  let commentSection = document.getElementById("comments-section");

  //This loop will create comment box for each existing comments
  commentList.forEach(function (cmt) {
    let cmdId = i;

    let commentBox = document.createElement("div");
    commentBox.classList.add("comment-box");
    let h4 = document.createElement("h4");
    paragraph = document.createElement("p");

    h4.innerHTML = cmt.author;
    paragraph.innerHTML = cmt.content;

    commentBox.appendChild(h4);
    commentBox.appendChild(paragraph);
    commentSection.appendChild(commentBox);
    btn = document.createElement("button");
    btn.classList.add("like-btn");
    if (cmt.isLiked) {
      btn.innerHTML = "Unlike";
    } else {
      btn.innerHTML = "Like";
    }
    btn.onclick = function () {
      like(cmdId);
    };
    commentSection.appendChild(btn);

    i = i + 1;
  });
  if (i > 0) {
    commentTitle.style.visibility = "visible";
  }
}

//This is the constructur for Plan objects
function Plan(name, duration, description, type) {
  this.name = name;
  this.duration = duration;
  this.description = description;
  this.type = type;
}

function Comment(author, content, isLiked) {
  this.author = author;
  this.content = content;
  this.isLiked = isLiked;
}

//This function add the plan selected by the user into her/his personal list of plans
function save4later(i) {
  userPlans = JSON.parse(sessionStorage.getItem("userPlans"));
  planList = JSON.parse(sessionStorage.getItem("plans"));
  userPlans.push({
    name: planList[i].name,
    duration: planList[i].duration,
    description: planList[i].description,
    type: planList[i].type,
  });

  alert(
    "You have save " + userPlans.length + " item(s) saved for later so far"
  );

  sessionStorage.setItem("userPlans", JSON.stringify(userPlans));
}

//Function to create a new comment object
function addComment() {
  commentList = JSON.parse(sessionStorage.getItem("comments"));
  let newComment = new Comment(
    document.getElementById("author").value,
    document.getElementById("content").value,
    false
  );
  commentList.push(newComment);
  sessionStorage.setItem("comments", JSON.stringify(commentList));
  location.reload();
}

function like(index) {
  commentList = JSON.parse(sessionStorage.getItem("comments"));
  if (commentList[index].isLiked) {
    commentList[index].isLiked = false;
  } else {
    commentList[index].isLiked = true;
  }
  sessionStorage.setItem("comments", JSON.stringify(commentList));
  location.reload();
}
