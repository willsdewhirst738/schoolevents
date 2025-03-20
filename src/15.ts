import { createClient } from 'supersql'

const client = createClient({
  database: "schoolevents",
  server: process.env.MONGOLAB_URI,
})

export default async function () {
  await client.connect()
}
