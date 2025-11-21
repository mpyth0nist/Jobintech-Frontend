import { useEffect, useMemo, useState } from 'react'
import useFetch from './hooks/useFetch'
import './App.css'

import useLocalStorage from './hooks/useLocalStorage'
import useToggle from './hooks/useToggle'
import UserCard from './components/UserCard'

function App() {

  const {users, loading, error} = useFetch('https://jsonplaceholder.typicode.com/users')
  
  const [search, setSearch] = useState('')

  const [theme, setTheme] = useLocalStorage('dark')


  useEffect(() => {
    console.log(users)
  }, [])

  const filteredUsers = useMemo(() => {
    return users.filter(user => 
      user.name.toUpperCase().includes(search.toUpperCase())
    )
  }, [users, search])

  const handleClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  
  

  return (
    <div className={theme === 'light' ? 'container light-mode' : 'container dark-mode'}>
      <div className="options-headers">
          <button className={theme === 'light' ? 'btn light': 'btn dark'} onClick={() => handleClick()}>{theme} mode</button>
          <input className={theme === 'light' ? 'search light-mode' : 'search dark-mode'} type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>
      </div>
      <div className="users">
        {filteredUsers?.map(user => {
        return <UserCard key={user.id} theme={theme} name={user.name} phone={user.phone} email={user.email} />
      })}
      </div>

    </div>
  )
}

export default App
