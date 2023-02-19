function getTempMail() {
  fetch("http://api.aladhan.com/v1/gToH")
  .then(data => data.json())
  .then(response => {
    const date = response.data.hijri.day;
    const month = response.data.hijri.month.en;
    const year = response.data.hijri.year;
    const dateElement = document.getElementById('dateId');
    const monthElement = document.getElementById('monthId');
    const yearElement = document.getElementById('yearId');

    dateElement.innerHTML = date;
    monthElement.innerHTML = month;
    yearElement.innerHTML = year;
  });
};
getTempMail();