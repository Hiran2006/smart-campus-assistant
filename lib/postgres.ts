import { Pool } from 'pg'

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: parseInt(process.env.POSTGRES_PORT || '5432'),
})

export async function query(text: string, params?: any[]) {
  const client = await pool.connect()
  try {
    const res = await client.query(text, params)
    return res
  } finally {
    client.release()
  }
}

export async function execute(text: string, params?: any[]) {
  const client = await pool.connect()
  try {
    await client.query(text, params)
  } finally {
    client.release()
  }
}

// Test connection
try {
  await pool.query('SELECT NOW()')
  console.log('Connected to PostgreSQL')
} catch (err) {
  console.error('Error connecting to PostgreSQL:', err)
}
