let cards = [
  {
    name: 1,
    class: 'color-1'
  },
  {
    name: 2,
    class: 'color-2'
  },
  {
    name: 3,
    class: 'color-3'
  },
  {
    name: 4,
    class: 'color-4'
  },
  {
    name: 5,
    class: 'color-1'
  },
  {
    name: 6,
    class: 'color-2'
  },
  {
    name: 7,
    class: 'color-3'
  },
  {
    name: 8,
    class: 'color-4'
  },
  {
    name: 9,
    class: 'color-1'
  }
];

let initCards = (cards)=> {
  let cardsHtml = '';

  cards.forEach((card)=> {
    cardsHtml += `<div class="cards ${card.class}">
      <div class="card-body">${card.name}</div>
    </div>`;
  });

  document.querySelector('#mainContent').innerHTML = cardsHtml;
}

let sortCards = ()=> {
  cards.sort((a, b) => a.name - b.name);
  initCards(cards);
}

let shuffleCards = ()=> {
  cards.sort(() => Math.random() - 0.5);
  initCards(cards);
}

document.addEventListener('click', (event) => {
  const targetEl = event.target;
  switch (true) {
    case targetEl.matches('.btn.shuffle'):
      shuffleCards(targetEl, event);
      break;
    case targetEl.matches('.btn.sort'):
      sortCards(targetEl, event);
      break;
  }
});

initCards(cards);
