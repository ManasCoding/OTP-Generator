const btn = document.querySelector(".btn");
const box = document.querySelector(".box");

btn.addEventListener("click", () => {
    console.log("btn was clicked");
    let digits = "0123456789";
    let otp = "";
    let len = digits.length;

    for(let i = 0; i < 6; i++) {
        otp += digits[Math.floor(Math.random() * len)];
    }

    box.innerHTML = otp;
});


