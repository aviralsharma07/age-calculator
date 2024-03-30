let DOB = document.getElementById("date");
DOB.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result");

function calculateAge() {
  let birthDate = new Date(DOB.value);
  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1;
  let y1 = birthDate.getFullYear();

  let currentDate = new Date();
  let d2 = currentDate.getDate();
  let m2 = currentDate.getMonth() + 1;
  let y2 = currentDate.getFullYear();

  let d3, m3, y3;
  y3 = y2 - y1;
  if (m2 < m1) {
    y3--;
    m3 = 12 - (m1 - m2);
  } else {
    m3 = m2 - m1;
  }
  if (d2 < d1) {
    m3--;
    d3 = getDaysInCurrentMonth(y1, m1) - (d1 - d2);
  } else {
    d3 = d2 - d1;
  }
  if (m3 < 0) {
    y3--;
    m3 = 11;
  }

  console.log(y3, m3, d3);
  result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old.`;
}

function getDaysInCurrentMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
