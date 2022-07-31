// Variables for HTML Elements
const $contacts = document.getElementById('contacts')


const $modal = document.getElementById('modal')
const $closeBtn = document.getElementById('closeBtn')


const $fnamelbl = document.getElementById('fnamelbl')
const $lnamelbl = document.getElementById('lnamelbl')
const $emaillbl = document.getElementById('emaillbl')
const $citylbl = document.getElementById('citylbl')
const $provincelbl = document.getElementById('provincelbl')


const $form = document.getElementById('form')

const contactsArray = [
    {
        'first name': 'Jashandeep',
        'last name': 'Singh',
        email: 'sing1556@algonquinlive.com',
        city: 'Ottawa',
        province: 'Ontario'
    },

    {
        'first name': 'Vani',
        'last name': 'Dhir',
        email: 'dhir2277@algonquinlive.com',
        city: 'Ottawa',
        province: 'Ontario'
    },

    {
        'first name': 'Parminder',
        'last name': 'Singh',
        email: 'sing1542@algonquinlive.com',
        city: 'Ottawa',
        province: 'Ontario'
    },
]

renderContacts()

function renderContacts() {
    // show contacts on page
    // Create an empty array which will later contain the HTML markup
    const contactsDisplayArray = []

    for (const contact of contactsArray) {
        contactsDisplayArray.push(`
        <li class="contact-item">
            <a href="#" class="contact-name" 
            data-fname="${contact['first name']}"
            data-lname="${contact['last name']}"
            data-email="${contact['email']}"
            data-city="${contact['city']}"
            data-province="${contact['province']}">
                <h2> ${contact['first name']} ${contact['last name']} </h2>
            </a>
        </li>
        `)
        }

    // Add the elements inside the gallery array into the div#gallery using the innerHTML prop
    $contacts.innerHTML = '<h1>All contacts</h1>'
    $contacts.innerHTML += contactsDisplayArray.join('')
}



function renderContactsFromStorage() {

}

function addContact() {
    // Read from form, take values and add them into the contats array
const $fname = document.getElementById('fname')
const $lname = document.getElementById('lname')
const $email = document.getElementById('email')
const $city = document.getElementById('city')
const $province = document.getElementById('province')




    let newContact = {
        'first name': $fname.value,
        'last name': $lname.value,
        'email name': $email.value,
        'city name': $city.value,
        'province name': $province.value
    }

    console.log(newContact)
// Add the new contact into the contactsArray
    contactsArray.push(newContact)

    console.log(contactsArray)

}

function addToLocalStorage() {
    // SetItem
}

function getFromLocalStorage() {
    // return
}

// ---------------EVENT LISTENERS-------------------

$contacts.addEventListener('click', function(e){
    const element = e.target.closest('.contact-name')
    const $fnamelbl = document.getElementById('fnamelbl')
    const $lnamelbl = document.getElementById('lnamelbl')
    const $emaillbl = document.getElementById('emaillbl')
    const $citylbl = document.getElementById('citylbl')
    const $provincelbl = document.getElementById('provincelbl')



    if (element) {
       $fnamelbl.innerHTML = element.dataset.fname
       $lnamelbl.innerHTML = element.dataset.lname
       $emaillbl.innerHTML = element.dataset.email
       $citylbl.innerHTML = element.dataset.city
       $provincelbl.innerHTML = element.dataset.province

    }

    $modal.classList.toggle('show') 

})


// Add an event listener on the close buttin of the modal to close it 

$closeBtn.addEventListener('click', function(){
    console.log('close button clicked')

    $modal.classList.toggle('show')
})

// Add an event listener on the form submit

$form.addEventListener('submit', function(e){
    // Stops page from refreshing  
    e.preventDefault()
    addContact()
    renderContacts()

})