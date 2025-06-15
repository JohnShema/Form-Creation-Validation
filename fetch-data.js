// fetch-data.js
document.addEventListener('DOMContentLoaded', async function() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    async function fetchUserData() {
        try {
            // Show loading state
            dataContainer.textContent = 'Loading user data...';

            // Fetch data
            const response = await fetch(apiUrl);
            
            // Check if response is OK
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const users = await response.json();
            
            // Clear container
            dataContainer.innerHTML = '';
            
            // Create and populate user list
            if (users.length > 0) {
                const userList = document.createElement('ul');
                
                users.forEach(user => {
                    const listItem = document.createElement('li');
                    listItem.textContent = user.name;
                    userList.appendChild(listItem);
                });
                
                dataContainer.appendChild(userList);
            } else {
                dataContainer.textContent = 'No users found.';
            }
            
        } catch (error) {
            console.error('Fetch error:', error);
            dataContainer.textContent = 'Failed to load user data.';
        }
    }

    // Initial fetch
    await fetchUserData();
});