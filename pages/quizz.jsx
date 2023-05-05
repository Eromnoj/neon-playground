import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'

import dynamic from 'next/dynamic'

const Question = dynamic(() => import('../components/quizz/Question'), {
  ssr: false
})
import styles from '../styles/Quizz.module.sass'
import Link from 'next/link'


const Quizz = () => {

  const [loading, setLoading] = useState(true)
  const getQuizz = async () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    try {
      const res = await fetch('https://the-trivia-api.com/api/questions?limit=5')
      const data = await res.json()
      setLoading(false)
      const formattedQuizz = data.map(question => {
        let correctAnswer = {
          id: nanoid(),
          correct: true,
          isSelected: false,
          answer: question.correctAnswer
        }
        
        let answersArray = question.incorrectAnswers.map(answer => {
          return {
            id: nanoid(),
            correct: false,
            isSelected: false,
            answer
          }
        })
        
        let random = Math.floor(Math.random() * 3)
        answersArray.splice(random, 0, correctAnswer)
        return {
          id: question.id,
          question: question.question,
          answers: answersArray
        }
      })
      
      setQuizz(formattedQuizz)
      setScore(0)
      setActiveQuizz(true)
    } catch (error) {
      console.log(error)
    }
  }

  const selectedAnswer = (questionId, answerId) => {
    setQuizz(prev => prev.map(question => question.id === questionId ? { ...question, answers: question.answers.map(answer => answer.id === answerId ? { ...answer, isSelected: true } : { ...answer, isSelected: false }) } : { ...question }))
  }

  // For reference, this is the logic of the code above :
  // 
  //  { let answerSelection = prev.map(question => {
  //   if(question.id === questionId){
  //     let answerArray = question.answers.map(answer => {
  //       if(answer.id === answerId){
  //         return {
  //           ...answer,
  //           isSelected : true
  //         }
  //       } else {
  //         return {
  //           ...answer,
  //           isSelected : false
  //         }
  //       }
  //     })
  //     return {
  //       ...question,
  //       answers : answerArray
  //     }
  //   } else {
  //     return { ...question}
  //   }
  // })
  // return [
  //   ...answerSelection
  // ]}

  const validAnswer = () => {
    for (const question of quizz) {
      for (const answer of question.answers) {
        if (answer.correct && answer.isSelected) {
          setScore(prev => prev + 1)
        }
      }
    }
    setActiveQuizz(false)
  }



  const [quizz, setQuizz] = useState([])
  const [score, setScore] = useState(0)
  const [activeQuizz, setActiveQuizz] = useState(false)

  const finalPhrases = [
    `Yeah, you're that dumb...`,
    `At least you had one right... Was it on purpose ?`,
    `One more and you won't have to hide your score anymore`,
    `That's it ! Our school system isn't so bad actually`,
    `Oh Yeah, almost there! Keep going, I know you can do better`,
    `5 out of 5 !!! But don't show off, it's just a silly quiz`
  ]

  useEffect(() => {
    getQuizz()
  }, [])

  const displayQuizz = quizz.map(question => <Question
    key={question.id}
    id={question.id}
    question={question.question}
    answers={question.answers}
    selectedAnswer={selectedAnswer}
    activeQuizz={activeQuizz} />)

    if(loading){
      return <div>Loading...</div>
    }
  return (
    <div className={styles.mainQuizzContainer}>
      <div className={styles.quizzHeader}>
      <div className={styles.homeLink}>
            <Link href='/'><a href='' className={styles.link}>Back to game selection</a></Link>
          </div>
        <h1 className={styles.quizzTitle}>Quizz</h1>
        <p className={styles.quizzSubtitle}>Another Trivia Game</p>
      </div>

      <div className={styles.gameContainer}>
        <div className={styles.gameBox}>
          {displayQuizz}
          <div className={styles.validationBox}>
            {!activeQuizz &&
              <div className={styles.result}>
                <p className={styles.score}>score : {score} / 5 </p>
                <p className={styles.phrases}>{finalPhrases[score]}</p>
              </div>}
            {activeQuizz ?
              <button className={styles.button} onClick={validAnswer}>Post Answers</button> :
              <button className={styles.button} onClick={getQuizz}>New Quizz</button>}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Quizz