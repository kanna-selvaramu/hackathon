import { useEffect } from 'react'
import { Provider } from 'react-redux'
import { challenge } from '../data/challenge'
import { store } from '../reducers'
import { updateChallenge } from '../reducers/action'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    if(localStorage.getItem("challenges") !== null )
      updateChallenge(JSON.parse(localStorage.getItem("challenges")))
    else
      updateChallenge(challenge);
  },[])

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
