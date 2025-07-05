 js
                    
  function togglePanel(panelId) {
    const panel = document.getElementById(panelId);
    const section = document.getElementById('productSection');
    const isOpen = !panel.classList.contains('hidden');
    document.querySelectorAll('#filterPanel, #searchPanel').forEach(p => p.classList.add('hidden'));
    if (!isOpen) {
      panel.classList.remove('hidden');
      section.classList.add('mt-64');
    } else {
      panel.classList.add('hidden');
      section.classList.remove('mt-64');
    }
  }

  document.getElementById('filterToggle').addEventListener('click', () => togglePanel('filterPanel'));
  document.getElementById('searchToggle').addEventListener('click', () => togglePanel('searchPanel'));
