import React, { useState, useEffect } from "react"
import AppointmentList from "./AppointmentList"
import { getPhysicians } from "../api/physicians"
import Button from "@mui/material/Button"

const PhysiciansList = () => {
  const [physicians, setPhysicians] = useState(null)
  const [physicianId, setPhysicianId] = useState(null)

  const fetchPhysicians = async () => {
    try {
      const response = await getPhysicians()
      setPhysicians(response)
    } catch (e) {
      throw new Error(e)
    }
  }

  useEffect(() => {
    fetchPhysicians()
  }, [])

  return (
    <div className="top-container">
      <div className="physician-container">
        <h2 className="title">notable</h2>
        <h4>
          <b>PHYSICIANS</b>
        </h4>
        <ul>
          {physicians &&
            physicians.map((physician) => (
              <li
                key={physician.id}
                onClick={() => setPhysicianId(physician.id)}
                style={{ cursor: "pointer" }}
              >
                {physician.lastname}, {physician.firstname}
              </li>
            ))}
        </ul>
        <Button variant="contained">Logout</Button>
      </div>
      <div className="appointment-container">
        {physicianId && <AppointmentList id={physicianId} />}
      </div>
    </div>
  )
}

export default PhysiciansList
