let library = [
  {
    id: 1,
    title: "Toán 1",
    author: "Hà Huy Khoái",
    year: 2020,
    price: 18000,
    isAvailable: false,
  },
  {
    id: 2,
    title: "Tiếng Việt 1",
    author: "Bùi Mạnh Hùng",
    year: 2020,
    price: 20000,
    isAvailable: false,
  },
  {
    id: 3,
    title: "Đạo Đức 1",
    author: "Nguyễn Thị Toan",
    year: 2020,
    price: 19000,
    isAvailable: true,
  },
];

function checkInput(promptMessage) {
  let input;
  do {
    input = prompt(`${promptMessage}`);
    if (input === null || input.trim() === "") {
      alert("Bạn chưa nhập gì cả!");
      continue;
    }
    break;
  } while (true);
  return input;
}

function checkNaturalNumber(input) {
  if (!Number.isInteger(input) || input < 0) {
    alert("Giá trị bạn nhập không hợp lệ!");
    return false;
  }
  return true;
}

function checkValidId(arr, id) {
  for (let object of arr) {
    if (object.id === id) return true;
  }
  return false;
}

function printArr(arr) {
  for (let object of arr) {
    for (let key in object) {
      console.log(`${key}: ${object[key]}`);
    }
    console.log("-----------------");
  }
}

function findBookByTitle(arr, input) {
  for (let object of arr) {
    if (object.title.toLowerCase().includes(input.toLowerCase())) {
      for (let key in object) {
        console.log(`${key}: ${object[key]}`);
      }
      return true;
    }
  }
  return false;
}

function updateIsAvailable(arr, id) {
  for (let object of arr) {
    if (object.id === id) {
      do {
        let updateStatus = checkInput(
          "Nhập trạng thái mượn sách ( có hoặc không):"
        );
        if (updateStatus.toLowerCase() === "có") {
          updateStatus = true;
        } else if (updateStatus.toLowerCase() === "không") {
          updateStatus = false;
        } else {
          alert("Giá trị bạn nhập không hợp lệ");
          continue;
        }
        object.isAvailable = updateStatus;
        break;
      } while (true);
    }
  }
}

function deleteBookById(arr, id) {
  for (let index in arr) {
    if (arr[index].id === id) {
      let confirmDelete = prompt(
        "Bạn có chắc chắn muốn xóa sách này không? (nếu có hãy nhập 'có')"
      );
      if (confirmDelete.toLowerCase() === "có") {
        alert(`Đã xóa sách ${arr[index].title}`);
        arr.splice(index, 1);
      }
    }
  }
}

function arrangeBookByPrice(arr) {
  // for (let i = 0; i < arr.length - 1; i++) {
  //   let swapped = false;
  //   for (let j = 0; j < arr.length - 1 - i; j++) {
  //     if (arr[j].price > arr[j + 1].price) {
  //       let temp = arr[j];
  //       arr[j] = arr[j + 1];
  //       arr[j + 1] = temp;
  //       swapped = true;
  //     }
  //   }
  //   if (!swapped) break;
  // }
  arr.sort((a, b) => a.price - b.price);
}

let loop = true;
while (loop) {
  let choice = +prompt(`----------MENU----------
1. Thêm sách mới.
2. Hiển thị danh sách sách.
3. Tìm kiếm sách theo tiêu đề.
4. Cập nhật trạng thái mượn/trả sách theo id sách.
5. Xóa sách theo id sách ra khỏi danh sách.
6. Sắp xếp sách theo giá tăng dần.
7. Thoát.
  `);

  switch (choice) {
    case 1:
      let newBook = {};

      do {
        let bookId = checkInput("Nhập mã sách mới:");
        bookId = +bookId;
        if (!checkNaturalNumber(bookId)) continue;
        if (checkValidId(library, bookId)) {
          alert("Mã sách đã tồn tại, xin hãy nhập mã khác!");
          continue;
        }
        newBook.id = bookId;
        console.log("Đã thêm sách thành công");

        break;
      } while (true);

      let bookTitle = checkInput("Nhập tên sách mới:");
      newBook.title = bookTitle;

      let bookAuthor = checkInput("Nhập tác giả của sách mới:");
      newBook.author = bookAuthor;

      do {
        let bookYear = checkInput("Nhập năm xuất bản sách mới:");
        bookYear = +bookYear;
        if (!checkNaturalNumber(bookYear)) continue;
        newBook.year = bookYear;
        break;
      } while (true);

      do {
        let bookPrice = checkInput("Nhập giá của sách mới:");
        bookPrice = +bookPrice;
        if (!checkNaturalNumber(bookPrice)) continue;
        newBook.price = bookPrice;
        break;
      } while (true);

      do {
        let isAvailable = checkInput(
          "Nhập trạng thái mượn sách mới (có / không):"
        );
        if (isAvailable.toLowerCase() === "có") {
          isAvailable = true;
        } else if (isAvailable.toLowerCase() === "không") {
          isAvailable = false;
        } else {
          alert("Giá trị bạn nhập không hợp lệ");
          continue;
        }
        newBook.isAvailable = isAvailable;
        break;
      } while (true);

      library.push(newBook);
      printArr(library);
      break;

    case 2:
      printArr(library);
      break;

    case 3:
      let bookName = checkInput("Nhập tên sách cần tìm:");
      if (!findBookByTitle(library, bookName)) {
        alert("Không tìm thấy sách mà bạn nhập!");
      }
      break;

    case 4:
      let update = +checkInput("Nhập id sách cần cập nhật trạng thái trả mượn");
      if (!checkValidId(library, update)) {
        alert("Không tìm thấy id sách bạn nhập");
      } else {
        updateIsAvailable(library, update);
        printArr(library);
      }
      break;

    case 5:
      let deleteBook = +checkInput("Nhập id sách cần xóa:");
      if (!checkValidId(library, deleteBook)) {
        alert("Không tìm thấy id sách bạn nhập");
      } else {
        deleteBookById(library, deleteBook);
        printArr(library);
      }
      break;

    case 6:
      arrangeBookByPrice(library);
      printArr(library);
      break;

    case 7:
      loop = false;
      console.log("Cảm ơn bạn đã sử dụng dịch vụ!");
      break;

    default:
      alert("Giá trị nhập không hợp lệ, xin hãy nhập lại!");
  }
}
