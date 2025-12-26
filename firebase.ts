import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get, set, runTransaction } from 'firebase/database';

// Your web app's Firebase configuration
// Replace these with your actual Firebase project credentials
const firebaseConfig = {
  apiKey: "AIzaSyDVN2Y3MO4PlurJ2EOfEWTDjLqv-Pqmd7A",
  authDomain: "arken-ccaf1.firebaseapp.com",
  databaseURL: "https://arken-ccaf1-default-rtdb.firebaseio.com",
  projectId: "arken-ccaf1",
  storageBucket: "arken-ccaf1.firebasestorage.app",
  messagingSenderId: "766251649858",
  appId: "1:766251649858:web:889b65222c4b0352b356db",
  measurementId: "G-DQ1G9SSFXE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the database service
export const database = getDatabase(app);

// Function to get the current download count
export const getDownloadCount = async (): Promise<number> => {
  try {
    const countRef = ref(database, 'downloads/count');
    const snapshot = await get(countRef);
    return snapshot.val() || 0;
  } catch (error) {
    console.error('Error fetching download count:', error);
    return 0;
  }
};

// Function to increment the download count
export const incrementDownloadCount = async (): Promise<number> => {
  try {
    const countRef = ref(database, 'downloads/count');
    let newCount = 0;
    
    await runTransaction(countRef, (currentCount) => {
      newCount = (currentCount || 0) + 1;
      return newCount;
    });
    
    return newCount;
  } catch (error) {
    console.error('Error incrementing download count:', error);
    return 0;
  }
};

// Initialize the counter if it doesn't exist
export const initializeCounter = async () => {
  try {
    const countRef = ref(database, 'downloads/count');
    const snapshot = await get(countRef);
    if (!snapshot.exists()) {
      await set(countRef, 0);
    }
  } catch (error) {
    console.error('Error initializing counter:', error);
  }
};
