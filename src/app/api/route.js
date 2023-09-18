import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';

let db = null;

export async function GET(req, res) {
    if (!db) {
        db = await open({
            filename: './instance/20230912-app_data.sqlite',
            driver: sqlite3.Database
        });
    }

    const items = await db.all('SELECT * FROM job_info');

    return new Response(JSON.stringify(items), {
        headers: {
            'content-type': 'application/json'
        },
        status: 200
    });
}