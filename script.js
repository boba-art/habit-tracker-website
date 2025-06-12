window.onload = function () {
    const container = document.getElementById('dayInputs');
    for (let i = 1; i <= 7; i++) {
        container.innerHTML += `
            <div>
                <label>Day ${i}: </label>
                <button class="day-button" onclick="setResponse(${i}, true)">✅ Yes</button>
                <button class="day-button" onclick="setResponse(${i}, false)">❌ No</button>
            </div>
        `;
    }
};

const responses = {};

function setResponse(day, didComplete) {
    responses[day] = didComplete;
}

function calculateResults() {
    const habit = document.getElementById("habitName").value.trim();
    let count = 0;
    for (let i = 1; i <= 7; i++) {
        if (responses[i]) count++;
    }
    const percent = ((count / 7) * 100).toFixed(1);
    document.getElementById("result").innerHTML = `
        You completed your habit <strong>"${habit}"</strong> on ${count}/7 days (${percent}%).
    `;
}
