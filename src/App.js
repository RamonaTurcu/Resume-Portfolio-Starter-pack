import React, {useEffect, useState} from "react";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Quote from "./Components/Quote";

import "./App.css";

const App = () => {
    const [resumeData, setResumeData] = useState({});
    const obj = {
        "particles": {
            "number": {
                "value": 80,
                    "density": {
                    "enable": true,
                        "value_area": 800
                }
            },
            "color": {
                "value": "#f0e4e4"
            },
            "shape": {
                "type": "triangle",
                    "stroke": {
                    "width": 0,
                        "color": "red"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                    "random": false,
                    "anim": {
                    "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                }
            },
            "size": {
                "value": 3.945738208161363,
                    "random": true,
                    "anim": {
                    "enable": false,
                        "speed": 300,
                        "size_min": 35.16483516483517,
                        "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                    "distance": 208.44356791251778,
                    "color": "#19d6f0",
                    "opacity": 0.4,
                    "width": 1
            },
            "move": {
                "enable": true,
                    "speed": 3.2068241217310423,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                    "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
                "events": {
                "onhover": {
                    "enable": true,
                        "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                        "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                        "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                },
                "repulse": {
                    "distance": 200,
                        "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    }
    useEffect(() => {
        fetch("/resumeData.json")
            .then((res) => res.json())
            .then((data) => {
                setResumeData(data);
            });
    }, []);

    return (
        <div className="App">
            <Header data={resumeData.main} obj={obj}/>
            <About data={resumeData.main}/>
            <Resume data={resumeData.resume}/>
           {/*<Portfolio data={resumeData.portfolio}/>*/}
            <Contact data={resumeData.main}/>
            <Quote data={resumeData.quote}/>
            <Footer data={resumeData.main}/>
        </div>
    );
};

export default App;
