export interface StackGroup {
  category: string
  items: string[]
}

export interface Project {
  slug: string
  title: string
  subtitle: string
  tagline: string
  points: string[]
  tags: string[] | StackGroup[]
  cardTags?: string[]
  links: Record<string, string>
  description: string
  images: (string | string[] | { images: string[]; direction: 'row' | 'col' })[]
}

export const projects: Project[] = [
  {
    slug: 'tau-supersymmetry-search',
    title: 'Tau Supersymmetry Search',
    subtitle: 'Boosted Decision Trees | Neural Networks',
    tagline: 'Supersymmetry search with taus using supervised machine learning. Built on Boosted Decision Trees and Deep Neural Networks. Isolates SUSY signatures from Standard Model backgrounds via multiclass classification.',
    points: [
      'Developed a supervised ML pipeline for multiclass classification with MLflow',
      'Trained and optimized classifiers with Optuna tuning',
      'Implemented ML-based regions construction and statistical hypothesis testing',
    ],
    tags: [
      { category: 'Language', items: ['Python'] },
      { category: 'Data Processing', items: ['uproot', 'awkward-array', 'NumPy', 'SciPy', 'pandas', 'Numba', 'Pandera'] },
      { category: 'Visualization', items: ['Matplotlib', 'Seaborn', 'Plotly'] },
      { category: 'Machine Learning', items: ['XGBoost', 'PyTorch', 'scikit-learn', 'Optuna', 'SHAP'] },
      { category: 'Infrastructure', items: ['Docker', 'uv', 'GitHub Actions'] },
      { category: 'Configuration & Tracking', items: ['Hydra', 'OmegaConf', 'DVC', 'MLflow'] },
      { category: 'Serving / API', items: ['FastAPI', 'Uvicorn', 'Pydantic'] },
      { category: 'Testing & QA', items: ['pytest', 'pytest-cov', 'mypy', 'Ruff', 'pre-commit'] },
      { category: 'Physics', items: ['pyhf', 'atlas-mpl-style'] },
    ],
    cardTags: ['Python', 'MLflow', 'XGBoost', 'PyTorch', 'Optuna', 'FastAPI'],
    links: {
      repository: 'https://github.com/islazykv/tau-supersymmetry-search',
      notebook: 'https://github.com/islazykv/tau-supersymmetry-search/blob/main/notebooks/00_overview.ipynb',
      publication: 'https://arxiv.org/abs/2507.00296',
    },
    description:
      'Supersymmetry search with tau leptons in CERN ATLAS data using supervised machine learning for multiclass classification of background and signal events.\n\nThis project implements a full ML pipeline — from raw data processing to signal region optimization — using XGBoost Boosted Decision Trees (BDTs) and PyTorch Deep Neural Networks (DNNs). Hyperparameter tuning is handled by Optuna, with experiment tracking managed through MLflow.\n\nThe models were trained on both background and signal events, allowing potential supersymmetry signatures to be isolated via multiclass classification. Unfortunately, no signals were observed in the experimental data.',
    images: [
      '/projects/supersymmetry/feature_distributions.png',
      '/projects/supersymmetry/training_curves.png',
      [
        '/projects/supersymmetry/feature_importance.png',
        '/projects/supersymmetry/shap_importance.png',
      ],
      '/projects/supersymmetry/classification_report.png',
      '/projects/supersymmetry/confusion_matrix.png',
      [
        '/projects/supersymmetry/roc_curves.png',
        '/projects/supersymmetry/pr_curves.png',
      ],
      '/projects/supersymmetry/score_distributions.png',
      '/projects/supersymmetry/significance_grid.png',
    ],
  },
  {
    slug: 'tau-anomaly-detection',
    title: 'Tau Anomaly Detection',
    subtitle: 'Autoencoder | Variational Autoencoder',
    tagline: 'Anomaly detection with taus using unsupervised machine learning. Built on Autoencoders and Variational Autoencoders. Flags anomalous tau signatures through reconstruction error scoring and latent space analysis.',
    points: [
      'Developed an unsupervised ML pipeline for anomaly detection with W&B',
      'Trained and optimized models with Ray Tune tuning',
      'Implemented reconstruction error anomaly scoring and latent space analysis',
    ],
    tags: [
      { category: 'Language', items: ['Python'] },
      { category: 'Data Processing', items: ['uproot', 'awkward-array', 'NumPy', 'SciPy', 'pandas', 'Pandera'] },
      { category: 'Visualization', items: ['Matplotlib', 'Seaborn'] },
      { category: 'Machine Learning', items: ['PyTorch', 'PyTorch Lightning', 'torchmetrics', 'torcheval', 'scikit-learn', 'Ray Tune'] },
      { category: 'Infrastructure', items: ['Docker', 'uv', 'GitHub Actions'] },
      { category: 'Configuration & Tracking', items: ['Hydra', 'OmegaConf', 'Weights & Biases'] },
      { category: 'Serving / API', items: ['FastAPI', 'Uvicorn', 'Pydantic'] },
      { category: 'Testing & QA', items: ['pytest', 'pytest-cov', 'mypy', 'Ruff', 'pre-commit'] },
      { category: 'Physics', items: ['atlas-mpl-style'] },
    ],
    cardTags: ['Python', 'W&B', 'PyTorch Lightning', 'Ray Tune', 'FastAPI'],
    links: {
      repository: 'https://github.com/islazykv/tau-anomaly-detection',
      notebook: 'https://github.com/islazykv/tau-anomaly-detection/blob/main/notebooks/00_overview.ipynb',
    },
    description:
      'Anomaly detection with tau leptons in CERN ATLAS data using unsupervised machine learning for the identification of signal events.\n\nThis project implements a full ML pipeline — from raw data processing to anomaly scoring — using PyTorch Autoencoders (AE) and Variational Autoencoders (VAE). Model training is managed with PyTorch Lightning, hyperparameter tuning with Ray Tune, and experiment tracking with Weights & Biases.\n\nTo evaluate the models\' capabilities, they are trained exclusively on background events, allowing signal mass points to be identified as anomalies via high reconstruction errors. If these initial tests prove promising, the models will be deployed on real experimental data.',
    images: [
      '/projects/anomaly/reconstruction_error.png',
      [
        '/projects/anomaly/roc_curve.png',
        '/projects/anomaly/sic_curve.png',
      ],
      '/projects/anomaly/per_feature_importance.png',
      '/projects/anomaly/single_event.png',
      '/projects/anomaly/feature_reconstruction.png',
      '/projects/anomaly/latent_distributions.png',
      '/projects/anomaly/tsne.png',
      {
        images: [
          '/projects/anomaly/mu_boxplot.png',
          '/projects/anomaly/logvar_boxplot.png',
        ],
        direction: 'col',
      },
      '/projects/anomaly/sampled_latent.png',
    ],
  },
  {
    slug: 'tau-energy-scale',
    title: 'Tau Energy Scale',
    subtitle: 'Mixture Density Network | Neural Networks',
    tagline: 'Tau energy calibration with uncertainty estimation using probabilistic deep learning. Predicts both the energy correction and its associated uncertainty.',
    points: [
      'Developed a probabilistic regression model with uncertainty estimation',
      'Trained with Huber loss pretraining and NLL fine-tuning for density estimation',
      'Evaluated model performance with energy response and resolution histograms',
    ],
    tags: [
      { category: 'Language', items: ['Python'] },
      { category: 'Data Processing', items: ['uproot', 'awkward-array', 'NumPy', 'SciPy', 'h5py'] },
      { category: 'Visualization', items: ['Matplotlib', 'Seaborn'] },
      { category: 'Machine Learning', items: ['TensorFlow', 'TensorFlow Probability', 'scikit-learn', 'Optuna'] },
      { category: 'Configuration & Tracking', items: ['OmegaConf', 'Pydantic'] },
      { category: 'Testing & QA', items: ['pytest'] },
    ],
    cardTags: ['Python', 'TensorFlow', 'Optuna'],
    links: {},
    description:
      'A probabilistic approach to tau lepton energy calibration using Mixture Density Networks, predicting both the energy scale correction and its associated uncertainty.\n\nThe model combines Huber loss for robust initial pretraining with negative log-likelihood fine-tuning for the full probabilistic density estimation. Hyperparameter optimization is performed with Optuna to find the best network architecture and training configuration.\n\nPerformance is evaluated through energy response and resolution histograms, comparing the MDN calibration against baseline approaches across different kinematic regions.',
    images: [],
  },
  {
    slug: 'sphalerons-and-black-holes',
    title: 'Sphalerons and Black Holes',
    subtitle: 'Convolutional Neural Network | Boosted Decision Trees',
    tagline: 'Sphaleron and black hole event search at the LHC using deep learning. Compares convolutional networks on raw detector images against decision trees on high-level features.',
    points: [
      'Optimized high-capacity models to classify rare high-multiplicity LHC events',
      'Developed a pipeline mapping detector signals into three-layer event images',
      'Compared high-level features with raw pixel data to maximize signal sensitivity',
    ],
    tags: [
      { category: 'Language', items: ['Python'] },
      { category: 'Data Processing', items: ['NumPy', 'pandas'] },
      { category: 'Visualization', items: ['Matplotlib', 'Seaborn'] },
      { category: 'Machine Learning', items: ['XGBoost', 'PyTorch', 'ResNet18', 'scikit-learn'] },
      { category: 'Simulation', items: ['Herwig 7', 'Delphes 3'] },
      { category: 'Physics', items: ['ROOT'] },
    ],
    cardTags: ['Python', 'XGBoost', 'PyTorch', 'ResNet18'],
    links: { publication: 'https://arxiv.org/abs/2310.15227' },
    description:
      'Search for sphaleron and black hole production at the LHC using deep learning for the classification of rare high-multiplicity events against Standard Model backgrounds.\n\nBuilt on simulated proton-proton collisions at 13 TeV, this project applies deep learning — from raw detector signals to event classification — using PyTorch ResNet18 Convolutional Neural Networks (CNNs) and XGBoost Boosted Decision Trees (BDTs).\n\nTo compare approaches, detector signals were mapped into multi-layer event images as CNN inputs, while BDTs were trained on both high-level reconstructed features and low-level observables. The image-based CNN achieved the strongest signal sensitivity, showing that deep learning can extract more information from raw detector data than traditional feature-based classifiers.',
    images: [
      '/projects/black_holes/distributions.png',
      '/projects/black_holes/confusion_matrices.png',
      '/projects/black_holes/exclusion_p-values.png',
    ],
  },
  {
    slug: 'di-tau-reconstruction',
    title: 'Di-Tau Reconstruction',
    subtitle: 'Software Development | Data Science',
    tagline: 'Boosted di-tau reconstruction studies at the LHC using a C++ analysis framework. Benchmarks subjet algorithms and seed jet collections to optimize reconstruction efficiency.',
    points: [
      'Engineered a C++ analysis framework for boosted di-tau reconstruction studies',
      'Benchmarked fixed & variable radius subjets to optimize reconstruction efficiency',
      'Evaluated diverse seed jet collections to establish baseline configurations',
    ],
    tags: [
      { category: 'Language', items: ['C++'] },
      { category: 'Framework', items: ['Athena', 'FastJet'] },
      { category: 'Data Processing', items: ['ROOT'] },
      { category: 'Simulation', items: ['MadGraph', 'Pythia8', 'EvtGen'] },
    ],
    cardTags: ['C++'],
    links: { note: 'https://islazykv.github.io/islazykv/pdfs/Di-Tau-Note.pdf' },
    description:
      'Boosted di-tau reconstruction studies at CERN ATLAS, focused on identifying optimal jet algorithms for highly collimated tau pairs produced in heavy resonance decays.\n\nBuilt in C++ on top of the ATLAS Athena framework, this project adapts the existing di-tau reconstruction configuration and leverages the FastJet library to cluster subjets inside large-radius jets.\n\nMultiple jet algorithms and reconstruction strategies are benchmarked across a range of working points and mass scales to identify the configuration that best captures tau decay products in densely populated, high-momentum regimes.',
    images: [
      '/projects/di_tau/distribution_seed_jet_pt.png',
      '/projects/di_tau/tight_efficiency_ditau_pt.png',
      '/projects/di_tau/tight_efficiency_delta_r.png',
    ],
  },
  {
    slug: 'elementary-cells',
    title: 'Elementary Cells',
    subtitle: 'Software Development | Data Science',
    tagline: 'Elementary Cell quality assurance for the LHCb RICH detector upgrade. Covers automated hardware testing across noise, dark count, and threshold measurements.',
    points: [
      'Developed an automated C++/Python/LabVIEW software for photomultiplier QA',
      'Analyzed array performance via noise, dark count and threshold measurements',
      'Explored ML-based particle identification for the LHCb RICH detector',
    ],
    tags: [
      { category: 'Language', items: ['C++', 'Python', 'LabVIEW'] },
      { category: 'Data Processing', items: ['NumPy', 'pandas'] },
      { category: 'Visualization', items: ['Matplotlib', 'Seaborn'] },
      { category: 'Machine Learning', items: ['scikit-learn'] },
      { category: 'Physics', items: ['ROOT'] },
    ],
    cardTags: ['C++', 'Python', 'pandas', 'Seaborn', 'scikit-learn'],
    links: {
      repository: 'https://github.com/islazykv/elementary-cells',
      publication: 'https://arxiv.org/abs/2110.00831',
    },
    description:
      'Elementary Cell quality assurance for the LHCb RICH detector upgrade at CERN, providing automated characterization of the new photon detection units.\n\nOriginally developed during my PhD and later rewritten as a pure Python analysis, the workflow reads raw measurement files, extracts mapping and measurement data, and produces calibration parameters and diagnostic plots.\n\nFour analyses characterize the Elementary Cell — covering Signal Induced Noise, DAC scans, Dark Count Rate, and Threshold scans — each producing 2D heatmaps and 1D histograms of the extracted parameters.',
    images: [
      [
        '/projects/elementary/sin_fraction_2d.png',
        '/projects/elementary/sin_fraction_1d.png',
      ],
      '/projects/elementary/sin_spectrum.png',
      [
        '/projects/elementary/dac_s_curve.png',
        '/projects/elementary/dac_noise.png',
      ],
      [
        '/projects/elementary/dcr_counts_2d.png',
        '/projects/elementary/dcr_counts_1d.png',
      ],
      [
        '/projects/elementary/working_point_2d.png',
        '/projects/elementary/working_point_1d.png',
      ],
      '/projects/elementary/threshold_spectrum.png',
      '/projects/elementary/logistic_regression.png',
    ],
  },
]

export const linkLabels: Record<string, string> = {
  repository: 'Repository',
  notebook: 'Notebook Showcase',
  publication: 'Publication',
  note: 'Note',
}
