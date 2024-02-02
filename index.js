const hamburgerMenuButton = document.getElementById('hamburger-menu-button');
const closeSidebarButton = document.getElementById('close-sidebar-button');
const SideMenu = document.getElementById('side-menu');
const Searchbutton = document.getElementById('search-button');
const SearchLine = document.getElementById('search-line');

hamburgerMenuButton.addEventListener('click', () =>
{
    SideMenu.classList.add('side-menu-open');
});

closeSidebarButton.addEventListener('click', () =>
{
    SideMenu.classList.remove('side-menu-open');
});

Searchbutton.addEventListener('mouseover', () =>
{
    SearchLine.classList.add('search-line-open');
});
Searchbutton.addEventListener('click', () =>
{
    SearchLine.classList.add('search-line-open');
});

Searchbutton.addEventListener('mouseleave', () =>
{
    SearchLine.classList.remove('search-line-open');
}); 