import ShowcaseFilter from "./ShowcaseFilter";

const kakaoUrl = "https://open.kakao.com/o/sYIre0Ci";
const snsPortfolioUrl = "https://leather-dandelion-aa5.notion.site/SNS-MINDBOX-Portfolio-3a98a573219c812cbcaceb8a7c3e1dd7";

const showcase = [
  {
    category: "sns",
    image: "/portfolio-ai-feed-system-v2.png",
    eyebrow: "BEAUTY · MONTHLY SNS",
    title: "LUMIRE 스킨케어 런칭 피드",
    body: "신제품을 처음 알리는 모델 비주얼부터 성분 정보, 사용 루틴과 리뷰까지 한 달의 구매 여정을 3×3 피드로 설계했습니다.",
    scope: "Planning · AI Visual · Feed Design",
    output: "3×3 Feed / Key Visual / Info Card",
    tags: ["AI 이미지", "3×3 피드", "런칭 피드"],
  },
  {
    category: "sns",
    image: "/cardnews-beauty.png",
    eyebrow: "MULTI BRAND · CAROUSEL",
    title: "브랜드 마케팅 카드뉴스",
    body: "결혼정보, 재무설계, 인테리어, 피부과 등 업종별 고객이 바로 이해할 수 있도록 핵심 메시지와 브랜드 무드를 한 장에 설계했습니다.",
    scope: "Copywriting · Structure · Art Direction",
    output: "Hook Cover / Information / CTA",
    tags: ["브랜드 마케팅", "업종별 디자인", "CTA"],
  },
  {
    category: "reels",
    image: "/reel-emotional-brand.png",
    eyebrow: "REELS · AI VIDEO",
    title: "브랜드·캠페인 AI 릴스",
    body: "계절과 차 브랜드의 감성을 담은 광고 릴스부터 AI 영상 공모전 출품작까지, 목적에 맞춰 장면과 호흡을 설계한 실제 영상 작업입니다.",
    scope: "Concept · AI Video · Editing",
    output: "9:16 Reels / Brand Film / Contest Film",
    tags: ["AI 영상", "감성 광고", "공모전 출품작"],
    links: [
      { label: "감성 브랜드 릴스", href: "https://www.instagram.com/reel/DZ-MGQOOWPg/" },
      { label: "AI 공모전 출품작", href: "https://www.instagram.com/reel/DJWRl5FuLDI/" },
      { label: "AI 브랜드 캠페인 릴스", href: "https://www.instagram.com/reel/DbfumrgOwXP/" },
    ],
  },
  {
    category: "reels",
    image: "/reel-ai-contest.png",
    eyebrow: "REELS · AI VIDEO",
    title: "AI 공모전 출품작",
    body: "장면 전환과 후킹 카피를 세로형 숏폼 포맷에 맞춰 구성한 영상 예시입니다.",
    scope: "Concept · AI Video · Editing",
    output: "9:16 Reels / Contest Film",
    tags: ["AI 영상", "공모전", "숏폼"],
    links: [{ label: "AI 공모전 출품작 보기", href: "https://www.instagram.com/reel/DJWRl5FuLDI/" }],
  },
  {
    category: "reels",
    image: "/reel-ai-brand-campaign.png",
    eyebrow: "REELS · BRAND CAMPAIGN",
    title: "AI 브랜드 캠페인 릴스",
    body: "브랜드 메시지와 제품 장면을 짧고 선명한 캠페인 릴스로 확장한 영상 예시입니다.",
    scope: "Campaign · AI Video · Editing",
    output: "9:16 Reels / Brand Film",
    tags: ["브랜드 캠페인", "AI 영상", "릴스"],
    links: [{ label: "AI 브랜드 캠페인 릴스 보기", href: "https://www.instagram.com/reel/DbfumrgOwXP/" }],
  },
  {
    category: "ai",
    image: "/portfolio-pink-moisture-cream.png",
    eyebrow: "MINDBOX BEAUTY · SKINCARE",
    title: "핑크 수분크림 캠페인",
    body: "피부에 닿는 촉촉함을 모델 클로즈업과 제품 연출로 연결하고, 데일리 보습이라는 핵심 효익이 바로 읽히도록 구성했습니다.",
    scope: "AI Model · Product Staging · Campaign",
    output: "Campaign Visual / Feed Ad / Product Cut",
    tags: ["AI 모델", "제품 연출", "스킨케어"],
  },
  {
    category: "ai",
    image: "/portfolio-neon-sunglasses.png",
    eyebrow: "PINK POP · FASHION",
    title: "네온 선글라스 컬렉션",
    body: "레트로 게임룸의 네온 무드와 핑크 선글라스를 결합해 제품의 개성과 기능, 구매 행동이 한 화면에서 이어지도록 설계했습니다.",
    scope: "AI Model · Art Direction · Copy",
    output: "Launch Visual / Feed Ad / CTA",
    tags: ["패션 광고", "네온 비주얼", "제품 캠페인"],
  },
  {
    category: "ai",
    image: "/portfolio-ai-drink-ad.png",
    eyebrow: "AQUA RUSH · BEVERAGE",
    title: "이온음료 시즌 캠페인",
    body: "운동 뒤 필요한 수분과 이온 충전이라는 제품 효익을 청량한 블루 톤, 물보라 연출과 모델 비주얼로 직관적으로 전달했습니다.",
    scope: "AI Model · Product Visual · Copy",
    output: "Campaign Visual / Feed Ad / Product Cut",
    tags: ["AI 모델", "음료 광고", "제품 캠페인"],
  },
  {
    category: "sns",
    image: "/portfolio-content-direction.png",
    eyebrow: "CONTENT · DIRECTION MAP",
    title: "브랜드 콘텐츠 맵",
    body: "타깃, 핵심 메시지, 콘텐츠 기둥과 월간 흐름을 한 장으로 정리해 제작 전 방향을 빠르게 맞춥니다.",
    scope: "Copywriting · Structure · Visual Map",
    output: "Direction Board / Content Pillars / Monthly Flow",
    tags: ["콘텐츠 맵", "브랜드 방향", "제작 기획"],
  },
  {
    category: "reels",
    image: "/hero-output-reels.png",
    eyebrow: "REELS · CAMPAIGN CUT",
    title: "숏폼 캠페인 썸네일",
    body: "릴스 첫 화면에서 멈춰 보이도록 캠페인 콘셉트, 제품 장면, 후킹 문구를 세로형 비주얼로 구성합니다.",
    scope: "Hook · Thumbnail · Short-form",
    output: "9:16 Cover / Scene Key Visual / Caption",
    tags: ["릴스 커버", "숏폼", "후킹"],
  },
  {
    category: "web",
    image: "/product-sports.png",
    eyebrow: "WEB · LANDING VISUAL",
    title: "서비스 랜딩페이지 비주얼",
    body: "서비스의 핵심 메시지와 화면 예시가 빠르게 이해되도록 랜딩페이지에 들어갈 대표 이미지와 섹션 흐름을 구성합니다.",
    scope: "Landing Visual · Section Design · CTA",
    output: "Hero Image / Section Mockup / Inquiry Flow",
    tags: ["랜딩페이지", "웹사이트", "상담 전환"],
  },
  {
    category: "web",
    image: "/product-burger.png",
    eyebrow: "PRODUCT · SALES PAGE",
    title: "제품 세일즈 페이지",
    body: "제품의 첫인상, 사용 장면, 핵심 효익과 구매 이유가 순서대로 읽히도록 상세페이지형 콘텐츠를 설계합니다.",
    scope: "Product Story · Detail Page · Sales Copy",
    output: "Detail Section / Product Visual / CTA",
    tags: ["상세페이지", "제품 소개", "세일즈 콘텐츠"],
  },
  {
    category: "web",
    image: "/product-furniture.png",
    eyebrow: "BRAND · INTRODUCTION PAGE",
    title: "브랜드 소개페이지 예시",
    body: "브랜드의 세계관과 핵심 메시지, 대표 제품을 한 화면씩 자연스럽게 소개하는 웹페이지 예시입니다.",
    scope: "Brand Story · Web Design · UX Flow",
    output: "Brand Intro / Story Sections / CTA",
    tags: ["브랜드 소개", "웹사이트", "페이지 구성"],
  },
];

const showcaseFilters = [
  { id: "all", label: "전체" },
  { id: "sns", label: "카드뉴스·SNS 디자인" },
  { id: "ai", label: "AI 모델·제품 이미지" },
  { id: "reels", label: "릴스·숏폼" },
  { id: "web", label: "상세페이지·웹사이트" },
];

const monthlyFlow = [
  ["WEEK 01", "브랜드 발견", "브랜드의 기준과 대표 메시지를 소개합니다."],
  ["WEEK 02", "고객의 고민", "저장할 이유가 있는 정보형 콘텐츠를 발행합니다."],
  ["WEEK 03", "제품과 서비스", "AI 이미지와 릴스로 사용 장면을 보여줍니다."],
  ["WEEK 04", "신뢰와 전환", "FAQ·후기형 콘텐츠로 문의 행동을 연결합니다."],
];

const deliverables = [
  ["01", "브랜드 마케팅 카드뉴스", "업종별 고객이 바로 이해할 수 있는 후킹 문구와 카드형 콘텐츠를 제작합니다."],
  ["02", "SNS 피드·광고 소재", "브랜드 톤에 맞는 피드 이미지, 단일 광고 소재와 캠페인 비주얼을 만듭니다."],
  ["03", "AI 모델 이미지", "제품과 서비스에 어울리는 모델 비주얼을 생성하고 광고용 이미지로 다듬습니다."],
  ["04", "AI 착용샷·사용 이미지", "제품을 실제로 쓰는 장면처럼 보이도록 착용, 사용, 연출 컷을 제작합니다."],
  ["05", "AI 릴스·쇼츠", "후킹, 장면 구성, 자막 흐름을 갖춘 세로형 숏폼 콘텐츠를 제작합니다."],
  ["06", "제품 상세페이지", "제품의 장점, 사용 장면, 구매 이유가 순서대로 읽히는 세일즈 페이지를 구성합니다."],
  ["07", "브랜드 홈페이지·랜딩페이지", "문의와 구매 행동으로 이어지는 브랜드 소개형 홈페이지와 랜딩페이지를 제작합니다."],
];

const faqs = [
  ["제품 사진만 있어도 제작할 수 있나요?", "네. 제품 사진과 기본 브랜드 자료를 바탕으로 AI 연출 이미지, 카드뉴스와 릴스 시안을 확장할 수 있습니다."],
  ["AI로 만들면 결과물이 모두 비슷하지 않나요?", "브랜드의 타깃, 메시지와 톤을 먼저 정의한 뒤 AI 생성물을 선별하고 문구·레이아웃·이미지를 직접 보정합니다."],
  ["카드뉴스나 릴스만 따로 맡길 수 있나요?", "가능합니다. 카드뉴스, 피드 이미지, 릴스, 상세페이지, 홈페이지처럼 필요한 제작물 단위로 협의할 수 있습니다."],
  ["제작 범위와 수량은 어떻게 정하나요?", "제품, 업종, 필요한 채널과 목표를 확인한 뒤 필요한 제작물과 우선순위를 맞춤 제안합니다."],
  ["수정과 상업적 활용 범위는 어떻게 되나요?", "수정 횟수와 활용 채널은 프로젝트 시작 전 견적서에 명확히 안내합니다. AI 에셋의 사용 조건도 함께 확인합니다."],
];

const services = [
  {
    no: "01",
    title: "브랜드 마케팅 카드뉴스",
    body: "고객의 고민, 제품의 장점, 문의 행동을 한눈에 읽히는 카드형 콘텐츠로 만듭니다.",
    tag: "Hook · Info · CTA",
  },
  {
    no: "02",
    title: "SNS 피드·광고 소재",
    body: "인스타그램 피드, 썸네일, 프로모션 이미지처럼 바로 게시 가능한 브랜드 이미지를 제작합니다.",
    tag: "Feed · Thumbnail · AD",
  },
  {
    no: "03",
    title: "AI 모델 이미지",
    body: "브랜드 무드에 맞는 모델 컷을 생성하고 제품, 서비스, 캠페인 분위기에 맞게 연출합니다.",
    tag: "AI Model · Campaign",
  },
  {
    no: "04",
    title: "AI 착용샷·사용 이미지",
    body: "제품이 실제로 쓰이는 장면을 보여줘 고객이 사용감을 더 빨리 상상하게 만듭니다.",
    tag: "Wear · Use · Scene",
  },
  {
    no: "05",
    title: "AI 릴스·쇼츠",
    body: "짧은 시간 안에 메시지가 전달되도록 후킹, 장면, 자막, CTA 흐름을 설계합니다.",
    tag: "Reels · Shorts · Edit",
  },
  {
    no: "06",
    title: "제품 상세페이지",
    body: "상세페이지 안에서 문제 제기, 제품 장점, 사용 장면, 구매 이유가 자연스럽게 이어지게 구성합니다.",
    tag: "Sales Page · Product",
  },
  {
    no: "07",
    title: "브랜드 홈페이지·랜딩페이지",
    body: "브랜드 소개, 서비스 안내, 상담 전환까지 연결되는 웹페이지를 제작합니다.",
    tag: "Homepage · Landing",
  },
];

const process = [
  ["01", "브랜드 진단", "현재 채널, 경쟁 계정, 고객 반응을 함께 살펴봅니다."],
  ["02", "운영 설계", "목표와 제작 범위를 정하고 한 달의 콘텐츠 지도를 만듭니다."],
  ["03", "제작과 검수", "기획안 확인 후 디자인·영상 제작과 피드백을 진행합니다."],
  ["04", "발행과 개선", "일정에 맞춰 운영하고 반응 데이터를 다음 달에 반영합니다."],
];

const portfolio = [
  {
    className: "work-ai",
    eyebrow: "BRAND CAMPAIGN",
    title: "AI 모델 브랜드\n마케팅",
    desc: "상세페이지 · 브랜드 썸네일",
    href: "https://leather-dandelion-aa5.notion.site/AI-3968a573219c80229c02d787d7516c8d?source=copy_link",
  },
  {
    className: "work-auto",
    eyebrow: "CONTENT SYSTEM",
    title: "SNS 콘텐츠\n자동화 시스템",
    desc: "Automation · 숏폼 · 카드뉴스",
    href: "https://leather-dandelion-aa5.notion.site/SNS-3968a573219c80159629e678e0cb1e2e?source=copy_link",
  },
  {
    className: "work-reel",
    eyebrow: "REELS CONTENT",
    title: "브랜드 SNS\n콘텐츠 기획",
    desc: "Content Planning · Reels",
    href: "https://leather-dandelion-aa5.notion.site/SNS-MINDBOX-Portfolio-3a98a573219c812cbcaceb8a7c3e1dd7",
  },
];

export default function Home() {
  return (
    <main>
      <header className="nav-shell">
        <a className="logo" href="#top" aria-label="마인드박스 홈">
          MINDBOX<span>®</span>
        </a>
        <nav aria-label="주요 메뉴">
          <a href="#service">서비스</a>
          <a href="#showcase">결과물</a>
          <a href="#process">진행 방식</a>
        </nav>
        <a className="nav-cta" href={kakaoUrl} target="_blank" rel="noreferrer">
          상담하기 <span>↗</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="kicker"><span /> SNS CONTENT STUDIO</p>
          <h1>
            <span>꾸준히 올리는 것보다</span>
            <span><em>이유 있게</em> 만듭니다.</span>
          </h1>
          <p className="hero-lead">
            카드뉴스부터 AI 이미지, 릴스, 상세페이지와 홈페이지까지.
            <br />
            브랜드가 발견되고 문의로 이어지는 콘텐츠를 만듭니다.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href={kakaoUrl} target="_blank" rel="noreferrer">
              무료 상담 시작하기 <span>↗</span>
            </a>
            <a className="text-link" href="#work">작업 사례 보기 <span>↓</span></a>
          </div>
        </div>
        <div className="hero-stage hero-output-board" aria-label="콘텐츠 기획부터 피드, 캠페인 이미지, 릴스까지 보여주는 SNS 운영 결과물">
          <div className="board-grid-lines" aria-hidden="true" />
          <div className="board-title">
            <span>MINDBOX OUTPUT BOARD</span>
            <b>PLAN · CREATE · RUN</b>
          </div>
          <figure className="output-card output-card-main">
            <img src="/hero-output-summer-dessert.png" alt="여름 디저트 시즌 SNS 캠페인 이미지" />
            <figcaption><span>F&amp;B / 01</span><b>SUMMER AD</b></figcaption>
          </figure>
          <figure className="output-card output-card-feed">
            <img src="/portfolio-ai-feed-system-v2.png" alt="브랜드 런칭 3×3 피드" />
            <figcaption><span>FEED / 02</span><b>MONTHLY GRID</b></figcaption>
          </figure>
          <figure className="output-card output-card-plan">
            <img src="/portfolio-content-direction.png" alt="월간 콘텐츠 방향과 제작 기획 보드" />
            <figcaption><span>PLAN / 03</span><b>CONTENT MAP</b></figcaption>
          </figure>
          <figure className="output-card output-card-reels">
            <img src="/hero-output-fnb.png" alt="전통주 브랜드 SNS 캠페인 이미지" />
            <figcaption><span>F&amp;B / 04</span><b>CAMPAIGN SET</b></figcaption>
          </figure>
          <div className="board-footer">PLANNING · AI VISUAL · FEED · REELS · WEB PAGE</div>
        </div>
      </section>

      <section className="signal-strip" aria-label="핵심 메시지">
        <div>브랜드의 이야기를 <b>콘텐츠로.</b></div>
        <div>콘텐츠의 관심을 <b>문의와 구매로.</b></div>
      </section>

      <section className="problem section-wrap">
        <p className="section-kicker">WHY MINDBOX</p>
        <div className="problem-grid">
          <h2 className="section-title">
            <span>혹시 SNS가</span>
            <span>이렇게 멈춰 있나요?</span>
          </h2>
          <ul>
            <li><span>01</span><p>무엇을 올려야 할지 매번 처음부터 고민한다.</p></li>
            <li><span>02</span><p>만드는 데 시간은 쓰지만 브랜드다운 느낌이 없다.</p></li>
            <li><span>03</span><p>좋아요보다 문의와 구매로 이어지는 흐름이 필요하다.</p></li>
          </ul>
        </div>
        <p className="problem-answer">콘텐츠 몇 개가 아니라, <strong>계속 운영되는 시스템</strong>을 만들어야 합니다.</p>
      </section>

      <section className="services" id="service">
        <div className="section-wrap">
          <div className="section-head light">
            <div>
              <p className="section-kicker">WHAT WE DO</p>
              <h2 className="section-title">
                <span>맡길 수 있는 일을</span>
                <span>먼저 보여드립니다.</span>
              </h2>
            </div>
            <p>카드뉴스부터 AI 이미지, 릴스, 상세페이지와 홈페이지까지.<br />브랜드가 판매와 문의에 필요한 콘텐츠를 제작합니다.</p>
          </div>
          <div className="service-list">
            {services.map((item) => (
              <article key={item.no}>
                <span className="service-no">{item.no}</span>
                <div><h3>{item.title}</h3><p>{item.body}</p></div>
                <span className="service-tag">{item.tag}</span>
                <span className="service-arrow">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="showcase" id="showcase">
        <div className="section-wrap">
          <div className="section-head showcase-head">
            <div>
              <p className="section-kicker">OUTPUT PREVIEW</p>
              <h2>제작 가능한 콘텐츠를<br />결과물로 확인하세요.</h2>
            </div>
            <p>위에서 본 제작 항목들이 실제 화면에서는 어떻게 보이는지,<br />대표 예시를 골라 한 번에 확인할 수 있게 구성했습니다.</p>
          </div>
          <ShowcaseFilter filters={showcaseFilters} items={showcase} />
          <div className="showcase-more">
            <a href={snsPortfolioUrl} target="_blank" rel="noreferrer">상세 포트폴리오 보기 <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="featured-case section-wrap">
        <div className="featured-visual">
          <img src="/portfolio-content-direction.png" alt="타깃, 메시지, 콘텐츠 주제와 월간 흐름을 정리한 콘텐츠 기획 예시" />
        </div>
        <div className="featured-copy">
            <p className="section-kicker">LUMIRE · BRAND DIRECTION</p>
          <h2>브랜드부터 정의하고<br />한 달의 콘텐츠를 만듭니다.</h2>
          <p>LUMIRE를 25–39세 여성을 위한 스킨 배리어 케어 브랜드로 설정하고, ‘매일 쌓아가는 편안한 광채’라는 메시지를 캠페인과 월간 피드에 일관되게 적용했습니다.</p>
          <ul>
            <li><span>01</span><div><b>TARGET</b><p>피부 컨디션과 장벽 케어에 관심이 높은 25–39세 여성</p></div></li>
            <li><span>02</span><div><b>MESSAGE</b><p>복잡하지 않은 데일리 루틴으로 되찾는 편안한 광채</p></div></li>
            <li><span>03</span><div><b>CONTENT PILLARS</b><p>브랜드 발견 · 성분 교육 · 사용 루틴 · 제품 신뢰 · 구매 행동</p></div></li>
          </ul>
        </div>
      </section>

      <section className="monthly-section">
        <div className="section-wrap">
          <div className="monthly-intro">
            <p className="section-kicker">MONTHLY FLOW</p>
            <h2>매주 다른 역할,<br />하나의 브랜드 흐름.</h2>
            <p>무작정 채우는 피드가 아니라 고객이 브랜드를 발견하고 이해하고 문의하도록 콘텐츠의 순서를 만듭니다.</p>
          </div>
          <div className="monthly-grid">
            {monthlyFlow.map(([week, title, body]) => (
              <article key={week}><span>{week}</span><h3>{title}</h3><p>{body}</p></article>
            ))}
          </div>
          <div className="monthly-board">
            <img src="/portfolio-ai-feed-system-v2.png" alt="발견, 정보, 제품, 신뢰와 행동으로 이어지는 한 달 브랜드 피드" />
            <div>
              <b>DISCOVERY → EDUCATION → TRUST → ACTION</b>
              <p>서로 다른 이미지와 정보형 콘텐츠도 하나의 톤 안에서 이어지도록 월간 피드를 설계합니다.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="ai-method section-wrap">
        <div className="section-head">
          <div>
            <p className="section-kicker">AI WITH DIRECTION</p>
            <h2>가지고 있는 자료가<br />운영 콘텐츠로 확장됩니다.</h2>
          </div>
          <p>AI로 빠르게 확장하고,<br />사람의 기준으로 완성합니다.</p>
        </div>
        <div className="transformation">
          <div className="input-panel">
            <span>INPUT</span>
            <h3>브랜드가 준비하는 자료</h3>
            <ul><li>제품 또는 서비스 사진</li><li>로고와 브랜드 컬러</li><li>고객에게 전할 핵심 정보</li></ul>
          </div>
          <div className="transform-arrow">→</div>
          <div className="output-panel">
            <span>MINDBOX OUTPUT</span>
            <img src="/portfolio-reels-storyboard.png" alt="브랜드 자료를 바탕으로 확장한 릴스 스토리보드 예시" />
            <div><b>AI 연출 이미지 · 카드뉴스 · 릴스</b><p>기획, 생성, 선별, 보정과 채널 규격 적용까지 한 흐름으로 진행합니다.</p></div>
          </div>
        </div>
      </section>

      <section className="deliverables">
        <div className="section-wrap">
          <div className="section-head light">
            <div>
              <p className="section-kicker">WHAT YOU CAN ORDER</p>
              <h2>필요한 제작물을<br />단위별로 맡길 수 있습니다.</h2>
            </div>
            <p>수량과 제작 범위는 브랜드 상황에 맞춰<br />상담 후 구체적으로 제안합니다.</p>
          </div>
          <div className="deliverable-grid">
            {deliverables.map(([no, title, body]) => (
              <article key={no}><span>{no}</span><h3>{title}</h3><p>{body}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="work section-wrap" id="work">
        <div className="section-head">
          <div>
            <p className="section-kicker">SELECTED WORK</p>
            <h2>말보다<br />작업으로.</h2>
          </div>
          <p>브랜드마다 다른 답을 찾고,<br />채널에 맞는 방식으로 구현합니다.</p>
        </div>
        <div className="work-grid">
          {portfolio.map((item, index) => (
            <a className={`work-card ${item.className}`} href={item.href} target="_blank" rel="noreferrer" key={item.title}>
              <span className="work-number">0{index + 1}</span>
              <p>{item.eyebrow}</p>
              <h3>{item.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h3>
              <div className="work-bottom"><span>{item.desc}</span><b>↗</b></div>
            </a>
          ))}
        </div>
      </section>

      <section className="process" id="process">
        <div className="section-wrap process-grid">
          <div className="process-title">
            <p className="section-kicker">HOW WE WORK</p>
            <h2 className="section-title">
              <span>감이 아니라</span>
              <span>과정으로</span>
              <span>만듭니다.</span>
            </h2>
            <p>상담부터 발행까지, 해야 할 일과 확인할 시점이 분명합니다.</p>
          </div>
          <ol>
            {process.map(([no, title, body]) => (
              <li key={no}><span>{no}</span><h3>{title}</h3><p>{body}</p></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="fit section-wrap">
        <div className="fit-card">
          <p className="section-kicker">GOOD FIT</p>
          <h2>이런 브랜드와<br />잘 맞습니다.</h2>
          <div className="fit-tags">
            <span>콘텐츠 전담자가 없는 팀</span>
            <span>브랜드 톤을 정리하고 싶은 팀</span>
            <span>업로드가 자주 끊기는 팀</span>
            <span>숏폼까지 확장하고 싶은 팀</span>
          </div>
        </div>
        <div className="fit-side">
          <p>제작 범위와 수량은 브랜드의 목표와 현재 상황에 맞춰 제안합니다.</p>
          <a href={kakaoUrl} target="_blank" rel="noreferrer">우리 브랜드도 가능한지 묻기 <span>↗</span></a>
        </div>
      </section>

      <section className="faq section-wrap">
        <div className="faq-title">
          <p className="section-kicker">FAQ</p>
          <h2>시작 전에<br />궁금한 것들.</h2>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer], index) => (
            <details key={question} open={index === 0}>
              <summary><span>Q.</span>{question}<b>＋</b></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="final-cta" id="contact">
        <p>START A PROJECT</p>
        <h2 className="section-title">
          <span>다음 달에도</span>
          <span>“뭘 올리지?”를</span>
          <span>고민하실 건가요?</span>
        </h2>
        <a href={kakaoUrl} target="_blank" rel="noreferrer">카카오톡으로 무료 상담 <span>↗</span></a>
        <div className="cta-orbit cta-orbit-a" />
        <div className="cta-orbit cta-orbit-b" />
      </section>

      <footer>
        <a className="logo footer-logo" href="#top">MINDBOX<span>®</span></a>
        <div>
          <a href="mailto:tkdrns90@naver.com">tkdrns90@naver.com</a>
          <a href="tel:01031720353">010-3172-0353</a>
          <a href="https://www.instagram.com/ai_moolbum/" target="_blank" rel="noreferrer">Instagram ↗</a>
        </div>
        <p>© 2026 MINDBOX. ALL RIGHTS RESERVED.</p>
      </footer>
    </main>
  );
}
