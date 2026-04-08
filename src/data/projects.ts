export interface Project {
  slug: string
  title: string
  subtitle: string
  points: string[]
  tags: string[]
  links: Record<string, string>
  description: string
  images: string[]
}

export const projects: Project[] = [
  {
    slug: 'tau-supersymmetry-search',
    title: 'Tau Supersymmetry Search',
    subtitle: 'Boosted Decision Trees | Neural Networks',
    points: [
      'Developed a supervised ML pipeline for multiclass classification with MLflow',
      'Trained and optimized classifiers with Optuna tuning',
      'Implemented ML-based regions construction and statistical hypothesis testing',
    ],
    tags: ['Python', 'PyTorch', 'scikit-learn', 'MLflow', 'Optuna'],
    links: { repository: '#', notebook: '#', publication: '#' },
    description:
      'A comprehensive machine learning pipeline for searching for supersymmetric particles decaying into tau leptons at the LHC. The project involved developing multiclass classifiers to separate signal from various background processes, with full MLflow experiment tracking, hyperparameter optimization via Optuna, and statistical analysis using the CLs method for hypothesis testing.',
    images: [
      '/projects/supersymmetry/training_curves.png',
      '/projects/supersymmetry/classification_report.png',
      '/projects/supersymmetry/confusion_matrix.png',
      '/projects/supersymmetry/roc_curves.png',
      '/projects/supersymmetry/shap_importance.png',
      '/projects/supersymmetry/score_distributions.png',
    ],
  },
  {
    slug: 'tau-anomaly-detection',
    title: 'Tau Anomaly Detection',
    subtitle: 'Autoencoder | Variational Autoencoder',
    points: [
      'Developed an unsupervised ML pipeline for anomaly detection with W&B',
      'Trained and optimized models with Ray Tune tuning',
      'Implemented reconstruction error anomaly scoring and latent space analysis',
    ],
    tags: ['Python', 'PyTorch', 'Autoencoder', 'VAE', 'W&B', 'Ray Tune'],
    links: { repository: '#', notebook: '#' },
    description:
      'An unsupervised anomaly detection pipeline using autoencoders and variational autoencoders for identifying anomalous tau lepton signatures in particle physics data. The project uses W&B for experiment tracking, Ray Tune for hyperparameter optimization, and evaluates anomalies through reconstruction error scoring and latent space analysis.',
    images: [],
  },
  {
    slug: 'tau-energy-scale',
    title: 'Tau Energy Scale',
    subtitle: 'Mixture Density Network | Neural Networks',
    points: [
      'Developed a probabilistic regression model with uncertainty estimation',
      'Trained with Huber loss pretraining and NLL fine-tuning for density estimation',
      'Evaluated model performance with energy response and resolution histograms',
    ],
    tags: ['Python', 'PyTorch', 'MDN', 'Regression'],
    links: {},
    description:
      'A probabilistic approach to tau lepton energy calibration using Mixture Density Networks. The project focused on predicting not just the energy scale correction but also the associated uncertainty, using a combination of Huber loss for robust initial training and negative log-likelihood fine-tuning for the full probabilistic model.',
    images: [],
  },
  {
    slug: 'sphalerons-and-black-holes',
    title: 'Sphalerons and Black Holes',
    subtitle: 'Convolutional Neural Network | Boosted Decision Trees',
    points: [
      'Optimized high-capacity models to classify rare high-multiplicity LHC events',
      'Developed a pipeline mapping detector signals into three-layer event images',
      'Compared high-level features with raw pixel data to maximize signal sensitivity',
    ],
    tags: ['Python', 'TensorFlow', 'CNN', 'XGBoost'],
    links: { publication: '#', notebook: '#' },
    description:
      'Classification of rare sphaleron and black hole events at the LHC using both image-based CNNs and feature-based BDTs. The project involved transforming detector hit patterns into multi-layer images suitable for convolutional networks, and systematically comparing the performance of deep learning on raw pixel data versus traditional approaches using hand-crafted high-level features.',
    images: [],
  },
  {
    slug: 'di-tau-reconstruction',
    title: 'Di-Tau Reconstruction',
    subtitle: 'Software Development | Data Science',
    points: [
      'Engineered a C++ analysis framework for boosted di-tau reconstruction studies',
      'Benchmarked fixed & variable radius subjets to optimize reconstruction efficiency',
      'Evaluated diverse seed jet collections to establish baseline configurations',
    ],
    tags: ['C++', 'ROOT', 'Data Analysis'],
    links: { note: '#' },
    description:
      'A C++ analysis framework for studying the reconstruction of boosted di-tau systems at the LHC. The project systematically benchmarked different subjet algorithms (fixed vs variable radius) and seed jet collections to determine optimal configurations for identifying tau pairs from highly boosted parent particles.',
    images: [],
  },
  {
    slug: 'elementary-cells',
    title: 'Elementary Cells',
    subtitle: 'Software Development | Data Science',
    points: [
      'Developed an automated C++/Python/LabVIEW software for photomultiplier QA',
      'Analyzed array performance via noise, dark count and threshold measurements',
      'Explored ML-based particle identification for the LHCb RICH detector',
    ],
    tags: ['C++', 'Python', 'LabVIEW', 'Data Analysis'],
    links: { notebook: '#', publication: '#' },
    description:
      'An automated quality assurance system for the elementary cells of the LHCb RICH detector upgrade. The project covered the full chain from hardware testing (noise, dark count rate, threshold scans) to data analysis and visualization, with initial exploration of machine learning methods for particle identification.',
    images: [],
  },
]

export const linkLabels: Record<string, string> = {
  repository: 'Repository',
  notebook: 'Notebook',
  publication: 'Publication',
  note: 'Note',
}
