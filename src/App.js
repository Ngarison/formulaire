import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
            <form>
        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-4 col-form-label">Email</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="inputEmail3"/>
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputPassword3" class="col-sm-4 col-form-label">Password</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword3"/>
          </div>
        </div>
        <div class="col-6 col-sm-3">
        <button type="submit" class="btn btn-primary">Sign in</button>
        </div>
      </form>
      </header>
    </div>
  );
}

export default App;
