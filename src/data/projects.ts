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
      { category: 'Visualisation', items: ['Matplotlib', 'Seaborn', 'Plotly'] },
      { category: 'Machine Learning', items: ['XGBoost', 'PyTorch', 'scikit-learn', 'Optuna', 'SHAP'] },
      { category: 'Infrastructure', items: ['Docker', 'uv', 'GitHub Actions'] },
      { category: 'Configuration & Reproducibility', items: ['Hydra', 'OmegaConf', 'DVC', 'MLflow'] },
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
      'Supersymmetry search with tau leptons in CERN ATLAS data using supervised machine learning for multiclass-classification of background and signal events.\n\nBuilt on ATLAS Run 2 & Run 3 data, this project implements a full ML pipeline — from ROOT ntuples to signal region optimization — using XGBoost Boosted Decision Trees (BDTs) and PyTorch Deep Neural Networks (DNNs).\n\nTo conduct this search, the models were trained on both background and signal events, allowing potential SUSY signatures to be isolated via multiclass classification. Unfortunately, no SUSY signals were observed in the experimental data.',
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
      { category: 'Visualisation', items: ['Matplotlib', 'Seaborn'] },
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
      'Anomaly detection with tau leptons in CERN ATLAS data using unsupervised machine learning for the identification of signal events.\n\nBuilt on ATLAS Run 2 & Run 3 data, this project implements a full ML pipeline — from ROOT ntuples to anomaly scoring — using PyTorch Autoencoders (AE) and Variational Autoencoders (VAE).\n\nTo initially evaluate the models\' capabilities, they are trained exclusively on background events, allowing signal mass points to be identified as anomalies via high reconstruction errors. If these initial tests prove promising, the models will be deployed on real experimental data.',
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
    tagline: 'Tau energy calibration with uncertainty estimation using probabilistic deep learning. Built on Mixture Density Networks. Predicts both the energy correction and its associated uncertainty.',
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
    tagline: 'Sphaleron and black hole event search at the LHC using deep learning. Built on Convolutional Neural Networks and Boosted Decision Trees. Compares raw detector images with high-level feature representations.',
    points: [
      'Optimized high-capacity models to classify rare high-multiplicity LHC events',
      'Developed a pipeline mapping detector signals into three-layer event images',
      'Compared high-level features with raw pixel data to maximize signal sensitivity',
    ],
    tags: ['Python', 'TensorFlow', 'CNN', 'XGBoost'],
    links: { publication: 'https://arxiv.org/abs/2310.15227' },
    description:
      'Classification of rare sphaleron and black hole events at the LHC using both image-based CNNs and feature-based BDTs. The project involved transforming detector hit patterns into multi-layer images suitable for convolutional networks, and systematically comparing the performance of deep learning on raw pixel data versus traditional approaches using hand-crafted high-level features.',
    images: [],
  },
  {
    slug: 'di-tau-reconstruction',
    title: 'Di-Tau Reconstruction',
    subtitle: 'Software Development | Data Science',
    tagline: 'Boosted di-tau reconstruction studies at the LHC using a C++ analysis framework. Benchmarks subjet algorithms and seed jet collections to optimise reconstruction efficiency.',
    points: [
      'Engineered a C++ analysis framework for boosted di-tau reconstruction studies',
      'Benchmarked fixed & variable radius subjets to optimize reconstruction efficiency',
      'Evaluated diverse seed jet collections to establish baseline configurations',
    ],
    tags: ['C++', 'ROOT', 'Data Analysis'],
    links: { note: 'https://islazykv.github.io/islazykv/pdfs/Di-Tau-Note.pdf' },
    description:
      'A C++ analysis framework for studying the reconstruction of boosted di-tau systems at the LHC. The project systematically benchmarked different subjet algorithms (fixed vs variable radius) and seed jet collections to determine optimal configurations for identifying tau pairs from highly boosted parent particles.',
    images: [],
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
      { category: 'Language', items: ['Python', 'C++', 'LabVIEW'] },
      { category: 'Data Processing', items: ['NumPy', 'pandas'] },
      { category: 'Visualisation', items: ['Matplotlib', 'Seaborn'] },
      { category: 'Machine Learning', items: ['scikit-learn'] },
      { category: 'Environment', items: ['Jupyter Notebook'] },
      { category: 'Physics', items: ['ROOT'] },
    ],
    cardTags: ['Python', 'C++', 'pandas', 'Matplotlib', 'scikit-learn', 'Jupyter'],
    links: {
      notebook: 'https://github.com/islazykv/elementary-cells',
      publication: 'https://arxiv.org/abs/2110.00831',
    },
    description:
      'Elementary Cell quality assurance for the LHCb RICH detector upgrade at CERN, providing automated characterisation of the new photon detection units.\n\nOriginally developed in Python/C++ with the CERN ROOT library during my PhD, the analysis was later rewritten in pure Python using NumPy, pandas, Matplotlib and Seaborn inside Jupyter notebooks. The workflow reads raw .txt measurement files, extracts the mapping and measurement data, and produces calibration parameters and diagnostic plots.\n\nFour analyses characterise the Elementary Cell — the new photon detection unit of the RICH detectors, built from Multi-Anode Photomultiplier Tubes (MaPMTs) and front-end electronics. These cover Signal Induced Noise (SIN), Digital-to-Analog Converter (DAC) scans, Dark Count Rate (DCR), and Threshold (THR) scans, each producing 2D heatmaps and 1D histograms of the extracted parameters.',
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
  notebook: 'Notebook',
  publication: 'Publication',
  note: 'Note',
}
