export default function Home() {

  const options = {method: 'GET', headers: {accept: 'application/json'}};

  fetch('https://api.tomorrow.io/v4/weather/realtime?location=mestre%20venice&apikey=vaW9YSGpj0vCyVlpGtzNAowQh458gjzi', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));



  return (
    <section>
      <div className="">
        <h1>Hi, I am <span></span></h1>
        <h2></h2>

        <div className=".spotify">

        </div>
      </div>
    </section>
  );
}
