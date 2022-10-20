import { createContext, useMemo, useReducer } from "react"



function reducer(state, action) {
  switch (action.type) {
    case 'roll':
      const rollDice = Math.ceil(Math.random() * 6)
      return {
          ...state,
          dicevalue: rollDice,
          turn: rollDice === 1 ? !state.turn : state.turn,
          current: rollDice !== 1 ? state.current + rollDice : 0
        }
    case 'hold':
      return state.turn ?
          {
            ...state,
            turn: false,
            current: 0,
            playerOneTotal: state.playerOneTotal + state.current
          }
          : {
            ...state,
            turn: true,
            current: 0,
            playerTwoTotal: state.playerTwoTotal + state.current
          }

    case 'restart':
      return {
        ...initialState
      }
  }
}

const initialState = {
  dicevalue: 1,
  turn: true,
  current: 0,
  playerOneTotal: 0,
  playerTwoTotal: 0
}


export const hundredGameContext = createContext(null)

export const HundredGameContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState)

  const contextValue = useMemo(() => {
    return { state, dispatch }
  }, [state, dispatch])

  return (
    <hundredGameContext.Provider value={contextValue}>
      {children}
    </hundredGameContext.Provider>
  )

}