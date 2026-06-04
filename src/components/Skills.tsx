import { useState } from 'react'
import type { IconType } from 'react-icons'
import {
  SiPython, SiCplusplus, SiPostgresql, SiGnubash, SiLinux,
  SiGit, SiJupyter, SiPytest, SiAnaconda, SiUv,
  SiNumpy, SiPandas, SiScipy, SiPlotly,
  SiScikitlearn, SiPytorch, SiLightning,
  SiOptuna,
  SiMlflow, SiDocker, SiGithubactions, SiFastapi, SiWeightsandbiases, SiDvc,
  SiApachespark, SiDatabricks, SiDbt,
} from 'react-icons/si'
import { FaChartBar, FaProjectDiagram } from 'react-icons/fa'
import { VscAzure, VscGraphLine } from 'react-icons/vsc'
import { GiHydra } from 'react-icons/gi'
import { RxBarChart } from 'react-icons/rx'
import Section from './Section'

const skillCategories: { name: string; skills: { name: string; icon?: IconType; iconText?: string; url: string }[] }[] = [
  {
    name: 'Programming Languages & Tools',
    skills: [
      { name: 'Python', icon: SiPython, url: 'https://www.python.org' },
      { name: 'C++', icon: SiCplusplus, url: 'https://isocpp.org' },
      { name: 'SQL (PostgreSQL)', icon: SiPostgresql, url: 'https://www.postgresql.org' },
      { name: 'Bash', icon: SiGnubash, url: 'https://www.gnu.org/software/bash/' },
      { name: 'Linux', icon: SiLinux, url: 'https://www.linux.org' },
      { name: 'Git', icon: SiGit, url: 'https://git-scm.com' },
      { name: 'Jupyter', icon: SiJupyter, url: 'https://jupyter.org' },
      { name: 'pytest', icon: SiPytest, url: 'https://docs.pytest.org' },
      { name: 'uv', icon: SiUv, url: 'https://docs.astral.sh/uv/' },
      { name: 'conda', icon: SiAnaconda, url: 'https://docs.conda.io' },
    ],
  },
  {
    name: 'Data Processing & Visualization',
    skills: [
      { name: 'NumPy', icon: SiNumpy, url: 'https://numpy.org' },
      { name: 'pandas', icon: SiPandas, url: 'https://pandas.pydata.org' },
      { name: 'SciPy', icon: SiScipy, url: 'https://scipy.org' },
      { name: 'Matplotlib', icon: VscGraphLine, url: 'https://matplotlib.org' },
      { name: 'seaborn', icon: FaChartBar, url: 'https://seaborn.pydata.org' },
      { name: 'Plotly', icon: SiPlotly, url: 'https://plotly.com' },
    ],
  },
  {
    name: 'Machine Learning & Deep Learning',
    skills: [
      { name: 'scikit-learn', icon: SiScikitlearn, url: 'https://scikit-learn.org' },
      { name: 'XGBoost', iconText: 'XGB', url: 'https://xgboost.readthedocs.io' },
      { name: 'PyTorch', icon: SiPytorch, url: 'https://pytorch.org' },
      { name: 'PyTorch Lightning', icon: SiLightning, url: 'https://lightning.ai' },
    ],
  },
  {
    name: 'Tuning & Explainability',
    skills: [
      { name: 'Optuna', icon: SiOptuna, url: 'https://optuna.org' },
      { name: 'Ray Tune', icon: FaProjectDiagram, url: 'https://docs.ray.io/en/latest/tune/' },
      { name: 'SHAP', icon: RxBarChart, url: 'https://shap.readthedocs.io' },
    ],
  },
  {
    name: 'Data & ML Infrastructure',
    skills: [
      { name: 'Docker', icon: SiDocker, url: 'https://www.docker.com' },
      { name: 'GitHub Actions', icon: SiGithubactions, url: 'https://github.com/features/actions' },
      { name: 'FastAPI', icon: SiFastapi, url: 'https://fastapi.tiangolo.com' },
      { name: 'DVC', icon: SiDvc, url: 'https://dvc.org' },
      { name: 'MLflow', icon: SiMlflow, url: 'https://mlflow.org' },
      { name: 'W&B', icon: SiWeightsandbiases, url: 'https://wandb.ai' },
      { name: 'Hydra', icon: GiHydra, url: 'https://hydra.cc' },
    ],
  },
  {
    name: 'Currently Learning',
    skills: [
      { name: 'PySpark', icon: SiApachespark, url: 'https://spark.apache.org/docs/latest/api/python/' },
      { name: 'Databricks', icon: SiDatabricks, url: 'https://www.databricks.com' },
      { name: 'dbt', icon: SiDbt, url: 'https://www.getdbt.com' },
      { name: 'Azure', icon: VscAzure, url: 'https://azure.microsoft.com' },
    ],
  },
]

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <Section id="skills" title="Skills">
      <div className="flex flex-wrap justify-center mb-6 border-b border-border md:grid md:grid-cols-6">
        {skillCategories.map((cat, i) => (
          <button
            key={cat.name}
            onClick={() => setActiveTab(i)}
            className="relative px-4 py-2.5 text-sm font-medium transition-colors rounded-t-lg text-center cursor-pointer md:w-auto"
            style={{
              color: activeTab === i ? 'var(--theme-accent)' : 'var(--theme-text-muted)',
              backgroundColor: activeTab === i ? 'var(--theme-bg-card)' : 'transparent',
              borderBottom: activeTab === i ? '2px solid var(--theme-accent)' : '2px solid transparent',
            }}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div
        className="grid p-6 rounded-xl border border-border bg-bg-card"
        style={{ minHeight: '180px' }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 self-center">
          {skillCategories[activeTab].skills.map((skill) => {
            const Icon = skill.icon
            return (
              <a
                key={skill.name}
                href={skill.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 px-4 py-4 rounded-lg border border-border bg-bg-card hover:border-border-hover transition-colors text-center cursor-pointer"
                style={{ textDecoration: 'none' }}
              >
                {Icon ? (
                  <Icon size={58} style={{ color: 'var(--theme-accent)' }} />
                ) : skill.iconText ? (
                  <span style={{ fontSize: 48, fontWeight: 700, color: 'var(--theme-accent)', width: 58, height: 58, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{skill.iconText}</span>
                ) : null}
                <span className="text-sm font-medium text-heading">{skill.name}</span>
              </a>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
