//This is an answer(Not the same answer)  to a question from Mid terms

const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 3000;

const stunents = [
  { id: 1, name: 'John Doe', age: 20 },
  { id: 2, name: 'Jane Smith', age: 22 },
  { id: 3, name: 'Mike Johnson', age: 19 },
];

app.use(express.json());

app.get('/', (req, res) => {
  res.send(stunents);
});

app.get('/:id', (req, res) => {
  const studentId = parseInt(req.params.id);
  const student = stunents.find((s) => s.id === studentId);
  if (!student) {
    return res.status(404).send('Student not found');
  }
  res.send(student);
});

fetch('/',{name: 'John Doe', age: 20});

app.post('/', (req, res) => {
  const newStudent = {
    id: stunents.length + 1,
    name: req.body.name,
    age: req.body.age,
  };
  stunents.push(newStudent);
  res.status(201).send(newStudent);
});

app.put('/:id', (req, res) => {
  const studentId = parseInt(req.params.id);
  const student = stunents.find((s) => s.id === studentId);
  if (!student) {
    return res.status(404).send('Student not found');
  }
  student.name = req.body.name || student.name;
  student.age = req.body.age || student.age;
  res.send(student);
}
);
app.delete('/:id', (req, res) => {
  const studentId = parseInt(req.params.id);
  const studentIndex = stunents.findIndex((s) => s.id === studentId);
  if (studentIndex === -1) {
    return res.status(404).send('Student not found');
  }
  const deletedStudent = stunents.splice(studentIndex, 1);
  res.send(deletedStudent[0]);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});