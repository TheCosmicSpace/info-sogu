function getStartTemplate() {
  return `
  <header class="flex justify-between items-center">
          <h1 class="text-3xl font-bold">Введение</h1>
          <div class="flex justify-center items-baseline flex-wrap">
            <div class="flex m-2">
              <a
                href="https://soguwebinar.ru"
                target="_blank"
                class="mr-5 text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-blue-700 hover:text-blue-100 bg-blue-100 text-blue-700 border duration-200 ease-in-out border-blue-600 transition"
              >
                <div class="flex leading-5">Перейти на soguwebinar.ru</div>
              </a>
              <button
              onclick="headerNavigation(REGISTRATION)"
                class="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-blue-200 hover:text-blue-700 hover:border-blue-600 border-gray-600 bg-gray-100 text-gray-700 border duration-200 ease-in-out transition"
              >
                <div class="flex leading-5">
                  Следующий урок
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-chevron-right w-5 h-5 ml-1"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </header>

        <div class="border-b-2 w-full border-solid my-7"></div>
        <h3 class="mb-3 text-2xl">
          Всем привет! Это видео курсы по использованию онлайн площадкой
          <a class="text-blue-500" href="https://soguwebinar.ru" target="_blank"
            ><span class="font-bold">soguwebinar.ru </span></a
          ><br />
        </h3>
        <p class="text-xl">
          Самое главное - площадка абсолютно бесплатна, нет никаких ограничений
          по времени провидения мероприятия и по количеству онлайн подключений
        </p>
`;
}
