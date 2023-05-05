'use strict'

/*Реалізуй клас User. Під час створення екземпляру на базі цього класу, 
обʼєкт повинен мати вигляд {name: ‘Petro’, role: ‘admin’} (role може бути або admin або user). 
У разі невірно переданих даних такого об’єкта — попереджати за допомогою alert-у відповідне поле, яке введено некоректно.*/

class Admin {
    constructor(name, email, role) {
      this.name = name;
      this.email = email;
      this.role = role;
    }
  
    changeRole(role) {
      this.role = role;
    }
  }
  
  class UserList {
    constructor() {
      this.users = [];
    }
  
    addUser(name, email, role) {
      try {
        const user = new Admin(name, email, role); 
        this.users.push(user);
      } catch (error) {
        console.alert("Помилка при додаванні користувача:", error);
        alert("Невірні дані користувача!");
      }
    }
  
    removeUser(email) {
      try {
        this.users = this.users.filter((user) => user.email !== email);
      } catch (error) {
        console.alert("Помилка при видаленні користувача:", error);
        alert("Невірний email для видалення!");
      }
    }
  
    changeUserRole(email, role) {
      try {
        const user = this.users.find((user) => user.email === email);
        if (user) {
          user.changeRole(role);
        }
      } catch (error) {
        console.alert("Помилка при зміні ролі користувача:", error);
        alert("Невірні дані для зміни ролі користувача!");
      }
    }
  
    getAllUsers() {
      return this.users;
    }
  
    removeAllUsers() {
      this.users = [];
    }
  }
  
  const userList = new UserList();
  
  userList.addUser("Ivan", "ivan@example.com", "user");
  userList.addUser("Roman", "roman@example.com", "admin");
  
  console.log(userList.getAllUsers());

  

