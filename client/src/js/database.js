import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('POST request to the database');
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.add({ todo: content });
  const result = await request;
  //add if condition to display proper message of error or success
  if (!result) {
    console.error('putDb not implemented');
  } else {
    console.log('Success! Data was saved to the database. Data: ', result);
  }
  
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('GET request all from the database');
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const request = store.getAll();
  const result = await request;
  // if condition to provide proper message of error or success
  if (!result) {
    console.error('getDb not implemented');
  } else {
    console.log('Success! Data was pulled from the database. Data: ', result);
  }
  
  //then return the result
  return result;
};

initdb();
