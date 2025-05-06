import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CardComponent } from '../card/card.component';
import { Card } from '../_models/card';
import { Tag } from '../_models/tags';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  providers: []
})
export class PortfolioComponent {

  projects: Card[] = [
    {
      id: 1,
      name: 'Diabetes Prediction App',
      summary: "A web-based interactive application powered by Streamlit, LightGBM, XGBoost, and ensemble machine learning, designed to predict the likelihood of diabetes based on user health indicators.",
      description: "This project leverages real-world health data from the Behavioral Risk Factor Surveillance System (BRFSS 2015) to build a predictive model for diabetes diagnosis. It uses an ensemble learning approach combining LightGBM and XGBoost in a soft voting classifier to provide robust, interpretable predictions. The aim is to promote early detection and awareness by providing accessible predictive modeling.",
      projectLink: 'https://github.com/rahul713rk/Diabetes_prediction',
      LiveLink: 'https://diabetes-prediction-rahul713rk.streamlit.app/',
      tags: [Tag.PYTHON , Tag.PANDAS , Tag.STREAMLIT , Tag.PLOTLY , Tag.ENSEMBLE_LEARNING , Tag.LIGHTGBM , Tag.XGBOOST],
      pictures: ["../../assets/diabetes-prediction-01.png"]
    },
    {
      id: 2,
      name: 'Productivity Tracker',
      summary: "Productivity Tracker is a high-performance desktop app built with PySide6 and Nuitka that combines task management, face detection (via MediaPipe), GitHub integration , activity tracking, and data visualization to help users boost focus and productivity through a unified, modern interface.",
      description: "The Productivity Tracker is an all-in-one desktop application designed to help developers, students, and remote workers maximize productivity by combining essential tracking features with modern UI and face detection-based engagement monitoring. Built using PySide6 (Qt for Python) and compiled using Nuitka for high performance, the app integrates multiple tools within a single seamless interface. This isn’t just a task manager — it's a complete productivity suite with a real-time face detection module (MediaPipe) to infer user presence and focus, task scheduling, GitHub Integration, and rich data visualization via SQL-based logs.",
      projectLink: 'https://github.com/rahul713rk/Productivity_tracker',
      LiveLink: '',
      tags: [Tag.PYTHON , Tag.PANDAS , Tag.PYSIDE , Tag.PLOTLY , Tag.MEDIAPIPE , Tag.NUITKA , Tag.SQLITE , Tag.GIT , Tag.CV , Tag.LINUX],
      pictures: ["../../assets/pt-01.png", "../../assets/pt-02.png", "../../assets/pt-03.png"]
    },
    {
      id: 3,
      name: 'Interactive Data Explorer',
      summary: 'The Interactive Data Explorer is a tool designed to help users visualize and analyze data interactively. It provides a user-friendly interface for exploring datasets, creating visualizations, and gaining insights.',
      description: 'The Interactive Data Explorer is a tool designed to help users visualize and analyze data interactively. It provides a user-friendly interface for exploring datasets, creating visualizations, and gaining insights.',
      projectLink: 'https://github.com/rahul713rk/Interactive-Data-Explorer',
      LiveLink: 'https://interactive-data-explorer-rahul713rk.streamlit.app/',
      tags: [Tag.PYTHON , Tag.PANDAS , Tag.STREAMLIT , Tag.PLOTLY ],
      pictures: ["../../assets/Interactive-data-explorer-01.png", "../../assets/Interactive-data-explorer-02.png" ]
    },
    {
      id: 4,
      name: 'Telecom Churn Prediction',
      summary: 'A Streamlit-based web application designed to predict customer churn in the telecommunications sector using machine learning techniques.',
      description: 'This project is a web application that predicts customer churn for a telecom company using machine learning. Built with Streamlit and LightGBM, it allows users to input customer details like personal info, billing, and service usage to get a real-time prediction of whether the customer is likely to leave. The model is trained on a cleaned and balanced dataset, and the app features an interactive interface for easy use and demonstration.',
      projectLink: 'https://github.com/rahul713rk/telcom_churn_prediction_app',
      LiveLink: 'https://telcom-churn-prediction-app.streamlit.app/',
      tags: [Tag.PYTHON , Tag.PANDAS , Tag.STREAMLIT , Tag.PLOTLY , Tag.ENSEMBLE_LEARNING , Tag.LIGHTGBM , Tag.XGBOOST],
      pictures: ["../../assets/telecom-churn-01.png", "../../assets/telecom-churn-02.png", "../../assets/telecom-churn-03.png"]
    },
    {
      id: 5,
      name: 'Text Vectorization Visualizer',
      summary: 'Text Vectorization Visualizer is an interactive Streamlit app that helps you understand, visualize, and compare different text vectorization techniques in NLP',
      description: 'This project is a Streamlit-based web application for visualizing different text vectorization techniques. Users can input text and explore how it is transformed into numerical vectors using methods like Bag of Words, N-Grams, TF-IDF, Word2Vec, GloVe, and fastText. The app provides preprocessing options such as stopword removal, lemmatization, and punctuation handling, along with various tokenization methods. Vectorized outputs are visualized through interactive 2D and 3D plots using Plotly, offering an intuitive way to understand and compare the representations produced by different NLP models.',
      projectLink: 'https://github.com/rahul713rk/Text-Vectorization-Visualizer',
      LiveLink: 'https://text-vectorization-visualizer.streamlit.app/',
      tags: [Tag.PYTHON , Tag.PANDAS , Tag.STREAMLIT , Tag.PLOTLY , Tag.NLP , Tag.SENTENCE_TRANSFORMERS ],
      pictures: ["../../assets/text-vectorization-01.png", "../../assets/text-vectorization-02.png"]
    },
    {
      id: 6,
      name: 'Angular Portfolio App',
      summary: 'A responsive and dynamic portfolio website designed and developed by Rahul Kumar.',
      description: 'This portfolio is a dynamic and responsive web application built using Angular, showcasing my skills and projects as a software developer. The design and development of this portfolio aimed to provide a seamless user experience across different devices while highlighting various aspects of my professional journey. The potfolio has sections of home, about, education, portfolio projects and contact information. Key features are its dynamic content, the responsive design and modern aesthetics.',
      projectLink: '',
      LiveLink: '',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.HTML5, Tag.CSS3, Tag.BOOTSTRAP],
      pictures: ["../../assets/portfolio-01.png", "../../assets/portfolio-02.png", "../../assets/portfolio-03.png", "../../assets/portfolio-04.png", "../../assets/portfolio-05.png"]
    },

  ]


  constructor(private titleService: Title) {
    this.titleService.setTitle('RK | Portfolio')
  }

  trackById(index: number, project: Card): number {
    return project.id;
  }

}
