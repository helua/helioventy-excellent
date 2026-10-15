---
title: 'The REEL Friends - czyli baza talentów'
description: 'Wizytówka połączona z showcasem video z Vimeo dla talentów agencji The Reel Friends.'
date: 2024-02-22
tags: ['Scully', 'headless CMS', 'JAMstack', 'Angular', 'headless CMS', 'instagram', 'vimeo']
---



Karola odezwała się do mnie przez wspólnego znajomego. Celem było ogarnięcie strony z portfolio talentów z agencji The REEL Friends tak, żeby strona była lekka i właścicielka mogła łatwo samo dodawać treści.

Vimeo feed korzysta z API portalu, tam też siedzą animated video thumbnails czyli gify, które tworzy się w aplikacji webowej vimeo. Dynamika na pierwszym miejscu. Strona jest dostosowana pod SEO, więc łapie ruch z wyszukiwań dotyczących poszczególnych twórców. Mocne czcionki, kolory oraz wyraziste animacje wpisują się w profejnonalny pęd branży produkcyjno-filmowej. 

 

## Link do strony

https://thereelfriends.pl/ 

## Kod

creditsy filmów są również pobierane z vimeo i obrabiane na froncie

```ts
  getAgency(description: string) {
    if (description) {
      let d = description;
      var labels = Agencies;
      var rest;
      for (let i = 0; i < labels.length; ) {
        rest = d.split(labels[i]);
        if (rest.length > 1) {
          return this.splitRest(rest);
        } else i++;
      }
      return 'n/a';
    } else return 'n/d';
  }

/* by David Darnes */
```

## Komponenty

| Technlogia | Zastosowanie                                                                                                                                    |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Angular| front-end|
| Vimeo        | video API |
| Sanity | headless CMS for adding new talents                                                                                                            |
| Scully | Static Site Generator |
| Angular Material | mobile navigation, cart pop-ups, cart icon numeric badge |
| Behold | instagram widget |


