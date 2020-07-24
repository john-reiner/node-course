const event = {
    name: 'Birthday Party',
    guestList: ['John', 'Andrew', 'Jess'],
    printGuestList() {
        console.log('guest list for ' + this.name)
        this.guestList.forEach(guest => console.log(`${guest} is attending ${this.name}`));
    }

}

event.printGuestList()