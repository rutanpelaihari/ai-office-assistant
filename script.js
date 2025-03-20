document.getElementById('submitButton').addEventListener('click', sendRequest);

async function sendRequest() {
    const input = document.getElementById('inputText').value;
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = 'Memproses...';

    try {
        const response = await fetch('https://api.deepseek.com/v1/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer sk-9d19cc99934f4e72860918372940fa1b'
            },
            body: JSON.stringify({
                model: 'deepseek-coder', // Ganti dengan model yang sesuai
                prompt: input,
                max_tokens: 100
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        resultDiv.textContent = data.choices[0].text.trim();
    } catch (error) {
        resultDiv.textContent = 'Terjadi kesalahan: ' + error.message;
    }
}
