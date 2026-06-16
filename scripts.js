* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Roboto', sans-serif;
    line-height: 1.6;
    background: url('fondo.jpg') no-repeat center center fixed;
    background-size: cover;
    color: #fff;
}

header {
    background-color: rgba(106, 27, 154, 0.8);
    color: #fff;
    padding: 1em 0;
    text-align: center;
}

header h1 {
    margin: 0;
}

header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

nav ul {
    list-style: none;
}

nav ul li {
    display: inline;
    margin: 0 10px;
}

nav ul li a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
}

nav ul li a:hover {
    text-decoration: underline;
}

main {
    padding: 2em 0;
    background-color: rgba(0, 0, 0, 0.5);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

main h2 {
    color: #e1bee7;
    margin-bottom: 1em;
    text-align: center;
}

.carousel {
    overflow: hidden;
    margin: 0 auto;
}

.carousel-slide {
    display: flex;
    transition: transform 0.8s ease-in-out;
}

.carousel-slide a {
    flex: 0 0 auto;
    margin-right: 20px;
    transition: transform 0.3s ease-in-out;
}

.carousel-slide img {
    width: 100%;
    height: auto;
    border-radius: 5px;
}

.anime-list {
    display: flex;
    justify-content: center;
}

.anime-table {
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
}

.bg-td {
    background: url('fondo.gif') no-repeat center center;
    background-size: cover;
    padding: 10px;
}

.anime {
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 15px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease-in-out;
    text-align: center;
}

.anime:hover {
    transform: scale(1.05);
}

.anime img {
    max-width: 100%;
    border-bottom: 1px solid #ddd;
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
}

footer {
    background-color: rgba(106, 27, 154, 0.8);
    color: #fff;
    text-align: center;
    padding: 1em 0;
    position: relative;
    bottom: 0;
    width: 100%;
}

footer .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

a {
    color: #e1bee7;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
