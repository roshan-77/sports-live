// JavaScript to handle tab switching
document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".navbar li a");
    const tabSections = document.querySelectorAll(".tab");

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", function (e) {
            e.preventDefault();
            for (let i = 0; i < tabs.length; i++) {
                tabSections[i].classList.remove("active");
            }
            tabSections[index].classList.add("active");
        });
    });

    // Add channels to the channel list
    const channelList = document.getElementById("channel-list");
    const channels = ["Currently Unavailable"]; // Replace with your channel names

    channels.forEach(channel => {
        const li = document.createElement("li");
        li.textContent = channel;
        channelList.appendChild(li);
    });
});
