:root {
  --bg: #07080b;
  --bg-2: #0b0d11;
  --panel: rgba(17, 19, 25, 0.82);
  --panel-strong: #101218;
  --panel-soft: rgba(255,255,255,0.035);

  --text: #f5f7fb;
  --muted: #9298a7;
  --muted-2: #626978;

  --line: rgba(255,255,255,0.08);
  --line-strong: rgba(255,255,255,0.13);

  --accent: #8cff5a;
  --accent-2: #52d8ff;
  --purple: #9c7cff;
  --orange: #ffad5a;
  --danger: #ff6262;

  --radius: 22px;
  --radius-small: 14px;

  --sidebar: 270px;

  --shadow:
    0 30px 80px rgba(0,0,0,.35);

  --font:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
}


* {
  box-sizing: border-box;
}


html {
  scroll-behavior: smooth;
}


body {
  margin: 0;
  min-height: 100vh;

  background:
    radial-gradient(
      circle at 80% 0%,
      rgba(140,255,90,.07),
      transparent 30%
    ),
    radial-gradient(
      circle at 20% 50%,
      rgba(82,216,255,.045),
      transparent 30%
    ),
    var(--bg);

  color: var(--text);
  font-family: var(--font);

  font-size: 16px;
  line-height: 1.5;

  overflow-x: hidden;
}


button,
input,
select,
textarea {
  font: inherit;
}


button {
  color: inherit;
}


button,
select {
  cursor: pointer;
}


::selection {
  background: rgba(140,255,90,.25);
  color: white;
}


/* BACKGROUND */

.noise {
  position: fixed;
  inset: 0;

  pointer-events: none;
  z-index: -3;

  opacity: .035;

  background-image:
    url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.5'/%3E%3C/svg%3E");
}


.grid-bg {
  position: fixed;
  inset: 0;

  pointer-events: none;
  z-index: -4;

  opacity: .18;

  background-image:
    linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px);

  background-size: 50px 50px;

  mask-image:
    linear-gradient(to bottom, black, transparent 85%);
}


.orb {
  position: fixed;

  width: 420px;
  height: 420px;

  border-radius: 50%;

  filter: blur(100px);

  pointer-events: none;

  z-index: -2;

  opacity: .07;
}


.orb-one {
  top: 5%;
  right: 10%;
  background: var(--accent);
}


.orb-two {
  bottom: 5%;
  left: 15%;
  background: var(--accent-2);
}


/* SIDEBAR */

.sidebar {
  position: fixed;

  left: 0;
  top: 0;
  bottom: 0;

  width: var(--sidebar);

  padding: 26px 18px;

  border-right: 1px solid var(--line);

  background:
    linear-gradient(
      180deg,
      rgba(12,14,18,.96),
      rgba(7,8,11,.94)
    );

  backdrop-filter: blur(30px);

  z-index: 100;

  display: flex;
  flex-direction: column;
}


.brand {
  display: flex;
  align-items: center;
  gap: 12px;

  padding: 4px 8px 26px;
}


.brand-mark {
  width: 35px;
  height: 35px;

  border-radius: 10px;

  border: 1px solid rgba(140,255,90,.45);

  display: grid;
  place-items: center;

  position: relative;

  background:
    linear-gradient(
      135deg,
      rgba(140,255,90,.13),
      rgba(82,216,255,.05)
    );
}


.brand-mark span {
  position: absolute;

  width: 12px;
  height: 12px;

  border: 2px solid var(--accent);

  transform: rotate(45deg);
}


.brand-mark span:last-child {
  width: 6px;
  height: 6px;

  border-color: var(--accent-2);
}


.brand-name {
  font-weight: 900;
  letter-spacing: .12em;
  font-size: 14px;
}


.brand-sub {
  font-size: 8px;
  letter-spacing: .13em;
  color: var(--muted);
  margin-top: 1px;
}


.profile-mini {
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 13px;

  border: 1px solid var(--line);

  background: rgba(255,255,255,.025);

  border-radius: 14px;
}


.avatar {
  width: 36px;
  height: 36px;

  border-radius: 50%;

  display: grid;
  place-items: center;

  background:
    linear-gradient(
      135deg,
      var(--accent),
      var(--accent-2)
    );

  color: #071006;

  font-weight: 950;
}


.profile-copy {
  display: flex;
  flex-direction: column;

  min-width: 0;
}


.profile-copy strong {
  font-size: 13px;
}


.profile-copy span {
  color: var(--muted);
  font-size: 10px;
  margin-top: 2px;

  white-space: nowrap;
}


.status-dot {
  margin-left: auto;

  width: 8px;
  height: 8px;

  border-radius: 50%;

  background: var(--accent);

  box-shadow:
    0 0 12px var(--accent);
}


.side-nav {
  margin-top: 28px;

  display: flex;
  flex-direction: column;
  gap: 6px;
}


.nav-item {
  width: 100%;

  border: 0;
  background: transparent;

  padding: 13px 12px;

  display: flex;
  align-items: center;
  gap: 12px;

  border-radius: 12px;

  color: var(--muted);

  font-size: 14px;
  font-weight: 650;

  text-align: left;

  transition: .2s ease;
}


.nav-item:hover {
  color: var(--text);
  background: rgba(255,255,255,.04);
}


.nav-item.active {
  color: var(--text);

  background:
    linear-gradient(
      90deg,
      rgba(140,255,90,.12),
      rgba(140,255,90,.035)
    );

  box-shadow:
    inset 2px 0 0 var(--accent);
}


.nav-icon {
  width: 22px;

  text-align: center;

  font-size: 17px;

  color: var(--muted-2);
}


.nav-item.active .nav-icon {
  color: var(--accent);
}


.sidebar-bottom {
  margin-top: auto;
}


.start-card {
  padding: 15px;

  border-radius: 15px;

  border: 1px solid var(--line);

  background:
    linear-gradient(
      135deg,
      rgba(140,255,90,.08),
      rgba(255,255,255,.02)
    );

  display: flex;
  flex-direction: column;
  gap: 4px;
}


.tiny-label {
  color: var(--accent);

  font-size: 9px;
  font-weight: 900;

  letter-spacing: .15em;
}


.start-card strong {
  font-size: 17px;
  letter-spacing: .04em;
}


.start-card span:last-child {
  color: var(--muted);
  font-size: 10px;
}


.sidebar-reset {
  width: 100%;

  margin-top: 10px;

  padding: 9px;

  border: 0;

  background: transparent;

  color: var(--muted-2);

  font-size: 11px;
}


.sidebar-reset:hover {
  color: var(--danger);
}


/* MOBILE HEADER */

.mobile-header {
  display: none;
}


/* MAIN */

.main {
  margin-left: var(--sidebar);

  width: calc(100% - var(--sidebar));

  padding: 0 48px 60px;

  max-width: 1800px;
}


.topbar {
  height: 78px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid var(--line);
}


.breadcrumbs {
  display: flex;
  align-items: center;
  gap: 10px;

  color: var(--muted);

  font-size: 11px;
  font-weight: 800;

  letter-spacing: .1em;
}


.breadcrumbs span:first-child {
  color: var(--text);
}


.breadcrumbs b {
  color: var(--muted-2);
}


.top-actions {
  display: flex;
  gap: 8px;
}


.top-btn {
  padding: 9px 13px;

  border-radius: 10px;

  border: 1px solid var(--line);

  background: rgba(255,255,255,.025);

  color: var(--muted);

  font-size: 12px;
  font-weight: 750;
}


.top-btn:hover {
  color: var(--text);
  border-color: var(--line-strong);
}


.top-btn.primary {
  color: #071006;

  border-color: var(--accent);

  background: var(--accent);

  font-weight: 900;
}


/* HERO */

.hero-section {
  padding: 55px 0 30px;

  display: grid;
  grid-template-columns: minmax(0, 1fr) 310px;

  gap: 45px;

  align-items: center;
}


.hero-left {
  min-width: 0;
}


.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;

  color: var(--accent);

  font-size: 11px;
  font-weight: 900;

  letter-spacing: .15em;

  margin-bottom: 18px;
}


.pulse {
  width: 7px;
  height: 7px;

  border-radius: 50%;

  background: var(--accent);

  box-shadow:
    0 0 14px var(--accent);
}


.hero-section h1 {
  margin: 0;

  max-width: 950px;

  font-size:
    clamp(48px, 6vw, 92px);

  line-height: .93;

  letter-spacing: -.065em;

  font-weight: 950;
}


.hero-section h1 span {
  color: var(--accent);
}


.hero-section h1 em {
  display: block;

  font-style: normal;

  color: transparent;

  -webkit-text-stroke: 1px rgba(255,255,255,.38);
}


.hero-description {
  max-width: 690px;

  color: var(--muted);

  font-size: 16px;

  line-height: 1.75;

  margin: 25px 0 24px;
}


.hero-meta {
  display: flex;
  align-items: center;

  gap: 22px;
}


.hero-meta > div:not(.meta-divider) {
  display: flex;
  flex-direction: column;
  gap: 2px;
}


.hero-meta span {
  color: var(--muted-2);

  font-size: 8px;
  font-weight: 900;

  letter-spacing: .14em;
}


.hero-meta strong {
  font-size: 12px;
  letter-spacing: .04em;
}


.meta-divider {
  width: 1px;
  height: 25px;

  background: var(--line);
}


/* DAY CARD */

.day-card {
  padding: 22px;

  border-radius: 24px;

  border: 1px solid var(--line-strong);

  background:
    radial-gradient(
      circle at 80% 20%,
      rgba(140,255,90,.11),
      transparent 40%
    ),
    rgba(15,17,22,.9);

  box-shadow: var(--shadow);
}


.day-top {
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: var(--muted);

  font-size: 10px;
  font-weight: 900;

  letter-spacing: .14em;
}


.live-pill {
  display: flex;
  align-items: center;
  gap: 6px;

  color: var(--accent);

  padding: 5px 8px;

  border-radius: 50px;

  background: rgba(140,255,90,.08);
}


.live-pill i {
  width: 5px;
  height: 5px;

  border-radius: 50%;

  background: var(--accent);
}


.day-number {
  margin-top: 17px;

  font-size: 64px;

  line-height: 1;

  letter-spacing: -.06em;

  font-weight: 950;
}


.day-label {
  margin-top: 5px;

  font-size: 11px;
  font-weight: 900;

  color: var(--accent);

  letter-spacing: .13em;
}


.day-line {
  display: flex;
  justify-content: space-between;

  margin-top: 25px;

  color: var(--muted);

  font-size: 10px;
  font-weight: 800;
}


.day-progress {
  height: 5px;

  margin-top: 9px;

  border-radius: 10px;

  overflow: hidden;

  background: rgba(255,255,255,.07);
}


.day-progress div {
  height: 100%;

  width: 0%;

  border-radius: inherit;

  background:
    linear-gradient(
      90deg,
      var(--accent),
      var(--accent-2)
    );

  transition: width .5s ease;
}


/* METRICS */

.metrics-grid {
  display: grid;

  grid-template-columns:
    repeat(4, minmax(0, 1fr));

  gap: 14px;

  margin-top: 15px;
}


.metric-card {
  min-height: 195px;

  padding: 20px;

  border-radius: var(--radius);

  border: 1px solid var(--line);

  background: var(--panel);

  backdrop-filter: blur(20px);

  display: flex;
  flex-direction: column;

  box-shadow: 0 15px 50px rgba(0,0,0,.13);
}


.metric-card:hover {
  border-color: var(--line-strong);
}


.metric-head {
  display: flex;
  justify-content: space-between;

  color: var(--muted-2);

  font-size: 9px;
  font-weight: 900;

  letter-spacing: .14em;
}


.metric-main {
  margin-top: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
}


.metric-main > strong {
  font-size: 47px;

  line-height: 1;

  letter-spacing: -.06em;
}


.circular-progress {
  position: relative;

  width: 64px;
  height: 64px;
}


.circular-progress svg {
  width: 100%;
  height: 100%;

  transform: rotate(-90deg);
}


.circular-progress circle {
  fill: none;

  stroke-width: 7;
}


.circle-bg {
  stroke: rgba(255,255,255,.06);
}


.circle-value {
  stroke: var(--accent);

  stroke-linecap: round;

  stroke-dasharray: 264;

  stroke-dashoffset: 264;

  transition: .5s ease;
}


.circular-progress span {
  position: absolute;

  inset: 0;

  display: grid;
  place-items: center;

  font-size: 10px;
  font-weight: 900;
}


.metric-foot {
  display: flex;

  justify-content: space-between;

  margin-top: auto;

  color: var(--muted);

  font-size: 10px;
}


.streak-number {
  margin-top: 22px;

  display: flex;
  align-items: baseline;
  gap: 8px;
}


.streak-number strong {
  font-size: 48px;

  letter-spacing: -.06em;
}


.streak-number span {
  color: var(--accent);

  font-size: 10px;
  font-weight: 900;

  letter-spacing: .12em;
}


.streak-dots {
  display: flex;

  gap: 5px;

  margin-top: 17px;
}


.streak-dots i {
  width: 19px;
  height: 5px;

  border-radius: 5px;

  background: rgba(255,255,255,.07);
}


.streak-dots i.active {
  background: var(--accent);

  box-shadow:
    0 0 8px rgba(140,255,90,.35);
}


.phase-number {
  margin-top: 22px;

  color: var(--accent);

  font-size: 10px;
  font-weight: 900;

  letter-spacing: .15em;
}


.phase-name {
  margin-top: 4px;

  font-size: 22px;
}


.mini-progress {
  height: 5px;

  margin-top: 15px;

  background: rgba(255,255,255,.06);

  border-radius: 10px;

  overflow: hidden;
}


.mini-progress div {
  height: 100%;

  width: 0%;

  background: var(--accent);

  transition: width .5s;
}


.next-mission {
  margin-top: 18px;

  display: flex;
  flex-direction: column;

  gap: 6px;
}


.next-tag {
  align-self: flex-start;

  padding: 4px 7px;

  border-radius: 5px;

  background: rgba(140,255,90,.08);

  color: var(--accent);

  font-size: 8px;
  font-weight: 900;

  letter-spacing: .1em;
}


.next-mission strong {
  font-size: 18px;

  line-height: 1.2;
}


.next-mission button {
  width: fit-content;

  margin-top: 5px;

  border: 0;

  background: transparent;

  color: var(--accent);

  font-size: 11px;
  font-weight: 900;

  padding: 0;
}


/* SECTIONS */

.section-block {
  margin-top: 70px;

  scroll-margin-top: 25px;
}


.section-heading {
  display: flex;

  justify-content: space-between;
  align-items: flex-end;

  gap: 30px;

  margin-bottom: 22px;
}


.section-kicker {
  color: var(--accent);

  font-size: 9px;
  font-weight: 950;

  letter-spacing: .17em;
}


.section-heading h2 {
  margin: 5px 0 5px;

  font-size: 31px;

  letter-spacing: -.035em;
}


.section-heading p {
  margin: 0;

  color: var(--muted);

  font-size: 13px;
}


/* FILTERS */

.section-actions {
  display: flex;
  gap: 6px;
}


.filter-btn {
  padding: 9px 12px;

  border: 1px solid var(--line);

  border-radius: 8px;

  background: transparent;

  color: var(--muted);

  font-size: 10px;
  font-weight: 900;
}


.filter-btn.active {
  background: rgba(140,255,90,.1);

  color: var(--accent);

  border-color: rgba(140,255,90,.3);
}


/* TODAY */

.today-grid {
  display: grid;

  grid-template-columns:
    minmax(0, 1.6fr)
    minmax(250px, .7fr);

  gap: 14px;
}


.mission-card,
.command-card {
  border: 1px solid var(--line);

  border-radius: var(--radius);

  background: var(--panel);

  padding: 25px;
}


.mission-top {
  display: flex;
  align-items: center;

  gap: 15px;
}


.mission-icon {
  width: 50px;
  height: 50px;

  display: grid;
  place-items: center;

  border-radius: 13px;

  background: rgba(140,255,90,.08);

  color: var(--accent);

  border: 1px solid rgba(140,255,90,.18);

  font-weight: 950;
}


.mission-label {
  color: var(--muted-2);

  font-size: 9px;
  font-weight: 900;

  letter-spacing: .13em;
}


.mission-card h3 {
  margin: 3px 0 0;

  font-size: 22px;
}


.mission-card > p {
  color: var(--muted);

  font-size: 13px;

  line-height: 1.7;

  max-width: 700px;

  margin: 18px 0;
}


.mission-actions {
  display: flex;
  gap: 8px;

  flex-wrap: wrap;
}


.complete-large,
.resource-large {
  border-radius: 10px;

  padding: 11px 15px;

  font-size: 11px;
  font-weight: 900;
}


.complete-large {
  border: 1px solid var(--accent);

  background: var(--accent);

  color: #071006;
}


.resource-large {
  border: 1px solid var(--line);

  background: rgba(255,255,255,.035);

  color: var(--text);
}


.resource-large:hover {
  border-color: var(--accent-2);
  color: var(--accent-2);
}


.command-card {
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 17px;
}


.command-row {
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid var(--line);

  padding-bottom: 12px;
}


.command-row:last-child {
  border-bottom: 0;
}


.command-row span {
  color: var(--muted);

  font-size: 10px;
  font-weight: 900;

  letter-spacing: .1em;
}


.command-row strong {
  font-size: 21px;
}


/* ROADMAP CONTROLS */

.roadmap-controls {
  display: flex;
  align-items: center;
  gap: 8px;
}


.search-box {
  width: 260px;

  height: 42px;

  display: flex;
  align-items: center;
  gap: 8px;

  padding: 0 10px;

  border-radius: 10px;

  border: 1px solid var(--line);

  background: rgba(255,255,255,.025);
}


.search-box > span {
  color: var(--muted-2);
}


.search-box input {
  width: 100%;

  border: 0;
  outline: 0;

  background: transparent;

  color: var(--text);

  font-size: 12px;
}


.search-box input::placeholder {
  color: var(--muted-2);
}


.search-box kbd {
  white-space: nowrap;

  color: var(--muted-2);

  border: 1px solid var(--line);

  padding: 2px 5px;

  border-radius: 4px;

  font-size: 8px;
}


#phaseSelect {
  height: 42px;

  padding: 0 10px;

  border-radius: 10px;

  border: 1px solid var(--line);

  background: var(--panel-strong);

  color: var(--text);

  font-size: 11px;
}


/* ROADMAP PHASE */

.phase-block {
  border: 1px solid var(--line);

  border-radius: var(--radius);

  background: rgba(12,14,18,.75);

  overflow: hidden;

  margin-bottom: 12px;
}


.phase-header {
  width: 100%;

  border: 0;

  background: transparent;

  padding: 19px 20px;

  display: grid;

  grid-template-columns:
    55px
    minmax(200px, 1fr)
    170px
    100px
    30px;

  align-items: center;

  gap: 16px;

  text-align: left;
}


.phase-header:hover {
  background: rgba(255,255,255,.025);
}


.phase-index {
  color: var(--accent);

  font-size: 11px;
  font-weight: 950;

  letter-spacing: .1em;
}


.phase-title strong {
  display: block;

  font-size: 17px;
}


.phase-title span {
  display: block;

  margin-top: 2px;

  color: var(--muted);

  font-size: 10px;
}


.phase-bar {
  height: 6px;

  background: rgba(255,255,255,.06);

  border-radius: 10px;

  overflow: hidden;
}


.phase-bar div {
  height: 100%;

  width: 0%;

  background:
    linear-gradient(
      90deg,
      var(--accent),
      var(--accent-2)
    );
}


.phase-percent {
  color: var(--muted);

  font-size: 10px;
  font-weight: 900;

  text-align: right;
}


.phase-arrow {
  color: var(--muted);

  transition: .2s;
}


.phase-block.open .phase-arrow {
  transform: rotate(180deg);
}


.phase-tasks {
  display: none;

  padding: 0 10px 10px;
}


.phase-block.open .phase-tasks {
  display: block;
}


/* TASK */

.task-row {
  display: grid;

  grid-template-columns:
    35px
    minmax(0, 1fr)
    120px
    105px
    105px;

  align-items: center;

  gap: 12px;

  padding: 13px 10px;

  border-top: 1px solid rgba(255,255,255,.045);

  transition: .18s;
}


.task-row:hover {
  background: rgba(255,255,255,.025);
}


.task-row.completed {
  opacity: .58;
}


.task-check {
  width: 26px;
  height: 26px;

  border-radius: 7px;

  border: 1px solid rgba(255,255,255,.15);

  background: rgba(255,255,255,.025);

  color: transparent;

  display: grid;
  place-items: center;

  font-size: 14px;
  font-weight: 950;

  transition: .2s;
}


.task-check:hover {
  border-color: var(--accent);
}


.task-row.completed .task-check {
  background: var(--accent);

  border-color: var(--accent);

  color: #071006;
}


.task-main {
  min-width: 0;
}


.task-title {
  font-size: 14px;

  font-weight: 800;

  color: var(--text);
}


.task-row.completed .task-title {
  text-decoration: line-through;
}


.task-description {
  margin-top: 3px;

  color: var(--muted);

  font-size: 10px;

  white-space: nowrap;

  overflow: hidden;

  text-overflow: ellipsis;
}


.task-tag {
  justify-self: start;

  padding: 5px 7px;

  border-radius: 5px;

  background: rgba(255,255,255,.04);

  border: 1px solid var(--line);

  color: var(--muted);

  font-size: 8px;
  font-weight: 900;

  letter-spacing: .08em;
}


.task-level {
  color: var(--muted-2);

  font-size: 9px;
  font-weight: 850;
}


.task-resource,
.task-more {
  justify-self: stretch;

  padding: 8px 8px;

  border-radius: 8px;

  border: 1px solid var(--line);

  background: rgba(255,255,255,.025);

  color: var(--text);

  font-size: 9px;
  font-weight: 900;
}


.task-resource:hover {
  color: var(--accent-2);

  border-color: rgba(82,216,255,.35);
}


.task-more:hover {
  color: var(--accent);
  border-color: rgba(140,255,90,.3);
}


.no-results {
  padding: 40px;

  text-align: center;

  color: var(--muted);

  border: 1px dashed var(--line);

  border-radius: 16px;
}


/* PROJECTS */

.projects-grid {
  display: grid;

  grid-template-columns:
    repeat(4, minmax(0,1fr));

  gap: 13px;
}


.project-card {
  position: relative;

  min-height: 235px;

  padding: 20px;

  border-radius: var(--radius);

  border: 1px solid var(--line);

  background:
    linear-gradient(
      145deg,
      rgba(255,255,255,.045),
      rgba(255,255,255,.015)
    );

  overflow: hidden;

  display: flex;
  flex-direction: column;
}


.project-card::after {
  content: "";

  position: absolute;

  width: 130px;
  height: 130px;

  right: -60px;
  bottom: -60px;

  border-radius: 50%;

  background: rgba(140,255,90,.07);

  filter: blur(25px);
}


.project-index {
  color: var(--muted-2);

  font-size: 9px;
  font-weight: 950;

  letter-spacing: .13em;
}


.project-card h3 {
  margin: 17px 0 6px;

  font-size: 18px;
}


.project-card p {
  color: var(--muted);

  font-size: 11px;

  line-height: 1.65;

  margin: 0;
}


.project-stack {
  display: flex;

  flex-wrap: wrap;

  gap: 5px;

  margin-top: 15px;
}


.project-stack span {
  padding: 4px 6px;

  border-radius: 4px;

  background: rgba(255,255,255,.04);

  color: var(--muted);

  font-size: 8px;
}


.project-bottom {
  margin-top: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: 18px;
}


.project-status {
  display: flex;
  align-items: center;
  gap: 7px;

  color: var(--muted);

  font-size: 9px;
  font-weight: 900;
}


.project-status i {
  width: 7px;
  height: 7px;

  border-radius: 50%;

  background: var(--muted-2);
}


.project-card.completed .project-status {
  color: var(--accent);
}


.project-card.completed .project-status i {
  background: var(--accent);

  box-shadow:
    0 0 10px rgba(140,255,90,.4);
}


.project-check {
  width: 30px;
  height: 30px;

  border-radius: 8px;

  border: 1px solid var(--line);

  background: transparent;

  color: var(--muted);
}


.project-card.completed .project-check {
  background: var(--accent);

  border-color: var(--accent);

  color: #071006;
}


/* SOCIAL */

.social-grid {
  display: grid;

  grid-template-columns:
    repeat(2, minmax(0,1fr));

  gap: 14px;
}


.social-card {
  padding: 24px;

  border-radius: var(--radius);

  border: 1px solid var(--line);

  background: var(--panel);
}


.social-header {
  display: flex;
  align-items: center;

  gap: 13px;
}


.social-logo {
  width: 48px;
  height: 48px;

  border-radius: 13px;

  display: grid;
  place-items: center;

  background: rgba(255,255,255,.05);

  border: 1px solid var(--line);

  font-size: 18px;
  font-weight: 950;
}


.social-header span {
  color: var(--muted-2);

  font-size: 9px;
  font-weight: 900;

  letter-spacing: .12em;
}


.social-header h3 {
  margin: 2px 0 0;

  font-size: 19px;
}


.social-progress {
  margin-top: 23px;
}


.social-progress-top {
  display: flex;
  justify-content: space-between;

  margin-bottom: 8px;

  color: var(--muted);

  font-size: 10px;
}


.social-progress-top strong {
  color: var(--text);
}


.progress-track {
  height: 5px;

  background: rgba(255,255,255,.06);

  border-radius: 10px;

  overflow: hidden;
}


.progress-track div {
  height: 100%;

  width: 0%;

  background: var(--accent);

  transition: width .4s;
}


.check-list {
  margin-top: 16px;
}


.check-item {
  display: flex;
  align-items: flex-start;

  gap: 10px;

  padding: 10px 0;

  border-bottom: 1px solid rgba(255,255,255,.045);

  cursor: pointer;
}


.check-item:last-child {
  border-bottom: 0;
}


.check-box {
  flex: 0 0 auto;

  width: 18px;
  height: 18px;

  border-radius: 5px;

  border: 1px solid var(--line-strong);

  display: grid;
  place-items: center;

  color: transparent;

  font-size: 10px;
  font-weight: 900;
}


.check-item.done .check-box {
  color: #071006;

  background: var(--accent);

  border-color: var(--accent);
}


.check-item.done .check-copy {
  opacity: .5;

  text-decoration: line-through;
}


.check-copy {
  font-size: 11px;
  font-weight: 700;
}


.check-copy span {
  display: block;

  color: var(--muted);

  font-size: 9px;

  margin-top: 2px;

  font-weight: 500;
}


/* SYSTEM */

.system-grid {
  display: grid;

  grid-template-columns:
    repeat(2, minmax(0,1fr));

  gap: 12px;
}


.system-card {
  display: grid;

  grid-template-columns: 42px minmax(0,1fr) auto;

  align-items: center;

  gap: 13px;

  padding: 18px;

  border: 1px solid var(--line);

  border-radius: 16px;

  background: rgba(255,255,255,.025);
}


.system-icon {
  width: 38px;
  height: 38px;

  display: grid;
  place-items: center;

  border-radius: 10px;

  background: rgba(255,255,255,.04);

  color: var(--accent);

  font-weight: 900;
}


.system-card strong {
  display: block;

  font-size: 13px;
}


.system-card p {
  margin: 3px 0 0;

  color: var(--muted);

  font-size: 10px;
}


.system-status {
  color: var(--accent);

  font-size: 8px;
  font-weight: 950;

  letter-spacing: .1em;
}


.system-btn {
  padding: 8px 11px;

  border-radius: 8px;

  border: 1px solid var(--line);

  background: rgba(255,255,255,.04);

  color: var(--text);

  font-size: 10px;
  font-weight: 900;
}


.system-btn:hover {
  border-color: var(--accent);
  color: var(--accent);
}


.system-btn.danger:hover {
  border-color: var(--danger);
  color: var(--danger);
}


.danger-card .system-icon {
  color: var(--danger);
}


/* FOOTER */

.footer {
  margin-top: 80px;

  padding-top: 20px;

  border-top: 1px solid var(--line);

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: var(--muted);

  font-size: 9px;

  letter-spacing: .08em;
}


.footer div {
  color: var(--text);

  font-weight: 950;
}


.footer strong {
  color: var(--accent);
}


/* MODAL */

.modal-backdrop {
  position: fixed;

  inset: 0;

  background: rgba(0,0,0,.72);

  backdrop-filter: blur(10px);

  display: none;

  place-items: center;

  z-index: 500;

  padding: 20px;
}


.modal-backdrop.open {
  display: grid;
}


.task-modal {
  position: relative;

  width: min(650px, 100%);

  padding: 30px;

  border-radius: 24px;

  border: 1px solid var(--line-strong);

  background:
    radial-gradient(
      circle at top right,
      rgba(140,255,90,.08),
      transparent 35%
    ),
    #0e1015;

  box-shadow:
    0 40px 120px rgba(0,0,0,.7);
}


.modal-close {
  position: absolute;

  right: 16px;
  top: 16px;

  width: 32px;
  height: 32px;

  border-radius: 8px;

  border: 1px solid var(--line);

  background: rgba(255,255,255,.03);

  color: var(--muted);

  font-size: 19px;
}


.modal-kicker {
  color: var(--accent);

  font-size: 9px;
  font-weight: 950;

  letter-spacing: .15em;
}


.task-modal h2 {
  margin: 7px 45px 13px 0;

  font-size: 29px;

  line-height: 1.1;
}


.modal-meta {
  display: flex;

  flex-wrap: wrap;

  gap: 6px;
}


.modal-meta span {
  padding: 5px 7px;

  border: 1px solid var(--line);

  border-radius: 5px;

  color: var(--muted);

  font-size: 8px;
  font-weight: 900;
}


.task-modal > p {
  margin: 20px 0;

  color: var(--muted);

  font-size: 13px;

  line-height: 1.7;
}


.notes-title {
  color: var(--muted-2);

  font-size: 9px;
  font-weight: 900;

  letter-spacing: .13em;

  margin-bottom: 7px;
}


#modalNotes {
  width: 100%;

  min-height: 130px;

  resize: vertical;

  padding: 13px;

  border-radius: 11px;

  border: 1px solid var(--line);

  outline: 0;

  background: rgba(255,255,255,.025);

  color: var(--text);

  font-size: 12px;

  line-height: 1.6;
}


#modalNotes:focus {
  border-color: rgba(140,255,90,.4);
}


.modal-actions {
  display: flex;

  gap: 8px;

  margin-top: 13px;
}


/* RESPONSIVE */

@media (max-width: 1250px) {

  .main {
    padding-left: 30px;
    padding-right: 30px;
  }

  .projects-grid {
    grid-template-columns:
      repeat(2, minmax(0,1fr));
  }

  .metrics-grid {
    grid-template-columns:
      repeat(2, minmax(0,1fr));
  }

  .hero-section {
    grid-template-columns:
      minmax(0,1fr)
      280px;
  }
}


@media (max-width: 1000px) {

  :root {
    --sidebar: 230px;
  }

  .main {
    padding-left: 22px;
    padding-right: 22px;
  }

  .hero-section {
    grid-template-columns: 1fr;
  }

  .day-card {
    max-width: 400px;
  }

  .roadmap-controls {
    width: 100%;
  }

  .section-heading {
    align-items: flex-start;
    flex-direction: column;
  }

  .roadmap-controls {
    flex-wrap: wrap;
  }

  .search-box {
    width: 100%;
  }

  .task-row {
    grid-template-columns:
      32px
      minmax(0,1fr)
      100px
      95px;
  }

  .task-level {
    display: none;
  }

  .social-grid,
  .system-grid {
    grid-template-columns: 1fr;
  }
}


@media (max-width: 760px) {

  :root {
    --sidebar: 0px;
  }

  body {
    font-size: 15px;
  }

  .sidebar {
    transform: translateX(-100%);

    width: 280px;

    transition: .25s ease;
  }

  .sidebar.open {
    transform: translateX(0);
  }

  .mobile-header {
    position: sticky;

    top: 0;

    z-index: 90;

    height: 62px;

    padding: 0 15px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-bottom: 1px solid var(--line);

    background: rgba(7,8,11,.88);

    backdrop-filter: blur(20px);
  }

  .mobile-brand {
    display: flex;
    align-items: center;
    gap: 7px;

    font-size: 11px;
    font-weight: 950;

    letter-spacing: .1em;
  }

  .brand-dot {
    width: 7px;
    height: 7px;

    border-radius: 50%;

    background: var(--accent);

    box-shadow:
      0 0 10px var(--accent);
  }

  .icon-btn {
    width: 36px;
    height: 36px;

    border-radius: 9px;

    border: 1px solid var(--line);

    background: rgba(255,255,255,.03);

    color: var(--text);

    font-size: 18px;
  }

  .main {
    width: 100%;

    margin-left: 0;

    padding:
      0
      15px
      45px;
  }

  .topbar {
    display: none;
  }

  .hero-section {
    padding-top: 35px;
  }

  .hero-section h1 {
    font-size: 47px;
  }

  .hero-description {
    font-size: 14px;
  }

  .hero-meta {
    gap: 12px;
    flex-wrap: wrap;
  }

  .meta-divider {
    display: none;
  }

  .metrics-grid {
    grid-template-columns: 1fr;
  }

  .metric-card {
    min-height: 175px;
  }

  .section-block {
    margin-top: 50px;
  }

  .section-heading h2 {
    font-size: 26px;
  }

  .section-actions {
    width: 100%;
  }

  .filter-btn {
    flex: 1;
  }

  .today-grid {
    grid-template-columns: 1fr;
  }

  .roadmap-controls {
    display: grid;

    grid-template-columns: 1fr 130px;

    width: 100%;
  }

  .search-box {
    width: 100%;
  }

  .search-box kbd {
    display: none;
  }

  .phase-header {
    grid-template-columns:
      45px
      minmax(0,1fr)
      25px;
  }

  .phase-bar,
  .phase-percent {
    display: none;
  }

  .task-row {
    grid-template-columns:
      30px
      minmax(0,1fr)
      85px;

    gap: 8px;
  }

  .task-tag {
    display: none;
  }

  .task-more {
    display: none;
  }

  .task-resource {
    font-size: 8px;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .social-grid {
    grid-template-columns: 1fr;
  }

  .system-card {
    grid-template-columns: 38px minmax(0,1fr);
  }

  .system-btn,
  .system-status {
    grid-column: 2;
    justify-self: start;
  }

  .footer {
    flex-direction: column;

    align-items: flex-start;

    gap: 7px;
  }
}


@media (max-width: 450px) {

  .hero-section h1 {
    font-size: 40px;
  }

  .day-number {
    font-size: 55px;
  }

  .mission-card,
  .command-card,
  .social-card {
    padding: 18px;
  }

  .task-title {
    font-size: 12px;
  }

  .task-description {
    font-size: 9px;
  }

  .task-resource {
    padding: 7px 5px;
  }
}
