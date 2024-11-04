// Header function
const Header = ({ name }) => {
    return <h2>{name}</h2>
}

// Function for everything else
const Content = ({ parts }) => {
    // Logic for displaying data
    const Part = ({ part }) => (
    <p>
      {part.name} {part.exercises}
    </p>
  );

    // Calculate totalExercises with .reduce()
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <div>
        {/* display parts with .map() */}
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
      {/* display total */}
      <p><strong>total of {totalExercises} exercises</strong></p>
    </div>
  );
};

// Define and export the main function Course
const Course = ({ courses }) => (
  <div>
    {/* Allow for multiple courses with .map() */}
    {courses.map((course) => (
      <div key={course.id}>
        <Header name={course.name} />
        <Content parts={course.parts} />
      </div>
    ))}
  </div>
);


export default Course;
