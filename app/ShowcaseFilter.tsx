"use client";

import { useMemo, useState } from "react";

type ShowcaseLink = {
  label: string;
  href: string;
};

type ShowcaseItem = {
  category: string;
  image: string;
  eyebrow: string;
  title: string;
  body: string;
  scope: string;
  output: string;
  tags: string[];
  links?: ShowcaseLink[];
};

type ShowcaseFilter = {
  id: string;
  label: string;
};

export default function ShowcaseFilter({
  filters,
  items,
}: {
  filters: ShowcaseFilter[];
  items: ShowcaseItem[];
}) {
  const [activeFilter, setActiveFilter] = useState("all");
  const visibleItems = useMemo(
    () => items.filter((item) => activeFilter === "all" || item.category === activeFilter),
    [activeFilter, items],
  );

  return (
    <>
      <div className="filter-chips" aria-label="결과물 유형">
        {filters.map((filter) => (
          <button
            className={activeFilter === filter.id ? "active" : ""}
            type="button"
            onClick={() => setActiveFilter(filter.id)}
            aria-pressed={activeFilter === filter.id}
            key={filter.id}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <div className="showcase-grid" aria-live="polite">
        {visibleItems.map((item, index) => (
          <article className="showcase-card" key={item.title}>
            <div className="showcase-image">
              <img src={item.image} alt={`${item.title} 결과물 예시`} />
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className="showcase-labels">
              <p className="showcase-eyebrow">{item.eyebrow}</p>
            </div>
            <h3>{
              item.image === "/reel-emotional-brand.png"
                ? "감성 브랜드 릴스"
                : item.image === "/product-massager.png"
                ? "제품 세일즈 페이지 · 마사지기"
                : item.image === "/product-burger.png"
                  ? "제품 세일즈 페이지 · 햄버거"
                  : item.image === "/product-sports.png"
                    ? "서비스 랜딩페이지 · 스포츠용품"
                : item.image === "/product-furniture.png"
                    ? "브랜드 소개페이지 · 가구"
                    : item.title
            }</h3>
            <p className="showcase-copy">{item.body}</p>
            <dl className="project-meta">
              <div>
                <dt>SCOPE</dt>
                <dd>{item.scope}</dd>
              </div>
              <div>
                <dt>OUTPUT</dt>
                <dd>{item.output}</dd>
              </div>
            </dl>
            <div className="showcase-tags">
              {item.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            {item.links && (
              <div className="showcase-links" aria-label={`${item.title} 실제 영상`}>
                {(item.category === "reels" ? item.links.slice(0, 1) : item.links).map((link) => (
                  <a href={link.href} target="_blank" rel="noreferrer" key={link.href}>
                    {link.label}
                    <span>↗</span>
                  </a>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </>
  );
}
