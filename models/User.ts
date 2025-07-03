import { query } from '@/lib/postgres'

export interface User {
  id: number
  name: string
  email: string
  picture: string
  auth_provider: 'local' | 'google'
  hash_password: string
  class_id: string
  created_at: Date
  updated_at: Date
}

export async function getUserByEmail(email: string): Promise<User | null> {
  const result = await query(
    'SELECT * FROM users WHERE email = $1',
    [email]
  )
  return result.rows[0] || null
}

export async function createUser(userData: {
  name: string,
  email: string,
  picture: string,
  auth_provider: 'local' | 'google',
  class_id: string,
  hash_password?: string
}): Promise<User> {
  const { name, email, picture, auth_provider, class_id, hash_password } = userData
  
  const result = await query(
    'INSERT INTO users (name, email, picture, auth_provider, class_id, hash_password, created_at) VALUES ($1, $2, $3, $4, $5, $6, NOW()) RETURNING *',
    [name, email, picture, auth_provider, class_id, hash_password]
  )
  return result.rows[0]
}

export async function getUserClasses(): Promise<string[]> {
  const result = await query('SELECT DISTINCT class_id FROM users')
  return result.rows.map(row => row.class_id)
}

export async function updateUser(userId: number, updates: Partial<User>): Promise<User | null> {
  const setClause = Object.entries(updates)
    .filter(([key]) => key !== 'id')
    .map(([key]) => `${key} = $${Number(key) + 1}`)
    .join(', ')

  const values = Object.values(updates)
  const result = await query(
    `UPDATE users SET ${setClause}, updated_at = NOW() WHERE id = $${values.length + 1} RETURNING *`,
    [...Object.values(updates), userId]
  )
  return result.rows[0] || null
}
