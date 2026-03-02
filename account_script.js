// ===== NAV =====
function setActive(el) {
    document
      .querySelectorAll("nav ul li a")
      .forEach((a) => a.classList.remove("active"));
    el.classList.add("active");
  }

  // ===== TOAST =====
  let tTimer;
  function showToast(msg, dur = 3000) {
    const t = document.getElementById("toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(tTimer);
    tTimer = setTimeout(() => t.classList.remove("show"), dur);
  }

  // ===== MODALS =====
  const modals = {
    "manage-membership": {
      title: "Manage Membership",
      html: `
  <div style="border:1px solid #eee;border-radius:10px;overflow:hidden;margin-bottom:4px;">
    <div style="padding:18px 20px;border-bottom:1px solid #eee;">
      <div style="font-size:16px;font-weight:800;margin-bottom:5px;">Premium plan</div>
      <div style="font-size:14px;color:#777;">Next payment: 21 March 2026</div>
      <div style="font-size:14px;color:#777;font-weight:600;margin-top:2px;">₹799/month</div>
    </div>
    <div style="padding:16px 20px;border-bottom:1px solid #eee;display:flex;align-items:center;gap:10px;">
      <div style="width:28px;height:28px;border-radius:50%;background:#6f42c1;display:flex;align-items:center;justify-content:center;color:white;font-size:13px;font-weight:700;">⊙</div>
      <span style="font-size:14px;color:#555;">9•••@ybl</span>
    </div>
    <div style="padding:16px 20px;">
      <a href="#" onclick="closeModal();setTimeout(()=>showToast('Redirecting to cancellation flow…'),200);return false;" style="color:#e50914;font-size:14px;font-weight:600;text-decoration:none;">Cancel membership</a>
    </div>
  </div>
`,
      confirm: "Close",
      cls: "m-btn-blue",
      onOk: () => {},
    },
    "change-plan": {
      title: "Change Plan",
      html: `
  <p style="font-size:14px;color:#666;margin-bottom:18px;">Select the plan that works best for you.</p>
  <div style="display:flex;flex-direction:column;gap:10px;">
    ${[
      { n: "Mobile", p: "₹149/mo", d: "480p · 1 screen · No downloads" },
      {
        n: "Basic",
        p: "₹199/mo",
        d: "480p · 1 screen · Downloads available",
      },
      {
        n: "Standard",
        p: "₹499/mo",
        d: "1080p Full HD · 2 screens · Downloads · No ads",
      },
      {
        n: "Premium",
        p: "₹799/mo",
        d: "4K+HDR · 4 screens · Downloads · Spatial Audio",
        a: true,
      },
    ]
      .map(
        (p) => `
      <label style="display:flex;align-items:center;gap:14px;padding:14px 16px;border:2px solid ${
        p.a ? "#0071eb" : "#e0e0e0"
      };border-radius:9px;cursor:pointer;background:${
          p.a ? "#f0f7ff" : "white"
        };transition:border-color 0.2s;">
        <input type="radio" name="plan" ${
          p.a ? "checked" : ""
        } style="accent-color:#0071eb;width:17px;height:17px;flex-shrink:0;">
        <div style="flex:1;">
          <div style="font-weight:700;font-size:15px;">${p.n}</div>
          <div style="font-size:12px;color:#777;margin-top:2px;">${
            p.d
          }</div>
        </div>
        <div style="font-weight:700;font-size:14px;white-space:nowrap;color:#333;">${
          p.p
        }</div>
      </label>
    `
      )
      .join("")}
  </div>
`,
      confirm: "Confirm Plan",
      cls: "m-btn-blue",
      onOk: () => showToast("Plan updated successfully!"),
    },
    payment: {
      title: "Manage Payment Method",
      html: `
  <div style="background:#fafafa;border:1px solid #e8e8e8;border-radius:9px;padding:14px 16px;margin-bottom:20px;display:flex;align-items:center;gap:12px;">
    <div style="width:32px;height:32px;border-radius:50%;background:#6f42c1;display:flex;align-items:center;justify-content:center;color:white;font-size:15px;font-weight:700;">⊙</div>
    <div>
      <div style="font-size:14px;font-weight:700;">UPI</div>
      <div style="font-size:13px;color:#888;">9•••@ybl</div>
    </div>
    <span style="margin-left:auto;background:#e8f5e9;color:#2e7d32;padding:3px 12px;border-radius:12px;font-size:12px;font-weight:700;">Active</span>
  </div>
  <label class="m-label">New UPI ID</label>
  <input class="m-input" type="text" placeholder="yourname@bank">
  <div style="text-align:center;color:#aaa;font-size:12px;margin:-4px 0 14px;position:relative;">
    <span style="background:white;padding:0 10px;position:relative;z-index:1;">or add a card</span>
    <div style="position:absolute;top:50%;left:0;right:0;height:1px;background:#e0e0e0;"></div>
  </div>
  <label class="m-label">Card Number</label>
  <input class="m-input" type="text" placeholder="1234 5678 9012 3456">
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
    <div><label class="m-label">Expiry</label><input class="m-input" type="text" placeholder="MM / YY"></div>
    <div><label class="m-label">CVV</label><input class="m-input" type="text" placeholder="•••"></div>
  </div>
`,
      confirm: "Save",
      cls: "m-btn-blue",
      onOk: () => showToast("Payment method updated!"),
    },
    devices: {
      title: "Manage Access & Devices",
      html: `
  <p style="font-size:14px;color:#666;margin-bottom:20px;">All devices currently signed in to your Netflix account.</p>
  <div style="border:1px solid #eee;border-radius:10px;overflow:hidden;margin-bottom:16px;">
    ${[
      {
        icon: "💻",
        name: "Chrome on Windows",
        loc: "Rānāghāt, West Bengal",
        time: "Active now",
        active: true,
      },
      {
        icon: "📱",
        name: "Netflix on iPhone 15 Pro",
        loc: "Mumbai, Maharashtra",
        time: "2 hours ago",
        active: false,
      },
      {
        icon: "📺",
        name: "Samsung Smart TV",
        loc: "Kolkata, West Bengal",
        time: "Yesterday",
        active: false,
      },
      {
        icon: "🎮",
        name: "PlayStation 5",
        loc: "Rānāghāt, West Bengal",
        time: "3 days ago",
        active: false,
      },
    ]
      .map(
        (d, i, arr) => `
      <div style="display:flex;align-items:center;gap:14px;padding:14px 16px;${
        i < arr.length - 1 ? "border-bottom:1px solid #f0f0f0;" : ""
      }">
        <span style="font-size:22px;">${d.icon}</span>
        <div style="flex:1;">
          <div style="font-size:14px;font-weight:700;">${d.name}</div>
          <div style="font-size:12px;color:#999;margin-top:2px;">${
            d.loc
          } · ${d.time}</div>
        </div>
        ${
          d.active
            ? `<span style="font-size:12px;color:#2e7d32;font-weight:700;display:flex;align-items:center;gap:5px;"><span style="width:7px;height:7px;background:#2e7d32;border-radius:50%;display:inline-block;"></span>Active</span>`
            : `<button onclick="this.closest('div').style.opacity='0.4';showToast('Device removed')" style="background:none;border:1px solid #ddd;border-radius:6px;padding:5px 14px;font-size:12px;cursor:pointer;color:#555;font-family:inherit;transition:all 0.15s;" onmouseover="this.style.background='#f5f5f5'" onmouseout="this.style.background='none'">Remove</button>`
        }
      </div>
    `
      )
      .join("")}
  </div>
  <div style="text-align:center;">
    <button onclick="showToast('All other devices signed out.');closeModal();" style="background:none;border:1px solid #ddd;border-radius:7px;padding:9px 22px;font-size:13px;font-weight:600;cursor:pointer;color:#555;font-family:inherit;width:100%;transition:background 0.15s;" onmouseover="this.style.background='#f5f5f5'" onmouseout="this.style.background='none'">Sign out of all devices</button>
  </div>
`,
      confirm: "Done",
      cls: "m-btn-blue",
      onOk: () => {},
    },
    password: {
      title: "Update Password",
      html: `
  <label class="m-label">Current password</label>
  <input class="m-input" type="password" placeholder="Enter your current password">
  <label class="m-label">New password</label>
  <input class="m-input" type="password" placeholder="At least 8 characters">
  <label class="m-label">Confirm new password</label>
  <input class="m-input" type="password" placeholder="Re-enter new password">
  <label style="display:flex;align-items:center;gap:9px;font-size:13px;color:#555;cursor:pointer;user-select:none;margin-top:-4px;">
    <input type="checkbox" style="accent-color:#0071eb;width:15px;height:15px;">
    Sign out of all other devices after changing password
  </label>
`,
      confirm: "Save",
      cls: "m-btn-blue",
      onOk: () => showToast("Password updated successfully."),
    },
    transfer: {
      title: "Transfer a Profile",
      html: `
  <p style="font-size:14px;color:#666;margin-bottom:20px;">Move a profile — including its watch history and My List — to a new or existing Netflix account.</p>
  <label class="m-label">Select profile</label>
  <select class="m-input" style="cursor:pointer;">
    <option value="">— Choose a profile —</option>
    <option>John</option>
    <option>Sarah</option>
    <option>Alex</option>
    <option>Kids</option>
  </select>
  <label class="m-label">Recipient email</label>
  <input class="m-input" type="email" placeholder="recipient@example.com">
`,
      confirm: "Send Transfer",
      cls: "m-btn-blue",
      onOk: () => showToast("Transfer request sent!"),
    },
    parental: {
      title: "Adjust Parental Controls",
      html: `
  <p style="font-size:14px;color:#666;margin-bottom:20px;">Set a PIN to prevent unauthorised changes to maturity settings and to restrict viewing.</p>
  <label class="m-label">Maximum maturity level allowed</label>
  <select class="m-input" style="cursor:pointer;">
    <option>All Maturity Ratings</option>
    <option>Teen (13+)</option>
    <option>Older Kids (10+)</option>
    <option>Little Kids (7+)</option>
  </select>
  <label class="m-label">Profile PIN (4 digits)</label>
  <input class="m-input" type="password" placeholder="Enter 4-digit PIN" maxlength="4" style="letter-spacing:6px;font-size:18px;text-align:center;">
  <label class="m-label">Confirm PIN</label>
  <input class="m-input" type="password" placeholder="Re-enter PIN" maxlength="4" style="letter-spacing:6px;font-size:18px;text-align:center;">
`,
      confirm: "Save",
      cls: "m-btn-blue",
      onOk: () => showToast("Parental controls updated."),
    },
    settings: {
      title: "Edit Settings",
      html: `
  <div style="border:1px solid #eee;border-radius:10px;overflow:hidden;">
    ${[
      ["🌐", "Language", "English"],
      ["💬", "Subtitle appearance", "Default"],
      ["▶️", "Autoplay controls", "On"],
      ["🔔", "Notifications", "All notifications"],
      ["🛡️", "Privacy and data settings", "Manage"],
      ["📥", "Download video quality", "Standard"],
    ]
      .map(
        ([icon, label, val], i, arr) => `
      <div onclick="showToast('Opening ${label}…')" style="display:flex;align-items:center;justify-content:space-between;padding:15px 18px;${
          i < arr.length - 1 ? "border-bottom:1px solid #f0f0f0;" : ""
        }cursor:pointer;transition:background 0.15s;" onmouseover="this.style.background='#fafafa'" onmouseout="this.style.background='white'">
        <div style="display:flex;align-items:center;gap:12px;">
          <span style="font-size:18px;">${icon}</span>
          <span style="font-size:14px;font-weight:600;">${label}</span>
        </div>
        <div style="display:flex;align-items:center;gap:8px;">
          <span style="font-size:13px;color:#aaa;">${val}</span>
          <span style="color:#aaa;font-size:16px;">›</span>
        </div>
      </div>
    `
      )
      .join("")}
  </div>
`,
      confirm: "Close",
      cls: "m-btn-blue",
      onOk: () => {},
    },
    "security-section": {
      title: "Security",
      html: `
  <div style="border:1px solid #eee;border-radius:10px;overflow:hidden;">
    ${[
      [
        "🔐",
        "Password",
        "Change your account password",
        "Update password",
        () => {
          closeModal();
          setTimeout(() => showModal("password"), 250);
        },
      ],
      [
        "📱",
        "Two-factor authentication",
        "Add an extra layer of security to your account",
        "Set up",
        () => showToast("2FA setup coming soon"),
      ],
      [
        "🚪",
        "Sign out of all devices",
        "Sign out of all devices currently signed in",
        "Sign out",
        () => showToast("All devices signed out."),
      ],
      [
        "📋",
        "Recent account access",
        "View all recent sign-in activity",
        "View activity",
        () => showToast("Loading account activity…"),
      ],
    ]
      .map(
        ([icon, title, desc, action, fn], i, arr) => `
      <div style="display:flex;align-items:center;gap:14px;padding:16px 18px;${
        i < arr.length - 1 ? "border-bottom:1px solid #f0f0f0;" : ""
      }">
        <div style="width:40px;height:40px;border-radius:50%;background:#f0f0f0;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;">${icon}</div>
        <div style="flex:1;">
          <div style="font-size:14px;font-weight:700;margin-bottom:2px;">${title}</div>
          <div style="font-size:12px;color:#999;">${desc}</div>
        </div>
        <button onclick="(${fn.toString()})()" style="background:none;border:1px solid #ddd;border-radius:6px;padding:7px 14px;font-size:12px;font-weight:600;cursor:pointer;color:#333;font-family:inherit;transition:all 0.15s;white-space:nowrap;" onmouseover="this.style.background='#f5f5f5'" onmouseout="this.style.background='none'">${action}</button>
      </div>
    `
      )
      .join("")}
  </div>
`,
      confirm: "Close",
      cls: "m-btn-blue",
      onOk: () => {},
    },
    profiles: {
      title: "Manage Profiles",
      html: `
  <p style="font-size:14px;color:#666;margin-bottom:18px;">Each profile has its own personalised Netflix experience.</p>
  <div style="display:flex;flex-direction:column;gap:10px;">
    ${[
      {
        em: "😊",
        bg: "#4fc3f7",
        name: "John",
        sub: "You · All maturity ratings",
      },
      {
        em: "😄",
        bg: "#ffd54f",
        name: "Sarah",
        sub: "All maturity ratings",
      },
      {
        em: "😐",
        bg: "#e53935",
        name: "Alex",
        sub: "All maturity ratings",
      },
      {
        em: "kids",
        bg: "linear-gradient(135deg,#7b1fa2,#d81b60)",
        name: "Kids",
        sub: "Little Kids only",
        isKids: true,
      },
    ]
      .map(
        (p) => `
      <div onclick="showToast('Managing profile: ${
        p.name
      }')" style="display:flex;align-items:center;gap:14px;padding:13px 15px;border:1px solid #e0e0e0;border-radius:9px;cursor:pointer;transition:background 0.15s;" onmouseover="this.style.background='#f7f7f7'" onmouseout="this.style.background='white'">
        <div style="width:46px;height:46px;border-radius:50%;background:${
          p.bg
        };display:flex;align-items:center;justify-content:center;font-size:${
          p.isKids ? "12px" : "22px"
        };font-weight:${p.isKids ? "900" : "400"};color:${
          p.isKids ? "white" : "inherit"
        };font-family:Arial;flex-shrink:0;">${p.em}</div>
        <div style="flex:1;">
          <div style="font-size:15px;font-weight:700;">${p.name}</div>
          <div style="font-size:12px;color:#999;margin-top:1px;">${
            p.sub
          }</div>
        </div>
        <span style="color:#bbb;font-size:18px;">›</span>
      </div>
    `
      )
      .join("")}
    <div onclick="showToast('Add profile coming soon')" style="display:flex;align-items:center;gap:14px;padding:13px 15px;border:1.5px dashed #ccc;border-radius:9px;cursor:pointer;transition:background 0.15s;" onmouseover="this.style.background='#f7f7f7'" onmouseout="this.style.background='white'">
      <div style="width:46px;height:46px;border-radius:50%;background:#f0f0f0;display:flex;align-items:center;justify-content:center;font-size:24px;color:#555;flex-shrink:0;">+</div>
      <div style="font-size:15px;font-weight:600;color:#0071eb;">Add Profile</div>
    </div>
  </div>
`,
      confirm: "Done",
      cls: "m-btn-blue",
      onOk: () => {},
    },
  };

  let currentOk = null;

  function showModal(key) {
    const cfg = modals[key];
    if (!cfg) return;
    currentOk = cfg.onOk || null;
    document.getElementById("modalBox").innerHTML = `
<div class="m-title">${cfg.title}</div>
<div class="m-body">${cfg.html}</div>
<div class="m-actions">
  <button class="m-btn m-btn-cancel" onclick="closeModal()">Cancel</button>
  <button class="m-btn ${cfg.cls}" onclick="doOk()">${cfg.confirm}</button>
</div>
`;
    document.getElementById("modalOverlay").classList.add("open");
  }

  function doOk() {
    closeModal();
    if (currentOk) setTimeout(currentOk, 200);
  }

  function closeModal() {
    document.getElementById("modalOverlay").classList.remove("open");
  }

  function closeModalOutside(e) {
    if (e.target === document.getElementById("modalOverlay")) closeModal();
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });