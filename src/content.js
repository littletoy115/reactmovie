import React from "react";
import './App.css';


export default class content extends React.Component {
  state = {
    loading: true,
    person: null,

  };


  async componentDidMount() {
    const url = "http://localhost:4000/getmovie";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({ person: data, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.person) {
      return <div>didn't get a person</div>;

    }
    const data = this.state.person.map((UserData) => 
    <div key={UserData.id_movie}>
      <div className="movie-align col-md-3">

        <img src={"http://localhost:4000/assets/" + UserData.movie_picture} width="185" height="275" />

        <div className="movie-info">
          <h4>{UserData.movie_name}</h4>
          <h5>{UserData.movie_year}</h5>
          <h6>{UserData.movie_rating}</h6>

        </div>
      </div>

    </div>
    );
    return (
      <div>
        {data}
        {console.log(data)}
      </div>
    );
  }
}




