/* =========================================================================
   SparkOptimus — Search index
   Loaded with defer on every page. Available as window.SO.SEARCH_INDEX.
   Separated from site.js so the main chrome script stays lean (~35KB saved).
   ========================================================================= */
(function () {
  "use strict";
  window.SO = window.SO || {};
  window.SO.SEARCH_INDEX = [
    { title: "Our approach",                       url: "our-approach.html",           cat: "Page",    desc: "How we turn disruption into opportunity",          kw: "approach methodology pillars customer technology data organization framework", featured: true },
    { title: "Services",                           url: "services.html",               cat: "Page",    desc: "Our full suite of transformation services",          kw: "services digital strategy sustainability AI data mergers acquisitions ventures", featured: true },
    { title: "Cases",                              url: "cases.html",                  cat: "Impact",  desc: "Client work that moves the needle",                  kw: "cases projects results clients impact portfolio work", featured: true },
    { title: "Insights",                           url: "insights.html",               cat: "Insight", desc: "Research and points of view",                         kw: "insights research articles digital AI transformation point of view", featured: true },
    { title: "Contact",                            url: "contact.html",                cat: "About",   desc: "Get in touch with our Amsterdam team",               kw: "contact touch office Amsterdam email phone address", featured: true },
    { title: "Digital Strategy & Transformation",  url: "service-detail.html",         cat: "Service", desc: "Future-proof your business through digital",          kw: "digital strategy transformation technology omnichannel customer" },
    { title: "AI & Data Strategy & Transformation",url: "service-detail.html",         cat: "Service", desc: "Unlock the power of AI and data",                    kw: "AI artificial intelligence data analytics machine learning generative" },
    { title: "Sustainability Strategy & Transformation", url: "service-detail.html",   cat: "Service", desc: "Navigate the sustainability transition",              kw: "sustainability ESG green energy circular climate transition" },
    { title: "Mergers and Acquisitions",           url: "service-detail.html",         cat: "Service", desc: "Commercial due diligence and deal support",           kw: "mergers acquisitions M&A due diligence private equity deal" },
    { title: "Ventures and Scale-ups",             url: "service-detail.html",         cat: "Service", desc: "Ventures and scale-up growth",                       kw: "ventures startups scale-ups growth innovation founder" },
    { title: "Consumer Goods",                     url: "sectors.html",                cat: "Sector",  desc: "Omnichannel, D2C, and commercial growth",             kw: "consumer goods retail FMCG Heineken Philips Ahold D2C omnichannel brand" },
    { title: "Energy & Utilities",                 url: "sectors.html",                cat: "Sector",  desc: "Sustainability transformation in energy",            kw: "energy utilities sustainability renewable transition regulatory" },
    { title: "Financial Services",                 url: "sectors.html",                cat: "Sector",  desc: "Data-driven solutions for financial institutions",    kw: "financial services banking insurance ING NN Group fintech" },
    { title: "Industrial Goods & Services",        url: "sectors.html",                cat: "Sector",  desc: "B2B digital acceleration",                           kw: "industrial goods B2B manufacturing aftermarket digital services" },
    { title: "Private Equity",                     url: "sectors.html",                cat: "Sector",  desc: "Due diligence and value creation",                   kw: "private equity PE due diligence value creation portfolio fund" },
    { title: "CEO stories",                        url: "ceo-stories.html",            cat: "Impact",  desc: "Conversations with digital leaders",                 kw: "CEO leadership stories interviews executives digital transformation" },
    { title: "Blog",                               url: "blog.html",                   cat: "Page",    desc: "Latest thinking on digital and AI",                 kw: "blog articles posts digital AI transformation" },
    { title: "Books & benchmarks",                 url: "books.html",                  cat: "Page",    desc: "Published works and benchmarks on digital transformation", kw: "books benchmarks publications digital transformation written" },
    { title: "HEMA case study",                    url: "case-hema.html",              cat: "Case",    desc: "Digital transformation at HEMA retail",             kw: "HEMA retail case study digital transformation results" }
  ];
})();
