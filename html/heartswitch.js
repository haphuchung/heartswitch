    const hearts = document.querySelectorAll('.heart');
    const message = document.getElementById('message');

    function updateUI() {
      const checkedCount = Array.from(hearts).filter(h => h.checked).length;

      if (checkedCount === 0) {
        document.body.style.backgroundColor = "#F6F8FF";
        message.textContent = "";
      } else if (checkedCount === 1) {
        document.body.style.backgroundColor = "#fbe0e8ff";
        message.textContent = "Tớ thích cậu! ❤";
      } else {
        document.body.style.backgroundColor = "#ffc1d6";
        message.textContent = "Tớ thực sự thích cậu rất rất nhiều! ❤❤❤";
      }
    }

    hearts.forEach(heart => heart.addEventListener('change', updateUI));
    updateUI();