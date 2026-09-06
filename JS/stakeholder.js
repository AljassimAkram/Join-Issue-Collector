const FIREBASE_URL =
  "https://join-aj-default-rtdb.europe-west1.firebasedatabase.app/";

const MAX_REQUESTS_PER_DAY = 10;


function getTodayKey() {
  const today = new Date();

  const year = today.getFullYear();

  const month = String(
    today.getMonth() + 1
  ).padStart(2, "0");

  const day = String(
    today.getDate()
  ).padStart(2, "0");

  return `${year}-${month}-${day}`;
}


async function getTodayRequestCount() {
  const today = getTodayKey();

  try {
    const response = await fetch(
      `${FIREBASE_URL}issueCollectorUsage/${today}/count.json`
    );

    if (!response.ok) {
      throw new Error("Request count could not be loaded");
    }

    const count = await response.json();

    return Number(count) || 0;

  } catch (error) {

    console.error(
      "Error loading request count:",
      error
    );

    return 0;
  }
}


async function checkDailyLimit() {
  const count = await getTodayRequestCount();

  updateRequestCounter(count);

  if (count >= MAX_REQUESTS_PER_DAY) {
    window.location.href =
      "./stakeholder-limit.html";
  }
}


function updateRequestCounter(count) {
  const counter =
    document.querySelector(".request-counter");

  if (!counter) {
    return;
  }

  counter.innerHTML = `
    <strong>${count} of ${MAX_REQUESTS_PER_DAY}</strong>
    <span>requests used today</span>
  `;
}


document.addEventListener(
  "DOMContentLoaded",
  checkDailyLimit
);