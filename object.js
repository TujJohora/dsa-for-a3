const student = {
  name: "Tumpa",
  age: 25,
};

console.log(student["age"]);
student.class = "CSE";
console.log(student);

const entries = Object.entries(student);

console.log(entries);

for (const [key, value] of entries) {
  console.log(key, value);
}
