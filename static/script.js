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
            totalCost= (materialCost/1000) * modelWeight+(((printTime * printerWattage )/1000)* electricityCost);
        }
        // alert(`Total cost: ₹${totalCost.toFixed(2)}`);
        document.getElementById('totalCostValue').textContent = `₹${totalCost.toFixed(2)}`;
    });
});