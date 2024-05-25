document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.current--domain').forEach(domain => {
        domain.innerHTML = window.location.host
    })
})