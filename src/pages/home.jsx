import {useEffect, useState} from "react";
import '../App.css'
import {useAuth} from "../contexts/AuthContextProvider.jsx";
export const Home = () => {
  const { isAuthenticated, user } = useAuth();
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [editingId, setEditingId] = useState(null)
  const [editValue, setEditValue] = useState('')

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos')
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos))
    }
  }, [])

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: inputValue.trim(),
        completed: false,
        createdAt: new Date().toISOString()
      }
      setTodos([...todos, newTodo])
      setInputValue('')
    }
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const startEditing = (id, text) => {
    setEditingId(id)
    setEditValue(text)
  }

  const saveEdit = (id) => {
    if (editValue.trim() !== '') {
      setTodos(todos.map(todo =>
        todo.id === id ? { ...todo, text: editValue.trim() } : todo
      ))
    }
    setEditingId(null)
    setEditValue('')
  }

  const cancelEdit = () => {
    setEditingId(null)
    setEditValue('')
  }

  const handleKeyPress = (e, action, id = null) => {
    if (e.key === 'Enter') {
      if (action === 'add') {
        addTodo()
      } else if (action === 'edit') {
        saveEdit(id)
      }
    } else if (e.key === 'Escape' && action === 'edit') {
      cancelEdit()
    }
  }

  const filteredTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const completedCount = todos.filter(todo => todo.completed).length
  const totalCount = todos.length

  return (


    <div className="app">
      {isAuthenticated && (
        <div>
          <p style={{ color: 'green', margin: 0 }}>
            Logged in as: <strong>{user.name}</strong>
          </p>
        </div>
      )}

      <div className="container">
        <div className="header">
          <h1 className="title">
            <span className="title-icon">📝</span>
            Todo Master
          </h1>
          <div className="stats">
            <span className="stat-item">
              <span className="stat-number">{completedCount}</span>
              <span className="stat-label">Completed</span>
            </span>
            <span className="stat-divider">|</span>
            <span className="stat-item">
              <span className="stat-number">{totalCount}</span>
              <span className="stat-label">Total</span>
            </span>
          </div>
        </div>

        <div className="input-section">
          <div className="input-container">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => handleKeyPress(e, 'add')}
              placeholder="What needs to be done?"
              className="todo-input"
            />
            <button onClick={addTodo} className="add-button">
              <span className="add-icon">+</span>
            </button>
          </div>
        </div>

        <div className="search-section">
          <div className="search-container">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search tasks..."
              className="search-input"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="clear-search"
              >
                ×
              </button>
            )}
          </div>
        </div>

        <div className="todos-section">
          {filteredTodos.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">📋</div>
              <p className="empty-text">
                {todos.length === 0
                  ? "No tasks yet. Add your first task above!"
                  : "No tasks match your search."}
              </p>
            </div>
          ) : (
            <div className="todos-list">
              {filteredTodos.map((todo) => (
                <div
                  key={todo.id}
                  className={`todo-item ${todo.completed ? 'completed' : ''}`}
                >
                  <div className="todo-content">
                    <button
                      onClick={() => toggleComplete(todo.id)}
                      className={`complete-button ${todo.completed ? 'completed' : ''}`}
                    >
                      {todo.completed ? '✓' : '○'}
                    </button>

                    {editingId === todo.id ? (
                      <input
                        type="text"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        onKeyPress={(e) => handleKeyPress(e, 'edit', todo.id)}
                        onBlur={() => saveEdit(todo.id)}
                        className="edit-input"
                        autoFocus
                      />
                    ) : (
                      <span
                        className={`todo-text ${todo.completed ? 'completed' : ''}`}
                        onDoubleClick={() => startEditing(todo.id, todo.text)}
                      >
                        {todo.text}
                      </span>
                    )}
                  </div>

                  <div className="todo-actions">
                    {editingId === todo.id ? (
                      <>
                        <button
                          onClick={() => saveEdit(todo.id)}
                          className="action-button save"
                          title="Save"
                        >
                          ✓
                        </button>
                        <button
                          onClick={cancelEdit}
                          className="action-button cancel"
                          title="Cancel"
                        >
                          ×
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => startEditing(todo.id, todo.text)}
                          className="action-button edit"
                          title="Edit"
                        >
                          ✏️
                        </button>
                        <button
                          onClick={() => removeTodo(todo.id)}
                          className="action-button delete"
                          title="Delete"
                        >
                          🗑️
                        </button>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="footer">
          <p className="tip">
            💡 <strong>Tip:</strong> Double-click on any task to edit it quickly!
          </p>
        </div>
      </div>
    </div>
  )
}