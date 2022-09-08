/**
 * Написати клас Modal, за допомогою якого створити 2 об'єкта
 * модальних вікон: loginModal та signUpModal
 *
 * * loginModal має наступні параметри:
 * id - 'login-modal'
 * text - 'Ви успішно увійшли'
 * classList - 'modal login-modal'
 *
 * signUpModal має наступні параметри:
 * id - 'sign-up-modal'
 * text - 'Реєстрація'
 * classList - 'modal sign-up-modal'
 *
 * Кожне модальне вікно обов'язково має наступні методи:
 * - render() - генерує html код модального вікна
 * - open() - показує модальне вікно
 * - close() - закриває модальне вікно
 *
 * - За допомогою методу redner() додати html код
 * модальних вікок в кінець body
 * - При натисканні на кнопку Login за допомогою методу openModal
 * відкривати модальне вікно loginModal
 * - При натисканні на кнопку Sign Up за допомогою методу openModal
 * відкривати модальне вікно signUpModal
 *
 */

class Modal {
    constructor(id, text, classList) {
        this.id = id;
        this.text = text;
        this.classList= classList;
        
        this.modal = null;
    }

    render() {
        const modal = document.createElement("div");
        modal.className = this.classList;
        document.body.append(modal);

        const modalContent = document.createElement("div");
        modalContent.className = "modal-content";
        modalContent.innerHTML = this.text;
        modal.append(modalContent);

        const closeButton = document.createElement("div");
        closeButton.className = "close";
        closeButton.innerHTML = "x";
        modal.append(closeButton);
        this.modal = modal;
    }

    open() {
        this.modal.className = "modal.active";
        this.modal.querySelector(".close").addEventListener("click", this.close.bind(this));
    }
    close() {
        this.modal.className = "modal";
        this.modal.querySelector(".close").removeEventListener("click", this.close.bind(this));

    }
}

const loginModal = new Modal(
    "login-modal", 
    "Ви успішно увійшли", 
    "modal login-modal"
);

const signUpModal = new Modal(
    "sign-up-modal", 
    "Реєстрація", 
    "modal sign-up-modal"
);

loginModal.render();
signUpModal.render();

document.querySelector("#login-btn")
    .addEventListener("click", loginModal.open.bind(loginModal));

document.querySelector("#sign-up-btn")
    .addEventListener("click", signUpModal.open.bind(signUpModal));