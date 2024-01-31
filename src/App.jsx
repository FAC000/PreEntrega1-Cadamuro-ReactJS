import './styles/App.css'
import './components/Navbar/Navbar.css'
import'./components/Cartwidget/Cartwidget.css'
import './components/Itemlistcontainer/Itemlistcontainer.css'
import { Navbar } from './components/Navbar/Navbar'
import {Itemlistcontainer} from './components/Itemlistcontainer/Itemlistcontainer'
export const App = () => {
return (
<div>
  <Navbar />
  <Itemlistcontainer titulo={"Ready player one?"} />
</div>
);
}