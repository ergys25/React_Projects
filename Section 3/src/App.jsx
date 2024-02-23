import reactImg from './assets/react-core-concepts.png'
import {CORE_CONCEPTS} from './data';

const reactDescription = ['Fundamental', 'Crucial', 'Core'];


function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

function CoreConcept(props) {
    return (<li>
            <img src={props.image} alt={props.title}/>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </li>

    )
}

function Header() {

    return (<header>
        <img src={reactImg} alt="Stylized atom"/>
        <h1>React Essentials</h1>
        <p>
            {reactDescription[getRandomInt(reactDescription.length)]} React concepts you will need for almost any
            app you are
            going to build!
        </p>
    </header>)


}


function App() {
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
        </main>

        <main>
            <h2>Time to get started!</h2>
        </main>
    </div>);
}


export default App;
