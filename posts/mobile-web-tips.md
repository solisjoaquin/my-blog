---
title: "Basic Design Considerations for the Mobile Web"
date: "2023-08-09"
label: "UX"
---

### Small Screens

You don’t have as much screen real estate for mobile devices as you do for PCs and laptops. That means, normally, you’ll design for multiple screen sizes. Remember, you want to focus on a “mobile first” approach, which means you’ll design for the smallest mobile platforms and increase complexity from there.

A good process to follow would be:

- Group device types based on similar screen sizes and try to keep these groups to a manageable size.

- Define content and design adaption rules that enable you to make a clean layout on each group of devices.

- Adhere as closely to web standards (W3, Material Design, etc.) as possible.

### Prioritize the Primary Task

If we use a task-first approach, we can guarantee that you've got the main task upfront. Think of it as a measure of urgency for the task.

The app Shazam is an excellent example of how you prioritize the main task. Shazam identifies the music playing around you. It helps solve a problem that we can all relate to: how many times have you heard a great song on the radio, at a shop or bar but couldn't identify it? Often, you don't have much time to Shazam a song, and the app caters to this issue. The interface is pared back, with just one large button on the screen. The button is animated to show the user that it needs to be pressed, with a line of text saying, "Tap to Shazam." The app's main task is immediately apparent to anyone who uses it.

### Keep Navigation Simple

Keypads and touch screens don’t make for precise navigation like mice do—so try to:

- Prioritize navigation with the most common tasks at the top.

- Minimize the levels of navigation involved.

- Ensure the labels are clear and concise for navigation.

- Offer short-key access to different features.

- Remember to offer a minimum 10mm size for all buttons.

- Ensure that links are visually distinct and make it clear when users have activated them.

- Make it easy to “hand off” or swap between the mobile and desktop sites and keep task continuity between devices if possible.

- Offer navigation links in the footer of a page (if a mobile website) as well as a “back-to-top” function. This feature helps reduce scrolling fatigue, so users don’t have to scroll all the way back to the top. Also, screen readers (for blind users) need repeat footer links, so they have a forward motion path.

- Make sure “hamburger menus” (a menu icon with three horizontal lines) are visually distinct (don’t assume users know what they are). Use appropriate ARIA attributes to identify the hamburger menu for accessibility.

This isn't to say that you should never use a hamburger menu. Mobile gaming especially finds good uses for hamburger menus, but be aware of their strengths and weaknesses.

As always, test with your users to make sure your mobile menu is accessible.

### Keep Content to a Minimum

- Don’t overwhelm your users—respect the small screen space. Keep content to a minimum.

- Ensure content is universally supported on all devices, or avoid it.

- Make page descriptions and microcopy short, verb-oriented and concise.

### Reduce the Inputs Required from Users

The less the user has to fiddle with their phone, the more they’ll enjoy your mobile web or app. Consider how to:

- Offer alternative input mechanisms (video, voice, etc.).

- Minimize inputs in forms (you can always ask for more data when the user logs on to the desktop).

- Allow permanent sign-in (most smartphones are password- or fingerprint-protected, so this poses less risk than on the desktop).

- Keep scrolling to a minimum and ensure users only have to scroll in one direction.

### Remember That Mobile Connections Are Not Stable

Mobile connections can be a colossal pain in areas with patchy service. Don’t make things difficult for your users. Try to:

- Retain data, so you don’t lose it in a connection break.

- Minimize page size for rapid loading.

- Kill off ad networks and pop-ups on mobile sites which consume huge amounts of bandwidth and data.

- Keep images to a minimum and reduce the size of those images.

- Reduce the number of embedded images to a minimum (speeding up load times).

### Continuous Integrated Experiences

As users move between mobile and desktop, they will expect similar experiences. Remember to:

- Maintain continuity. If they log into your web store on mobile, they should be able to track orders and make purchases just like they would on the desktop.

- Maintain consistency. Offer the option to switch between mobile and desktop at will.

- Maintain brand. The look and feel of each version should be similar.
