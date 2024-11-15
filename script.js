document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalInfo = document.getElementById('modal-info');
    const closeModal = document.querySelector('.close');
    const viewMoreButton = document.querySelector('.view-more');

    // Обработчик событий для кнопок "Подробнее"
    document.querySelectorAll('.show-details').forEach(button => {
        button.addEventListener('click', (event) => {
            const productName = event.target.parentElement.querySelector('h3').innerText;
            const productPrice = event.target.parentElement.querySelector('p').innerText;

            // Заполнение модального окна информацией о продукте
            modalInfo.innerHTML = `
                <h2>${productName}</h2>
                <p>Цена: ${productPrice}</p>
                <button class="close">Закрыть</button>
            `;
            modal.style.display = 'flex'; // Отображаем модальное окно
        });
    });

    // Закрытие модального окна
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Закрытие модального окна при клике вне его
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Прокрутка для анимации появления элементов
    const scrollAnimations = document.querySelectorAll('.scroll-animation');

    const handleScroll = () => {
        const triggerBottom = window.innerHeight / 5 * 4;

        scrollAnimations.forEach(animation => {
            const boxTop = animation.getBoundingClientRect().top;

            if (boxTop < triggerBottom) {
                animation.classList.add('visible');
            } else {
                animation.classList.remove('visible');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Запускаем функцию при загрузке страницы, чтобы отобразить уже видимые элементы

    // Пример добавления товара в корзину
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            alert('Товар добавлен в корзину!');
            // Логика добавления товара в корзину
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalInfo = document.getElementById('modal-info');
    const closeModal = document.querySelector('.close');
    const notification = document.getElementById('notification');
    const cartCount = document.querySelector('.cart-count');

    let itemCount = 0; // Счетчик товаров в корзине

    // Обработчик событий для кнопок "Подробнее"
    document.querySelectorAll('.show-details').forEach(button => {
        button.addEventListener('click', (event) => {
            const productName = event.target.parentElement.querySelector('h3').innerText;
            const productPrice = event.target.parentElement.querySelector('p').innerText;

            // Заполнение модального окна информацией о продукте
            modalInfo.innerHTML = `
                <h2>${productName}</h2>
                <p>Цена: ${productPrice}</p>
                <button class="close">Закрыть</button>
            `;
            modal.style.display = 'flex'; // Отображаем модальное окно
        });
    });

    // Закрытие модального окна
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Закрытие модального окна при клике вне его
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Прокрутка для анимации появления элементов
    const scrollAnimations = document.querySelectorAll('.scroll-animation');

    const handleScroll = () => {
        const triggerBottom = window.innerHeight / 5 * 4;

        scrollAnimations.forEach(animation => {
            const boxTop = animation.getBoundingClientRect().top;

            if (boxTop < triggerBottom) {
                animation.classList.add('visible');
            } else {
                animation.classList.remove('visible');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Запускаем функцию при загрузке страницы, чтобы отобразить уже видимые элементы

    // Пример добавления товара в корзину
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            itemCount++; // Увеличиваем счетчик товаров
            cartCount.innerText = itemCount; // Обновляем отображаемое количество товаров

            // Показ уведомления
            notification.classList.add('visible');
            notification.classList.remove('hidden');

            // Убираем уведомление через 3 секунды
            setTimeout(() => {
                notification.classList.remove('visible');
                notification.classList.add('hidden');
            }, 3000);
        });
    });
});


// Обработчик событий для кнопок "Подробнее"
document.querySelectorAll('.show-details').forEach(button => {
    button.addEventListener('click', (event) => {
        const productName = event.target.parentElement.querySelector('h3').innerText;
        const productPrice = event.target.parentElement.querySelector('p').innerText;

        // Заполнение модального окна информацией о продукте
        modalInfo.innerHTML = `
            <h2>${productName}</h2>
            <p>Цена: ${productPrice}</p>
            <button class="close">Закрыть</button>
        `;
        modal.style.display = 'flex'; // Отображаем модальное окно
    });
});

// Закрытие модального окна
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Закрытие модального окна при клике вне его
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Прокрутка для анимации появления элементов
const scrollAnimations = document.querySelectorAll('.scroll-animation');

const handleScroll = () => {
    const triggerBottom = window.innerHeight / 5 * 4;

    scrollAnimations.forEach(animation => {
        const boxTop = animation.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            animation.classList.add('visible');
        } else {
            animation.classList.remove('visible');
        }
    });
};

window.addEventListener('scroll', handleScroll);
handleScroll(); // Запускаем функцию при загрузке страницы, чтобы отобразить уже видимые элементы

// Пример добавления товара в корзину
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        alert('Товар добавлен в корзину!');
        // Логика добавления товара в корзину
    });
});


document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});



