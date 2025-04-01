const getUsername = document.querySelector("#user") as HTMLInputElement | null;
const formSubmit = document.querySelector("#form") as HTMLFormElement | null;
const main_container = document.querySelector(
  ".main_container"
) as HTMLElement | null;

if (!main_container) {
  console.error("Error: .main_container not found in the DOM");
}

// Define the contract of an object
interface UserData {
  id: number;
  login: string;
  avatar_url: string;
  location: string;
  url: string;
}

// Reusable fetch function
async function myCustomFetcher<T>(
  url: string,
  option?: RequestInit
): Promise<T> {
  const response = await fetch(url, option);

  if (!response.ok) {
    throw new Error(`Network response was not ok - status: ${response.status}`);
  }

  return response.json();
}

// Display the card UI
const showResultUI = (singleUser: UserData) => {
  const { avatar_url, login, url } = singleUser;

  if (!main_container) return;

  main_container.insertAdjacentHTML(
    "beforeend",
    `<div class='card'>
      <img src="${avatar_url}" alt="${login}" />
      <hr/>
      <div class='card-footer'>
        <img src="${avatar_url}" alt="${login}" />
        <a href="${url}" target="_blank">Github</a>
      </div>
    </div>`
  );
};

function fetchUserData(url: string) {
  myCustomFetcher<UserData[]>(url)
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
      const allUserData = await myCustomFetcher<UserData[]>(url);
      const matchingUsers = allUserData.filter((user) =>
        user.login.toLowerCase().includes(searchTerm)
      );

      // Clear previous results
      if (main_container) {
        main_container.innerHTML = "";
      }

      if (matchingUsers.length === 0) {
        main_container?.insertAdjacentHTML(
          "beforeend",
          `<p class="empty-msg">No matching users found.</p>`
        );
      } else {
        matchingUsers.forEach(showResultUI);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  });
} else {
  console.error("Error: Form or input field not found in the DOM");
}
