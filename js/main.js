document.addEventListener("DOMContentLoaded", main);
function main() {
  setTemplate(START);
  var elem = document.querySelector('[data-menu-item="' + START + '"]');
  setActiveItemMenu(elem);

  addEventToMenuItems();

  // document.querySelector("#prev-lesson").addEventListener("click", toLesson);
  // document.querySelector("#next-lesson").addEventListener("click", toLesson);
}

// function toLesson(e) {
//   var button = e.target.closest("button");
//   var lessonTo = button.getAttribute("data-lesson-to");
//   console.log(">> lessonTo", lessonTo);
// }

function headerNavigation(toLesson) {
  var elem = document.querySelector('[data-menu-item="' + toLesson + '"]');
  setActiveItemMenu(elem);
  setTemplate(toLesson);
}

function addEventToMenuItems() {
  var menuItems = document.querySelectorAll(MENU_ITEM_SELECTOR);
  menuItems.forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      var templateName = item.getAttribute(MENU_ITEM_ATTR);
      if (!templateName) {
        return;
      }

      setActiveItemMenu(item, menuItems);
      setTemplate(templateName);
    });
  });
}

function setActiveItemMenu(item) {
  var activeMenuItems = document.querySelector(".translate-x-2");
  console.log(">> activeMenuItems", activeMenuItems);
  if (activeMenuItems) {
    var activeItem = activeMenuItems.querySelector(
      "." + MENU_ITEM_ACTIVE_CLASS
    );
    activeItem.classList.remove(MENU_ITEM_ACTIVE_CLASS);
    activeMenuItems.classList.remove("translate-x-2");
    activeMenuItems.classList.remove("text-gray-800");
  }
  var itemIcon = item.querySelector("." + MENU_ITEM_CLASS);
  itemIcon.classList.add(MENU_ITEM_ACTIVE_CLASS);
  item.classList.add("translate-x-2");
  item.classList.add("text-gray-800");
}

function setTemplate(templateName) {
  var template = getTemplate(templateName);
  if (!template) {
    return;
  }
  document.querySelector("#info").innerHTML = template;
}
