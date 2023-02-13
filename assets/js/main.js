//========== Elemente ins js holen und als Variable abspeichern
let steuer2022 = document.querySelector("#jahr2022");
let jahresEinkommen = document.querySelector("#jahreseinkommen")
let steuerlast = document.querySelector("#ergebnis")
const einzelperson = document.querySelector("#single");
const splitting = document.querySelector("#verheiratet");



//========== Funktion zur Berechnung der Steuerlast 
const  steuerBerechnen = () => {
    const jahresEinkommenEingabe = Number(jahresEinkommen.value)
    //========== Variablen zur Berechnung des y Hilfswertes bei Einzelperson (siehe Steuerberechnung)
    let wertY1 = (jahresEinkommenEingabe - 10347) / 10000  
    let wertY2 = (jahresEinkommenEingabe - 14926) / 10000

    //========== Variablen zur Berechnung des y Hilfswertes bei Splitting(siehe Steuerberechnung)
    let wertY1splitting = ((jahresEinkommenEingabe / 2) - 10347) / 10000
    let wertY2splitting = ((jahresEinkommenEingabe / 2) - 14926) / 10000

    //========== Variablen zur Berechnung der Steuerlast Einzelperson
    let einkommenKlasse1 = (((1088.67 * wertY1) + 1400) * wertY1).toFixed(0)
    let einkommenKlasse2 = ((((206.43 * wertY2) + 2397) * wertY2) + 869.32).toFixed(0)
    let einkommenKlasse3 = ((0.42 * jahresEinkommenEingabe) - 9336.45).toFixed(0)
    let einkommenKlasse4 = ((0.45 * jahresEinkommenEingabe) - 17671.2).toFixed(0)

    //========== Variablen zur Berechnung der Steuerlast bei Splitting
    let einkommenKlasse1Splitting = (((1088.67 * wertY1splitting) + 1400) * wertY1splitting).toFixed(0)
    let einkommenKlasse2Splitting = ((((206.43 * wertY2splitting) + 2397) * wertY2splitting) + 869.32).toFixed(0)
    let einkommenKlasse3Splitting= ((0.42 * (jahresEinkommenEingabe / 2)) - 9336.45).toFixed(0)
    let einkommenKlasse4Splitting = ((0.45 * (jahresEinkommenEingabe / 2)) - 17671.2).toFixed(0)

    //===== if Abfrage Einzelperson für das Jahr 2022
    if (steuer2022.checked && einzelperson.checked) {
        if (jahresEinkommenEingabe <= 10347) {
            steuerlast.innerHTML = 0 + " € "
        }   else if (jahresEinkommenEingabe >= 10348 && jahresEinkommenEingabe <= 14926) {           
            steuerlast.innerHTML = einkommenKlasse1 + " € "
        }   else if (jahresEinkommenEingabe >= 14927 && jahresEinkommenEingabe <= 58596) {
            steuerlast.innerHTML = einkommenKlasse2 + " € "
        }   else if (jahresEinkommenEingabe >= 58597 && jahresEinkommenEingabe <= 277825) {
            steuerlast.innerHTML = einkommenKlasse3 + " € "
        }   else if (jahresEinkommenEingabe >= 277826) {
            steuerlast.innerHTML = einkommenKlasse4 + " € "
        }
    }
    //===== if Abfrage Splitting für das Jahr 2022    
        else if (steuer2022.checked && splitting.checked) {
            if (jahresEinkommenEingabe / 2 <= 10347) {
                steuerlast.innerHTML = 0 + " € "
            } else if ((jahresEinkommenEingabe / 2) >= 10348 && (jahresEinkommenEingabe / 2) <= 14926) {
                steuerlast.innerHTML = (einkommenKlasse1Splitting) * 2 + " € "
            }
            else if ((jahresEinkommenEingabe / 2) >= 14927 && (jahresEinkommenEingabe / 2)  <= 58969) {
                steuerlast.innerHTML = (einkommenKlasse2Splitting * 2) + " € "
            }
            else if ((jahresEinkommenEingabe / 2) >= 58967 && (jahresEinkommenEingabe / 2)  <= 277825) {
                steuerlast.innerHTML = (einkommenKlasse3Splitting * 2) + " € "
            }
            else if ((jahresEinkommenEingabe / 2) >= 277826) {
                steuerlast.innerHTML = (einkommenKlasse4Splitting * 2) + " € "
            }
    }
}