/******************************************************************************
Click event for the entire document. The event will be delegated to different components if possible and necessary
******************************************************************************/

document.addEventListener("click", (e) => {
  const target = e.target;

  const smallScreenMenu = document.querySelector("#smallScreenMenu");
  if (target.matches("#menuBar")) {
    smallScreenMenu.classList.toggle("scale-y-0");
  }
});

/******************************************************************************
Click event for the corusel items
******************************************************************************/

const coruselContainer = document.querySelector("#photo-container");
coruselContainer.addEventListener("click", (e) => {
  const items = document.querySelectorAll(".coruselItem");
  items.forEach((item) => {
    const coruselContent = item.querySelector("div");
    if (e.composedPath().includes(item) && window.innerWidth > 768) {
      item.classList.add("active-md");
      item.classList.remove("cursor-pointer");
      coruselContent.style.display = "flex";
    } else if (!e.composedPath().includes(item)) {
      item.classList.remove("active-md");
      item.classList.add("cursor-pointer");
      coruselContent.style.display = "none";
    }

    /****************************************************
    Small Screen Devices. The items will stack on top of 
    each other. Functionality will be exactly similar.
    *****************************************************/

    if (e.composedPath().includes(item) && window.innerWidth < 768) {
      item.classList.add("active-sm");
      item.classList.remove("cursor-pointer");
      coruselContent.style.display = "flex";
    } else if (!e.composedPath().includes(item)) {
      item.classList.remove("active-sm");
      item.classList.add("cursor-pointer");
      coruselContent.style.display = "none";
    }
  });
});

/***************************************** 
Updating year automatically in the footer
*****************************************/

const year = new Date().getFullYear();
const footerDate = document.querySelector("span.year");
footerDate.textContent = year;
