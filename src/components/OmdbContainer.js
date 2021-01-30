import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import MovieDetail from "./MovieDetail";
import API from "../utils/API";
import Table from "react-bootstrap/Table"


class OmdbContainer extends Component {
  constructor (props){
  super(props)
  this.state = {
    result: [],
    search: ""
  };
  // this.compareBy=this.compareBy.bind(this)
  }
  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.searchMovies();
  }

    

  searchMovies = () => {
    API.search()
      .then(res => this.setState({ result: res.data.results }))
      .catch(err => console.log(err))
  };

  
  handleInputChange = () => {
    console.log()
  };

  // compareBy(key) {
  //  return
  //   };
  // }
  YOchecked(e) {
      console.log("button works", e.target.value);
      var key =  e.target.value
    let arrayCopy = [...this.state.result];

    arrayCopy.sort(function(a, b) {
      console.log(a[key].age, 'test')
      if(key==="dob"){
    if (a[key].age < b[key].age){ return -1};
    if (a[key].age > b[key].age){ return 1};
    return 0}
    if (a[key] < b[key]){ return -1};
    if (a[key] > b[key]){ return 1};
    return 0

    }
    )
   console.log(arrayCopy.map(i=>i.dob.age))
    this.setState({result: arrayCopy});
    console.log(this.state.result, "state change")
  }

  OYchecked (e) {
    console.log("button works", e.target.value);
      var key =  e.target.value
    let arrayCopy = [...this.state.result];

    arrayCopy.sort(function(a, b) {
      console.log(a[key].age, 'test')
      if(key==="dob"){
    if (a[key].age > b[key].age){ return -1};
    if (a[key].age < b[key].age){ return 1};
    return 0}
    if (a[key] > b[key]){ return -1};
    if (a[key] < b[key]){ return 1};
    return 0

    }
    )
   console.log(arrayCopy.map(i=>i.dob.age))
    this.setState({result: arrayCopy});
    console.log(this.state.result, "state change")
  }

  

  AFchecked (e) {
    console.log("button works", e.target.value);
      var key =  e.target.value
    let arrayCopy = [...this.state.result];

    arrayCopy.sort(function(a, b) {
      console.log(a[key].first, 'test')
      if(key==="first"){
    if (a[key].first < b[key].first){ return -1};
    if (a[key].first > b[key].first){ return 1};
    return 0}
    if (a[key] < b[key]){ return -1};
    if (a[key] > b[key]){ return 1};
    return 0

    }
    )
   console.log(arrayCopy.map(i=>i.name.first))
    this.setState({result: arrayCopy});
    console.log(this.state.result, "state change")
  }

  ALchecked (e) {
    console.log("button works", e.target.value);
      var key =  e.target.value
    let arrayCopy = [...this.state.result];
    
    var mapped = arrayCopy.map(function(i) {
      return { index: i };
    })

    mapped.sort(function(a, b) {
      if (a.value > b.value) {
        return 1;
      }
      if (a.value < b.value) {
        return -1;
      }
      return 0;
    }
      )
   console.log(arrayCopy.map(i=>i.name.last))
    this.setState({result: mapped});
    console.log(this.state.result, "state change")

  }
  
  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  /*handleFormSubmit = event => {
    event.preventDefault();
    this.searchMovies(this.state.search);
  };*/





  render() {
   console.log("test",this.state.result.map(i=>i.name.first))
   var userData = this.state.result;
   var newdata = this.state.data;
    var sortTypes
    return (
      <Container>

        <SearchForm value={this.state.search} handleInputChange={(e) => this.handleInputChange(this.state.search)} handleFormSubmit={this.handleFormSubmit}/>
        
        <div className="form-check">
        <input className="form-check-input" type="checkbox" value="dob" id="flexCheckDefault" onClick={(e) => this.YOchecked(e) }/>
        <label className="form-check-label" for="flexCheckDefault">
          Sort by Youngest-Oldest
        </label>
        </div>

        <div className="form-check">
        <input className="form-check-input" type="checkbox" value="dob" id="flexCheckDefault" onClick={(e) => this.OYchecked(e) }/>
        <label className="form-check-label" for="flexCheckDefault">
          Sort by Oldest-Youngest
        </label>
        </div>

        <div className="form-check">
        <input className="form-check-input" type="checkbox" value="name" id="flexCheckDefault" onClick={(e) => this.AFchecked(e) }/>
        <label className="form-check-label" for="flexCheckDefault">
          Sort by Alphabetical First
        </label>
        </div>

        <div className="form-check">
        <input className="form-check-input" type="checkbox" value="name" id="flexCheckDefault" onClick={(e) => this.ALchecked(e) }/>
        <label className="form-check-label" for="flexCheckDefault">
        Sort by Alphabetical Last
        </label>
        </div>

        <Table striped bordered hover variant="dark">
          <td> First Name
          {this.state.result.map(i=>
            <>
              <tr> {i.name.first}</tr>
              </>
          )}
          </td>

          <td> Last Name
          {this.state.result.map(i=>
            <>
              <tr> {i.name.last}</tr>
              </>
          )}
          </td>

          <td> Age
          {this.state.result.map(i=>
            <>
              <tr> {i.dob.age}</tr>
              </>
          )}
          </td>

          <td> email
          {this.state.result.map(i=>
            <>
              <tr> {i.email}</tr>
              </>
          )}
          </td>
        </Table>
        {/* <Row>
          <Col size="md-8">
            <Card
              heading={this.state.result.Title || "Search for a Movie to Begin"}
            >
              {this.state.result.Title ? (
                <MovieDetail
                  title={this.state.result.Title}
                  src={this.state.result.Poster}
                  director={this.state.result.Director}
                  genre={this.state.result.Genre}
                  released={this.state.result.Released}
                />
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Card>
          </Col>
          <Col size="md-4">
            <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
        </Row> */}
      </Container>
    );
  }
}

export default OmdbContainer;
