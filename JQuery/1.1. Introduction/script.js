$(document).ready(() => {
  const $menuButton = $('.menu-button');
  const $navDropdown = $('#nav-dropdown');
  const $loginButton = $('.login-button');
  const $loginForm = $('.login-form');

  $menuButton.on('click', () => {
    $navDropdown.show();
  })
  
  $navDropdown.on('mouseleave', () => {
    $navDropdown.hide();
  })

  $loginButton.on('click', () => {
  $loginForm.toggle();
  })
})