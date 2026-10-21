
//results in new tab
function showResultsWindow() {
    let r1 = getCheckedValues("q1").sort().toString() === ["HTML", "CSS"].sort().toString();
    let r2 = getCheckedValues("q2").sort().toString() === ["String", "Boolean"].sort().toString();
    let r3 = getCheckedValues("q3").sort().toString() === ["ul", "li"].sort().toString();
    let r4 = document.querySelector('input[name="q4"]:checked')?.value === "Faux";
    let r5 = document.querySelector('input[name="q5"]:checked')?.value === "script";

    let win = window.open("", "_blank", "width=500,height=400");
    win.document.write(`
        <html>
        <head><title>Résultat du Test</title></head>
        <body style="font-family: Arial; padding: 20px;">
            <h3>Résultat de votre QCM</h3>
            <p>La réponse de la question 1 est ${r1 ? '<span style="color:green;">correcte</span>' : '<span style="color:red;">incorrecte</span>'}</p>
            <p>La réponse de la question 2 est ${r2 ? '<span style="color:green;">correcte</span>' : '<span style="color:red;">incorrecte</span>'}</p>
            <p>La réponse de la question 3 est ${r3 ? '<span style="color:green;">correcte</span>' : '<span style="color:red;">incorrecte</span>'}</p>
            <p>La réponse de la question 4 est ${r4 ? '<span style="color:green;">correcte</span>' : '<span style="color:red;">incorrecte</span>'}</p>
            <p>La réponse de la question 5 est ${r5 ? '<span style="color:green;">correcte</span>' : '<span style="color:red;">incorrecte</span>'}</p>
        </body>
        </html>
    `);
}

//correction
function showCorrectionWindow() {
    let win = window.open("", "_blank", "width=600,height=500");
    win.document.write(`
        <html>
        <head><title>Corrigé Complet du QCM</title></head>
        <body style="font-family: Arial; padding: 20px;">
            <h3>Corrigé Complet</h3>
            <p><b>1. Quels langages font partie du web frontend ?</b><br>
               Réponse : <span style="color: green; text-decoration: underline;">HTML, CSS</span></p>
            <p><b>2. Lesquels sont des types de données en JavaScript ?</b><br>
               Réponse : <span style="color: green; text-decoration: underline;">String, Boolean</span></p>
            <p><b>3. Quelles balises sont utilisées pour les listes ?</b><br>
               Réponse : <span style="color: green; text-decoration: underline;">&lt;ul&gt;, &lt;li&gt;</span></p>
            <p><b>4. Le JavaScript est un langage compilé.</b><br>
               Réponse : <span style="color: green; text-decoration: underline;">Faux (Interprété)</span></p>
            <p><b>5. Quelle balise insère du JavaScript ?</b><br>
               Réponse : <span style="color: green; text-decoration: underline;">&lt;script&gt;</span></p>
        </body>
        </html>
    `);
}

// récupérer plusieurs checkboxes cochées
function getValue(name) {
    return document.querySelector(`input[name="${name}"]:checked`)?.value;
}

function getCheckedValues(name) {
    let checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
    let values = [];
    checkboxes.forEach((cb) => values.push(cb.value));
    return values;
}