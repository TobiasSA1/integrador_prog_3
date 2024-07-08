document.addEventListener('DOMContentLoaded', () => {

    const menuToggle = document.querySelector('.menu-toggle');
    const sideMenu = document.querySelector('.side-menu');
    const menuOverlay = document.querySelector('.menu-overlay');

    function openMenu() {
        sideMenu.classList.add('active');
        menuOverlay.classList.add('active');
        menuToggle.setAttribute('hidden', 'true');
    }

    function closeMenu() {
        sideMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
        menuToggle.removeAttribute('hidden');

    }

    menuToggle.addEventListener('click', openMenu);

    menuOverlay.addEventListener('click', closeMenu);

    window.addEventListener('resize', function () {
        if (window.innerWidth >= 768) {
            closeMenu();
        }
    });
    
    const anuncios = [
        {
            titulo: 'Casa de Lujo en el Lago',
            descripcion: 'Casa en el lago con excelente vista, acabados de lujo a un excelente precio.',
            precio: '$3,000,000',
            imagen: './images/anuncio1.jpg',
            wc: 3,
            estacionamiento: 3,
            dormitorios: 4
        },
        {
            titulo: 'Casa Terminados de Lujo',
            descripcion: 'Casa con diseño moderno, así como tecnología inteligente y amueblada.',
            precio: '$2,000,000',
            imagen: './images/anuncio2.jpg',
            wc: 3,
            estacionamiento: 2,
            dormitorios: 3
        },
        {
            titulo: 'Casa con Piscina',
            descripcion: 'Casa con alberca y acabados de lujo en la ciudad, excelente oportunidad.',
            precio: '$1,000,000',
            imagen: './images/anuncio3.jpg',
            wc: 4,
            estacionamiento: 3,
            dormitorios: 4
        }
    ];

    const blogs = [
        {
            titulo: 'Terraza en el techo de tu casa',descripcion: 'Consejos para construir una terraza en el techo de tu casa con los mejores materiales y diseño.',
            fecha: '20/07/2024',
            autor: 'Admin',
            imagen: './images/blog1.jpg'
        },
        {
            titulo: 'Guía para la decoración de tu hogar',
            descripcion: 'Los mejores consejos y trucos para decorar tu hogar con estilo y personalidad.',
            fecha: '18/07/2024',
            autor: 'Admin',
            imagen: './images/blog2.jpg'
        },
        {
            titulo: 'Muebles que debes conocer',
            descripcion: 'Lista de muebles imprescindibles para tu casa que combinan funcionalidad y diseño.',
            fecha: '15/07/2024',
            autor: 'Admin',
            imagen: './images/blog3.jpg'
        }
    ];

    const anunciosContainer = document.getElementById('anuncios-container');
    const anunciosTemplate = document.getElementById('anuncio-template').content;
    anuncios.forEach(anuncio => {
        const anuncioElement = anunciosTemplate.cloneNode(true);
        anuncioElement.querySelector('img').src = anuncio.imagen;
        anuncioElement.querySelector('.card-title').textContent = anuncio.titulo;
        anuncioElement.querySelector('.card-text').textContent = anuncio.descripcion;
        anuncioElement.querySelector('.card-price').textContent = anuncio.precio;
        anuncioElement.querySelector('.wc').textContent = anuncio.wc;
        anuncioElement.querySelector('.estacionamiento').textContent = anuncio.estacionamiento;
        anuncioElement.querySelector('.dormitorios').textContent = anuncio.dormitorios;
        anunciosContainer.appendChild(anuncioElement);
    });

    const blogsContainer = document.getElementById('blogs-container');
    const blogsTemplate = document.getElementById('blog-template').content;
    blogs.forEach(blog => {
        const blogElement = blogsTemplate.cloneNode(true);
        blogElement.querySelector('img').src = blog.imagen;
        blogElement.querySelector('.card-title').textContent = blog.titulo;
        blogElement.querySelector('small strong').textContent = blog.autor;
        blogElement.querySelector('.text-body-secondary strong').textContent = blog.fecha;
        blogElement.querySelector('.card-text').textContent = blog.descripcion;
        blogsContainer.appendChild(blogElement);
    });
});