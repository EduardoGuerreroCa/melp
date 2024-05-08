import pg from 'pg'

export const pool = new pg.Pool({
    user: "postgres",
    host: "localhost",
    password: "12345",
    database: "melprestdb",
    port: 5432
})
