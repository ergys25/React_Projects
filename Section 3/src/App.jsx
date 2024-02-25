import reactImg from './assets/react-core-concepts.png'
import {CORE_CONCEPTS} from './data';
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";


function App() {
    function handleSelect(selectedButton) {
        console.log(selectedButton);
    }

    return (<div>
        <Header></Header>

        <main>
            <section id="core-concepts">
                <h2>
                    <ul>
                        <CoreConcept {...CORE_CONCEPTS[0]}></CoreConcept>
                        <CoreConcept {...CORE_CONCEPTS[1]}></CoreConcept>
                        <CoreConcept {...CORE_CONCEPTS[2]}></CoreConcept>
                        <CoreConcept {...CORE_CONCEPTS[3]}></CoreConcept>
                    </ul>
                </h2>
            </section>
            <section id="examples">
                <h2>Examples</h2>
                <menu>
                    <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
                    <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
                    <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
                    <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
                </menu>


            </section>

        </main>

        <main>
            <h2>Time to get started!</h2>
        </main>
    </div>);
}


export default App;
