document.getElementById('category').addEventListener('change', function() {
  var category = this.value;
  var services = document.getElementsByClassName('service');
  
  for (var i = 0; i < services.length; i++) {
    var service = services[i];
    var serviceCategory = service.getAttribute('data-category');
    
    if (category === 'all' || category === serviceCategory) {
      service.style.display = 'block';
    } else {
      service.style.display = 'none';
    }
  }
});
