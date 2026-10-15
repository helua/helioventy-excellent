---
title: 'Craftowy e-commerce tipiKnapa'
description: 'Strona biznesowa tipiKnapa z wbudowanym e-sklepem. Sanity headless CMS jako content base o produktach, Commerce Layer zapleczem sklepowym.'
date: 2024-02-22
tags: ['Commerce Layer', 'headless CMS', 'JAMstack', 'Angular', 'headless CMS', 'e-commerce', 'craft']
gallery:
  - image: ./src/assets/images/gallery/asturias-1.jpg
    alt: 'A picturesque valley showcasing majestic mountains and lush forests, creating a serene and captivating landscape'
    caption: 'Inside the Somiedo Natural Park, Asturias'
  - image: ./src/assets/images/gallery/asturias-2.jpg
    alt: 'Close-up of a delicate white flower with a yellow center, surrounded by green leaves'
    caption: 'Jasmine nightshades blooming in July'
  - image: ./src/assets/images/gallery/asturias-3.jpg
    alt: "A traditional Asturian village with it's raised granaries, surrounded by lush green hills and mountains"
    caption: 'Traditional houses in Santullano, Somiedo Natural Park, Asturias'
  - image: ./src/assets/images/gallery/asturias-4.jpg
    alt: 'Close-up with unfocused background of a vibrant large blue butterfly gracefully perched on a delicate flower amidst lush green grass'
    caption: 'A large blue (Phengaris arion)'
---
![Close-up with unfocused background of a vibrant large blue butterfly gracefully perched on a delicate flower amidst lush green grass](/assets/images/projects/tipiknapa1.jpg)


W sierpniu wybrałem się na wakacje do Gdyni, gdzie spotkałem starego znajomego Kubę Knapa. Opowiedział mi o swoim pomyślę na otwarcie e-shopu, pierwszym produktem miał być nóż - materializacja marzenia Kuby o własnym biznesie i produkcie, który będzie wyrażał jego dążenie do wolności i odpowiedzialności. 

🛒Sklepik działa na autorskim front-endzie stworzonym w Angularze z pomocą elementów Materiala, bazą produktów osadzoną w headless CMS Sanity oraz warstwą e-commerce od Commerce Layer. Struktura aplikacji wpisuje się w gorący trend Jamstack Developers - tworzenia kompletnych serwisów za pomocą niezależnych od siebie, wymienialnych elementów. Największe zalety tego typu rozwiązania, w mojej ocenie, to łatwość rozwoju, szybkość i bezpieczeństwo. 

📷Za zdjęcia odpowiedzialny jest Bartek Wiski, a nad całym kontentem czuwa [THE INOMHUS](https://theinomhus.com) 🙌

## Kuba o nożu R1

> Ten nóż jest tylko efektem ubocznym poszukiwań odpowiedzi na dużo większe pytania: Co jest istotą człowieczeństwa? Czym jest prawdziwe męstwo? Jak budować wolność i na jakim fundamencie ją oprzeć? Dziś mam wspaniałą rodzinę, własny las i gospodarstwo, przyjaciół z pasji, muzykę i słowa, a także mnóstwo dobrych ludzi wokół i pragnę o to wszystko dbać tak, jak potrafię najlepiej. Taką czuję odpowiedzialność, a bez niej wolność nie istnieje. 

## Link do strony

https://bazardziala.pl/ 

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

```

## Komponenty

| Technlogia | Zastosowanie                                                                                                                                    |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Angular| front-end|
| Commerce Layer        | e-commerce API |
| Sanity | headless CMS for products                                                                                                            |
| Scully | Static Site Generator |
| Angular Material | mobile navigation, cart pop-ups, cart icon numeric badge |
| Stripe | bramka płatności |


