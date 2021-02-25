import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
  const contextData = useContext(ChallengesContext)

  console.log(contextData)

  const hasActiveChallenge = true

  return (
    <div className={styles.challengeBoxContainer}>
      { hasActiveChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe 400 xp</header>
          
          <main>
            <img src="icons/body.svg" />
            <strong>Novo desafio</strong>
            <p>Levante-se e faça um alongamento.</p>
          </main>
          
          <footer>
            <button
              type="button"
              className={styles.challengeFailButton}
            >
              Falhei
            </button>
            <button
              type="button"
              className={styles.challengeSucceededButton}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Inicie um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up"/>
            Avance de level completando desafios.
          </p>
        </div>
      ) }
    </div>
  )
}
