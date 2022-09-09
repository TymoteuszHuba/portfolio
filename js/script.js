// deklaracja zmiennych stałych i pobranie ich wratości
const navItems = document.querySelector('.nav-items')
const burgerIcon = document.querySelector('.burger-icon')
const navOption = document.querySelectorAll('.nav-option')

// funkcja strzałkowa odpowiedzialna za uruchamianie wyjeżdżanego menu z przycisku burger-icon dla małych ekranów
const handleNavBurger = () =>
{

    // ustawiamy toggle - przełącznik na nav-items, jeśli klasa nav-items posiada klasę burger-active to usuwa ją jeśli nie posiada to dodaje ją
    navItems.classList.toggle('burger-active')

    // pętla forEach przechodząca przez wszystkie elementy menu
    navOption.forEach(item => 
    {
        // dla każdego elementu ustawiamy nasłuchiwanie na klik, jeśli się pojawi to
        item.addEventListener('click', () =>
        {
            // usuń z każdego elementu klasy klasę burger-active
            navItems.classList.remove('burger-active')
        })
    })

    // wywołanie funkcji odpowiedzialnej za ainimację pojedynczych przycisków menu
    navOptionsAnimation();
}

// funkcja animująca pojedyncze przyciski z menu
const navOptionsAnimation = () =>
{
    // stworzenie zmiennej delayTime i przypisanie wartości 0
    let delayTime = 0;

    // dla każdego elementu menu (navOption)
    navOption.forEach(item => 
    {
        // ustawiamy przełącznik i sprawdzamy czy jest dodana klasa (nav-options-animation) jeśli jest usuwa ją jeśli nie, dodaje
        item.classList.toggle('nav-options-animation')

        // dodanie stylu dla każdego elementu nawigacji animationDelay opóźniającą każdy kolejny element
        item.style.animationDelay = '.' + delayTime + 's';
        delayTime++;
    })

    // zagnieżdżona funkcja resetująca ustawienia animacji przycisków z każdym kliknięciem
    // dla każdego elementu nawigacji
    navOption.forEach(item =>
    {
        // ustawiamy nasłuchiwanie na kliknięcie, jeśli nastąpi wywołujemy zawartość ()
        item.addEventListener('click', () =>
        {
            // przechodzimy ponownie po wszystkich elementach nawigacji
            navOption.forEach(item =>
            {
                // i usuwamy klasę nav-options-animation resetującą animacje
                item.classList.remove('nav-options-animation')
            })
        })
    })

    
}

// wywołanie funkcji hadnleNavBurger na przycisku burger-icon
// przycisk otrzymuje nasłuchiwanie addEventListener na click, jeśli klik nastąpi uruchamia funkcję
burgerIcon.addEventListener('click', handleNavBurger)
