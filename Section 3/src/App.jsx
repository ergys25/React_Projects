import reactImg from './assets/react-core-concepts.png'
import {CORE_CONCEPTS} from './data';
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import {useState} from 'react'
import {EXAMPLES} from './data';

function App() {
    const [selectedTopic, setSelectedTopic] = useState('components');

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
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
                <div id="tab-content">
                    <h3>{EXAMPLES[selectedTopic].title}</h3>
                    <p>{EXAMPLES[selectedTopic].description}</p>
                    <pre>
                        <code>
                            {EXAMPLES[selectedTopic].code}
                        </code>
                    </pre>

                </div>


            </section>

        </main>

        <main>
            <h2>Time to get started!</h2>
        </main>
    </div>);
}


export default App;
