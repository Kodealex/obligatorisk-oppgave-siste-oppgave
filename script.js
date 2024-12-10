//
// inputField, addButton, todoList er elementer i HTML som blir valgt med ID
// Hashtaggen # symboliserer å velge en ID i HTML.
// Deretter console.log , altså logge hvert element i console med å printe innholdet
// i hvert element til consoll.
const inputField = document.querySelector('#inputField');
const addButton = document.querySelector('#addButton');
const todoList = document.querySelector('#todoList');
console.log(inputField, addButton, todoList);

//
// Lager en EventListener "click" på elementet "addButton"
// Som lytter til om elementer blir klikket på, og hvis den blir klikket på
// så console.log , print ut "Legg til knappen er trykket" til konsoll.
addButton.addEventListener('click', function () {
  console.log('Legg til knappen er trykket!');

  //
  // lager en constant inputFieldValue som er verdien til inputField.
  // console logger verdien etterpå til konsoll.
  const inputFieldValue = inputField.value;
  console.log(inputFieldValue);

  //
  // Lager en const variabel "todoItem" som lager et "li", liste element i html
  // Adder inputfieldValue, altså verdien til inputField til textinnholdet til todoItem.
  // Gjør deretter todoItem(listen som ble laget) til barnet til todoList.
  const todoItem = document.createElement('li');
  todoItem.textContent = inputFieldValue;
  todoList.appendChild(todoItem);

  //
  // legger til et tomt text object til inputField sin verdi.
  inputField.value = '';

  //
  // lagrer et "button" element i HTML i en const variabel som heter "doneItem".
  // lagrer deretter teksten "Ferdig" Til knappens textinnhold.
  // Gjør deretter knappen til barnet til "todoItem" som altså er en liste.
  // Lager en eventlistener som lytter til click på elementet/knappen "doneItem"
  // Som deretter console.logger/printer ut til consoll at "Ferdig knapp er trykket" hvis // knappen blir trykket.
  const doneItem = document.createElement('button');
  doneItem.textContent = 'Ferdig';
  todoItem.appendChild(doneItem);
  doneItem.addEventListener('click', function () {
    console.log('Ferdig knapp er trykket!');

    // Etterpå at knappen blir trykket så foretar koden en sjekk om klassen "done"
    // Tilhører variabelen todoItem, og hvis den gjør det så fjerner koden klassen "done"
    // fra todoItem sin klasseliste
    // Hvis ikke den har "done" når knappen blir trykket på, så legger den til klassen
    // "done"
    //
    if (todoItem.classList.contains('done')) {
      todoItem.classList.remove('done');
    } else {
      todoItem.classList.add('done');
    }
  });

  //
  // lagrer en knapp til en const variabel: "deleteItem".
  // Deleteitem variabelen sitt textinnhold er satt til "Slett"
  // Gjør deretter deleteItem knappen om til barnet til todoItem.
  // Lager deretter til en eventlistener, "click" til knappen deleteItem.
  // Som gjør at hvis knappen blir trykket så skjer blant annet:
  // Console logger/printer til consoll at "Slett knapp er trykket!"
  const deleteItem = document.createElement('button');
  deleteItem.textContent = 'Slett';
  todoItem.appendChild(deleteItem);
  deleteItem.addEventListener('click', function () {
    console.log('Slett knapp er trykket!');

    //
    // Deretter sjekker koden om todoItem har en klasse i klasselisten sin som heter "done".
    // Hvis den har det, så fjerner den innholdet i todoItem.
    // Hvis ikke så gir den en alert til consoll at "Gjøremålet må markeres ferdig før sletting".
    if (todoItem.classList.contains('done')) {
      todoItem.remove();
    } else {
      alert('Gjøremålet må markeres ferdig før sletting');
    }
  });
});
