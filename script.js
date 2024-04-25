const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
    question.innerHTML = "I love you so much! 😘";
    gif.src =
      "https://media1.giphy.com/media/iCVzZwwE6QNAV2tEE0/giphy.gif";

    alert('hi love');
    alert('I hope you appreciate this');
    alert('Always remember')
    alert("that I'm yours,")
    alert('Galingan mo pagaaral mo ha')
    alert('I hope na ikaw yung babaeng ihaharap ko sa altar one day')
    alert('Sana magkasama parin tayo sa tagumpay natin')
    alert('Ikaw lang gusto yung gusto kong makasama')
    alert("Sana di tayo mag sawa sa isa't isa")
    alert('Again...')
  

    
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
