"use strict"

const toggleBtn = document.querySelector(".NavigationToggle");
const navMobileContainer = document.querySelector(".NavigationContainer");
const navBar = document.querySelector(".NavigationBar");

toggleBtn.addEventListener("click", function(){
    navMobileContainer.classList.toggle("Active");
    navBar.classList.toggle("AddMargin")
  })

const learnMoreBtn = document.querySelector(".AboutCTA");
const modal = document.querySelector(".Modal");

learnMoreBtn.addEventListener("click", function(){
  modal.classList.add("Active");
})

modal.addEventListener("click", function() {
  modal.classList.remove("Active");
})