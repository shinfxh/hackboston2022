import React, {useState}from "react";
import '../assets/css/black-dashboard-react.css';
// reactstrap components
import { Card, CardBody } from "reactstrap";
import Navigator from "./components/navbar";
import routes from "./routes"
import { Switch, Route, BrowserRouter } from "react-router-dom";
import web3modalExample from "./web3modal/web3modal";

const getRoutes = (routes) =>{
  let buffer= []
  routes.map((prop) => {
    prop.items.map((item) => {
      if(item.component == null)
      {
        buffer.push(
          <Route
            key={item.name}
            exact
            path={prop.path + item.path}
            component={mainPage}
          />
        )
      }
      else{
        buffer.push(
          <Route
            key={item.name}
            exact
            path={prop.path + item.path}
            component={item.component}
          />
        )
      }
  })})
  return buffer
}

const mainPage = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <h3 style={{fontWeight:"600"}}> Decision Chain </h3>
          
          <div>
            <label for="uname"><b>Private Key</b></label>
            <input type="password" placeholder="Enter PrivateKey" name="pkey" required></input>
          </div>
          <div>
            <select id = "myList" onchange = "Choose your vote" >  
              <option> Choice 1 </option>  
              <option> Choice 2 </option>  
              <option> Choice 3 </option>  

            </select>  
          </div>
          <div>
            <button type="submit" onclick="vote()">Vote</button>
            <script>
            function vote() {
  
              
              console.log(document.getElementById("myList"))
              
            }
            </script>
            <input type="checkbox" name="remember"></input>
            
          </div>
  
        </CardBody>
      </Card>
    </div>
    
  )
}


function App() {
  return (
    <BrowserRouter basename="/klaytn-online-toolkit">
    <div className="content">
      <Navigator routes={routes}/>
        <Switch>
          {getRoutes(routes)}
          <Route exact path="/" component = {mainPage} />
          <Route exact path="/web3modal" component = {web3modalExample} />
          </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;