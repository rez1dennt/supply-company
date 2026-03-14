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

  document.querySelectorAll("[data-catalog-page]").forEach((catalog) => {
    const items = Array.from(catalog.querySelectorAll("[data-catalog-item]"));
    const triggers = Array.from(catalog.querySelectorAll("[data-category-trigger]"));
    const links = Array.from(catalog.querySelectorAll("[data-category-link]"));
    const panels = Array.from(catalog.querySelectorAll("[data-category-panel]"));

    if (!items.length || !triggers.length || !panels.length) {
      return;
    }

    const defaultCategory = panels[0].dataset.categoryPanel;
    const knownCategories = new Set(panels.map((panel) => panel.dataset.categoryPanel));
    const getPanelByCategory = (category) =>
      panels.find((panel) => panel.dataset.categoryPanel === category) || panels[0];
    const getInitialCategory = () => {
      const categoryFromQuery = new URLSearchParams(window.location.search).get("category");
      return knownCategories.has(categoryFromQuery) ? categoryFromQuery : defaultCategory;
    };

    let activeCategory = getInitialCategory();
    let activeGroup = null;
    let openCategory = null;

    const setAccordionItemState = (item, isOpen, immediate = false) => {
      const panel = item.querySelector(".catalog-accordion__panel");

      if (!panel) {
        return;
      }

      if (isOpen) {
        item.classList.add("is-open");

        if (immediate) {
          panel.style.height = "auto";
          return;
        }

        const startHeight = panel.offsetHeight;
        panel.style.height = `${startHeight}px`;

        requestAnimationFrame(() => {
          panel.style.height = `${panel.scrollHeight}px`;
        });

        return;
      }

      const startHeight = item.classList.contains("is-open") ? panel.scrollHeight : panel.offsetHeight;

      if (immediate) {
        item.classList.remove("is-open");
        panel.style.height = "0px";
        return;
      }

      panel.style.height = `${startHeight}px`;

      requestAnimationFrame(() => {
        item.classList.remove("is-open");
        panel.style.height = "0px";
      });
    };

    const refreshAccordionHeights = () => {
      items.forEach((item) => {
        const panel = item.querySelector(".catalog-accordion__panel");

        if (!panel) {
          return;
        }

        panel.style.height = item.classList.contains("is-open") ? "auto" : "0px";
      });
    };

    items.forEach((item) => {
      const panel = item.querySelector(".catalog-accordion__panel");

      if (!panel) {
        return;
      }

      panel.addEventListener("transitionend", (event) => {
        if (event.propertyName !== "height") {
          return;
        }

        panel.style.height = item.classList.contains("is-open") ? "auto" : "0px";
      });
    });

    const syncCatalog = ({
      category = activeCategory,
      groupTarget = activeGroup,
      openCategoryTarget = openCategory,
      immediate = false,
    } = {}) => {
      const resolvedCategory = knownCategories.has(category) ? category : defaultCategory;
      const resolvedOpenCategory = knownCategories.has(openCategoryTarget) ? openCategoryTarget : null;
      const activePanel = getPanelByCategory(resolvedCategory);
      const availableGroups = Array.from(activePanel.querySelectorAll(".catalog-panel-group[id]"));
      const resolvedGroup =
        groupTarget && availableGroups.some((group) => group.id === groupTarget) ? groupTarget : null;

      activeCategory = resolvedCategory;
      activeGroup = resolvedGroup;
      openCategory = resolvedOpenCategory;

      catalog.classList.add("is-ready");

      panels.forEach((panel) => {
        const isActivePanel = panel.dataset.categoryPanel === activeCategory;
        panel.classList.toggle("is-active", isActivePanel);

        panel.querySelectorAll(".catalog-panel-group").forEach((group) => {
          if (!isActivePanel) {
            group.hidden = false;
            return;
          }

          group.hidden = Boolean(activeGroup) && group.id !== activeGroup;
        });
      });

      items.forEach((item) => {
        const isActive = item.dataset.category === activeCategory;
        const isOpen = item.dataset.category === openCategory;
        item.classList.toggle("is-active", isActive);
        setAccordionItemState(item, isOpen, immediate);
      });

      triggers.forEach((trigger) => {
        const item = trigger.closest("[data-catalog-item]");
        const isOpen = item?.dataset.category === openCategory;
        trigger.setAttribute("aria-expanded", isOpen ? "true" : "false");
      });

      links.forEach((link) => {
        const isCurrent =
          link.dataset.categoryTarget === activeCategory &&
          (activeGroup ? link.dataset.groupTarget === activeGroup : !link.dataset.groupTarget);
        link.classList.toggle("is-current", isCurrent);
        link.setAttribute("aria-pressed", isCurrent ? "true" : "false");
      });
    };

    triggers.forEach((trigger) => {
      trigger.addEventListener("click", (event) => {
        event.preventDefault();
        const item = trigger.closest("[data-catalog-item]");
        const category = item?.dataset.category;

        if (!category) {
          return;
        }

        const isCurrentCategory = activeCategory === category;
        const isOpenCategory = openCategory === category;

        if (isCurrentCategory && isOpenCategory) {
          syncCatalog({
            category,
            groupTarget: activeGroup,
            openCategoryTarget: null,
          });
          return;
        }

        syncCatalog({
          category,
          groupTarget: isCurrentCategory ? activeGroup : null,
          openCategoryTarget: category,
        });
      });
    });

    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        syncCatalog({
          category: link.dataset.categoryTarget,
          groupTarget: link.dataset.groupTarget || null,
          openCategoryTarget: link.dataset.categoryTarget,
        });
      });
    });

    window.addEventListener("resize", refreshAccordionHeights);

    syncCatalog({ category: activeCategory, openCategoryTarget: openCategory, immediate: true });
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
    const stageImage = gallery.querySelector("[data-gallery-stage-image]");
    const badge = gallery.querySelector("[data-gallery-badge]");
    const title = gallery.querySelector("[data-gallery-title]");
    const caption = gallery.querySelector("[data-gallery-caption]");
    const thumbs = gallery.querySelectorAll("[data-gallery-thumb]");

    if ((!stage && !stageImage) || !badge || !title || !caption || !thumbs.length) {
      return;
    }

    const activateThumb = (thumb) => {
      if (stage && thumb.dataset.visual) {
        stage.className = `product-stage__visual product-stage__visual--${thumb.dataset.visual}`;
      }

      if (stageImage && thumb.dataset.imageSrc) {
        stageImage.src = thumb.dataset.imageSrc;
        stageImage.alt = thumb.dataset.imageAlt || thumb.dataset.title || "";
      }

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
