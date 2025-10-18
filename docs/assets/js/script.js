document.addEventListener('DOMContentLoaded', () => {
            const hourHand = document.getElementById('hour');
            const minuteHand = document.getElementById('minute');
            const secondHand = document.getElementById('second');

            // The main animation loop function
            function animateClock() {
                const now = new Date();
                
                // Get fractional time components for smooth movement
                const milliseconds = now.getMilliseconds();
                const seconds = now.getSeconds() + milliseconds / 1000;
                const minutes = now.getMinutes() + seconds / 60;
                const hours = now.getHours() + minutes / 60;

                // --- Calculate rotation in degrees ---
                // 360 degrees in a circle / 60 seconds (or minutes) = 6 degrees per unit
                // 360 degrees in a circle / 12 hours = 30 degrees per hour
                const secondsRotation = seconds * 6;
                const minutesRotation = minutes * 6;
                const hoursRotation = hours * 30;

                // --- Apply the precise CSS transform ---
                secondHand.style.transform = `rotate(${secondsRotation}deg)`;
                minuteHand.style.transform = `rotate(${minutesRotation}deg)`;
                hourHand.style.transform = `rotate(${hoursRotation}deg)`;

                // Request the next frame to continue the animation loop
                requestAnimationFrame(animateClock);
            }

            // Start the animation loop
            requestAnimationFrame(animateClock);
        });