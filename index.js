function fetchBooks() {
  let test = fetch('https://anapioficeandfire.com/api/books');
  test.then(resp => resp.json())
  .then(json => renderBooks(json));
  return test;
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
