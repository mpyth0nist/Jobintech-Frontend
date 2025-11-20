import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileCard from './components/ProfileCard'
import av1 from './assets/dag.jpeg'
import av2 from './assets/zizo.jpeg'



const users = [
    {id: 1, name: 'Sara', role:'Designer', email:'sara@example.com', avatar:av1},
    {id: 1, name: 'Zineb', role:'fullstack', email:'zineb@example.com', avatar: av2},
    {id: 1, name: 'ayoub', role:'devops', email:'ayoub@example.com', avatar: ''},
]


function App() {



  return (
    <>
      <h1>Cartes de profil</h1>
      {users.map(user => <ProfileCard key={user.id} name={user.name} role={user.role} email={user.email} avatar={user.avatar}/>)}
    </>
  )
}

export default App
