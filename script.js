document.addEventListener("DOMContentLoaded", () => {
  const headers = document.querySelectorAll(".site-header");

  headers.forEach((header) => {
    const toggle = header.querySelector(".menu-toggle");
    const close = header.querySelector(".menu-close");
    const nav = header.querySelector(".main-nav");
    const overlay = header.querySelector(".nav-overlay");

    if (!toggle || !close || !nav || !overlay) {
      return;
    }

    const openMenu = () => {
      header.classList.add("menu-open");
      document.body.classList.add("menu-open");
      toggle.setAttribute("aria-expanded", "true");
    };

    const closeMenu = () => {
      header.classList.remove("menu-open");
      document.body.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
    };

    toggle.addEventListener("click", () => {
      if (header.classList.contains("menu-open")) {
        closeMenu();
        return;
      }

      openMenu();
    });

    close.addEventListener("click", closeMenu);
    overlay.addEventListener("click", closeMenu);

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && header.classList.contains("menu-open")) {
        closeMenu();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 960 && header.classList.contains("menu-open")) {
        closeMenu();
      }
    });
  });

  document.querySelectorAll("[data-tabs]").forEach((tabs) => {
    const buttons = tabs.querySelectorAll("[data-tab-target]");
    const panels = tabs.querySelectorAll("[data-tab-panel]");

    if (!buttons.length || !panels.length) {
      return;
    }

    const activateTab = (target) => {
      buttons.forEach((button) => {
        const isActive = button.dataset.tabTarget === target;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-selected", isActive ? "true" : "false");
      });

      panels.forEach((panel) => {
        panel.hidden = panel.dataset.tabPanel !== target;
      });
    };

    const initialTarget =
      Array.from(buttons).find((button) => button.classList.contains("is-active"))?.dataset.tabTarget ||
      buttons[0].dataset.tabTarget;

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        activateTab(button.dataset.tabTarget);
      });
    });

    activateTab(initialTarget);
  });

  document.querySelectorAll("[data-product-gallery]").forEach((gallery) => {
    const stage = gallery.querySelector("[data-gallery-stage]");
    const badge = gallery.querySelector("[data-gallery-badge]");
    const title = gallery.querySelector("[data-gallery-title]");
    const caption = gallery.querySelector("[data-gallery-caption]");
    const thumbs = gallery.querySelectorAll("[data-gallery-thumb]");

    if (!stage || !badge || !title || !caption || !thumbs.length) {
      return;
    }

    const activateThumb = (thumb) => {
      const visual = thumb.dataset.visual || "rig";
      stage.className = `product-stage__visual product-stage__visual--${visual}`;
      badge.textContent = thumb.dataset.badge || "";
      title.textContent = thumb.dataset.title || "";
      caption.textContent = thumb.dataset.caption || "";

      thumbs.forEach((item) => {
        const isActive = item === thumb;
        item.classList.toggle("is-active", isActive);
        item.setAttribute("aria-pressed", isActive ? "true" : "false");
      });
    };

    thumbs.forEach((thumb) => {
      thumb.addEventListener("click", () => {
        activateThumb(thumb);
      });
    });

    activateThumb(Array.from(thumbs).find((thumb) => thumb.classList.contains("is-active")) || thumbs[0]);
  });
});
