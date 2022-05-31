let planList = [];
let userPlans = [];

function load() {
  //checks if it is the first time to load this page
  if (sessionStorage.getItem("hasCodeRunBefore") === null) {
    sessionStorage.setItem("plans", JSON.stringify(planList));
    sessionStorage.setItem("userPlans", JSON.stringify(userPlans));
    sessionStorage.setItem("hasCodeRunBefore", true);

    // creating 5 instances of income objects by default on the fist load
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
  console.log(planList);
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
    paragraph.textContent = "Item duration : " + plan.duration;
    let btn = document.createElement("button");
    btn.classList.add("get-plan");
    btn.innerHTML = "Get this plan";
    btn.onclick = function () {
      save4later(planId); //calling the function editBook() when the btn is clicked
    };

    itemFooter.appendChild(paragraph);
    itemFooter.appendChild(btn);
    itemContainer.appendChild(itemFooter);
    i = i + 1;

    container.appendChild(itemContainer);
  });
}

function Plan(name, duration, description, type) {
  this.name = name;
  this.duration = duration;
  this.description = description;
  this.type = type;
}

function save4later(i) {
  userPlans = JSON.parse(sessionStorage.getItem("userPlans"));
  planList = JSON.parse(sessionStorage.getItem("plans"));
  userPlans.push({
    name: planList[i].name,
    duration: planList[i].duration,
    description: planList[i].description,
    type: planList[i].type,
  });

  alert("You have save " + userPlans.length + " item(s) saved for later so far");

  sessionStorage.setItem("userPlans", JSON.stringify(userPlans));
}
