export const PAGES = [
  {
    title: 'Tutorials',
      children: [
      {
        title: 'Python for Mathematics',
        children: [
          { title: 'SymPy',      dataFile: `${window.BASE}/content_pages/tutorials/python_with_mathematics/sympy/sympy_tutorials.json` },
          { title: 'Pandas',     dataFile: `${window.BASE}/content_pages/tutorials/python_with_mathematics/pandas/pandas_tutorials.json` },
          { title: 'Matplotlib', dataFile: `${window.BASE}/content_pages/tutorials/python_with_mathematics/matplotlib/matplotlib_tutorials.json` },
        ],
      },
    ],
  },
];