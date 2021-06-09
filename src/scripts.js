export default {
  methods: {
    fetchAPIData(q) {
      fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + q, {
        method: "GET",
        mode: "cors",
        headers: {
          "x-rapidapi-key": "0336a60903mshfaec923400988fcp191410jsn0127ccd85343",
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
