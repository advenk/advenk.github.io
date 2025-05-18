import Navigation from '../../components/Navigation'

export default function FormulaPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-light mb-12 neon-text">Statistical Tests Summary with SPSS Commands</h1>

          <h2 className="text-2xl font-light mt-8 mb-4 neon-text">Parametric Tests</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-[var(--text-secondary)]">
              <thead className="bg-[var(--bg-secondary)]">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[var(--text-primary)] uppercase tracking-wider border-r border-[var(--text-secondary)]">Test</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[var(--text-primary)] uppercase tracking-wider border-r border-[var(--text-secondary)]">Use Case</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[var(--text-primary)] uppercase tracking-wider border-r border-[var(--text-secondary)]">Variables</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[var(--text-primary)] uppercase tracking-wider border-r border-[var(--text-secondary)]">Distribution</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[var(--text-primary)] uppercase tracking-wider">SPSS Command</th>
                </tr>
              </thead>
              <tbody className="bg-[var(--bg-primary)] divide-y divide-[var(--text-secondary)]">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap border-r border-[var(--text-secondary)]">One-sample t-test</td>
                  <td className="px-6 py-4 whitespace-nowrap border-r border-[var(--text-secondary)]">Compare sample mean to known value</td>
                  <td className="px-6 py-4 whitespace-nowrap border-r border-[var(--text-secondary)]">Continuous</td>
                  <td className="px-6 py-4 whitespace-nowrap border-r border-[var(--text-secondary)]">Normal</td>
                  <td className="px-6 py-4 whitespace-nowrap">Analyze > Compare Means > One-Sample T Test</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap border-r border-[var(--text-secondary)]">Independent t-test</td>
                  <td className="px-6 py-4 whitespace-nowrap border-r border-[var(--text-secondary)]">Compare two group means</td>
                  <td className="px-6 py-4 whitespace-nowrap border-r border-[var(--text-secondary)]">Continuous DV, Categorical IV (2 groups)</td>
                  <td className="px-6 py-4 whitespace-nowrap border-r border-[var(--text-secondary)]">Normal</td>
                  <td className="px-6 py-4 whitespace-nowrap">Analyze > Compare Means > Independent-Samples T Test</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap border-r border-[var(--text-secondary)]">Paired t-test</td>
                  <td className="px-6 py-4 whitespace-nowrap border-r border-[var(--text-secondary)]">Compare means of related groups</td>
                  <td className="px-6 py-4 whitespace-nowrap border-r border-[var(--text-secondary)]">Continuous</td>
                  <td className="px-6 py-4 whitespace-nowrap border-r border-[var(--text-secondary)]">Normal</td>
                  <td className="px-6 py-4 whitespace-nowrap">Analyze > Compare Means > Paired-Samples T Test</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap border-r border-[var(--text-secondary)]">ANOVA</td>
                  <td className="px-6 py-4 whitespace-nowrap border-r border-[var(--text-secondary)]">Compare more than two group means</td>
                  <td className="px-6 py-4 whitespace-nowrap border-r border-[var(--text-secondary)]">Continuous DV, Categorical IV (3+ groups)</td>
                  <td className="px-6 py-4 whitespace-nowrap border-r border-[var(--text-secondary)]">Normal</td>
                  <td className="px-6 py-4 whitespace-nowrap">Analyze > Compare Means > One-Way ANOVA</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-light mt-8 mb-4 neon-text">Non-Parametric Tests</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-[var(--text-secondary)]">
              <thead className="bg-[var(--bg-secondary)]">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[var(--text-primary)] uppercase tracking-wider border-r border-[var(--text-secondary)]">Test</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[var(--text-primary)] uppercase tracking-wider border-r border-[var(--text-secondary)]">Use Case</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[var(--text-primary)] uppercase tracking-wider border-r border-[var(--text-secondary)]">Variables</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[var(--text-primary)] uppercase tracking-wider border-r border-[var(--text-secondary)]">Distribution</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[var(--text-primary)] uppercase tracking-wider">SPSS Command</th>
                </tr>
              </thead>
              <tbody className="bg-[var(--bg-primary)] divide-y divide-[var(--text-secondary)]">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap border-r border-[var(--text-secondary)]">Wilcox signed rank one sample</td>
                  <td className="px-6 py-4 whitespace-nowrap border-r border-[var(--text-secondary)]">One sample</td>
                  <td className="px-6 py-4 whitespace-nowrap border-r border-[var(--text-secondary)]">Non-normal continous</td>
                  <td className="px-6 py-4 whitespace-nowrap border-r border-[var(--text-secondary)]">non-normal</td>
                  <td className="px-6 py-4 whitespace-nowrap"></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap border-r border-[var(--text-secondary)]">Mann-Whitney U</td>
                  <td className="px-6 py-4 whitespace-nowrap border-r border-[var(--text-secondary)]">Compare two independent groups</td>
                  <td className="px-6 py-4 whitespace-nowrap border-r border-[var(--text-secondary)]">Ordinal or non-normal Continuous</td>
                  <td className="px-6 py-4 whitespace-nowrap border-r border-[var(--text-secondary)]">Non-normal</td>
                  <td className="px-6 py-4 whitespace-nowrap">Analyze > Nonparametric Tests > Legacy Dialogs > 2 Independent Samples</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap border-r border-[var(--text-secondary)]">Wilcoxon Signed-Rank</td>
                  <td className="px-6 py-4 whitespace-nowrap border-r border-[var(--text-secondary)]">Compare two related groups</td>
                  <td className="px-6 py-4 whitespace-nowrap border-r border-[var(--text-secondary)]">Ordinal or non-normal Continuous</td>
                  <td className="px-6 py-4 whitespace-nowrap border-r border-[var(--text-secondary)]">Non-normal</td>
                  <td className="px-6 py-4 whitespace-nowrap">Analyze > Nonparametric Tests > Legacy Dialogs > 2 Related Samples</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-light mt-8 mb-4 neon-text">Categorical Data Tests</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-[var(--text-secondary)]">
              <thead className="bg-[var(--bg-secondary)]">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[var(--text-primary)] uppercase tracking-wider border-r border-[var(--text-secondary)]">Test</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[var(--text-primary)] uppercase tracking-wider border-r border-[var(--text-secondary)]">Use Case</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[var(--text-primary)] uppercase tracking-wider border-r border-[var(--text-secondary)]">Variables</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[var(--text-primary)] uppercase tracking-wider border-r border-[var(--text-secondary)]">Distribution</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[var(--text-primary)] uppercase tracking-wider">SPSS Command</th>
                </tr>
              </thead>
              <tbody className="bg-[var(--bg-primary)] divide-y divide-[var(--text-secondary)]">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap border-r border-[var(--text-secondary)]">Chi-Square</td>
                  <td className="px-6 py-4 whitespace-nowrap border-r border-[var(--text-secondary)]">Association between categorical variables</td>
                  <td className="px-6 py-4 whitespace-nowrap border-r border-[var(--text-secondary)]">Categorical</td>
                  <td className="px-6 py-4 whitespace-nowrap border-r border-[var(--text-secondary)]">N/A</td>
                  <td className="px-6 py-4 whitespace-nowrap">Analyze > Descriptive Statistics > Crosstabs</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap border-r border-[var(--text-secondary)]">Pearson Chi sq</td>
                  <td className="px-6 py-4 whitespace-nowrap border-r border-[var(--text-secondary)]">Compare two independent groups</td>
                  <td className="px-6 py-4 whitespace-nowrap border-r border-[var(--text-secondary)]">categorical</td>
                  <td className="px-6 py-4 whitespace-nowrap border-r border-[var(--text-secondary)]"></td>
                  <td className="px-6 py-4 whitespace-nowrap"></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap border-r border-[var(--text-secondary)]">Mcnemar</td>
                  <td className="px-6 py-4 whitespace-nowrap border-r border-[var(--text-secondary)]">Compare two repeated groups</td>
                  <td className="px-6 py-4 whitespace-nowrap border-r border-[var(--text-secondary)]">categorical</td>
                  <td className="px-6 py-4 whitespace-nowrap border-r border-[var(--text-secondary)]"></td>
                  <td className="px-6 py-4 whitespace-nowrap"></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap border-r border-[var(--text-secondary)]">Fisher's Exact</td>
                  <td className="px-6 py-4 whitespace-nowrap border-r border-[var(--text-secondary)]">Chi-square alternative for small samples</td>
                  <td className="px-6 py-4 whitespace-nowrap border-r border-[var(--text-secondary)]">Categorical</td>
                  <td className="px-6 py-4 whitespace-nowrap border-r border-[var(--text-secondary)]">N/A</td>
                  <td className="px-6 py-4 whitespace-nowrap">Analyze > Descriptive Statistics > Crosstabs > Exact</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-light mt-8 mb-4 neon-text">Regression</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-[var(--text-secondary)]">
              <thead className="bg-[var(--bg-secondary)]">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[var(--text-primary)] uppercase tracking-wider border-r border-[var(--text-secondary)]">Test</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[var(--text-primary)] uppercase tracking-wider border-r border-[var(--text-secondary)]">Use Case</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[var(--text-primary)] uppercase tracking-wider border-r border-[var(--text-secondary)]">Variables</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[var(--text-primary)] uppercase tracking-wider border-r border-[var(--text-secondary)]">Distribution</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[var(--text-primary)] uppercase tracking-wider">SPSS Command</th>
                </tr>
              </thead>
              <tbody className="bg-[var(--bg-primary)] divide-y divide-[var(--text-secondary)]">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap border-r border-[var(--text-secondary)]">Simple Linear Regression</td>
                  <td className="px-6 py-4 whitespace-nowrap border-r border-[var(--text-secondary)]">Predict continuous DV from 1 IV</td>
                  <td className="px-6 py-4 whitespace-nowrap border-r border-[var(--text-secondary)]">Continuous DV, Continuous IV</td>
                  <td className="px-6 py-4 whitespace-nowrap border-r border-[var(--text-secondary)]">Normal residuals</td>
                  <td className="px-6 py-4 whitespace-nowrap">Analyze > Regression > Linear</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap border-r border-[var(--text-secondary)]">Multiple Linear Regression</td>
                  <td className="px-6 py-4 whitespace-nowrap border-r border-[var(--text-secondary)]">Predict DV from multiple IVs</td>
                  <td className="px-6 py-4 whitespace-nowrap border-r border-[var(--text-secondary)]">Continuous DV, Multiple IVs</td>
                  <td className="px-6 py-4 whitespace-nowrap border-r border-[var(--text-secondary)]">Normal residuals</td>
                  <td className="px-6 py-4 whitespace-nowrap">Analyze > Regression > Linear</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap border-r border-[var(--text-secondary)]">Logistic Regression</td>
                  <td className="px-6 py-4 whitespace-nowrap border-r border-[var(--text-secondary)]">Predict categorical DV</td>
                  <td className="px-6 py-4 whitespace-nowrap border-r border-[var(--text-secondary)]">Categorical DV, any IVs</td>
                  <td className="px-6 py-4 whitespace-nowrap border-r border-[var(--text-secondary)]">N/A</td>
                  <td className="px-6 py-4 whitespace-nowrap">Analyze > Regression > Binary Logistic</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </main>
    </>
  )
} 