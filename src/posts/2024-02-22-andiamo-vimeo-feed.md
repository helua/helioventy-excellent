---
title: 'Andiamo vimeo feed'
description: 'Strona duetu reżyzerskiego ANDIAMO, prezentująca playlistę video z utworami reżyserów w formie designerskiego feedu miniaturek.'
date: 2022-11-02
tags: ['vimeo', 'feed']
---

🎥 Www powstała w Angularze z elementami Material Design, a jej trzon stanowi feed wyselekcjonowanych filmów pobieranych z Vimeo poprzez API. Oprócz tego zleceniodawca zapragnął mieć podstronę "behind the scenes", gdzie w losowym trybie obejrzycie mozaikę zdjęć z planu oraz "about", która przestawia filozofię pracy, osiągnięcia artystów oraz nieregularną siatkę zdjęć ukazujących duet w różnych codziennych sytuacjach. Strona ma dwie wersje językowe - polską i angielską.

🎨 Za identyfikację wizualną Andiamo i design strony odpowiedzialny jest grafik David Błażewicz. Wprowadzanie jego szczegółowej wizji w życie było jednym z przyjemniejszych doświadczeń front-endowych z jakimi się do tej pory mierzyłem.

🔮 W przyszłości na stronie zostanie odsłonięty jeszcze blog (headless CMS). Powstanie też bliźniacza odsłona wizytówki dla drugiej części działalności duetu - Andiamo Digital.

**This is a tiny pitfall!**
Take care to not prefix your internal links with your domain, or else they will be treated ad external as well. To link internally use this pattern:

```
An internal link to the [about page](/about/)
```

## h2 Heading

### h3 Heading

#### h4 Heading

Muffin bonbon jujubes cheesecake chupa chups shortbread ice cream cotton candy cake. Jelly-o biscuit dessert danish dessert pastry tootsie roll lemon drops gingerbread. Cheesecake donut marzipan sweet roll icing muffin halvah. Dragée donut cake biscuit pie carrot cake sesame snaps jelly-o gummi bears.

Soufflé topping shortbread lemon.

## hr

---

## Typographic replacements

**The replacement converts this input:**

```
(c) (C) (r) (R) (tm) (TM) +-
and so on.. and so on... and so on..... AND SO ON???????.....
WTF!!!!!! How many exclamation marks are you going to use????????????
,, -- ---
"double quotes" and 'single quotes'
```

**To this:**

(c) (C) (r) (R) (tm) (TM) +-
and so on.. and so on... and so on..... AND SO ON???????.....
WTF!!!!!! How many exclamation marks are you going to use????????????
,, -- ---
"double quotes" and 'single quotes'

## Emphasis

**This is bold text**
_This is italic text_
~~Strikethrough~~

## Blockquote

> Cheesecake donut marzipan sweet roll icing muffin halvah. Dragée donut cake biscuit pie carrot cake sesame snaps jelly-o gummi bears. Cotton candy cookie croissant fruitcake.

## Lists

### Unordered lists

- Create a list by starting a line with `+`, `-`, or `*`
- Another item

### Ordered lists

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

## Code

Syntax highlighting

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

## Tables

| Technology | Fun fact                                                                                                                                    |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| HTML       | HTML (Hypertext Markup Language) was created by Sir Tim Berners-Lee in 1991 as a way to structure and link documents on the World Wide Web. |
| CSS        | It's called "cascading" because styles can cascade down from parent elements to their children, allowing for inheritance and overriding.    |
| JavaScript | TypeError: null is not an object                                                                                                            |

## Links

[Read all those articles](https://moderncss.dev/)
Autoconverted link https://every-layout.dev/ (enabled via linkify)

## Emojis

**Literal:**
🤩 💯 💚 👻 👾

**Classic markup:**
:cry: :poop: :fire: :laughing: :christmas_tree:
([A reference for emoji markup](https://gist.github.com/rxaviers/7360908))

**Shortcuts (emoticons)**:
:-) :-( 8-) ;) :-P

## mark

==Marked text==

## Footnotes

Footnote 1 link[^first].
Footnote 2 link[^second].

[^first]:
    Footnote **can have markup**
    and multiple paragraphs.

[^second]: Footnote text.

\*[HTML]: Hyper Text Markup Language

## Images

Consider that `src` is already prepended in the settings.

![Close-up with unfocused background of a vibrant large blue butterfly gracefully perched on a delicate flower amidst lush green grass](/assets/images/gallery/asturias-4.jpg)
