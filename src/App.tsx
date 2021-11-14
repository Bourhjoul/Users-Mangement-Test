import React, { useState } from "react"
import "./App.css"
import "antd/dist/antd.css"
import { UsersTable } from "./Components/Table"
import Theme from "./styles/Theme"
import { Button } from "antd"
const initialUsers = [
  {
    id: "123456789",
    createdDate: "2021-01-06T00:00:00.000Z",
    status: "En validation",
    firstName: "Mohamed",
    lastName: "Taha",
    userName: "mtaha",
    registrationNumber: 2584,
  },
  {
    id: "987654321",
    createdDate: "2021-07-25T00:00:00.000Z",
    status: "Validé",
    firstName: "Hamid",
    lastName: "Orrich",
    userName: "horrich",
    registrationNumber: 1594,
  },
  {
    id: "852963741",
    createdDate: "2021-09-15T00:00:00.000Z",
    status: "Rejeté",
    firstName: "Rachid",
    lastName: "Mahidi",
    userName: "rmahidi",
    registrationNumber: 3576,
  },
]

function App() {
  const [users, updateUsers] = useState(initialUsers)
  const [showModel, setShowModel] = useState(false)

  return (
    <Theme>
      <UsersTable users={users} updateUsers={updateUsers} />
      <div style={{ textAlign: "right", width: "90%" }}>
        <Button
          onClick={() => {
            setShowModel(true)
          }}
        >
          Ajouter L'utilisateur
        </Button>
      </div>
    </Theme>
  )
}

export default App
