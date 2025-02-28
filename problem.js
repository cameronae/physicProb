 const a = Math.floor(Math.random() * (200 - 100 + 1)) + 100; // Random number between 5 and 15
        const b = Math.floor(Math.random() * (70 - 30 + 1)) + 30; // Random number between 3 and 5
        const radians = b * (Math.PI / 180);
        // Display random values for a and b
        document.getElementById('velo').textContent = a;
        document.getElementById('theta').textContent = b;
