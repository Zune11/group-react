import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [score, setScore] = useState('')
  const [remark, setRemark] = useState('')

  const evaluateGrade = () => {
    const numScore = Number(score)

    if (isNaN(numScore) || score === '') {
      setRemark('Please enter a valid number')
      return
    }

    
    if (numScore < 1 || numScore > 100) {
      setRemark('Invalid score')
    } else if (numScore >= 90 && numScore <= 100) {
      setRemark('Excellent')
    } else if (numScore >= 85 && numScore <= 89) {
      setRemark('Very Good')
    } else if (numScore >= 80 && numScore <= 84) {
      setRemark('Good')
    } else if (numScore >= 75 && numScore <= 79) {
      setRemark('Passed')
    } else {
      setRemark('Failed')
    }
  }

  const clearForm = () => {
    setName('')
    setScore('')
    setRemark('')
  }

  return (
    <div className="card">
      <h2>Student Grade Evaluation</h2>
      <p className="subtitle">Activity 2</p>

      <div className="form">
        <label>Student Name</label>
        <input
          type="text"
          placeholder="Enter student name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Score</label>
        <input
          type="number"
          placeholder="Enter score (0-100)"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />

        <div className="buttons">
          <button className="evaluate" onClick={evaluateGrade}>Evaluate</button>
          <button className="clear" onClick={clearForm}>Clear</button>
        </div>
      </div>

      {remark && (
        <div className="result">
          <p><strong>Student Name:</strong> {name}</p>
          <p><strong>Score:</strong> {score}</p>
          <p><strong>Remarks:</strong> {remark}</p>
        </div>
      )}
    </div>
  )
}

export default App
