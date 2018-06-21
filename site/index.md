---
layout: default
title: Homepage
block: header-1.html
date: 2017-11-23 00:00:00 +0000
page_sections:
- template: header-1
  block: header-1
  logo: "/uploads/2018/06/21/forestry-full.svg"
  navigation:
  - link: "/"
    link_text: Home
  - link_text: Features
    link: "#"
  - link: "#"
    link_text: Pricing
  - link: "#"
    link_text: Team
- template: header-2
  block: header-2
  logo: "/uploads/2018/06/21/forestry-full.svg"
  navigation:
  - link: "/"
    link_text: Home
  - link: "#"
    link_text: Features
  - link: "#"
    link_text: Pricing
  - link: "#"
    link_text: Team
  cta:
    url: "#"
    button_text: Download
- template: header-3
  block: header-3
  logo: "/uploads/2018/06/21/forestry-full.svg"
- template: hero-1
  block: hero-1
  heading: Forestry <strong>design blocks.</strong>
- template: hero-2
  block: hero-2
  headline: Forestry <strong>design blocks</strong>
  content: The tool you need to do this and that and yatta yatta.
  cta:
    enabled: true
    url: "#"
    button_text: Download for macOS
  image:
    image: "/uploads/2018/06/21/product-shot-1.png"
    alt_text: Product Shot
  background_image: "/uploads/2018/06/21/hero-2-bg.png"
- template: text-1
  block: text-1
  headline: Headline
  content: "<p>Oat cake icing jujubes candy canes sweet powder cake bear claw cotton
    candy. Liquorice candy soufflé liquorice gummi bears gummi bears. Danish liquorice
    macaroon sesame snaps tootsie roll wafer.</p><p>Macaroon sugar plum dragée. Pie
    pie bear claw ice cream. Jelly-o lollipop bear claw jelly beans brownie gummi
    bears dessert toffee. Sweet roll chupa chups lemon drops dessert jelly.</p><p>Tiramisu
    jujubes jelly-o. Apple pie jelly beans cake pie lollipop croissant apple pie sugar
    plum jelly beans. Pudding pastry carrot cake topping cookie wafer.</p>"
- template: media-feature
  block: feature-1
  media_alignment: Right
  headline: "<strong>Great feature</strong> that you should check out."
  content: Some nice text to back it up, and explain some stuff. And it looks super
    good.
  media:
    image: "/uploads/2018/06/21/product-shot-1.png"
    alt_text: Product Shot
- template: media-feature
  block: feature-1
  media_alignment: Left
  headline: "<strong>Another one</strong> that you should def check out."
  content: We don't know what this feature is yet, but we're pretty sure you'll love
    it!
  media:
    image: "/uploads/2018/06/21/product-shot-1.png"
    alt_text: Product Shot
- template: 1-column-text
  block: onecolumn-1
- template: media
  block: media-1
- template: 2-column-text
  block: 2column-1
- template: 2-column-media-element
  block: media-2
- template: 3-column-text
  block: 3colunn-1
- template: signup-bar
  block: cta-bar
---

{% include block-{{ page.block }} %}
{% include block-header-2.html %}
{% include block-header-3.html %}
{% include block-hero-2.html %}
{% include block-text-1.html %}
{% include block-feature-1.html %}
{% include block-feature-2.html %}
{% include block-one-column-1.html %}
{% include block-media-1.html %}
{% include block-two-column-1.html %}
{% include block-media-2.html %}
{% include block-three-column-1.html %}
{% include block-cta-bar.html %}
{% include block-footer-1.html %}
{% include block-footer-2.html %}
