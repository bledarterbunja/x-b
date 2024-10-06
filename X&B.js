document.getElementById('phoneItem').addEventListener('click', function() {
  const phoneNumber = document.getElementById('phoneNumber').value;
  const numberToCopy = phoneNumber.replace('+', '').slice(-10); // Extract last 9 digits
  
  navigator.clipboard.writeText(numberToCopy).then(() => {
      const tooltip = document.getElementById('tooltipText');
      tooltip.textContent = 'Copied!';
      setTimeout(() => {
          tooltip.textContent = 'Phone';
      }, 2000);
  }).catch(err => {
      console.error('Error copying text: ', err);
  });
});
//
document.getElementById('copy-phone').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    const phoneNumber = "044970581";
    
    navigator.clipboard.writeText(phoneNumber).then(() => {
        // Hide the phone icon
        const copyText = document.getElementById('copy-text');
        copyText.style.display = "none"; // Hide the phone icon
        
        // Show the "Copied!" text
        const copiedText = document.createElement('span');
        copiedText.textContent = "Copied!";
        copiedText.classList.add('copied'); // Add a class for styling if needed
        document.getElementById('copy-phone').appendChild(copiedText); // Add the "Copied!" text
  
        // Optionally, revert back after a few seconds
        setTimeout(() => {
            copyText.style.display = ""; // Show the phone icon again
            copiedText.remove(); // Remove the "Copied!" text
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
  });