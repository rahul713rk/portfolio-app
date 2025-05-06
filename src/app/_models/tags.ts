
export class Tag {
    // Frontend (Dark Theme)
    static readonly ANGULAR = new Tag('Angular', '#192129');
    static readonly TYPESCRIPT = new Tag('Typescript', '#192129');
    static readonly JAVASCRIPT = new Tag('Javascript', '#192129');
    static readonly HTML5 = new Tag('HTML5', '#192129');
    static readonly CSS3 = new Tag('CSS3', '#192129');
    static readonly BOOTSTRAP = new Tag('Bootstrap', '#192129');
    static readonly VUEJS = new Tag('Vue.JS', '#192129');

    // Java Ecosystem
    static readonly JAVA = new Tag('Java', '#5a7581');
    static readonly SPRINGBOOT = new Tag('Spring Boot', '#5a7581');
    static readonly SPRINGSECURITY = new Tag('Spring Security', '#5a7581');
    static readonly SPRINGJWT = new Tag('Spring JWT', '#5a7581');
    static readonly SPRINGWEB = new Tag('Spring Web', '#5a7581');
    static readonly HIBERNATE = new Tag('Hibernate', '#5a7581');
    static readonly JUNIT = new Tag('JUnit', '#5a7581');
    static readonly MOCKITO = new Tag('Mockito', '#5a7581');
    static readonly LOMBOK = new Tag('Lombok', '#5a7581');

    // Python Ecosystem
    static readonly PYTHON = new Tag('Python', '#4a6a77');
    static readonly FLASK = new Tag('Flask', '#4a6a77');
    static readonly FASTAPI = new Tag('FastAPI', '#4a6a77');
    static readonly PYTEST = new Tag('Pytest', '#4a6a77');
    static readonly PANDAS = new Tag('Pandas', '#4a6a77');
    static readonly SQLALCHEMY = new Tag('SQLAlchemy', '#4a6a77');
    static readonly PLOTLY = new Tag('Plotly', '#4a6a77');
    static readonly DASH = new Tag('Dash', '#4a6a77');
    static readonly BEAUTIFULSOUP = new Tag('Beautiful Soup', '#4a6a77');
    static readonly DJANGO = new Tag('Django', '#4a6a77');
    static readonly STREAMLIT = new Tag('Streamlit', '#4a6a77');
    static readonly PLAYWWRIGHT = new Tag('Playwright', '#4a6a77');
    static readonly SELENIUM = new Tag('Selenium Driver', '#4a6a77');
    static readonly PYDANTIC = new Tag('Pydantic', '#4a6a77');

    // ML / AI / CV / NLP
    static readonly NUMPY = new Tag('NumPy', '#2f6a77');
    static readonly SCIPY = new Tag('SciPy', '#2f6a77');
    static readonly SCIKITLEARN = new Tag('Scikit-Learn', '#2f6a77');
    static readonly TENSORFLOW = new Tag('TensorFlow', '#2f6a77');
    static readonly PYTORCH = new Tag('PyTorch', '#2f6a77');
    static readonly OPENCV = new Tag('OpenCV', '#2f6a77');
    static readonly TRANSFORMERS = new Tag('HuggingFace Transformers', '#2f6a77');
    static readonly SPACY = new Tag('spaCy', '#2f6a77');
    static readonly NLTK = new Tag('NLTK', '#2f6a77');
    static readonly MATPLOTLIB = new Tag('Matplotlib', '#2f6a77');
    static readonly SEABORN = new Tag('Seaborn', '#2f6a77');
    static readonly XGBOOST = new Tag('XGBoost', '#2f6a77');
    static readonly LIGHTGBM = new Tag('LightGBM', '#2f6a77');
    static readonly CATBOOST = new Tag('CatBoost', '#2f6a77');
    static readonly MLFLOW = new Tag('MLFlow', '#2f6a77');
    static readonly KERAS = new Tag('Keras', '#2f6a77');
    static readonly TORCHVISION = new Tag('Torchvision', '#2f6a77');
    static readonly TENSORBOARD = new Tag('TensorBoard', '#2f6a77');
    static readonly HUGGINGFACE = new Tag('HuggingFace', '#2f6a77');
    static readonly BERT = new Tag('BERT', '#2f6a77');
    static readonly GPT = new Tag('GPT', '#2f6a77');
    static readonly SENTENCE_TRANSFORMERS = new Tag('SentenceTransformers', '#2f6a77');
    static readonly YOLO = new Tag('YOLO', '#2f6a77');
    static readonly DETECTRON2 = new Tag('Detectron2', '#2f6a77');
    static readonly MEDIAPIPE = new Tag('MediaPipe', '#2f6a77');
    static readonly TRANSFER_LEARNING = new Tag('Transfer Learning', '#2f6a77');
    static readonly ENSEMBLE_LEARNING = new Tag('Ensemble Learning', '#2f6a77');
    static readonly NLP = new Tag('Natural Language Processing', '#2f6a77');
    static readonly CV = new Tag('Computer Vision', '#2f6a77');



    // Backend/Infra Tools
    static readonly RESTAPI = new Tag('Rest API', '#355158');
    static readonly INSOMNIA = new Tag('Insomnia', '#355158');
    static readonly POSTMAN = new Tag('Postman', '#355158');
    static readonly JDBC = new Tag('JDBC', '#355158');
    static readonly JPA = new Tag('JPA', '#355158');
    static readonly POSTGRESQL = new Tag('PostgreSQL', '#355158');
    static readonly SQLITE = new Tag('SQLite', '#355158');
    static readonly DOCKER = new Tag('Docker', '#355158');
    static readonly DOCKERCOMPOSE = new Tag('Docker Compose', '#355158');

    static readonly MONGODB = new Tag('MongoDB', '#355158');
    static readonly REDIS = new Tag('Redis', '#355158');
    static readonly MYSQL = new Tag('MySQL', '#355158');
    static readonly DYNAMODB = new Tag('DynamoDB', '#355158');
    static readonly FIREBASE = new Tag('Firebase', '#355158');

    // System / Tools
    static readonly NUITKA = new Tag('Nuitka', '#457189');
    static readonly LINUX = new Tag('Linux', '#457189');
    static readonly GOLANG = new Tag('Golang', '#457189');
    static readonly RABBITMQ = new Tag('RabbitMQ', '#457189');
    static readonly PYSIDE = new Tag('PySide6', '#457189');
    static readonly GIT = new Tag('Git', '#457189');
    static readonly MARKDOWN = new Tag('Markdown', '#457189');
    static readonly YAML = new Tag('YAML', '#457189');
    static readonly JSON = new Tag('JSON', '#457189');
    static readonly BASH = new Tag('Bash', '#457189');
    static readonly ZSH = new Tag('Zsh', '#457189');


    private constructor(private readonly key: string, public readonly color: string) {
    }

    toString() {
        return this.key;
    }

}