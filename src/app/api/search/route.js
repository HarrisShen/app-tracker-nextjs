import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';
import { NextResponse } from 'next/server';

let db = null;

export async function POST(req, res) {
    if (!db) {
        db = await open({
            filename: './instance/20230912-app_data.sqlite',
            driver: sqlite3.Database
        });
    }

    const { searchParams } = new URL(req.url);
    const query = searchParams.get('q');

    const items = await db.all('SELECT * FROM job_info WHERE company LIKE ?',
                               query);

    return NextResponse.json(items);
}