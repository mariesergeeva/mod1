function giveJobToStudent(student, jobName) {
    let studentWithJob = {
        ...student,
        job: jobName,
    }
    return console.log(studentWithJob)
}
const student = {
    fullName: "Максим",
    experienceInMonths: 12,
    stack: ["HTML", "CSS", "JavaScript", "React"]
  }
  
  const updatedStudent = giveJobToStudent(student, "веб-разработчик")
  /*
  updatedStudent = {
      fullName: 'Максим',
      experienceInMonths: 12,
      stack: ['HTML', 'CSS', 'JavaScript', 'React'],
      job: 'веб-разработчик',
  }
  */  