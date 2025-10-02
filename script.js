document.addEventListener('DOMContentLoaded', function() {
    const rsvpForm = document.getElementById('rsvpForm');
    
    if (rsvpForm) {
        rsvpForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const event = document.getElementById('event').value;
            const guests = document.getElementById('guests').value;
            const message = document.getElementById('message').value.trim();
            
            if (validateForm(name, email, event, guests)) {
                showThankYouMessage();
                rsvpForm.reset();
            }
        });
    }
});

function validateForm(name, email, event, guests) {
    let isValid = true;
    
    if (name === '') {
        alert('Please enter your name.');
        isValid = false;
    }
    
    if (email === '' || !isValidEmail(email)) {
        alert('Please enter a valid email address.');
        isValid = false;
    }
    
    if (event === '') {
        alert('Please select an event.');
        isValid = false;
    }
    
    if (guests === '' || guests < 1 || guests > 10) {
        alert('Please enter a valid number of guests (1-10).');
        isValid = false;
    }
    
    return isValid;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showThankYouMessage() {
    alert('Thank you for your RSVP! We look forward to seeing you at the event.');
}

const coffeeOrigins = {
    ethiopia: {
        region: 'Sidamo',
        altitude: '1500-2000m',
        harvest: 'October-December'
    },
    colombia: {
        region: 'Huila',
        altitude: '1200-1800m',
        harvest: 'March-June'
    },
    guatemala: {
        region: 'Antigua',
        altitude: '1500-1700m',
        harvest: 'December-March'
    }
};

function displayOriginInfo(origin) {
    const info = coffeeOrigins[origin];
    if (info) {
        console.log(`${origin}: ${info.region} region, ${info.altitude} altitude, harvested ${info.harvest}`);
    }
}

const menuItems = [
    { name: 'Espresso', price: 3.50, category: 'coffee' },
    { name: 'Americano', price: 4.00, category: 'coffee' },
    { name: 'Latte', price: 5.50, category: 'coffee' },
    { name: 'Croissant', price: 3.50, category: 'pastry' },
    { name: 'Muffin', price: 3.00, category: 'pastry' }
];

function getMenuByCategory(category) {
    return menuItems.filter(item => item.category === category);
}

class CoffeeShop {
    constructor(name, location, hours) {
        this.name = name;
        this.location = location;
        this.hours = hours;
    }
    
    getInfo() {
        return `${this.name} is located at ${this.location} and is open ${this.hours}`;
    }
}

const kindlevanCafe = new CoffeeShop('Kindlevan Café', '123 Main Street', '6 AM - 8 PM daily');
