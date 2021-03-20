import { Route, Switch } from 'react-router'
import NavBar from './components/NavBar'
import TaskOne from './components/TaskOne'
import TaskTwo from './components/TaskTwo'

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="container mx-auto">
        <div className="w-full h-screen mt-10">
          <Switch>
            <Route path="/two" component={TaskTwo} />
            <Route path="/" exact component={TaskOne} />
          </Switch>
        </div>
      </div>
    </>
  )
}

export default App
