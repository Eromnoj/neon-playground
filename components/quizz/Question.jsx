import styles from '../../styles/Quizz.module.sass'
import dynamic from 'next/dynamic'

const Answer = dynamic(() => import('./Answer'), {
  ssr: false
})

const Question = ({ id, question, answers, selectedAnswer, activeQuizz }) => {

  const displayAnswers = answers.map(ans => <Answer 
    key={ans.id} 
    id={ans.id}
    answer={ans.answer}
    isSelected={ans.isSelected}
    correct={ans.correct}
    questionId={id}
    selectedAnswer={selectedAnswer}
    activeQuizz={activeQuizz} />  )

  return (
    <div className={styles.quizzQuestion}>
      <div className={styles.question}>{question}</div>
      <ul className={styles.answersList}>
        {displayAnswers}
      </ul>
    </div>
  )
}

export default Question