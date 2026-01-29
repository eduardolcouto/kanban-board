import React, { useState } from 'react'
import './App.css'

function App() {
  const [cards, setCards] = useState([
    { id: 1, title: 'Pesquisa de mercado', description: 'Analisar concorrentes', status: 'todo' },
    { id: 2, title: 'Design do UI', description: 'Criar mockups', status: 'inprogress' },
    { id: 3, title: 'Desenvolvimento', description: 'Implementar features', status: 'inprogress' },
    { id: 4, title: 'Testing', description: 'QA e bug fixes', status: 'done' }
  ])

  const [newCard, setNewCard] = useState({ title: '', description: '', status: 'todo' })
  const [showModal, setShowModal] = useState(false)
  const [draggedCard, setDraggedCard] = useState(null)

  const columns = {
    todo: { title: '📋 A Fazer', color: '#f8f9fa' },
    inprogress: { title: '🔄 Em Progresso', color: '#fff3cd' },
    done: { title: '✅ Concluído', color: '#d4edda' }
  }

  const addCard = () => {
    if (newCard.title.trim()) {
      setCards([...cards, {
        id: Date.now(),
        title: newCard.title,
        description: newCard.description,
        status: newCard.status
      }])
      setNewCard({ title: '', description: '', status: 'todo' })
      setShowModal(false)
    }
  }

  const moveCard = (cardId, newStatus) => {
    setCards(cards.map(card =>
      card.id === cardId ? { ...card, status: newStatus } : card
    ))
  }

  const deleteCard = (cardId) => {
    setCards(cards.filter(card => card.id !== cardId))
  }

  const handleDragStart = (e, card) => {
    setDraggedCard(card)
    e.dataTransfer.effectAllowed = 'move'
    e.target.style.opacity = '0.5'
  }

  const handleDragEnd = (e) => {
    e.target.style.opacity = '1'
    setDraggedCard(null)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
  }

  const handleDrop = (e, status) => {
    e.preventDefault()
    if (draggedCard && draggedCard.status !== status) {
      moveCard(draggedCard.id, status)
    }
  }

  return (
    <div className="board">
      <header className="board-header">
        <h1>📊 Kanban Board</h1>
        <button className="add-card-btn" onClick={() => setShowModal(true)}>
          + Novo Card
        </button>
      </header>

      <div className="columns">
        {Object.entries(columns).map(([key, column]) => (
          <div
            key={key}
            className="column"
            style={{ backgroundColor: column.color }}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, key)}
          >
            <div className="column-header">
              <h2 className="column-title">{column.title}</h2>
              <span className="card-count">{cards.filter(c => c.status === key).length}</span>
            </div>
            <div className="cards">
              {cards.filter(card => card.status === key).map(card => (
                <div
                  key={card.id}
                  className="card"
                  draggable
                  onDragStart={(e) => handleDragStart(e, card)}
                  onDragEnd={handleDragEnd}
                >
                  <div className="card-content">
                    <h3 className="card-title">{card.title}</h3>
                    {card.description && (
                      <p className="card-description">{card.description}</p>
                    )}
                  </div>
                  <div className="card-footer">
                    <span className="drag-hint">⋮⋮</span>
                    <button
                      onClick={() => deleteCard(card.id)}
                      className="delete-btn"
                      title="Excluir"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Novo Card</h2>
            <input
              type="text"
              placeholder="Título"
              value={newCard.title}
              onChange={(e) => setNewCard({ ...newCard, title: e.target.value })}
              className="modal-input"
            />
            <textarea
              placeholder="Descrição (opcional)"
              value={newCard.description}
              onChange={(e) => setNewCard({ ...newCard, description: e.target.value })}
              className="modal-textarea"
            />
            <div className="modal-actions">
              <button onClick={() => setShowModal(false)} className="cancel-btn">Cancelar</button>
              <button onClick={addCard} className="confirm-btn">Criar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
