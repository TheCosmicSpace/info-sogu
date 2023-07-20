function getForInvitedTemplate() {
  return `
    <header class="flex justify-between items-center">
          <h1 class="text-3xl font-bold">Для приглашенных</h1>
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
                onclick="headerNavigation(CREATE_ROOM)"
                class="text-base rounded-r-none hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-blue-200 hover:text-blue-700 hover:border-blue-600 border-gray-600 bg-gray-100 text-gray-700 border duration-200 ease-in-out transition"
              >
                <div class="flex leading-5">
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
                    class="feather feather-chevron-left w-5 h-5"
                  >
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                  Предыдущий урок
                </div>
              </button>
              <button
                onclick="headerNavigation(PRESENTATION)"
                class="text-base rounded-l-none hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-blue-200 hover:text-blue-700 hover:border-blue-600 border-gray-600 bg-gray-100 text-gray-700 border duration-200 ease-in-out transition"
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
        <div class="border-b-2 border-solid my-7"></div>
        <h3 class="mb-3 text-2xl">Видео инструкция</h3>
        <div class="relative">
          <video
            class="inset-0 rounded sm:max-w-full md:max-w-full lg:w-4/6 media-min-width"
            src="./img/forInvited/video.mov"
            controls
          ></video>
        </div>
        <div class="border-b-2 border-solid my-4 mt-7"></div>
        <h3 class="mb-3 text-2xl">Текстовая инструкция</h3>

        <!-- Способы -->
        <div
          class="w-fit p-4 mt-2 bg-white border-2 border-dashed rounded shadow-sm"
        >
          <!-- Шаги -->
          <div class="sm:max-w-xl md:max-w-full lg:max-w-screen-xl w-fit">
            <div>
              <div class="lg:pr-16">
                <div class="flex">
                  <div class="flex flex-col items-center mr-4">
                    <div>
                      <div
                        class="flex items-center justify-center w-7 h-7 border rounded-full"
                      >
                        <svg
                          class="w-3 text-gray-600"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <line
                            fill="none"
                            stroke-miterlimit="10"
                            x1="12"
                            y1="2"
                            x2="12"
                            y2="22"
                          ></line>
                          <polyline
                            fill="none"
                            stroke-miterlimit="10"
                            points="19,15 12,22 5,15"
                          ></polyline>
                        </svg>
                      </div>
                    </div>
                    <div class="w-px h-full bg-gray-300"></div>
                  </div>
                  <div class="pb-8">
                    <!-- <p class="mb-2 text-lg font-bold">Шаг 1</p> -->
                    <p class="text-gray-700 mb-2 text-xl">
                      Получив ссылку на подключения, переходим по ней,
                      желательно подключатся через
                      <a
                        class="text-blue-500"
                        target="_blank"
                        href="https://www.google.com/intl/ru_ru/chrome/"
                        ><span class="font-bold">Google Chrome</span></a
                      >, перед вами откроется страница аутентификации
                    </p>
                    <p class="text-gray-700 mb-2 text-xl">
                      Заполняем обязательные поля и нажимаем "Присоединиться к
                      встрече"
                    </p>
                    <div class="relative">
                      <img
                        class="inset-0 object-contain object-center rounded sm:max-w-full md:max-w-full lg:w-4/6 media-min-width"
                        src="./img/forInvited/one.png"
                      />
                    </div>
                  </div>
                </div>
                <div class="flex">
                  <div class="flex flex-col items-center mr-4">
                    <div>
                      <div
                        class="flex items-center justify-center w-7 h-7 border rounded-full"
                      >
                        <svg
                          class="w-3 text-gray-600"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <line
                            fill="none"
                            stroke-miterlimit="10"
                            x1="12"
                            y1="2"
                            x2="12"
                            y2="22"
                          ></line>
                          <polyline
                            fill="none"
                            stroke-miterlimit="10"
                            points="19,15 12,22 5,15"
                          ></polyline>
                        </svg>
                      </div>
                    </div>
                    <div class="w-px h-full bg-gray-300"></div>
                  </div>
                  <div class="pb-8">
                    <p class="text-gray-700 mb-2 text-xl">
                      При подключении появится диалоговое окно с вопросом о том,
                      как вы хотите войти в вебинар
                    </p>
                    <ol class="list-decimal text-gray-700 mb-2 text-xl ml-5">
                      <li>Микрофон - полноценный вход с микрофонном</li>
                      <li>
                        Только слушать - вход только для слушателей, при
                        необходимости, можно включить микрофон
                      </li>
                    </ol>
                    <p class="text-gray-700 mb-2 text-xl">
                      Для простоты подключения выбираем первый вариант
                    </p>
                    <div class="relative">
                      <img
                        class="inset-0 object-contain object-center rounded sm:max-w-full md:max-w-full lg:w-4/6 media-min-width"
                        src="./img/forInvited/two.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div class="flex">
                  <div class="flex flex-col items-center mr-4">
                    <div>
                      <div
                        class="flex items-center justify-center w-7 h-7 border rounded-full"
                      >
                        <svg
                          class="w-3 text-gray-600"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <line
                            fill="none"
                            stroke-miterlimit="10"
                            x1="12"
                            y1="2"
                            x2="12"
                            y2="22"
                          ></line>
                          <polyline
                            fill="none"
                            stroke-miterlimit="10"
                            points="19,15 12,22 5,15"
                          ></polyline>
                        </svg>
                      </div>
                    </div>
                    <div class="w-px h-full bg-gray-300"></div>
                  </div>
                  <div class="pb-8">
                    <p class="text-gray-700 mb-2 text-xl">
                      Если микрофон и колонки подключены правильно, вы увидите в
                      левом верхнем углу браузера сообщение на разрешение
                      использования микрофона. Нажимаем "Разрешить"
                    </p>
                    <p class="text-gray-700 mb-2 text-xl">
                      Также вы должны видеть окно изменения настроек звука.
                      Нажимаем "Подключиться к аудио"
                    </p>
                    <div
                      class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-2 text-l"
                      role="alert"
                    >
                      <strong class="font-bold">Внимание!</strong>
                      <span class="block sm:inline">
                        Если у вас после выбора варианта "Микрофон" появилось
                        диалоговое окно с текстом "ВОЗНИКЛИ ПРОБЛЕМЫ С ВАШИМИ
                        АУДЕО УСТРОЙСТВАМИ", тогда проверьте правильность
                        подключения и работоспособность вашего оборудования и
                        пройдите подключение заново, в противном случае
                        возникнут проблемы
                      </span>
                    </div>
                    <p class="text-gray-700 mb-2 text-xl">
                      После правильного подключения, вы должны видеть внизу
                      иконку микрофона. При разговоре, вокруг иконки микрофона
                      должны исходить так называемые "волны", значит все хорошо
                      и вас будут слышать.
                    </p>

                    <div class="relative">
                      <img
                        class="inset-0 object-contain object-center rounded sm:max-w-full md:max-w-full lg:w-4/6 media-min-width"
                        src="./img/forInvited/two.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div class="flex">
                  <div class="flex flex-col items-center mr-4">
                    <div>
                      <div
                        class="flex items-center justify-center w-7 h-7 border rounded-full"
                      >
                        <svg
                          class="w-3 text-gray-600"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <line
                            fill="none"
                            stroke-miterlimit="10"
                            x1="12"
                            y1="2"
                            x2="12"
                            y2="22"
                          ></line>
                          <polyline
                            fill="none"
                            stroke-miterlimit="10"
                            points="19,15 12,22 5,15"
                          ></polyline>
                        </svg>
                      </div>
                    </div>
                    <div class="w-px h-full bg-gray-300"></div>
                  </div>
                  <div class="pb-8">
                    <p class="text-gray-700 mb-2 text-xl">
                      Для подключения камеры нужно нажать на иконку в нижней
                      части окна , у вас должно появиться диалоговое окно
                      настройки
                    </p>
                    <p class="text-gray-700 mb-2 text-xl">
                      В левой части окна вы должны увидеть свою веб-камеру, есть
                      возможность выбрать и поменять качесто камеры
                    </p>
                    <p class="text-gray-700 mb-2 text-xl">
                      После всех настроек нажимаем "Включить веб-камеру"
                    </p>

                    <div class="relative">
                      <img
                        class="inset-0 object-contain object-center rounded sm:max-w-full md:max-w-full lg:w-4/6 media-min-width"
                        src="./img/forInvited/three.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    `;
}
