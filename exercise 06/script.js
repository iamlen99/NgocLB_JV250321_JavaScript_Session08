let students = [
  { name: "Trần Trí Dương", scores: { math: 9, english: 8, literature: 7 } },
  { name: "Hà Bích Ngọc", scores: { math: 3, english: 2, literature: 5 } },
  { name: "Bùi Thái Sơn", scores: { math: 9.5, english: 9, literature: 9 } },
];

function getAverage(object, minValue) {
  let sum = 0;
  for (let key in object) {
    sum += object[key];
  }
  return sum / 3 >= minValue;
}

console.log(
  "Danh sách sinh viên có điểm trung bình 3 môn toán, văn, anh >= 8 là: "
);
for (let student of students) {
  let scores = student.scores;
  if (getAverage(scores, 8)) {
    console.log("- ", student.name);
  }
}
