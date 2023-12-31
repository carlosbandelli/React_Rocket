import React, {useState, useEffect} from 'react';
import {Card} from '../../components/Card'
import './style.css'

export function Home() {
  const [studentName, setStudentName] = useState();
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({name:'', avatar:''});

  function handleAddStudent(){

    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br",{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    }
    setStudents(prevState => [...prevState, newStudent]);
    setStudentName('');
  }

  useEffect(() => {
    fetch('https://api.github.com/users/carlosbandelli')
    .then(response => response.json())
    .then(data => {
      setUser({
        name: data.name,
        avatar: data.avatar_url,
      })
    })
  },[])

  return (
    <div className="container">
      <header>
        <h1>Lista de Presença</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Foto de perfil" />
        </div>

      </header>
     <input type="text" placeholder="Digite o seu nome..." onChange={e => setStudentName(e.target.value)} value={studentName}/>
     <button type="button" onClick={handleAddStudent}>Adicionar</button>
      {   
      students.map(student => (
        <Card 
        name={student.name} 
        key={student.time}
        time={student.time}
        />      
      ))       
      }   
    </div>
  )
}

