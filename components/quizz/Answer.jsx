import styles from '../../styles/Quizz.module.sass'

const Answer = ({ id, answer, isSelected, correct, questionId, selectedAnswer, activeQuizz }) => {



  return (
    <li className={!activeQuizz && correct ?
      styles.correctAnswer
      : !activeQuizz && !correct && isSelected ?
        styles.wrongAnswer
        : isSelected ?
          styles.answerSelected
          : styles.answer} onClick={() => selectedAnswer(questionId, id)}> {answer}</li>
  )
}

export default Answer