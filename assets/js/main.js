(function (doc) {
  "use strict";
  const sideMenu = doc.querySelector("aside");
  const menuBtn = doc.querySelector("#menu-btn");
  const closeBtn = doc.querySelector("#close-btn");
  const themeToggler = doc.querySelector(".theme-toggler");

  // SHOW SIDEBAR
  menuBtn.addEventListener("click", () => {
    sideMenu.style.display = "block";
  });

  // CLOSE SIDEBAR
  closeBtn.addEventListener("click", () => {
    sideMenu.style.display = "none";
  });

  // CHANGE THEME
  themeToggler.addEventListener("click", () => {
    doc.body.classList.toggle("dark-theme-variables");

    themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
    themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
  });

  //FILL ORDERS IN TABLE
  Orders.forEach((order) => {
    const tr = doc.createElement("tr");
    const trContent = `
                <td>${order.productName}</td>
                <td>${order.productNumber}</td>
                <td>${order.paymentStatus}</td>
                <td class="${order.shipping === "Declined" ? "danger" : order.shipping === "primary"}">${order.shipping}</td>
                <td class="primary">Details</td>
              `;
    tr.innerHTML = trContent;
    doc.querySelector("table tbody").appendChild(tr);
  });
})(document);
