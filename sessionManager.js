const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./user_data.db');

db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS sessions (id TEXT PRIMARY KEY, session TEXT)');
});

const getSession = (id) => {
  return new Promise((resolve, reject) => {
    db.get('SELECT session FROM sessions WHERE id = ?', [id], (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row ? JSON.parse(row.session) : {});
      }
    });
  });
};

const saveSession = (id, session) => {
  return new Promise((resolve, reject) => {
    db.run('REPLACE INTO sessions (id, session) VALUES (?, ?)', [id, JSON.stringify(session)], (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

module.exports = {
  getSession,
  saveSession
};
