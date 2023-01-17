
// Criando uma lista de estudantes

const students = [
   {
       name: "Luiz",
       firstGrade: 8.0,
       secondGrade: 9.0
   },
   {
      name: "Rodrigo",
      firstGrade: 7.3,
      secondGrade: 8.4
   },
   {
      name: "Joelma",
      firstGrade: 4.2,
      secondGrade: 5.4
   },
   {
      name: "Clarice",
      firstGrade: 10.0,
      secondGrade: 7.5
   },
   
]

// Função que calcula a Média das Notas

function gradeAvarege(firstGrade, secondGrade) {
   return ((firstGrade + secondGrade) / 2).toFixed(1)
}

function printGradeAvarege(student) {

   const mean = gradeAvarege(student.firstGrade, student.secondGrade)

   if(mean >= 7) {
      return ` A média de ${student.name} é: ${mean}\n Parabéns, você foi aprovado!`
   } else {
     return `A média de ${student.name} é: ${mean}\nTente novamente!`
   }
}

for (let student of students) {
   let message = printGradeAvarege(student)
   alert(message)
}
