import React, { useState, useEffect } from "react"
import { getPhysicianById } from "../api/physicians"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import { Tab } from "@mui/material"

const AppointmentList = ({ id }) => {
  const [appointmentLists, setAppointmentLists] = useState(null)

  const fetchAppointments = async (id) => {
    try {
      const response = await getPhysicianById(id)
      console.log(response.appointments)
      setAppointmentLists(response)
    } catch (e) {
      throw new Error(e)
    }
  }

  useEffect(() => {
    fetchAppointments(id)
  }, [id])

  if (!appointmentLists) return null
  const { firstname, lastname, email, appointments } = appointmentLists

  return (
    <div>
      <h2>
        DR {firstname} {lastname}
      </h2>
      <p>{email}</p>
      <TableContainer>
        <Table sx={{ width: 400 }}>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Kind</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
      <TableBody>
        {appointments &&
          appointments.map((appointment) => (
            <TableRow key={appointment.id}>
              <TableCell component="th" scope="row">
                {appointment.id}
              </TableCell>
              <TableCell>{appointment.name}</TableCell>
              <TableCell>{appointment.time}</TableCell>
              <TableCell>{appointment.kind}</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </div>
  )
}

export default AppointmentList
