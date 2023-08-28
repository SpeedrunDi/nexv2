import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import AOS from 'aos'
import Main from "./containers/Main/Main"
import Layout from "./components/UI/Layout/Layout"
import 'aos/dist/aos.css'
import './App.css'
import Courses from "./containers/Courses/Courses";

function App() {
  const location = useLocation()

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Layout>
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={400}>
          <Routes location={location}>
            <Route path="/" element={<Main />} />
            <Route path="/courses" element={<Courses />} />
            <Route
              path="*"
              element={
                <div className="not_page">
                  <p className="not_page_text">Page not found!</p>
                </div>
              }
            />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </Layout>
  )
}

export default App
