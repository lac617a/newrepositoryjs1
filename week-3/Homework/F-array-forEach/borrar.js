function formatName(name) {
    return name.split("")[0].toUpperCase() + name.slice(1);
  }
  
  names.map(formatName).forEach(function(name, index) {
    console.log(index + ": " + name);
  });