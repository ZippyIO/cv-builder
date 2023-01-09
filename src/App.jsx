import './App.css';
import { Component } from 'react';
import CvForm from './components/form/CvForm';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <CvForm />
            </div>
        );
    }
}

export default App;
