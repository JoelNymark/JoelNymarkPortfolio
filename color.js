function color(color) {

    console.log(color);

    var currentTheme = document.documentElement.getAttribute("data-theme");

    console.log(currentTheme);

    document.documentElement.setAttribute('data-theme', color)
    localStorage.setItem('theme', color);
};




window.addEventListener('load', (event) => {
    const loader = document.getElementById("loader");
    loader.setAttribute("class","loader-hidden")
  });