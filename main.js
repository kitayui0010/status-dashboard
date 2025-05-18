fetch('status.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('status-container');
    data.forEach(service => {
      const card = document.createElement('div');
      card.className = 'status-card';

      const name = document.createElement('div');
      name.className = 'service-name';
      name.textContent = service.name;

      const bar = document.createElement('div');
      bar.className = 'status-bar';
      service.history.forEach(st => {
        const dot = document.createElement('div');
        dot.className = 'status-dot ' + (st ? 'status-ok' : 'status-ng');
        bar.appendChild(dot);
      });

      const uptime = document.createElement('div');
      uptime.className = 'uptime';
      uptime.textContent = `稼働率: ${service.uptime}%`;

      card.appendChild(name);
      card.appendChild(bar);
      card.appendChild(uptime);
      container.appendChild(card);
    });
  });