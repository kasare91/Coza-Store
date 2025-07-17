 
  const toggleFilter = document.getElementById('toggleFilter');
  const toggleSearch = document.getElementById('toggleSearch');
  const filterPanel = document.getElementById('filterPanel');
  const searchPanel = document.getElementById('searchPanel');

  toggleFilter.addEventListener('click', () => {
    filterPanel.classList.toggle('hidden');
    if (!searchPanel.classList.contains('hidden')) {
      searchPanel.classList.add('hidden');
    }
  });

  toggleSearch.addEventListener('click', () => {
    searchPanel.classList.toggle('hidden');
    if (!filterPanel.classList.contains('hidden')) {
      filterPanel.classList.add('hidden');
    }
  });
