import { Canvas, useFrame } from "@react-three/fiber";
import Home from "./pages/Home";
import { Main } from "./pages/Main";
import "./App.css";
// import { Scroll } from "@react-three/drei";
import React, { Suspense } from "react";
import Scene from "./components/Scene";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
import { Route, Switch } from "wouter";

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/:productId" component={ProductDetail} />
      <Route component={NotFound} />
    </Switch>

    // <Switch>
    //   <Route path="/~ensait00046" component={Home} />
    //   <Route path="/~ensait00046/:productId" component={ProductDetail} />
    //   <Route component={NotFound} />
    // </Switch>
  );
}

export default App;
