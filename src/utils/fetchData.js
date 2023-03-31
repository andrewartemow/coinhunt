import axios from 'axios';

const baseUrl = 'https://coinranking1.p.rapidapi.com/coins';

const headers = {
  'X-RapidAPI-Key': 'd4d20f5e32msh0d9713f65b02a0cp10fc18jsn65e6918d1482',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
};

const fetchData = (url, timePeriod, currency) => {
  const defaultOptions = {
    method: 'GET',
    url: url ? url : baseUrl,
    params: {
      referenceCurrencyUuid: currency ? currency : 'yhjMzLPhuIDl',
      timePeriod: timePeriod ? timePeriod : '24h',
      'tiers[0]': '1',
      orderBy: 'marketCap',
      orderDirection: 'desc',
      limit: '50',
      offset: '0',
    },
    headers: headers,
  };

  return axios
    .request(defaultOptions)
    .then(function (response) {
      //   console.log(response);
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
      return error;
    });
};

// const options = {
//   method: 'GET',
//   url: 'https://coinranking1.p.rapidapi.com/coins',
//   params: {
//     referenceCurrencyUuid: 'yhjMzLPhuIDl',
//     timePeriod: '24h',
//     'tiers[0]': '1',
//     orderBy: 'marketCap',
//     orderDirection: 'desc',
//     limit: '50',
//     offset: '0',
//   },
//   headers: {
//     'X-RapidAPI-Key': 'd4d20f5e32msh0d9713f65b02a0cp10fc18jsn65e6918d1482',
//     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
//   },
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

export default fetchData;
