import { useState } from "react" // Importing useState from React to manage state
import './App.css' // Importing the css file for styling

const App = () => {
  const [team, setTeam] = useState([]) // Setting state for the team
  const [money, setMoney] = useState(100) // Setting state for the money
  const [zombieFighters, setZombieFighters] = useState([
  {
    id: 1,
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: '/images/survivor.png',
  },
  {
    id: 2,
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: '/images/scavenger.png',
  },
  {
    id: 3,
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: '/images/shadow.png',
  },
  {
    id: 4,
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: '/images/tracker.png',
  },
  {
    id: 5,
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: '/images/sharpshooter.png',
  },
  {
    id: 6,
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: '/images/medic.png',
  },
  {
    id: 7,
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: '/images/engineer.png',
  },
  {
    id: 8,
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: '/images/brawler.png',
  },
  {
    id: 9,
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: '/images/infiltrator.png',
  },
  {
    id: 10,
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: '/images/leader.png',
  }
]) // Setting state for the zombie fighters (images are Ai generated)

  // Function to handle adding fighter to the team
  function handleAddFighter(fighter) {
    if (money < fighter.price) {
      console.log('Not enough money')
      return
    }
      setTeam(prev => [...team, fighter])
      setMoney(prev => prev - fighter.price)
      setZombieFighters(prev => prev.filter((fighterid) => fighterid.id !== fighter.id))
  }
  
  const totalStrength = team.reduce((sum, fighter) => sum + fighter.strength,0)
  const totalAgility = team.reduce((sum, fighter) => sum + fighter.agility,0)
  
  // Function to handle removing fighter from the team
  function handleRemoveFighter(fighter) {
    setTeam(prev => prev.filter((fighterid) =>  fighterid.id !== fighter.id))
    setMoney(prev => prev + fighter.price)
    setZombieFighters(prev => [...prev, fighter].sort((a, b) => a.id - b.id))
  }

  return (
    <>
    {/** Displaying all the zombie fighters */}
      <h1>ZOMBIE FIGHTERS</h1>
      <h3>Money: {money}</h3>
      <ul>
      {zombieFighters.map((fighter) => (
        <li key={fighter.id}>
          <img src={fighter.img} alt={fighter.name}/>
          <h3>{fighter.name}</h3>
          <p>Price: {fighter.price}</p>
          <p>Strength: {fighter.strength}</p>
          <p>Agility: {fighter.agility}</p>
          <button onClick={() => handleAddFighter(fighter)}>Add</button>
          </li>
      ))}
      </ul>

      {/** Displaying the team */}
      <h2>Team</h2>
      <h3>Team Strength: {totalStrength}</h3>
      <h3>Team Agility: {totalAgility}</h3>
      {team.length === 0 ? (
        <h3>Pick some team members!</h3>
      ) : (
        <>
        <ul>
        {team.map((fighter) => (
          <li key={fighter.id}>
            <img src={fighter.img} alt={fighter.name} />
            <h3>{fighter.name}</h3>
            <p>Price: {fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button onClick={() => handleRemoveFighter(fighter)}>Remove</button>
          </li>
        ))}
      </ul>
      </>
      )}
    </>
  )
}

export default App