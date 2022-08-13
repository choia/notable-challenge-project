import axios from "axios"

export async function getPhysicians() {
  const response = await axios.get(
    "https://my-json-server.typicode.com/choia/demo/physicians"
  )
  return response.data
}

export async function getPhysicianById(id) {
  const response = await axios.get(
    `https://my-json-server.typicode.com/choia/demo/physicians/${id}`
  )
  return response.data
}
