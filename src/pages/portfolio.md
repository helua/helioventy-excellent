---
title: Portfolio
permalink: /portfolio/index.html
description: 'Portfolio'
layout: page
preloads:
  href: '/assets/fonts/robotomono/robotomono-regular.woff2'
  as: 'font'
  type: 'font/woff2'
  crossorigin: true
---

## "Docs" lol

<!-- loop docs -->

{% set itemList = collections.docs %}

<!-- details -->

{% include 'components/details.njk' %} 
