---
title: 'Andiamo vimeo feed'
description: 'Strona duetu reżyzerskiego ANDIAMO, prezentująca playlistę video z utworami reżyserów w formie designerskiego feedu miniaturek.'
date: 2024-02-20
tags: ['vimeo', 'feed', 'JAMstack', 'Angular', 'video', 'headless CMS']
gallery:
  - image: ./src/assets/images/projects/andiamo1.jpg
    alt: 'A picturesque valley showcasing majestic mountains and lush forests, creating a serene and captivating landscape'
    caption: 'Inside the Somiedo Natural Park, Asturias'
---

![Close-up with unfocused background of a vibrant large blue butterfly gracefully perched on a delicate flower amidst lush green grass](/assets/images/projects/andiamo1.jpg)

🎥 Www powstała w Angularze z elementami Material Design, a jej trzon stanowi feed wyselekcjonowanych filmów pobieranych z Vimeo poprzez API. 

![Alt Text](http://helio.webd.pl/gifs/andiamo7.gif)

Oprócz tego klient zapragnął mieć podstronę "behind the scenes", gdzie w losowym trybie obejrzycie mozaikę zdjęć z planu oraz "about", która przestawia filozofię pracy, osiągnięcia artystów oraz nieregularną siatkę zdjęć ukazujących duet w różnych codziennych sytuacjach. Strona ma dwie wersje językowe - polską i angielską.  

![Alt Text](http://helio.webd.pl/gifs/andiamo6.gif)

🎨 Za identyfikację wizualną ANDIAMO i design strony odpowiedzialny jest grafik [David Błażewicz](https://davidblazewicz.com/). Wprowadzanie jego szczegółowej wizji w życie było jednym z przyjemniejszych doświadczeń front-endowych z jakimi się do tej pory mierzyłem.


## Klient

> ANDIAMO to duet reżyserski, który tworzą MATEUSZ ERDMANN i MICHAŁ WIĘCKOWSKI

| ![Alt Text](http://helio.webd.pl/gifs/andiamo5.gif) |

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

| Technlogia | Zastosowanie |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Angular| front-end|
| Vimeo        | video API |
| Sanity | headless CMS for blog                                                                                                            |
| Scully | Static Site Generator |
| Angular Material | mobile navigation |


