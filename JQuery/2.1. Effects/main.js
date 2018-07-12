// Introduction
// jQuery Effects are a group of methods in the jQuery library that are responsible for adding dynamic behavior to websites. You may have seen many of these effects on modern websites without even realizing it. For example, you are seeing jQuery Effects in action when drop-down menus slide into place or a warning message appears after entering an incorrect password.

// While adding dynamic behavior is possible using only JavaScript, the code to do so is somewhat long and confusing. The beauty of jQuery is how one or two lines of jQuery can replace long JavaScript code blocks.

// In this course, you'll learn how to make elements appear and disappear, fade in and out, and slide around the page. Let's get started!

// Click on some of the buttons on the website to the right. Test out the Menu and Login buttons, the arrows beneath each pair of shoes, and the shoe size buttons. Each button applies a different jQuery Effect!

$(document).ready(() => {
  $('.menu-button').on('click',() => {
    $('#nav-dropdown').slideToggle('slow');
  });
  
  $(".login-button").on("click", () => {
    $(".login-form").slideToggle();
  });
  
  $(".arrow-one").on("click", () => {
    $(".shoe-details-one").toggle();
  });
  
  $(".sizes-one").on("click", () => {
    $(".text-one").fadeIn(1000);
  });
  
  $(".arrow-two").on("click", () => {
    $(".shoe-details-two").toggle();
  });
  
  $(".sizes-two").on("click", () => {
    $(".text-two").fadeIn();
  });
  
  $(".arrow-three").on("click", () => {
    $(".shoe-details-three").toggle();
  });
  
  $(".sizes-three").on("click", () => {
    $(".text-three").fadeIn(1000);
  });
  
});

// ------------------------------------------------------------
// .hide()
// The first tool you will add to your jQuery effects tool belt is the .hide() method. When you hide an element, your browser will render the HTML as if the hidden element does not exist. It will disappear from the page and the space that it was taking up will disappear as well. Take a look at the code below to learn how to use the .hide() method:

$('.hide-arrow').on('click', () => {
  $('.shoe-information').hide();
});
// In the example above, the event handler gets triggered whenever an element with a class of hide-arrow is clicked. That element could be a button, some text, an image, or any other HTML element. When the event is triggered, we target all elements of the class shoe-information and call .hide() on them. Check out the gif below to see an example.

// Sample
$(document).ready(() => {
  $('.hide-button').on('click', () => {
    $('.first-image').hide();
  });
});

// ------------------------------------------------------------
// .show()
// Now that we've learned how to hide elements on our page, we want to know how to make them reappear. Luckily, the .show() method does the opposite of .hide(). If an element on your page is hidden, .show() will make it appear.

$('.show-arrow').on('click', () => {
  $('.shoe-information-2').show();
});

// The code above should look similar to the code you wrote using .hide(). The only difference is that we are calling a different method on the targeted elements. This time we are calling the .show() method on the shoe's textual information.

// Sample
$(document).ready(() => {
  $('.hide-button').on('click', () => {
    $('.first-image').hide();
  });
  
  $('.show-button').on('click', () => {
    $('.first-image').show();
  });
  
});

// ------------------------------------------------------------
// .toggle()
// Great work! Our table now has two buttons that hide and show our image. But wouldn't it be nice to have one button do both? It is common for web pages to have one button that will either hide or show elements depending on their current state. We can achieve this by using the .toggle() method.

$('.toggle-button').on('click', () => {
  $('.shoe-information-3').toggle();
});
// In the above code we call the .toggle() method on elements of class shoe-information-3. If the information is visible, clicking the .toggle-button will hide it, as if the following code were run.

$('.toggle-button').on('click', () => {
  $('.shoe-information-3').hide();
});
// At the same time, if the shoe information is hidden, it will show itself as if the following code were run:

$('.toggle-button').on('click', () => {
  $('.shoe-information-3').show();
});

// Sample:
$(document).ready(() => {
  $('.hide-button').on('click', () => {
    $('.first-image').hide();
  });
  
  $('.show-button').on('click', () => {
    $('.first-image').show();
  });
  
  $('.toggle-button').on('click', () => {
    $('.first-image').toggle();
  });
  
});

// ------------------------------------------------------------
// fading
// Great work! In this exercise, you will learn about two new methods that are similar to .hide() and .show(). Take a look at the gif below:

// In this gif, the .fadeIn() method is called on an HTML element. Instead of instantly showing the element, .fadeIn() and .fadeOut() make the element appear or disappear over a given period of time. You can think of this as an animation. The transition between being visible and invisible happens over a duration of time.

// Both .fadeIn() and .fadeOut() take an optional parameter that specifies how long the animation will take. For example, in the code below, all <div> elements will fade out over a period of 1000 milliseconds (or one second).

$('div').fadeOut(1000);
// In the example above, the 1000 argument is optional; you don't need to put a number between the parentheses. This number represents the number of milliseconds it takes for the animation to complete. If no argument is given, the default animation duration is 400 milliseconds.

// Sample
$(document).ready(() => {
  $('.hide-button').on('click', () => {
    $('.first-image').hide();
  });
  
  $('.show-button').on('click', () => {
    $('.first-image').show();
  });
  
  $('.toggle-button').on('click', () => {
    $('.first-image').toggle();
  });
  
  $('.fade-out-button').on('click', () => {
    $('.fade-image').fadeOut(500);
  });
  
  $('.fade-in-button').on('click', () => {
    $('.fade-image').fadeIn(4000);
  });
  
});

// ------------------------------------------------------------
// .fadeToggle()
// Great work! With fade, our website is starting to look dynamic. .fadeToggle() is the third and final method in this trio of fade methods. This method is similar to .toggle(). If you call .fadeToggle() on an element that is invisible, it will fade in. And if the element is already visible, then .fadeToggle() will make it fade out.

// Like the other fade methods, .fadeToggle() can take an argument that sets the duration of the effect.

$('div').fadeToggle(1000);
// In the example above, all div elements will fade in or out over a period of 1000 milliseconds. Hidden div elements will fade in, and visible div elements will fade out.

$(document).ready(() => {
  $('.hide-button').on('click', () => {
    $('.first-image').hide();
  });
  
  $('.show-button').on('click', () => {
    $('.first-image').show();
  });
  
  $('.toggle-button').on('click', () => {
    $('.first-image').toggle();
  });
  
  $('.fade-out-button').on('click', () => {
    $('.fade-image').fadeOut(500);
  });
  
  $('.fade-in-button').on('click', () => {
    $('.fade-image').fadeIn(4000);
  });
  
  $('.fade-toggle-button').on('click', () => {
    $('.fade-image').fadeToggle('fast');
  });
});

// (http://api.jquery.com/fadetoggle/)

// ------------------------------------------------------------
// Sliding
// Have you ever been to a website and seen HTML elements slide into place? Many websites use this effect to show menus; you click on your profile image and a menu slides down revealing different settings and options that you can change. These sites are likely using jQuery sliding effects.

// By using sliding effects, an element on your web page will slide up or down into place instead of appearing or disappearing. Just like with the other effects, sliding can be applied to any element on your page whether it be an image, a video, or text.

// Sliding methods are animations; they happen over a period of time. As a result, sliding methods have an optional parameter to determine how long the animation will take.

$('.menu-button').on('click', () => {
  $('.menu-content').slideDown('slow');
});
// In the above code, we call the .slideDown() method on the elements of class menu-content whenever menu-button elements are clicked. The slow parameter determines the speed of the animation.

// There are two other sliding methods in jQuery Effects. Use the documentation to find their names and read about their usage. One is used to slide elements up, and the other is used to toggle sliding effects.
// (https://api.jquery.com/category/effects/)

// Sample
$(document).ready(() => {
  $('.hide-button').on('click', () => {
    $('.first-image').hide();
  });
  
  $('.show-button').on('click', () => {
    $('.first-image').show();
  });
  
  $('.toggle-button').on('click', () => {
    $('.first-image').toggle();
  });
  
  $('.fade-out-button').on('click', () => {
    $('.fade-image').fadeOut(500);
  });
  
  $('.fade-in-button').on('click', () => {
    $('.fade-image').fadeIn(4000);
  });
  
  $('.fade-toggle-button').on('click', () => {
    $('.fade-image').fadeToggle();
  });
  
  $('.up-button').on('click', () => {
    $('.slide-image').slideUp(100);
  });
  
  $('.down-button').on('click', () => {
    $('.slide-image').slideDown('slow');
  });
  
  $('.slide-toggle-button').on('click', () => {
    $('.slide-image').slideToggle(); // No arguement it will default to 400
  });
  
});

// ------------------------------------------------------------
// Review: Effects
// Wow! You've completed this table of 9 different jQuery effects. Great job! To review, the methods that we learned were:

// .hide()
// .show()
// .toggle()
// These methods instantly hide or show elements on a web page.

// .fadeOut()
// .fadeIn()
// .fadeToggle()
// These methods make elements disappear or appear over a given period of time.

// .slideUp()
// .slideDown()
// .slideToggle()
// These methods make elements slide up or down into place over a given period of time.

// Using these effects, you can make your web pages eye-catching and dynamic. And thanks to the magic of jQuery all of this can be done with very few lines of code!

// Sample
$(document).ready(() => {
  $('.hide-button').on('click', () => {
    $('.first-image').hide();
  });
  
  $('.show-button').on('click', () => {
    $('.first-image').show();
  });
  
  $('.toggle-button').on('click', () => {
    $('.first-image').toggle();
  });
  
  $('.fade-out-button').on('click', () => {
    $('.fade-image').fadeOut(500);
  });
  
  $('.fade-in-button').on('click', () => {
    $('.fade-image').fadeIn(4000);
  });
  
  $('.fade-toggle-button').on('click', () => {
    $('.fade-image').fadeToggle();
  });
  
  $('.up-button').on('click', () => {
    $('.slide-image').slideUp(100);
  });
  
  $('.down-button').on('click', () => {
    $('.slide-image').slideDown('slow');
  });
  
  $('.slide-toggle-button').on('click', () => {
    $('.slide-image').slideToggle();
  });
  
});

// Sample project is within the folder