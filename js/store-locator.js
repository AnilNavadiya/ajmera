/* ==========================================================================
   AJMERA TRENDS - Store Locator Engine & Database
   ========================================================================== */

const ajmeraStores = [
  {
    id: 1,
    name: "Ajmera Trends - Flagship Surat",
    state: "Gujarat",
    city: "Surat",
    address: "Ring Road, Surat Textile Market, Surat, Gujarat - 395002",
    phone: "+91-6352177288",
    timing: "10:00 AM - 9:00 PM (All Days)",
    type: "Flagship Megastore",
    mapQuery: "Surat+Textile+Market+Gujarat"
  },
  {
    id: 2,
    name: "Ajmera Trends - Ahmedabad Mega Store",
    state: "Gujarat",
    city: "Ahmedabad",
    address: "C.G. Road, Navrangpura, Ahmedabad, Gujarat - 380009",
    phone: "+91-6352177288",
    timing: "10:30 AM - 9:30 PM",
    type: "Standard Store",
    mapQuery: "CG+Road+Ahmedabad+Gujarat"
  },
  {
    id: 3,
    name: "Ajmera Trends - Vadodara Store",
    state: "Gujarat",
    city: "Vadodara",
    address: "Alkapuri Main Road, Opp. Railway Station, Vadodara, Gujarat - 390007",
    phone: "+91-6352177288",
    timing: "10:00 AM - 9:00 PM",
    type: "Standard Store",
    mapQuery: "Alkapuri+Vadodara"
  },
  {
    id: 4,
    name: "Ajmera Trends - Rajkot Fashion Hub",
    state: "Gujarat",
    city: "Rajkot",
    address: "Yagnik Road, Imperial Palace Road, Rajkot, Gujarat - 360001",
    phone: "+91-6352177288",
    timing: "10:00 AM - 9:00 PM",
    type: "Express Store",
    mapQuery: "Yagnik+Road+Rajkot"
  },
  {
    id: 5,
    name: "Ajmera Trends - Mumbai Dadar",
    state: "Maharashtra",
    city: "Mumbai",
    address: "Ranade Road, Near Station, Dadar West, Mumbai, Maharashtra - 400028",
    phone: "+91-6352177288",
    timing: "10:30 AM - 9:30 PM",
    type: "Flagship Store",
    mapQuery: "Ranade+Road+Dadar+Mumbai"
  },
  {
    id: 6,
    name: "Ajmera Trends - Pune FC Road",
    state: "Maharashtra",
    city: "Pune",
    address: "Fergusson College Road, Shivajinagar, Pune, Maharashtra - 411004",
    phone: "+91-6352177288",
    timing: "10:00 AM - 9:30 PM",
    type: "Standard Store",
    mapQuery: "FC+Road+Pune"
  },
  {
    id: 7,
    name: "Ajmera Trends - Nagpur Mahal",
    state: "Maharashtra",
    city: "Nagpur",
    address: "Mahal Cloth Market, Central Nagpur, Maharashtra - 440032",
    phone: "+91-6352177288",
    timing: "10:00 AM - 9:00 PM",
    type: "Express Store",
    mapQuery: "Mahal+Nagpur"
  },
  {
    id: 8,
    name: "Ajmera Trends - Ahmednagar Store",
    state: "Maharashtra",
    city: "Ahmednagar",
    address: "Market Yard Road, Ahmednagar, Maharashtra - 414001",
    phone: "+91-6352177288",
    timing: "10:00 AM - 8:30 PM",
    type: "Standard Store",
    mapQuery: "Ahmednagar+Maharashtra"
  },
  {
    id: 9,
    name: "Ajmera Trends - Nandgaon Store",
    state: "Maharashtra",
    city: "Nandgaon",
    address: "Main Bazaar Road, Nandgaon, Nashik Dist, Maharashtra - 423106",
    phone: "+91-6352177288",
    timing: "10:00 AM - 8:30 PM",
    type: "Express Store",
    mapQuery: "Nandgaon+Maharashtra"
  },
  {
    id: 10,
    name: "Ajmera Trends - Patna Kankarbagh",
    state: "Bihar",
    city: "Patna",
    address: "Main Road, Kankarbagh Colony, Patna, Bihar - 800020",
    phone: "+91-6352177288",
    timing: "10:00 AM - 9:00 PM",
    type: "Flagship Store",
    mapQuery: "Kankarbagh+Patna+Bihar"
  },
  {
    id: 11,
    name: "Ajmera Trends - Purnia Line Bazaar",
    state: "Bihar",
    city: "Purnia",
    address: "Line Bazaar Chowk, Purnia, Bihar - 854301",
    phone: "+91-6352177288",
    timing: "10:00 AM - 8:30 PM",
    type: "Standard Store",
    mapQuery: "Line+Bazaar+Purnia"
  },
  {
    id: 12,
    name: "Ajmera Trends - Lucknow Hazratganj",
    state: "Uttar Pradesh",
    city: "Lucknow",
    address: "Hazratganj Main Market, Lucknow, Uttar Pradesh - 226001",
    phone: "+91-6352177288",
    timing: "10:30 AM - 9:00 PM",
    type: "Flagship Store",
    mapQuery: "Hazratganj+Lucknow"
  },
  {
    id: 13,
    name: "Ajmera Trends - Varanasi Godowlia",
    state: "Uttar Pradesh",
    city: "Varanasi",
    address: "Godowlia Crossing, Near Kashi Vishwanath, Varanasi, UP - 221001",
    phone: "+91-6352177288",
    timing: "10:00 AM - 9:00 PM",
    type: "Standard Store",
    mapQuery: "Godowlia+Varanasi"
  },
  {
    id: 14,
    name: "Ajmera Trends - Bangalore Jayanagar",
    state: "Karnataka",
    city: "Bangalore",
    address: "4th Block, 11th Main, Jayanagar, Bengaluru, Karnataka - 560011",
    phone: "+91-6352177288",
    timing: "10:00 AM - 9:30 PM",
    type: "Megastore",
    mapQuery: "Jayanagar+4th+Block+Bangalore"
  },
  {
    id: 15,
    name: "Ajmera Trends - Chitradurga Store",
    state: "Karnataka",
    city: "Chitradurga",
    address: "BD Road, Near Gandhi Circle, Chitradurga, Karnataka - 577501",
    phone: "+91-6352177288",
    timing: "10:00 AM - 9:00 PM",
    type: "Standard Store",
    mapQuery: "Chitradurga+Karnataka"
  },
  {
    id: 16,
    name: "Ajmera Trends - Jaipur MI Road",
    state: "Rajasthan",
    city: "Jaipur",
    address: "MI Road, Near Panch Batti, Jaipur, Rajasthan - 302001",
    phone: "+91-6352177288",
    timing: "10:30 AM - 9:00 PM",
    type: "Flagship Store",
    mapQuery: "MI+Road+Jaipur"
  },
  {
    id: 17,
    name: "Ajmera Trends - Indore Chhappan",
    state: "Madhya Pradesh",
    city: "Indore",
    address: "MG Road & 56 Dukan Area, Indore, Madhya Pradesh - 452001",
    phone: "+91-6352177288",
    timing: "10:00 AM - 9:00 PM",
    type: "Standard Store",
    mapQuery: "MG+Road+Indore"
  },
  {
    id: 18,
    name: "Ajmera Trends - Kolkata Gariahat",
    state: "West Bengal",
    city: "Kolkata",
    address: "Gariahat Crossing, Rashbehari Ave, Kolkata, West Bengal - 700019",
    phone: "+91-6352177288",
    timing: "10:30 AM - 9:00 PM",
    type: "Megastore",
    mapQuery: "Gariahat+Kolkata"
  },
  {
    id: 19,
    name: "Ajmera Trends - Chennai T. Nagar",
    state: "Tamil Nadu",
    city: "Chennai",
    address: "Ranganathan Street, T. Nagar, Chennai, Tamil Nadu - 600017",
    phone: "+91-6352177288",
    timing: "10:00 AM - 9:30 PM",
    type: "Flagship Store",
    mapQuery: "T+Nagar+Chennai"
  },
  {
    id: 20,
    name: "Ajmera Trends - Hyderabad Jubilee Hills",
    state: "Telangana",
    city: "Hyderabad",
    address: "Road No 36, Jubilee Hills, Hyderabad, Telangana - 500033",
    phone: "+91-6352177288",
    timing: "10:30 AM - 9:30 PM",
    type: "Megastore",
    mapQuery: "Jubilee+Hills+Hyderabad"
  }
];

document.addEventListener('DOMContentLoaded', function () {
  initStoreLocator();
});

function initStoreLocator() {
  const storeListContainer = document.getElementById('storeList');
  const stateSelect = document.getElementById('stateSelect');
  const searchInput = document.getElementById('storeSearchInput');
  const storeMapIframe = document.getElementById('storeMapIframe');

  if (!storeListContainer) return;

  // Populate States Dropdown
  const states = [...new Set(ajmeraStores.map(s => s.state))].sort();
  if (stateSelect) {
    states.forEach(state => {
      const opt = document.createElement('option');
      opt.value = state;
      opt.innerText = state;
      stateSelect.appendChild(opt);
    });
  }

  function renderStores(filteredList) {
    storeListContainer.innerHTML = '';

    if (filteredList.length === 0) {
      storeListContainer.innerHTML = `
        <div style="text-align: center; padding: 40px 20px; color: #888;">
          <i class="fas fa-store-slash" style="font-size: 2.5rem; margin-bottom: 12px; color: #ccc;"></i>
          <h4>No franchise stores found</h4>
          <p style="font-size: 0.85rem;">Try searching for a different city or state, or contact our team for franchise inquiries in this area.</p>
        </div>
      `;
      return;
    }

    filteredList.forEach((store, index) => {
      const card = document.createElement('div');
      card.className = `store-item-card ${index === 0 ? 'active' : ''}`;
      card.setAttribute('data-id', store.id);

      card.innerHTML = `
        <span class="store-item-badge">${store.type}</span>
        <h4>${store.name}</h4>
        <div class="store-item-address">
          <i class="fas fa-map-marker-alt" style="color: var(--primary); margin-top: 3px;"></i>
          <div>
            ${store.address}<br>
            <span style="color: #888; font-size: 0.78rem;"><i class="far fa-clock"></i> ${store.timing}</span>
          </div>
        </div>
        <div class="store-item-actions">
          <a href="tel:${store.phone}" class="btn btn-sm btn-outline-primary"><i class="fas fa-phone"></i> ${store.phone}</a>
          <a href="https://maps.google.com/?q=${encodeURIComponent(store.name + ' ' + store.address)}" target="_blank" class="btn btn-sm btn-secondary"><i class="fas fa-directions"></i> Directions</a>
        </div>
      `;

      card.addEventListener('click', function () {
        document.querySelectorAll('.store-item-card').forEach(c => c.classList.remove('active'));
        this.classList.add('active');
        updateMap(store);
      });

      storeListContainer.appendChild(card);
    });

    if (filteredList.length > 0) {
      updateMap(filteredList[0]);
    }
  }

  function updateMap(store) {
    if (storeMapIframe) {
      storeMapIframe.src = `https://maps.google.com/maps?q=${encodeURIComponent(store.name + ' ' + store.address)}&t=&z=14&ie=UTF8&iwloc=&output=embed`;
    }
  }

  function applyFilter() {
    const selectedState = stateSelect ? stateSelect.value : '';
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

    const filtered = ajmeraStores.filter(store => {
      const matchState = !selectedState || store.state === selectedState;
      const matchQuery = !query ||
        store.name.toLowerCase().includes(query) ||
        store.city.toLowerCase().includes(query) ||
        store.state.toLowerCase().includes(query) ||
        store.address.toLowerCase().includes(query);

      return matchState && matchQuery;
    });

    renderStores(filtered);
  }

  if (stateSelect) stateSelect.addEventListener('change', applyFilter);
  if (searchInput) searchInput.addEventListener('input', applyFilter);

  // Initial render
  renderStores(ajmeraStores);
}
