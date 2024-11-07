class User {
    constructor(name) {
        this.name = name
        this.isloggedIn = false
    }

    login() {
        this.isloggedIn = true
        console.log(`${this.name}, вошел в систему`)
    }

    logout() {
        this.isloggedIn = false
        console.log(`${this.name}, вышел из системы`)
    }
}
const user = new User('Antoha')
user.login();   // Alex вошёл в систему.
user.logout();  // Alex вышел из системы.

class Admin extends User {
    deleteUser(user) {
        console.log(`Администратор ${this.name} удаляет пользователя ${user.name}`)
    }
}

const admin = new Admin('Yarik')
admin.login()
admin.deleteUser(user)
