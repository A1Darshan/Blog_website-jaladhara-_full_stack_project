// Simulating blog data fetching (In a real Django project, this would be fetched from the backend)
const blogs = [
    {
        title: 'How Climate Change Affects Water Scarcity',
        content: 'Climate change is intensifying the water crisis in many regions. Learn how water-efficient techniques can mitigate the effects.',
        tags: 'Climate Change, Water Efficiency'
    },
    {
        title: 'The Role of Trees in Combating Climate Change',
        content: 'Planting trees is one of the most efficient ways to capture carbon dioxide from the atmosphere. Discover how trees help fight climate change.',
        tags: 'Climate Change, Environment'
    },
    {
        title: 'Renewable Energy and Climate Change',
        content: 'Transitioning to renewable energy sources is crucial in the fight against climate change. Find out more about the role of solar and wind energy.',
        tags: 'Climate Change, Renewable Energy'
    }
];

// Function to load blogs into the container
function loadBlogs() {
    const blogsContainer = document.getElementById('blogs-container');

    blogs.forEach(blog => {
        // Create blog card elements
        const blogCard = document.createElement('div');
        blogCard.className = 'blog-card';

        const blogTitle = document.createElement('h2');
        blogTitle.innerText = blog.title;

        const blogContent = document.createElement('p');
        blogContent.innerText = blog.content;

        const blogTags = document.createElement('div');
        blogTags.className = 'tags';
        blogTags.innerText = `Tags: ${blog.tags}`;

        // Append elements to the blog card
        blogCard.appendChild(blogTitle);
        blogCard.appendChild(blogContent);
        blogCard.appendChild(blogTags);

        // Append blog card to the container
        blogsContainer.appendChild(blogCard);
    });
}

// Load blogs when the page is loaded
window.onload = loadBlogs;
