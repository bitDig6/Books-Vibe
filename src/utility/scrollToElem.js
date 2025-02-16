const scrollToDiv = () => {
    const targetDiv = document.getElementById('books');
    
    targetDiv.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: "start"
    });
}

export { scrollToDiv };