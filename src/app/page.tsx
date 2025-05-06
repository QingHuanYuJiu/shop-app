import { neon } from '@neondatabase/serverless'
const sql = neon(`${process.env.DATABASE_URL}`)

export default async function Page() {
    const result = await sql`SELECT * FROM users`
    return (
        <div>
            {result.map((user) => (
                <li key={user.id}>{user.username}</li>
            ))}
        </div>
    )
}
