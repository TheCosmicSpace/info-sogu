function getRegistrationTemplate() {
  return `
  <h1 class="text-3xl font-bold">Регистрация</h1>
  <div class="border-b-2 border-solid my-7"></div>
  <h3 class="mb-3 text-2xl">Видео инструкция</h3>
  <div class="relative">
    <video
      class="inset-0 rounded sm:max-w-full md:max-w-full lg:w-4/6 media-min-width"
      src="./img/registration/video.mov"
      controls
    ></video>
  </div>
  <div class="border-b-2 border-solid my-4 mt-7"></div>
  <h3 class="mb-3 text-2xl">Текстовая инструкция</h3>
  <p class="text-lg">
    Вам необходимо зарегистрироваться, чтобы начать работать в системе
    soguwebinar <br />
    Есть два способа, выберите один из них
  </p>

  <!-- Способы -->
  <div
    class="w-fit p-4 mt-2 bg-white border-2 border-dashed rounded shadow-sm"
  >
    <div class="mb-2 flex items-center">
      <p
        class="flex items-center justify-center w-7 h-7 mr-2 text-lg font-bold text-white rounded-full bg-indigo-500"
      >
        1
      </p>
      <p class="text-lg font-bold leading-5">Способ</p>
    </div>
    <!-- Шаги -->
    <div class="sm:max-w-xl md:max-w-full lg:max-w-screen-xl w-fit">
      <div>
        <div class="lg:py-6 lg:pr-16">
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
              <p class="mb-2 text-lg font-bold">Шаг 1</p>
              <p class="text-gray-700 mb-2">
                Наберите в адресной строке браузера soguwebinar.ru
                <br />Перед Вами откроется страница, теперь нажимаем на
                кнопку "Зарегистрироваться"<br />
              </p>
              <div class="relative">
                <img
                  class="inset-0 object-contain object-center rounded sm:max-w-full md:max-w-full lg:w-4/6 media-min-width"
                  src="./img/registration/one.png"
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
              <p class="mb-2 text-lg font-bold">Шаг 2</p>
              <p class="text-gray-700 mb-2">
                Далее нужно заполнить все поля в форме и нажать кнопку
                "Создать аккаунт"
              </p>
              <div class="relative">
                <img
                  class="inset-0 object-contain object-center rounded sm:max-w-full md:max-w-full lg:w-4/6 media-min-width"
                  src="./img/registration/two.png"
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
                    class="w-5 text-gray-600"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <polyline
                      fill="none"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      points="6,12 10,16 18,8"
                    ></polyline>
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <p class="mb-2 text-lg font-bold">
                Отлично! Вы создали аккаунт 🥳
              </p>
              <p class="text-gray-700"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--  -->
  <div
    class="w-full p-4 mt-2 bg-white border-2 border-dashed rounded shadow-sm"
  >
    <div class="mb-2 flex items-center">
      <p
        class="flex items-center justify-center w-7 h-7 mr-2 text-lg font-bold text-white rounded-full bg-indigo-500"
      >
        2
      </p>
      <p class="text-lg font-bold leading-5">Способ</p>
    </div>
    <!-- Шаги -->
    <div class="sm:max-w-xl md:max-w-full lg:max-w-screen-xl w-fit">
      <div>
        <div class="lg:py-6 lg:pr-16">
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
              <p class="mb-2 text-lg font-bold">Шаг 1</p>
              <p class="text-gray-700">
                Написать заявку в help.nosu.ru. Просим зарегистрировать в
                системе soguwebinar
              </p>
            </div>
          </div>
          <div class="flex">
            <div class="flex flex-col items-center mr-4">
              <div>
                <div
                  class="flex items-center justify-center w-7 h-7 border rounded-full"
                >
                  <svg
                    class="w-5 text-gray-600"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <polyline
                      fill="none"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      points="6,12 10,16 18,8"
                    ></polyline>
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <p class="mb-2 text-lg font-bold">
                После регистрации Вам предоставят логин и пароль на вход в
                личный акаунт
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    `;
}
