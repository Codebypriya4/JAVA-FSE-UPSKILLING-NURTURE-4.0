// Exercise 1
//main.js
console.log("Welcome to the Community Portal");
window.onload = function () {
  alert("Page is fully loaded!");
};

// Exercise 2
const eventName = "Community Cleanup";
const eventDate = "2025-06-15";
let seatsAvailable = 50;
console.log(`${eventName} is scheduled for ${eventDate}. Seats left: ${seatsAvailable}`);
seatsAvailable--;

// Exercise 3
const eventsList = [
  { name: "Music Night", date: "2025-06-20", seats: 10 },
  { name: "Past Event", date: "2024-06-01", seats: 0 }
];
eventsList.forEach(event => {
  const today = new Date();
  const eventDate = new Date(event.date);
  if (eventDate > today && event.seats > 0) {
    console.log(`Upcoming Event: ${event.name}`);
  } else {
    console.log(`Skipping: ${event.name}`);
  }
});
try {
  let selectedEvent = eventsList[0];
  if (selectedEvent.seats <= 0) throw "No seats available!";
  selectedEvent.seats--;
  console.log("Registered successfully.");
} catch (err) {
  console.error("Registration failed:", err);
}

// Exercise 4
function addEvent(name, category) {
  return { name, category };
}
function registerUser(user, event) {
  console.log(`${user} registered for ${event.name}`);
}
function filterEventsByCategory(events, category) {
  return events.filter(e => e.category === category);
}
// Closure
function createCategoryTracker() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const trackMusic = createCategoryTracker();
console.log(trackMusic()); // 1
console.log(trackMusic()); // 2

// Exercise 5
function Event(name, seats) {
  this.name = name;
  this.seats = seats;
}
Event.prototype.checkAvailability = function () {
  return this.seats > 0;
};
const musicEvent = new Event("Jazz Night", 20);
console.log(Object.entries(musicEvent)); 
console.log(musicEvent.checkAvailability());

// Exercise 6
let allEvents = [
  { name: "Yoga", type: "health" },
  { name: "Rock Concert", type: "music" }
];
allEvents.push({ name: "Jazz", type: "music" });
let musicEvents = allEvents.filter(e => e.type === "music");
let cards = allEvents.map(e => `Event: ${e.name.toUpperCase()}`);
console.log(cards);

// Exercise 7
const eventList = document.querySelector("#eventList");
function renderEvent(event) {
  const div = document.createElement("div");
  div.className = "eventCard";
  div.textContent = `${event.name} - ${event.date}`;
  if (eventList) {
    eventList.appendChild(div);
  }
}

// Exercise 8
const registerBtn = document.getElementById("registerBtn");
const categoryFilter = document.getElementById("categoryFilter");
const searchInput = document.getElementById("searchInput");

if (registerBtn) {
  registerBtn.onclick = function () {
    alert("You registered!");
  };
}
if (categoryFilter) {
  categoryFilter.onchange = function (e) {
    filterEvents(e.target.value);
  };
}
if (searchInput) {
  searchInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      console.log("Searching for:", e.target.value);
    }
  });
}

// Exercise 9
fetch("https://mockapi.io/events")
  .then(res => res.json())
  .then(data => console.log("Events:", data))
  .catch(err => console.error(err));

async function fetchEvents() {
  const loading = document.getElementById("loading");
  if (loading) loading.style.display = "block";
  try {
    const res = await fetch("https://mockapi.io/events");
    const data = await res.json();
    console.log(data);
  } catch (e) {
    console.error("Failed to load events", e);
  } finally {
    if (loading) loading.style.display = "none";
  }
}

// Exercise 10
const eventArr = [
  { name: "Yoga", date: "2025-07-01", category: "health" }
];
function logEvent({ name, date }) {
  console.log(`${name} on ${date}`);
}
const newList = [...eventArr];
logEvent(eventArr[0]);

// Exercise 11
const regForm = document.getElementById("regForm");
if (regForm) {
  regForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = this.elements["name"].value;
    const email = this.elements["email"].value;
    const event = this.elements["event"].value;
    const errorMsg = document.getElementById("errorMsg");

    if (!name || !email) {
      if (errorMsg) errorMsg.textContent = "All fields are required.";
      return;
    }
    console.log(`Registered ${name} for ${event}`);
  });
}

// Exercise 12
function sendRegistration(data) {
  const status = document.getElementById("status");
  if (status) status.textContent = "Submitting...";
  setTimeout(() => {
    fetch("https://mockapi.io/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => {
      if (status) status.textContent = "Registered successfully!";
    })
    .catch(() => {
      if (status) status.textContent = "Failed to register.";
    });
  }, 2000);
}

// Exercise 13
console.log("Submitting form...");
try {
  const payload = { name: "John", email: "john@mail.com" };
  console.log("Payload:", payload);
  // simulate fetch or sending
} catch (err) {
  console.error("Error:", err);
}

// Exercise 14
if (window.jQuery) {
  $('#registerBtn').click(function () {
    alert("You clicked register!");
    $('.eventCard').fadeOut().fadeIn();
  });
}
