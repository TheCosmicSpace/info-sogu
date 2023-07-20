function getPresentationTemplate() {
  return `
    <header class="flex justify-between items-center">
    <h1 class="text-3xl font-bold">Презентация</h1>
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
          onclick="headerNavigation(FOR_INVITED)"
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
          onclick="setTemplate(AUTH)"
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
      src="./img/presentation/video.mov"
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
                Для демонстрации презентации администратор должен дать вам
                права ведущего
              </p>
              <p class="text-gray-700 mb-2 text-xl">
                После этого нажмите на кнопку действия и выбираем
                загрузить
              </p>
              <div class="relative">
                <img
                  class="inset-0 object-contain object-center rounded sm:max-w-full md:max-w-full lg:w-4/6 media-min-width"
                  src="./img/presentation/one.png"
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
                Далее выбираем презентацию и нажимаем "Открыть". Выбранная
                презентация появится в разделе "Текущая презентация"
              </p>
              <p class="text-gray-700 mb-2 text-xl">
                Нажимаем кнопку "Загрузить", вы будете видеть статус
                загрузки в верхнем правом углу
              </p>
              <div class="relative">
                <img
                  class="inset-0 object-contain object-center rounded sm:max-w-full md:max-w-full lg:w-4/6 media-min-width"
                  src="./img/presentation/two.png"
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
                Если вы сделали все правильно, то вы увидите презентацию в
                главном окне
              </p>
              <p class="text-gray-700 mb-2 text-xl">
                Таким образом вы можете загрузить несколько презентаций и
                при необходимости выбирать ту или иную
              </p>
              <div class="relative">
                <img
                  class="inset-0 object-contain object-center rounded sm:max-w-full md:max-w-full lg:w-4/6 media-min-width"
                  src="./img/presentation/three.png"
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
