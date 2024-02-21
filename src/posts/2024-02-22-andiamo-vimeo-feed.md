---
title: 'Andiamo vimeo feed'
description: 'Strona duetu reżyzerskiego ANDIAMO, prezentująca playlistę video z utworami reżyserów w formie designerskiego feedu miniaturek.'
date: 2024-02-20
tags: ['vimeo', 'feed', 'JAMstack', 'Angular', 'video', 'headless CMS']
gallery:
  - image: ./src/assets/images/projects/andiamo1.jpg
    alt: 'A picturesque valley showcasing majestic mountains and lush forests, creating a serene and captivating landscape'
    caption: 'Inside the Somiedo Natural Park, Asturias'
  - image: ./src/assets/images/projects/andiamo2.jpg
    alt: 'Close-up of a delicate white flower with a yellow center, surrounded by green leaves'
    caption: 'Jasmine nightshades blooming in July'
  - image: ./src/assets/images/projects/andiamo4.jpg
    alt: "A traditional Asturian village with it's raised granaries, surrounded by lush green hills and mountains"
    caption: 'Traditional houses in Santullano, Somiedo Natural Park, Asturias'
  - image: ./src/assets/images/projects/andiamo5.gif
    alt: 'Close-up with unfocused background of a vibrant large blue butterfly gracefully perched on a delicate flower amidst lush green grass'
    caption: 'A large blue (Phengaris arion)'
  - image: ./src/assets/images/projects/andiamo6.gif
    alt: 'Close-up with unfocused background of a vibrant large blue butterfly gracefully perched on a delicate flower amidst lush green grass'
    caption: 'A large blue (Phengaris arion)'
  - image: ./src/assets/images/projects/andiamo7.gif
    alt: 'Close-up with unfocused background of a vibrant large blue butterfly gracefully perched on a delicate flower amidst lush green grass'
    caption: 'A large blue (Phengaris arion)'
---

{% include "components/gallery.njk" %}

🎥 Www powstała w Angularze z elementami Material Design, a jej trzon stanowi feed wyselekcjonowanych filmów pobieranych z Vimeo poprzez API. Oprócz tego klient zapragnął mieć podstronę "behind the scenes", gdzie w losowym trybie obejrzycie mozaikę zdjęć z planu oraz "about", która przestawia filozofię pracy, osiągnięcia artystów oraz nieregularną siatkę zdjęć ukazujących duet w różnych codziennych sytuacjach. Strona ma dwie wersje językowe - polską i angielską.

![Close-up with unfocused background of a vibrant large blue butterfly gracefully perched on a delicate flower amidst lush green grass](/assets/images/projects/andiamo5.gif)

{% eleventyImage "./src/assets/images/projects/andiamo5.gif", "Close-up of a delicate white flower with a yellow center, surrounded by green leaves", "Jasmine nightshades blooming in July" %}

🎨 Za identyfikację wizualną ANDIAMO i design strony odpowiedzialny jest grafik [David Błażewicz](https://davidblazewicz.com/). Wprowadzanie jego szczegółowej wizji w życie było jednym z przyjemniejszych doświadczeń front-endowych z jakimi się do tej pory mierzyłem.


## Klient

> ANDIAMO to duet reżyserski, który tworzą MATEUSZ ERDMANN i MICHAŁ WIĘCKOWSKI

## Link do strony

https://andiamo.works/

## Kod

ciekawa funkcja

```css
.back-top-top {
  padding: 10px;
  background: white;
  margin-top: 110vh;
  position: sticky;
  bottom: 0;
}

/* by David Darnes */
```

## Komponenty

| Technlogia | Zastosowanie                                                                                                                                    |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Angular| front-end|
| Vimeo        | video API |
| Sanity | headless CMS for blog                                                                                                            |
| Scully | Static Site Generator |
| Angular Material | mobile navigation |


