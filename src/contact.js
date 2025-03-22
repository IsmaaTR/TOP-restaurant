export const contactModule = (function () {
    const contentDiv = document.querySelector('#content');
    const contacts = [
        {name: 'Torroni', role: 'Boss', email: 'torroni@realmail.com', phone: '555 55 55 55'},
        {name: 'Mario', role: 'Chef', email: 'mario@realmail.com', phone: '555 55 55 55'},
        {name: 'Luigi', role: 'Co-Owner', email: 'luigi@realmail.com', phone: '555 55 55 55'}
    ];

    function init() {
        const title = document.createElement('h1');
        title.innerText = 'Contact us';
        contentDiv.appendChild(title);

        const contactDiv = document.createElement('div');
        contactDiv.id = 'contact';
        contacts.forEach(contact => {
            const contactItem = document.createElement('div');
            contactItem.classList.add('contact-item');
            const contactName = document.createElement('p');
            contactName.innerText = `Name: ${contact.name}`;
            const contactRole = document.createElement('p');
            contactRole.innerText = `Role: ${contact.role}`;
            const contactEmail = document.createElement('p');
            contactEmail.innerText = `Email: ${contact.email}`;
            const contactPhone = document.createElement('p');
            contactPhone.innerText = `Phone: ${contact.phone}`;

            contactItem.appendChild(contactName);
            contactItem.appendChild(contactRole);
            contactItem.appendChild(contactEmail);
            contactItem.appendChild(contactPhone);

            contactDiv.appendChild(contactItem);
        });
        contentDiv.appendChild(contactDiv);
    }

    return { init };
})();