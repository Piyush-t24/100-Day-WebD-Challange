"use strict";
const getUsername = document.querySelector("#user");
const formSubmit = document.querySelector("#form");
const main_container = document.querySelector(".main_container");
if (!main_container) {
    console.error("Error: .main_container not found in the DOM");
}
// Reusable fetch function
async function myCustomFetcher(url, option) {
    const response = await fetch(url, option);
    if (!response.ok) {
        throw new Error(`Network response was not ok - status: ${response.status}`);
    }
    return response.json();
}
// Display the card UI
const showResultUI = (singleUser) => {
    const { avatar_url, login, url } = singleUser;
    if (!main_container)
        return;
    main_container.insertAdjacentHTML("beforeend", `<div class='card'>
      <img src="${avatar_url}" alt="${login}" />
      <hr/>
      <div class='card-footer'>
        <img src="${avatar_url}" alt="${login}" />
        <a href="${url}" target="_blank">Github</a>
      </div>
    </div>`);
};
function fetchUserData(url) {
    myCustomFetcher(url)
        .then((userInfo) => {
        userInfo.forEach(showResultUI);
    })
        .catch((error) => console.error("Error fetching user data:", error));
}
// Default function call
fetchUserData("https://api.github.com/users");
// Perform search functionality
if (formSubmit && getUsername) {
    formSubmit.addEventListener("submit", async (e) => {
        e.preventDefault();
        const searchTerm = getUsername.value.toLowerCase().trim(); // Trim whitespace
        try {
            const url = "https://api.github.com/users";
            const allUserData = await myCustomFetcher(url);
            const matchingUsers = allUserData.filter((user) => user.login.toLowerCase().includes(searchTerm));
            // Clear previous results
            if (main_container) {
                main_container.innerHTML = "";
            }
            if (matchingUsers.length === 0) {
                main_container?.insertAdjacentHTML("beforeend", `<p class="empty-msg">No matching users found.</p>`);
            }
            else {
                matchingUsers.forEach(showResultUI);
            }
        }
        catch (error) {
            console.error("Error fetching user data:", error);
        }
    });
}
else {
    console.error("Error: Form or input field not found in the DOM");
}
