import React,{useStatte} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
function App() {
  //Stany przechoujace dane formularza
  const [tytul, setTytyl] = useState("");
  const [rodzaj, setRodzaj] = useState("");

  //Funkcja obslugujaca przycisk"Dodaj"
  const handleSubmit = (e) =>{
    e.preventDefault();
    //wyswietlanie danych formularza konsoli
    console.log(`Tytuł:${tytul}, Rodzaj: ${rodzaj}`);
  };

  return (
    <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
  );
}
 
export default App;