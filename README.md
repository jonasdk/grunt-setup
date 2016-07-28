# Grunt setup starter
Dette er en dokumentation af hvordan du kommer op at kører med grunt og f.eks. et Drupal tema.

## Installer de nødvendige dele
For at kunne starte med at style på dette projekt skal man grunt og nogle hjælpe pakker installeret. Det gøres med følgende kommando.

    npm install

## Grunt kommandoer
### Watch
Kører en grunt watch på javascripts og scss filerne

    grunt

### Distribution
Kører en fuld grunt hvor der fortolkes og komprimers kode og billeder.

    grunt dist

### SCSS/CSS

## Directories
### app/
I dette katalog ligge source javascript koden.

### grunt/
Et forsøg på at lave Grunt koden mere objekt-orienteret, så vi får hvert grunt modul har sin egen sub fil. Det skulle gerne sikre at det er nemmere at finde fejl.

### images/
Her ligger produktions billederne, dvs. når de er blevet optimeret enten lokalt via f.eks. ImageOptim.app eller via Grunt (dist men ikke en del af grunt default).

### app/images-src/
Her lægges rå billeder som ikke er optimeret og som skal kunne bruges i forskellige størrelser via imager.js

### js/
Produktions javascript og dette skal være minificeret og uglified og alt det der bells and whistles.

### scss/
Her kodes SASS det burde have ligget i app/ men er lagt her for at gøre det mere ensartet i forhold til standard themes.

### style/
Produktions stylesheets som er komprimeret.

### webfonts/
Alle webfonts eller ikoner som bruges på sitet lægges her. Fonte købes f.eks. via myfonts. Ikoner som skal burges på sitet skal primært være som ikon fonts for at sikre en god performance på sitet. Brug [fontello](http://fontello.com/) da du så kan bruge den json fil som ligger i mappen til at hente de fonte og deres værdier som er allerede er lavet. Og dermed ungår du at skulle lave alle koder om fremover.
