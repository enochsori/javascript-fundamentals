//Q1. make a string out of an array = "join"
// "join" makes an array to a string
{
  console.log('---------------------- Q1 ----------------------');
  const fruits = ['apple', 'banana', 'orange'];
  const stringFruits = fruits.join();
  console.log(stringFruits);
}

// Q2. make an array out of a string =>
// "split" makes a string to an array

{
  console.log('---------------------- Q2 ----------------------');
  const fruits = '🍎 ,🥝, 🍌, 🍒';
  const arrayFruits = fruits.split();
  console.log(arrayFruits);
}

// Q3. make this array look like this:[5, 4, 3, 2, 1]
{
  console.log('---------------------- Q3 ----------------------');
  const array = [1, 2, 3, 4, 5];
  // 1. sort methods sorts in order * it transforms the array itself.
  // Becareful with numbers
  console.log(array.sort((a, b) => b - a));

  // 2. reverse chnages the order of the array
  console.log(array.reverse());
  console.log(array.reverse());
}

// Q4. make new array without the first two elements

{
  console.log('---------------------- Q4 ----------------------');
  // 1. splice returns a spliced array and the original array is chaged exept for the sliced array.
  const array = [1, 2, 3, 4, 5];
  const splicedArray = array.splice(0, 2);
  console.log(splicedArray);
  console.log(array);

  // 2. shift removes the first elements of the array.
  console.log(array.shift()); // returning a removed element
  console.log(array);

  // 3. slice returns a sliced array and the original array is not changed.
  const array2 = [1, 2, 3, 4, 5];
  console.log(array2.slice(2)); // from 2nd element to the end => [3, 4, 5]
  console.log(array2);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  console.log('---------------------- Q5 ----------------------');
  // 1. filter returns a new array that matches the condition.
  console.log(students.filter((student) => student.score >= 80));
  // 2. find returns the first element that matched the condition.
  console.log(students.find((student) => student.score >= 80));
}

//Q6. make an array of enrolled students
{
  console.log('---------------------- Q6 ----------------------');
  console.log(students.filter((student) => student.enrolled));
}

//Q7. make an array containing only the student's scores
// result should be : [45, 80, 90, 66, 88]
{
  console.log('---------------------- Q7 ----------------------');
  console.log(students.map((student) => student.score));
}

//Q8. check if there is student with the score lower than 50
{
  console.log('---------------------- Q8 ----------------------');
  console.log(students.some((student) => student.score < 50));
}

//Q9. compute students' average score
{
  console.log('---------------------- Q9 ----------------------');
  // 1 using forEach()
  console.log('forEach ****************************************************');
  let sum = 0;
  students.forEach((student) => (sum = sum + student.score));
  console.log(sum / students.length);
  console.log('forEach ****************************************************');

  console.log('reduce ****************************************************');
  // 2. using reduce() => used to accumulate values in an array.
  const sumReduce = students.reduce((pre, curr) => {
    return pre + curr.score;
  }, 0);
  console.log(sumReduce / students.length);
  console.log('reduce ****************************************************');
}

//Q10. make a string containing all the scores
// result should be:'45, 80, 90, 66, 88'
{
  console.log('---------------------- Q9 ----------------------');
  const scoresArray = students.map((student) => student.score);
  const scoresString = scoresArray.join();
  console.log(scoresString);
}

{
}

// Bonus! do Q10 sorted in ascending order
// result should be:'45, 66, 80, 88, 90'
{
  console.log('---------------------- Q10 ----------------------');
  const scores = students.map((student) => student.score);
  console.log(scores.sort((a, b) => a - b));
}
