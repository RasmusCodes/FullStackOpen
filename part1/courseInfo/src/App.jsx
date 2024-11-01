const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  
  // Defining the Header function
  const Header = ({course}) => {
    return (
    <h1>{course.name}</h1>
    )
  }
  // Defining Part function to use it in Content
  const Part = ({part, exercises}) => {
    return (
      <p>{part} {exercises}</p>
    )
  }
  // Defining Content using Part
  const Content = ({parts}) => {
    return (
      <div>
        <Part part={parts[0]} exercises={parts[1]} />
        <Part part={parts[2]} exercises={parts[3]} />
        <Part part={parts[4]} exercises={parts[5]} />
      </div>
    )
  }
  // Calculate the total by knowing the indices of the values. 
  const Total = ({a, b, c}) => {
    return (
      <p>Number of exercises: {parts[1] + parts[3] + parts[5]}</p>
    )
  }

  // Defining this array this way so that the code works.
  const parts = [course.parts[0].name, course.parts[0].exercises, course.parts[1].name, course.parts[1].exercises, course.parts[2].name, course.parts[2].exercises]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App