
const projectData = {
  bmp: {
    eyebrow: "",
    title: "Battery Monitoring Portal (BMP)",
    lead: "A monitoring and analytics portal designed to help teams understand battery storage performance across multiple sites with tools shaped around the needs of administrators, control engineers, asset owners, and executives.",
    role: "UI/UX Designer",
    scope: "Product UX · Dashboard UI · Interaction design",
    platform: "Web application",
    cover: "assets/images/bmp-cover.png",
    coverAlt: "Battery Monitoring Portal dashboard mockup",
    overview: "Battery storage systems generate operational information across sites, SBMS units, racks, and packs. Different stakeholders need different levels of detail. Control engineers investigate system health and alarms, asset owners review site performance, executives need business-level insights, and administrators manage access and configuration.",
    problem: [
      "Operational data can be difficult to scan when system hierarchy and status are unclear.",
      "Investigating alarms requires a clear view of the source, event history, and current lifecycle state.",
      "Comparing metrics across packs, racks, or SBMS units needs a focused data exploration workflow.",
      "Different user roles need different views of the same portal."
    ],
    goals: [
      "Make the site → SBMS → rack → pack hierarchy easy to understand.",
      "Support alarm review, acknowledgement, resolution, and audit history.",
      "Let engineers compare selected nodes, metrics, and time ranges.",
      "Present asset performance and business insights at the right level for each role.",
      "Give administrators clear user and configuration controls."
    ],
    roles: [
      "Admin users: Manage users, permissions, sites, and system settings.",
      "Control engineers: Monitor health, investigate alarms, and analyse battery metrics.",
      "Asset owners: Review the performance and availability of their sites.",
      "Executives: Understand revenue, operational impact, and performance trends."
    ],
    features: [
      ["Alarm management", "View active alarms, inspect source paths, review event history, add investigation comments, acknowledge or resolve incidents, and maintain an audit trail."],
      ["Data explorer", "Choose nodes, metrics, and time ranges to compare packs, racks, or SBMS units in charts."],
      ["Site hierarchy", "Navigate from site to SBMS to rack to pack so an issue can be located in its system context."],
      ["Role-based dashboards", "Give engineers operational detail, asset owners site performance, executives high-level business insights, and admins management controls."]
    ],
    decisions: [
      "Use a clear information hierarchy to support both overview and drill-down workflows.",
      "Keep alarm states visible: Active → Acknowledged → Resolved.",
      "Separate operational analytics from executive summaries instead of showing every metric to every user.",
      "Use charts with clear labels and selected time ranges to make comparisons easier to interpret."
    ],
    outcome: "The intended design direction brings operational monitoring, alarm investigation, node-level data exploration, site visibility, and business reporting into one portal.",
    screens: [
      ["Dashboard overview", "assets/images/bmp-screen-dashboard.svg", ""],
      ["Alarm management", "assets/images/bmp-screen-alarms.svg", ""],
      ["Data explorer", "assets/images/bmp-screen-data-explorer.svg", ""],
      ["Site hierarchy", "assets/images/bmp-screen-hierarchy.svg", ""]
    ],
    prototype: "https://www.figma.com/proto/WITDjyByTCFFuZZA0TGTFT/BMP?node-id=0-1&p=f&t=Qz1Otg2O2wJqScyQ-0&scaling=contain&content-scaling=fixed&starting-point-node-id=23%3A23001&show-proto-sidebar=1",
    prototypeLabel: "View BMP Figma prototype"
  },

  homebuddy: {
    eyebrow: "",
    title: "Home Buddy",
    lead: "A web application concept designed to digitise and simplify housing rentals in Lagos, helping people explore rental options and making the rental journey easier to navigate.",
    role: "UI/UX Designer",
    scope: "Product design · User flows · Responsive UI",
    platform: "Web application",
    cover: "assets/images/homebuddy-cover.png",
    coverAlt: "Home Buddy rental platform mockup",
    overview: "Finding a rental home can involve scattered listings, repeated enquiries, uncertainty about property details, and a complicated path from discovery to viewing. Home Buddy aims to bring the rental discovery journey into a clearer digital experience for people searching for housing in Lagos.",
    problem: [
      "Rental information can be scattered across multiple sources and conversations.",
      "People need to compare locations, prices, amenities, and property details before deciding what to enquire about.",
      "The path from browsing a listing to taking the next step should feel clear and trustworthy."
    ],
    goals: [
      "Make property discovery and browsing straightforward.",
      "Present the information people need to compare rental options.",
      "Help users understand the next step for a property they are interested in.",
      "Design a responsive experience suitable for desktop and mobile browsing."
    ],
    roles: [
      "Home seekers: Explore listings, compare options, and shortlist properties.",
      "Agents or landlords: Present accurate property information and respond to enquiries, if supported by the actual product."
    ],
    features: [
      ["Property discovery", "Show listings with clear images, prices, locations, and essential property details."],
      ["Property details", "Bring the key information together so people can evaluate a home before making an enquiry."],
      ["Clear next steps", "Make the intended action, such as saving a listing, contacting a lister, or requesting a viewing, easy to find."],
      ["Responsive browsing", "Keep listing cards, detail content, and navigation usable across different screen sizes."]
    ],
    decisions: [
      "Prioritise property photography and essential facts to support quick scanning.",
      "Group property details into a predictable order so listings are easier to compare.",
      "Use clear calls to action to help users understand what they can do next.",
      "Keep layouts responsive so users can browse comfortably on phones."
    ],
    outcome: "Home Buddy is positioned as a clearer digital route through rental discovery in Lagos.",
    screens: [
      ["Home", "assets/images/homebuddy-screen-discovery.svg", ""],
      ["Property details", "assets/images/homebuddy-screen-details.svg", ""],
      ["Search and filters", "assets/images/homebuddy-screen-search.svg", ""],
      ["Property listing form (filled state)", "assets/images/homebuddy-listing-form.svg", ""]
    ],
    prototype: "https://www.figma.com/proto/Az6Pzdx4GijTluql6KzU8U/Home-Buddy?node-id=302-5770&p=f&t=P0vfNPJHkZtlo4qF-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=303%3A40600",
    prototypeLabel: "View Home Buddy Figma prototype"
  },

  pos: {
    eyebrow: "",
    title: "POS & Inventory Management System",
    lead: "A web and mobile application for supermarkets, pharmacies, and retail businesses to streamline sales, monitor stock, and access useful business reports.",
    role: "UI/UX Designer",
    scope: "Product UX · Web & mobile UI · Data presentation",
    platform: "Web and mobile application",
    cover: "assets/images/pos-cover.png",
    coverAlt: "POS and Inventory Management System mockup",
    overview: "Retail teams need to serve customers while keeping inventory accurate and understanding how the business is performing. A connected point-of-sale and inventory experience can reduce the friction of switching between sales tasks, stock checks, and reporting.",
    problem: [
      "Sales and inventory tasks are closely connected but can become difficult to manage when information is spread across tools.",
      "Staff need to complete transactions efficiently while keeping records accurate.",
      "Managers need a clear view of stock levels and business performance to make day-to-day decisions."
    ],
    goals: [
      "Make common checkout and sales tasks easy to understand.",
      "Make stock levels and inventory status easy to scan.",
      "Present reports in a way that supports quick operational decisions.",
      "Create a consistent experience across web and mobile contexts."
    ],
    roles: [
      "Cashiers and sales staff: Process sales and look up items quickly.",
      "Inventory staff: Monitor stock and maintain product records.",
      "Store managers or owners: Review sales, stock status, and business reports."
    ],
    features: [
      ["Point of sale", "Support the core sales workflow with clear item information, quantities, totals, and transaction actions. Adjust this description to match your actual screens."],
      ["Inventory management", "Present product records, stock quantities, and low-stock information in a scannable format."],
      ["Reports and insights", "Help managers review sales performance and inventory movement using readable summaries and charts."],
      ["Web and mobile access", "Adapt key workflows to the screen size and context where staff need to use them."]
    ],
    decisions: [
      "Prioritise frequently used actions and information in the sales workflow.",
      "Use consistent product rows, status indicators, and labels to make stock easier to scan.",
      "Separate operational tasks from reporting so each workflow stays focused.",
      "Keep patterns consistent between web and mobile where the workflows overlap."
    ],
    outcome: "The design aims to connect sales, inventory, and reporting in one practical product experience.",
    screens: [
      ["Sales dashboard", "assets/images/pos-screen-dashboard.svg", ""],
      ["Point of sale", "assets/images/pos-screen-checkout.svg", ""],
      ["Inventory list", "assets/images/pos-screen-inventory.svg", ""],
      ["Point of sale (mobile screen)", "assets/images/pos-screen-mobile.svg", ""]
    ],
    prototype: "https://www.figma.com/proto/SnmPCQbWI8RfRoblACZPbh/POS?node-id=0-1&p=f&t=xqN97rLMZRotsXec-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=113%3A6222&show-proto-sidebar=1",
    prototypeLabel: "View POS Figma prototype"
  }
};


// =========================================
// ELEMENTS
// =========================================

const modal = document.querySelector("#case-modal");
const modalContent = document.querySelector("#modal-content");
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

const imageLightbox = document.querySelector("#image-lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const lightboxCaption = document.querySelector("#lightbox-caption");
const lightboxStage = document.querySelector("#lightbox-stage");

const zoomInButton = document.querySelector("#zoom-in");
const zoomOutButton = document.querySelector("#zoom-out");
const zoomResetButton = document.querySelector("#zoom-reset");
const lightboxCloseButton = document.querySelector("#lightbox-close");


// =========================================
// CASE STUDY CONTENT
// =========================================

function list(items) {
  return `<ul>${items.map(item => `<li>${item}</li>`).join("")}</ul>`;
}

function renderCaseStudy(project) {
  const screenImages = project.screens.map((screen, index) => `
    <figure>
      <img
        src="${screen[1]}"
        alt="${screen[0]}"
        loading="lazy"
        tabindex="0"
      >
      <figcaption>
        <strong>${String(index + 1).padStart(2, "0")} / ${screen[0]}</strong>
        <br>${screen[2]}
      </figcaption>
    </figure>
  `).join("");

  const features = project.features.map(feature => `
    <div>
      <h4>${feature[0]}</h4>
      <p>${feature[1]}</p>
    </div>
  `).join("");

  return `
    <header class="case-hero">
      <h2 id="modal-title">${project.title}</h2>
      <p class="case-lead">${project.lead}</p>

      <div class="case-meta">
        <div><small>My role</small><strong>${project.role}</strong></div>
        <div><small>Scope</small><strong>${project.scope}</strong></div>
        <div><small>Platform</small><strong>${project.platform}</strong></div>
      </div>
    </header>

    <img class="case-cover" src="${project.cover}" alt="${project.coverAlt}">

    <section class="case-section">
      <h3>Overview</h3>
      <p>${project.overview}</p>
    </section>

    <section class="case-section case-two-col">
      <div>
        <h3>The problem</h3>
        ${list(project.problem)}
      </div>
      <div>
        <h3>Design goals</h3>
        ${list(project.goals)}
      </div>
    </section>

    <section class="case-section">
      <h3>Who is it for?</h3>
      ${list(project.roles)}
    </section>

    <section class="case-section">
      <h3>Key features</h3>
      <div class="case-two-col">${features}</div>
    </section>

    <section class="case-section">
      <h3>Selected screens</h3>
      <p class="screen-preview-note">Select a screen to inspect it more closely.</p>
      <div class="case-image-grid">${screenImages}</div>
    </section>

    <section class="case-section">
      <h3>Design decisions</h3>
      ${list(project.decisions)}
    </section>

    <section class="case-section">
      <h3>Outcome & reflection</h3>
      <p>${project.outcome}</p>
    </section>

    <section class="case-section">
      <h3>Explore the prototype</h3>
      <a
        class="prototype-link"
        href="${project.prototype}"
        target="_blank"
        rel="noopener noreferrer"
      >${project.prototypeLabel}<span class="prototype-arrow" aria-hidden="true"> ↗</span></a>
    </section>
  `;
}


// =========================================
// OVERLAY HISTORY MANAGEMENT
// =========================================

// Keep a record of the page state before an overlay opens.
// This lets the phone's Back button close the overlay first.
const overlayHistoryKey = "portfolioOverlay";

function pushOverlayHistory(type) {
  history.pushState(
    { ...(history.state || {}), [overlayHistoryKey]: type },
    "",
    location.href
  );
}

function currentOverlay() {
  return history.state?.[overlayHistoryKey] || null;
}


// =========================================
// CASE STUDY OPEN / CLOSE
// =========================================

function openCaseStudy(key) {
  const project = projectData[key];
  if (!project || modal.classList.contains("is-open")) return;

  modalContent.innerHTML = renderCaseStudy(project);
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  pushOverlayHistory("case-study");

  // Focus the close control on desktop. It is hidden on mobile.
  const closeButton = modal.querySelector(".modal-close");
  if (closeButton && window.matchMedia("(min-width: 601px)").matches) {
    closeButton.focus();
  }
}

function closeCaseStudy(fromHistory = false) {
  if (!modal.classList.contains("is-open")) return;

  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");

  if (!imageLightbox.classList.contains("is-open")) {
    document.body.classList.remove("modal-open");
  }

  if (!fromHistory && currentOverlay() === "case-study") {
    history.back();
  }
}

document.querySelectorAll("[data-open-project]").forEach(button => {
  button.addEventListener("click", () => {
    openCaseStudy(button.dataset.openProject);
  });
});

document.querySelectorAll("[data-close-modal]").forEach(button => {
  button.addEventListener("click", () => {
    closeCaseStudy();
  });
});


// =========================================
// SELECTED SCREEN LIGHTBOX
// =========================================

let imageZoom = 1;
let imageX = 0;
let imageY = 0;
let lastPointerX = 0;
let lastPointerY = 0;
let pinchStartDistance = 0;
let pinchStartZoom = 1;
let isDraggingImage = false;
const activePointers = new Map();

function updateImageTransform() {
  lightboxImage.style.transform =
    `translate(${imageX}px, ${imageY}px) scale(${imageZoom})`;

  zoomOutButton.disabled = imageZoom <= 1;
  zoomInButton.disabled = imageZoom >= 5;
}

function resetImageZoom() {
  imageZoom = 1;
  imageX = 0;
  imageY = 0;
  updateImageTransform();
}

function setImageZoom(nextZoom) {
  imageZoom = Math.min(5, Math.max(1, nextZoom));

  if (imageZoom === 1) {
    imageX = 0;
    imageY = 0;
  }

  updateImageTransform();
}

function openImageLightbox(image) {
  if (!image || !imageLightbox || !lightboxImage) return;

  lightboxImage.src = image.currentSrc || image.src;
  lightboxImage.alt = image.alt || "Selected project screen";

  lightboxCaption.textContent =
    image.closest("figure")?.querySelector("figcaption strong")?.textContent
    || image.alt
    || "Project screen preview";

  resetImageZoom();

  imageLightbox.classList.add("is-open");
  imageLightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  pushOverlayHistory("image-lightbox");
  lightboxCloseButton.focus();
}

function closeImageLightbox(fromHistory = false) {
  if (!imageLightbox.classList.contains("is-open")) return;

  imageLightbox.classList.remove("is-open");
  imageLightbox.setAttribute("aria-hidden", "true");

  lightboxImage.src = "";
  activePointers.clear();
  isDraggingImage = false;
  pinchStartDistance = 0;
  lightboxStage.classList.remove("is-dragging");

  if (!modal.classList.contains("is-open")) {
    document.body.classList.remove("modal-open");
  }

  if (!fromHistory && currentOverlay() === "image-lightbox") {
    history.back();
  }
}

// Open a screen by clicking it or pressing Enter/Space.
modalContent.addEventListener("click", event => {
  const image = event.target.closest(".case-image-grid img");
  if (image) openImageLightbox(image);
});

modalContent.addEventListener("keydown", event => {
  const image = event.target.closest(".case-image-grid img");
  if (!image || !["Enter", " "].includes(event.key)) return;

  event.preventDefault();
  openImageLightbox(image);
});

lightboxCloseButton.addEventListener("click", () => {
  closeImageLightbox();
});

document.querySelectorAll("[data-close-lightbox]").forEach(button => {
  button.addEventListener("click", () => {
    closeImageLightbox();
  });
});

zoomInButton.addEventListener("click", () => {
  setImageZoom(imageZoom + 0.5);
});

zoomOutButton.addEventListener("click", () => {
  setImageZoom(imageZoom - 0.5);
});

zoomResetButton.addEventListener("click", resetImageZoom);

// Wheel zoom for desktop.
lightboxStage.addEventListener("wheel", event => {
  if (!imageLightbox.classList.contains("is-open")) return;

  event.preventDefault();
  setImageZoom(imageZoom + (event.deltaY < 0 ? 0.2 : -0.2));
}, { passive: false });

// Pointer events support dragging and pinch-to-zoom.
lightboxStage.addEventListener("pointerdown", event => {
  if (!imageLightbox.classList.contains("is-open")) return;

  activePointers.set(event.pointerId, {
    x: event.clientX,
    y: event.clientY
  });

  lightboxStage.setPointerCapture(event.pointerId);

  if (activePointers.size === 1 && imageZoom > 1) {
    isDraggingImage = true;
    lastPointerX = event.clientX;
    lastPointerY = event.clientY;
    lightboxStage.classList.add("is-dragging");
  }

  if (activePointers.size === 2) {
    isDraggingImage = false;

    const points = [...activePointers.values()];
    pinchStartDistance = Math.hypot(
      points[0].x - points[1].x,
      points[0].y - points[1].y
    );

    pinchStartZoom = imageZoom;
  }
});

lightboxStage.addEventListener("pointermove", event => {
  if (!activePointers.has(event.pointerId)) return;

  activePointers.set(event.pointerId, {
    x: event.clientX,
    y: event.clientY
  });

  if (activePointers.size === 2 && pinchStartDistance > 0) {
    const points = [...activePointers.values()];
    const currentDistance = Math.hypot(
      points[0].x - points[1].x,
      points[0].y - points[1].y
    );

    setImageZoom(
      pinchStartZoom * (currentDistance / pinchStartDistance)
    );
    return;
  }

  if (isDraggingImage && imageZoom > 1) {
    imageX += event.clientX - lastPointerX;
    imageY += event.clientY - lastPointerY;

    lastPointerX = event.clientX;
    lastPointerY = event.clientY;

    updateImageTransform();
  }
});

function finishPointer(event) {
  if (!activePointers.has(event.pointerId)) return;

  activePointers.delete(event.pointerId);

  if (activePointers.size < 2) {
    pinchStartDistance = 0;
  }

  if (activePointers.size === 0) {
    isDraggingImage = false;
    lightboxStage.classList.remove("is-dragging");
  } else if (activePointers.size === 1 && imageZoom > 1) {
    const remaining = [...activePointers.values()][0];
    lastPointerX = remaining.x;
    lastPointerY = remaining.y;
    isDraggingImage = true;
  }
}

lightboxStage.addEventListener("pointerup", finishPointer);
lightboxStage.addEventListener("pointercancel", finishPointer);
lightboxStage.addEventListener("lostpointercapture", finishPointer);


// =========================================
// ESCAPE KEY AND PHONE BACK BUTTON
// =========================================

document.addEventListener("keydown", event => {
  if (event.key !== "Escape") return;

  if (imageLightbox.classList.contains("is-open")) {
    closeImageLightbox();
  } else if (modal.classList.contains("is-open")) {
    closeCaseStudy();
  }
});

window.addEventListener("popstate", event => {
  // Back closes the image preview first.
  if (imageLightbox.classList.contains("is-open")) {
    closeImageLightbox(true);
    return;
  }

  // If the browser moved back to the case-study state,
  // keep the case study open.
  if (event.state?.[overlayHistoryKey] === "case-study") {
    return;
  }

  // Otherwise close the open case study.
  if (modal.classList.contains("is-open")) {
    closeCaseStudy(true);
  }
});


// =========================================
// MOBILE NAVIGATION
// =========================================

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("is-open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation"
  );
});

mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
  });
});


// =========================================
// FOOTER YEAR
// =========================================

document.querySelector("#year").textContent = new Date().getFullYear();


// =========================================
// ACTIVE NAVIGATION SECTION
// =========================================

const sectionLinks = [...document.querySelectorAll(".nav-link")];

const observedSections = ["home", "projects", "contact"]
  .map(id => document.getElementById(id))
  .filter(Boolean);

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      sectionLinks.forEach(link => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${entry.target.id}`
        );
      });
    });
  }, {
    rootMargin: "-35% 0px -55% 0px"
  });

  observedSections.forEach(section => observer.observe(section));
}
