export default function Home() {

  const options = {method: 'GET', headers: {accept: 'application/json'}};


  fetch('https://api.tomorrow.io/v4/weather/realtime?location=mestre%20venice&apikey=vaW9YSGpj0vCyVlpGtzNAowQh458gjzi', options)
  .then(response => response.json())
  .then(response => console.log(response.data))
  .catch(err => console.error(err));


  return (
    <section>

    </section>
  );
}
