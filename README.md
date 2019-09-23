# Quiz Game
JavaScript Quiz-Spiel

Das Projekt soll in Zweier-Gruppen programmiert werden.

### Spiel-Logik
- Der Spieler interagiert mit dem Spiel über Eingaben im prompt-Fenster
- Am Anfang wird eine Begrüßungsnachricht angezeigt: "Willkommen beim DCI-Quiz! Bist du bereit, dich meinen Fragen zu stellen?"
- Es werden zwei mögliche Antworten vorgeschlagen: "a. Halt die Klappe und leg endlich los!", "b. Lass mal, ich will nicht denken."
- Der Spieler kann "a" oder "b" eingeben. Bei "a" wird die erste Frage angezeigt
- Die Quiz-Fragen sind Multiple-Choice-Fragen, so wie die Begrüßungsfrage. Es kann zwei oder mehr mögliche Antworten geben.


## Aufgaben Partner A
- Arbeite in der Datei questions.js
- Erstell ein "questions"-Objekt
- Es soll die Eigenschaft "questionsList" haben, in der Ein Array mit Fragen-Objekten gespeichert wird
  - Fragen-Objekte haben:
    - die Eigenschaft "question" mit einem String, in dem die Frage steht
    - die Eigenschaft "answers" mit einem Array der Strings für die möglichen Antworten
    - die Eigenschaft "correctAnswers" mit einem Array in dem die Nummern der richtigen Antworten gespeichert sind (nur eine Nummer, wenn es nur eine Richtige Antwort gibt)
- Es soll die Methode "getQuestion" haben. Diese Methode soll:
  - Einen Parameter für die Nummer der Frage haben
  - Das Objekt der entsprechenden Frage zurückgeben
- Es soll die Methode "checkAnswer" haben. Diese Methode soll:
  - Einen Parameter für die Nummer der Frage haben
  - Einen Parameter für die Antwort haben
  - true oder false zurückgeben, je nach dem ob die Antwort richtig ist

## Aufgaben Partner B
- Arbeite in der Datei interface.js
- Erstell ein "game"-Objekt
- Es soll die Methode "startGame" haben
- Es soll Eigenschaften zum Speichern dieser Informationen haben:
  - Wieviele Fragen hat der Spieler bisher beantwortet
  - Wieviele Fragen hat der Spieler richtig beantwortet
- Füg die Methode "askQuestion" hinzu. Diese Methode soll:
  - Die nächste Frage mit der "getQuestion"-Methode des questions-Objekts holen
  - Ein prompt mit der Frage und den möglichen Antworten öffnen
  - Die Antwort mit der "checkAnswer"-Methode des questions-Objekts prüfen
  - Das Ergebnis in einem alert ausgeben: "Richtig!" oder "Das war leider falsch."
  - Speichern, ob die Antwort richtig war
- Erstell in der startGame-Methode eine Schleife damit die Fragen dem Spieler nacheinander angezeigt werden
- Wenn es keine Fragen mehr gibt, soll in einem alert ausgegeben werden, wieviele Fragen richtig beantwortet wurden

## Bonus
- Fügt die Möglichkeit hinzu, Freitext-Fragen zu benutzen, bei denen der Spieler ein Wort als Antwort eingeben kann
- Dafür muss die "checkAnswer"-Methode geändert werden, so dass sie auch diese Antworten prüfen kann
- Es kann eine Kondition hinzugefügt werden: Wenn es nur eine mögliche Antwort gibt, handelt es sich um eine Freitext-Frage

## Hilfe
###### Objekt erstellen
```javascript
var name = {
  property: value,
}
```
###### Methode erstellen
```javascript
var objectName = {
  methodName: function(parameter) {
    
  }
}
```
###### Methode verwenden
```javascript
objectName.methodName(value)
```
