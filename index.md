---
layout: blocks
title: Homepage
date: 2017-11-22T23:00:00.000+00:00
page_sections:
  - template: navigation-header-w-button
    block: header-2
    logo: "/uploads/2018/06/21/forestry-full.svg"
    navigation:
      - link: "/"
        link_text: Ubuild
      - link: "#swap"
        link_text: Swap
      - link: "#customize"
        link_text: Customize
      - link: "#responsive"
        link_text: Responsive
      - link: "#blocks"
        link_text: Blocks
    cta:
      url: https://app.forestry.io/quick-start?repo=forestryio/ubuild-jekyll&provider=github&engine=jekyll
      button_text: Import
  - template: hero-banner-w-image
    block: hero-2
    slug: features
    headline: uBuild <br><strong>design blocks</strong>
    content:
      The tool that allows you to build beautiful sites<br>all inside Forestry's
      content manager.
    cta:
      enabled: true
      url: https://github.com/forestryio/ubuild-jekyll
      button_text: "See on GitHub "
    image:
      image: "/uploads/2018/06/21/product-shot-1.png"
      alt_text: Product Shot
    background_image: "/uploads/2018/06/21/hero-2-bg.png"
  - template: content-feature
    block: feature-1
    media_alignment: Left
    slug: swap
    headline:
      <strong>Swap &amp; Switch<span class="light">&nbsp;</span></strong><span
      class="light">the Blocks to create sites quickly</span>
    content:
      Quickly assemble and create custom sites with 16 design blocks for seven
      different sections.
    media:
      image: "/uploads/2018/06/21/blocks-split.png"
      alt_text: uBuild Blocks Mock-Up
  - template: content-feature
    block: feature-1
    media_alignment: Right
    slug: customize
    headline:
      <strong>Customize Blocks</strong><span class="light">&nbsp;to make quick
      edits throughout your new site</span>
    content:
      Each block comes with custom Front Matter that can be edited in
      Forestry CMS.
    media:
      image: "/uploads/2018/06/21/edit.gif"
      alt_text: Customize Blocks
  - template: 1-column-text
    block: one-column-1
    slug: responsive
    headline: 16 Fully Responsive Design Blocks
    content: |
      The Design Blocks can be used without Forestry but to harness the power
      of Blocks we recommend using <a href="https://forestry.io">Forestry</a>. Once the site is imported you can immediately
      create new sites and make them fully customizable.
  - template: full-width-media-element
    block: media-1
    image: "/uploads/2018/06/21/theme.png"
    caption: All Available Blocks
    slug: blocks
  - template: detail-content
    block: text-1
    headline: Steps to Build a Site!
    content:
      <p>uBuild is an open-source Jekyll based demo that doubles as a builder tool inside the Forestry content manager.</p><ol><li><p><a href="https://app.forestry.io/quick-start?repo=forestryio/ubuild-jekyll&provider=github&engine=jekyll">Import this demo in Forestry</a>.</p></li><li><p>Read <a href="https://forestry.io/blog/ubuild-a-new-theme-for-static-sites-using-blocks/">our
      article</a> and create your own Blocks.</p></li><li><p>Add and customize the available Blocks and preview them as you go along.</p></li></ol>
  - template: simple-footer
    block: footer-1
    content: Made with ❤︎ in Canada
---
