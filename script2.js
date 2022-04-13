// Now a little bit more realistic:
import fetch from 'node-fetch';

const getPeoplePromise = () => {
  return fetch('http://swapi.py4e.com/api/people')
    .then(response => response.json())
    .then(data => {
      return {
        count: data.count,
        results: data.results
      }
    })
}

const getPeople = async () => {
  const getRequest = await fetch('http://swapi.py4e.com/api/people');
  const data =  await getRequest.json();
  //console.log(data);
  return {
    count: data.count,
    results: data.results
  };
}

// getPeople();
// getPeoplePromise();

export default { getPeoplePromise };