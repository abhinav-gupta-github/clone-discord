const friendListJSON = [
    {
        id:1,
        name:"Abhinav Gupta",
        status: 1,
        imageSrc:"../images/discord-friend-logo.png",
    },
    {
        id:2,
        name:"Ashutosh Gupta",
        status: 1,
        imageSrc:"../images/discord-friend-logo.png",
    },
    {
        id:3,
        name:"Asha Sharma",
        status: 1,
        imageSrc:"../images/discord-friend-logo.png",
    },
    {
        id:4,
        name:"Bangladesh Rai",
        status: 1,
        imageSrc:"../images/discord-friend-logo.png",
    },
    {
        id:5,
        name:"Champak Lal",
        status: 0,
        imageSrc:"../images/discord-friend-logo.png",
    },
    {
        id:6,
        name:"Pradeep Dalai",
        status: 0,
        imageSrc:"../images/discord-friend-logo.png",
    },
    {
        id:7,
        name:"Preeti Sharma",
        status: 1,
        imageSrc:"../images/discord-friend-logo.png",
    },
    {
        id:8,
        name:"Tanny Pat",
        status: 1,
        imageSrc:"../images/discord-friend-logo.png",
    },
    {
        id:9,
        name:"Zishan Ahmed",
        status: 1,
        imageSrc:"../images/discord-friend-logo.png",
    },
    {
        id:9,
        name:"Zebra Pattric",
        status: 0,
        imageSrc:"../images/discord-friend-logo.png",
    },
];

let onlineFriendsJSON = friendListJSON.filter(a => a.status === 1);
let offlineFriendsJSON = friendListJSON.filter(b => b.status === 0);

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

for(let i =0; i< onlineFriendsJSON.length; i++){
    const spanOnlineFriends = document.createElement("p");
    spanOnlineFriends.className = "on-friend-p-css"

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
const offlineFriendContainer = document.getElementById("offline-friend-rendering");
for(let i=0; i< offlineFriendsJSON.length; i++){
    const spanOfflineFriends = document.createElement("p");
    spanOfflineFriends.className= "off-friend-p-css";

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
