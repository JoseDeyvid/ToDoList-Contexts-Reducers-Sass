import styles from './App.module.scss'

// Components
import Filter from './components/Filter'
import Header from './components/Header'
import List from './components/List'

function App() {

  return (
    <div className={styles.app}>
      <Header />
      <main>
        <Filter />
        <List />
      </main>
    </div>
  )
}

export default App
