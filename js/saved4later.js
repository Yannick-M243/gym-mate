function load() {
  //checks if it is the first time to load this page
  if (sessionStorage.getItem("hasCodeRunBefore") === null) {
    sessionStorage.setItem("hasCodeRunBefore", true);
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

  userPlans = JSON.parse(sessionStorage.getItem("userPlans"));
  let i = 0;
  let container = document.getElementById("container");

  //Checks if there are items saved for later,
  // if not it will displays a message for empty list
  console.log(userPlans);
  if (userPlans === null || userPlans.length == 0) {
    let h2 = document.createElement("h2");
    h2.innerHTML = "You don't have items on your list";
    container.appendChild(h2);
  } else {
    //This loop creates a item container for each plan
    userPlans.forEach(function (uPlan) {
      let uPlanId = i;
      //creatin the container that will hold the item detail
      let itemContainer = document.createElement("div");
      itemContainer.classList.add("item-container");

      //creating item header section
      let itemHeader = document.createElement("div");
      itemHeader.classList.add("item-header");
      let h3 = document.createElement("h3");
      h3.innerHTML = uPlan.name;

      itemHeader.appendChild(h3);
      itemContainer.appendChild(itemHeader);

      //creatin the item description section
      let itemDesc = document.createElement("div");
      itemDesc.classList.add("item-desc");
      let paragraph = document.createElement("p");
      paragraph.textContent = uPlan.description;

      itemDesc.appendChild(paragraph);
      itemContainer.appendChild(itemDesc);

      //creating the footer
      let itemFooter = document.createElement("div");
      itemFooter.classList.add("item-footer");
      paragraph = document.createElement("p");
      paragraph.textContent = "Plan duration : " + uPlan.duration;
      itemFooter.appendChild(paragraph);
      paragraph = document.createElement("p");
      paragraph.textContent = "Plan type : " + uPlan.type;

      let btn = document.createElement("button");
      btn.classList.add("get-plan");
      btn.innerHTML = "Remove";
      btn.onclick = function () {
        removeItem(uPlanId); //calling the function save4later() when the btn is clicked
      };

      itemFooter.appendChild(btn);
      itemContainer.appendChild(itemFooter);
      i = i + 1;

      container.appendChild(itemContainer);
    });
  }
}

function removeItem(index) {
  userPlans = JSON.parse(sessionStorage.getItem("userPlans"));

  userPlans.splice(index, 1);
  sessionStorage.setItem("userPlans", JSON.stringify(userPlans));
  location.reload();
}
