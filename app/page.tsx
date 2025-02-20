import TypeWriter from "@/components/type-writer";

export default function Home() {
  //const typeHere = document.querySelector(".typewriter h1 span");
  //const words = ["zeld", "Eldis Izeirovski"];

  //let wordIndex = 0;
  //let charIndex = 0;
  //let isDeleting = false;

  //const typingAnimation = () => {
  //  const currentWord = words[wordIndex];
  //  typeHere.textContent = currentWord.substring(0, charIndex);

  //  if (!isDeleting && charIndex < currentWord.length) {
  //    charIndex++;
  //    setTimeout(typingAnimation, 300);
  //  } else if (isDeleting && charIndex > 0) {
  //    charIndex--;
  //    to block the sequence of the words array
  //    if is not necessary you can comment the "if condition"
  //    if (wordIndex !== words.length - 1) {
  //      setTimeout(typingAnimation, 150);
  //    }
  //  } else {
  //    isDeleting = !isDeleting;
  //    wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
  //    setTimeout(typingAnimation, 600);
  //  }
  //};

  //typingAnimation();
  return (
    <section>
      <div >
        <h1>
          Hi, I am <TypeWriter text=" zeld" delay={400}/>
        </h1>
        <h2></h2>
      </div>
    </section>
  );
}
