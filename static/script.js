document.addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.getElementById('calculateBtn');
    calculateBtn.addEventListener('click', () => {
        let totalCost;
        const materialCost = parseFloat(document.getElementById('materialCost').value);
        const modelWeight = parseFloat(document.getElementById('modelWeight').value);
        const printTime = parseFloat(document.getElementById('printTime').value);
        const printerWattage = parseFloat(document.getElementById('printerWattage').value);
        const electricityCost = parseFloat(document.getElementById('electricityCost').value);
        if (isNaN(printTime) || isNaN(printerWattage) || isNaN(electricityCost)) {
            totalCost = (materialCost/1000) * modelWeight;
        }
        else{
            totalCost= (materialCost/1000) * modelWeight+(((printTime * printerWattage)/1000) * electricityCost);
        }
        // alert(`Total cost: ₹${totalCost.toFixed(2)}`);
        document.getElementById('totalCostValue').textContent = `₹${totalCost.toFixed(2)}`;
    });

    const resetBtn = document.getElementById('resetBtn');
    resetBtn.addEventListener('click', () => {
        document.getElementById('materialCost').value = '';
        document.getElementById('modelWeight').value = '';
        document.getElementById('printTime').value = '';
        document.getElementById('printerWattage').value = '';
        document.getElementById('electricityCost').value = '';
        document.getElementById('totalCostValue').textContent = '₹0.00';
    });

    const serviceWorkerRegistration = () => {
        navigator.serviceWorker.register('/static/service-worker.js').then(reg => {
            reg.onupdatefound = () => {
                const newWorker = reg.installing;
                newWorker.onstatechange = () => {
                    if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                        console.log("New version available. Forcing update.");
                        newWorker.postMessage({ action: 'skipWaiting' });
                    }
                };
            };
        });
        navigator.serviceWorker.addEventListener('controllerchange', () => window.location.reload());
    };
    if ('serviceWorker' in navigator) setInterval(serviceWorkerRegistration, 5000);
});