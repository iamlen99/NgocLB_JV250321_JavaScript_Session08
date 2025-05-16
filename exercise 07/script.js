let staffs = [
  {
    id: "01697433",
    name: "Lê Bảo Ngọc",
    position: "Store Staff",
    salary: 8000000,
  },
  {
    id: "01697531",
    name: "Lê Bảo Bình",
    position: "Store Staff",
    salary: 9000000,
  },
  {
    id: "01400001",
    name: "Nguyễn Bảo Ngọc",
    position: "Store Manager Candidate",
    salary: 20000000,
  },
  {
    id: "00000001",
    name: "Giả Bảo Ngọc",
    position: "Store Manager",
    salary: 50000000,
  },
];
function printStaffInfo(arr) {
  let count = 1;
  for (let object of arr) {
    console.log(`Số thứ tự ${count} `);
    for (let key in object) {
      console.log(`${key}: ${object[key]}`);
    }
    console.log("---------------");
    count++;
  }
}

function deleteStaffById(arr, id) {
  for (let key in arr) {
    if (arr[key].id === id) {
      let confirm = prompt(
        `Bạn có chắc muốn xóa nhân viên ${arr[key].name} hay không? (Nhập "Có" hoặc "Không"):`
      );
      if (confirm === "Có") {
        arr.splice(key, 1);
      }
      return true;
    }
  }
  return false;
}

function updateSalary(arr, id) {
  for (let object of arr) {
    if (object.id === id) {
      let newSalary = +prompt(
        `Nhập mức lương mới của nhân viên ${object.name}:`
      );
      object.salary = newSalary;
    }
  }
}

function findStaffByName(arr, name) {
  for (let object of arr) {
    if (object.name === name) {
      for (let key in object) {
        console.log(`${key}: ${object[key]}`);
      }
      return true;
    }
  }
  return false;
}

let loop = true;

while (loop) {
  let choice = +prompt(`---------MENU---------
1. Thêm nhân viên mới.
2. Xóa nhân viên theo id.
3. Cập nhật mức lương của nhân viên theo id
4. Tìm kiếm nhân viên theo tên.
5. Hiển thị thông tin toàn bộ nhân viên
6. Thoát 
Lựa chọn của bạn: `);

  switch (choice) {
    case 1:
      let staff = {};

      let staffId = prompt("Nhập id nhân viên mới:");
      staff.id = staffId;
      let staffName = prompt("Nhập tên nhân viên mới:");
      staff.name = staffName;
      let staffPosition = prompt("Nhập vị trí làm việc của nhân viên mới:");
      staff.position = staffPosition;
      let staffSalary = prompt("Nhập lương của nhân viên mới:");
      staff.salary = staffSalary;

      staffs.push(staff);
      printStaffInfo(staffs);
      break;
    case 2:
      let deleteId = prompt("Nhập id nhân viên cần xóa:");
      if (!deleteStaffById(staffs, deleteId)) {
        alert(`Không tìm thấy nhân viên có id ${deleteId}`);
      }
      printStaffInfo(staffs);

      break;
    case 3:
      let findId = prompt("Nhập id của nhân viên cần cập nhật mức lương:");
      updateSalary(staffs, findId);
      printStaffInfo(staffs);

      break;
    case 4:
      let findName = prompt("Nhập tên nhân viên cần tìm kiếm:");
      if (!findStaffByName(staffs, findName)) {
        alert("Không tìm thấy nhân viên bạn vừa nhập!");
      }
      break;
    case 5:
      printStaffInfo(staffs);
      break;

    case 6:
      loop = false;
      console.log("Cảm ơn bạn đã sử dụng dịch vụ!");
      break;
    default:
      alert("Dữ liệu bạn nhập không hợp lệ!");
  }
}
