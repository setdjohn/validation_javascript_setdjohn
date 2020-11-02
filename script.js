var inputBox = document.body.querySelector(".text");
var coolBox = document.body.querySelector(".cool");
var messageBox = document.body.querySelector(".message");
var list = [];

document.body.querySelector(".submit").addEventListener("click", function(){
   messageBox.innerHTML="";
  if(inputBox.value.length>=2&&inputBox.value.length<10&&Number(coolBox.value)>=5){
    list.push({
      name:inputBox.value,
      cool:coolBox.value
    });
    renderList();
  }else if(inputBox.value.length>=10||inputBox.value.length<2){
    messageBox.innerHTML="Not correct character count"
  }else{
    messageBox.innerHTML="Not cool enough"
  }
})

function renderList(){
  document.body.querySelector(".list").innerHTML="";
  for(var i=0; i<list.length; i++){
    var itmEle = document.createElement("h6");
    itmEle.innerHTML="Name: "+list[i].name+" Coolnes: "+list[i].cool;
    document.body.querySelector(".list").appendChild(itmEle);
  }
}
function app() {
  var pages = ["home", "addNotes", "displayNotes"];
  init();
  nav(pages);
  renderPage("home");
}

function init() {
  var nav = document.createElement("nav");
  nav.classList.add("nav");
  var wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");
  document.body.appendChild(nav);
  document.body.appendChild(wrapper);
}

function nav(list) {
  for (var i = 0; i < list.length; i++) {
    const button = document.createElement("button");
    const val = list[i];
    button.innerHTML = list[i];
    button.addEventListener("click", function() {
      renderPage(val);
    });
    document.body.querySelector(".nav").appendChild(button);
  }
}

function renderPage(page) {
  if (page === "home") {
    home();
  } else if (page === "addNotes") {
    addNotes();
  } else if (page === "displayNotes") {
    displayNotes();
  }
}

function home() {
  var wrapper = document.querySelector(".wrapper");
  wrapper.innerHTML = "Home";
}

function addNotes() {
  var wrapper = document.querySelector(".wrapper");
  var text = document.createElement("textarea");
  text.id = "inputNote";
  text.placeholder = "Enter your note here....";
 
  var importance = document.createElement("input");
  importance.setAttribute("type", "number");
  importance.setAttribute("value", "Importance");
  importance.setAttribute("min", "0");
  importance.setAttribute("max", "5");
  importance.id = "inputImportance";
  importance.placeholder = "Importance (1-5)";
}

function displayNotes() {
  var wrapper = document.querySelector(".wrapper");
  wrapper.innerHTML = "Display Notes";
  var notes = [
    {
      text: "A note.",
      importance: 5
    },
    {
      text: "Another note.",
      importance: 2
    },
    {
      text: "Some note.",
      importance: 2
    },
    {
      text: "Someother note.",
      importance: 4
    },
    {
      text: "Guess what? Another note.",
      importance: 3
    }
  ];

  var sortBy = [
    {
      prop: "importance",
      direction: -1
    },
    {
      prop: "time",
      direction: 1
    }
  ];

  notes.sort(function(a, b) {
    let i = 0,
      result = 0;
    while (i < sortBy.length && result === 0) {
      result =
        sortBy[i].direction *
        (a[sortBy[i].prop].toString() < b[sortBy[i].prop].toString()
          ? -1
          : a[sortBy[i].prop].toString() > b[sortBy[i].prop].toString()
            ? 1
            : 0);
      i++;
    }
    return result;
  });

  for (var i = 0; i < notes.length; i++) {
    var ele = document.createElement("div");
    ele.innerHTML = notes[i].text;
    document.body.querySelector(".wrapper").appendChild(ele);
  }
}

function submission() {
  var obj = {
    text: inputNote.value,
    importance: Number(inputImportance.value)
  };
  notes.push(obj);
}


app();