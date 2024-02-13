---
title: 'Projektowanie stron internetowych'
description: 'Projektowanie stron www Warszawa'
date: 2021-07-17
tags: []
---

[Eleventy Fetch](https://www.11ty.dev/docs/plugins/fetch/) fetches and caches resources -- at configurable intervals.

This is an example of fetching external data.
In this case, my public repositories (with more than zero stargazer) and a cache duration of 1 day.

Endpoint editable in `_data/github.js.`

{% for repository in github  %}
{% if repository.stargazers_count > 10 %}

## [{{ repository.name }}]({{ repository.html_url }})

**{{ repository.stargazers_count }} GitHub stars**
{{ repository.description }}

{% endif %}
{% endfor %} 
