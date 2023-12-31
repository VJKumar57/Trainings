function goBack() {
      window.history.back();
    }
// script.js
// script.js
document.addEventListener('DOMContentLoaded', function () {
  const daySelector = document.querySelector('.day-selector');
  const selectedDaysList = document.getElementById('selected-days-list');

  // Attach click event listeners to day buttons
  daySelector.addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') {
      toggleDaySelection(event.target);
    }
  });

  // Function to toggle day selection
  function toggleDaySelection(dayButton) {
    const day = dayButton.dataset.day;
    if (dayButton.classList.contains('selected')) {
      dayButton.classList.remove('selected');
      removeDayFromList(day);
    } else {
      dayButton.classList.add('selected');
      addDayToList(day);
    }
  }

  // Function to add a selected day to the list
  function addDayToList(day) {
    const dayItem = document.createElement('li');
    dayItem.textContent = day;
    selectedDaysList.appendChild(dayItem);
  }

  // Function to remove a deselected day from the list
  function removeDayFromList(day) {
    const dayItems = selectedDaysList.getElementsByTagName('li');
    for (let i = 0; i < dayItems.length; i++) {
      if (dayItems[i].textContent === day) {
        selectedDaysList.removeChild(dayItems[i]);
        break;
      }
    }
  }
});

