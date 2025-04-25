function calculateAge() {
  const date = parseInt(document.getElementById("date").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);

  if (
    isNaN(date) ||
    isNaN(month) ||
    isNaN(year) ||
    date <= 0 ||
    month <= 0 ||
    month > 12 ||
    year <= 0
  ) {
    document.getElementById("result").innerText =
      "Please enter valid date, month, and year.";
    return;
  }

  const today = new Date();
  const birthDate = new Date(year, month - 1, date);

  if (birthDate > today) {
    document.getElementById("result").innerText =
      "Birth date cannot be in the future.";
    return;
  }

  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();

  if (ageDays < 0) {
    ageMonths--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    ageDays += prevMonth.getDate();
  }

  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  const resultText = `Usia Anda adalah ${ageYears} Tahun, ${ageMonths} Bulan, dan ${ageDays} Hari.`;
  document.getElementById("result").innerText = resultText;
}
