import { useState } from "react";

type View = "home" | "flow" | "dashboard" | "parent" | "paths" | "chat" | "community" | "support" | "auth" | "plans" | "system";

const photo =
  "https://images.unsplash.com/photo-1567886076836-365a137bbe46?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1200";

function Icon({ name, size = 20 }: { name: string; size?: number }) {
  const paths: Record<string, React.ReactNode> = {
    arrow: <><path d="M5 12h14M12 5l7 7-7 7" /></>,
    spark: <><path d="m12 3 1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3Z" /><path d="m5 16 .7 2.3L8 19l-2.3.7L5 22l-.7-2.3L2 19l2.3-.7L5 16Z" /></>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></>,
    play: <path d="m9 7 8 5-8 5V7Z" />,
    chart: <><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></>,
    chat: <><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z" /><path d="M8 11h.01M12 11h.01M16 11h.01" /></>,
    user: <><circle cx="12" cy="8" r="4" /><path d="M4 22a8 8 0 0 1 16 0" /></>,
    heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />,
    book: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14Z" /><path d="M8 7h8M8 11h6" /></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name] || paths.spark}</svg>;
}

const nav: { id: View; label: string }[] = [
  { id: "home", label: "خانه" },
  { id: "dashboard", label: "داشبورد" },
  { id: "paths", label: "مسیرهای رشد" },
  { id: "chat", label: "همراه من" },
  { id: "community", label: "انجمن" },
  { id: "support", label: "پشتیبانی" },
  { id: "plans", label: "اشتراک" },
];

const areas = [
  ["سلامت", 72, "#F06E5B"], ["تغذیه", 58, "#F6A94A"], ["پوشاک", 46, "#B77CE8"],
  ["ورزش", 81, "#4FBF9F"], ["تفریح", 64, "#57A8E8"], ["روابط", 53, "#EC7197"],
  ["تحصیلات", 76, "#716BE8"], ["مهارت‌آموزی", 68, "#DA8C44"], ["شبکه‌سازی", 41, "#45A6A0"],
];

function Header({ view, setView }: { view: View; setView: (v: View) => void }) {
  return <header className="header">
    <button className="brand" onClick={() => setView("home")}><span className="brand-mark"><Icon name="spark" /></span><span><b>فردای من</b><small>future4teen</small></span></button>
    <nav>{nav.map((item) => <button key={item.id} className={view === item.id ? "active" : ""} onClick={() => setView(item.id)}>{item.label}</button>)}</nav>
    <div className="header-actions"><button className="link-btn" onClick={() => setView("auth")}>ورود</button><button className="primary small" onClick={() => setView("auth")}>شروع مسیر من <Icon name="arrow" size={17} /></button></div>
  </header>;
}

function Home({ setView }: { setView: (v: View) => void }) {
  return <main>
    <section className="hero">
      <div className="hero-copy">
        <div className="eyebrow"><Icon name="spark" size={16} /> اینجا قراره خودِ واقعی‌ات رو بیشتر بشناسی</div>
        <h1>سلام! آماده‌ای آینده‌ای که<br />دوستش داری رو <em>بسازی؟</em></h1>
        <p>هر چیزی که برای حال خوب و آینده‌ات نیاز داری، یک‌جا کنارته؛ از سلامت و دوست‌ها تا درس، مهارت و پیدا کردن مسیر خودت. بدون قضاوت، درست با سرعت خودت.</p>
        <div className="hero-actions">
          <button className="primary" onClick={() => setView("flow")}>من یک نوجوانم <Icon name="arrow" size={19} /></button>
          <button className="secondary" onClick={() => setView("parent")}><Icon name="shield" size={19} /> من یک والدم</button>
        </div>
        <div className="trust"><span className="avatars"><i>ن</i><i>س</i><i>ر</i></span><span><b>+۲,۴۰۰ دختر</b> مسیر رشدشان را شروع کرده‌اند</span></div>
      </div>
      <div className="hero-visual">
        <div className="blob"></div>
        <img src={photo} alt="نوجوانی در حال یادگیری و ساختن آینده خود" />
        <div className="float-card progress-card"><span className="round-icon coral"><Icon name="chart" /></span><div><small>رشد این ماه</small><b>۲۴٪ پیشرفت</b></div><strong>↑</strong></div>
        <div className="float-card ai-card"><span className="round-icon violet"><Icon name="chat" /></span><div><b>همراه هوشمند تو</b><small>همیشه کنارتم، نهال!</small></div></div>
        <span className="doodle d1">✦</span><span className="doodle d2">⌁</span>
      </div>
    </section>
    <section className="promise">
      <div><span className="section-kicker">همه‌چیز برای رشد تو</span><h2>یک زندگی، ۹ بُعد مهم</h2><p>برای آینده فقط نمره مهم نیست. با یک نگاه کامل، همه ابعاد زندگی‌ات را با هم رشد می‌دهیم.</p></div>
      <div className="mini-areas">{areas.slice(0, 5).map(([name, , color]) => <span key={String(name)}><i style={{ background: String(color) }}></i>{name}</span>)}</div>
    </section>
  </main>;
}

function Flow() {
  const [persona, setPersona] = useState<"teen" | "parent">("teen");
  const teenSteps = [
    ["ثبت‌نام امن", "شماره موبایل و تأیید والد"], ["کشف خودم", "پرسش‌نامه علایق و هدف‌ها"], ["نقشه شخصی", "پیشنهاد مسیر ۹گانه"], ["قدم‌های روزانه", "درس‌های کوتاه و تمرین"], ["همراهی هوشمند", "دستیار AI و منتور انسانی"], ["جشن پیشرفت", "گزارش رشد و نشان‌ها"],
  ];
  const parentSteps = [
    ["ساخت حساب والد", "احراز هویت و اتصال فرزند"], ["تأیید آگاهانه", "تنظیم رضایت و حریم خصوصی"], ["شناخت مسیر", "مشاهده هدف‌های توافق‌شده"], ["پیگیری سالم", "گزارش کلی بدون نقض حریم"], ["گفت‌وگوی بهتر", "راهنمای حمایت از نوجوان"], ["مدیریت اشتراک", "پلن، منتور و تنظیمات"],
  ];
  const steps = persona === "teen" ? teenSteps : parentSteps;
  return <main className="page">
    <div className="page-heading"><span className="section-kicker">USER FLOW</span><h1>دو مسیر، یک هدف مشترک</h1><p>استقلال نوجوان در کنار اطمینان و همراهی والدین.</p></div>
    <div className="segmented"><button className={persona === "teen" ? "selected" : ""} onClick={() => setPersona("teen")}><Icon name="spark" /> مسیر نوجوان</button><button className={persona === "parent" ? "selected" : ""} onClick={() => setPersona("parent")}><Icon name="shield" /> مسیر والدین</button></div>
    <div className="flow-grid">{steps.map(([title, sub], i) => <div className="flow-item" key={title}><span>{String(i + 1).padStart(2, "0")}</span><div className="flow-icon"><Icon name={i === 0 ? "user" : i === 4 ? "chat" : i === 5 ? "chart" : "spark"} /></div><h3>{title}</h3><p>{sub}</p>{i < steps.length - 1 && <i className="flow-line" />}</div>)}</div>
    <div className="privacy-note"><Icon name="shield" /><div><b>مرز امن حریم خصوصی</b><p>والدین روند کلی، میزان فعالیت و هشدارهای ضروری را می‌بینند؛ محتوای گفت‌وگوهای شخصی فقط با رضایت نوجوان یا در شرایط خطر به اشتراک گذاشته می‌شود.</p></div></div>
  </main>;
}

function Dashboard({ setView }: { setView: (v: View) => void }) {
  return <main className="app-shell">
    <aside>
      <div className="profile"><div className="profile-avatar">ن</div><div><b>سلام نهال!</b><small>سطح ۴ · کاوشگر</small></div></div>
      {["نمای کلی", "مسیرهای من", "برنامه امروز", "تصمیم‌یار", "گفت‌وگو با همراه", "پروفایل و تنظیمات"].map((x, i) => <button className={i === 0 ? "on" : ""} key={x}><Icon name={i === 4 ? "chat" : i === 1 ? "book" : i === 5 ? "user" : "spark"} />{x}</button>)}
      <div className="mentor-mini"><small>منتور اختصاصی</small><div><span>م</span><p><b>مریم احمدی</b><small>آنلاین و آماده گفت‌وگو</small></p></div><button>رزرو جلسه</button></div>
    </aside>
    <section className="dashboard">
      <div className="dash-head"><div><span>شنبه، ۲۱ مهر</span><h1>امروز یک قدم به خودت نزدیک‌تر شو.</h1></div><button className="icon-button"><Icon name="chat" /></button></div>
      <div className="dash-grid">
        <div className="daily-card">
          <div><span className="pill">پیشنهاد امروز · ۱۲ دقیقه</span><h2>چطور با انرژی بیشتری روزم را شروع کنم؟</h2><p>سه عادت کوچک و ساده برای شروع یک صبح بهتر</p><button className="dark" onClick={() => setView("paths")}><Icon name="play" /> شروع درس</button></div>
          <div className="sun-art"><span></span><i></i></div>
        </div>
        <div className="streak"><span className="round-icon amber"><Icon name="spark" /></span><div><small>پیوستگی تو</small><strong>۷ روز</strong><p>بهترین رکوردت: ۱۲ روز</p></div></div>
      </div>
      <div className="section-row"><div><h2>چرخ رشد من</h2><p>تصویر کلی پیشرفت در ۹ بُعد زندگی</p></div><button onClick={() => setView("paths")}>مشاهده همه <Icon name="arrow" size={16} /></button></div>
      <div className="area-grid">{areas.map(([name, percent, color]) => <div className="area-card" key={String(name)}><div className="area-top"><span style={{ color: String(color), background: `${color}18` }}><Icon name={name === "روابط" ? "heart" : name === "تحصیلات" ? "book" : "spark"} /></span><b>{name}</b><strong>{percent}٪</strong></div><div className="bar"><i style={{ width: `${percent}%`, background: String(color) }} /></div><small>{Number(percent) > 70 ? "عالی پیش می‌ری" : Number(percent) > 50 ? "در حال پیشرفت" : "آماده شروع"}</small></div>)}</div>
    </section>
  </main>;
}

function Paths() {
  const cards = [
    ["حال خوب و انرژی روزانه", "سلامت", "۶ درس کوتاه", 72, "#F06E5B"],
    ["غذای سالم، بدون سخت‌گیری", "تغذیه", "۸ درس کوتاه", 58, "#F6A94A"],
    ["مهارت ارائه و اعتمادبه‌نفس", "مهارت‌آموزی", "۵ درس کوتاه", 34, "#716BE8"],
  ];
  return <main className="page"><div className="page-heading aligned"><span className="section-kicker">مسیرهای شخصی‌سازی‌شده</span><h1>قدم‌های کوچک، تغییرهای بزرگ</h1><p>هر مسیر از درس‌های ۵ تا ۱۵ دقیقه‌ای، تمرین کاربردی و بازخورد ساخته شده.</p></div>
    <div className="learning-layout"><div className="course-list">{cards.map(([title, tag, count, progress, color], i) => <article className="course" key={String(title)}><div className="course-number" style={{ background: `${color}18`, color: String(color) }}>۰{i + 1}</div><div className="course-info"><span style={{ color: String(color) }}>{tag}</span><h2>{title}</h2><p>{count} · همراه تمرین عملی</p><div className="bar"><i style={{ width: `${progress}%`, background: String(color) }} /></div></div><button className="circle-button"><Icon name="arrow" /></button></article>)}</div>
    <div className="ai-panel"><span className="round-icon violet large"><Icon name="spark" size={28} /></span><h2>از من بپرس</h2><p>برای انتخاب مسیر، برنامه‌ریزی یا وقتی فقط نیاز داری با کسی حرف بزنی کنارت هستم.</p><div className="chat-bubble">«بین کلاس طراحی و برنامه‌نویسی کدوم برای من بهتره؟»</div><button className="primary">شروع گفت‌وگو <Icon name="chat" /></button><small><Icon name="shield" size={15} /> گفت‌وگویی امن و محرمانه</small></div></div>
  </main>;
}

function Plans() {
  return <main className="page"><div className="page-heading"><span className="section-kicker">عضویت در فردای من</span><h1>برای هر رؤیا، یک مسیر هست</h1><p>هر زمان خواستی می‌توانی پلنت را تغییر بدهی یا لغو کنی.</p></div>
    <div className="pricing"><article><span className="plan-label">نرمال</span><h2>همراه رشد شخصی</h2><div className="price"><b>۳۹۹</b><span>هزار تومان<br />ماهانه</span></div><button className="secondary">انتخاب نرمال</button><ul>{["برنامه رشد شخصی‌سازی‌شده", "دسترسی به همه مسیرهای آموزشی", "دستیار هوش مصنوعی ۲۴ ساعته", "ابزار برنامه‌ریزی و تصمیم‌یار", "گزارش ماهانه برای والدین"].map(x => <li key={x}>✓ <span>{x}</span></li>)}</ul></article>
    <article className="featured"><span className="popular">پیشنهاد ما</span><span className="plan-label">پلاس</span><h2>همراه تا رسیدن به درآمد</h2><div className="price"><b>۸۹۹</b><span>هزار تومان<br />ماهانه</span></div><button className="primary">انتخاب پلاس <Icon name="arrow" /></button><ul>{["همه امکانات پلن نرمال", "منتور اختصاصی و جلسات ماهانه", "طراحی مسیر شغلی متناسب با استعداد", "پروژه واقعی و ساخت رزومه", "همراهی تا اولین تجربه درآمد"].map(x => <li key={x}>✓ <span>{x}</span></li>)}</ul></article></div>
  </main>;
}

function Chat() {
  const [mode, setMode] = useState<"ai" | "mentor">("ai");
  const [uploaded, setUploaded] = useState("");
  return <main className="chat-page">
    <aside className="chat-sidebar">
      <div className="page-heading aligned"><span className="section-kicker">همراه من</span><h1>هرچی توی ذهنته بگو</h1><p>اینجا جای امن توئه؛ می‌تونی حرف بزنی، سؤال بپرسی یا عکس بفرستی.</p></div>
      <div className="chat-tabs"><button className={mode === "ai" ? "selected" : ""} onClick={() => setMode("ai")}><Icon name="spark" /><span><b>همراه هوشمند</b><small>پاسخ فوری، شبانه‌روزی</small></span></button><button className={mode === "mentor" ? "selected" : ""} onClick={() => setMode("mentor")}><Icon name="user" /><span><b>منتور من</b><small>گفت‌وگو با مریم</small></span></button></div>
      <div className="safe-box"><Icon name="shield" /><p><b>گفت‌وگویی امن</b><small>اگر موضوع حساسی باشد، با اجازه تو از یک متخصص کمک می‌گیریم.</small></p></div>
    </aside>
    <section className="chat-window">
      <header><div className="bot-avatar"><Icon name={mode === "ai" ? "spark" : "user"} /></div><div><b>{mode === "ai" ? "رُزا، همراه هوشمند" : "مریم، منتور تو"}</b><small><i /> آنلاین</small></div></header>
      <div className="messages">
        <span className="day-label">امروز</span>
        <div className="message bot">سلام نهال! امروز چه حسی داری؟ من اینجام تا با هم حرف بزنیم.</div>
        <div className="message me">برای پروژه مدرسه بین عکاسی و طراحی پوستر مرددم.</div>
        <div className="message bot">چه انتخاب‌های جذابی! اگر دوست داری یک نمونه از کارهات رو بفرست تا با هم مقایسه‌شون کنیم.</div>
        {uploaded && <div className="message me upload-preview"><div><Icon name="book" size={28} /></div><span><b>{uploaded}</b><small>تصویر با موفقیت آماده ارسال شد</small></span></div>}
      </div>
      <div className="suggestions"><button>کمک برای تصمیم‌گیری</button><button>برنامه امروز من</button><button>می‌خوام حرف بزنم</button></div>
      <div className="composer">
        <label className="upload-button" title="آپلود عکس"><Icon name="book" /><input type="file" accept="image/*" onChange={(e) => setUploaded(e.target.files?.[0]?.name || "")} /></label>
        <input type="text" placeholder="پیامت رو اینجا بنویس..." />
        <button className="send"><Icon name="arrow" /></button>
      </div>
    </section>
  </main>;
}

function ParentDashboard({ setView }: { setView: (v: View) => void }) {
  return <main className="parent-page page">
    <div className="parent-head"><div><span className="section-kicker">پنل همراهی والدین</span><h1>سلام خانم احمدی، حال نهال خوبه.</h1><p>این هفته ۴ قدم در مسیر رشدش برداشته و از برنامه‌اش جلوتره.</p></div><button className="secondary" onClick={() => setView("support")}><Icon name="chat" /> گفت‌وگو با پشتیبانی</button></div>
    <div className="parent-stats"><div><span className="round-icon violet"><Icon name="chart" /></span><p><small>فعالیت این هفته</small><b>۴ روز</b><em>۲ روز بیشتر از قبل</em></p></div><div><span className="round-icon coral"><Icon name="book" /></span><p><small>درس‌های تکمیل‌شده</small><b>۷ درس</b><em>در ۳ مسیر فعال</em></p></div><div><span className="round-icon amber"><Icon name="heart" /></span><p><small>حال کلی ثبت‌شده</small><b>خوب و پایدار</b><em>بر اساس خوداظهاری نهال</em></p></div></div>
    <div className="parent-layout">
      <section className="parent-progress"><div className="section-row"><div><h2>روند رشد نهال</h2><p>گزارش کلی و محترمانه، بدون ورود به حریم شخصی</p></div><span className="pill">۳۰ روز اخیر</span></div>
        {areas.slice(0, 6).map(([name, percent, color]) => <div className="parent-row" key={String(name)}><b>{name}</b><div className="bar"><i style={{ width: `${percent}%`, background: String(color) }} /></div><span>{percent}٪</span></div>)}
      </section>
      <aside className="parent-side"><div className="privacy-card"><Icon name="shield" /><h3>حریم خصوصی نهال</h3><p>شما فقط روند کلی و هشدارهای ضروری را می‌بینید. متن گفت‌وگوها و یادداشت‌های شخصی محرمانه می‌ماند.</p><button>مدیریت دسترسی‌ها</button></div><div className="parent-tip"><span>راهنمای این هفته</span><h3>چطور درباره انتخاب رشته بدون فشار حرف بزنیم؟</h3><button>مطالعه راهنما <Icon name="arrow" size={16} /></button></div></aside>
    </div>
  </main>;
}

function Community() {
  const posts = [
    ["هستی", "مسیر مهارت‌آموزی", "من امروز اولین پوستر دیجیتالم رو ساختم! هنوز کلی چیز برای یاد گرفتن دارم ولی از شروع کردنش خیلی خوشحالم.", "۲۴", "۸"],
    ["ترانه", "مسیر تحصیلات", "کسی برای برنامه‌ریزی امتحان‌ها روش پومودورو رو امتحان کرده؟ دوست دارم تجربه‌هاتون رو بدونم.", "۱۷", "۱۲"],
    ["آوا", "مسیر سلامت", "چالش این هفته من: هر روز ده دقیقه پیاده‌روی. کی دوست داره با هم شروع کنیم؟", "۳۱", "۱۵"],
  ];
  return <main className="page community-page"><div className="community-head"><div><span className="section-kicker">انجمن فردای من</span><h1>با هم رشد کردن قشنگ‌تره</h1><p>یک جمع امن برای حرف زدن، تجربه به اشتراک گذاشتن و دوست پیدا کردن.</p></div><button className="primary">نوشتن پست تازه <Icon name="arrow" /></button></div>
    <div className="community-layout"><section><div className="community-filter"><button className="active">برای تو</button><button>تازه‌ترین‌ها</button><button>چالش‌ها</button><button>پرسش و پاسخ</button></div>{posts.map(([name, tag, text, likes, comments], i) => <article className="post" key={name}><header><span className={`post-avatar a${i}`}>{name[0]}</span><div><b>{name}</b><small>{tag} · {i + 1} ساعت پیش</small></div><button>•••</button></header><p>{text}</p>{i === 0 && <div className="post-art"><span>اولین پوستر من</span><i>CREATE<br />YOUR<br />FUTURE</i></div>}<footer><button><Icon name="heart" /> {likes}</button><button><Icon name="chat" /> {comments} گفت‌وگو</button><button>ذخیره</button></footer></article>)}</section>
    <aside><div className="community-safe"><Icon name="shield" /><h3>اینجا هوای همدیگه رو داریم</h3><p>مهربان باش، اطلاعات شخصی منتشر نکن و هر محتوای نامناسبی را گزارش بده.</p><button>قوانین انجمن</button></div><div className="weekly-challenge"><small>چالش این هفته</small><h3>۷ روز، ۷ قدم برای حال بهتر</h3><div><span>۱۸۴ نفر همراه شدن</span><b>۶۸٪</b></div><div className="bar"><i /></div><button className="secondary">منم هستم!</button></div></aside></div>
  </main>;
}

function Support() {
  return <main className="page"><div className="page-heading"><span className="section-kicker">مرکز پشتیبانی</span><h1>چطور می‌تونیم کمکت کنیم؟</h1><p>جوابت رو سریع پیدا کن یا مستقیم با تیم ما حرف بزن.</p></div>
    <div className="support-search"><Icon name="spark" /><input placeholder="مثلاً: چطور منتورم رو تغییر بدم؟" /><button>جست‌وجو</button></div>
    <div className="support-cards"><article><span className="round-icon violet"><Icon name="book" /></span><h3>راهنمای استفاده</h3><p>پاسخ‌های قدم‌به‌قدم برای کار با بخش‌های مختلف</p><button>مشاهده مقاله‌ها</button></article><article><span className="round-icon coral"><Icon name="chat" /></span><h3>گفت‌وگوی آنلاین</h3><p>هر روز از ساعت ۸ صبح تا ۱۰ شب کنار شماییم</p><button>شروع گفت‌وگو</button></article><article><span className="round-icon amber"><Icon name="shield" /></span><h3>گزارش مسئله فوری</h3><p>برای موارد امنیتی یا محتوای نامناسب انجمن</p><button>ثبت گزارش محرمانه</button></article></div>
    <div className="faq"><h2>پرسش‌های پرتکرار</h2>{["تأیید والدین چطور انجام می‌شود؟","چطور پلن اشتراکم را تغییر بدهم؟","گفت‌وگوهای من با دستیار چه‌قدر محرمانه است؟","چطور یک محتوای نامناسب را گزارش کنم؟"].map((q,i)=><button key={q}><span>{q}</span><b>{i === 0 ? "−" : "+"}</b>{i === 0 && <small>بعد از ثبت شماره والد، یک لینک امن برای تأیید حساب ارسال می‌شود. این مرحله فقط یک‌بار انجام می‌شود.</small>}</button>)}</div>
  </main>;
}

function Auth({ setView }: { setView: (v: View) => void }) {
  const [register, setRegister] = useState(true);
  const [role, setRole] = useState<"teen" | "parent">("teen");
  return <main className="auth-page"><section className="auth-art"><button className="brand"><span className="brand-mark"><Icon name="spark" /></span><span><b>فردای من</b><small>future4teen</small></span></button><div><span className="section-kicker">یک قدم تا شروع</span><h1>قراره اینجا کلی چیز تازه درباره خودت کشف کنی.</h1><p>با خیال راحت شروع کن؛ ما و خانواده‌ات کنارت هستیم.</p></div><div className="auth-quote"><Icon name="heart" /><p>«اینجا یاد گرفتم لازم نیست همه جواب‌ها رو از قبل بدونم؛ فقط باید شروع کنم.»<small>رها، ۱۶ ساله</small></p></div></section>
    <section className="auth-form"><div className="auth-box"><div className="auth-switch"><button className={register ? "active" : ""} onClick={() => setRegister(true)}>ثبت‌نام</button><button className={!register ? "active" : ""} onClick={() => setRegister(false)}>ورود</button></div><h2>{register ? "خوش اومدی! اول خودت رو معرفی کن" : "خوش برگشتی!"}</h2><p>{register ? "ساخت حساب کمتر از دو دقیقه زمان می‌بره." : "شماره موبایلت رو وارد کن تا ادامه بدیم."}</p>
      {register && <div className="role-switch"><button className={role === "teen" ? "on" : ""} onClick={() => setRole("teen")}><Icon name="spark" /> نوجوان هستم</button><button className={role === "parent" ? "on" : ""} onClick={() => setRole("parent")}><Icon name="shield" /> والد هستم</button></div>}
      {register && <label>نام و نام خانوادگی<input placeholder={role === "teen" ? "مثلاً نهال احمدی" : "نام کامل شما"} /></label>}<label>شماره موبایل<input placeholder="۰۹۱۲ ۱۲۳ ۴۵۶۷" inputMode="tel" /></label>{register && role === "teen" && <label>شماره موبایل یکی از والدین<input placeholder="برای ارسال درخواست تأیید" inputMode="tel" /><small><Icon name="shield" size={14} /> فقط برای تأیید امن حساب استفاده می‌شود.</small></label>}
      <button className="primary auth-submit" onClick={() => setView(role === "parent" ? "parent" : "dashboard")}>{register ? "ساخت حساب و ادامه" : "دریافت کد ورود"} <Icon name="arrow" /></button><div className="auth-divider"><span>یا</span></div><button className="secondary auth-submit">ورود با حساب گوگل</button><small className="terms">با ادامه، قوانین استفاده و حریم خصوصی را می‌پذیرید.</small></div></section>
  </main>;
}

function DesignSystem() {
  return <main className="page system"><div className="page-heading aligned"><span className="section-kicker">FOUNDATIONS</span><h1>Design System پایه</h1><p>زبان بصری گرم، امن و قابل اعتماد؛ مناسب نوجوان و والد.</p></div>
    <div className="system-grid"><section><h2>رنگ‌ها</h2><div className="swatches"><div><i className="s-purple" /><b>بنفش اصلی</b><small>#6754D9</small></div><div><i className="s-coral" /><b>مرجانی گرم</b><small>#F06E5B</small></div><div><i className="s-cream" /><b>پس‌زمینه</b><small>#FBF9F5</small></div><div><i className="s-ink" /><b>متن اصلی</b><small>#25232D</small></div></div></section>
    <section><h2>تایپوگرافی</h2><div className="type-sample"><b>عنوان نمایشی · ۴۸</b><strong>آینده از امروز شروع می‌شود</strong><span>متن بدنه · ۱۶</span><p>خوانا، دوستانه و با فاصله مناسب برای فارسی</p></div></section>
    <section className="components"><h2>کامپوننت‌ها</h2><div><button className="primary">دکمه اصلی</button><button className="secondary">دکمه دوم</button><span className="pill">برچسب وضعیت</span><div className="sample-input">عنوان یا هدف خود را بنویسید...</div></div></section>
    <section><h2>اصول طراحی</h2><div className="principles"><span><Icon name="shield" /><b>امن و قابل اعتماد</b></span><span><Icon name="heart" /><b>بدون قضاوت</b></span><span><Icon name="spark" /><b>پیشرفت ملموس</b></span></div></section></div>
  </main>;
}

export default function App() {
  const [view, setView] = useState<View>("home");
  return <div dir="rtl"><Header view={view} setView={setView} />{view === "home" && <Home setView={setView} />}{view === "flow" && <Flow />}{view === "dashboard" && <Dashboard setView={setView} />}{view === "parent" && <ParentDashboard setView={setView} />}{view === "paths" && <Paths />}{view === "chat" && <Chat />}{view === "community" && <Community />}{view === "support" && <Support />}{view === "auth" && <Auth setView={setView} />}{view === "plans" && <Plans />}{view === "system" && <DesignSystem />}<button className="system-link" onClick={() => setView("system")}>Design System</button></div>;
}
