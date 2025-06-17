# ExploreQuiz: Reise um die Welt

Dies ist eine einfache Quiz-Anwendung rund um Länder, Kulturen und Sehenswürdigkeiten. Alle Daten werden lokal gespeichert, sodass die App auch offline funktioniert.

## Funktionen
- **Quiz-Modus:** Multiple-Choice-Fragen mit Kategorieauswahl oder Zufallsmodus
- **Level- & Punktesystem:** +10 Punkte pro richtiger Antwort, neues Level alle 100 Punkte
- **Spielerprofil:** Benutzername und Punktestand werden im Browser gespeichert

## Nutzung
1. Repository klonen oder herunterladen
2. `index.html` im Browser öffnen – es ist keine weitere Installation notwendig
3. Beim ersten Start Benutzernamen eingeben und mit dem Spielen beginnen

## Datenstruktur
Die Fragen befinden sich in `data/questions.json` im folgenden Format:
```json
{
  "fragen": [
    {
      "frage": "Was ist die Hauptstadt von Japan?",
      "optionen": ["Kyoto", "Osaka", "Tokio", "Hiroshima"],
      "antwort": "Tokio",
      "kategorie": "Japan"
    }
  ]
}
```

## Lizenz
Dieser Code steht unter der MIT-Lizenz. Siehe [LICENSE](LICENSE) für Details.
