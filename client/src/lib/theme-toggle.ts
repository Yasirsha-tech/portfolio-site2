/**
 * Theme toggle utility functions
 */

export const setTheme = (theme: 'light' | 'dark') => {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
};

export const getTheme = (): 'light' | 'dark' => {
  if (typeof window === 'undefined') return 'light';
  
  if (localStorage.getItem('theme') === 'dark' || 
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    return 'dark';
  }
  
  return 'light';
};

export const toggleTheme = () => {
  const currentTheme = getTheme();
  setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  return currentTheme === 'dark' ? 'light' : 'dark';
};
