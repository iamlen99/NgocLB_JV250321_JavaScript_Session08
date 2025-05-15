let book = {
  title: "JavaScript Basics",
  author: "John Smith",
  page: 200,
};

delete book.page;
for (let index in book) {
  console.log(`${index}: ${book[index]}`);
}
