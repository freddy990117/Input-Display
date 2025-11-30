// 定義名為 Person 的物件的形狀
// interface Person {
//   Phone: number;
//   Name: string;
//   Job: string;
//   Email: string;
//   Message: string;
// }
const checkboxArr: Array<String> = [];
// 需要重新賦值所以使用 let
let messageValue: string = "";
const submitBtn = document.getElementById("submit-btn") as HTMLButtonElement;
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // 取得 Textarea 輸入框
  const personMessage = document.getElementById(
    "message"
  ) as HTMLTextAreaElement;
  // 取得所有的 checkbox
  const chechBoxes =
    document.querySelectorAll<HTMLInputElement>(".form-check-input");
  //  跑迴圈遍布 checkbox
  chechBoxes.forEach((box) => {
    // 是否有 check
    if (box?.checked) {
      // 將有勾選的選項 push 到 array 當中
      checkboxArr.push(box.name);
    }
  });
  console.log(checkboxArr);
  messageValue = personMessage.value;
  console.log(messageValue);
});

// 透過 id 取得 HTML 中的值
// const personPhone = document.getElementById(".phone") as HTMLInputElement;
// const personName = document.getElementById("name") as HTMLInputElement;
// const personJob = document.getElementById("job") as HTMLInputElement;
// const personEmail = document.getElementById("email") as HTMLInputElement;
// const Person1: Person = {
//   Phone: Number(personPhone),
//   Name: personName.value,
//   Job: personJob.value,
//   Email: personEmail.value,
// };

// console.log(Person1.Phone);
