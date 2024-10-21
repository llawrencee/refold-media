const allNavigationLinks = document.querySelectorAll('.navigation-link')

for (let i = 0; i < allNavigationLinks.length; i++) {
    allNavigationLinks[i].onclick = () => {
        for (let e = 0; e < allNavigationLinks.length; e++) {
            allNavigationLinks[e].classList.remove("active")
        }
        if (!allNavigationLinks[i].classList.contains("active")) {
            allNavigationLinks[i].classList.add("active")
        }
    }
}