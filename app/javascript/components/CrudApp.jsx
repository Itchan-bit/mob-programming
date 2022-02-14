// app/javascript/packs/components/TodoApp.jsx
import React from 'react'
import ReactDOM from 'react-dom'

class CrudApp extends React.Component {
  render() {
    return (
    <>
       <h1>Chupapi</h1>
    </>
    )
  }
}

document.addEventListener('turbolinks:load', () => {
  const app = document.getElementById('crud-app')
  app && ReactDOM.render(<CrudApp />, app)
})