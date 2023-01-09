const dailyHours = Array.from(document.getElementsByClassName("daily-hours"));
const weeklyHours = Array.from(document.getElementsByClassName("weekly-hours"));
const monthlyHours = Array.from(
  document.getElementsByClassName("monthly-hours")
);
const buttonDaily = document.getElementById("button-daily");
const buttonWeekly = document.getElementById("button-weekly");
const buttonMonthly = document.getElementById("button-monthly");

const work = document.getElementById("work");
const play = document.getElementById("play");
const study = document.getElementById("study");
const exercise = document.getElementById("exercise");
const social = document.getElementById("social");
const selfCare = document.getElementById("self-care");

// (each h2 and h4 in the arrays below represents a time period (0=daily, 1=weekly , 2=monthly))
const workTime = work.getElementsByTagName("h2");
const playTime = play.getElementsByTagName("h2");
const studyTime = study.getElementsByTagName("h2");
const exerciseTime = exercise.getElementsByTagName("h2");
const socialTime = social.getElementsByTagName("h2");
const selfCareTime = selfCare.getElementsByTagName("h2");

const workTimePrevious = work.getElementsByTagName("h4");
const playTimePrevious = play.getElementsByTagName("h4");
const studyTimePrevious = study.getElementsByTagName("h4");
const exerciseTimePrevious = exercise.getElementsByTagName("h4");
const socialTimePrevious = social.getElementsByTagName("h4");
const selfCareTimePrevious = selfCare.getElementsByTagName("h4");
//console.log(workTime[0].innerHTML);

// fetch data from JSON file
const getData = fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    return data;
  });

// function that writes fetched data in HTML
function writeData() {
  getData.then((el) => {
    el.forEach((element) => {
      // change the title from JSON to the const of correspondant title
      let titleNoSpace = element.title.replace(/\s/g, "");
      let title = titleNoSpace.charAt(0).toLowerCase() + titleNoSpace.slice(1);

      let titleCurrent = eval(title + "Time");
      let titlePrevious = eval(title + "TimePrevious");
      // get the daily hours
      let dailyHours = element.timeframes.daily.current;
      let dailyHoursPrevious = element.timeframes.daily.previous;
      // set the daily hours
      titleCurrent[0].innerHTML = dailyHours + "hrs";
      titlePrevious[0].innerHTML = "Last day - " + dailyHoursPrevious + "hrs";

      // get weekly hours
      let weeklyHours = element.timeframes.weekly.current;
      let weeklyHoursPrevious = element.timeframes.weekly.previous;
      // set the weekly hours
      titleCurrent[1].innerHTML = weeklyHours + "hrs";
      titlePrevious[1].innerHTML = "Last week - " + weeklyHoursPrevious + "hrs";

      // get monthly hours
      let monthlyHours = element.timeframes.monthly.current;
      let monthlyHoursPrevious = element.timeframes.monthly.previous;
      // set the monthlly hours
      titleCurrent[2].innerHTML = monthlyHours + "hrs";
      titlePrevious[2].innerHTML =
        "Last month - " + monthlyHoursPrevious + "hrs";
    });
  });
}

writeData();

// button listeners to show the period hours clicked

buttonDaily.addEventListener("click", function () {
  dailyHours.forEach((e) => (e.style.display = "block"));
  weeklyHours.forEach((e) => (e.style.display = "none"));
  monthlyHours.forEach((e) => (e.style.display = "none"));
  buttonDaily.classList.add("clicked");
  buttonWeekly.classList.remove("clicked");
  buttonMonthly.classList.remove("clicked");
});

buttonWeekly.addEventListener("click", function () {
  dailyHours.forEach((e) => (e.style.display = "none"));
  weeklyHours.forEach((e) => (e.style.display = "block"));
  monthlyHours.forEach((e) => (e.style.display = "none"));
  buttonDaily.classList.remove("clicked");
  buttonWeekly.classList.add("clicked");
  buttonMonthly.classList.remove("clicked");
});

buttonMonthly.addEventListener("click", function () {
  dailyHours.forEach((e) => (e.style.display = "none"));
  weeklyHours.forEach((e) => (e.style.display = "none"));
  monthlyHours.forEach((e) => (e.style.display = "block"));
  buttonDaily.classList.remove("clicked");
  buttonWeekly.classList.remove("clicked");
  buttonMonthly.classList.add("clicked");
});
