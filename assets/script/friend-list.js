const friendListJSON = [
  {
    id: 1,
    name: "Abhinav Gupta",
    status: 1,
    imageSrc: "../images/7cartoon.png",
    description: "Hi team, how is everyone doing ? ",
    category: "Yesterday at 12:41 PM",
  },
  {
    id: 2,
    name: "Ashutosh Gupta",
    status: 1,
    imageSrc: "../images/2cartoon.png",
    description:
      "I am good. Thanks for asking. Team will will provide an update.",
    category: "Yesterday at 12:55 PM",
  },
  {
    id: 3,
    name: "Asha Sharma",
    status: 1,
    imageSrc: "../images/discord-friend-logo.png",
    description: "Hey Abhinav, we have completed the code migration.",
    category: "Yesterday at 1:30 PM",
  },
  {
    id: 4,
    name: "Bangladesh Rai",
    status: 1,
    imageSrc: "../images/3cartoon.png",
    description:
      " Hard coded tradoff ahead !! Depending on the surrounding code and the screen resolution reduced.",
    category: "Yesterday at 4:05 PM",
  },
  {
    id: 5,
    name: "Champak Lal",
    status: 0,
    imageSrc: "../images/4cartoon.jpg",
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday Your perfect pack for everyday use and walks in the forest. Result if the container is wide enough and the text would not overflow the container.",
    category: "Today at 09:12 AM",
  },
  {
    id: 6,
    name: "Pradeep Dalai",
    status: 0,
    imageSrc: "../images/5cartoon.jpg",
    description:
      "Result if the container is wide enough and the text would not overflow the container.",
    category: "Today at 10:12 AM",
  },
  {
    id: 7,
    name: "Preeti Sharma",
    status: 1,
    imageSrc: "../images/6cartoon.jpg",
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "Today at 10:12 AM",
  },
  {
    id: 6,
    name: "Tarun Sharma",
    status: 0,
    imageSrc: "../images/3cartoon.png",
    description:
      "The reputation requirement helps protect this question from spam and non-answer activity.",
    category: "Today at 10:12 AM",
  },
  {
    id: 8,
    name: "Tanny Pat",
    status: 1,
    imageSrc: "../images/7cartoon.png",
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "Today at 10:12 AM",
  },
  {
    id: 9,
    name: "Zishan Ahmed",
    status: 1,
    imageSrc: "../images/3cartoon.png",
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "Today at 10:12 AM",
  },
  {
    id: 6,
    name: "Ziya Das",
    status: 0,
    imageSrc: "../images/7cartoon.png",
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "Today at 10:12 AM",
  },
  {
    id: 9,
    name: "Zebra Pattric",
    status: 0,
    imageSrc: "../images/1cartoon.png",
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "Today at 10:12 AM",
  },
  {
    id: 6,
    name: "Pradeep Dalai",
    status: 0,
    imageSrc: "../images/5cartoon.jpg",
    description:
      "Result if the container is wide enough and the text would not overflow the container.",
    category: "Today at 10:12 AM",
  },
  {
    id: 1,
    name: "Abhinav Gupta",
    status: 0,
    imageSrc: "../images/7cartoon.png",
    description: "Hi team, how is everyone doing ? ",
    category: "Yesterday at 12:41 PM",
  },
  {
    id: 4,
    name: "Bangladesh Rai",
    status: 1,
    imageSrc: "../images/3cartoon.png",
    description:
      " Hard coded tradoff ahead !! Depending on the surrounding code and the screen resolution reduced.",
    category: "Yesterday at 4:05 PM",
  },
  {
    id: 5,
    name: "Champak Lal",
    status: 0,
    imageSrc: "../images/4cartoon.jpg",
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday Your perfect pack for everyday use and walks in the forest. Result if the container is wide enough and the text would not overflow the container.",
    category: "Today at 09:12 AM",
  },
  {
    id: 6,
    name: "Pradeep Dalai",
    status: 0,
    imageSrc: "../images/5cartoon.jpg",
    description:
      "Result if the container is wide enough and the text would not overflow the container.",
    category: "Today at 10:12 AM",
  },
  {
    id: 7,
    name: "Preeti Sharma",
    status: 1,
    imageSrc: "../images/6cartoon.jpg",
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "Today at 10:12 AM",
  },
  {
    id: 6,
    name: "Tarun Sharma",
    status: 0,
    imageSrc: "../images/3cartoon.png",
    description:
      "Your perfect pack for everyday use and walks in the forest. :-) Stash your laptop (up to 15 inches) in the padded sleeve, your everyday. The reputation requirement helps protect this question from spam and non-answer activity. Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday.",
    category: "Today at 10:12 AM",
  },
];
let onlineFriendsJSON = (friendListJSON.filter((a) => a.status === 1));
onlineFriendsJSON.sort(function(a,b){
  if(a.name.toLowerCase() < b.name.toLowerCase()
  )  return -1;
  if(a.name.toLowerCase() > b.name.toLowerCase()
  )  return 1;;
  return 0;
} );
let offlineFriendsJSON = (friendListJSON.filter((b) => b.status === 0));
offlineFriendsJSON.sort(function(a,b){
  if(a.name.toLowerCase() < b.name.toLowerCase()
  )  return -1;
  if(a.name.toLowerCase() > b.name.toLowerCase()
  )  return 1;;
  return 0;
});

const onlineCount = onlineFriendsJSON.length;
const offlineCount = offlineFriendsJSON.length;

//Enter online friends count on UI
const onlineSpan = document.getElementById("online-friend-count");
const spanContainer = document.createElement("span");
spanContainer.className = "online-span-count-container";
spanContainer.textContent = onlineCount;
onlineSpan.appendChild(spanContainer);

//Render online friend list on UI
const onlineFriendContainer = document.getElementById("friend-rendering");

for (let i = 0; i < onlineFriendsJSON.length; i++) {
  const spanOnlineFriends = document.createElement("p");
  spanOnlineFriends.className = "on-friend-p-css";

  const image = document.createElement("img");
  image.className = "account-image";
  image.src = onlineFriendsJSON[i].imageSrc;

  const spanElem = document.createElement("span");
  spanElem.className = "on-name-span-element";
  spanElem.textContent = onlineFriendsJSON[i].name;
  spanOnlineFriends.appendChild(spanElem);
  spanOnlineFriends.prepend(image);
  onlineFriendContainer.appendChild(spanOnlineFriends);
}

//Enter offline friends count on UI
const offlineSpan = document.getElementById("offline-friend-count");
const offSpanContainer = document.createElement("span");
offSpanContainer.className = "offline-span-cpunt-container";
offSpanContainer.textContent = offlineCount;
offlineSpan.appendChild(offSpanContainer);

//Render offline friend list on UI
const offlineFriendContainer = document.getElementById(
  "offline-friend-rendering"
);
for (let i = 0; i < offlineFriendsJSON.length; i++) {
  const spanOfflineFriends = document.createElement("p");
  spanOfflineFriends.className = "off-friend-p-css";

  const image = document.createElement("img");
  image.className = "account-image";
  image.src = offlineFriendsJSON[i].imageSrc;

  const spanElem = document.createElement("span");
  spanElem.className = "off-name-span-element";
  spanElem.textContent = offlineFriendsJSON[i].name;
  spanOfflineFriends.appendChild(spanElem);
  spanOfflineFriends.prepend(image);
  offlineFriendContainer.appendChild(spanOfflineFriends);
}
function onPageLoad() {
  //Render text message chat container with image and date
  $("#emoji-opener").emojioneArea({
    pickerPosition: "top"
  });
  const textMsgContainer = document.getElementById("chat-center-render");

  for (let i = 0; i < friendListJSON.length; i++) {
    //1. image inside span - start
    const spanImage = document.createElement("span");
    spanImage.className = "span-image-css";

    const imageURLContainer = document.createElement("img");
    imageURLContainer.className = "chat-image-css";
    imageURLContainer.src = friendListJSON[i].imageSrc;

    spanImage.appendChild(imageURLContainer);
    //end - main id insert remaining

    //2. text-messsage 1st div and two span inside - starts
    const divChatContainer1 = document.createElement("div");
    divChatContainer1.className = "div1-chat-cont-css";

    const span1InDiv1 = document.createElement("span");
    span1InDiv1.className = "span1-div1";
    span1InDiv1.textContent = friendListJSON[i].name;

    const span2InDiv1 = document.createElement("span");
    span2InDiv1.className = "span2-div1";
    span2InDiv1.textContent = friendListJSON[i].category;
    divChatContainer1.appendChild(span1InDiv1);
    divChatContainer1.appendChild(span2InDiv1);
    //end - main div then id insert remaining

    //3. 2nd div for description - start
    const divChatContainer2 = document.createElement("div");
    divChatContainer2.className = "div2-chat-right-css";

    const pInDivCont = document.createElement("p");
    pInDivCont.className = "p-in-div-chat";
    pInDivCont.textContent = friendListJSON[i].description;
    divChatContainer2.appendChild(pInDivCont);
    //end - main div insert remaining

    //4. Create a div and merge step 2 and 3
    const subMainDivCont = document.createElement("div");
    subMainDivCont.className = "sub-main-div";
    subMainDivCont.appendChild(divChatContainer1);
    subMainDivCont.appendChild(divChatContainer2);

    //5. Create div and add step 1 and 4
    const mainDivCont = document.createElement("div");
    mainDivCont.className = "main-div-container";
    mainDivCont.appendChild(spanImage);
    mainDivCont.appendChild(subMainDivCont);

    //6. Put step 5 in a div id
    textMsgContainer.appendChild(mainDivCont);
    //end
  }
}

//insert new chat in the json file to show
function insertNewChat() {
  let newChattingText = document.getElementById("text-message").value;
  if (newChattingText.length <= 0) {
    return 0;
  } else {
    let getDateTime = new Date();

    var objJSON = friendListJSON;
    obj = {
      name: "Abhinav Gupta",
      status: 2,
      imageSrc: "../images/7cartoon.png",
      description: newChattingText,
      category:
        "Today at " +
        getDateTime.getHours()%12 +
        ":" +
        getDateTime.getMinutes() +
        getDateTime
          .toLocaleString("en-US", { hour: "numeric", hour12: true })
          .substring(2, 5),
    };
    objJSON.push(obj);
    document.getElementById("text-message").value = "";
    return 1;
  }
}

//scroll to the bottom of the chat to get the latest chat
function scrollToEnd() {
  let setScrollToLast = document.getElementById("chat-center-render");
  setScrollToLast.scrollTop = setScrollToLast.scrollHeight;
}

let enterButton = document.getElementById("text-message");
enterButton.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    //checks whether the pressed key is "Enter"
    setNewChatItem();
  }
});

function setNewChatItem() {
  insertNewChat();
  onPageLoad();
  scrollToEnd();
}
onPageLoad();
scrollToEnd();
