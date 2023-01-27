import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {Artist, Browser, Chart, Charts, Home, Layout} from "./router"

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/music-app'
          element={
            <Layout>
              <Home/>
            </Layout>
          }
        />
        <Route
          path='/browser'
          element={
            <Layout>
              <Browser/>
            </Layout>
          }
        />
        <Route
          path='/charts'
          element={
            <Layout>
              <Chart/>
            </Layout>
          }
        />
        <Route
          path='/artists'
          element={
            <Layout>
              <Artist/>
            </Layout>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
