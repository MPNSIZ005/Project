import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import people from '../Data/document.json';

 

const columns = [
    { id: 'nameAndSurname', label: 'nameAndSurname', minWidth: 170 },
    { id: 'institution', label: 'institution', minWidth: 250 },
    { id: 'gender', label: 'gender', minWidth: 170 },
    { id: 'email', label: 'email', minWidth: 170 },
    { id: 'Province', label: 'Province', minWidth: 170 }, 
    
 
  ];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

 

var rows = [
    {
        "_id": "632b246d0cf9beafa0a673a9",
        "nameAndSurname": "OLUKANMI, P",
        "institution": "University of Johannesburg",
        "specialisation": "NEURAL COMPUTING & APPLICATIONS; NEURAL COMPUTING & APPLICATIONS; NEURAL COMPUTING & APPLICATIONS",
        "publications": "Rethinkingk-means clustering in the age of massive datasets: a constant-time approach; Automatic detection of outliers and the number of clusters in k-means clustering via Chebyshev-type inequalities; k-Means-MIND: comparing seeds without repeated k-means runs",
        "gender": "Female",
        "email": "polukanmi@uj.ac.za",
        "Province": "Gauteng"
      },
      {
        "_id": "632b246d0cf9beafa0a673aa",
        "nameAndSurname": "NELWAMONDO, F",
        "institution": "University of Johannesburg",
        "specialisation": "NEURAL COMPUTING & APPLICATIONS; APPLIED COMPUTATIONAL INTELLIGENCE AND SOFT COMPUTING; NEURAL COMPUTING & APPLICATIONS; NEURAL COMPUTING & APPLICATIONS; APPLIED SOFT COMPUTING; APPLIED ARTIFICIAL INTELLIGENCE",
        "publications": "Rethinkingk-means clustering in the age of massive datasets: a constant-time approach; Recurrent Adaptive Classifier Ensemble for Handling Recurring Concept Drifts; Automatic detection of outliers and the number of clusters in k-means clustering via Chebyshev-type inequalities; k-Means-MIND: comparing seeds without repeated k-means runs; Partial imputation of unseen records to improve classification using a hybrid multi-layered artificial immune system and genetic algorithm; PREDICTIVE MODELING WITH MISSING DATA USING AN AUTOMATIC RELEVANCE DETERMINATION ENSEMBLE: A COMPARATIVE STUDY",
        "gender": "Female",
        "email": "fnelwamondo@uj.ac.za",
        "Province": "Gauteng"
      },
      {
        "_id": "632b246d0cf9beafa0a673ab",
        "nameAndSurname": "MARWALA, T",
        "institution": "University of Johannesburg",
        "specialisation": "NEURAL COMPUTING & APPLICATIONS; INTERNATIONAL JOURNAL OF NEURAL SYSTEMS; INTERNATIONAL JOURNAL OF INNOVATIVE COMPUTING INFORMATION AND CONTROL; NEURAL COMPUTING & APPLICATIONS; INTERNATIONAL JOURNAL OF INNOVATIVE COMPUTING INFORMATION AND CONTROL; NEURAL COMPUTING & APPLICATIONS; INTERNATIONAL JOURNAL OF INNOVATIVE COMPUTING INFORMATION AND CONTROL; COMPUTING AND INFORMATICS; INTERNATIONAL JOURNAL OF INNOVATIVE COMPUTING INFORMATION AND CONTROL; APPLIED SOFT COMPUTING; APPLIED ARTIFICIAL INTELLIGENCE; ALGORITHMS; NEURAL INFORMATION PROCESSING, PT 3, PROCEEDINGS; NEURAL INFORMATION PROCESSING, PT 3, PROCEEDINGS; NEURAL INFORMATION PROCESSING, PT 3, PROCEEDINGS; NEURAL NETWORKS; SOFT COMPUTING; INTEGRATED COMPUTER-AIDED ENGINEERING; APPLIED SOFT COMPUTING; NEURAL INFORMATION PROCESSING, PT 3, PROCEEDINGS; EXPERT SYSTEMS WITH APPLICATIONS; PATTERN RECOGNITION LETTERS",
        "publications": "Rethinkingk-means clustering in the age of massive datasets: a constant-time approach; CALLER BEHAVIOUR CLASSIFICATION USING COMPUTATIONAL INTELLIGENCE METHODS; FINGERPRINT SEGMENTATION: AN INVESTIGATION OF VARIOUS TECHNIQUES AND A PARAMETER STUDY OF A VARIANCE-BASED METHOD; Automatic detection of outliers and the number of clusters in k-means clustering via Chebyshev-type inequalities; Early classifications of bearing faults using hidden Markov Models, Gaussian Mixture Models, Mel-frequency Cepstral Coefficients and fractals; k-Means-MIND: comparing seeds without repeated k-means runs; Techniques for handling missing data: Applications to online condition monitoring; The use of genetic algorithms and neural networks to approximate missing data in database; Using an object oriented calculation process framework and neural networks for classification of image shapes; Partial imputation of unseen records to improve classification using a hybrid multi-layered artificial immune system and genetic algorithm; PREDICTIVE MODELING WITH MISSING DATA USING AN AUTOMATIC RELEVANCE DETERMINATION ENSEMBLE: A COMPARATIVE STUDY; Locally Scaled and Stochastic Volatility Metropolis-Hastings Algorithms; Online forecasting of stock market movement direction using the improved incremental algorithm; Neuro-fuzzy Modeling and fuzzy rule extraction applied to conflict management; Neural networks, fuzzy inference systems and adaptive-neuro fuzzy inference systems for financial decision making; A multivariate additive noise model for complete causal discovery; Stochastic differential equations with imprecisely defined parameters in market analysis; Finite element model updating using fish school search and volitive particle swarm optimization; An adaptive fuzzy predictive control of nonlinear processes based on Multi-Kernel least squares support vector regression; Neural network applications in advanced aircraft flight control system, a hybrid system, a flight test demonstration; A new T-S fuzzy model predictive control for nonlinear processes; Bayesian training of neural networks using genetic programming",
        "gender": "Male",
        "email": "tmarwala@uj.ac.za",
        "Province": "Gauteng"
      },
      {
        "_id": "632b246d0cf9beafa0a673ac",
        "nameAndSurname": "CHIKAMAI, K",
        "institution": "University of KwaZulu Natal",
        "specialisation": "INTELLIGENT DATA ANALYSIS",
        "publications": "Mammogram content-based image retrieval based on malignancy classification",
        "gender": "Male",
        "Province": "KwaZulu-Natal"
      },
      {
        "_id": "632b246d0cf9beafa0a673ad",
        "nameAndSurname": "VIRIRI, S",
        "institution": "University of KwaZulu Natal",
        "specialisation": "INTELLIGENT DATA ANALYSIS; NEURAL COMPUTING & APPLICATIONS; ARTIFICIAL INTELLIGENCE REVIEW; ARTIFICIAL INTELLIGENCE REVIEW; APPLIED SOFT COMPUTING; IET COMPUTER VISION; PEERJ COMPUTER SCIENCE",
        "publications": "Mammogram content-based image retrieval based on malignancy classification; A conceptual comparison of several metaheuristic algorithms on continuous optimisation problems; Deep learning techniques for skin lesion analysis and melanoma cancer detection: a survey of state-of-the-art; Deep learning approach for facial age classification: a survey of the state-of-the-art; A spy search mechanism for memetic algorithm in dynamic environments; Automatic lung segmentation based on Graph Cut using a distance-constrained energy; Multilabel convolution neural network for facial expression recognition and ordinal intensity estimation",
        "gender": "Male",
        "Province": "KwaZulu-Natal"
      },
      {
        "_id": "632b246d0cf9beafa0a673ae",
        "nameAndSurname": "TAPAMO, JR",
        "institution": "University of KwaZulu Natal",
        "specialisation": "INTELLIGENT DATA ANALYSIS; INTERNATIONAL JOURNAL ON SEMANTIC WEB AND INFORMATION SYSTEMS; IET COMPUTER VISION; IET COMPUTER VISION; ADVANCES IN ELECTRICAL AND COMPUTER ENGINEERING; EXPERT SYSTEMS WITH APPLICATIONS",
        "publications": "Mammogram content-based image retrieval based on malignancy classification; An Architecture for Managing Knowledge and System Dynamism in the Worldwide Sensor Web; Angled local directional pattern for texture analysis with an application to facial expression recognition; Automatic lung segmentation based on Graph Cut using a distance-constrained energy; Circular Derivative Local Binary Pattern Feature Description for Facial Expression Recognition; Maritime surveillance: Tracking ships inside a dynamic background using a fast level-set",
        "gender": "Male",
        "Province": "KwaZulu-Natal"
      },
      {
        "_id": "632b246d0cf9beafa0a673af",
        "nameAndSurname": "LUHANDJULA, MK",
        "institution": "University of South Africa",
        "specialisation": "INTERNATIONAL JOURNAL OF UNCERTAINTY FUZZINESS AND KNOWLEDGE-BASED SYSTEMS; INTERNATIONAL JOURNAL OF UNCERTAINTY FUZZINESS AND KNOWLEDGE-BASED SYSTEMS",
        "publications": "A Monte Carlo simulation based approach for stochastic semi-infinite mathematical programming problems; An Interval Approximation Approach for a Multiobjective Programming Model with Fuzzy Objective Functions",
        "gender": "Male",
        "email": "luhanmk@unisa.ac.za",
        "Province": "Gauteng"
      },
      {
        "_id": "632b246d0cf9beafa0a673b0",
        "nameAndSurname": "SERUTLA, L",
        "institution": "University of Pretoria",
        "specialisation": "MACHINE TRANSLATION AND THE INFORMATION SOUP",
        "publications": "Sentence analysis using a concept lattice",
        "gender": "Male",
        "Province": "Gauteng"
      },
      {
        "_id": "632b246d0cf9beafa0a673b1",
        "nameAndSurname": "KOURIE, D",
        "institution": "University of Pretoria",
        "specialisation": "MACHINE TRANSLATION AND THE INFORMATION SOUP; CONCEPT LATTICES, PROCEEDINGS",
        "publications": "Sentence analysis using a concept lattice; AddIntent: A new incremental algorithm for constructing concept lattices",
        "gender": "Female",
        "Province": "Gauteng"
      },
      {
        "_id": "632b246d0cf9beafa0a673b2",
        "nameAndSurname": "BRINK, AD",
        "specialisation": "PATTERN RECOGNITION LETTERS; PATTERN RECOGNITION LETTERS; PATTERN RECOGNITION LETTERS; PATTERN RECOGNITION; PATTERN RECOGNITION",
        "publications": "Using spatial information as an aid to maximum entropy image threshold selection; GREY-LEVEL THRESHOLDING OF IMAGES USING A CORRELATION CRITERION; COMMENTS ON GRAY-LEVEL THRESHOLDING OF IMAGES USING A CORRELATION CRITERION; Minimum cross-entropy threshold selection; THRESHOLDING OF DIGITAL IMAGES USING 2-DIMENSIONAL ENTROPIES",
        "gender": "Male"
      },
      {
        "_id": "632b246d0cf9beafa0a673b3",
        "nameAndSurname": "LAMOLA, MJ",
        "specialisation": "AI & SOCIETY",
        "publications": "The future of artificial intelligence, posthumanism and the inflection of Pixley Isaka Seme's African humanism",
        "gender": "Male",
        "email": "maleselal@uj.ac.za"
      },
      {
        "_id": "632b246d0cf9beafa0a673b4",
        "nameAndSurname": "EZUGWU, AE",
        "specialisation": "KNOWLEDGE-BASED SYSTEMS; INTERNATIONAL JOURNAL OF INTELLIGENT SYSTEMS; NEURAL COMPUTING & APPLICATIONS; NEURAL COMPUTING & APPLICATIONS; JOURNAL OF EXPERIMENTAL & THEORETICAL ARTIFICIAL INTELLIGENCE; JOURNAL OF INTELLIGENT SYSTEMS; JOURNAL OF INTELLIGENT SYSTEMS; NEURAL COMPUTING & APPLICATIONS; EXPERT SYSTEMS WITH APPLICATIONS; ARTIFICIAL INTELLIGENCE REVIEW; NEURAL COMPUTING & APPLICATIONS; EXPERT SYSTEMS WITH APPLICATIONS; NEURAL COMPUTING & APPLICATIONS; NEURAL COMPUTING & APPLICATIONS; PEERJ COMPUTER SCIENCE; ENGINEERING APPLICATIONS OF ARTIFICIAL INTELLIGENCE",
        "publications": "Enhanced symbiotic organisms search algorithm for unrelated parallel machines manufacturing scheduling with setup times; Advanced discrete firefly algorithm with adaptive mutation-based neighborhood search for scheduling unrelated parallel machines with sequence-dependent setup times; Ant colony optimization edge selection for support vector machine speed optimization; A conceptual comparison of several metaheuristic algorithms on continuous optimisation problems; Boosting symbiotic organism search algorithm with ecosystem service for dynamic blood allocation in blood banking system; Metaheuristic algorithms for one-dimensional bin-packing problems: A survey of recent advances and applications; Evaluation of several initialization methods on arithmetic optimization algorithm performance; Enhancing reasoning through reduction of vagueness using fuzzy OWL-2 for representation of breast cancer ontologies; Mathematical model formulation and hybrid metaheuristic optimization approach for near-optimal blood assignment in a blood bank system; Metaheuristics: a comprehensive overview and classification along with bibliometric analysis; Automatic clustering algorithms: a systematic review and bibliometric analysis of relevant literature; Symbiotic organisms search algorithm: Theory, recent advances and applications; Multiclass feature selection with metaheuristic optimization algorithms: a review; Prairie Dog Optimization Algorithm; Early survey with bibliometric analysis on machine learning approaches in controlling COVID-19 outbreaks; A comprehensive survey of clustering algorithms: State-of-the-art machine learning applications, taxonomy, challenges, and future research prospects",
        "gender": "Male",
        "email": "ezugwua@ukzn.ac.za"
      },
      {
        "_id": "632b246d0cf9beafa0a673b5",
        "nameAndSurname": "NORTHOVER, M",
        "institution": "University of Pretoria",
        "specialisation": "CONCEPTUAL STRUCTURES: INSPIRATION AND APPLICATION",
        "publications": "Karl Popper's critical rationalism in agile software development",
        "gender": "Male",
        "email": "mandy.northover@siemens.co.za",
        "Province": "Gauteng"
      },
      {
        "_id": "632b246d0cf9beafa0a673b6",
        "nameAndSurname": "BOAKE, A",
        "institution": "University of Pretoria",
        "specialisation": "CONCEPTUAL STRUCTURES: INSPIRATION AND APPLICATION",
        "publications": "Karl Popper's critical rationalism in agile software development",
        "gender": "Male",
        "email": "andrew.boake@up.ac.za",
        "Province": "Gauteng"
      },
      {
        "_id": "632b246d0cf9beafa0a673b7",
        "nameAndSurname": "KOURIE, DG",
        "institution": "University of Pretoria",
        "specialisation": "CONCEPTUAL STRUCTURES: INSPIRATION AND APPLICATION; JOURNAL OF EXPERIMENTAL & THEORETICAL ARTIFICIAL INTELLIGENCE; CONCEPTUAL STRUCTURES: INSPIRATION AND APPLICATION; INTERNATIONAL JOURNAL OF SOFTWARE ENGINEERING AND KNOWLEDGE ENGINEERING",
        "publications": "Karl Popper's critical rationalism in agile software development; Compressed pseudo-lattices; On lattices in access control models; REFACTORING WITH ORDERED COLLECTIONS OF FINE-GRAIN TRANSFORMATIONS",
        "gender": "Male",
        "email": "dkourie@cs.up.ac.za",
        "Province": "Gauteng"
      },
      {
        "_id": "632b246d0cf9beafa0a673b8",
        "nameAndSurname": "VAN DER MERWE, FJ",
        "institution": "University of Pretoria",
        "specialisation": "JOURNAL OF EXPERIMENTAL & THEORETICAL ARTIFICIAL INTELLIGENCE",
        "publications": "Compressed pseudo-lattices",
        "gender": "Male",
        "email": "dean.vd.merwe@bentleywest.com",
        "Province": "Gauteng"
      },
      {
        "_id": "632b246d0cf9beafa0a673b9",
        "nameAndSurname": "OLABANJI, OM",
        "specialisation": "FOUNDATIONS OF COMPUTING AND DECISION SCIENCES",
        "publications": "Fusing Multi-Attribute Decision Models for Decision Making to Achieve Optimal Product Design",
        "gender": "Female"
      },
      {
        "_id": "632b246d0cf9beafa0a673ba",
        "nameAndSurname": "MPOFU, K",
        "institution": "Tshwane University of Technology",
        "specialisation": "FOUNDATIONS OF COMPUTING AND DECISION SCIENCES",
        "publications": "Fusing Multi-Attribute Decision Models for Decision Making to Achieve Optimal Product Design",
        "gender": "Male",
        "Province": "Gauteng"
      },
      {
        "_id": "632b246d0cf9beafa0a673bb",
        "nameAndSurname": "WATT, N",
        "institution": "Nelson Mandela University",
        "specialisation": "EVOLUTIONARY INTELLIGENCE",
        "publications": "Towards robot vision using deep neural networks in evolutionary robotics",
        "gender": "Male",
        "email": "natewatt0@gmail.com",
        "Province": "Eastern Cape"
      },
      {
        "_id": "632b246d0cf9beafa0a673bc",
        "nameAndSurname": "DU PLESSIS, MC",
        "institution": "Nelson Mandela University",
        "specialisation": "EVOLUTIONARY INTELLIGENCE; COMPUTING AND INFORMATICS; JOURNAL OF INTELLIGENT & ROBOTIC SYSTEMS; JOURNAL OF INTELLIGENT & ROBOTIC SYSTEMS; ARTIFICIAL LIFE; ROBOTICS AND AUTONOMOUS SYSTEMS; ROBOTICS AND AUTONOMOUS SYSTEMS; ROBOTICS AND AUTONOMOUS SYSTEMS; ROBOTICS AND AUTONOMOUS SYSTEMS; JOURNAL OF INTELLIGENT & ROBOTIC SYSTEMS",
        "publications": "Towards robot vision using deep neural networks in evolutionary robotics; INCORPORATING STRUCTURED TEXT RETRIEVAL INTO THE EXTENDED BOOLEAN MODEL; Evolutionary Robotics Applied to Hexapod Locomotion: a Comparative Study of Simulation Techniques; Simulating Robots Without Conventional Physics: A Neural Network Approach; Evolutionary Robotics Controllers with Proprioception Facilitated by Neural-Network-Based Simulators; Bootstrapped Neuro-Simulation for complex robots; Concurrent controller and Simulator Neural Network development for a differentially-steered robot in Evolutionary Robotics; Bootstrapped Neuro-Simulation as a method of concurrent neuro-evolution and damage recovery; Concurrent controller and Simulator Neural Network development for a snake-like robot in Evolutionary Robotics; Neuroevolution of Inverted Pendulum Control: A Comparative Study of Simulation Techniques",
        "gender": "Male",
        "email": "mc.duplessis@mandela.ac.za",
        "Province": "Eastern Cape"
      },
      {
        "_id": "632b246d0cf9beafa0a673bd",
        "nameAndSurname": "ZVAREVASHE, K",
        "institution": "Durban University of Technology",
        "specialisation": "INTELLIGENT DATA ANALYSIS; ALGORITHMS; ALGORITHMS",
        "publications": "Recognition of speech emotion using custom 2D-convolution neural network deep learning algorithm; Recognition of Cross-Language Acoustic Emotional Valence Using Stacked Ensemble Learning; Ensemble Learning of Hybrid Acoustic Features for Speech Emotion Recognition",
        "gender": "Male",
        "Province": "KwaZulu-Natal"
      },
      {
        "_id": "632b246d0cf9beafa0a673be",
        "nameAndSurname": "OLUGBARA, OO",
        "institution": "Durban University of Technology",
        "specialisation": "INTELLIGENT DATA ANALYSIS; INTELLIGENT DATA ANALYSIS; ALGORITHMS; EGYPTIAN INFORMATICS JOURNAL; INTERNATIONAL JOURNAL OF INFORMATION TechnologyOGY & DECISION MAKING",
        "publications": "Recognition of speech emotion using custom 2D-convolution neural network deep learning algorithm; Evaluation of data analytics based clustering algorithms for knowledge mining in a student engagement data; Recognition of Cross-Language Acoustic Emotional Valence Using Stacked Ensemble Learning; Product image classification using Eigen Colour feature with ensemble machine learning; EXPLOITING IMAGE CONTENT IN LOCATION-BASED SHOPPING RECOMMENDER SYSTEMS FOR MOBILE USERS",
        "gender": "Male",
        "Province": "KwaZulu-Natal"
      },
      {
        "_id": "632b246d0cf9beafa0a673bf",
        "nameAndSurname": "HAGER, L",
        "institution": "North-West University",
        "specialisation": "NEUROCOMPUTING",
        "publications": "Adaptive Neural network control of a helicopter system with optimal observer and actor-critic design",
        "gender": "Male"
      },
      {
        "_id": "632b246d0cf9beafa0a673c0",
        "nameAndSurname": "UREN, KR",
        "institution": "North-West University",
        "specialisation": "NEUROCOMPUTING",
        "publications": "Adaptive Neural network control of a helicopter system with optimal observer and actor-critic design",
        "gender": "Male"
      },
      {
        "_id": "632b246d0cf9beafa0a673c1",
        "nameAndSurname": "VAN SCHOOR, G",
        "institution": "North-West University",
        "specialisation": "NEUROCOMPUTING",
        "publications": "Adaptive Neural network control of a helicopter system with optimal observer and actor-critic design",
        "gender": "Male"
      },
      {
        "_id": "632b246d0cf9beafa0a673c2",
        "nameAndSurname": "VAN RENSBURG, AJ",
        "institution": "North-West University",
        "specialisation": "NEUROCOMPUTING",
        "publications": "Adaptive Neural network control of a helicopter system with optimal observer and actor-critic design",
        "gender": "Male"
      },
      {
        "_id": "632b246d0cf9beafa0a673c3",
        "nameAndSurname": "CUI, YH",
        "specialisation": "INTERNATIONAL JOURNAL OF MACHINE LEARNING AND CYBERNETICS",
        "publications": "Probabilistic DEAR models",
        "gender": "Male"
      },
      {
        "_id": "632b246d0cf9beafa0a673c4",
        "nameAndSurname": "GUO, RK",
        "specialisation": "INTERNATIONAL JOURNAL OF MACHINE LEARNING AND CYBERNETICS; INTERNATIONAL JOURNAL OF UNCERTAINTY FUZZINESS AND KNOWLEDGE-BASED SYSTEMS",
        "publications": "Probabilistic DEAR models; Credibility measure-based fuzzy membership grade kriging",
        "gender": "Male"
      },
      {
        "_id": "632b246d0cf9beafa0a673c5",
        "nameAndSurname": "GUO, DN",
        "specialisation": "INTERNATIONAL JOURNAL OF MACHINE LEARNING AND CYBERNETICS; INTERNATIONAL JOURNAL OF UNCERTAINTY FUZZINESS AND KNOWLEDGE-BASED SYSTEMS",
        "publications": "Probabilistic DEAR models; Credibility measure-based fuzzy membership grade kriging",
        "gender": "Female"
      },
      {
        "_id": "632b246d0cf9beafa0a673c6",
        "nameAndSurname": "TELEMALA, JP",
        "specialisation": "ACM TRANSACTIONS ON ASIAN AND LOW-RESOURCE LANGUAGE INFORMATION PROCESSING",
        "publications": "Exploring Topic-language Preferences in Multilingual Swahili Information Retrieval in Tanzania",
        "gender": "Male",
        "email": "jtelemala@cs.uct.ac.za"
      },
      {
        "_id": "632b246d0cf9beafa0a673c7",
        "nameAndSurname": "SULEMAN, H",
        "institution": "University of Cape Town",
        "specialisation": "ACM TRANSACTIONS ON ASIAN AND LOW-RESOURCE LANGUAGE INFORMATION PROCESSING",
        "publications": "Exploring Topic-language Preferences in Multilingual Swahili Information Retrieval in Tanzania",
        "gender": "Male",
        "email": "hussein@cs.uct.ac.za",
        "Province": "Western Cape"
      },
      {
        "_id": "632b246d0cf9beafa0a673c8",
        "nameAndSurname": "MOTEPE, S",
        "institution": "University of Johannesburg",
        "specialisation": "JOURNAL OF INTELLIGENT & FUZZY SYSTEMS",
        "publications": "Effective load forecasting for large power consuming industrial customers using long short-term memory recurrent neural networks",
        "gender": "Male",
        "Province": "Gauteng"
      },
      {
        "_id": "632b246d0cf9beafa0a673c9",
        "nameAndSurname": "HASAN, AN",
        "institution": "University of Johannesburg",
        "specialisation": "JOURNAL OF INTELLIGENT & FUZZY SYSTEMS; INTERNATIONAL JOURNAL OF INNOVATIVE COMPUTING INFORMATION AND CONTROL",
        "publications": "Effective load forecasting for large power consuming industrial customers using long short-term memory recurrent neural networks; EFFICIENT PHOTOVOLTAIC MPPT SYSTEM USING COARSE GAUSSIAN SUPPORT VECTOR MACHINE AND ARTIFICIAL NEURAL NETWORK TECHNIQUES",
        "gender": "Male",
        "Province": "Gauteng"
      },
      {
        "_id": "632b246d0cf9beafa0a673ca",
        "nameAndSurname": "TWALA, B",
        "institution": "Durban University of Technology",
        "specialisation": "JOURNAL OF INTELLIGENT & FUZZY SYSTEMS; PATTERN RECOGNITION LETTERS; JOURNAL OF ADVANCED COMPUTATIONAL INTELLIGENCE AND INTELLIGENT INFORMATICS; NEURAL COMPUTING & APPLICATIONS; APPLIED SOFT COMPUTING; APPLIED SOFT COMPUTING; APPLIED ARTIFICIAL INTELLIGENCE; APPLIED ARTIFICIAL INTELLIGENCE; APPLIED ARTIFICIAL INTELLIGENCE; INTELLIGENT DATA ANALYSIS; EXPERT SYSTEMS WITH APPLICATIONS; EXPERT SYSTEMS WITH APPLICATIONS; EXPERT SYSTEMS WITH APPLICATIONS; INTELLIGENT DATA ANALYSIS; EXPERT SYSTEMS",
        "publications": "Effective load forecasting for large power consuming industrial customers using long short-term memory recurrent neural networks; Predicting incomplete gene microarray data with the use of supervised learning algorithms; When Partly Missing Data Matters in Software Effort Development Prediction; Automatic detection of outliers and the number of clusters in k-means clustering via Chebyshev-type inequalities; Optimising latent features using artificial immune system in collaborative filtering for recommender system; Partial imputation of unseen records to improve classification using a hybrid multi-layered artificial immune system and genetic algorithm; PREDICTIVE MODELING WITH MISSING DATA USING AN AUTOMATIC RELEVANCE DETERMINATION ENSEMBLE: A COMPARATIVE STUDY; AN EMPIRICAL COMPARISON OF TECHNIQUES FOR HANDLING INCOMPLETE DATA USING DECISION TREES; REASONING WITH NOISY SOFTWARE EFFORT DATA; Ensemble missing data techniques for software effort prediction; Multiple classifier application to credit risk assessment; Multiple classifier application to credit risk assessment (vol 37, pg 3326, 2010); Sparseness reduction in collaborative filtering using a nearest neighbour artificial immune system with genetic algorithms; Impact of noise on credit risk prediction: Does data quality really matter?; Extracting grey relational systems from incomplete road traffic accidents data: the case of Gauteng Province in South Africa",
        "gender": "Male",
        "Province": "KwaZulu-Natal"
      },
      {
        "_id": "632b246d0cf9beafa0a673cb",
        "nameAndSurname": "STOPFORTH, R",
        "institution": "University of KwaZulu Natal",
        "specialisation": "JOURNAL OF INTELLIGENT & FUZZY SYSTEMS",
        "publications": "Effective load forecasting for large power consuming industrial customers using long short-term memory recurrent neural networks",
        "gender": "Female",
        "Province": "KwaZulu-Natal"
      },
      {
        "_id": "632b246d0cf9beafa0a673cc",
        "nameAndSurname": "SOLMS, F",
        "specialisation": "KNOWLEDGE-BASED SYSTEMS",
        "publications": "Generating MDA's platform independent model using URDAD",
        "gender": "Male"
      },
      {
        "_id": "632b246d0cf9beafa0a673cd",
        "nameAndSurname": "LOUBSER, D",
        "specialisation": "KNOWLEDGE-BASED SYSTEMS",
        "publications": "Generating MDA's platform independent model using URDAD",
        "gender": "Male"
      },
      {
        "_id": "632b246d0cf9beafa0a673ce",
        "nameAndSurname": "GROENEWALD, AM",
        "institution": "University of Pretoria",
        "specialisation": "PATTERN RECOGNITION LETTERS",
        "publications": "RELATED APPROACHES TO GRADIENT-BASED THRESHOLDING",
        "gender": "Male",
        "Province": "Gauteng"
      },
      {
        "_id": "632b246d0cf9beafa0a673cf",
        "nameAndSurname": "BARNARD, E",
        "institution": "University of Pretoria",
        "specialisation": "PATTERN RECOGNITION LETTERS; NEUROCOMPUTING; COMPUTER SPEECH AND LANGUAGE; COMPUTER SPEECH AND LANGUAGE; COMPUTER SPEECH AND LANGUAGE; NEURAL NETWORKS; NEURAL COMPUTATION; IEEE TRANSACTIONS ON NEURAL NETWORKS; IEEE TRANSACTIONS ON NEURAL NETWORKS; IEEE TRANSACTIONS ON NEURAL NETWORKS; IEEE TRANSACTIONS ON NEURAL NETWORKS; IEEE TRANSACTIONS ON NEURAL NETWORKS; IEEE TRANSACTIONS ON NEURAL NETWORKS; IEEE TRANSACTIONS ON NEURAL NETWORKS; COMPUTER SPEECH AND LANGUAGE; IEEE TRANSACTIONS ON NEURAL NETWORKS",
        "publications": "RELATED APPROACHES TO GRADIENT-BASED THRESHOLDING; A COMPARATIVE-STUDY OF OPTIMIZATION TECHNIQUES FOR BACKPROPAGATION; Pronunciation prediction with Default&Refine; Factors that affect the accuracy of text-based language identification; Continuous speech recognition with sparse coding; Feature-based classification of aerospace radar targets using neural networks; Determination and the No-Free-Lunch Paradox; OPTIMIZATION FOR TRAINING NEURAL NETS; PERFORMANCE AND GENERALIZATION OF THE CLASSIFICATION FIGURE OF MERIT CRITERION FUNCTION; BAYES STATISTICAL BEHAVIOR AND VALID GENERALIZATION OF PATTERN CLASSIFYING NEURAL NETWORKS - COMMENT; BACKPROPAGATION NEURAL NETS WITH ONE AND 2 HIDDEN LAYERS; AVOIDING FALSE LOCAL MINIMA BY PROPER INITIALIZATION OF CONNECTIONS; A MODEL FOR NONPOLYNOMIAL DECREASE IN ERROR RATE WITH INCREASING SAMPLE-SIZE; BACKPROPAGATION USES PRIOR INFORMATION EFFICIENTLY; Language independent search in MediaEval's Spoken Web Search task; PROCESS MODELING WITH THE REGRESSION NETWORK",
        "gender": "Male",
        "Province": "Gauteng"
      },
      {
        "_id": "632b246d0cf9beafa0a673d0",
        "nameAndSurname": "BOTHA, EC",
        "institution": "University of Pretoria",
        "specialisation": "PATTERN RECOGNITION LETTERS; NEURAL NETWORKS; PATTERN RECOGNITION; INTEGRATED COMPUTER-AIDED ENGINEERING; NETWORK-COMPUTATION IN NEURAL SYSTEMS; IEEE TRANSACTIONS ON NEURAL NETWORKS; PATTERN RECOGNITION LETTERS; NETWORK-COMPUTATION IN NEURAL SYSTEMS",
        "publications": "RELATED APPROACHES TO GRADIENT-BASED THRESHOLDING; Feature-based classification of aerospace radar targets using neural networks; FINGERPRINT RECOGNITION IN LOW-QUALITY IMAGES; Nonlinear preprocessing for improved filter capacity of an optical correlator; AN ANALYSIS OF COARSE-GRAIN PARALLEL TRAINING OF A NEURAL-NET; BACKPROPAGATION USES PRIOR INFORMATION EFFICIENTLY; Automatic face recognition in a heterogeneous population; Leap-frog is a robust algorithm for training neural networks",
        "gender": "Male",
        "Province": "Gauteng"
      },
      {
        "_id": "632b246d0cf9beafa0a673d1",
        "nameAndSurname": "VAN DER WESTHUIZEN, E",
        "institution": "Stellenbosch University",
        "specialisation": "COMPUTER SPEECH AND LANGUAGE; COMPUTER SPEECH AND LANGUAGE; COMPUTER SPEECH AND LANGUAGE",
        "publications": "Synthesised bigrams using word embeddings for code-switched ASR of four South African language pairs; Feature learning for efficient ASR-free keyword spotting in low-resource languages; Code-switched automatic speech recognition in five South African languages",
        "gender": "Male",
        "email": "ewaldvdw@sun.ac.za",
        "Province": "Western Cape"
      },
      {
        "_id": "632b246d0cf9beafa0a673d2",
        "nameAndSurname": "NIESLER, TR",
        "institution": "Stellenbosch University",
        "specialisation": "COMPUTER SPEECH AND LANGUAGE; IET COMPUTER VISION",
        "publications": "Synthesised bigrams using word embeddings for code-switched ASR of four South African language pairs; Vision-based hand pose estimation through similarity search using the earth mover's distance",
        "gender": "Male",
        "email": "trn@sun.ac.za",
        "Province": "Western Cape"
      },
      {
        "_id": "632b246d0cf9beafa0a673d3",
        "nameAndSurname": "PHORAH, M",
        "institution": "CSIR",
        "specialisation": "PATTERN RECOGNITION LETTERS",
        "publications": "Predicting incomplete gene microarray data with the use of supervised learning algorithms",
        "gender": "Male",
        "Province": "Gauteng"
      },
      {
        "_id": "632b246d0cf9beafa0a673d4",
        "nameAndSurname": "WILD, M",
        "institution": "Stellenbosch University",
        "specialisation": "INTERNATIONAL JOURNAL OF PATTERN RECOGNITION AND ARTIFICIAL INTELLIGENCE; JOURNAL OF MATHEMATICAL IMAGING AND VISION",
        "publications": "On the idempotency and co-idempotency of the morphological center; Computing the Output Distribution and Selection Probabilities of a Stack Filter from the DNF of Its Positive Boolean Function",
        "gender": "Male",
        "Province": "Western Cape"
      },
      {
        "_id": "632b246d0cf9beafa0a673d5",
        "nameAndSurname": "HOLM, JEW",
        "institution": "University of Pretoria",
        "specialisation": "NEUROCOMPUTING; NETWORK-COMPUTATION IN NEURAL SYSTEMS",
        "publications": "A COMPARATIVE-STUDY OF OPTIMIZATION TECHNIQUES FOR BACKPROPAGATION; Leap-frog is a robust algorithm for training neural networks",
        "gender": "Male",
        "Province": "Gauteng"
      },
]

rows = people;


/**
 * AllTable is a component that shows all the researchers in a table format
 * for users to interact with
 * 
 */


export default function AllTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 500 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
