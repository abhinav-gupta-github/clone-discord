const textChannelJsonRes = [
  {
    id: 1,
    title: "general",
    prefix: "#",
    category: "channel-name",
    url: "",
    addInvite: "../images/add-person.png",
  },
  {
    id: 2,
    title: "logical-questions",
    prefix: "#",
    category: "channel-name",
    url: "",
    addInvite: "../images/add-person.png",
  },
  {
    id: 3,
    title: "10-mins-read",
    prefix: "#",
    category: "channel-name",
    url: "",
    addInvite: "../images/add-person.png",
  },
  {
    id: 4,
    title: "reels-update",
    prefix: "#",
    category: "channel-name",
    url: "",
    addInvite: "../images/add-person.png",
  },
  {
    id: 5,
    title: "suggestions",
    prefix: "#",
    category: "channel-name",
    url: "",
    addInvite: "../images/add-person.png",
  },
  {
    id: 6,
    title: "updates-and-notifications",
    prefix: "#",
    category: "channel-name",
    url: "",
    addInvite: "../images/add-person.png",
  },
  {
    id: 7,
    title: "fun-time",
    prefix: "#",
    category: "channel-name",
    url: "",
    addInvite: "../images/add-person.png",
  },
];
//Text-channel-div
const channelListContainerUL = document.getElementById("text-channel-list");
for (let i = 0; i < textChannelJsonRes.length; i++) {
  const listItems = document.createElement("li");
  listItems.className = "channel-list";

  const prefix = document.createElement("span");
  prefix.className = "title-prefix";
  prefix.textContent = textChannelJsonRes[i].prefix;

  const extraSpan = document.createElement("span");
  extraSpan.className = "extra-span";

  const addInviteIcon = document.createElement("img");
  addInviteIcon.className = "add-invite-icon";
  addInviteIcon.src = textChannelJsonRes[i].addInvite;

  const textItem = document.createElement("p");
  textItem.className = "channel-text";
  textItem.textContent = textChannelJsonRes[i].title;

  textItem.prepend(prefix);
  textItem.appendChild(addInviteIcon);
  listItems.appendChild(textItem);
  channelListContainerUL.appendChild(listItems);
}

const voiceChannelJsonRes = [
  {
    id: 1,
    title: "General",
    prefix: "#",
    category: "channel-name",
    url: "",
  },
  {
    id: 2,
    title: "Interview-prep",
    prefix: "#",
    category: "channel-name",
    url: "",
  },
];

//Voice-channel-div
const voiceListContainerUL = document.getElementById("voice-channel-list");
for (let i = 0; i < voiceChannelJsonRes.length; i++) {
  const listItems = document.createElement("li");
  listItems.className = "channel-list";

  const prefix = document.createElement("span");
  prefix.className = "title-prefix";
  prefix.textContent = voiceChannelJsonRes[i].prefix;

  const textItem = document.createElement("p");
  textItem.className = "channel-text";
  textItem.textContent = voiceChannelJsonRes[i].title;

  textItem.prepend(prefix);
  listItems.appendChild(textItem);
  voiceListContainerUL.appendChild(listItems);
}
const searchWrapper = document.querySelector(".search-container");
searchWrapper.classList.add("active");
