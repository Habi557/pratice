// Import the ReplitDB module
import Database from '@replit/database';

// Create a new instance of the ReplitDB
const db = new Database();

// Set a key-value pair in the database
db.set(1, 100)
  .then(() => {
    console.log('Data set successfully');
  })
  .catch((error) => {
    console.error('Error setting data:', error);
  });

// Get the value for a key from the database
db.get(1)
  .then((value) => {
    console.log('Retrieved value:', value);
  })
  .catch((error) => {
    console.error('Error getting data:', error);
  });

// Delete a key from the database
// db.delete('key1')
//   .then(() => {
//     console.log('Key deleted successfully');
//   })
//   .catch((error) => {
//     console.error('Error deleting data:', error);
//   });