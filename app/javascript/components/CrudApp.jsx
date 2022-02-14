// app/javascript/packs/components/TodoApp.jsx
import React from 'react'
import ReactDOM from 'react-dom'
import Header from './navigation/Header'

class CrudApp extends React.Component {
  render() {
    return (
    <>
      <Header></Header>
    </>
    )
  }
}

document.addEventListener('turbolinks:load', () => {
  const app = document.getElementById('crud-app')
  app && ReactDOM.render(<CrudApp />, app)
})