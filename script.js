function openWindowWithSize(url, width, height) {
    if (!url) {
      alert('Please enter a website link.');
      return;
    }
  
    // Open a new window with the specified dimensions
    window.open(url, '_blank', `width=${width},height=${height},resizable=yes`);
  }
  
  // Event listeners for each button
  document.getElementById('button1').addEventListener('click', function() {
    var url = document.getElementById('urlInput').value;
    openWindowWithSize(url, 375, 812);
  });
  
  document.getElementById('button2').addEventListener('click', function() {
    var url = document.getElementById('urlInput').value;
    openWindowWithSize(url, 412, 869);
  });
  
  document.getElementById('button3').addEventListener('click', function() {
    var url = document.getElementById('urlInput').value;
    openWindowWithSize(url, 1024, 1366);
  });
  
  document.getElementById('button4').addEventListener('click', function() {
    var url = document.getElementById('urlInput').value;
    openWindowWithSize(url, 1920, 1080);
  });












// function checkDeviceCompatibility(width, height) {
//     var url = document.getElementById('urlInput').value;
//     if (!url) {
//       alert('Please enter a website link.');
//       return;
//     }
  
//     // Your logic here to test the website for the given dimensions.
//     console.log(`Checking compatibility for dimensions: ${width}x${height} for ${url}`);
//   }
  

//   document.getElementById('button1').addEventListener('click', function() {
//     checkDeviceCompatibility(375, 812);
//   });
  
//   document.getElementById('button2').addEventListener('click', function() {
//     checkDeviceCompatibility(412, 869);
//   });
  
//   document.getElementById('button3').addEventListener('click', function() {
//     checkDeviceCompatibility(1024, 1366);
//   });
  
//   document.getElementById('button4').addEventListener('click', function() {
//     checkDeviceCompatibility(1920, 1080);
//   });








// let inputLink = document.getElementById("input-link")

// button1.addEventLisener("click", function myf() {
//     let x = input.value
    
//     windows.size()
    
//     })


//     button2.addEventLisener("click", function myf() {
//         let x = input.value
        
//         windows.size()
        
//         })



//         button3.addEventLisener("click", function myf() {
//             let x = input.value
            
//             windows.size()
            
//             })



//             button4.addEventLisener("click", function myf() {
//                 let x = input.value
                
//                 windows.size(374)
                
//                 })





