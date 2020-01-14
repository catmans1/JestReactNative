class Api{
    static all()
    {
      return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response)=>{
        return response.json();
      })
    }
  }
  
  export default Api;