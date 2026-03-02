 // ===== DATA =====
 const shows = [
    {
      id: 1,
      title: "Stranger Things",
      year: 2016,
      match: 97,
      genre: "Sci-Fi Horror",
      seasons: "4 Seasons",
      color: "linear-gradient(135deg,#1a1a2e,#16213e,#0f3460)",
    },
    {
      id: 2,
      title: "Squid Game",
      year: 2021,
      match: 99,
      genre: "Thriller Drama",
      seasons: "2 Seasons",
      color: "linear-gradient(135deg,#0a0a0a,#1a0000,#2d0000)",
    },
    {
      id: 3,
      title: "Wednesday",
      year: 2022,
      match: 95,
      genre: "Comedy Horror",
      seasons: "1 Season",
      color: "linear-gradient(135deg,#0a0a0a,#111,#222)",
    },
    {
      id: 4,
      title: "The Crown",
      year: 2016,
      match: 91,
      genre: "Drama",
      seasons: "6 Seasons",
      color: "linear-gradient(135deg,#1a1a0a,#2d2d00,#1a1a0a)",
    },
    {
      id: 5,
      title: "Ozark",
      year: 2017,
      match: 94,
      genre: "Crime Thriller",
      seasons: "4 Seasons",
      color: "linear-gradient(135deg,#000a1a,#001a2d,#000a1a)",
    },
    {
      id: 6,
      title: "Money Heist",
      year: 2017,
      match: 98,
      genre: "Heist Drama",
      seasons: "5 Seasons",
      color: "linear-gradient(135deg,#1a0000,#2d0000,#1a0000)",
    },
    {
      id: 7,
      title: "Dark",
      year: 2017,
      match: 96,
      genre: "Sci-Fi Mystery",
      seasons: "3 Seasons",
      color: "linear-gradient(135deg,#050510,#0a0a20,#050510)",
    },
    {
      id: 8,
      title: "Peaky Blinders",
      year: 2013,
      match: 93,
      genre: "Crime Drama",
      seasons: "6 Seasons",
      color: "linear-gradient(135deg,#0a0800,#1a1400,#0a0800)",
    },
    {
      id: 9,
      title: "Narcos",
      year: 2015,
      match: 92,
      genre: "Crime Drama",
      seasons: "3 Seasons",
      color: "linear-gradient(135deg,#0a1a00,#142d00,#0a1a00)",
    },
    {
      id: 10,
      title: "BoJack Horseman",
      year: 2014,
      match: 88,
      genre: "Animated Comedy",
      seasons: "6 Seasons",
      color: "linear-gradient(135deg,#1a0a1a,#2d002d,#1a0a1a)",
    },
    {
      id: 11,
      title: "Black Mirror",
      year: 2011,
      match: 90,
      genre: "Sci-Fi Anthology",
      seasons: "6 Seasons",
      color: "linear-gradient(135deg,#0a0a0a,#111,#0a0a0a)",
    },
    {
      id: 12,
      title: "The Witcher",
      year: 2019,
      match: 89,
      genre: "Fantasy Action",
      seasons: "3 Seasons",
      color: "linear-gradient(135deg,#0a0a00,#1a1a0a,#0a0a00)",
    },
  ];

  const episodes = [
    {
      num: 1,
      title: "Chapter One: The Vanishing of Will Byers",
      desc: "On his way home from a friend's house, young Will sees something terrifying. Nearby, a sinister secret lurks in the depths of a government lab.",
      duration: "48m",
    },
    {
      num: 2,
      title: "Chapter Two: The Weirdo on Maple Street",
      desc: "Lucas, Mike and Dustin try to talk to the girl they found in the woods. Hopper questions an anxious Joyce about an intrusion in her home.",
      duration: "55m",
    },
    {
      num: 3,
      title: "Chapter Three: Holly, Jolly",
      desc: "An increasingly concerned Nancy looks for Barb and finds out what Jonathan's been up to. Joyce is convinced Will is trying to reach her.",
      duration: "51m",
    },
    {
      num: 4,
      title: "Chapter Four: The Body",
      desc: "Refusing to believe Will is dead, Joyce tries to connect with her son. The boys give Eleven a makeover. Nancy and Jonathan form an unlikely alliance.",
      duration: "55m",
    },
  ];

  // ===== CARD CREATION =====
  function createCard(show, index, type = "normal") {
    const card = document.createElement("div");
    card.className = `card${
      type === "top10" ? " top10" : type === "portrait" ? " portrait" : ""
    }`;

    if (type === "top10") {
      card.innerHTML = `
  <div class="card-img-wrap">
    <div class="card-img" style="background:${
      show.color
    };position:relative;">
      <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;">
        <span style="font-size:11px;color:#999;font-weight:600;text-transform:uppercase;letter-spacing:1px;">${
          show.title
        }</span>
      </div>
      <div class="top10-number">${index + 1}</div>
    </div>
  </div>
  <div class="card-overlay">
    <div class="card-title">${show.title}</div>
    <div class="card-actions">
      <div class="card-btn play" title="Play">▶</div>
      <div class="card-btn" title="Add to My List">+</div>
      <div class="card-btn" title="Like">👍</div>
      <div class="card-btn" style="margin-left:auto;" title="More info">⌄</div>
    </div>
    <div class="card-match">${show.match}% Match</div>
    <div class="card-tags">
      <span class="card-tag">${show.year}</span>
      <span class="card-tag">${show.seasons}</span>
    </div>
  </div>`;
    } else {
      card.innerHTML = `
  <div class="card-img" style="background:${
    show.color
  };display:flex;align-items:center;justify-content:center;position:relative;">
    <span style="font-size:10px;color:#666;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;padding:0 10px;text-align:center;">${
      show.title
    }</span>
    ${
      type === "continue"
        ? `<div style="position:absolute;bottom:0;left:0;right:0;height:3px;background:#ccc;"><div style="width:${
            Math.floor(Math.random() * 80) + 10
          }%;height:100%;background:var(--netflix-red);"></div></div>`
        : ""
    }
  </div>
  <div class="card-overlay">
    <div class="card-title">${show.title}</div>
    <div class="card-actions">
      <div class="card-btn play" title="Play">▶</div>
      <div class="card-btn" title="Add to My List">+</div>
      <div class="card-btn" title="Like">👍</div>
      <div class="card-btn" style="margin-left:auto;" title="More info" onclick="openModal();event.stopPropagation()">⌄</div>
    </div>
    <div class="card-match">${show.match}% Match</div>
    <div class="card-tags">
      <span class="card-tag">${show.year}</span>
      <span class="card-tag">${show.seasons}</span>
    </div>
  </div>`;
    }

    card.addEventListener("click", openModal);
    return card;
  }

  // ===== POPULATE ROWS =====
  function populateRows() {
    const row1 = document.getElementById("row1");
    const row2 = document.getElementById("row2");
    const row3 = document.getElementById("row3");
    const row4 = document.getElementById("row4");
    const row5 = document.getElementById("row5");

    const shuffled = [...shows].sort(() => Math.random() - 0.5);

    shows.forEach((s, i) => row1.appendChild(createCard(s, i)));
    shows
      .slice(0, 10)
      .forEach((s, i) => row2.appendChild(createCard(s, i, "top10")));
    shuffled
      .slice(0, 8)
      .forEach((s, i) => row3.appendChild(createCard(s, i, "continue")));
    shuffled
      .slice(2, 10)
      .forEach((s, i) => row4.appendChild(createCard(s, i)));
    shows.slice(0, 8).forEach((s, i) => row5.appendChild(createCard(s, i)));
  }

  // ===== MODAL =====
  function populateModal() {
    // Episodes
    const epList = document.getElementById("episodeList");
    epList.innerHTML = "";
    episodes.forEach((ep) => {
      epList.innerHTML += `
  <div style="display:flex;gap:16px;align-items:flex-start;padding:16px 0;border-bottom:1px solid #2a2a2a;cursor:pointer;transition:background 0.2s;border-radius:4px;padding:12px;" 
       onmouseover="this.style.background='#2a2a2a'" onmouseout="this.style.background='transparent'">
    <div style="font-size:24px;font-weight:300;color:#777;min-width:30px;text-align:center;padding-top:8px;">${ep.num}</div>
    <div style="width:120px;height:68px;min-width:120px;border-radius:4px;background:linear-gradient(135deg,#1a1a2e,#16213e,#0f3460);display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;cursor:pointer;">
      <div style="width:36px;height:36px;background:rgba(255,255,255,0.2);border-radius:50%;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(4px);">
        <span style="font-size:14px;">▶</span>
      </div>
    </div>
    <div style="flex:1;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
        <div style="font-size:14px;font-weight:600;">${ep.title}</div>
        <div style="font-size:13px;color:#777;">${ep.duration}</div>
      </div>
      <div style="font-size:13px;color:#999;line-height:1.5;">${ep.desc}</div>
    </div>
  </div>`;
    });

    // More Like This
    const mlt = document.getElementById("moreLikeThis");
    mlt.innerHTML = "";
    shows.slice(1, 7).forEach((s) => {
      mlt.innerHTML += `
  <div style="border-radius:6px;overflow:hidden;cursor:pointer;background:#1a1a1a;" onclick="openModal()">
    <div style="background:${s.color};height:100px;display:flex;align-items:center;justify-content:center;">
      <span style="font-size:10px;color:#666;text-transform:uppercase;letter-spacing:0.5px;">${s.title}</span>
    </div>
    <div style="padding:10px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
        <span style="color:#46d369;font-size:12px;font-weight:700;">${s.match}% Match</span>
        <span style="color:#777;font-size:11px;">${s.seasons}</span>
      </div>
      <div style="font-size:12px;font-weight:600;margin-bottom:4px;">${s.title}</div>
      <div style="font-size:11px;color:#999;">${s.year} • ${s.genre}</div>
    </div>
  </div>`;
    });
  }

  function openModal() {
    document.getElementById("modalBackdrop").classList.add("active");
    document.body.style.overflow = "hidden";
    populateModal();
  }

  function closeModal() {
    document.getElementById("modalBackdrop").classList.remove("active");
    document.body.style.overflow = "";
  }

  function closeModalOutside(e) {
    if (e.target === document.getElementById("modalBackdrop")) closeModal();
  }

  // ===== SEARCH =====
  function toggleSearch() {
    const overlay = document.getElementById("searchOverlay");
    overlay.classList.toggle("active");
    if (overlay.classList.contains("active")) {
      document.getElementById("searchInput").focus();
    }
  }

  function handleSearch(val) {
    // Search functionality placeholder
  }

  // ===== PROFILE MENU =====
  function toggleProfileMenu() {
    document.getElementById("profileMenu").classList.toggle("open");
  }

  document.addEventListener("click", (e) => {
    const menu = document.getElementById("profileMenu");
    if (
      !e.target.closest("#profileMenu") &&
      !e.target.closest('[onclick="toggleProfileMenu()"]')
    ) {
      menu.classList.remove("open");
    }
  });

  // ===== NAVBAR SCROLL =====
  window.addEventListener("scroll", () => {
    const nav = document.getElementById("navbar");
    if (window.scrollY > 80) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });

  // ===== DRAG SCROLL =====
  document.querySelectorAll(".row-slider").forEach((slider) => {
    let isDown = false,
      startX,
      scrollLeft;

    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      slider.classList.add("grabbing");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener("mouseleave", () => {
      isDown = false;
      slider.classList.remove("grabbing");
    });
    slider.addEventListener("mouseup", () => {
      isDown = false;
      slider.classList.remove("grabbing");
    });
    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    });
  });

  // ===== KEYBOARD =====
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
      document.getElementById("searchOverlay").classList.remove("active");
    }
    if (
      e.key === "/" &&
      !document.getElementById("searchOverlay").classList.contains("active")
    ) {
      e.preventDefault();
      toggleSearch();
    }
  });

  // ===== NOTIFICATIONS =====
  const notifications = [
    {
      id: 1,
      type: "tv",
      unread: true,
      title: "Stranger Things — New Season Available",
      desc: "Season 4 is now available. Watch the epic conclusion of the Hawkins saga.",
      time: "2 hours ago",
      color: "linear-gradient(135deg,#1a1a2e,#16213e,#0f3460)",
    },
    {
      id: 2,
      type: "movies",
      unread: true,
      title: "The Gray Man — Now Streaming",
      desc: "Ryan Gosling and Chris Evans face off in this high-octane action thriller.",
      time: "5 hours ago",
      color: "linear-gradient(135deg,#0a0a0a,#1a1a1a,#222)",
    },
    {
      id: 3,
      type: "tv",
      unread: true,
      title: "Squid Game — Season 2 Drops Soon",
      desc: "The games are back. Get ready for a new set of challenges and new players.",
      time: "Yesterday",
      color: "linear-gradient(135deg,#0a0a0a,#1a0000,#2d0000)",
    },
    {
      id: 4,
      type: "movies",
      unread: true,
      title: "Glass Onion: A Knives Out Mystery",
      desc: "Benoit Blanc returns! A new mystery awaits on a private Greek island.",
      time: "2 days ago",
      color: "linear-gradient(135deg,#0a0800,#1a1400,#0a0800)",
    },
    {
      id: 5,
      type: "tv",
      unread: false,
      title: "Wednesday — Season 2 Confirmed",
      desc: "Wednesday Addams is coming back to Nevermore Academy with new dark surprises.",
      time: "3 days ago",
      color: "linear-gradient(135deg,#0a0a0a,#111,#222)",
    },
    {
      id: 6,
      type: "tv",
      unread: true,
      title: "Dark — Complete Series Now on Netflix",
      desc: "All three seasons of the critically acclaimed German sci-fi thriller are here.",
      time: "3 days ago",
      color: "linear-gradient(135deg,#050510,#0a0a20,#050510)",
    },
    {
      id: 7,
      type: "movies",
      unread: false,
      title: "Knives Out — Available to Re-Watch",
      desc: "The classic whodunit is back in your watchlist. Pick up where you left off.",
      time: "5 days ago",
      color: "linear-gradient(135deg,#1a0a1a,#2d002d,#1a0a1a)",
    },
    {
      id: 8,
      type: "tv",
      unread: false,
      title: "Peaky Blinders — Complete Collection",
      desc: "All 6 seasons of the Shelby family saga are now available in 4K HDR.",
      time: "1 week ago",
      color: "linear-gradient(135deg,#0a0800,#1a1400,#0a0800)",
    },
  ];

  let currentTab = "all";
  let notifOpen = false;

  function renderNotifications(tab) {
    const list = document.getElementById("notifList");
    const empty = document.getElementById("notifEmpty");
    const filtered =
      tab === "all"
        ? notifications
        : notifications.filter((n) => n.type === tab);

    if (filtered.length === 0) {
      list.innerHTML = "";
      empty.style.display = "block";
      return;
    }

    empty.style.display = "none";
    list.innerHTML = filtered
      .map(
        (n) => `
<div class="notif-item ${n.unread ? "unread" : ""}" id="notif-${
          n.id
        }" onclick="readNotif(${n.id})">
  <div class="notif-thumb">
    <div class="notif-thumb-inner" style="background:${n.color};">
      <span>${n.title.split("—")[0].trim()}</span>
    </div>
    <div class="play-icon">▶</div>
  </div>
  <div class="notif-text">
    <div class="notif-title">${n.title}</div>
    <div class="notif-desc">${n.desc}</div>
    <div class="notif-time">${n.time}</div>
  </div>
  ${n.unread ? '<div class="notif-unread-dot"></div>' : ""}
</div>
`
      )
      .join("");
  }

  function updateBadge() {
    const unreadCount = notifications.filter((n) => n.unread).length;
    const badge = document.getElementById("notifBadge");
    if (unreadCount > 0) {
      badge.textContent = unreadCount;
      badge.style.display = "flex";
    } else {
      badge.style.display = "none";
    }
  }

  function toggleNotif() {
    const panel = document.getElementById("notifPanel");
    notifOpen = !notifOpen;
    if (notifOpen) {
      panel.classList.add("open");
      renderNotifications(currentTab);
      // close profile menu if open
      document.getElementById("profileMenu").classList.remove("open");
    } else {
      panel.classList.remove("open");
    }
  }

  function switchNotifTab(el, tab) {
    currentTab = tab;
    document
      .querySelectorAll(".notif-tab")
      .forEach((t) => t.classList.remove("active"));
    el.classList.add("active");
    renderNotifications(tab);
  }

  function readNotif(id) {
    const notif = notifications.find((n) => n.id === id);
    if (notif) {
      notif.unread = false;
      updateBadge();
      renderNotifications(currentTab);
    }
  }

  function markAllRead() {
    notifications.forEach((n) => (n.unread = false));
    updateBadge();
    renderNotifications(currentTab);
  }

  // Close notif panel when clicking outside
  document.addEventListener("click", (e) => {
    if (notifOpen && !e.target.closest("#notifWrap")) {
      document.getElementById("notifPanel").classList.remove("open");
      notifOpen = false;
    }
  });

  // ===== INIT =====
  populateRows();
  updateBadge();